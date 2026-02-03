// server.js
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import initSqlJs from 'sql.js';
import nodemailer from 'nodemailer';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

// Cargar variables de entorno según el ambiente
const envFile = process.env.NODE_ENV === 'production' 
  ? '.env.production' 
  : '.env.development';

dotenv.config({ path: envFile });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de carpetas
const uploadsDir = path.join(__dirname, process.env.UPLOAD_DIR);
const pdfsDir = path.join(__dirname, 'pdfs_generados'); // PDFs generados
const dbPath = path.join(__dirname, 'registros.db');
const templatePath = path.join(__dirname, 'template.pdf'); // Template PDF

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

if (!fs.existsSync(pdfsDir)) {
  fs.mkdirSync(pdfsDir, { recursive: true });
}

// Middleware
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/uploads', express.static(uploadsDir));
app.use('/pdfs', express.static(pdfsDir)); // Servir PDFs generados

// Logging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Inicializar SQLite
let SQL;
let db;

async function initDatabase() {
  SQL = await initSqlJs();

  if (fs.existsSync(dbPath)) {
    const buffer = fs.readFileSync(dbPath);
    db = new SQL.Database(buffer);
    console.log('💾 Base de datos cargada desde archivo');
  } else {
    db = new SQL.Database();
    console.log('💾 Nueva base de datos creada');
  }

  db.run(`
    CREATE TABLE IF NOT EXISTS registrations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      institute TEXT NOT NULL,
      email TEXT NOT NULL,
      phone_number TEXT,
      role TEXT,
      nationality TEXT,
      recity TEXT,
      biography TEXT,
      linkedin TEXT,
      github TEXT,
      specific_needs TEXT,
      field_expertise TEXT,
      whish_skills TEXT,
      QC_skills TEXT,
      familiarity_QC_hardware TEXT,
      QC_language TEXT,
      first_hackathon TEXT,
      ia_skills TEXT,
      hackathon_experience TEXT,
      infomed_SDGs TEXT,
      aspart_team TEXT,
      team_name TEXT,
      team_size TEXT,
      team_names TEXT,
      topics_QC TEXT,
      SDG_goals TEXT,
      file_path TEXT NOT NULL,
      file_name TEXT NOT NULL,
      created_at DATETIME DEFAULT (datetime('now','localtime'))
    )
  `);

  saveDatabase();
}


// Función para guardar la base de datos en disco
function saveDatabase() {
  const data = db.export();
  const buffer = Buffer.from(data);
  fs.writeFileSync(dbPath, Buffer.from(db.export()));

}

// Configuración de Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: parseInt(process.env.MAX_FILE_SIZE) },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /pdf|doc|docx/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error('Solo se permiten archivos PDF, DOC o DOCX'));
    }
  }
});

// Configuración de Nodemailer
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Función para enviar email
async function sendNotificationEmail( data, uploadedFilePath, pdfPath = null, pdfFilename = null) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: `Nuevo Registro: ${data.name}`,
    html: `
      <h2>Nuevo registro recibido</h2>

      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Nombre:</strong> ${data.name}</p>
      <p><strong>Número de Teléfono:</strong> ${data.phone_number || 'N/A'}</p>
      <p><strong>Institución:</strong> ${data.institute}</p>
      <p><strong>Rol:</strong> ${data.role || 'N/A'}</p>
      <p><strong>Nacionalidad:</strong> ${data.nationality || 'N/A'}</p>
      <p><strong>Ciudad de Residencia:</strong> ${data.recity || 'N/A'}</p>
      <p><strong>Biografía:</strong> ${data.biography || 'N/A'}</p>
      <p><strong>LinkedIn:</strong> ${data.linkedin || 'N/A'}</p>
      <p><strong>GitHub:</strong> ${data.github || 'N/A'}</p>
      <p><strong>Necesidades Especiales:</strong> ${data.specific_needs || 'N/A'}</p>
      <p><strong>Campo de expertise:</strong> ${data.field_expertise || 'N/A'}</p>
      <p><strong>Habilidades que desea adquirir:</strong> ${data.whish_skills || 'N/A'}</p>
      <p><strong>Habilidades en QC:</strong> ${data.QC_skills || 'N/A'}</p>
      <p><strong>Tres temas de interes en QC:</strong> ${data.topics_QC || 'N/A'}</p>
      <p><strong>Hardware con el que esta familiarizado:</strong> ${data.familiarity_QC_hardware || 'N/A'}</p>
      <p><strong>Lenguaje de QC preferido:</strong> ${data.QC_language || 'N/A'}</p>
      <p><strong>¿Es su primer hackathon:</strong> ${data.first_hackathon || 'N/A'}</p>
      <p><strong>Habilidades en IA:</strong> ${data.ia_skills || 'N/A'}</p>
      <p><strong>Experiencia en Hackathones:</strong> ${data.hackathon_experience || 'N/A'}</p>
      <p><strong>Esta informado de los SDGs:</strong> ${data.infomed_SDGs || 'N/A'}</p>
      <p><strong>Esta en equipo:</strong> ${data.aspart_team || 'N/A'}</p>
      <p><strong>Nombre del equipo:</strong> ${data.team_name || 'N/A'}</p>
      <p><strong>Tamaño del equipo:</strong> ${data.team_size || 'N/A'}</p>
      <p><strong>Nombres de los miembros del equipo:</strong> ${data.team_names || 'N/A'}</p>
      <p><strong>Inereses en ODS:</strong> ${data.SDG_goals || 'N/A'}</p>
      <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' })}</p>
      <hr>
      <p><small>Ambiente: ${process.env.NODE_ENV}</small></p>
    `,
    attachments: [
      {
        filename: data.file_name,
        path: uploadedFilePath
      },
      ...(pdfPath ? [{
        filename: pdfFilename,
        path: pdfPath
      }] : [])
    ]
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Email enviado exitosamente');
    return true;
  } catch (error) {
    console.error('❌ Error al enviar email:', error.message);
    return false;
  }
}

// Función para generar PDF con datos del registro
async function generatePDF(registration) {
  try {
    // Verificar si existe el template
    if (!fs.existsSync(templatePath)) {
      console.warn('⚠️ Template PDF no encontrado, creando PDF básico');
    }

    // Cargar template PDF
    const templateBytes = fs.readFileSync(templatePath);
    const pdfDoc = await PDFDocument.load(templateBytes);

    // Obtener el formulario del PDF
    const form = pdfDoc.getForm();

    // Listar campos disponibles (útil para debugging)
    const fields = form.getFields();
    console.log('📋 Campos disponibles en el PDF template:');
    fields.forEach(field => {
      console.log(`  - ${field.getName()} (${field.constructor.name})`);
    });

    // Rellenar campos del formulario
    try {
      // Intenta rellenar campos comunes
      const fieldMappings = {
        'Text1': registration.email,  
        'Text2': registration.name,  
        'Text3': registration.phone_number,  
        'Text4': registration.institute,  
        'Text5': registration.role,  
        'Text6': registration.nationality,  
        'Text7': registration.recity,  
        'Text8': registration.biography,  
        'Text9': registration.linkedin,  
        'Text10': registration.github,  
        'Text11': registration.specific_needs,  
        'Text12': registration.field_expertise,  
        'Text13': registration.infomed_SDGs,  
        'Text14': registration.whish_skills,  
        'Text15': registration.QC_skills,  
        'Text16': registration.topics_QC,  
        'Text17': registration.familiarity_QC_hardware,  
        'Text18': registration.QC_language,  
        'Text19': registration.first_hackathon,  
        'Text20': registration.ia_skills,  
        'Text21': registration.hackathon_experience,  
        'Text22': registration.aspart_team,  
        'Text23': registration.team_name,  
        'Text24': registration.team_size,  
        'Text25': registration.team_names,  
        'Text26': registration.SDG_goals,  
       
      };

      console.log('🔄 INTENTANDO RELLENAR CAMPOS...');
      console.log('');
      
      let filledCount = 0;
      let notFoundCount = 0;
      const notFoundFields = [];

      // Intentar rellenar cada campo
      Object.keys(fieldMappings).forEach(fieldName => {
        try {
          const field = form.getTextField(fieldName);
          const value = fieldMappings[fieldName];
          field.setText(value);
          console.log(`  ✅ Campo "${fieldName}" → "${value}"`);
          filledCount++;
        } catch (e) {
          notFoundFields.push(fieldName);
          notFoundCount++;
        }
      });

      console.log('');
      console.log('📋 RESUMEN:');
      console.log(`  ✅ Campos rellenados: ${filledCount}`);
      console.log(`  ❌ Campos no encontrados: ${notFoundCount}`);
      
      if (notFoundFields.length > 0 && notFoundFields.length <= 10) {
        console.log('');
        console.log('❌ Campos intentados pero no encontrados:');
        notFoundFields.forEach(field => {
          console.log(`     - ${field}`);
        });
      }

      console.log('');
      console.log('💡 SUGERENCIA:');
      console.log('   Si ningún campo se rellenó, revisa los nombres exactos');
      console.log('   con el endpoint: /api/pdf-fields');
      console.log('═══════════════════════════════════════════════════');
      console.log('');

      // Aplanar el formulario (hacer campos no editables)
      form.flatten();

    } catch (error) {
      console.error('⚠️ Error al rellenar campos, continuando con PDF básico');
    }

    // Guardar y retornar PDF
    const pdfBytes = await pdfDoc.save();
    return Buffer.from(pdfBytes);

  } catch (error) {
    console.error('❌ Error generando PDF con template:', error);
    // Si falla, generar PDF básico
  }
}
const normalize = v => {
  if (v === undefined || v === null) return null;
  if (typeof v === 'string' && v.trim() === '') return null;
  return v;
};

// Endpoint de registro
app.post('/api/register', upload.single('file'), async (req, res) => {
  try {

     console.log('📦 Datos recibidos:', req.body);
    console.log('📎 Archivo recibido:', req.file ? req.file.originalname : 'NO HAY ARCHIVO');
    
    const {
      name,
      institute,
      email,
      phone_number,
      role,
      nationality,
      recity,
      biography,
      linkedin,
      github,
      specific_needs,
      field_expertise,
      whish_skills,
      QC_skills,
      familiarity_QC_hardware,
      QC_language,
      first_hackathon,
      ia_skills,
      hackathon_experience,
      infomed_SDGs,
      aspart_team,
      team_name,
      team_size,
      team_names,
      topics_QC,
      SDG_goals
    } = req.body;

    
    // Validaciones
    if (!name || !email ) {
      return res.status(400).json({
        error: 'Faltan campos obligatorios'
      });
    }

    if (!req.file) {
      return res.status(400).json({ error: 'Archivo requerido' });
    }


    // Guardar en SQLite
    const stmt = db.prepare(`
      INSERT INTO registrations (
        name,
        email,
        institute,
        phone_number,
        role,
        nationality,
        recity,
        biography,
        linkedin,
        github,
        specific_needs,
        field_expertise,
        whish_skills,
        QC_skills,
        familiarity_QC_hardware,
        QC_language,
        first_hackathon,
        ia_skills,
        hackathon_experience,
        infomed_SDGs,
        aspart_team,
        team_name,
        team_size,
        team_names,
        topics_QC,
        SDG_goals,
        file_path,
        file_name
      ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
    `);
    
    stmt.run([
      name,
      email,
      normalize(institute),
      normalize(phone_number),
      normalize(role),
      normalize(nationality),
      normalize(recity),
      normalize(biography),
      normalize(linkedin),
      normalize(github),
      normalize(specific_needs),
      normalize(field_expertise),
      normalize(whish_skills),
      normalize(QC_skills),
      normalize(familiarity_QC_hardware),
      normalize(QC_language),
      normalize(first_hackathon),
      normalize(ia_skills),
      normalize(hackathon_experience),
      normalize(infomed_SDGs),
      normalize(aspart_team),
      normalize(team_name),
      normalize(team_size),
      normalize(team_names),
      normalize(topics_QC),
      normalize(SDG_goals),
      req.file.path,
      req.file.originalname
    ]);


    stmt.free();

    // Obtener el ID del último insert
    const result = db.exec('SELECT last_insert_rowid() as id');
    const insertId = result[0].values[0][0];

    // Guardar base de datos en disco
    saveDatabase();

    console.log('💾 Guardado en BD con ID:', insertId);

    // Generar PDF automáticamente
    let pdfGenerated = false;
    let pdfUrl = null;
    let pdfFilename = null;
    
    try {
      const registration = {
        id: insertId,
        name,
        institute,
        email,
        phone_number,
        role,
        nationality,
        recity,
        biography,
        linkedin,
        github,
        specific_needs,
        field_expertise,
        whish_skills,
        QC_skills,
        familiarity_QC_hardware,
        QC_language,
        first_hackathon,
        ia_skills,
        hackathon_experience,
        infomed_SDGs,
        aspart_team,
        team_name,
        team_size,
        team_names,
        topics_QC,
        SDG_goals,
        created_at: new Date().toISOString()
      };

      console.log('📄 Generando PDF automáticamente...');
      const pdfBuffer = await generatePDF(registration);

      // Guardar PDF
      const sanitizedName = name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
      pdfFilename = `registro_${insertId}_${sanitizedName}_${Date.now()}.pdf`;
      const pdfPath = path.join(pdfsDir, pdfFilename);
      
      fs.writeFileSync(pdfPath, pdfBuffer);
      pdfUrl = `/pdfs/${pdfFilename}`;
      pdfGenerated = true;
      
      console.log('✅ PDF generado y guardado:', pdfFilename);
    } catch (pdfError) {
      console.error('⚠️ Error al generar PDF (continuando):', pdfError.message);
    }

    // Enviar notificación por email
    // Enviar notificación por email con ambos PDFs
const pdfPathForEmail = pdfGenerated ? path.join(pdfsDir, pdfFilename) : null;

const emailSent = await sendNotificationEmail(
  {
    name,
    institute,
    email,
    phone_number,
    role,
    nationality,
    recity,
    biography,
    linkedin,
    github,
    specific_needs,
    field_expertise,
    whish_skills,
    QC_skills,
    familiarity_QC_hardware,
    QC_language,
    first_hackathon,
    ia_skills,
    hackathon_experience,
    infomed_SDGs,
    aspart_team,
    team_name,
    team_size,
    team_names,
    topics_QC,
    SDG_goals,
    file_name: req.file.originalname
  }, 
  req.file.path,           // ← PDF subido por el usuario
  pdfPathForEmail,         // ← PDF generado (path completo)
  pdfFilename              // ← Nombre del PDF generado
);

    res.status(201).json({
      success: true,
      message: 'Registro guardado exitosamente',
      id: insertId,
      email_sent: emailSent,
      pdf_generated: pdfGenerated,
      pdf_url: pdfUrl,
      pdf_filename: pdfFilename
    });

  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({ error: 'Error al procesar el registro' });
  }
});

// Endpoint para generar PDF de un registro
app.get('/api/generate-pdf/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    // Obtener datos del registro
    const result = db.exec(`SELECT * FROM registrations WHERE id = ${id}`);
    
    if (!result || result.length === 0 || result[0].values.length === 0) {
      return res.status(404).json({ error: 'Registro no encontrado' });
    }

    const columns = result[0].columns;
    const values = result[0].values[0];
    const registration = {};
    columns.forEach((col, index) => {
      registration[col] = values[index];
    });

    console.log('📄 Generando PDF para:', registration.name);

    // Generar PDF
    const pdfBuffer = await generatePDF(registration);

    // Guardar PDF en carpeta pdfs_generados
    const sanitizedName = registration.name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const pdfFilename = `registro_${id}_${sanitizedName}_${Date.now()}.pdf`;
    const pdfPath = path.join(pdfsDir, pdfFilename);
    
    fs.writeFileSync(pdfPath, pdfBuffer);
    console.log('💾 PDF guardado en:', pdfPath);

    // Enviar PDF al navegador
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=${pdfFilename}`);
    res.send(pdfBuffer);

    console.log('✅ PDF generado y guardado exitosamente');

  } catch (error) {
    console.error('❌ Error al generar PDF:', error);
    res.status(500).json({ error: 'Error al generar PDF: ' + error.message });
  }
});

// Endpoint para ver los campos del PDF template (debugging)
app.get('/api/pdf-fields', async (req, res) => {
  try {
    if (!fs.existsSync(templatePath)) {
      return res.json({ 
        error: 'Template PDF no encontrado',
        path: templatePath 
      });
    }

    const templateBytes = fs.readFileSync(templatePath);
    const pdfDoc = await PDFDocument.load(templateBytes);
    const form = pdfDoc.getForm();
    
    const fields = form.getFields().map(field => ({
      name: field.getName(),
      type: field.constructor.name
    }));

    res.json({ 
      fields,
      templatePath,
      totalFields: fields.length
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint para listar PDFs generados
app.get('/api/pdfs', (req, res) => {
  try {
    const files = fs.readdirSync(pdfsDir)
      .filter(file => file.endsWith('.pdf'))
      .map(file => {
        const stats = fs.statSync(path.join(pdfsDir, file));
        return {
          filename: file,
          size: stats.size,
          created: stats.birthtime,
          url: `/pdfs/${file}`
        };
      })
      .sort((a, b) => b.created - a.created); // Más recientes primero

    res.json({ 
      total: files.length,
      pdfs: files 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint para obtener registros (opcional - para testing)
app.get('/api/registrations', (req, res) => {
  try {
    const result = db.exec('SELECT * FROM registrations ORDER BY created_at DESC');
    
    if (result.length === 0) {
      return res.json([]);
    }

    // Convertir resultado a formato JSON
    const columns = result[0].columns;
    const values = result[0].values;
    
    const registrations = values.map(row => {
      const obj = {};
      columns.forEach((col, index) => {
        obj[col] = row[index];
      });
      return obj;
    });

    res.json(registrations);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error al obtener registros' });
  }
});

// Endpoint de health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
    hasTemplate: fs.existsSync(templatePath)
  });
});

// Iniciar servidor
initDatabase().then(() => {
  app.listen(PORT, () => {
    console.log('');
    console.log('═══════════════════════════════════════════════════');
    console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`);
    console.log(`🌍 Ambiente: ${process.env.NODE_ENV}`);
    console.log(`📁 Archivos en: ${uploadsDir}`);
    console.log(`📄 PDFs generados en: ${pdfsDir}`);
    console.log(`💾 Base de datos: ${dbPath}`);
    console.log(`📧 Email configurado: ${process.env.EMAIL_USER}`);
    console.log(`📄 Template PDF: ${fs.existsSync(templatePath) ? '✅ Encontrado' : '❌ No encontrado'}`);
    console.log('═══════════════════════════════════════════════════');
    console.log('');
  });
}).catch(err => {
  console.error('❌ Error al inicializar base de datos:', err);
  process.exit(1);
});

// Manejo de errores no capturados
process.on('uncaughtException', (error) => {
  console.error('❌ Uncaught Exception:', error);
});

process.on('unhandledRejection', (error) => {
  console.error('❌ Unhandled Rejection:', error);
});

// Guardar DB al cerrar el servidor
process.on('SIGINT', () => {
  console.log('\n💾 Guardando base de datos antes de cerrar...');
  saveDatabase();
  db.close();
  console.log('👋 Servidor cerrado');
  process.exit(0);
});