import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLang = signal<'es' | 'en'>('es');

  toggleLang() {
    this.currentLang.set(this.currentLang() === 'es' ? 'en' : 'es');
  }

  get t() {
    return this.translations[this.currentLang()];
  }


  private translations: any = {
    es: {
      // NAV
      nav_home: 'Inicio',
      nav_req: 'Registro',
      nav_awards: 'Premios',
      nav_courses: 'Cursos',

      // HERO
      hero_tag: 'EVENTO INTERNACIONAL DE INNOVACIÓN',
      hero_title_1: 'HACKATHON',
      hero_subtitle: 'COMPUTO CUANTICO PARA LOS DESAFIOS DEL AGUA',
      hero_date: '29 JUN - 01 JUL, 2026 | PUEBLA, MÉXICO',
      time_d: 'Días', time_h: 'Horas', time_m: 'Min', time_s: 'Seg',
      hero_btn: 'REGISTRARTE',

      // ABOUT
      about_title: 'EL DESAFÍO',
      about_sub: 'Quantum Solutions for Water Challenges in Big Cities',
      about_desc: 'Las grandes ciudades enfrentan crisis hídricas. En el Hackathon 2026, utilizamos el poder de la Computación Cuántica para modelar soluciones hídricas',
      stat_stages: 'Etapas',
      stat_countries: 'Países',
      stat_days: 'Días',

      // TIMELINE
      time_title: 'Ruta al Hackathon',
      time_jan: 'FEB 2026', time_jan_t: 'Lanzamiento Oficial', time_jan_d: 'Rueda de prensa, presentación del comité y apertura de convocatoria',
      time_mar: 'MARZO', time_mar_t: 'Capacitación', time_mar_d: 'Cursos de Capacitación al QComputing impartidos por qBraid® y retos hídricos',
      time_apr: 'ABRIL', time_apr_t: 'Selección', time_apr_d: 'Evaluación de perfiles y conformación de equipos híbridos',
      time_may: 'MAYO', time_may_t: 'Bootcamps', time_may_d: 'Mentorías técnicas con expertos de la industria',
      time_event_date: '29 JUN - 01 JUL', time_event_t: 'HACKATHON LATAM 2026', time_event_d: '3 días de desarrollo intensivo (Llegada: 28 de Junio)',
      time_aug: 'AGOSTO', time_aug_t: 'Incubación', time_aug_d: 'Seguimiento a prototipos ganadores',

      // GALLERY
      gal_title: 'SEDE: PUEBLA',
      gal_1_t: 'Patrimonio Cultural', gal_1_d: 'Sede oficial del evento',
      gal_2_t: 'Innovación Urbana', gal_2_d: 'La metrópolis del futuro',
      gal_3_t: 'Visión Global', gal_3_d: 'Conectando talento internacional',
      gal_4_t: 'Hacia el futuro', gal_4_d: 'El futuro no se alcanza soñando, se conquista haciendo',
      btn_explore: 'EXPLORAR',

      // --- MENTORES (Secciones Divididas) ---
      speakers_title: 'LISTA TENTATIVA DE PONENTES',
      committee_title: 'COMITÉ ORGANIZADOR',
      judges_title: 'JUECES Y MENTORES POR DEFINIR',

      // --- SPONSORS (Secciones Divididas) ---
      org_title: 'ORGANIZAN',
      sponsors_title: 'IMPULSADO POR',

      // FOOTER
      foot_desc: 'Impulsando la innovación cuántica y soluciones hídricas',
      foot_explore: 'EXPLORA',
      foot_contact: 'CONTACTO',
      foot_contact_dir: 'Vicerrectoría de Investigación y Estudios de Posgrado (VIEP), BUAP',
      foot_follow: 'SÍGUENOS',
      foot_news: 'Recibe noticias:',
      foot_rights: 'Todos los derechos reservados',
      foot_privacy: 'Aviso de Privacidad',
      foot_terms: 'Términos y Condiciones',

      // REGISTRO & PREMIOS
      req_title: 'PERFIL DE INGRESO',
      req_title_2: 'El registro se cerrará el 31 de marzo de 2026',
      req_subtitle: 'Requisitos Obligatorios',
      req_subtitle_2: 'El registro es individual y obligatorio, una vez aprobados los cursos, el evento se realizará en equipos de 5 integrantes máximo.',
      req_1: 'Educacion superior (comprobable)',
      req_2: 'Residente en Latinoamérica',
      req_3: 'Mayor de 18 años',
      req_4: 'Carreras: Ciencias Exactas o Ingenierías',
      req_5: 'Conocimientos básicos de programación',
      req_6: 'Conocimientos básicos de Física',
      form_title: 'REGISTRO OFICIAL',

      lbl_email: 'Correo Electrónico',
      lbl_name: 'Nombre Completo',
      lbl_phone_number: 'Número de Teléfono',
      lbl_inst: 'Institución',
      lbl_role: 'Rol',
      lbl_nationality: 'Nacionalidad',
      lbl_recity: 'País de Residencia',
      lbl_biography: 'Biografía Breve',
      lbl_linkedin: 'Perfil de LinkedIn (link completo)',
      lbl_github: 'Perfil de GitHub (link completo)',
      lbl_specific_needs: 'Necesidades Especiales o requerimientos para el evento',
      lbl_field_expertise: 'Área de Especialización',
      lbl_infomed_SDGs: '¿Estás familiarizado con los Objetivos de Desarrollo Sostenible (ODS)?',
      lbl_whish_skills: '¿Que habilidades que deseas desarrollar en el evento?',
      lbl_QC_skills: '¿Que habilidades tienes en Quantum Computing?',
      lbl_topics_QC: '¿Qué tres temas de Computación Cuántica te interesan?',
      lbl_familiarity_QC_hardware: '¿Con que hardware de Quantum Computing te familiarizas?',
      lbl_QC_language: '¿Que lenguaje de programación cuántica es de tu preferencia?',
      lbl_first_hackathon: '¿Es este tu primer hackathon?',
      lbl_ia_skills: '¿Qué habilidades tienes en Inteligencia Artificial?',
      lbl_hackathon_experience: 'Describe brevemente tu experiencia en hackatones o proyectos relacionados.',
      lbl_aspart_team: '¿Participas como parte de un equipo?',
      lbl_team_name: 'Si lo estas, escribee el nombre del equipo',
      lbl_team_size: '¿Cuántas personas hay en tu equipo?',
      lbl_team_names: 'Nombres de los miembros del equipo',
      lbl_SDG_goals: '¿En cuál de los Objetivos de Desarrollo Sostenible (ODS) estaría más interesado en este proyecto? (Elija 2)',


      btn_upload: 'Comprobante de estudios con fotografía', 
      no_file: 'Ningún archivo seleccionado', 
      btn_send: 'ENVIAR SOLICITUD',
      award_title: 'RECONOCIMIENTOS',
      aw_1_title: 'Certificación OQI', aw_1_desc: 'Diploma oficial avalado por el Open Quantum Institute.',
      aw_2_title: 'Estancias Cuánticas', aw_2_desc: 'Oportunidad de estancias en empresas y escuelas con computadoras cuánticas reales',
      aw_3_title: 'Networking Global', aw_3_desc: 'Conexión directa con líderes del CERN y la industria.',

      // BIOS
      bio_olivia:'Olivia Maricela Barrón Cano es Directora del Departamento de Computación e Ingeniería Industrial en la UDEM y cuenta con más de tres décadas de experiencia en ciencias computacionales e inteligencia artificial. Tiene doctorado en IA con especialidad en Robótica por el Tecnológico de Monterrey y también colabora en Hera Diagnostics en proyectos de ciencia de datos y automatización en el sector salud.',
      bio_francisco:'Francisco Antonio Domínguez-Serna es Doctor en Ciencias en Física de Materiales por el CICESE, Investigador por México SECIHTI–CICESE y miembro del Sistema Nacional de Investigadoras e Investigadores nivel I; su investigación se centra en fotónica cuántica, óptica no lineal y arquitecturas fotónicas programables para el procesamiento de información y las comunicaciones cuánticas, con énfasis en la generación y control de luz no clásica, qubits fotónicos en distintos grados de libertad y circuitos fotónicos integrados; ha liderado y participado en proyectos nacionales de tecnologías cuánticas, dirigido estudiantes de licenciatura y posgrado, e impartido cursos y seminarios en información y computación cuántica.',
      bio_jimena:'Doctora en Ciencias de la Computación e investigadora del Sistema Nacional de Investigadores (SNI) nivel I, se desempeña como Profesora de Carrera en la Facultad de Ingeniería de la Universidad Nacional Autónoma de México; desde 2010 forma parte del Laboratorio Avanzado de Procesamiento de Imágenes, en 2022 recibió el Premio Nacional en Ciencia de Datos, su investigación se centra en técnicas de inteligencia artificial —especialmente aprendizaje profundo y cómputo cuántico— aplicadas a la visión computacional, y de 2019 a 2026 fue Coordinadora Académica del Centro de Estudios en Computación Avanzada de la UNAM, donde promovió la vinculación y actividades como escuelas de cómputo cuántico y seminarios en educación, inteligencia artificial y tecnologías cuánticas.',
      bio_boris:'Obtuvo el Doctorado en la Universidad Tecnológica de Eindhoven, Países Bajos, y actualmente es Profesor Titular en la Facultad de Ingeniería de la Universidad Nacional Autónoma de México, donde su área de investigación es la visión computacional y el aprendizaje automático cuántico; es autor o coautor de más de 160 artículos de investigación en revistas y memorias arbitradas internacionales, miembro del Sistema Nacional de Investigadores nivel II, ha recibido reconocimientos como la Distinción Universidad Nacional para Jóvenes Académicos en Docencia en Ciencias Exactas (1997) y el Premio Nacional de Ciencia de Datos (2021), y ha ocupado diversos cargos de gestión académica en la UNAM, entre ellos la Coordinación General del Centro de Estudios en Computación Avanzada de 2020 a 2026',
      bio_arturo:'Arturo Fernández estudió en la BUAP y obtuvo su Doctorado en Física en el CINVESTAV, donde trabajó en fenomenología del Modelo Estándar. Realizó una estancia posdoctoral en Fermilab-E791 analizando bariones encantados y sus decaimientos. Participó en la creación del Observatorio Pierre Auger, colaborando en el diseño de los detectores Cherenkov. Actualmente es miembro del experimento ALICE del CERN, donde trabaja en el sistema ALICE-FIT y en el análisis de datos del detector ALICE-ACORDE. Además, es miembro activo de la Sociedad Mexicana de Física y participa en actividades de divulgación científica. Junto con Guillermo Tejeda, es co-inventor del “Piano Cósmico”.',
      bio_karina:'Karina Garay Palmett es Investigadora Titular C en el Departamento de Óptica del CICESE y doctora en Ciencias en Óptica por la misma institución. Su investigación se centra en óptica e información cuántica, especialmente en la generación y control de luz no clásica y el desarrollo de fuentes cuánticas en fibras y guías integradas. Lidera un proyecto sobre circuitos fotónicos integrados para aplicaciones cuánticas. Es Premio Weizmann 2010, miembro del SNII (nivel II) y cuenta con amplia producción científica y trayectoria en formación de investigadores.',
      bio_ricardo:'Ricardo Villegas Tovar es gestor académico con más de veinte años de experiencia en propiedad intelectual, política científica y cooperación internacional. Se especializa en evaluación basada en evidencia, ciencia abierta e integridad de la investigación. Dirige el Centro de Educación Internacional de la BUAP y es candidato del Sistema Nacional de Investigadores.',
      bio_isabel: 'Isabel Pedraza es profesora de la Facultad de Ciencias Físico-Matemáticas de la Benemérita Universidad Autónoma de Puebla, y es una científica de nivel 2 del Sistema Nacional de Investigadores (SNI II). Su principal área de investigación es la búsqueda de Higgses cargados y Materia Oscura y el desarrollo de tecnologías para la detección de muones en el CMS (Solenoide Compacto de Muones) del LHC (Gran Colisionador de Hadrones) en el CERN (Laboratorio Europeo para la Investigación Nuclear). Actualmente es la líder adjunta del grupo de investigación de la BUAP en el CMS.',
      bio_christen: 'J. Jorge Christen es Ingeniero en Computación Cum Laude por la UNAM, con Maestría en Ingeniería Electrónica por el Instituto Internacional de Eindhoven y estudios en Negocios Internacionales por el ITAM. Cuenta con más de 40 años de experiencia en la industria tecnológica y más de 38 años en docencia de posgrado. Es especialista en Computación Cuántica certificado por el MIT, creador de la metodología ENSAR y del IQC-Kit, y actualmente se dedica a la consultoría y enseñanza en Computación Cuántica e Inteligencia Artificial.',
      bio_salvador: 'Salvador E. Venegas-Andraca es científico, consultor y emprendedor, pionero del cómputo cuántico en México. Es fundador y responsable del Unconventional Computing Lab, profesor de Ciencias Computacionales en el Tecnológico de Monterrey y profesor adjunto en la UNAM. Cuenta con un DPhil en Física y una MSc en Visión por Computadora por la Universidad de Oxford, además de un MBA y una licenciatura en Electrónica Digital y Computación. Es investigador líder en caminatas cuánticas y cofundador del área de Quantum Image Processing. Sus intereses incluyen algoritmos cuánticos, aprendizaje automático cuántico, ciberseguridad clásica y cuántica, y problemas NP-difíciles. Es autor y coautor de libros pioneros en estos campos y ha publicado más de 60 artículos científicos con más de 2,900 citas. Desde 2020, figura entre el 2 % de científicos más influyentes del mundo.',
      bio_enrique: 'Luis Enrique Morales Aguilar es Ingeniero Electrónico por la UNAM, Maestro en Ingeniería Electrónica y estudiante de Doctorado en la Facultad de Ciencias de la Electrónica (BUAP). Su trabajo se enfoca en electrónica de potencia, sistemas fotovoltaicos, medición de potencia y optimización del cosechamiento de energía. Cuenta con experiencia académica e industrial, así como publicaciones en congresos y revistas indexadas, y ha participado en estancias académicas internacionales. Actualmente se desempeña como profesor en la Facultad de Ciencias de la Computación (BUAP) y desarrolla investigación en diseño y caracterización de circuitos electrónicos aplicados a sistemas de energía en la Facultad de Ciencias de la Electrónica (BUAP)',
      bio_david:'El Dr. David Eduardo Pinto Avendaño es investigador, líder académico y estratega de innovación con amplia experiencia en inteligencia artificial, cómputo avanzado y transferencia tecnológica. Actualmente dirige la Dirección de Innovación y Transferencia del Conocimiento (DITCo) de la Benemérita Universidad Autónoma de Puebla (BUAP), donde impulsa iniciativas que conectan investigación de vanguardia, colaboración con la industria y desarrollo tecnológico aplicado. Su trabajo abarca inteligencia artificial, ciencia de datos, sistemas inteligentes y tecnologías emergentes, con énfasis en traducir el conocimiento científico en impacto real. Ha coordinado y participado en múltiples proyectos nacionales e internacionales de I+D, incluyendo plataformas, laboratorios experimentales y ecosistemas de innovación alineados con la Industria 4.0. En este Hackathon de Computación Cuántica, aporta una visión estratégica sobre paradigmas de cómputo avanzado y la adopción responsable de tecnologías disruptivas para abordar desafíos científicos, industriales y sociales complejos.',

      // Courses
      course_title_1: 'Cursos de Certificación QC del Hackathon QWorld OQI (Dos Cursos) | 19–28 de mayo de 2026 y del 4 al 13 de junio de 2026 -Fechas TENTATIVAS-',
      course_desc_1: 'Para garantizar que los participantes de los hackathons apoyados por el ',

      course_desc_1_2: 'Los hackathons apoyados están diseñados para asegurar que los participantes adquieran las habilidades necesarias mediante un programa educativo que cubre aspectos teóricos y aplicados de la computación cuántica, desde nivel básico hasta avanzado. Este curso virtual ofrecerá una certificación de alta calidad al finalizar todo el curso y las actividades.',

      course_desc_2: 'Se informa que todos los estudiantes con poco o ningún conocimiento previo en computación cuántica deberán completar un curso virtual (noventa minutos por sesión y un total de diez sesiones) diseñado por QWorld y adaptado específicamente para hackathons de computación cuántica. El curso será a tu propio ritmo. Los participantes que lo completen exitosamente recibirán una certificación.',

      course_desc_3: 'Te invitamos a una serie de talleres',

      course_desc_3_2: 'en el campo de la computación y programación cuántica. Durante los talleres utilizaremos Discord para la comunicación y realizaremos las sesiones mediante reuniones por Zoom. Los cuadernos Jupyter y las conferencias por Zoom estarán en inglés. Durante todos los talleres se contará con mentores que responderán preguntas y asesorarán el progreso de aprendizaje.',

      course_title_2: 'Acerca del programa',

      course_subtitle_1: 'Bronze-Qiskit',

      course_desc_4: 'QBronze-Qiskit es la serie de talleres introductorios de programación cuántica de QWorld.',

      course_desc_4_2: 'Consiste en una colección de cuadernos Jupyter, y cada uno incluye múltiples tareas de programación para ofrecer experiencias prácticas. Bronze-Qiskit es una versión activa de Bronze que utiliza Qiskit como marco de programación cuántica. El material del curso está diseñado para cualquier persona que desee aprender los fundamentos de la computación cuántica y escribir programas cuánticos simples. El único requisito previo es contar con conocimientos básicos de programación en Python (por ejemplo, uso de condicionales y ciclos).',

      course_desc_5: 'Bronze-Qiskit cuenta con cinco secciones principales',

      course_desc_5_2: ', y para cada una se recomienda dedicar entre 3 y 4 horas. Su contenido incluye fundamentos de sistemas clásicos, fundamentos de sistemas cuánticos, operadores cuánticos sobre un qubit, entrelazamiento y protocolos cuánticos básicos, así como el algoritmo de búsqueda cuántica.',

      course_subtitle_2: 'QNickel',

      course_desc_6: 'Nickel es una colección de cuadernos Jupyter, y cada uno incluye múltiples tareas de programación para ofrecer experiencias prácticas. Es la continuación de Bronze, donde se introdujeron los fundamentos de la computación y programación cuántica. Nickel incluye dos marcos de programación cuántica diferentes: Qiskit y Cirq.',

      course_desc_7: 'Nickel cuenta con tres secciones principales:',

      course_desc_7_2: 'simulación de compuertas clásicas, algoritmos cuánticos convencionales (algoritmo de Deutsch, Deutsch-Jozsa, Bernstein-Vazirani, algoritmo de Simon) y el algoritmo de Grover para el problema de Max-Cut (revisión del algoritmo de Grover, sumadores y problema Max-Cut).',

      course_title_3: 'Nuestro equipo',

      course_desc_8: 'Organizadores:',
      course_desc_9: 'Jibran Rashid (QWorld), Sana Odeh',

      course_desc_10: 'Líder:',
      course_desc_11: 'Jibran Rashid (QBronze y QNickel)',

      course_desc_12: 'Mentores:',
      course_desc_13: 'Kenneth Isamade, Maja, Lorraine Tsitsi Majiri, Rumlah Amer, Razeen ud Din, Amrit Chhetri',

      course_desc_14: 'Equipo-Sección:',
      course_desc_15: 'Audrey Himmer',
      course_desc_15_1: 'y Marianne Schoerling',

      course_desc_16: 'Equipo técnico:',
      course_desc_17: 'Kenneth Isamade (Canvas)',

      course_desc_18: 'Contacto:',
      course_desc_19: 'jibran.rashid@qworld.net',

      course_title_4: 'Calendario de los Cursos de Certificación QC del Hackathon QWorld OQI (Dos Cursos)',

      course_desc_20: 'El taller se llevará a cabo durante diez días y requerirá aproximadamente 30 horas de capacitación.',

      course_desc_21: 'Se espera que los participantes sigan los materiales del taller y completen las tareas de manera independiente. El curso será a tu propio ritmo y se llevará a cabo en las siguientes fechas:',

      course_desc_22: '1. Del 19 al 28 de mayo de 2026',
      course_desc_23: 'y',
      course_desc_24: '2. Del 4 al 13 de junio de 2026',

      course_title_5: 'QBronze + QNickel',

      course_desc_25: 'Lunes – 19 de mayo, 5:00 PM (GST) [y] 4 de agosto, 8:00 PM (GST)',
      course_desc_26: 'La sesión cubre la logística del curso y ofrece una introducción general a la computación cuántica desde una perspectiva de ciencias de la computación.',

      course_desc_27: 'Martes – 20 de mayo, 5:00 PM (GST) [y] 5 de agosto, 8:00 PM (GST)',
      course_desc_28: 'Se introduce el marco matemático para representar sistemas probabilísticos clásicos y su evolución bajo operaciones estocásticas.',

      course_desc_29: 'Miércoles – 21 de mayo, 5:00 PM (GST) [y] 6 de agosto, 8:00 PM (GST)',
      course_desc_30: 'Generalizamos la formulación para permitir la representación de información cuántica, su evolución bajo operaciones unitarias y la extracción de información mediante mediciones.',

      course_desc_31: 'Jueves – 22 de mayo, 5:00 PM (GST) [y] 7 de agosto, 8:00 PM (GST)',
      course_desc_32: 'Operaciones cuánticas y programación con Qiskit. Visualizamos estados y operaciones cuánticas e identificamos el entrelazamiento como un recurso clave en los circuitos cuánticos. Escribimos nuestra primera simulación de circuito cuántico usando Qiskit.',

      course_desc_33: 'Viernes – 23 de mayo, 5:00 PM (GST) [y] 8 de agosto, 8:00 PM (GST)',
      course_desc_34: 'Protocolos cuánticos. Revisamos los protocolos fundamentales de superdense coding y teleportación cuántica. Para preparar la discusión sobre algoritmos cuánticos, introducimos ideas de la teoría de la complejidad computacional.',

      course_desc_35: 'Sábado – 24 de mayo, 5:00 PM (GST) [y] 9 de agosto, 8:00 PM (GST)',
      course_desc_36: 'Introducción a la complejidad de consultas cuánticas. Introducimos ideas de computación reversible y analizamos el cálculo del phase kickback. Resolvemos problemas simples utilizando nuestro primer algoritmo cuántico en el modelo de complejidad de consultas.',

      course_desc_37: 'Domingo – 25 de mayo, 5:00 PM (GST) [y] 10 de agosto, 8:00 PM (GST)',
      course_desc_38: 'Introducción a los algoritmos cuánticos. Revisamos los algoritmos Deutsch-Jozsa y Bernstein-Vazirani.',

      course_desc_39: 'Lunes – 26 de mayo, 5:00 PM (GST) [y] 11 de agosto, 8:00 PM (GST)',
      course_desc_40: 'Algoritmo de Simon. Analizamos el algoritmo de Simon y revisamos la estructura de los algoritmos cuánticos en el modelo de complejidad de consultas.',

      course_desc_41: 'Martes – 27 de mayo, 5:00 PM (GST) [y] 12 de agosto, 8:00 PM (GST)',
      course_desc_42: 'Algoritmo de Grover. Mostramos una mejora cuadrática para el problema de búsqueda no estructurada utilizando el algoritmo de Grover.',

      course_desc_43: 'Miércoles – 28 de mayo, 5:00 PM (GST) [y] 13 de agosto, 8:00 PM (GST)',
      course_desc_44: 'Resolución del problema Max-Cut mediante Grover. Combinamos ideas de todo el taller para resolver el problema Max-Cut usando el algoritmo de Grover.',

      course_title_6: 'Talleres cuánticos | Tareas y certificación',

      course_desc_45: 'Utilizaremos el sistema de gestión de aprendizaje Canvas para el seguimiento de tareas. Todas las evaluaciones deben entregarse antes del 23 de abril.',

      course_desc_46: 'Los participantes deberán obtener al menos el 50% en cada evaluación y una calificación global superior al 70% para completar cada módulo.',

      course_title_7: 'Código de conducta',

      course_desc_47: 'Nuestro evento está dedicado a proporcionar una experiencia de taller libre de acoso para todas las personas, independientemente de su género, identidad y expresión de género, edad, orientación sexual, discapacidad, apariencia física, complexión corporal, raza, etnia, religión (o ausencia de ella) o elecciones tecnológicas. No toleramos ninguna forma de acoso hacia los participantes. El lenguaje o imágenes de carácter sexual no son apropiados para ningún espacio del evento, incluyendo charlas, talleres, fiestas, Twitter u otros medios en línea. Los participantes que violen estas normas podrán ser sancionados o expulsados del evento.',

      course_desc_48: 'Respetamos a los menores de edad (niños y niñas menores de 18 años) y debemos hacer todo lo posible para proteger sus derechos. Todas las relaciones privadas, comunicaciones privadas (incluyendo redes sociales) o contactos sexuales con menores están estrictamente prohibidos.',

      course_desc_49: 'El canal de comunicación predeterminado entre los organizadores y los participantes es el correo electrónico. Excepto para el llenado del formulario de aplicación, la información de contacto de cualquier asistente o participante no podrá ser solicitada por ninguna persona del equipo organizador (mentor, educador, ponente, organizador, patrocinador o voluntario). No obstante, cualquier persona del equipo organizador podrá compartir su información de contacto con un participante que no sea menor de edad, si este lo solicita.',

      course_desc_50: 'Un menor puede acceder a los correos electrónicos de los organizadores principales en el sitio web del evento. Si un menor está interesado en trabajar con una persona del equipo organizador con fines científicos o pedagógicos, deberá leer este documento antes de contactar a dicha persona:',

      course_desc_51: 'Si estás siendo acosado, notas que otra persona está siendo acosada o tienes cualquier otra inquietud, por favor contacta inmediatamente a los organizadores. También puedes contactar directamente a los miembros del Comité de Ética de QWorld.',

      course_desc_52: 'Consulta el enlace anterior para más detalles.'

    },
    en: {
      // NAV
      nav_home: 'Home',
      nav_req: 'Registration',
      nav_awards: 'Awards',
      nav_courses: 'Courses',

      // HERO
      hero_tag: 'INTERNATIONAL INNOVATION EVENT',
      hero_title_1: 'HACKATHON',
      hero_subtitle: 'QUANTUM COMPUTING FOR WATER CHALLENGES',
      hero_date: '29 JUN - 01 JUL, 2026 | PUEBLA, MEXICO',
      time_d: 'Days', time_h: 'Hours', time_m: 'Min', time_s: 'Sec',
      hero_btn: 'REGISTER',

      // ABOUT
      about_title: 'THE CHALLENGE',
      about_sub: 'Quantum Solutions for Water Challenges in Big Cities',
      about_desc: 'Major cities face water crises. At the Hackathon 2026, we use Quantum Computing to model water solutions',
      stat_stages: 'Stages',
      stat_countries: 'Countries',
      stat_days: 'Days',

      // TIMELINE
      time_title: 'Road to Hackathon',
      time_jan: 'FEB 2026', time_jan_t: 'Official Launch', time_jan_d: 'Press conference, committee intro, and call for entries',
      time_mar: 'MARCH', time_mar_t: 'Training', time_mar_d: 'Quantum Computing training courses delivered by qBraid® and water challenges',
      time_apr: 'APRIL', time_apr_t: 'Selection', time_apr_d: 'Profile evaluation and hybrid team formation',
      time_may: 'MAY', time_may_t: 'Bootcamps', time_may_d: 'Technical mentorship sessions with industry experts',
      time_event_date: 'JUN 29 - JUL 01', time_event_t: 'HACKATHON LATAM 2026', time_event_d: '3 days of intensive development. (Arrival: June 28)',
      time_aug: 'AUGUST', time_aug_t: 'Incubation', time_aug_d: 'Follow-up on winning prototypes.',

      // GALLERY
      gal_title: 'VENUE: PUEBLA',
      gal_1_t: 'Cultural Heritage', gal_1_d: 'Official event venue',
      gal_2_t: 'Urban Innovation', gal_2_d: 'The metropolis of the future',
      gal_3_t: 'Global Vision', gal_3_d: 'Connecting international talent',
      gal_4_t: 'Towards the Future', gal_4_d: 'The future is not reached by dreaming, it is conquered by doing',
      btn_explore: 'EXPLORE',

      // --- MENTORS (Translated) ---

      speakers_title: 'TENTATIVE SPEAKERS LIST',
      committee_title: 'LOCAL ORGANIZING COMMITTEE',
      judges_title: 'JUDGES & MENTORS COMING SOON',
      // --- SPONSORS (Translated) ---
      org_title: 'ORGANIZERS',
      sponsors_title: 'SPONSORS',

      // FOOTER
      foot_desc: 'Driving quantum innovation and water solutions',
      foot_explore: 'EXPLORE',
      foot_contact: 'CONTACT',
      foot_contact_dir: 'Vice-Rectory for Research and Graduate Studies (VIEP), BUAP',
      foot_follow: 'FOLLOW US',
      foot_news: 'Get news:',
      foot_rights: 'All rights reserved.',
      foot_privacy: 'Privacy Policy',
      foot_terms: 'Terms & Conditions',

      // REGISTRO & PREMIOS
      req_title: 'ADMISSION PROFILE',
      req_title_2: 'Registration will close on March 31, 2026',
      req_subtitle: 'Mandatory Requirements',
      req_subtitle_2: 'Registration is individual and mandatory, courses can be taken in teams if desired.',
      req_1: 'Higher education (comprobable)',
      req_2: 'Resident in Latin America',
      req_3: 'Over 18 years old',
      req_4: 'Fields: Exact Sciences or Engineering',
      req_5: 'Basic programming knowledge',
      req_6: 'Basic knowledge of Physics',
      form_title: 'OFFICIAL REGISTRATION',

      lbl_email: 'e-mail',
      lbl_name: 'Full Name',
      lbl_phone_number: 'Phone Number',
      lbl_inst: 'institution',
      lbl_role: 'Role',
      lbl_nationality: 'Nationality',
      lbl_recity: 'Current country of residence',
      lbl_biography: 'Biography',
      lbl_linkedin: 'LinkedIn Profile (full link)',
      lbl_github: 'GitHub Profile (full link)',
      lbl_specific_needs: 'Do you have any specific needs or requirements for the event?',
      lbl_field_expertise: 'What is your field of expertise?',
      lbl_infomed_SDGs: 'How informed are you about the Sustainable Development Goals (SDGs)?',
      lbl_whish_skills: 'What skills do you wish to accomplishwith this hackathon?',
      lbl_QC_skills: 'What skills do you have in Quantum Computing?',
      lbl_topics_QC: 'What three topics of Quantum Computing are you interested in?',
      lbl_familiarity_QC_hardware: 'Which quantum hardware are you particularly familiar with if any?',
      lbl_QC_language: 'Preferred Quantum Computing Language?',
      lbl_first_hackathon: 'Is this your first hackathon?',
      lbl_ia_skills: 'What are the AI Skills that you are familiar with?',
      lbl_hackathon_experience: 'Briefly describe your experience in hackathons or related projects.',
      lbl_aspart_team: 'Are you participating aspart of a team?',
      lbl_team_name: 'If yes,provide your team’s name.',
      lbl_team_size: 'How many members does your team have?',
      lbl_team_names: 'Pleaselist their names',
      lbl_SDG_goals: 'In which of the Sustainable Development Goals(SDG)would you be most interested into for this project?(choose 2)',
      
      
      btn_upload: 'Select File', 
      no_file: 'No file selected', 
      btn_send: 'SUBMIT APPLICATION',
      award_title: 'AWARDS & RECOGNITION',
      aw_1_title: 'OQI Certification', aw_1_desc: 'Official diploma endorsed by the Open Quantum Institute.',
      aw_2_title: 'Quantum Internships', aw_2_desc: 'Internship opportunities at companies and schools with real quantum computers.',
      aw_3_title: 'Global Networking', aw_3_desc: 'Direct connection with leaders from CERN and the industry.',

      // BIOS
      bio_olvia:'Olivia Maricela Barrón Cano is Director of the Department of Computer Science and Industrial Engineering at UDEM, with over three decades of experience in computer science and artificial intelligence. She holds a PhD in AI with a specialization in Robotics from Tecnológico de Monterrey and also collaborates with Hera Diagnostics on complex healthcare data science and automation projects.',
      bio_francisco:'Francisco Antonio Domínguez-Serna holds a Ph.D. in Materials Physics from CICESE. He is a Researcher for Mexico (SECIHTI–CICESE) and a Level I member of the National System of Researchers (Sistema Nacional de Investigadoras e Investigadores). His research focuses on quantum photonics, nonlinear optics, and programmable photonic architectures for information processing and quantum communications, with emphasis on the generation and control of non-classical light, photonic qubits in different degrees of freedom, and integrated photonic circuits. He has led and participated in national projects on quantum technologies, supervised undergraduate and graduate students, and taught courses and seminars in quantum information and quantum computing.',
      bio_jimena:'Ph.D. in Computer Science and Level I researcher in Mexico’s National System of Researchers (SNI). She serves as a tenured Professor in the Faculty of Engineering at the National Autonomous University of Mexico (UNAM). Since 2010, she has been a member of the Advanced Image Processing Laboratory. In 2022, she received the National Award in Data Science. Her research focuses on artificial intelligence techniques—particularly deep learning and quantum computing—applied to computer vision. From 2019 to 2026, she served as Academic Coordinator of UNAM’s Center for Advanced Computing Studies, where she promoted collaboration and initiatives such as quantum computing schools and seminars in education, artificial intelligence, and quantum technologies.',
      bio_boris:'He obtained his PhD from Eindhoven University of Technology in the Netherlands and is currently a Full Professor at the Faculty of Engineering of the National Autonomous University of Mexico, where his research area is computer vision and quantum machine learning; he has authored or co‑authored more than 160 research papers in international peer‑reviewed journals and conference proceedings, is a level II member of the National System of Researchers, has received several awards including the National University Distinction for Young Academics in the area of Teaching in Exact Sciences in 1997 and the National Data Science Award in 2021, and has held various academic management positions at UNAM, notably serving as General Coordinator of the Center for Advanced Computing Studies from 2020 to 2026.',
      bio_arturo:'Arturo Fernández earned his undergraduate degree from BUAP and his PhD in Physics from CINVESTAV, focusing on Standard Model phenomenology. He completed a postdoctoral fellowship at Fermilab-E791, studying charmed baryons and their decays. He contributed to the foundation of the Pierre Auger Observatory, designing the water Cherenkov detectors. Currently, he is part of the ALICE experiment at CERN, working on the ALICE-FIT system and analyzing data from the ALICE-ACORDE detector to study astroparticle events. He is also an active member of the Mexican Physical Society and participates in science outreach activities. Together with Guillermo Tejeda, he co-invented the “Cosmic Piano.”',
      bio_karina:'Karina Garay Palmett is a Senior Researcher (Titular C) at the Department of Optics, CICESE, and holds a Ph.D. in Optical Sciences from the same institution. Her research focuses on optics and quantum information, particularly the generation and control of non-classical light and the development of quantum sources in fibers and integrated waveguides. She leads a project on integrated photonic circuits for quantum applications. She received the 2010 Weizmann Award, is a Level II member of the National Researchers System (SNII), and has an extensive record of scientific publications and researcher training.',
      bio_ricardo:'Ricardo Villegas Tovar is an academic manager with over twenty years of experience in intellectual property, science policy, and international cooperation. His expertise includes evidence-based evaluation, open science, and research integrity. He currently leads BUAP’s Center for International Education and is a candidate member of the National System of Researchers.',
      bio_isabel:'Isabel Pedraza is a professor at the Faculty of Physical-Mathematical Sciences of the Benemérita Universidad Autónoma de Puebla, and a Level 2 scientist in the National System of Researchers (SNI II). Her main research area focuses on the search for charged Higgs bosons and Dark Matter, as well as the development of technologies for muon detection in the CMS (Compact Muon Solenoid) experiment at the LHC (Large Hadron Collider) at CERN (European Organization for Nuclear Research). She is currently the deputy leader of BUAP’s research group in the CMS collaboration.',
      bio_christen: 'J. Jorge Christen is a Cum Laude Computer Engineer from UNAM, with a Master’s degree in Electronic Engineering from the International Institute of Eindhoven and studies in International Business at ITAM. He has over 40 years of experience in the technology industry and more than 38 years teaching at the graduate level. He is an MIT-certified Quantum Computing specialist, creator of the ENSAR methodology and the IQC-Kit, and currently works in consulting and teaching Quantum Computing and Artificial Intelligence.',
      bio_salvador: 'Salvador E. Venegas-Andraca is a scientist, consultant, and entrepreneur, and a pioneer of quantum computing in Mexico. He is the founder and Principal Investigator of the Unconventional Computing Lab, Professor of Computer Science at Tecnologico de Monterrey, and Adjunct Professor at UNAM. He holds a DPhil in Physics and an MSc in Computer Vision from the University of Oxford, as well as an MBA and a BSc in Digital Electronics and Computer Science. He is a leading researcher in quantum walks and co-founder of the field of Quantum Image Processing. His research interests include quantum algorithms, quantum machine learning, classical and quantum cybersecurity, and NP-hard problems. He is the author and co-author of pioneering books in these areas and has published over 60 scientific papers with more than 2,900 citations. Since 2020, he has been listed among the world’s top 2% most influential scientists.',
      bio_enrique: 'Luis Enrique Morales Aguilar is an Electronics Engineer from UNAM, holds a Master’s degree in Electronic Engineering, and is currently a PhD student at the Faculty of Electronic Sciences (BUAP). His work focuses on power electronics, photovoltaic systems, power measurement, and energy harvesting optimization. He has both academic and industrial experience, with publications in indexed journals and conference proceedings, and has participated in international academic research stays. He is currently a professor at the Faculty of Computer Sciences (BUAP) and conducts research on the design and characterization of electronic circuits for energy systems at the Faculty of Electronic Sciences (BUAP).',
      bio_david:'Dr. David Eduardo Pinto Avendaño is a researcher, academic leader, and innovation strategist with extensive experience in artificial intelligence, advanced computing, and technology transfer. He currently serves as Director of the Directorate of Innovation and Knowledge Transfer (DITCo) at the Benemérita Universidad Autónoma de Puebla (BUAP), where he leads initiatives that connect cutting‑edge research, industry collaboration, and applied technological development. His work spans artificial intelligence, data science, intelligent systems, and emerging technologies, with a focus on translating scientific knowledge into real‑world impact. He has coordinated and participated in multiple national and international R&D projects, including research‑driven platforms, experimental laboratories, and innovation ecosystems aligned with Industry 4.0. In this Quantum Computing Hackathon, he contributes a strategic perspective on advanced computing paradigms and the responsible adoption of disruptive technologies to address complex scientific, industrial, and societal challenges.',

      // Courses
      course_title_1: 'QWorld OQI Hackathon QC Certification Courses (Two Courses) | May 19-28, 2026 (assessments due June 16) or June 4-13, 2026 (assessments due September 4)',
      course_desc_1: 'To ensure participants of ',
      course_desc_1_2: '(OQI) supported hackathons are equipped with the necessary skills, QWorld offers an education program covering quantum computing theoretical and applied skills (foundation to advanced skills). This virtual course will offer a high-quality Certification upon finishing the entire course and activities.',
      course_desc_2: 'Kindly note that all students with little or no knowledge of quantum computing are required to complete a virtual course (ninety minutes per session and ten sessions total) curated by QWorld and tailored specifically to quantum hackathons. The course will be self-paced. Successful participants will receive a certification upon completion of this online course.',
      course_desc_3: 'We invite you to a series of workshops',
      course_desc_3_2: 'in the field of quantum computing and programming! During the workshops, we will use Discord to communicate with each other and conduct the workshop by Zoom meetings. Jupyter notebooks and Zoom lectures will be in English. During all workshops, mentors are provided who will answer questions and consult on the progress in learning.',
      course_title_2: 'About the program',
      course_subtitle_1: 'Bronze-Qiskit',
      course_desc_4: 'QBronze-Qiskit is QWorld’s introductory level quantum programming workshop series.',
      course_desc_4_2: 'It is a collection of Jupyter notebooks, and each notebook has many programming tasks to provide hands-on experiences. Bronze-Qiskit is an active version of Bronze using Qiskit as the quantum programming framework. The course material is designed for everyone who wants to learn the basics of quantum computing and learn how to write simple quantum programs. The only prerequisite is a basic knowledge of programming (e.g., using conditionals and loops) in Python.',
      course_desc_5: 'Bronze-Qiskit has five main sections, and for each of them, the participant should spend about 3-4 hours. Their scope includes basics of classical systems, basics of quantum systems, quantum operators on a quantum bit, entanglement and basics quantum protocols, and quantum search algorithm.',
      course_subtitle_2: 'QNickel',
      course_desc_6: 'Nickel is a collection of Jupyter notebooks, and each notebook has many programming tasks to provide hands-on experiences. It is a continuation of Bronze, in which the basics of quantum computing and quantum programming were introduced. Nickel includes two different quantum programming frameworks, Qiskit and Cirq.',
      course_desc_7: 'Nickel has three main sections: ',
      course_desc_7_2: 'Simulation of Classical Gates, Conventional Quantum Algorithms (Deutsch’s algorithm, Deutsch-Jozsa algorithm, Bernstein-Vazirani algorithm, Simon’s Algorithm), and Grover’s Algorithm for Max-Cut Problem (Revision of Grover’s algorithm, adders, Max-Cut problem).',
      course_title_3: 'Our Team',
      course_desc_8: 'Organizers:',
      course_desc_9: 'Jibran Rashid (QWorld), Sana Odeh',
      course_desc_10: 'Leader:',
      course_desc_11: 'Jibran Rashid (QBronze & QNickel))',
      course_desc_12: 'Mentors:',
      course_desc_13: 'Kenneth Isamade, Maja, Lorraine Tsitsi Majiri, Rumlah Amer, Razeen ud Din, Amrit Chhetri',
      course_desc_14: 'Team-Section:',
      course_desc_15: 'Audrey Himmer',
      course_desc_15_1: ' and Marianne Schoerling',
      course_desc_16: 'Technical Staff:',
      course_desc_17: 'Kenneth Isamade (Canvas)',
      course_desc_18: 'Contact:',
      course_desc_19: 'jibran.rashid@qworld.net',
      course_title_4: 'Schedule of QWorld OQI Hackathon QC Certification Courses (Two Courses)',
      course_desc_20: 'The workshop will be held during ten days, approximately requiring 30 hours of training.',
      course_desc_21: 'Participants are expected to follow the workshop materials and complete the tasks on their own. The course will be self-paced and will take place:',
      course_desc_22: '1. May 19th to May 28th, 2026',
      course_desc_23: 'and',
      course_desc_24: '2. June 4th to June 13th, 2026',
      course_title_5: 'QBronze + QNickel',
      course_desc_25: 'Monday – May 19, 5:00 PM (GST) [and] August 4, 8 PM (GST)',
      course_desc_26: 'The session covers course logistics and provides a general introducing to qauntum computing from a computer science perspective.',
      course_desc_27: 'Tuesday – May 20, 5:00 PM (GST) [and] August 5, 8 PM (GST)',
      course_desc_28: 'We introduce the mathematical framework for representing classical probabilistic systems and their evolution under stochastic operations.',
      course_desc_29: 'Wednesday – May 21, 5:00 PM (GST) [and] August 6, 8 PM (GST)',
      course_desc_30: 'We generalize our formulation to allow representation of quantum information, its evolution under unitary operations and extracting information via measurements.',
      course_desc_31: 'Thursday – May 22, 5:00 PM (GST) [and] August 7, 8 PM (GST)',
      course_desc_32: 'Quantum Operations & Qiskit Programming, we visualize quantum states and operations and identify entanglement as a key resource in quantum circuits. We write our first quantum circuit simulation using Qiskit.',
      course_desc_33: 'Friday – May 23, 5:00 PM (GST) [and] August 8, 8 PM (GST)',
      course_desc_34: 'Quantum Protocols, We review the foundational protocols for super dense coding and quantum teleportation. To set the stage for our upcoming discussion of quantum algorithms, we introduce ideas from computational complexity theory.',
      course_desc_35: 'Saturday – May 24, 5:00 PM (GST) [and] August 9, 8 PM (GST)',
      course_desc_36: 'Introduction to Quantum Query Complexity, We introduce ideas from reversible computation and work through the calculation for phase kickback. We solve toy problems using our first quantum algorithm in the quantum query complexity model.',
      course_desc_37: 'Sunday – May 25, 5:00 PM (GST) [and] August 10, 8 PM (GST)',
      course_desc_38: 'Introduction to Quantum Algorithms We review the Deutsch-Josza and Bernstein-Vazirani algorithms.',
      course_desc_39: 'Monday – May 26, 5:00 PM (GST) [and] August 11, 8 PM (GST)',
      course_desc_40: 'Simon’s Algorithm, We discuss Simon’s Algorithm and review the structure of quantum algorithm in query complexity model.',
      course_desc_41: 'Tuesday – May 27, 5:00 PM (GST) [and] August 12, 8 PM (GST)',    
      course_desc_42: 'Grover’s Algorithm, We show a quadratic improvement for the unstructured search problem using Grover’s algorithm.',
      course_desc_43: 'Wednesday – May 28, 5:00 PM (GST) [and] August 13, 8 PM (GST)',
      course_desc_44: 'Solving Max Cut via Grover, We combine ideas from the entire workshop to solve the max-cut problem using Grover’s algorithm.',
      course_title_6: 'Quantum workshops | Homework and Certificate',
      course_desc_45: 'We will use Canvas learning management system for homework tracking. All assessments are due by April 23.',
      course_desc_46: 'Participants have to earn earn at least 50% on each assessment and have an overall grade > 70% to complete each module.',
      course_title_7: 'Code of Conduct',
      course_desc_47: 'Our event is dedicated to providing a harassment-free workshop experience for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion (or lack thereof), or technology choices. We do not tolerate harassment of event participants in any form. Sexual language and imagery is not appropriate for any event venue, including talks, workshops, parties, Twitter and other online media. Event participants violating these rules may be sanctioned or expelled from the event',
      course_desc_48: 'We respect the minors (children under age 18) and we must make every effort to protect their rights. All private relationships, private communications (including social media channels), or sexual contacts with minors are prohibited.',
      course_desc_49: 'The default communication channel between the organizers and participants is e-mail. Except filing the application form, the contact info of any attendee or participant cannot be requested by any person from organizer side (i.e., mentor, educator, speaker, organizer, sponsor, or volunteer). On the other hand, any person from organizer side may share his or her contact info with a participant who is not a minor, upon request by the participant',
      course_desc_50: 'A minor can access the emails of the main organizers on the event’s website. If a minor interested in working with a person from organizer side for scientific or pedagogical purpose, then he or she should read this document before contacting this person:',
      course_desc_51: 'If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact the organizers immediately. You may also contact directly the members of the Ethics Committee of QWorld.',
      course_desc_52: 'Check the above link for more details.',
    }
  };

}
