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

      // HERO
      hero_tag: 'EVENTO INTERNACIONAL DE INNOVACIÓN',
      hero_title_1: 'HACKATHON',
      hero_subtitle: 'QUANTUM FOR WATER SYSTEM SOLUTIONS IN BIG CITIES',
      hero_date: '29 JUN - 01 JUL, 2026 | PUEBLA, MÉXICO',
      time_d: 'Días', time_h: 'Horas', time_m: 'Min', time_s: 'Seg',
      hero_btn: 'REGISTRARTE',

      // ABOUT
      about_title: 'EL DESAFÍO',
      about_sub: 'Quantum for Water System Solutions',
      about_desc: 'Las grandes ciudades enfrentan crisis hídricas. En el OQI Hackathon 2026, utilizamos el poder de la Computación Cuántica para modelar soluciones hídricas',
      stat_stages: 'Etapas',
      stat_countries: 'Países',
      stat_days: 'Días',

      // TIMELINE
      time_title: 'Ruta al Hackathon',
      time_jan: 'ENE 2026', time_jan_t: 'Lanzamiento Oficial', time_jan_d: 'Rueda de prensa, presentación del comité y apertura de convocatoria',
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
      judges_title: 'JUECES Y MENTORES',

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
      req_subtitle: 'Requisitos Obligatorios',
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


      btn_upload: 'Seleccionar Archivo', 
      no_file: 'Ningún archivo seleccionado', 
      btn_send: 'ENVIAR SOLICITUD',
      award_title: 'RECONOCIMIENTOS',
      aw_1_title: 'Certificación OQI', aw_1_desc: 'Diploma oficial avalado por el Open Quantum Institute.',
      aw_2_title: 'Estancias Cuánticas', aw_2_desc: 'Oportunidad de estancias en empresas y escuelas con computadoras cuánticas reales',
      aw_3_title: 'Networking Global', aw_3_desc: 'Conexión directa con líderes del CERN y la industria.',

      // BIOS
      bio_arturo:'Arturo Fernández estudió en la BUAP y obtuvo su Doctorado en Física en el CINVESTAV, donde trabajó en fenomenología del Modelo Estándar. Realizó una estancia posdoctoral en Fermilab-E791 analizando bariones encantados y sus decaimientos. Participó en la creación del Observatorio Pierre Auger, colaborando en el diseño de los detectores Cherenkov. Actualmente es miembro del experimento ALICE del CERN, donde trabaja en el sistema ALICE-FIT y en el análisis de datos del detector ALICE-ACORDE. Además, es miembro activo de la Sociedad Mexicana de Física y participa en actividades de divulgación científica. Junto con Guillermo Tejeda, es co-inventor del “Piano Cósmico”.',
      bio_karina:'Karina Garay Palmett es Investigadora Titular C en el Departamento de Óptica del CICESE y doctora en Ciencias en Óptica por la misma institución. Su investigación se centra en óptica e información cuántica, especialmente en la generación y control de luz no clásica y el desarrollo de fuentes cuánticas en fibras y guías integradas. Lidera un proyecto sobre circuitos fotónicos integrados para aplicaciones cuánticas. Es Premio Weizmann 2010, miembro del SNII (nivel II) y cuenta con amplia producción científica y trayectoria en formación de investigadores.',
      bio_ricardo:'Ricardo Villegas Tovar es gestor académico con más de veinte años de experiencia en propiedad intelectual, política científica y cooperación internacional. Se especializa en evaluación basada en evidencia, ciencia abierta e integridad de la investigación. Dirige el Centro de Educación Internacional de la BUAP y es candidato del Sistema Nacional de Investigadores.',
      bio_isabel: 'Isabel Pedraza es profesora de la Facultad de Ciencias Físico-Matemáticas de la Benemérita Universidad Autónoma de Puebla, y es una científica de nivel 2 del Sistema Nacional de Investigadores (SNI II). Su principal área de investigación es la búsqueda de Higgses cargados y Materia Oscura y el desarrollo de tecnologías para la detección de muones en el CMS (Solenoide Compacto de Muones) del LHC (Gran Colisionador de Hadrones) en el CERN (Laboratorio Europeo para la Investigación Nuclear). Actualmente es la líder adjunta del grupo de investigación de la BUAP en el CMS.',
      bio_christen: 'J. Jorge Christen es Ingeniero en Computación Cum Laude por la UNAM, con Maestría en Ingeniería Electrónica por el Instituto Internacional de Eindhoven y estudios en Negocios Internacionales por el ITAM. Cuenta con más de 40 años de experiencia en la industria tecnológica y más de 38 años en docencia de posgrado. Es especialista en Computación Cuántica certificado por el MIT, creador de la metodología ENSAR y del IQC-Kit, y actualmente se dedica a la consultoría y enseñanza en Computación Cuántica e Inteligencia Artificial.',
      bio_salvador: 'Salvador E. Venegas-Andraca es científico, consultor y emprendedor, pionero del cómputo cuántico en México. Es fundador y responsable del Unconventional Computing Lab, profesor de Ciencias Computacionales en el Tecnológico de Monterrey y profesor adjunto en la UNAM. Cuenta con un DPhil en Física y una MSc en Visión por Computadora por la Universidad de Oxford, además de un MBA y una licenciatura en Electrónica Digital y Computación. Es investigador líder en caminatas cuánticas y cofundador del área de Quantum Image Processing. Sus intereses incluyen algoritmos cuánticos, aprendizaje automático cuántico, ciberseguridad clásica y cuántica, y problemas NP-difíciles. Es autor y coautor de libros pioneros en estos campos y ha publicado más de 60 artículos científicos con más de 2,900 citas. Desde 2020, figura entre el 2 % de científicos más influyentes del mundo.',
      bio_enrique: 'Luis Enrique Morales Aguilar es Ingeniero Electrónico por la UNAM, Maestro en Ingeniería Electrónica y estudiante de Doctorado en la Facultad de Ciencias de la Electrónica (BUAP). Su trabajo se enfoca en electrónica de potencia, sistemas fotovoltaicos, medición de potencia y optimización del cosechamiento de energía. Cuenta con experiencia académica e industrial, así como publicaciones en congresos y revistas indexadas, y ha participado en estancias académicas internacionales. Actualmente se desempeña como profesor en la Facultad de Ciencias de la Computación (BUAP) y desarrolla investigación en diseño y caracterización de circuitos electrónicos aplicados a sistemas de energía en la Facultad de Ciencias de la Electrónica (BUAP)',
      bio_david:'El Dr. David Eduardo Pinto Avendaño es investigador, líder académico y estratega de innovación con amplia experiencia en inteligencia artificial, cómputo avanzado y transferencia tecnológica. Actualmente dirige la Dirección de Innovación y Transferencia del Conocimiento (DITCo) de la Benemérita Universidad Autónoma de Puebla (BUAP), donde impulsa iniciativas que conectan investigación de vanguardia, colaboración con la industria y desarrollo tecnológico aplicado. Su trabajo abarca inteligencia artificial, ciencia de datos, sistemas inteligentes y tecnologías emergentes, con énfasis en traducir el conocimiento científico en impacto real. Ha coordinado y participado en múltiples proyectos nacionales e internacionales de I+D, incluyendo plataformas, laboratorios experimentales y ecosistemas de innovación alineados con la Industria 4.0. En este Hackathon de Computación Cuántica, aporta una visión estratégica sobre paradigmas de cómputo avanzado y la adopción responsable de tecnologías disruptivas para abordar desafíos científicos, industriales y sociales complejos.'
    },
    en: {
      // NAV
      nav_home: 'Home',
      nav_req: 'Registration',
      nav_awards: 'Awards',

      // HERO
      hero_tag: 'INTERNATIONAL INNOVATION EVENT',
      hero_title_1: 'HACKATHON',
      hero_subtitle: 'QUANTUM FOR WATER SYSTEM SOLUTIONS IN BIG CITIES',
      hero_date: '29 JUN - 01 JUL, 2026 | PUEBLA, MEXICO',
      time_d: 'Days', time_h: 'Hours', time_m: 'Min', time_s: 'Sec',
      hero_btn: 'REGISTER',

      // ABOUT
      about_title: 'THE CHALLENGE',
      about_sub: 'Quantum for Water System Solutions',
      about_desc: 'Major cities face water crises. At the OQI Hackathon 2026, we use Quantum Computing to model water solutions',
      stat_stages: 'Stages',
      stat_countries: 'Countries',
      stat_days: 'Days',

      // TIMELINE
      time_title: 'Road to Hackathon',
      time_jan: 'JAN 2026', time_jan_t: 'Official Launch', time_jan_d: 'Press conference, committee intro, and call for entries',
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
      judges_title: 'JUDGES & MENTORS',
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
      req_subtitle: 'Mandatory Requirements',
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
      bio_arturo:'Arturo Fernández earned his undergraduate degree from BUAP and his PhD in Physics from CINVESTAV, focusing on Standard Model phenomenology. He completed a postdoctoral fellowship at Fermilab-E791, studying charmed baryons and their decays. He contributed to the foundation of the Pierre Auger Observatory, designing the water Cherenkov detectors. Currently, he is part of the ALICE experiment at CERN, working on the ALICE-FIT system and analyzing data from the ALICE-ACORDE detector to study astroparticle events. He is also an active member of the Mexican Physical Society and participates in science outreach activities. Together with Guillermo Tejeda, he co-invented the “Cosmic Piano.”',
      bio_karina:'Karina Garay Palmett is a Senior Researcher (Titular C) at the Department of Optics, CICESE, and holds a Ph.D. in Optical Sciences from the same institution. Her research focuses on optics and quantum information, particularly the generation and control of non-classical light and the development of quantum sources in fibers and integrated waveguides. She leads a project on integrated photonic circuits for quantum applications. She received the 2010 Weizmann Award, is a Level II member of the National Researchers System (SNII), and has an extensive record of scientific publications and researcher training.',
      bio_ricardo:'Ricardo Villegas Tovar is an academic manager with over twenty years of experience in intellectual property, science policy, and international cooperation. His expertise includes evidence-based evaluation, open science, and research integrity. He currently leads BUAP’s Center for International Education and is a candidate member of the National System of Researchers.',
      bio_isabel:'Isabel Pedraza is a professor at the Faculty of Physical-Mathematical Sciences of the Benemérita Universidad Autónoma de Puebla, and a Level 2 scientist in the National System of Researchers (SNI II). Her main research area focuses on the search for charged Higgs bosons and Dark Matter, as well as the development of technologies for muon detection in the CMS (Compact Muon Solenoid) experiment at the LHC (Large Hadron Collider) at CERN (European Organization for Nuclear Research). She is currently the deputy leader of BUAP’s research group in the CMS collaboration.',
      bio_christen: 'J. Jorge Christen is a Cum Laude Computer Engineer from UNAM, with a Master’s degree in Electronic Engineering from the International Institute of Eindhoven and studies in International Business at ITAM. He has over 40 years of experience in the technology industry and more than 38 years teaching at the graduate level. He is an MIT-certified Quantum Computing specialist, creator of the ENSAR methodology and the IQC-Kit, and currently works in consulting and teaching Quantum Computing and Artificial Intelligence.',
      bio_salvador: 'Salvador E. Venegas-Andraca is a scientist, consultant, and entrepreneur, and a pioneer of quantum computing in Mexico. He is the founder and Principal Investigator of the Unconventional Computing Lab, Professor of Computer Science at Tecnologico de Monterrey, and Adjunct Professor at UNAM. He holds a DPhil in Physics and an MSc in Computer Vision from the University of Oxford, as well as an MBA and a BSc in Digital Electronics and Computer Science. He is a leading researcher in quantum walks and co-founder of the field of Quantum Image Processing. His research interests include quantum algorithms, quantum machine learning, classical and quantum cybersecurity, and NP-hard problems. He is the author and co-author of pioneering books in these areas and has published over 60 scientific papers with more than 2,900 citations. Since 2020, he has been listed among the world’s top 2% most influential scientists.',
      bio_enrique: 'Luis Enrique Morales Aguilar is an Electronics Engineer from UNAM, holds a Master’s degree in Electronic Engineering, and is currently a PhD student at the Faculty of Electronic Sciences (BUAP). His work focuses on power electronics, photovoltaic systems, power measurement, and energy harvesting optimization. He has both academic and industrial experience, with publications in indexed journals and conference proceedings, and has participated in international academic research stays. He is currently a professor at the Faculty of Computer Sciences (BUAP) and conducts research on the design and characterization of electronic circuits for energy systems at the Faculty of Electronic Sciences (BUAP).',
      bio_david:'Dr. David Eduardo Pinto Avendaño is a researcher, academic leader, and innovation strategist with extensive experience in artificial intelligence, advanced computing, and technology transfer. He currently serves as Director of the Directorate of Innovation and Knowledge Transfer (DITCo) at the Benemérita Universidad Autónoma de Puebla (BUAP), where he leads initiatives that connect cutting‑edge research, industry collaboration, and applied technological development. His work spans artificial intelligence, data science, intelligent systems, and emerging technologies, with a focus on translating scientific knowledge into real‑world impact. He has coordinated and participated in multiple national and international R&D projects, including research‑driven platforms, experimental laboratories, and innovation ecosystems aligned with Industry 4.0. In this Quantum Computing Hackathon, he contributes a strategic perspective on advanced computing paradigms and the responsible adoption of disruptive technologies to address complex scientific, industrial, and societal challenges.'
    }
  };

}
