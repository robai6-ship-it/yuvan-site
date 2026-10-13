(function(){
  "use strict";

  /* ================= languages ================= */
  var LANGS=[
    {c:'en',   n:'English',    dir:'ltr', full:true},
    {c:'es',   n:'Español',    dir:'ltr', full:true},
    {c:'zh-Hans',n:'简体中文', dir:'ltr'},
    {c:'vi',   n:'Tiếng Việt', dir:'ltr'},
    {c:'ko',   n:'한국어',      dir:'ltr'},
    {c:'tl',   n:'Tagalog',    dir:'ltr'},
    {c:'ht',   n:'Kreyòl ayisyen', dir:'ltr'},
    {c:'ru',   n:'Русский',    dir:'ltr'},
    {c:'ar',   n:'العربية',     dir:'rtl'},
    {c:'hi',   n:'हिन्दी',        dir:'ltr'},
    {c:'ne',   n:'नेपाली',        dir:'ltr'},
    {c:'mr',   n:'मराठी',        dir:'ltr'},
    {c:'bn',   n:'বাংলা',         dir:'ltr'},
    {c:'ur',   n:'اردو',         dir:'rtl'}
  ];

  var T={};

  T.en={
    'states.policy':'<strong>Medicaid is changing.</strong> Work requirements, six-month renewals and tighter state budgets all take effect between now and January 2027. <a href="/updates/">What this means for waivers and waiting lists</a>.',
   
    'nav.updates':'What\'s changing', 'banner.t':'Policy update, October 2026: Medicaid, special education and vaccine guidance have all changed.', 'banner.l':'What this means for your family', 'banner.x':'Dismiss',
   
    'footer.ded':'For Yuvan — and for every family finding their way.',
   
    tagline:'A complete autism guide', 'nav.feedback':'Feedback', 'nav.about':'About', 'nav.contact':'Contact', 'nav.privacy':'Privacy', 'side.guide':'The guide', 'side.site':'This site', menu:'Menu', closemenu:'Close menu',
   
    skip:'Skip to content', langLabel:'Language', largerText:'Larger text',
    'nav.start':'Start here','nav.understanding':'Understanding autism','nav.kinds':'Kinds & profiles','nav.history':'History','nav.research':'What the research says','nav.support':'Therapies & support','nav.activities':'Everyday activities','nav.stigma':'Stigma & advocacy','nav.states':'Help in your state','nav.resources':'Resources',
    'hero.h1':"You don't have to figure this out in the right order.",
    'hero.lede':'Common Ground is a plain-language guide for parents and guardians of autistic children — what autism is, what the research actually shows, what helps day to day, and how to find the services your state owes your family.',
    'door1.t':'Something feels different','door1.d':"You've noticed things but nobody has said the word yet. Start with what autism is and how evaluation works.",
    'door2.t':'We just got a diagnosis','door2.d':'The first ninety days, in order. What to do this week, this month, and what can wait.',
    'door3.t':'I need services and money','door3.d':'Early intervention, IEPs, Medicaid waivers, respite — and who to call in your state.',
    'door4.t':'Today was hard','door4.d':'Meltdowns, sleep, food, transitions. Practical things that lower the temperature at home.',
    'crisis.h':'If you are worried right now','crisis.t':'Urgent help',
    'crisis.p1':'<strong>988</strong> — call or text the Suicide &amp; Crisis Lifeline, 24/7, for mental health crises of any kind, including for caregivers. Some areas can dispatch a mobile crisis team instead of police.',
    'crisis.p2':'<strong>911</strong> — if your child is missing. Say the words "autistic and may not respond to their name," and mention water: wandering toward water is the leading cause of death after elopement. Ask your local department whether they keep a voluntary registry for residents with disabilities.',
    'crisis.p3':'If a crisis feels close for you as a caregiver, talking to your own doctor or a counselor is a reasonable next step, and one a lot of parents in this position take.',
    'crisis.p4':'Both lines offer interpreters. You can say the name of your language in English and wait to be connected.',
    'states.h1':'Help in your state','states.lede':'Every state runs the same handful of programmes under different names. Pick your state to get the list of who to contact, in the order that gets you help fastest.',
    'states.draft':'<strong>Draft content.</strong> Programme names below are accurate as general guidance but agency names, phone numbers and links change. Verify each one before this site goes live.',
    'states.choose':'Choose your state','states.pickPrompt':'Pick a state above and the checklist will appear here.','states.selectOpt':'Select a state…',
    'states.order':'Work down this list in order. Steps 1 and 3 are the time-sensitive ones.',
    'states.worth':'Worth knowing in {s}:',
    's1.t':'If your child is under 3 — {ei}','s1.b':'Free evaluation within 45 days of referral, no diagnosis or doctor\u2019s note required. You can refer your own child by phone.','s1.l':'Find contact details',
    's2.t':'If your child is 3 or older — your school district','s2.b':'Write to the special education director asking for a full evaluation, and date the letter. That starts the legal clock, whether or not your child attends public school.','s2.l':'{s} special education',
    's3.t':'Medicaid waiver — {dd}','s3.b':'This is the long-term funding source for therapy, respite, personal care and equipment. Waiting lists are measured in years, so apply even if you don\u2019t need services yet.','s3.l':'Waiver and waitlist','s3.l2':'Apply for Medicaid',
    's4.t':'Free advocacy help — Parent Training and Information Center','s4.b':'Federally funded, free, and they know your districts and agencies by name. Call before your first IEP meeting, not after it goes wrong.','s4.l':'Find the {s} center',
    's5.t':'Legal rights — Protection & Advocacy agency','s5.b':'Every state has one. Free legal advocacy for disability rights in school, services, housing and healthcare.','s5.l':'{s} P&A',
    's6.t':'Language access','s6.b':'Schools, early intervention and federally funded health providers must give you a free interpreter and translate key documents. Ask in writing and keep the reply.','s6.l':'{s} interpreter rights in schools',
    's7.t':'Local community and respite','s7.b':'Autism Society affiliates, your DD Council, the university disability centre (UCEDD), and 211 for respite, food and utility help.','s7.l':'Local autism groups','s7.l2':'Respite in {s}',
    's8.t':'Insurance and benefits','s8.b':'Ask your employer whether your plan is state-regulated or self-funded — {s}\u2019s autism insurance mandate only applies to the first. Check SSI eligibility, and open an ABLE account when you\u2019re ready to save.','s8.l':'{s} insurance mandate',
    'states.everyH':"What exists in every state, whatever it's called",
    'e1.tag':'Birth to 3','e1.t':'Part C early intervention','e1.b':'Free evaluation and services at home. No diagnosis or doctor\u2019s referral needed — you can refer your own child. Services are free or on a sliding scale depending on the state.',
    'e2.tag':'Age 3 to 21','e2.t':'Part B special education','e2.b':'Your public school district must evaluate and, if eligible, provide an IEP — even if your child attends private school or is homeschooled. Request it in writing.',
    'e3.tag':'Money','e3.t':'Medicaid and HCBS waivers','e3.b':'Waivers can cover therapy, respite, personal care and equipment, and in many states they ignore parental income for a disabled child. Waiting lists are long. Apply now.',
    'e4.tag':'Money','e4.t':'SSI and ABLE accounts','e4.b':'Supplemental Security Income for low-income families with a disabled child. ABLE accounts let you save for disability expenses without losing benefit eligibility.',
    'e5.tag':'Free help','e5.t':'Parent Training and Information Center','e5.b':'One in every state, federally funded, free. They train parents on special education rights and will walk you through an IEP dispute.',
    'e6.tag':'Free help','e6.t':'DD Council, UCEDD and P&A','e6.b':'Every state has a Developmental Disabilities Council, a university centre (UCEDD), and a Protection & Advocacy agency that provides free legal advocacy for disability rights.',
    'e7.tag':'Language','e7.t':'Interpretation and translation','e7.b':'Free interpreters and translated documents are a right, not a favour, at schools, early intervention and federally funded healthcare. Ask in writing.',
    'e8.tag':'Adulthood','e8.t':'Vocational rehabilitation','e8.b':'Every state has a VR agency funding job training, coaching and supported employment. Transition planning should begin in the IEP by age 16, earlier in some states.',
    'footer.1':'Welcome to Yuvan. This site provides general information for families. The content shared here is for informational purposes only and does not constitute medical, legal, or educational advice.<br><br>Program details vary by state and change frequently. Please confirm all details with the relevant agency before relying on any information found on this site.',
    'footer.2':'In a crisis, call or text 988. If a child is missing, call 911.',
    pending:'This section has not been translated yet and is shown in English. The menus, the emergency information and the full state-by-state guide are available in your language.'
  };

  T.es={
    'states.policy':'<strong>Medicaid está cambiando.</strong> Los requisitos de trabajo, las renovaciones semestrales y unos presupuestos estatales más ajustados entran en vigor entre ahora y enero de 2027. <a href="/updates/">Qué significa para los waivers y las listas de espera</a>.',
   
    'nav.updates':'Qué está cambiando', 'banner.t':'Actualización de octubre de 2026: han cambiado Medicaid, la educación especial y las recomendaciones de vacunas.', 'banner.l':'Qué significa para su familia', 'banner.x':'Cerrar',
   
    'footer.ded':'Para Yuvan, y para cada familia que está encontrando su camino.',
   
    tagline:'Una guía completa', 'nav.feedback':'Comentarios', 'nav.about':'Acerca de', 'nav.contact':'Contacto', 'nav.privacy':'Privacidad', 'side.guide':'La guía', 'side.site':'Este sitio', menu:'Menú', closemenu:'Cerrar menú',
   
    skip:'Ir al contenido', langLabel:'Idioma', largerText:'Texto más grande',
    'nav.start':'Empezar aquí','nav.understanding':'Entender el autismo','nav.kinds':'Tipos y perfiles','nav.history':'Historia','nav.research':'Qué dice la investigación','nav.support':'Terapias y apoyos','nav.activities':'Actividades diarias','nav.stigma':'Estigma y defensa','nav.states':'Ayuda en su estado','nav.resources':'Recursos',
    'hero.h1':'No tiene que resolver esto en el orden correcto.',
    'hero.lede':'Common Ground es una guía en lenguaje claro para padres y tutores de niños autistas: qué es el autismo, qué muestra realmente la investigación, qué ayuda en el día a día y cómo conseguir los servicios que su estado le debe a su familia.',
    'door1.t':'Algo se siente diferente','door1.d':'Ha notado cosas pero todavía nadie ha dicho la palabra. Empiece por qué es el autismo y cómo funciona la evaluación.',
    'door2.t':'Acabamos de recibir el diagnóstico','door2.d':'Los primeros noventa días, en orden. Qué hacer esta semana, este mes y qué puede esperar.',
    'door3.t':'Necesito servicios y dinero','door3.d':'Intervención temprana, IEP, exenciones de Medicaid, relevo — y a quién llamar en su estado.',
    'door4.t':'Hoy fue un día duro','door4.d':'Crisis sensoriales, sueño, comida, transiciones. Cosas prácticas que bajan la tensión en casa.',
    'crisis.h':'Si está preocupado ahora mismo','crisis.t':'Ayuda urgente',
    'crisis.p1':'<strong>988</strong> — llame o envíe un mensaje de texto a la Línea de Prevención del Suicidio y Crisis, 24 horas, para cualquier crisis de salud mental, incluida la de los cuidadores. En algunas zonas pueden enviar un equipo de crisis en lugar de la policía. Pida "español" y le conectan con un intérprete.',
    'crisis.p2':'<strong>911</strong> — si su hijo ha desaparecido. Diga en inglés "autistic and may not respond to their name" y mencione el agua: acercarse al agua es la principal causa de muerte tras una fuga. Pregunte en su departamento de policía si tienen un registro voluntario para residentes con discapacidad.',
    'crisis.p3':'Si usted mismo siente que está al límite como cuidador, hablar con su médico o con un consejero es un paso razonable, y muchos padres en esta situación lo dan.',
    'crisis.p4':'Ambas líneas ofrecen intérpretes. Puede decir el nombre de su idioma en inglés y esperar a que le conecten.',
    'states.h1':'Ayuda en su estado','states.lede':'Todos los estados tienen los mismos programas con nombres distintos. Elija su estado para ver a quién contactar, en el orden que consigue ayuda más rápido.',
    'states.draft':'<strong>Contenido preliminar.</strong> Los nombres de los programas son correctos como orientación general, pero las agencias, teléfonos y enlaces cambian. Verifique cada uno antes de publicar este sitio.',
    'states.choose':'Elija su estado','states.pickPrompt':'Elija un estado arriba y aquí aparecerá la lista de pasos.','states.selectOpt':'Seleccione un estado…',
    'states.order':'Siga esta lista en orden. Los pasos 1 y 3 son los urgentes.',
    'states.worth':'Conviene saber en {s}:',
    's1.t':'Si su hijo tiene menos de 3 años — {ei}','s1.b':'Evaluación gratuita en un plazo de 45 días desde la remisión, sin diagnóstico ni orden médica. Usted mismo puede referir a su hijo por teléfono.','s1.l':'Buscar datos de contacto',
    's2.t':'Si su hijo tiene 3 años o más — su distrito escolar','s2.b':'Escriba al director de educación especial pidiendo una evaluación completa, y ponga la fecha en la carta. Eso activa el plazo legal, aunque su hijo no vaya a una escuela pública.','s2.l':'Educación especial en {s}',
    's3.t':'Exención de Medicaid — {dd}','s3.b':'Es la fuente de financiación a largo plazo para terapia, relevo, cuidado personal y equipos. Las listas de espera son de años, así que solicite aunque todavía no necesite servicios.','s3.l':'Exención y lista de espera','s3.l2':'Solicitar Medicaid',
    's4.t':'Ayuda gratuita — Centro de Formación e Información para Padres','s4.b':'Financiado por el gobierno federal, gratuito, y conocen su distrito y sus agencias por nombre. Llame antes de su primera reunión de IEP, no después de que salga mal.','s4.l':'Buscar el centro de {s}',
    's5.t':'Derechos legales — agencia de Protección y Defensa','s5.b':'Todos los estados tienen una. Defensa legal gratuita de los derechos de las personas con discapacidad en escuela, servicios, vivienda y salud.','s5.l':'Protección y Defensa en {s}',
    's6.t':'Acceso lingüístico','s6.b':'Las escuelas, la intervención temprana y los proveedores de salud con fondos federales deben darle intérprete gratuito y traducir los documentos importantes. Pídalo por escrito y guarde la respuesta.','s6.l':'Derecho a intérprete en escuelas de {s}',
    's7.t':'Comunidad local y relevo','s7.b':'Filiales de Autism Society, el Consejo DD de su estado, el centro universitario de discapacidad (UCEDD) y el 211 para relevo, comida y ayuda con servicios básicos.','s7.l':'Grupos locales de autismo','s7.l2':'Relevo en {s}',
    's8.t':'Seguro y beneficios','s8.b':'Pregunte a su empleador si su plan está regulado por el estado o es autofinanciado: el mandato de cobertura de autismo de {s} solo se aplica al primero. Verifique si califica para SSI y abra una cuenta ABLE cuando pueda ahorrar.','s8.l':'Mandato de seguro en {s}',
    'states.everyH':'Lo que existe en todos los estados, se llame como se llame',
    'e1.tag':'0 a 3 años','e1.t':'Intervención temprana (Parte C)','e1.b':'Evaluación y servicios gratuitos en casa. No hace falta diagnóstico ni remisión médica: usted mismo puede referir a su hijo. Los servicios son gratuitos o según ingresos, depende del estado.',
    'e2.tag':'3 a 21 años','e2.t':'Educación especial (Parte B)','e2.b':'Su distrito escolar público debe evaluar y, si califica, dar un IEP, incluso si su hijo va a escuela privada o estudia en casa. Solicítelo por escrito.',
    'e3.tag':'Dinero','e3.t':'Medicaid y exenciones HCBS','e3.b':'Las exenciones pueden cubrir terapia, relevo, cuidado personal y equipos, y en muchos estados no cuentan los ingresos de los padres para un niño con discapacidad. Las listas son largas. Solicite ya.',
    'e4.tag':'Dinero','e4.t':'SSI y cuentas ABLE','e4.b':'Seguridad de Ingreso Suplementario para familias de bajos ingresos con un hijo con discapacidad. Las cuentas ABLE permiten ahorrar para gastos de discapacidad sin perder los beneficios.',
    'e5.tag':'Ayuda gratuita','e5.t':'Centro de Formación e Información para Padres','e5.b':'Uno en cada estado, financiado federalmente y gratuito. Capacitan a los padres sobre derechos en educación especial y le acompañan en una disputa de IEP.',
    'e6.tag':'Ayuda gratuita','e6.t':'Consejo DD, UCEDD y P&A','e6.b':'Cada estado tiene un Consejo de Discapacidades del Desarrollo, un centro universitario (UCEDD) y una agencia de Protección y Defensa que da asesoría legal gratuita.',
    'e7.tag':'Idioma','e7.t':'Interpretación y traducción','e7.b':'Los intérpretes gratuitos y los documentos traducidos son un derecho, no un favor, en escuelas, intervención temprana y salud con fondos federales. Pídalo por escrito.',
    'e8.tag':'Vida adulta','e8.t':'Rehabilitación vocacional','e8.b':'Cada estado tiene una agencia de RV que financia formación laboral, acompañamiento y empleo con apoyo. La planificación de la transición debe empezar en el IEP a los 16 años, antes en algunos estados.',
    'footer.1':'<strong>Yuvan</strong> — sitio preliminar. Información general para familias; no es asesoramiento médico, legal ni educativo. Los detalles de los programas varían por estado y cambian a menudo; confirme con la agencia antes de fiarse de algo aquí.',
    'footer.2':'En caso de crisis, llame o envíe un mensaje al 988. Si un niño ha desaparecido, llame al 911.',
    pending:'Esta sección todavía no está traducida y se muestra en inglés. Los menús, la información de emergencia y la guía completa por estado sí están en su idioma.'
  };

  T['zh-Hans']={
    'nav.updates':'最新政策变化', 'banner.t':'2026年10月政策更新：Medicaid、特殊教育与疫苗指南均已变更。', 'banner.l':'这对你家庭意味着什么', 'banner.x':'关闭',
   
    'footer.ded':'献给 Yuvan，以及每一个正在寻找方向的家庭。',
   
    tagline:'一份完整指南', 'nav.feedback':'反馈', 'nav.about':'关于本站', 'nav.contact':'联系我们', 'nav.privacy':'隐私', 'side.guide':'指南', 'side.site':'关于本站', menu:'菜单', closemenu:'关闭菜单',
   
    skip:'跳到主要内容', langLabel:'语言', largerText:'放大文字',
    'nav.start':'从这里开始','nav.understanding':'认识自闭症','nav.kinds':'类型与表现','nav.history':'历史','nav.research':'研究怎么说','nav.support':'治疗与支持','nav.activities':'日常活动','nav.stigma':'污名与倡导','nav.states':'各州援助','nav.resources':'资源',
    'hero.h1':'你不需要按正确的顺序把这一切弄明白。',
    'hero.lede':'Common Ground 是为自闭症儿童的家长和监护人准备的通俗指南：什么是自闭症、研究到底说了什么、日常生活中什么真正有用，以及如何获得你所在州应当提供的服务。',
    'door1.t':'感觉有些不一样','door1.d':'你已经注意到一些情况，但还没有人说出那个词。先了解什么是自闭症以及评估流程。',
    'door2.t':'我们刚拿到诊断','door2.d':'最初九十天，按顺序来。这周做什么、这个月做什么、什么可以先放一放。',
    'door3.t':'我需要服务和资金','door3.d':'早期干预、IEP、Medicaid 豁免、喘息服务——以及在你所在州该联系谁。',
    'door4.t':'今天很难熬','door4.d':'情绪崩溃、睡眠、饮食、过渡。一些能让家里缓和下来的实用做法。',
    'crisis.h':'如果你现在很担心','crisis.t':'紧急求助',
    'crisis.p1':'<strong>988</strong> — 全天候拨打或发短信给自杀与危机生命线，适用于任何心理健康危机，包括照顾者本人。部分地区可以派出移动危机团队而不是警察。可以说“Chinese”来要求中文口译。',
    'crisis.p2':'<strong>911</strong> — 如果孩子走失。用英文说 “autistic and may not respond to their name”，并提到水：走失后靠近水域是最主要的死亡原因。可以询问当地警局是否有面向残障居民的自愿登记。',
    'crisis.p3':'如果你作为照顾者感到快撑不住了，和自己的医生或心理咨询师谈一谈是合理的一步，很多处境相同的家长都这样做。',
    'crisis.p4':'两条热线都提供口译。你可以用英文说出你的语言名称，然后等待接通。',
    'states.h1':'各州援助','states.lede':'每个州都有同样的几类项目，只是名称不同。选择你所在的州，按最快拿到帮助的顺序查看该联系谁。',
    'states.draft':'<strong>草稿内容。</strong>以下项目名称作为总体指引是准确的，但机构名称、电话和链接会变化。网站上线前请逐项核实。',
    'states.choose':'选择你所在的州','states.pickPrompt':'在上方选择一个州，清单会显示在这里。','states.selectOpt':'请选择州…',
    'states.order':'按顺序逐项进行。第 1 步和第 3 步最紧迫。',
    'states.worth':'在{s}特别值得注意：',
    's1.t':'孩子未满 3 岁 — {ei}','s1.b':'转介后 45 天内免费评估，不需要诊断或医生证明。你可以自己打电话为孩子申请。','s1.l':'查找联系方式',
    's2.t':'孩子已满 3 岁 — 你所在的学区','s2.b':'写信给特殊教育主任要求做全面评估，并在信上注明日期。这会启动法定时限，无论孩子是否就读公立学校。','s2.l':'{s}特殊教育',
    's3.t':'Medicaid 豁免 — {dd}','s3.b':'这是治疗、喘息服务、个人照护和辅具的长期资金来源。等候名单往往长达数年，所以即使目前不需要也要先申请。','s3.l':'豁免与等候名单','s3.l2':'申请 Medicaid',
    's4.t':'免费倡导支持 — 家长培训与信息中心','s4.b':'由联邦资助、完全免费，而且熟悉你所在学区和机构。请在第一次 IEP 会议之前就联系他们。','s4.l':'查找{s}的中心',
    's5.t':'法律权利 — 保护与倡导机构','s5.b':'每个州都有一个。在教育、服务、住房和医疗方面提供免费的残障权利法律协助。','s5.l':'{s}保护与倡导机构',
    's6.t':'语言服务','s6.b':'学校、早期干预机构和接受联邦资金的医疗机构必须提供免费口译并翻译重要文件。请以书面形式提出并保留回复。','s6.l':'{s}学校口译权利',
    's7.t':'本地社群与喘息服务','s7.b':'Autism Society 地方分会、你所在州的 DD 委员会、大学残障中心（UCEDD），以及 211 提供喘息、食物和水电费援助。','s7.l':'本地自闭症团体','s7.l2':'{s}的喘息服务',
    's8.t':'保险与福利','s8.b':'询问雇主你的保险是州监管还是自保计划——{s}的自闭症保险强制规定只适用于前者。确认是否符合 SSI 资格，并在有条件储蓄时开设 ABLE 账户。','s8.l':'{s}保险强制规定',
    'states.everyH':'每个州都有的项目，不管它叫什么名字',
    'e1.tag':'0 至 3 岁','e1.t':'Part C 早期干预','e1.b':'免费上门评估与服务。不需要诊断或医生转介，你可以自己申请。服务免费或按收入分级，视各州而定。',
    'e2.tag':'3 至 21 岁','e2.t':'Part B 特殊教育','e2.b':'你所在的公立学区必须进行评估，符合条件就要提供 IEP——即使孩子就读私立学校或在家自学。请以书面提出申请。',
    'e3.tag':'资金','e3.t':'Medicaid 与 HCBS 豁免','e3.b':'豁免可涵盖治疗、喘息服务、个人照护和辅具，许多州对残障儿童不计父母收入。等候名单很长，请立即申请。',
    'e4.tag':'资金','e4.t':'SSI 与 ABLE 账户','e4.b':'SSI 是给有残障子女的低收入家庭的补助。ABLE 账户让你为残障相关支出储蓄而不影响福利资格。',
    'e5.tag':'免费协助','e5.t':'家长培训与信息中心','e5.b':'每州一个，联邦资助，免费。他们培训家长了解特殊教育权利，并在 IEP 争议中全程协助。',
    'e6.tag':'免费协助','e6.t':'DD 委员会、UCEDD 与 P&A','e6.b':'每个州都有发展障碍委员会、大学中心（UCEDD）和提供免费法律倡导的保护与倡导机构。',
    'e7.tag':'语言','e7.t':'口译与翻译','e7.b':'在学校、早期干预和接受联邦资金的医疗机构，免费口译和翻译文件是权利，不是恩惠。请以书面提出。',
    'e8.tag':'成年','e8.t':'职业复健','e8.b':'每个州都有职业复健机构，资助就业培训、辅导和支持性就业。转衔规划应在 16 岁前写入 IEP，部分州更早。',
    'footer.1':'<strong>Yuvan</strong> — 草稿网站。面向家庭的一般性信息，不构成医疗、法律或教育建议。各州项目细节不同且经常变动；在依赖这里的信息之前请向相关机构确认。',
    'footer.2':'遇到危机请拨打或发短信至 988。孩子走失请拨打 911。',
    pending:'本节尚未翻译，以英文显示。菜单、紧急信息和完整的各州指南均有中文版。'
  };

  T.vi={
    'nav.updates':'Những thay đổi mới', 'banner.t':'Cập nhật chính sách tháng 10 năm 2026: Medicaid, giáo dục đặc biệt và hướng dẫn tiêm chủng đều đã thay đổi.', 'banner.l':'Điều này có ý nghĩa gì với gia đình bạn', 'banner.x':'Đóng',
   
    'footer.ded':'Dành cho Yuvan — và cho mọi gia đình đang tìm đường.',
   
    tagline:'Cẩm nang đầy đủ', 'nav.feedback':'Góp ý', 'nav.about':'Giới thiệu', 'nav.contact':'Liên hệ', 'nav.privacy':'Quyền riêng tư', 'side.guide':'Cẩm nang', 'side.site':'Về trang này', menu:'Menu', closemenu:'Đóng menu',
   
    skip:'Chuyển đến nội dung', langLabel:'Ngôn ngữ', largerText:'Chữ lớn hơn',
    'nav.start':'Bắt đầu tại đây','nav.understanding':'Hiểu về tự kỷ','nav.kinds':'Các dạng và biểu hiện','nav.history':'Lịch sử','nav.research':'Nghiên cứu nói gì','nav.support':'Trị liệu và hỗ trợ','nav.activities':'Hoạt động hằng ngày','nav.stigma':'Kỳ thị và vận động','nav.states':'Trợ giúp tại tiểu bang','nav.resources':'Tài nguyên',
    'hero.h1':'Bạn không cần phải hiểu mọi thứ theo đúng thứ tự.',
    'hero.lede':'Common Ground là hướng dẫn bằng ngôn ngữ dễ hiểu dành cho cha mẹ và người giám hộ của trẻ tự kỷ: tự kỷ là gì, nghiên cứu thực sự cho thấy điều gì, điều gì giúp ích hằng ngày, và cách tìm những dịch vụ mà tiểu bang có trách nhiệm cung cấp cho gia đình bạn.',
    'door1.t':'Có điều gì đó khác thường','door1.d':'Bạn đã nhận thấy vài điều nhưng chưa ai nói ra. Hãy bắt đầu từ tự kỷ là gì và quy trình đánh giá.',
    'door2.t':'Chúng tôi vừa nhận chẩn đoán','door2.d':'Chín mươi ngày đầu tiên, theo thứ tự. Việc cần làm tuần này, tháng này, và việc có thể chờ.',
    'door3.t':'Tôi cần dịch vụ và hỗ trợ tài chính','door3.d':'Can thiệp sớm, IEP, miễn trừ Medicaid, chăm sóc thay thế — và nên gọi cho ai tại tiểu bang của bạn.',
    'door4.t':'Hôm nay thật khó khăn','door4.d':'Cơn bùng nổ, giấc ngủ, ăn uống, chuyển tiếp. Những cách thiết thực làm dịu không khí trong nhà.',
    'crisis.h':'Nếu bạn đang lo lắng ngay lúc này','crisis.t':'Trợ giúp khẩn cấp',
    'crisis.p1':'<strong>988</strong> — gọi hoặc nhắn tin cho Đường dây Khủng hoảng và Ngăn ngừa Tự tử, 24/7, cho mọi khủng hoảng sức khỏe tâm thần, kể cả của người chăm sóc. Một số nơi có thể cử đội khủng hoảng lưu động thay vì cảnh sát. Hãy nói “Vietnamese” để được thông dịch.',
    'crisis.p2':'<strong>911</strong> — nếu con bạn mất tích. Hãy nói bằng tiếng Anh “autistic and may not respond to their name” và nhắc đến nước: đi lạc về phía nước là nguyên nhân tử vong hàng đầu. Hỏi sở cảnh sát địa phương xem có danh sách đăng ký tự nguyện cho cư dân khuyết tật không.',
    'crisis.p3':'Nếu bản thân bạn thấy mình sắp không chịu nổi, nói chuyện với bác sĩ hoặc chuyên viên tư vấn là bước hợp lý, và nhiều phụ huynh trong hoàn cảnh này đã làm vậy.',
    'crisis.p4':'Cả hai đường dây đều có thông dịch viên. Bạn có thể nói tên ngôn ngữ của mình bằng tiếng Anh rồi chờ được kết nối.',
    'states.h1':'Trợ giúp tại tiểu bang của bạn','states.lede':'Mọi tiểu bang đều có cùng vài chương trình nhưng mang tên khác nhau. Chọn tiểu bang để xem cần liên hệ với ai, theo thứ tự giúp bạn nhận hỗ trợ nhanh nhất.',
    'states.draft':'<strong>Nội dung nháp.</strong> Tên chương trình bên dưới chính xác ở mức hướng dẫn chung, nhưng tên cơ quan, số điện thoại và liên kết có thể thay đổi. Hãy kiểm chứng trước khi trang web đi vào hoạt động.',
    'states.choose':'Chọn tiểu bang của bạn','states.pickPrompt':'Chọn một tiểu bang ở trên và danh sách sẽ hiện ra ở đây.','states.selectOpt':'Chọn tiểu bang…',
    'states.order':'Làm theo thứ tự danh sách này. Bước 1 và 3 là gấp nhất.',
    'states.worth':'Điều đáng lưu ý tại {s}:',
    's1.t':'Nếu con bạn dưới 3 tuổi — {ei}','s1.b':'Đánh giá miễn phí trong vòng 45 ngày kể từ khi giới thiệu, không cần chẩn đoán hay giấy bác sĩ. Bạn có thể tự gọi điện đăng ký cho con.','s1.l':'Tìm thông tin liên hệ',
    's2.t':'Nếu con bạn từ 3 tuổi trở lên — học khu của bạn','s2.b':'Viết thư cho giám đốc giáo dục đặc biệt yêu cầu đánh giá toàn diện, và ghi rõ ngày. Việc đó khởi động thời hạn pháp lý, kể cả khi con bạn không học trường công.','s2.l':'Giáo dục đặc biệt {s}',
    's3.t':'Miễn trừ Medicaid — {dd}','s3.b':'Đây là nguồn tài trợ dài hạn cho trị liệu, chăm sóc thay thế, chăm sóc cá nhân và thiết bị. Danh sách chờ tính bằng năm, nên hãy nộp đơn ngay cả khi chưa cần.','s3.l':'Miễn trừ và danh sách chờ','s3.l2':'Nộp đơn Medicaid',
    's4.t':'Hỗ trợ miễn phí — Trung tâm Thông tin và Đào tạo Phụ huynh','s4.b':'Do liên bang tài trợ, miễn phí, và họ biết rõ học khu cùng các cơ quan tại địa phương. Hãy gọi trước cuộc họp IEP đầu tiên.','s4.l':'Tìm trung tâm tại {s}',
    's5.t':'Quyền pháp lý — cơ quan Bảo vệ và Bênh vực','s5.b':'Mỗi tiểu bang đều có một cơ quan như vậy. Hỗ trợ pháp lý miễn phí về quyền của người khuyết tật trong trường học, dịch vụ, nhà ở và y tế.','s5.l':'Cơ quan P&A {s}',
    's6.t':'Tiếp cận ngôn ngữ','s6.b':'Trường học, chương trình can thiệp sớm và cơ sở y tế nhận ngân sách liên bang phải cung cấp thông dịch miễn phí và dịch các tài liệu quan trọng. Hãy yêu cầu bằng văn bản và giữ lại phản hồi.','s6.l':'Quyền có thông dịch trong trường học {s}',
    's7.t':'Cộng đồng địa phương và chăm sóc thay thế','s7.b':'Chi nhánh Autism Society, Hội đồng DD của tiểu bang, trung tâm khuyết tật đại học (UCEDD), và 211 để xin chăm sóc thay thế, thực phẩm và hỗ trợ tiện ích.','s7.l':'Nhóm tự kỷ địa phương','s7.l2':'Chăm sóc thay thế tại {s}',
    's8.t':'Bảo hiểm và trợ cấp','s8.b':'Hỏi chủ lao động xem chương trình bảo hiểm của bạn do tiểu bang quản lý hay tự bảo hiểm — quy định bắt buộc về tự kỷ của {s} chỉ áp dụng cho loại thứ nhất. Kiểm tra điều kiện SSI và mở tài khoản ABLE khi có thể tiết kiệm.','s8.l':'Quy định bảo hiểm {s}',
    'states.everyH':'Những gì tồn tại ở mọi tiểu bang, dù mang tên gì',
    'e1.tag':'0 đến 3 tuổi','e1.t':'Can thiệp sớm (Part C)','e1.b':'Đánh giá và dịch vụ miễn phí tại nhà. Không cần chẩn đoán hay giấy giới thiệu — bạn có thể tự đăng ký cho con. Dịch vụ miễn phí hoặc theo thu nhập, tùy tiểu bang.',
    'e2.tag':'3 đến 21 tuổi','e2.t':'Giáo dục đặc biệt (Part B)','e2.b':'Học khu công lập phải đánh giá và, nếu đủ điều kiện, cấp IEP — kể cả khi con bạn học trường tư hoặc học tại nhà. Hãy yêu cầu bằng văn bản.',
    'e3.tag':'Tài chính','e3.t':'Medicaid và miễn trừ HCBS','e3.b':'Miễn trừ có thể chi trả trị liệu, chăm sóc thay thế, chăm sóc cá nhân và thiết bị; nhiều tiểu bang không tính thu nhập cha mẹ đối với trẻ khuyết tật. Danh sách chờ rất dài. Hãy nộp đơn ngay.',
    'e4.tag':'Tài chính','e4.t':'SSI và tài khoản ABLE','e4.b':'SSI dành cho gia đình thu nhập thấp có con khuyết tật. Tài khoản ABLE cho phép tiết kiệm cho chi phí khuyết tật mà không mất quyền hưởng trợ cấp.',
    'e5.tag':'Hỗ trợ miễn phí','e5.t':'Trung tâm Thông tin và Đào tạo Phụ huynh','e5.b':'Mỗi tiểu bang một trung tâm, do liên bang tài trợ, miễn phí. Họ đào tạo phụ huynh về quyền giáo dục đặc biệt và đồng hành khi có tranh chấp IEP.',
    'e6.tag':'Hỗ trợ miễn phí','e6.t':'Hội đồng DD, UCEDD và P&A','e6.b':'Mỗi tiểu bang có Hội đồng Khuyết tật Phát triển, một trung tâm đại học (UCEDD) và cơ quan Bảo vệ và Bênh vực cung cấp trợ giúp pháp lý miễn phí.',
    'e7.tag':'Ngôn ngữ','e7.t':'Thông dịch và phiên dịch','e7.b':'Thông dịch miễn phí và tài liệu được dịch là quyền, không phải ân huệ, tại trường học, can thiệp sớm và y tế có ngân sách liên bang. Hãy yêu cầu bằng văn bản.',
    'e8.tag':'Tuổi trưởng thành','e8.t':'Phục hồi chức năng nghề nghiệp','e8.b':'Mỗi tiểu bang có cơ quan VR tài trợ đào tạo nghề, huấn luyện và việc làm có hỗ trợ. Kế hoạch chuyển tiếp nên bắt đầu trong IEP từ 16 tuổi, sớm hơn ở một số tiểu bang.',
    'footer.1':'<strong>Yuvan</strong> — trang nháp. Thông tin chung cho gia đình, không phải tư vấn y tế, pháp lý hay giáo dục. Chi tiết chương trình khác nhau theo tiểu bang và thay đổi thường xuyên; hãy xác nhận với cơ quan trước khi dựa vào bất kỳ thông tin nào ở đây.',
    'footer.2':'Khi khủng hoảng, gọi hoặc nhắn tin 988. Nếu trẻ mất tích, gọi 911.',
    pending:'Phần này chưa được dịch và đang hiển thị bằng tiếng Anh. Menu, thông tin khẩn cấp và toàn bộ hướng dẫn theo tiểu bang đều có bằng tiếng Việt.'
  };

  T.ko={
    'nav.updates':'달라진 정책', 'banner.t':'2026년 10월 정책 변경: 메디케이드, 특수교육, 백신 지침이 모두 바뀌었습니다.', 'banner.l':'우리 가족에게 어떤 의미인가', 'banner.x':'닫기',
   
    'footer.ded':'Yuvan에게, 그리고 길을 찾아가는 모든 가족에게.',
   
    tagline:'완전한 안내서', 'nav.feedback':'의견 보내기', 'nav.about':'소개', 'nav.contact':'문의', 'nav.privacy':'개인정보', 'side.guide':'안내서', 'side.site':'이 사이트', menu:'메뉴', closemenu:'메뉴 닫기',
   
    skip:'본문으로 건너뛰기', langLabel:'언어', largerText:'큰 글씨',
    'nav.start':'여기서 시작','nav.understanding':'자폐 이해하기','nav.kinds':'유형과 특성','nav.history':'역사','nav.research':'연구가 말하는 것','nav.support':'치료와 지원','nav.activities':'일상 활동','nav.stigma':'낙인과 권리옹호','nav.states':'주별 지원','nav.resources':'자료',
    'hero.h1':'모든 것을 정해진 순서대로 알아낼 필요는 없습니다.',
    'hero.lede':'Common Ground는 자폐 아동의 부모와 보호자를 위한 쉬운 안내서입니다. 자폐란 무엇인지, 연구가 실제로 무엇을 보여주는지, 일상에서 무엇이 도움이 되는지, 그리고 주 정부가 제공해야 할 서비스를 어떻게 찾는지 다룹니다.',
    'door1.t':'뭔가 다르다고 느껴집니다','door1.d':'무언가를 알아차렸지만 아직 아무도 그 말을 하지 않았습니다. 자폐란 무엇이고 평가는 어떻게 진행되는지부터 보세요.',
    'door2.t':'방금 진단을 받았습니다','door2.d':'첫 90일을 순서대로. 이번 주에 할 일, 이번 달에 할 일, 그리고 미뤄도 되는 일.',
    'door3.t':'서비스와 지원금이 필요합니다','door3.d':'조기개입, IEP, 메디케이드 웨이버, 레스핏 — 그리고 주에서 어디에 연락해야 하는지.',
    'door4.t':'오늘은 힘든 하루였습니다','door4.d':'멜트다운, 수면, 식사, 전환. 집안의 긴장을 낮추는 실질적인 방법들.',
    'crisis.h':'지금 걱정되신다면','crisis.t':'긴급 도움',
    'crisis.p1':'<strong>988</strong> — 자살 및 위기 상담 전화로 24시간 전화 또는 문자할 수 있습니다. 보호자 본인을 포함해 모든 정신건강 위기에 해당합니다. 일부 지역은 경찰 대신 이동 위기팀을 보낼 수 있습니다. “Korean”이라고 말하면 통역이 연결됩니다.',
    'crisis.p2':'<strong>911</strong> — 아이가 실종된 경우. 영어로 “autistic and may not respond to their name”이라고 말하고 물을 언급하세요. 실종 후 물가로 가는 것이 가장 큰 사망 원인입니다. 지역 경찰서에 장애인 자율 등록 제도가 있는지 문의하세요.',
    'crisis.p3':'보호자로서 한계에 가까워졌다고 느낀다면, 본인의 주치의나 상담사와 이야기하는 것이 합리적인 다음 단계이며 많은 부모가 그렇게 합니다.',
    'crisis.p4':'두 회선 모두 통역을 제공합니다. 영어로 본인의 언어 이름을 말하고 연결을 기다리면 됩니다.',
    'states.h1':'주별 지원','states.lede':'모든 주가 같은 몇 가지 프로그램을 다른 이름으로 운영합니다. 주를 선택하면 가장 빨리 도움을 받는 순서대로 연락처 목록이 나옵니다.',
    'states.draft':'<strong>초안 내용입니다.</strong> 아래 프로그램 이름은 일반 안내로는 정확하지만 기관명, 전화번호, 링크는 바뀝니다. 사이트 공개 전에 각 항목을 확인하세요.',
    'states.choose':'주를 선택하세요','states.pickPrompt':'위에서 주를 선택하면 여기에 목록이 나타납니다.','states.selectOpt':'주 선택…',
    'states.order':'이 목록을 순서대로 진행하세요. 1번과 3번이 가장 시급합니다.',
    'states.worth':'{s}에서 알아둘 점:',
    's1.t':'자녀가 만 3세 미만인 경우 — {ei}','s1.b':'의뢰 후 45일 이내 무료 평가, 진단서나 의사 소견서가 필요 없습니다. 보호자가 직접 전화로 의뢰할 수 있습니다.','s1.l':'연락처 찾기',
    's2.t':'자녀가 만 3세 이상인 경우 — 거주 학군','s2.b':'특수교육 책임자에게 종합 평가를 요청하는 서면을 보내고 날짜를 적으세요. 공립학교에 다니지 않아도 법적 기한이 시작됩니다.','s2.l':'{s} 특수교육',
    's3.t':'메디케이드 웨이버 — {dd}','s3.b':'치료, 레스핏, 개인 돌봄, 보조기기의 장기 재원입니다. 대기자 명단은 몇 년 단위이므로 지금 필요하지 않더라도 신청하세요.','s3.l':'웨이버와 대기자 명단','s3.l2':'메디케이드 신청',
    's4.t':'무료 지원 — 부모 교육정보 센터','s4.b':'연방 지원, 무료이며 지역 학군과 기관을 잘 알고 있습니다. 첫 IEP 회의 전에 연락하세요.','s4.l':'{s} 센터 찾기',
    's5.t':'법적 권리 — 보호·옹호 기관','s5.b':'모든 주에 있습니다. 학교, 서비스, 주거, 의료에서 장애인 권리에 관한 무료 법률 지원을 제공합니다.','s5.l':'{s} 보호·옹호 기관',
    's6.t':'언어 지원','s6.b':'학교, 조기개입 기관, 연방 지원을 받는 의료기관은 무료 통역과 주요 문서 번역을 제공해야 합니다. 서면으로 요청하고 답변을 보관하세요.','s6.l':'{s} 학교 통역 권리',
    's7.t':'지역사회와 레스핏','s7.b':'Autism Society 지부, 주 DD 위원회, 대학 장애센터(UCEDD), 그리고 레스핏·식품·공과금 지원을 위한 211.','s7.l':'지역 자폐 단체','s7.l2':'{s} 레스핏',
    's8.t':'보험과 급여','s8.b':'고용주에게 보험이 주 규제 플랜인지 자가보험인지 확인하세요 — {s}의 자폐 보험 의무는 전자에만 적용됩니다. SSI 자격을 확인하고, 저축할 여력이 되면 ABLE 계좌를 개설하세요.','s8.l':'{s} 보험 의무 규정',
    'states.everyH':'이름은 달라도 모든 주에 있는 제도',
    'e1.tag':'0~3세','e1.t':'조기개입 (Part C)','e1.b':'가정 방문 무료 평가와 서비스. 진단이나 의사 의뢰 없이 보호자가 직접 신청할 수 있습니다. 주에 따라 무료이거나 소득 기준 차등입니다.',
    'e2.tag':'3~21세','e2.t':'특수교육 (Part B)','e2.b':'공립 학군은 평가해야 하고 자격이 되면 IEP를 제공해야 합니다 — 사립학교나 홈스쿨이어도 마찬가지입니다. 서면으로 요청하세요.',
    'e3.tag':'비용','e3.t':'메디케이드와 HCBS 웨이버','e3.b':'웨이버는 치료, 레스핏, 개인 돌봄, 보조기기를 지원할 수 있고, 많은 주에서 장애 아동은 부모 소득을 보지 않습니다. 대기가 깁니다. 지금 신청하세요.',
    'e4.tag':'비용','e4.t':'SSI와 ABLE 계좌','e4.b':'SSI는 장애 아동이 있는 저소득 가정을 위한 보충소득보장입니다. ABLE 계좌는 급여 자격을 잃지 않고 장애 관련 비용을 저축하게 해줍니다.',
    'e5.tag':'무료 지원','e5.t':'부모 교육정보 센터','e5.b':'주마다 하나씩, 연방 지원, 무료입니다. 특수교육 권리를 교육하고 IEP 분쟁 과정을 함께합니다.',
    'e6.tag':'무료 지원','e6.t':'DD 위원회, UCEDD, P&A','e6.b':'모든 주에 발달장애 위원회, 대학센터(UCEDD), 그리고 무료 법률 옹호를 제공하는 보호·옹호 기관이 있습니다.',
    'e7.tag':'언어','e7.t':'통역과 번역','e7.b':'무료 통역과 번역 문서는 학교, 조기개입, 연방 지원 의료에서 호의가 아니라 권리입니다. 서면으로 요청하세요.',
    'e8.tag':'성인기','e8.t':'직업재활','e8.b':'모든 주에 직업 훈련, 코칭, 지원고용을 지원하는 VR 기관이 있습니다. 전환 계획은 늦어도 16세에 IEP에 포함되어야 하며 일부 주는 더 이릅니다.',
    'footer.1':'<strong>Yuvan</strong> — 초안 사이트입니다. 가족을 위한 일반 정보이며 의료·법률·교육 자문이 아닙니다. 프로그램 세부사항은 주마다 다르고 자주 바뀌므로 기관에 확인하세요.',
    'footer.2':'위기 상황에서는 988로 전화하거나 문자하세요. 아이가 실종되면 911에 전화하세요.',
    pending:'이 섹션은 아직 번역되지 않아 영어로 표시됩니다. 메뉴, 긴급 정보, 주별 안내는 한국어로 제공됩니다.'
  };

  T.tl={
    'nav.updates':'Mga pagbabago', 'banner.t':'Update sa patakaran, Oktubre 2026: nagbago ang Medicaid, special education at gabay sa bakuna.', 'banner.l':'Ano ang ibig sabihin nito para sa pamilya ninyo', 'banner.x':'Isara',
   
    'footer.ded':'Para kay Yuvan — at sa bawat pamilyang naghahanap ng daan.',
   
    tagline:'Isang kumpletong gabay', 'nav.feedback':'Puna', 'nav.about':'Tungkol dito', 'nav.contact':'Kontak', 'nav.privacy':'Privacy', 'side.guide':'Ang gabay', 'side.site':'Tungkol sa site', menu:'Menu', closemenu:'Isara ang menu',
   
    skip:'Lumaktaw sa nilalaman', langLabel:'Wika', largerText:'Mas malaking teksto',
    'nav.start':'Magsimula rito','nav.understanding':'Pag-unawa sa autism','nav.kinds':'Mga uri at katangian','nav.history':'Kasaysayan','nav.research':'Ang sinasabi ng pananaliksik','nav.support':'Terapiya at suporta','nav.activities':'Pang-araw-araw na gawain','nav.stigma':'Stigma at pagtatanggol','nav.states':'Tulong sa inyong estado','nav.resources':'Mga mapagkukunan',
    'hero.h1':'Hindi kailangang maintindihan mo ito sa tamang pagkakasunod-sunod.',
    'hero.lede':'Ang Common Ground ay isang malinaw na gabay para sa mga magulang at tagapag-alaga ng mga batang autistic — kung ano ang autism, ano talaga ang sinasabi ng pananaliksik, ano ang nakatutulong araw-araw, at paano makuha ang mga serbisyong dapat ibigay ng inyong estado.',
    'door1.t':'May kakaiba akong napapansin','door1.d':'May napansin ka na pero wala pang nagsasabi ng salita. Simulan sa kung ano ang autism at paano ang ebalwasyon.',
    'door2.t':'Kababahagi lang ng diagnosis','door2.d':'Ang unang siyamnapung araw, sunod-sunod. Ano ang gagawin ngayong linggo, ngayong buwan, at ano ang puwedeng maghintay.',
    'door3.t':'Kailangan ko ng serbisyo at tulong pinansyal','door3.d':'Early intervention, IEP, Medicaid waiver, respite — at kung sino ang tatawagan sa inyong estado.',
    'door4.t':'Mahirap ang araw ngayon','door4.d':'Meltdown, tulog, pagkain, paglipat ng gawain. Mga praktikal na paraan para kumalma sa bahay.',
    'crisis.h':'Kung nag-aalala ka ngayon','crisis.t':'Agarang tulong',
    'crisis.p1':'<strong>988</strong> — tumawag o mag-text sa Suicide &amp; Crisis Lifeline, 24/7, para sa anumang krisis sa kalusugang pangkaisipan, pati na ng tagapag-alaga. May mga lugar na nagpapadala ng mobile crisis team sa halip na pulis. Sabihin ang “Tagalog” para sa interpreter.',
    'crisis.p2':'<strong>911</strong> — kung nawawala ang anak mo. Sabihin sa Ingles ang “autistic and may not respond to their name,” at banggitin ang tubig: ang paglapit sa tubig ang pangunahing sanhi ng pagkamatay pagkatapos maglayas. Itanong sa pulisya kung may boluntaryong rehistro para sa mga residenteng may kapansanan.',
    'crisis.p3':'Kung pakiramdam mo ay hindi mo na kaya bilang tagapag-alaga, makipag-usap sa sarili mong doktor o counselor — makatwirang hakbang ito at marami ring magulang ang gumagawa nito.',
    'crisis.p4':'May interpreter ang dalawang linya. Sabihin lang sa Ingles ang pangalan ng inyong wika at maghintay na maikonekta.',
    'states.h1':'Tulong sa inyong estado','states.lede':'Pareho ang mga programa sa bawat estado, iba lang ang pangalan. Piliin ang inyong estado para makita kung sino ang kokontakin, sa pagkakasunod na pinakamabilis makakuha ng tulong.',
    'states.draft':'<strong>Draft na nilalaman.</strong> Tama ang mga pangalan ng programa bilang pangkalahatang gabay, pero nagbabago ang pangalan ng ahensya, numero at link. Suriin ang bawat isa bago ilunsad ang site.',
    'states.choose':'Piliin ang inyong estado','states.pickPrompt':'Pumili ng estado sa itaas at lalabas dito ang listahan.','states.selectOpt':'Pumili ng estado…',
    'states.order':'Sundin ang listahan nang sunod-sunod. Ang hakbang 1 at 3 ang pinaka-madalian.',
    'states.worth':'Mahalagang malaman sa {s}:',
    's1.t':'Kung wala pang 3 taon ang anak mo — {ei}','s1.b':'Libreng ebalwasyon sa loob ng 45 araw mula sa referral, walang kailangang diagnosis o sulat ng doktor. Ikaw mismo ang puwedeng mag-refer sa telepono.','s1.l':'Hanapin ang contact',
    's2.t':'Kung 3 taon pataas ang anak mo — ang inyong school district','s2.b':'Sumulat sa direktor ng special education na humihiling ng buong ebalwasyon, at lagyan ng petsa. Nagsisimula ang legal na takdang panahon, kahit hindi pampublikong paaralan ang pinapasukan.','s2.l':'Special education sa {s}',
    's3.t':'Medicaid waiver — {dd}','s3.b':'Ito ang pangmatagalang pondo para sa terapiya, respite, personal na pag-aalaga at kagamitan. Ang waiting list ay umaabot ng taon, kaya mag-apply kahit hindi pa kailangan.','s3.l':'Waiver at waitlist','s3.l2':'Mag-apply sa Medicaid',
    's4.t':'Libreng tulong — Parent Training and Information Center','s4.b':'Pondo ng pederal na gobyerno, libre, at kilala nila ang inyong distrito at mga ahensya. Tumawag bago ang unang IEP meeting.','s4.l':'Hanapin ang sentro sa {s}',
    's5.t':'Legal na karapatan — Protection & Advocacy','s5.b':'May isa sa bawat estado. Libreng legal na tulong para sa karapatan ng may kapansanan sa paaralan, serbisyo, pabahay at kalusugan.','s5.l':'P&A sa {s}',
    's6.t':'Access sa wika','s6.b':'Ang mga paaralan, early intervention at pederal na pinopondohang healthcare ay dapat magbigay ng libreng interpreter at isalin ang mahahalagang dokumento. Humiling nang nakasulat at itago ang sagot.','s6.l':'Karapatan sa interpreter sa paaralan sa {s}',
    's7.t':'Lokal na komunidad at respite','s7.b':'Mga chapter ng Autism Society, DD Council ng estado, university disability center (UCEDD), at 211 para sa respite, pagkain at tulong sa kuryente/tubig.','s7.l':'Lokal na grupo sa autism','s7.l2':'Respite sa {s}',
    's8.t':'Insurance at benepisyo','s8.b':'Itanong sa employer kung state-regulated o self-funded ang plano ninyo — ang autism insurance mandate ng {s} ay para lang sa una. Tingnan ang SSI eligibility at magbukas ng ABLE account kung handa na kayong mag-ipon.','s8.l':'Insurance mandate sa {s}',
    'states.everyH':'Ang umiiral sa bawat estado, anuman ang tawag dito',
    'e1.tag':'0 hanggang 3','e1.t':'Early intervention (Part C)','e1.b':'Libreng ebalwasyon at serbisyo sa bahay. Walang kailangang diagnosis o referral — ikaw mismo ang puwedeng mag-refer. Libre o batay sa kita, depende sa estado.',
    'e2.tag':'3 hanggang 21','e2.t':'Special education (Part B)','e2.b':'Dapat mag-ebalwasyon ang inyong pampublikong distrito at, kung kwalipikado, magbigay ng IEP — kahit pribadong paaralan o homeschool. Humiling nang nakasulat.',
    'e3.tag':'Pera','e3.t':'Medicaid at HCBS waiver','e3.b':'Saklaw ng waiver ang terapiya, respite, personal na pag-aalaga at kagamitan, at sa maraming estado hindi binibilang ang kita ng magulang para sa batang may kapansanan. Mahaba ang pila. Mag-apply na.',
    'e4.tag':'Pera','e4.t':'SSI at ABLE account','e4.b':'SSI para sa mga pamilyang mababa ang kita na may anak na may kapansanan. Ang ABLE account ay nagpapahintulot mag-ipon nang hindi nawawala ang benepisyo.',
    'e5.tag':'Libreng tulong','e5.t':'Parent Training and Information Center','e5.b':'Isa sa bawat estado, pederal na pinopondohan, libre. Tinuturuan nila ang mga magulang tungkol sa karapatan sa special education at sinasamahan sa mga hidwaan sa IEP.',
    'e6.tag':'Libreng tulong','e6.t':'DD Council, UCEDD at P&A','e6.b':'May Developmental Disabilities Council, university center (UCEDD), at Protection & Advocacy agency ang bawat estado na nagbibigay ng libreng legal na tulong.',
    'e7.tag':'Wika','e7.t':'Interpretasyon at pagsasalin','e7.b':'Ang libreng interpreter at isinaling dokumento ay karapatan, hindi pabor, sa paaralan, early intervention at pederal na pinopondohang healthcare. Humiling nang nakasulat.',
    'e8.tag':'Pagtanda','e8.t':'Vocational rehabilitation','e8.b':'May VR agency ang bawat estado na pumopondo sa job training, coaching at supported employment. Dapat magsimula ang transition planning sa IEP bago mag-16.',
    'footer.1':'<strong>Yuvan</strong> — draft na site. Pangkalahatang impormasyon para sa pamilya, hindi payo medikal, legal o pang-edukasyon. Nagkakaiba-iba at madalas magbago ang detalye bawat estado; kumpirmahin sa ahensya bago umasa dito.',
    'footer.2':'Sa krisis, tumawag o mag-text sa 988. Kung nawawala ang bata, tumawag sa 911.',
    pending:'Hindi pa naisasalin ang bahaging ito at ipinapakita sa Ingles. Ang mga menu, impormasyon sa emerhensiya at buong gabay kada estado ay nasa inyong wika.'
  };

  T.ht={
    'nav.updates':'Sa k ap chanje', 'banner.t':'Mizajou politik, Oktòb 2026: Medicaid, edikasyon espesyal ak gid vaksen yo tout chanje.', 'banner.l':'Sa sa vle di pou fanmi w', 'banner.x':'Fèmen',
   
    'footer.ded':'Pou Yuvan — ak pou chak fanmi k ap chèche chemen yo.',
   
    tagline:'Yon gid konplè', 'nav.feedback':'Kòmantè', 'nav.about':'Konsènan', 'nav.contact':'Kontak', 'nav.privacy':'Konfidansyalite', 'side.guide':'Gid la', 'side.site':'Sit sa a', menu:'Meni', closemenu:'Fèmen meni an',
   
    skip:'Ale nan kontni an', langLabel:'Lang', largerText:'Pi gwo tèks',
    'nav.start':'Kòmanse isit','nav.understanding':'Konprann otis','nav.kinds':'Kalite ak pwofil','nav.history':'Istwa','nav.research':'Sa rechèch la di','nav.support':'Terapi ak sipò','nav.activities':'Aktivite chak jou','nav.stigma':'Stigma ak defans','nav.states':'Èd nan eta w','nav.resources':'Resous',
    'hero.h1':'Ou pa oblije konprann tout sa a nan bon lòd la.',
    'hero.lede':'Common Ground se yon gid nan lang senp pou paran ak gadyen timoun otis — kisa otis ye, kisa rechèch la reyèlman montre, kisa ki ede chak jou, ak kijan pou jwenn sèvis eta w dwe fanmi w.',
    'door1.t':'Gen yon bagay ki diferan','door1.d':'Ou remake bagay men pèsòn poko di mo a. Kòmanse ak kisa otis ye ak kijan evalyasyon an fèt.',
    'door2.t':'Nou fèk resevwa yon dyagnostik','door2.d':'Katrevendis premye jou yo, nan lòd. Sa pou fè semèn sa a, mwa sa a, ak sa ki ka tann.',
    'door3.t':'Mwen bezwen sèvis ak lajan','door3.d':'Entèvansyon bonè, IEP, egzansyon Medicaid, repi — ak kiyès pou rele nan eta w.',
    'door4.t':'Jodi a te difisil','door4.d':'Kriz, dòmi, manje, chanjman. Bagay pratik ki bese tansyon an lakay ou.',
    'crisis.h':'Si w enkyè kounye a','crisis.t':'Èd ijan',
    'crisis.p1':'<strong>988</strong> — rele oswa voye tèks bay Liy Kriz ak Prevansyon Swisid la, 24/7, pou nenpòt kriz sante mantal, ki gen ladan pou moun k ap bay swen. Kèk zòn ka voye yon ekip kriz olye lapolis. Di “Haitian Creole” pou yon entèprèt.',
    'crisis.p2':'<strong>911</strong> — si pitit ou pèdi. Di an anglè “autistic and may not respond to their name,” epi pale de dlo: ale bò dlo se premye kòz lanmò apre yon timoun sove. Mande komisarya lokal la si yo gen yon rejis volontè pou moun ki gen andikap.',
    'crisis.p3':'Si ou menm santi w rive nan limit ou kòm moun k ap bay swen, pale ak doktè w oswa yon konseye se yon pwochen etap rezonab, e anpil paran nan menm sitiyasyon an fè sa.',
    'crisis.p4':'Tou de liy yo gen entèprèt. Ou ka di non lang ou an anglè epi tann yo konekte w.',
    'states.h1':'Èd nan eta w','states.lede':'Chak eta gen menm kèk pwogram yo, men ak non diferan. Chwazi eta w pou w wè kiyès pou kontakte, nan lòd ki fè w jwenn èd pi vit.',
    'states.draft':'<strong>Kontni bouyon.</strong> Non pwogram yo egzak kòm gid jeneral, men non ajans, nimewo telefòn ak lyen chanje. Verifye chak youn anvan sit la pibliye.',
    'states.choose':'Chwazi eta w','states.pickPrompt':'Chwazi yon eta anwo a epi lis la ap parèt isit la.','states.selectOpt':'Chwazi yon eta…',
    'states.order':'Swiv lis sa a nan lòd. Etap 1 ak 3 se sa ki pi prese.',
    'states.worth':'Bagay pou konnen nan {s}:',
    's1.t':'Si pitit ou poko gen 3 an — {ei}','s1.b':'Evalyasyon gratis nan 45 jou apre referans lan, san dyagnostik ni papye doktè. Ou ka refere pitit ou tèt ou pa telefòn.','s1.l':'Jwenn kontak',
    's2.t':'Si pitit ou gen 3 an oswa plis — distri lekòl ou a','s2.b':'Ekri direktè edikasyon espesyal la pou mande yon evalyasyon konplè, epi mete dat la. Sa kòmanse delè legal la, menm si pitit ou pa nan lekòl piblik.','s2.l':'Edikasyon espesyal nan {s}',
    's3.t':'Egzansyon Medicaid — {dd}','s3.b':'Se sous finansman alontèm pou terapi, repi, swen pèsonèl ak ekipman. Lis datant yo dire plizyè ane, kidonk aplike menm si w pa bezwen sèvis kounye a.','s3.l':'Egzansyon ak lis datant','s3.l2':'Aplike pou Medicaid',
    's4.t':'Èd gratis — Sant Fòmasyon ak Enfòmasyon pou Paran','s4.b':'Finanse pa gouvènman federal, gratis, e yo konnen distri w ak ajans yo. Rele anvan premye reyinyon IEP w la.','s4.l':'Jwenn sant {s} la',
    's5.t':'Dwa legal — ajans Pwoteksyon ak Defans','s5.b':'Chak eta gen youn. Defans legal gratis pou dwa moun andikape nan lekòl, sèvis, lojman ak sante.','s5.l':'P&A nan {s}',
    's6.t':'Aksè nan lang','s6.b':'Lekòl, entèvansyon bonè ak founisè sante ki resevwa lajan federal dwe ba w yon entèprèt gratis epi tradui dokiman enpòtan yo. Mande sa alekri epi kenbe repons lan.','s6.l':'Dwa entèprèt nan lekòl {s}',
    's7.t':'Kominote lokal ak repi','s7.b':'Branch Autism Society, Konsèy DD eta w la, sant andikap inivèsitè a (UCEDD), ak 211 pou repi, manje ak èd sou fakti.','s7.l':'Gwoup otis lokal','s7.l2':'Repi nan {s}',
    's8.t':'Asirans ak benefis','s8.b':'Mande anplwayè w si plan w lan reglemante pa eta a oswa otofinanse — mandat asirans otis {s} la aplike sèlman pou premye a. Tcheke si w kalifye pou SSI, epi louvri yon kont ABLE lè w ka ekonomize.','s8.l':'Mandat asirans {s}',
    'states.everyH':'Sa ki egziste nan chak eta, kèlkeswa non li',
    'e1.tag':'0 a 3 an','e1.t':'Entèvansyon bonè (Part C)','e1.b':'Evalyasyon ak sèvis gratis lakay ou. Pa bezwen dyagnostik ni referans doktè — ou ka refere pitit ou tèt ou. Sèvis yo gratis oswa selon revni, depann de eta a.',
    'e2.tag':'3 a 21 an','e2.t':'Edikasyon espesyal (Part B)','e2.b':'Distri lekòl piblik ou a dwe evalye epi, si li kalifye, bay yon IEP — menm si pitit ou nan lekòl prive oswa lakay. Mande sa alekri.',
    'e3.tag':'Lajan','e3.t':'Medicaid ak egzansyon HCBS','e3.b':'Egzansyon yo ka kouvri terapi, repi, swen pèsonèl ak ekipman, e nan anpil eta yo pa konte revni paran pou yon timoun andikape. Lis yo long. Aplike kounye a.',
    'e4.tag':'Lajan','e4.t':'SSI ak kont ABLE','e4.b':'SSI se pou fanmi ki gen ti revni ak yon timoun andikape. Kont ABLE pèmèt ou ekonomize pou depans andikap san w pa pèdi benefis.',
    'e5.tag':'Èd gratis','e5.t':'Sant Fòmasyon ak Enfòmasyon pou Paran','e5.b':'Youn nan chak eta, finanse federalman, gratis. Yo fòme paran sou dwa edikasyon espesyal epi akonpanye w nan yon dezakò IEP.',
    'e6.tag':'Èd gratis','e6.t':'Konsèy DD, UCEDD ak P&A','e6.b':'Chak eta gen yon Konsèy Andikap Devlopmantal, yon sant inivèsitè (UCEDD), ak yon ajans Pwoteksyon ak Defans ki bay èd legal gratis.',
    'e7.tag':'Lang','e7.t':'Entèpretasyon ak tradiksyon','e7.b':'Entèprèt gratis ak dokiman tradui se yon dwa, pa yon favè, nan lekòl, entèvansyon bonè ak sante finanse federalman. Mande sa alekri.',
    'e8.tag':'Laj adilt','e8.t':'Reyabilitasyon vokasyonèl','e8.b':'Chak eta gen yon ajans VR ki finanse fòmasyon travay, akonpayman ak travay sipòte. Planifikasyon tranzisyon dwe kòmanse nan IEP a 16 an.',
    'footer.1':'<strong>Yuvan</strong> — sit bouyon. Enfòmasyon jeneral pou fanmi, se pa konsèy medikal, legal oswa edikasyonèl. Detay pwogram yo varye selon eta epi chanje souvan; konfime ak ajans lan anvan w konte sou anyen isit la.',
    'footer.2':'Nan yon kriz, rele oswa voye tèks nan 988. Si yon timoun pèdi, rele 911.',
    pending:'Seksyon sa a poko tradui epi li parèt an anglè. Meni yo, enfòmasyon ijans lan ak gid konplè pou chak eta disponib nan lang ou.'
  };

  T.ru={
    'nav.updates':'Что меняется', 'banner.t':'Обновление за октябрь 2026 года: изменились Medicaid, спецобразование и рекомендации по вакцинации.', 'banner.l':'Что это значит для вашей семьи', 'banner.x':'Закрыть',
   
    'footer.ded':'Для Ювана — и для каждой семьи, которая ищет свой путь.',
   
    tagline:'Полное руководство', 'nav.feedback':'Обратная связь', 'nav.about':'О сайте', 'nav.contact':'Контакты', 'nav.privacy':'Конфиденциальность', 'side.guide':'Руководство', 'side.site':'О сайте', menu:'Меню', closemenu:'Закрыть меню',
   
    skip:'Перейти к содержанию', langLabel:'Язык', largerText:'Крупный текст',
    'nav.start':'Начните здесь','nav.understanding':'Что такое аутизм','nav.kinds':'Виды и особенности','nav.history':'История','nav.research':'Что говорят исследования','nav.support':'Терапия и поддержка','nav.activities':'Повседневные занятия','nav.stigma':'Стигма и защита прав','nav.states':'Помощь в вашем штате','nav.resources':'Ресурсы',
    'hero.h1':'Вам не нужно разбираться во всём этом в правильном порядке.',
    'hero.lede':'Common Ground — это понятное руководство для родителей и опекунов аутичных детей: что такое аутизм, что на самом деле показывают исследования, что помогает в быту и как получить услуги, которые ваш штат обязан предоставить вашей семье.',
    'door1.t':'Что-то не так','door1.d':'Вы замечаете особенности, но слово ещё не прозвучало. Начните с того, что такое аутизм и как проходит диагностика.',
    'door2.t':'Мы только что получили диагноз','door2.d':'Первые девяносто дней по порядку. Что сделать на этой неделе, в этом месяце, а что может подождать.',
    'door3.t':'Нужны услуги и финансовая помощь','door3.d':'Раннее вмешательство, IEP, вейверы Medicaid, передышка — и кому звонить в вашем штате.',
    'door4.t':'Сегодня был тяжёлый день','door4.d':'Срывы, сон, еда, переходы. Практичные вещи, которые снижают напряжение дома.',
    'crisis.h':'Если вам тревожно прямо сейчас','crisis.t':'Срочная помощь',
    'crisis.p1':'<strong>988</strong> — звоните или пишите на линию помощи при кризисе, круглосуточно, при любом кризисе психического здоровья, в том числе у самих родителей. В некоторых районах вместо полиции могут прислать мобильную кризисную бригаду. Скажите «Russian», чтобы подключили переводчика.',
    'crisis.p2':'<strong>911</strong> — если ребёнок пропал. Скажите по-английски «autistic and may not respond to their name» и упомяните воду: уход к воде — главная причина гибели после побега. Спросите в местной полиции, есть ли добровольный реестр жителей с инвалидностью.',
    'crisis.p3':'Если вы сами на пределе, разговор со своим врачом или консультантом — разумный следующий шаг, и многие родители в такой ситуации его делают.',
    'crisis.p4':'На обеих линиях есть переводчики. Скажите название вашего языка по-английски и дождитесь соединения.',
    'states.h1':'Помощь в вашем штате','states.lede':'Во всех штатах действует один и тот же набор программ под разными названиями. Выберите штат, чтобы увидеть, к кому обращаться, в порядке, который быстрее всего даёт помощь.',
    'states.draft':'<strong>Черновик.</strong> Названия программ ниже верны как общий ориентир, но названия ведомств, телефоны и ссылки меняются. Проверьте каждое перед публикацией сайта.',
    'states.choose':'Выберите штат','states.pickPrompt':'Выберите штат выше, и список появится здесь.','states.selectOpt':'Выберите штат…',
    'states.order':'Идите по списку по порядку. Шаги 1 и 3 самые срочные.',
    'states.worth':'Что важно знать в {s}:',
    's1.t':'Если ребёнку меньше 3 лет — {ei}','s1.b':'Бесплатная оценка в течение 45 дней после обращения, без диагноза и направления врача. Вы можете обратиться сами по телефону.','s1.l':'Найти контакты',
    's2.t':'Если ребёнку 3 года и больше — ваш школьный округ','s2.b':'Напишите директору по спецобразованию с просьбой о полной оценке и поставьте дату. Это запускает установленные законом сроки, даже если ребёнок не ходит в государственную школу.','s2.l':'Спецобразование в {s}',
    's3.t':'Вейвер Medicaid — {dd}','s3.b':'Это основной долгосрочный источник финансирования терапии, передышки, ухода и оборудования. Очереди измеряются годами, поэтому подавайте заявку, даже если услуги пока не нужны.','s3.l':'Вейвер и очередь','s3.l2':'Подать на Medicaid',
    's4.t':'Бесплатная помощь — Центр обучения и информации для родителей','s4.b':'Финансируется федерально, бесплатно, и они знают ваш округ и ведомства поимённо. Позвоните до первой встречи по IEP.','s4.l':'Найти центр в {s}',
    's5.t':'Юридические права — агентство Protection & Advocacy','s5.b':'Есть в каждом штате. Бесплатная юридическая защита прав людей с инвалидностью в школе, услугах, жилье и здравоохранении.','s5.l':'P&A в {s}',
    's6.t':'Языковой доступ','s6.b':'Школы, программы раннего вмешательства и медучреждения с федеральным финансированием обязаны предоставить бесплатного переводчика и перевести ключевые документы. Просите письменно и сохраняйте ответ.','s6.l':'Право на переводчика в школах {s}',
    's7.t':'Местное сообщество и передышка','s7.b':'Отделения Autism Society, Совет DD вашего штата, университетский центр (UCEDD) и 211 для передышки, продуктов и помощи с коммунальными счетами.','s7.l':'Местные аутизм-группы','s7.l2':'Передышка в {s}',
    's8.t':'Страховка и пособия','s8.b':'Спросите работодателя, регулируется ли ваш план штатом или он самофинансируемый — требование {s} по покрытию аутизма относится только к первому. Проверьте право на SSI и откройте счёт ABLE, когда сможете откладывать.','s8.l':'Страховые требования {s}',
    'states.everyH':'Что есть в каждом штате, как бы это ни называлось',
    'e1.tag':'От 0 до 3 лет','e1.t':'Раннее вмешательство (Part C)','e1.b':'Бесплатная оценка и услуги на дому. Диагноз и направление не нужны — вы можете обратиться сами. Услуги бесплатны или по скользящей шкале в зависимости от штата.',
    'e2.tag':'От 3 до 21 года','e2.t':'Спецобразование (Part B)','e2.b':'Ваш школьный округ обязан провести оценку и, при соответствии критериям, предоставить IEP — даже если ребёнок учится в частной школе или дома. Просите письменно.',
    'e3.tag':'Деньги','e3.t':'Medicaid и вейверы HCBS','e3.b':'Вейверы могут покрывать терапию, передышку, уход и оборудование, и во многих штатах доход родителей для ребёнка с инвалидностью не учитывается. Очереди длинные. Подавайте сейчас.',
    'e4.tag':'Деньги','e4.t':'SSI и счета ABLE','e4.b':'SSI — пособие для малоимущих семей с ребёнком с инвалидностью. Счета ABLE позволяют копить на связанные с инвалидностью расходы без потери пособий.',
    'e5.tag':'Бесплатная помощь','e5.t':'Центр обучения и информации для родителей','e5.b':'Есть в каждом штате, финансируется федерально, бесплатно. Обучает родителей правам в спецобразовании и сопровождает в спорах по IEP.',
    'e6.tag':'Бесплатная помощь','e6.t':'Совет DD, UCEDD и P&A','e6.b':'В каждом штате есть Совет по нарушениям развития, университетский центр (UCEDD) и агентство Protection & Advocacy с бесплатной юридической помощью.',
    'e7.tag':'Язык','e7.t':'Устный и письменный перевод','e7.b':'Бесплатный переводчик и переведённые документы — это право, а не одолжение, в школах, раннем вмешательстве и здравоохранении с федеральным финансированием. Просите письменно.',
    'e8.tag':'Взрослая жизнь','e8.t':'Профессиональная реабилитация','e8.b':'В каждом штате есть агентство VR, финансирующее обучение профессии, сопровождение и поддерживаемую занятость. Планирование перехода должно начинаться в IEP к 16 годам.',
    'footer.1':'<strong>Yuvan</strong> — черновик сайта. Общая информация для семей, не медицинская, юридическая или образовательная консультация. Детали программ различаются по штатам и часто меняются; уточняйте в ведомстве.',
    'footer.2':'В кризисной ситуации звоните или пишите на 988. Если ребёнок пропал — 911.',
    pending:'Этот раздел ещё не переведён и показан на английском. Меню, экстренная информация и полное руководство по штатам доступны на русском.'
  };

  T.ar={
    'nav.updates':'ما الذي يتغيّر', 'banner.t':'تحديث السياسات، أكتوبر 2026: تغيّرت إرشادات Medicaid والتربية الخاصة والتطعيمات.', 'banner.l':'ماذا يعني هذا لعائلتك', 'banner.x':'إغلاق',
   
    'footer.ded':'إلى يوفان، وإلى كل أسرة تبحث عن طريقها.',
   
    tagline:'دليل شامل', 'nav.feedback':'ملاحظاتك', 'nav.about':'عن الموقع', 'nav.contact':'اتصل بنا', 'nav.privacy':'الخصوصية', 'side.guide':'الدليل', 'side.site':'عن الموقع', menu:'القائمة', closemenu:'إغلاق القائمة',
   
    skip:'تخطَّ إلى المحتوى', langLabel:'اللغة', largerText:'خط أكبر',
    'nav.start':'ابدأ من هنا','nav.understanding':'فهم التوحد','nav.kinds':'الأنواع والسمات','nav.history':'التاريخ','nav.research':'ما تقوله الأبحاث','nav.support':'العلاجات والدعم','nav.activities':'الأنشطة اليومية','nav.stigma':'الوصمة والمناصرة','nav.states':'المساعدة في ولايتك','nav.resources':'المصادر',
    'hero.h1':'لستَ مضطرًا لفهم كل هذا بالترتيب الصحيح.',
    'hero.lede':'Common Ground دليل بلغة واضحة لآباء وأولياء أمور الأطفال التوحديين: ما هو التوحد، وما الذي تُظهره الأبحاث فعلًا، وما الذي يساعد يوميًا، وكيف تحصل على الخدمات التي تلتزم ولايتك بتقديمها لعائلتك.',
    'door1.t':'أشعر أن شيئًا مختلفًا','door1.d':'لاحظتَ أشياء لكن لم يقل أحد الكلمة بعد. ابدأ بما هو التوحد وكيف يتم التقييم.',
    'door2.t':'حصلنا للتو على التشخيص','door2.d':'أول تسعين يومًا بالترتيب. ما تفعله هذا الأسبوع وهذا الشهر، وما يمكن تأجيله.',
    'door3.t':'أحتاج خدمات ودعمًا ماليًا','door3.d':'التدخل المبكر، وخطة IEP، وإعفاءات Medicaid، والراحة المؤقتة — ومن تتصل به في ولايتك.',
    'door4.t':'كان اليوم صعبًا','door4.d':'نوبات الانهيار والنوم والطعام والانتقالات. أمور عملية تخفف التوتر في البيت.',
    'crisis.h':'إذا كنت قلقًا الآن','crisis.t':'مساعدة عاجلة',
    'crisis.p1':'<strong>988</strong> — اتصل أو أرسل رسالة إلى خط الأزمات ومنع الانتحار، على مدار الساعة، لأي أزمة صحة نفسية بما في ذلك لمقدّمي الرعاية. في بعض المناطق يمكن إرسال فريق أزمات متنقل بدل الشرطة. قل «Arabic» لطلب مترجم.',
    'crisis.p2':'<strong>911</strong> — إذا اختفى طفلك. قل بالإنجليزية «autistic and may not respond to their name» واذكر الماء: الاتجاه نحو الماء هو السبب الأول للوفاة بعد الهروب. اسأل الشرطة المحلية إن كان لديها سجل تطوعي للمقيمين ذوي الإعاقة.',
    'crisis.p3':'إذا شعرت أنك بلغت حدّك كمقدّم رعاية، فالحديث مع طبيبك أو مع مرشد نفسي خطوة معقولة، ويقوم بها كثير من الآباء في الوضع نفسه.',
    'crisis.p4':'كلا الخطين يوفر مترجمين. يمكنك قول اسم لغتك بالإنجليزية ثم انتظار التحويل.',
    'states.h1':'المساعدة في ولايتك','states.lede':'كل الولايات تدير البرامج نفسها تقريبًا بأسماء مختلفة. اختر ولايتك لترى بمن تتصل، بالترتيب الذي يوصلك إلى المساعدة أسرع.',
    'states.draft':'<strong>محتوى مسودة.</strong> أسماء البرامج أدناه صحيحة كإرشاد عام، لكن أسماء الجهات والأرقام والروابط تتغير. تحقق من كل بند قبل نشر الموقع.',
    'states.choose':'اختر ولايتك','states.pickPrompt':'اختر ولاية بالأعلى وستظهر القائمة هنا.','states.selectOpt':'اختر ولاية…',
    'states.order':'اتبع هذه القائمة بالترتيب. الخطوتان 1 و3 هما الأكثر إلحاحًا.',
    'states.worth':'مما يُفيد معرفته في {s}:',
    's1.t':'إذا كان طفلك دون الثالثة — {ei}','s1.b':'تقييم مجاني خلال 45 يومًا من الإحالة، دون حاجة إلى تشخيص أو ورقة من الطبيب. يمكنك إحالة طفلك بنفسك عبر الهاتف.','s1.l':'ابحث عن بيانات التواصل',
    's2.t':'إذا كان عمر طفلك 3 سنوات فأكثر — منطقتك التعليمية','s2.b':'اكتب إلى مدير التربية الخاصة تطلب تقييمًا شاملًا، وضع تاريخ الرسالة. هذا يبدأ المهلة القانونية، سواء كان طفلك في مدرسة حكومية أم لا.','s2.l':'التربية الخاصة في {s}',
    's3.t':'إعفاء Medicaid — {dd}','s3.b':'هذا هو مصدر التمويل طويل الأمد للعلاج والراحة المؤقتة والرعاية الشخصية والأجهزة. قوائم الانتظار تُقاس بالسنوات، فقدّم الطلب حتى لو لم تحتج الخدمات الآن.','s3.l':'الإعفاء وقائمة الانتظار','s3.l2':'التقديم على Medicaid',
    's4.t':'مساعدة مجانية — مركز تدريب وإعلام أولياء الأمور','s4.b':'ممول اتحاديًا ومجاني، ويعرف منطقتك وجهاتها بالاسم. اتصل قبل أول اجتماع IEP، لا بعد أن تسوء الأمور.','s4.l':'ابحث عن مركز {s}',
    's5.t':'الحقوق القانونية — جهة الحماية والمناصرة','s5.b':'توجد في كل ولاية. مناصرة قانونية مجانية لحقوق ذوي الإعاقة في المدرسة والخدمات والسكن والرعاية الصحية.','s5.l':'جهة P&A في {s}',
    's6.t':'الوصول اللغوي','s6.b':'على المدارس وبرامج التدخل المبكر ومقدّمي الرعاية الصحية الممولين اتحاديًا توفير مترجم مجاني وترجمة المستندات المهمة. اطلب ذلك كتابيًا واحتفظ بالرد.','s6.l':'حق المترجم في مدارس {s}',
    's7.t':'المجتمع المحلي والراحة المؤقتة','s7.b':'فروع Autism Society، ومجلس DD في ولايتك، ومركز الإعاقة الجامعي (UCEDD)، والرقم 211 للراحة المؤقتة والغذاء والمساعدة في الفواتير.','s7.l':'مجموعات التوحد المحلية','s7.l2':'الراحة المؤقتة في {s}',
    's8.t':'التأمين والمزايا','s8.b':'اسأل جهة عملك إن كانت خطتك منظَّمة من الولاية أم ذاتية التمويل — إلزام {s} بتغطية التوحد ينطبق على الأولى فقط. تحقق من أهلية SSI، وافتح حساب ABLE عندما تستطيع الادخار.','s8.l':'إلزام التأمين في {s}',
    'states.everyH':'ما يوجد في كل ولاية مهما اختلف اسمه',
    'e1.tag':'من الولادة إلى 3','e1.t':'التدخل المبكر (Part C)','e1.b':'تقييم وخدمات مجانية في المنزل. لا حاجة لتشخيص أو إحالة طبيب — يمكنك إحالة طفلك بنفسك. الخدمات مجانية أو حسب الدخل تبعًا للولاية.',
    'e2.tag':'من 3 إلى 21','e2.t':'التربية الخاصة (Part B)','e2.b':'على منطقتك التعليمية الحكومية إجراء التقييم وتقديم خطة IEP عند الأهلية — حتى لو كان طفلك في مدرسة خاصة أو يدرس في المنزل. اطلب ذلك كتابيًا.',
    'e3.tag':'التمويل','e3.t':'Medicaid وإعفاءات HCBS','e3.b':'قد تغطي الإعفاءات العلاج والراحة المؤقتة والرعاية الشخصية والأجهزة، وفي ولايات كثيرة لا يُحتسب دخل الوالدين للطفل ذي الإعاقة. قوائم الانتظار طويلة. قدّم الآن.',
    'e4.tag':'التمويل','e4.t':'SSI وحسابات ABLE','e4.b':'دخل الضمان التكميلي للأسر محدودة الدخل التي لديها طفل ذو إعاقة. حسابات ABLE تتيح الادخار لنفقات الإعاقة دون فقدان الأهلية للمزايا.',
    'e5.tag':'مساعدة مجانية','e5.t':'مركز تدريب وإعلام أولياء الأمور','e5.b':'واحد في كل ولاية، ممول اتحاديًا ومجاني. يدرّب الأهالي على حقوق التربية الخاصة ويرافقك في أي نزاع حول خطة IEP.',
    'e6.tag':'مساعدة مجانية','e6.t':'مجلس DD وUCEDD وP&A','e6.b':'لكل ولاية مجلس للإعاقات التطورية، ومركز جامعي (UCEDD)، وجهة حماية ومناصرة تقدم مناصرة قانونية مجانية.',
    'e7.tag':'اللغة','e7.t':'الترجمة الفورية والتحريرية','e7.b':'المترجم المجاني والمستندات المترجمة حق لا منّة، في المدارس والتدخل المبكر والرعاية الصحية الممولة اتحاديًا. اطلبها كتابيًا.',
    'e8.tag':'مرحلة البلوغ','e8.t':'إعادة التأهيل المهني','e8.b':'لكل ولاية جهة VR تمول التدريب المهني والإرشاد والتوظيف المدعوم. يجب أن يبدأ التخطيط للانتقال ضمن خطة IEP عند سن 16، وأبكر في بعض الولايات.',
    'footer.1':'<strong>Yuvan</strong> — موقع مسودة. معلومات عامة للأسر، وليست استشارة طبية أو قانونية أو تعليمية. تختلف تفاصيل البرامج بين الولايات وتتغير كثيرًا؛ تأكد من الجهة المعنية قبل الاعتماد على أي شيء هنا.',
    'footer.2':'عند الأزمة اتصل أو راسل 988. إذا فُقد طفل، اتصل بـ911.',
    pending:'لم يُترجم هذا القسم بعد ويظهر بالإنجليزية. أما القوائم ومعلومات الطوارئ ودليل الولايات الكامل فهي متوفرة بلغتك.'
  };


  T.hi={
    'nav.updates':'क्या बदल रहा है', 'banner.t':'नीति अद्यतन, अक्टूबर 2026: Medicaid, विशेष शिक्षा और टीकाकरण मार्गदर्शन तीनों बदले हैं।', 'banner.l':'आपके परिवार के लिए इसका अर्थ', 'banner.x':'बंद करें',
   
    'footer.ded':'युवन के लिए — और उन सभी परिवारों के लिए जो अपना रास्ता खोज रहे हैं।',
   
    skip:'मुख्य सामग्री पर जाएँ', langLabel:'भाषा', largerText:'बड़ा टेक्स्ट', tagline:'एक संपूर्ण मार्गदर्शिका',
    'nav.start':'यहाँ से शुरू करें','nav.understanding':'ऑटिज़्म को समझें','nav.kinds':'प्रकार और पहचान','nav.history':'इतिहास','nav.research':'शोध क्या कहता है','nav.support':'थेरेपी और सहायता','nav.activities':'रोज़मर्रा की गतिविधियाँ','nav.stigma':'कलंक और पैरवी','nav.states':'अपने राज्य में मदद','nav.resources':'संसाधन',
    'nav.feedback':'प्रतिक्रिया','nav.about':'हमारे बारे में','nav.contact':'संपर्क','nav.privacy':'गोपनीयता',
    'side.guide':'मार्गदर्शिका','side.site':'इस साइट के बारे में','menu':'मेनू','closemenu':'मेनू बंद करें',
    'hero.h1':'यह सब सही क्रम में समझना ज़रूरी नहीं है।',
    'hero.lede':'यह ऑटिस्टिक बच्चों के माता-पिता और अभिभावकों के लिए सरल भाषा में बनी मार्गदर्शिका है — ऑटिज़्म क्या है, शोध वास्तव में क्या दिखाता है, रोज़ाना क्या मदद करता है, और अपने राज्य से मिलने वाली सेवाएँ कैसे पाएँ।',
    'door1.t':'कुछ अलग महसूस होता है','door1.d':'आपने कुछ बातें देखी हैं पर अभी किसी ने वह शब्द नहीं कहा। पहले जानें कि ऑटिज़्म क्या है और मूल्यांकन कैसे होता है।',
    'door2.t':'हमें अभी-अभी निदान मिला है','door2.d':'पहले नब्बे दिन, क्रम से। इस हफ़्ते क्या करें, इस महीने क्या, और क्या रुक सकता है।',
    'door3.t':'मुझे सेवाएँ और आर्थिक मदद चाहिए','door3.d':'अर्ली इंटरवेंशन, IEP, Medicaid वेवर, राहत सेवा — और आपके राज्य में किसे फ़ोन करें।',
    'door4.t':'आज का दिन मुश्किल था','door4.d':'मेल्टडाउन, नींद, खाना, बदलाव। घर का तनाव कम करने वाले व्यावहारिक उपाय।',
    'crisis.h':'अगर आप अभी चिंतित हैं','crisis.t':'तत्काल सहायता',
    'crisis.p1':'<strong>988</strong> — किसी भी मानसिक स्वास्थ्य संकट के लिए, चौबीसों घंटे कॉल या टेक्स्ट करें — देखभाल करने वालों के लिए भी। कुछ इलाक़ों में पुलिस के बजाय मोबाइल क्राइसिस टीम भेजी जा सकती है। दुभाषिए के लिए अंग्रेज़ी में “Hindi” कहें।',
    'crisis.p2':'<strong>911</strong> — अगर आपका बच्चा लापता है। अंग्रेज़ी में कहें “autistic and may not respond to their name” और पानी का ज़िक्र करें: घर से निकलने के बाद पानी की ओर जाना मृत्यु का सबसे बड़ा कारण है। स्थानीय पुलिस से पूछें कि क्या दिव्यांग निवासियों के लिए स्वैच्छिक रजिस्टर है।',
    'crisis.p3':'अगर देखभाल करते हुए आप स्वयं टूटने की कगार पर महसूस करें, तो अपने डॉक्टर या काउंसलर से बात करना उचित अगला क़दम है — कई माता-पिता यही करते हैं।',
    'crisis.p4':'दोनों लाइनों पर दुभाषिए उपलब्ध हैं। अंग्रेज़ी में अपनी भाषा का नाम बोलें और जुड़ने का इंतज़ार करें।',
    'states.h1':'अपने राज्य में मदद','states.lede':'हर राज्य में एक जैसे कार्यक्रम अलग नामों से चलते हैं। अपना राज्य चुनें और देखें किससे संपर्क करें — उसी क्रम में जिससे मदद सबसे जल्दी मिले।',
    'states.choose':'अपना राज्य चुनें','states.pickPrompt':'ऊपर एक राज्य चुनें, सूची यहाँ दिखेगी।','states.selectOpt':'राज्य चुनें…',
    'states.order':'इस सूची को क्रम से पूरा करें। चरण 1 और 3 सबसे ज़रूरी हैं।',
    'states.worth':'{s} में जानने योग्य बात:',
    's1.t':'अगर बच्चा 3 वर्ष से छोटा है — {ei}','s1.b':'रेफ़रल के 45 दिनों के भीतर मुफ़्त मूल्यांकन; निदान या डॉक्टर की पर्ची ज़रूरी नहीं। आप ख़ुद फ़ोन करके अपने बच्चे को रेफ़र कर सकते हैं।','s1.l':'संपर्क जानकारी खोजें',
    's2.t':'अगर बच्चा 3 वर्ष या उससे बड़ा है — आपका स्कूल डिस्ट्रिक्ट','s2.b':'विशेष शिक्षा निदेशक को पूर्ण मूल्यांकन के लिए पत्र लिखें और तारीख़ डालें। इससे क़ानूनी समयसीमा शुरू होती है, चाहे बच्चा सरकारी स्कूल में हो या न हो।','s2.l':'{s} विशेष शिक्षा',
    's3.t':'Medicaid वेवर — {dd}','s3.b':'थेरेपी, राहत सेवा, व्यक्तिगत देखभाल और उपकरणों के लिए यही दीर्घकालिक धनराशि है। प्रतीक्षा सूची वर्षों लंबी होती है, इसलिए अभी ज़रूरत न हो तब भी आवेदन करें।','s3.l':'वेवर और प्रतीक्षा सूची','s3.l2':'Medicaid के लिए आवेदन',
    's4.t':'मुफ़्त सहायता — पैरेंट ट्रेनिंग एंड इन्फ़ॉर्मेशन सेंटर','s4.b':'संघीय रूप से वित्तपोषित, मुफ़्त, और वे आपके डिस्ट्रिक्ट व एजेंसियों को नाम से जानते हैं। पहली IEP बैठक से पहले फ़ोन करें।','s4.l':'{s} का केंद्र खोजें',
    's5.t':'क़ानूनी अधिकार — Protection & Advocacy एजेंसी','s5.b':'हर राज्य में एक है। स्कूल, सेवाओं, आवास और स्वास्थ्य में दिव्यांगता अधिकारों के लिए मुफ़्त क़ानूनी सहायता।','s5.l':'{s} की P&A एजेंसी',
    's6.t':'भाषा सुलभता','s6.b':'स्कूल, अर्ली इंटरवेंशन और संघीय धन पाने वाले स्वास्थ्य प्रदाताओं को मुफ़्त दुभाषिया और अनुवादित दस्तावेज़ देने होते हैं। लिखित में माँगें और उत्तर सँभालकर रखें।','s6.l':'{s} में स्कूल दुभाषिया अधिकार',
    's7.t':'स्थानीय समुदाय और राहत सेवा','s7.b':'Autism Society की स्थानीय शाखाएँ, आपके राज्य की DD काउंसिल, विश्वविद्यालय दिव्यांगता केंद्र (UCEDD), और राहत, भोजन व बिल सहायता के लिए 211।','s7.l':'स्थानीय ऑटिज़्म समूह','s7.l2':'{s} में राहत सेवा',
    's8.t':'बीमा और लाभ','s8.b':'अपने नियोक्ता से पूछें कि आपकी योजना राज्य-नियंत्रित है या स्व-वित्तपोषित — {s} का ऑटिज़्म बीमा नियम केवल पहली पर लागू होता है। SSI पात्रता जाँचें और बचत शुरू करने पर ABLE खाता खोलें।','s8.l':'{s} बीमा नियम',
    'states.everyH':'हर राज्य में जो मौजूद है, नाम चाहे जो हो',
    'e1.tag':'0 से 3 वर्ष','e1.t':'अर्ली इंटरवेंशन (Part C)','e1.b':'घर पर मुफ़्त मूल्यांकन और सेवाएँ। निदान या डॉक्टर के रेफ़रल की ज़रूरत नहीं — आप ख़ुद रेफ़र कर सकते हैं। राज्य के अनुसार सेवाएँ मुफ़्त या आय के अनुसार होती हैं।',
    'e2.tag':'3 से 21 वर्ष','e2.t':'विशेष शिक्षा (Part B)','e2.b':'आपका सरकारी स्कूल डिस्ट्रिक्ट मूल्यांकन करेगा और पात्र होने पर IEP देगा — भले ही बच्चा निजी स्कूल में हो या घर पर पढ़ता हो। लिखित में माँगें।',
    'e3.tag':'आर्थिक','e3.t':'Medicaid और HCBS वेवर','e3.b':'वेवर थेरेपी, राहत सेवा, व्यक्तिगत देखभाल और उपकरण कवर कर सकते हैं; कई राज्यों में दिव्यांग बच्चे के लिए माता-पिता की आय नहीं गिनी जाती। सूचियाँ लंबी हैं। अभी आवेदन करें।',
    'e4.tag':'आर्थिक','e4.t':'SSI और ABLE खाते','e4.b':'दिव्यांग बच्चे वाले कम आय के परिवारों के लिए SSI। ABLE खाता लाभ खोए बिना दिव्यांगता खर्चों के लिए बचत करने देता है।',
    'e5.tag':'मुफ़्त सहायता','e5.t':'पैरेंट ट्रेनिंग एंड इन्फ़ॉर्मेशन सेंटर','e5.b':'हर राज्य में एक, संघीय वित्तपोषित, मुफ़्त। वे माता-पिता को विशेष शिक्षा अधिकार सिखाते हैं और IEP विवाद में साथ चलते हैं।',
    'e6.tag':'मुफ़्त सहायता','e6.t':'DD काउंसिल, UCEDD और P&A','e6.b':'हर राज्य में विकासात्मक दिव्यांगता परिषद, विश्वविद्यालय केंद्र (UCEDD) और मुफ़्त क़ानूनी पैरवी देने वाली Protection & Advocacy एजेंसी है।',
    'e7.tag':'भाषा','e7.t':'दुभाषिया और अनुवाद','e7.b':'स्कूल, अर्ली इंटरवेंशन और संघीय वित्तपोषित स्वास्थ्य सेवा में मुफ़्त दुभाषिया और अनुवादित दस्तावेज़ अधिकार हैं, एहसान नहीं। लिखित में माँगें।',
    'e8.tag':'वयस्क जीवन','e8.t':'व्यावसायिक पुनर्वास','e8.b':'हर राज्य में VR एजेंसी है जो नौकरी प्रशिक्षण, कोचिंग और सहायता-प्राप्त रोज़गार का खर्च उठाती है। ट्रांज़िशन योजना 16 वर्ष तक IEP में शुरू होनी चाहिए।',
    'footer.1':'Yuvan में आपका स्वागत है। यह साइट परिवारों के लिए सामान्य जानकारी देती है। यहाँ दी गई सामग्री केवल सूचना के लिए है और यह चिकित्सीय, क़ानूनी या शैक्षिक सलाह नहीं है।<br><br>कार्यक्रमों का विवरण हर राज्य में अलग होता है और बार-बार बदलता है। किसी भी जानकारी पर भरोसा करने से पहले संबंधित एजेंसी से पुष्टि करें।',
    'footer.2':'संकट में 988 पर कॉल या टेक्स्ट करें। बच्चा लापता हो तो 911 पर कॉल करें।',
    pending:'यह भाग अभी अनूदित नहीं है और अंग्रेज़ी में दिखाया जा रहा है। मेनू, आपातकालीन जानकारी और राज्यवार पूरी मार्गदर्शिका आपकी भाषा में उपलब्ध हैं।'
  };

  T.ne={
    'states.policy':'<strong>Medicaid बदलिँदै छ।</strong> कामसम्बन्धी सर्त, छ महिने नवीकरण र खुम्चिएको राज्य बजेट अहिलेदेखि जनवरी २०२७ भित्र लागू हुँदै छन्। <a href="/updates/">वेभर र प्रतीक्षा सूचीका लागि यसको अर्थ</a>।',
   
    'nav.updates':'के बदलिँदै छ', 'banner.t':'नीति अद्यावधिक, अक्टोबर २०२६: Medicaid, विशेष शिक्षा र खोपसम्बन्धी मार्गदर्शन तीनै बदलिएका छन्।', 'banner.l':'तपाईंको परिवारका लागि यसको अर्थ', 'banner.x':'बन्द गर्नुहोस्',
   
    'footer.ded':'युवनका लागि — र आफ्नो बाटो खोज्दै गरेका हरेक परिवारका लागि।',
   
    skip:'मुख्य सामग्रीमा जानुहोस्', langLabel:'भाषा', largerText:'ठूलो अक्षर', tagline:'एक पूर्ण मार्गदर्शन',
    'nav.start':'यहाँबाट सुरु गर्नुहोस्','nav.understanding':'अटिज्म बुझ्ने','nav.kinds':'प्रकार र विशेषता','nav.history':'इतिहास','nav.research':'अनुसन्धानले के भन्छ','nav.support':'उपचार र सहयोग','nav.activities':'दैनिक क्रियाकलाप','nav.stigma':'लाञ्छना र अधिकार','nav.states':'तपाईंको राज्यमा सहयोग','nav.resources':'स्रोतहरू',
    'nav.feedback':'प्रतिक्रिया','nav.about':'हाम्रोबारे','nav.contact':'सम्पर्क','nav.privacy':'गोपनीयता',
    'side.guide':'मार्गदर्शन','side.site':'यो साइटबारे','menu':'मेनु','closemenu':'मेनु बन्द गर्नुहोस्',
    'hero.h1':'यो सबै सही क्रममा बुझ्नुपर्छ भन्ने छैन।',
    'hero.lede':'यो अटिस्टिक बालबालिकाका अभिभावक र संरक्षकका लागि सरल भाषामा बनेको मार्गदर्शन हो — अटिज्म के हो, अनुसन्धानले वास्तवमा के देखाउँछ, दैनिक जीवनमा के काम लाग्छ, र तपाईंको राज्यले दिनुपर्ने सेवाहरू कसरी पाउने।',
    'door1.t':'केही फरक लाग्छ','door1.d':'तपाईंले केही कुरा देख्नुभयो तर कसैले अझै त्यो शब्द भनेको छैन। पहिले अटिज्म के हो र मूल्याङ्कन कसरी हुन्छ भन्ने हेर्नुहोस्।',
    'door2.t':'भर्खरै निदान आयो','door2.d':'पहिलो नब्बे दिन, क्रमैसँग। यो हप्ता के गर्ने, यो महिना के, र के पर्खन सक्छ।',
    'door3.t':'मलाई सेवा र आर्थिक सहयोग चाहियो','door3.d':'अर्ली इन्टरभेन्सन, IEP, Medicaid वेभर, विश्राम सेवा — र तपाईंको राज्यमा कसलाई फोन गर्ने।',
    'door4.t':'आजको दिन गाह्रो थियो','door4.d':'मेल्टडाउन, निद्रा, खाना, परिवर्तन। घरको तनाव घटाउने व्यावहारिक उपायहरू।',
    'crisis.h':'यदि तपाईं अहिले चिन्तित हुनुहुन्छ भने','crisis.t':'तत्काल सहायता',
    'crisis.p1':'<strong>988</strong> — कुनै पनि मानसिक स्वास्थ्य संकटका लागि चौबीसै घण्टा फोन वा म्यासेज गर्नुहोस्, हेरचाह गर्नेहरूका लागि पनि। कतै प्रहरीको सट्टा मोबाइल क्राइसिस टोली पठाउन सकिन्छ। दोभाषेका लागि अङ्ग्रेजीमा “Nepali” भन्नुहोस्।',
    'crisis.p2':'<strong>911</strong> — बच्चा हराएमा। अङ्ग्रेजीमा भन्नुहोस् “autistic and may not respond to their name” र पानीको कुरा उठाउनुहोस्: घरबाट निस्केपछि पानीतिर जानु मृत्युको प्रमुख कारण हो। स्थानीय प्रहरीसँग अपाङ्गता भएका बासिन्दाका लागि स्वैच्छिक दर्ता छ कि सोध्नुहोस्।',
    'crisis.p3':'हेरचाह गर्दा तपाईं आफैँ थाक्नुभयो भन्ने लाग्छ भने आफ्नो डाक्टर वा परामर्शदातासँग कुरा गर्नु उचित कदम हो — धेरै अभिभावकले त्यही गर्छन्।',
    'crisis.p4':'दुवै लाइनमा दोभाषे उपलब्ध छन्। अङ्ग्रेजीमा आफ्नो भाषाको नाम भनेर पर्खनुहोस्।',
    'states.h1':'तपाईंको राज्यमा सहयोग','states.lede':'हरेक राज्यमा उस्तै कार्यक्रम फरक नामले चल्छन्। आफ्नो राज्य छान्नुहोस् र कसलाई सम्पर्क गर्ने हेर्नुहोस् — सबैभन्दा छिटो सहयोग पाइने क्रममा।',
    'states.choose':'आफ्नो राज्य छान्नुहोस्','states.pickPrompt':'माथि राज्य छान्नुहोस्, सूची यहाँ देखिनेछ।','states.selectOpt':'राज्य छान्नुहोस्…',
    'states.order':'यो सूची क्रमैसँग पूरा गर्नुहोस्। चरण १ र ३ सबैभन्दा जरुरी हुन्।',
    'states.worth':'{s} मा जान्नुपर्ने कुरा:',
    's1.t':'बच्चा ३ वर्षभन्दा सानो छ भने — {ei}','s1.b':'रेफरलको ४५ दिनभित्र निःशुल्क मूल्याङ्कन; निदान वा डाक्टरको पत्र चाहिँदैन। तपाईं आफैँ फोन गरेर रेफर गर्न सक्नुहुन्छ।','s1.l':'सम्पर्क विवरण खोज्नुहोस्',
    's2.t':'बच्चा ३ वर्ष वा माथि छ भने — तपाईंको स्कुल डिस्ट्रिक्ट','s2.b':'विशेष शिक्षा निर्देशकलाई पूर्ण मूल्याङ्कनका लागि मिति सहित पत्र लेख्नुहोस्। यसले कानुनी समयसीमा सुरु गर्छ, बच्चा सरकारी स्कुलमा भए पनि नभए पनि।','s2.l':'{s} विशेष शिक्षा',
    's3.t':'Medicaid वेभर — {dd}','s3.b':'उपचार, विश्राम सेवा, व्यक्तिगत हेरचाह र उपकरणका लागि यो दीर्घकालीन स्रोत हो। प्रतीक्षा सूची वर्षौँ लामो हुन्छ, त्यसैले अहिले आवश्यक नभए पनि आवेदन दिनुहोस्।','s3.l':'वेभर र प्रतीक्षा सूची','s3.l2':'Medicaid आवेदन',
    's4.t':'निःशुल्क सहयोग — Parent Training and Information Center','s4.b':'सङ्घीय अनुदानमा, निःशुल्क, र उनीहरूलाई तपाईंको डिस्ट्रिक्ट र एजेन्सी राम्ररी थाहा छ। पहिलो IEP बैठकअघि फोन गर्नुहोस्।','s4.l':'{s} को केन्द्र खोज्नुहोस्',
    's5.t':'कानुनी अधिकार — Protection & Advocacy एजेन्सी','s5.b':'हरेक राज्यमा एउटा छ। स्कुल, सेवा, आवास र स्वास्थ्यमा अपाङ्गता अधिकारका लागि निःशुल्क कानुनी सहयोग।','s5.l':'{s} को P&A एजेन्सी',
    's6.t':'भाषा पहुँच','s6.b':'स्कुल, अर्ली इन्टरभेन्सन र सङ्घीय अनुदान पाउने स्वास्थ्य संस्थाले निःशुल्क दोभाषे र अनुवादित कागजात दिनुपर्छ। लिखित रूपमा माग्नुहोस् र जवाफ राख्नुहोस्।','s6.l':'{s} मा स्कुल दोभाषे अधिकार',
    's7.t':'स्थानीय समुदाय र विश्राम सेवा','s7.b':'Autism Society का स्थानीय शाखा, तपाईंको राज्यको DD काउन्सिल, विश्वविद्यालय अपाङ्गता केन्द्र (UCEDD), र विश्राम, खाना तथा बिल सहयोगका लागि 211।','s7.l':'स्थानीय अटिज्म समूह','s7.l2':'{s} मा विश्राम सेवा',
    's8.t':'बीमा र सुविधा','s8.b':'रोजगारदातासँग सोध्नुहोस् कि तपाईंको योजना राज्यले नियमन गरेको हो वा स्व-वित्तपोषित — {s} को अटिज्म बीमा नियम पहिलोमा मात्र लागू हुन्छ। SSI योग्यता जाँच्नुहोस् र बचत गर्न सक्दा ABLE खाता खोल्नुहोस्।','s8.l':'{s} बीमा नियम',
    'states.everyH':'नाम जे भए पनि हरेक राज्यमा हुने कुराहरू',
    'e1.tag':'० देखि ३ वर्ष','e1.t':'अर्ली इन्टरभेन्सन (Part C)','e1.b':'घरमै निःशुल्क मूल्याङ्कन र सेवा। निदान वा डाक्टरको रेफरल चाहिँदैन — तपाईं आफैँ रेफर गर्न सक्नुहुन्छ। राज्यअनुसार निःशुल्क वा आयअनुसार।',
    'e2.tag':'३ देखि २१ वर्ष','e2.t':'विशेष शिक्षा (Part B)','e2.b':'तपाईंको सरकारी स्कुल डिस्ट्रिक्टले मूल्याङ्कन गर्नैपर्छ र योग्य भएमा IEP दिनुपर्छ — बच्चा निजी स्कुल वा होमस्कुलमा भए पनि। लिखित रूपमा माग्नुहोस्।',
    'e3.tag':'आर्थिक','e3.t':'Medicaid र HCBS वेभर','e3.b':'वेभरले उपचार, विश्राम, व्यक्तिगत हेरचाह र उपकरण समेट्न सक्छ; धेरै राज्यमा अपाङ्गता भएको बच्चाका लागि अभिभावकको आय गनिँदैन। सूची लामो छ। अहिले नै आवेदन दिनुहोस्।',
    'e4.tag':'आर्थिक','e4.t':'SSI र ABLE खाता','e4.b':'अपाङ्गता भएको बच्चा भएका न्यून आय परिवारका लागि SSI। ABLE खाताले सुविधा नगुमाई अपाङ्गता खर्चका लागि बचत गर्न दिन्छ।',
    'e5.tag':'निःशुल्क सहयोग','e5.t':'Parent Training and Information Center','e5.b':'हरेक राज्यमा एउटा, सङ्घीय अनुदानमा, निःशुल्क। अभिभावकलाई विशेष शिक्षा अधिकार सिकाउँछन् र IEP विवादमा साथ दिन्छन्।',
    'e6.tag':'निःशुल्क सहयोग','e6.t':'DD काउन्सिल, UCEDD र P&A','e6.b':'हरेक राज्यमा विकासात्मक अपाङ्गता परिषद्, विश्वविद्यालय केन्द्र (UCEDD) र निःशुल्क कानुनी सहयोग दिने Protection & Advocacy एजेन्सी छ।',
    'e7.tag':'भाषा','e7.t':'दोभाषे र अनुवाद','e7.b':'स्कुल, अर्ली इन्टरभेन्सन र सङ्घीय अनुदान पाउने स्वास्थ्य सेवामा निःशुल्क दोभाषे र अनुवादित कागजात अधिकार हुन्, कृपा होइन। लिखित रूपमा माग्नुहोस्।',
    'e8.tag':'वयस्क जीवन','e8.t':'व्यावसायिक पुनर्स्थापना','e8.b':'हरेक राज्यमा VR एजेन्सी छ जसले सीप तालिम, कोचिङ र सहयोगसहितको रोजगारी खर्च बेहोर्छ। ट्रान्जिसन योजना १६ वर्षसम्ममा IEP मा सुरु हुनुपर्छ।',
    'footer.1':'Yuvan मा स्वागत छ। यो साइटले परिवारका लागि सामान्य जानकारी दिन्छ। यहाँको सामग्री जानकारीका लागि मात्र हो र यो चिकित्सकीय, कानुनी वा शैक्षिक सल्लाह होइन।<br><br>कार्यक्रमका विवरण राज्यअनुसार फरक हुन्छन् र बारम्बार बदलिन्छन्। कुनै पनि जानकारीमा भर पर्नुअघि सम्बन्धित एजेन्सीसँग पुष्टि गर्नुहोस्।',
    'footer.2':'संकटमा 988 मा फोन वा म्यासेज गर्नुहोस्। बच्चा हराएमा 911 मा फोन गर्नुहोस्।',
    pending:'यो खण्ड अझै अनुवाद भएको छैन र अङ्ग्रेजीमा देखाइएको छ। मेनु, आपत्कालीन जानकारी र राज्यअनुसारको पूरा मार्गदर्शन तपाईंको भाषामा उपलब्ध छ।'
  };

  T.mr={
    'nav.updates':'काय बदलत आहे', 'banner.t':'धोरण अद्यतन, ऑक्टोबर २०२६: Medicaid, विशेष शिक्षण आणि लसीकरण मार्गदर्शन बदलले आहे.', 'banner.l':'तुमच्या कुटुंबासाठी याचा अर्थ', 'banner.x':'बंद करा',
   
    'footer.ded':'युवनसाठी — आणि आपला मार्ग शोधणाऱ्या प्रत्येक कुटुंबासाठी.',
   
    skip:'मुख्य मजकुराकडे जा', langLabel:'भाषा', largerText:'मोठा मजकूर', tagline:'एक संपूर्ण मार्गदर्शक',
    'nav.start':'इथून सुरुवात करा','nav.understanding':'ऑटिझम समजून घेणे','nav.kinds':'प्रकार आणि लक्षणे','nav.history':'इतिहास','nav.research':'संशोधन काय सांगते','nav.support':'थेरपी आणि आधार','nav.activities':'दैनंदिन उपक्रम','nav.stigma':'कलंक आणि हक्क','nav.states':'तुमच्या राज्यातील मदत','nav.resources':'संसाधने',
    'nav.feedback':'अभिप्राय','nav.about':'आमच्याविषयी','nav.contact':'संपर्क','nav.privacy':'गोपनीयता',
    'side.guide':'मार्गदर्शक','side.site':'या साइटविषयी','menu':'मेनू','closemenu':'मेनू बंद करा',
    'hero.h1':'हे सगळं अचूक क्रमाने समजून घेण्याची गरज नाही.',
    'hero.lede':'हे ऑटिस्टिक मुलांच्या पालकांसाठी आणि पालकत्व करणाऱ्यांसाठी सोप्या भाषेतील मार्गदर्शक आहे — ऑटिझम म्हणजे काय, संशोधन खरोखर काय सांगते, रोजच्या जीवनात काय उपयोगी पडते, आणि तुमच्या राज्याकडून मिळणाऱ्या सेवा कशा मिळवायच्या.',
    'door1.t':'काहीतरी वेगळं जाणवतंय','door1.d':'तुम्हाला काही गोष्टी दिसल्या आहेत पण अजून कोणी तो शब्द उच्चारलेला नाही. आधी ऑटिझम म्हणजे काय आणि मूल्यांकन कसे होते ते पाहा.',
    'door2.t':'नुकतेच निदान झाले आहे','door2.d':'पहिले नव्वद दिवस, क्रमाने. या आठवड्यात काय, या महिन्यात काय, आणि काय थांबू शकते.',
    'door3.t':'मला सेवा आणि आर्थिक मदत हवी','door3.d':'अर्ली इंटरव्हेन्शन, IEP, Medicaid वेव्हर, विश्रांती सेवा — आणि तुमच्या राज्यात कोणाला फोन करायचा.',
    'door4.t':'आजचा दिवस कठीण होता','door4.d':'मेल्टडाउन, झोप, जेवण, बदल. घरातील ताण कमी करणारे व्यावहारिक उपाय.',
    'crisis.h':'तुम्हाला आत्ता काळजी वाटत असेल तर','crisis.t':'तातडीची मदत',
    'crisis.p1':'<strong>988</strong> — कोणत्याही मानसिक आरोग्य संकटासाठी चोवीस तास फोन किंवा मेसेज करा, काळजी घेणाऱ्यांसाठीही. काही भागांत पोलिसांऐवजी मोबाइल क्रायसिस टीम पाठवली जाऊ शकते. दुभाष्यासाठी इंग्रजीत “Marathi” म्हणा.',
    'crisis.p2':'<strong>911</strong> — मूल हरवले असल्यास. इंग्रजीत सांगा “autistic and may not respond to their name” आणि पाण्याचा उल्लेख करा: घराबाहेर पडल्यावर पाण्याकडे जाणे हे मृत्यूचे प्रमुख कारण आहे. स्थानिक पोलिसांकडे दिव्यांग रहिवाशांसाठी स्वेच्छा नोंदणी आहे का विचारा.',
    'crisis.p3':'काळजी घेताना तुम्ही स्वतः थकून गेला आहात असे वाटत असेल तर तुमच्या डॉक्टरांशी किंवा समुपदेशकाशी बोलणे हे योग्य पुढचे पाऊल आहे — अनेक पालक तेच करतात.',
    'crisis.p4':'दोन्ही लाइनवर दुभाषे उपलब्ध आहेत. इंग्रजीत तुमच्या भाषेचे नाव सांगा आणि जोडले जाण्याची वाट पाहा.',
    'states.h1':'तुमच्या राज्यातील मदत','states.lede':'प्रत्येक राज्यात तेच कार्यक्रम वेगळ्या नावांनी चालतात. तुमचे राज्य निवडा आणि कोणाशी संपर्क साधायचा ते पाहा — सर्वात लवकर मदत मिळेल अशा क्रमाने.',
    'states.choose':'तुमचे राज्य निवडा','states.pickPrompt':'वर राज्य निवडा, यादी इथे दिसेल.','states.selectOpt':'राज्य निवडा…',
    'states.order':'ही यादी क्रमाने पूर्ण करा. पायरी १ आणि ३ सर्वात तातडीच्या आहेत.',
    'states.worth':'{s} मध्ये लक्षात ठेवण्यासारखे:',
    's1.t':'मूल ३ वर्षांखालील असल्यास — {ei}','s1.b':'रेफरलनंतर ४५ दिवसांत मोफत मूल्यांकन; निदान किंवा डॉक्टरांची चिठ्ठी लागत नाही. तुम्ही स्वतः फोन करून रेफर करू शकता.','s1.l':'संपर्क माहिती शोधा',
    's2.t':'मूल ३ वर्षे किंवा मोठे असल्यास — तुमचा स्कूल डिस्ट्रिक्ट','s2.b':'विशेष शिक्षण संचालकांना संपूर्ण मूल्यांकनासाठी तारखेसह पत्र लिहा. यामुळे कायदेशीर मुदत सुरू होते, मूल सरकारी शाळेत असो वा नसो.','s2.l':'{s} विशेष शिक्षण',
    's3.t':'Medicaid वेव्हर — {dd}','s3.b':'थेरपी, विश्रांती सेवा, वैयक्तिक काळजी आणि साधनांसाठी हा दीर्घकालीन निधी स्रोत आहे. प्रतीक्षा यादी वर्षांची असते, त्यामुळे आत्ता गरज नसली तरी अर्ज करा.','s3.l':'वेव्हर आणि प्रतीक्षा यादी','s3.l2':'Medicaid साठी अर्ज',
    's4.t':'मोफत मदत — Parent Training and Information Center','s4.b':'केंद्रीय निधीवर चालणारे, मोफत, आणि त्यांना तुमचा डिस्ट्रिक्ट व संस्था नावाने माहीत असतात. पहिल्या IEP बैठकीपूर्वी फोन करा.','s4.l':'{s} चे केंद्र शोधा',
    's5.t':'कायदेशीर हक्क — Protection & Advocacy संस्था','s5.b':'प्रत्येक राज्यात एक आहे. शाळा, सेवा, घर आणि आरोग्यामध्ये दिव्यांग हक्कांसाठी मोफत कायदेशीर मदत.','s5.l':'{s} ची P&A संस्था',
    's6.t':'भाषा उपलब्धता','s6.b':'शाळा, अर्ली इंटरव्हेन्शन आणि केंद्रीय निधी मिळणाऱ्या आरोग्य संस्थांनी मोफत दुभाषी आणि अनुवादित कागदपत्रे द्यायला हवीत. लेखी मागा आणि उत्तर जपून ठेवा.','s6.l':'{s} मध्ये शाळेतील दुभाषी हक्क',
    's7.t':'स्थानिक समुदाय आणि विश्रांती सेवा','s7.b':'Autism Society च्या स्थानिक शाखा, तुमच्या राज्याची DD कौन्सिल, विद्यापीठ दिव्यांग केंद्र (UCEDD), आणि विश्रांती, अन्न व बिल मदतीसाठी 211.','s7.l':'स्थानिक ऑटिझम गट','s7.l2':'{s} मध्ये विश्रांती सेवा',
    's8.t':'विमा आणि लाभ','s8.b':'तुमची योजना राज्य-नियंत्रित आहे की स्व-निधीची हे नियोक्त्याला विचारा — {s} चा ऑटिझम विमा नियम फक्त पहिल्यालाच लागू होतो. SSI पात्रता तपासा आणि बचत शक्य झाल्यावर ABLE खाते उघडा.','s8.l':'{s} विमा नियम',
    'states.everyH':'नाव कोणतेही असो, प्रत्येक राज्यात जे असते',
    'e1.tag':'० ते ३ वर्षे','e1.t':'अर्ली इंटरव्हेन्शन (Part C)','e1.b':'घरी मोफत मूल्यांकन आणि सेवा. निदान किंवा डॉक्टरांचा रेफरल लागत नाही — तुम्ही स्वतः रेफर करू शकता. राज्यानुसार मोफत किंवा उत्पन्नानुसार.',
    'e2.tag':'३ ते २१ वर्षे','e2.t':'विशेष शिक्षण (Part B)','e2.b':'तुमच्या सरकारी स्कूल डिस्ट्रिक्टने मूल्यांकन करायलाच हवे आणि पात्र असल्यास IEP द्यायला हवा — मूल खाजगी शाळेत किंवा होमस्कूलमध्ये असले तरी. लेखी मागा.',
    'e3.tag':'आर्थिक','e3.t':'Medicaid आणि HCBS वेव्हर','e3.b':'वेव्हरमधून थेरपी, विश्रांती, वैयक्तिक काळजी आणि साधने मिळू शकतात; अनेक राज्यांत दिव्यांग मुलासाठी पालकांचे उत्पन्न मोजले जात नाही. याद्या लांब आहेत. आत्ताच अर्ज करा.',
    'e4.tag':'आर्थिक','e4.t':'SSI आणि ABLE खाती','e4.b':'दिव्यांग मूल असलेल्या कमी उत्पन्नाच्या कुटुंबांसाठी SSI. ABLE खाते लाभ न गमावता दिव्यांगतेच्या खर्चासाठी बचत करू देते.',
    'e5.tag':'मोफत मदत','e5.t':'Parent Training and Information Center','e5.b':'प्रत्येक राज्यात एक, केंद्रीय निधीवर, मोफत. ते पालकांना विशेष शिक्षण हक्क शिकवतात आणि IEP वादात सोबत राहतात.',
    'e6.tag':'मोफत मदत','e6.t':'DD कौन्सिल, UCEDD आणि P&A','e6.b':'प्रत्येक राज्यात विकासात्मक दिव्यांगता परिषद, विद्यापीठ केंद्र (UCEDD) आणि मोफत कायदेशीर मदत देणारी Protection & Advocacy संस्था आहे.',
    'e7.tag':'भाषा','e7.t':'दुभाषी आणि अनुवाद','e7.b':'शाळा, अर्ली इंटरव्हेन्शन आणि केंद्रीय निधीच्या आरोग्यसेवेत मोफत दुभाषी आणि अनुवादित कागदपत्रे हा हक्क आहे, उपकार नाही. लेखी मागा.',
    'e8.tag':'प्रौढ जीवन','e8.t':'व्यावसायिक पुनर्वसन','e8.b':'प्रत्येक राज्यात VR संस्था आहे जी नोकरी प्रशिक्षण, मार्गदर्शन आणि आधारित रोजगाराचा खर्च करते. ट्रान्झिशन नियोजन १६ व्या वर्षापर्यंत IEP मध्ये सुरू व्हावे.',
    'footer.1':'Yuvan मध्ये आपले स्वागत आहे. ही साइट कुटुंबांसाठी सामान्य माहिती देते. इथली माहिती केवळ माहितीसाठी आहे आणि ती वैद्यकीय, कायदेशीर किंवा शैक्षणिक सल्ला नाही.<br><br>कार्यक्रमांचे तपशील राज्यानुसार बदलतात आणि वारंवार बदलत राहतात. कोणत्याही माहितीवर अवलंबून राहण्यापूर्वी संबंधित संस्थेकडून खात्री करा.',
    'footer.2':'संकटात 988 वर फोन किंवा मेसेज करा. मूल हरवल्यास 911 वर फोन करा.',
    pending:'हा भाग अजून अनुवादित नाही आणि इंग्रजीत दाखवला जात आहे. मेनू, आपत्कालीन माहिती आणि राज्यनिहाय संपूर्ण मार्गदर्शक तुमच्या भाषेत उपलब्ध आहेत.'
  };

  T.bn={
    'nav.updates':'কী বদলাচ্ছে', 'banner.t':'নীতি হালনাগাদ, অক্টোবর ২০২৬: Medicaid, বিশেষ শিক্ষা ও টিকার নির্দেশনা বদলেছে।', 'banner.l':'আপনার পরিবারের জন্য এর অর্থ', 'banner.x':'বন্ধ করুন',
   
    'footer.ded':'যুবনের জন্য — এবং পথ খুঁজে চলা প্রতিটি পরিবারের জন্য।',
   
    skip:'মূল বিষয়বস্তুতে যান', langLabel:'ভাষা', largerText:'বড় লেখা', tagline:'একটি সম্পূর্ণ নির্দেশিকা',
    'nav.start':'এখান থেকে শুরু করুন','nav.understanding':'অটিজম বোঝা','nav.kinds':'ধরন ও বৈশিষ্ট্য','nav.history':'ইতিহাস','nav.research':'গবেষণা যা বলে','nav.support':'থেরাপি ও সহায়তা','nav.activities':'দৈনন্দিন কার্যকলাপ','nav.stigma':'কলঙ্ক ও অধিকার','nav.states':'আপনার রাজ্যে সাহায্য','nav.resources':'সম্পদ',
    'nav.feedback':'মতামত','nav.about':'আমাদের সম্পর্কে','nav.contact':'যোগাযোগ','nav.privacy':'গোপনীয়তা',
    'side.guide':'নির্দেশিকা','side.site':'এই সাইট সম্পর্কে','menu':'মেনু','closemenu':'মেনু বন্ধ করুন',
    'hero.h1':'সবকিছু সঠিক ক্রমে বুঝতে হবে এমন নয়।',
    'hero.lede':'এটি অটিস্টিক শিশুদের বাবা-মা ও অভিভাবকদের জন্য সহজ ভাষায় লেখা একটি নির্দেশিকা — অটিজম কী, গবেষণা আসলে কী দেখায়, প্রতিদিনের জীবনে কী কাজে লাগে, এবং আপনার রাজ্যের কাছ থেকে প্রাপ্য সেবাগুলো কীভাবে পাবেন।',
    'door1.t':'কিছু একটা আলাদা মনে হচ্ছে','door1.d':'আপনি কিছু লক্ষ্য করেছেন কিন্তু কেউ এখনও শব্দটি বলেনি। প্রথমে দেখুন অটিজম কী এবং মূল্যায়ন কীভাবে হয়।',
    'door2.t':'সবেমাত্র রোগনির্ণয় হয়েছে','door2.d':'প্রথম নব্বই দিন, ধাপে ধাপে। এই সপ্তাহে কী, এই মাসে কী, আর কী অপেক্ষা করতে পারে।',
    'door3.t':'আমার সেবা ও আর্থিক সহায়তা দরকার','door3.d':'আর্লি ইন্টারভেনশন, IEP, Medicaid ওয়েভার, বিশ্রাম সেবা — এবং আপনার রাজ্যে কাকে ফোন করবেন।',
    'door4.t':'আজকের দিনটা কঠিন ছিল','door4.d':'মেল্টডাউন, ঘুম, খাওয়া, পরিবর্তন। ঘরের চাপ কমানোর ব্যবহারিক উপায়।',
    'crisis.h':'আপনি যদি এখন উদ্বিগ্ন হন','crisis.t':'জরুরি সাহায্য',
    'crisis.p1':'<strong>988</strong> — যেকোনো মানসিক স্বাস্থ্য সংকটে দিনরাত ফোন বা মেসেজ করুন, যত্নকারীদের জন্যও। কিছু এলাকায় পুলিশের বদলে মোবাইল ক্রাইসিস টিম পাঠানো যায়। দোভাষীর জন্য ইংরেজিতে “Bengali” বলুন।',
    'crisis.p2':'<strong>911</strong> — শিশু নিখোঁজ হলে। ইংরেজিতে বলুন “autistic and may not respond to their name” এবং পানির কথা উল্লেখ করুন: বাড়ি থেকে বেরিয়ে পানির দিকে যাওয়া মৃত্যুর প্রধান কারণ। স্থানীয় পুলিশকে জিজ্ঞাসা করুন প্রতিবন্ধী বাসিন্দাদের জন্য স্বেচ্ছা নিবন্ধন আছে কি না।',
    'crisis.p3':'যত্ন নিতে গিয়ে আপনি নিজেই ভেঙে পড়ছেন মনে হলে নিজের ডাক্তার বা কাউন্সেলরের সঙ্গে কথা বলা যুক্তিসঙ্গত পদক্ষেপ — অনেক অভিভাবকই তা করেন।',
    'crisis.p4':'দুটি লাইনেই দোভাষী পাওয়া যায়। ইংরেজিতে আপনার ভাষার নাম বলুন এবং সংযোগের জন্য অপেক্ষা করুন।',
    'states.h1':'আপনার রাজ্যে সাহায্য','states.lede':'প্রতিটি রাজ্যে একই কর্মসূচি ভিন্ন নামে চলে। আপনার রাজ্য বেছে নিন এবং দেখুন কার সঙ্গে যোগাযোগ করবেন — যে ক্রমে দ্রুততম সাহায্য মেলে।',
    'states.choose':'আপনার রাজ্য বেছে নিন','states.pickPrompt':'উপরে একটি রাজ্য বেছে নিন, তালিকা এখানে দেখা যাবে।','states.selectOpt':'রাজ্য নির্বাচন করুন…',
    'states.order':'এই তালিকা ক্রমানুসারে সম্পন্ন করুন। ধাপ ১ ও ৩ সবচেয়ে জরুরি।',
    'states.worth':'{s}-এ জেনে রাখার মতো:',
    's1.t':'শিশুর বয়স ৩ বছরের কম হলে — {ei}','s1.b':'রেফারেলের ৪৫ দিনের মধ্যে বিনামূল্যে মূল্যায়ন; রোগনির্ণয় বা ডাক্তারের চিঠি লাগে না। আপনি নিজেই ফোন করে রেফার করতে পারেন।','s1.l':'যোগাযোগের তথ্য খুঁজুন',
    's2.t':'শিশুর বয়স ৩ বা তার বেশি হলে — আপনার স্কুল ডিস্ট্রিক্ট','s2.b':'বিশেষ শিক্ষা পরিচালককে সম্পূর্ণ মূল্যায়নের জন্য তারিখসহ চিঠি লিখুন। এতে আইনি সময়সীমা শুরু হয়, শিশু সরকারি স্কুলে পড়ুক বা না পড়ুক।','s2.l':'{s} বিশেষ শিক্ষা',
    's3.t':'Medicaid ওয়েভার — {dd}','s3.b':'থেরাপি, বিশ্রাম সেবা, ব্যক্তিগত যত্ন ও সরঞ্জামের জন্য এটিই দীর্ঘমেয়াদি তহবিল। অপেক্ষমাণ তালিকা বছরের পর বছর, তাই এখন প্রয়োজন না হলেও আবেদন করুন।','s3.l':'ওয়েভার ও অপেক্ষমাণ তালিকা','s3.l2':'Medicaid-এ আবেদন',
    's4.t':'বিনামূল্যে সহায়তা — Parent Training and Information Center','s4.b':'কেন্দ্রীয় অর্থায়নে, বিনামূল্যে, এবং তারা আপনার ডিস্ট্রিক্ট ও সংস্থাগুলো নাম ধরে চেনে। প্রথম IEP সভার আগেই ফোন করুন।','s4.l':'{s}-এর কেন্দ্র খুঁজুন',
    's5.t':'আইনি অধিকার — Protection & Advocacy সংস্থা','s5.b':'প্রতিটি রাজ্যে একটি আছে। স্কুল, সেবা, বাসস্থান ও স্বাস্থ্যে প্রতিবন্ধী অধিকারের জন্য বিনামূল্যে আইনি সহায়তা।','s5.l':'{s}-এর P&A সংস্থা',
    's6.t':'ভাষা সহায়তা','s6.b':'স্কুল, আর্লি ইন্টারভেনশন এবং কেন্দ্রীয় অর্থায়িত স্বাস্থ্যসেবাকে বিনামূল্যে দোভাষী ও অনূদিত নথি দিতে হয়। লিখিতভাবে চান এবং উত্তর সংরক্ষণ করুন।','s6.l':'{s}-এ স্কুলে দোভাষীর অধিকার',
    's7.t':'স্থানীয় সম্প্রদায় ও বিশ্রাম সেবা','s7.b':'Autism Society-র স্থানীয় শাখা, আপনার রাজ্যের DD কাউন্সিল, বিশ্ববিদ্যালয় প্রতিবন্ধিতা কেন্দ্র (UCEDD), এবং বিশ্রাম, খাদ্য ও বিল সহায়তার জন্য 211।','s7.l':'স্থানীয় অটিজম গোষ্ঠী','s7.l2':'{s}-এ বিশ্রাম সেবা',
    's8.t':'বিমা ও সুবিধা','s8.b':'নিয়োগকর্তাকে জিজ্ঞাসা করুন আপনার পরিকল্পনা রাজ্য-নিয়ন্ত্রিত না স্ব-অর্থায়িত — {s}-এর অটিজম বিমা বিধি কেবল প্রথমটিতে প্রযোজ্য। SSI যোগ্যতা যাচাই করুন এবং সঞ্চয়ের সামর্থ্য হলে ABLE অ্যাকাউন্ট খুলুন।','s8.l':'{s} বিমা বিধি',
    'states.everyH':'নাম যাই হোক, প্রতিটি রাজ্যে যা আছে',
    'e1.tag':'০ থেকে ৩ বছর','e1.t':'আর্লি ইন্টারভেনশন (Part C)','e1.b':'বাড়িতে বিনামূল্যে মূল্যায়ন ও সেবা। রোগনির্ণয় বা ডাক্তারের রেফারেল লাগে না — আপনি নিজেই রেফার করতে পারেন। রাজ্যভেদে বিনামূল্যে বা আয় অনুযায়ী।',
    'e2.tag':'৩ থেকে ২১ বছর','e2.t':'বিশেষ শিক্ষা (Part B)','e2.b':'আপনার সরকারি স্কুল ডিস্ট্রিক্টকে মূল্যায়ন করতেই হবে এবং যোগ্য হলে IEP দিতে হবে — শিশু বেসরকারি স্কুলে বা হোমস্কুলে থাকলেও। লিখিতভাবে চান।',
    'e3.tag':'অর্থ','e3.t':'Medicaid ও HCBS ওয়েভার','e3.b':'ওয়েভার থেরাপি, বিশ্রাম, ব্যক্তিগত যত্ন ও সরঞ্জাম কভার করতে পারে; অনেক রাজ্যে প্রতিবন্ধী শিশুর জন্য অভিভাবকের আয় গণনা করা হয় না। তালিকা দীর্ঘ। এখনই আবেদন করুন।',
    'e4.tag':'অর্থ','e4.t':'SSI ও ABLE অ্যাকাউন্ট','e4.b':'প্রতিবন্ধী শিশুসহ স্বল্প আয়ের পরিবারের জন্য SSI। ABLE অ্যাকাউন্ট সুবিধা না হারিয়ে প্রতিবন্ধিতা সংক্রান্ত খরচের জন্য সঞ্চয় করতে দেয়।',
    'e5.tag':'বিনামূল্যে সহায়তা','e5.t':'Parent Training and Information Center','e5.b':'প্রতিটি রাজ্যে একটি, কেন্দ্রীয় অর্থায়নে, বিনামূল্যে। তারা অভিভাবকদের বিশেষ শিক্ষা অধিকার শেখায় এবং IEP বিরোধে পাশে থাকে।',
    'e6.tag':'বিনামূল্যে সহায়তা','e6.t':'DD কাউন্সিল, UCEDD ও P&A','e6.b':'প্রতিটি রাজ্যে উন্নয়নমূলক প্রতিবন্ধিতা কাউন্সিল, বিশ্ববিদ্যালয় কেন্দ্র (UCEDD) এবং বিনামূল্যে আইনি সহায়তা দেওয়া Protection & Advocacy সংস্থা আছে।',
    'e7.tag':'ভাষা','e7.t':'দোভাষী ও অনুবাদ','e7.b':'স্কুল, আর্লি ইন্টারভেনশন ও কেন্দ্রীয় অর্থায়িত স্বাস্থ্যসেবায় বিনামূল্যে দোভাষী ও অনূদিত নথি অধিকার, অনুগ্রহ নয়। লিখিতভাবে চান।',
    'e8.tag':'প্রাপ্তবয়স্ক জীবন','e8.t':'বৃত্তিমূলক পুনর্বাসন','e8.b':'প্রতিটি রাজ্যে VR সংস্থা আছে যা কাজের প্রশিক্ষণ, কোচিং ও সহায়ক কর্মসংস্থানে অর্থায়ন করে। ট্রানজিশন পরিকল্পনা ১৬ বছরের মধ্যে IEP-তে শুরু হওয়া উচিত।',
    'footer.1':'Yuvan-এ স্বাগতম। এই সাইট পরিবারের জন্য সাধারণ তথ্য দেয়। এখানকার বিষয়বস্তু কেবল তথ্যের জন্য এবং তা চিকিৎসা, আইনি বা শিক্ষাগত পরামর্শ নয়।<br><br>কর্মসূচির বিবরণ রাজ্যভেদে ভিন্ন এবং প্রায়ই বদলায়। যেকোনো তথ্যের উপর নির্ভর করার আগে সংশ্লিষ্ট সংস্থার কাছে নিশ্চিত করুন।',
    'footer.2':'সংকটে 988-এ ফোন বা মেসেজ করুন। শিশু নিখোঁজ হলে 911-এ ফোন করুন।',
    pending:'এই অংশটি এখনও অনূদিত হয়নি এবং ইংরেজিতে দেখানো হচ্ছে। মেনু, জরুরি তথ্য এবং রাজ্যভিত্তিক সম্পূর্ণ নির্দেশিকা আপনার ভাষায় পাওয়া যাবে।'
  };

  T.ur={
    'nav.updates':'کیا بدل رہا ہے', 'banner.t':'پالیسی اپ ڈیٹ، اکتوبر 2026: Medicaid، خصوصی تعلیم اور ویکسین رہنمائی سب بدل گئے ہیں۔', 'banner.l':'آپ کے خاندان کے لیے اس کا مطلب', 'banner.x':'بند کریں',
   
    'footer.ded':'یُووَن کے لیے — اور ہر اُس خاندان کے لیے جو اپنا راستہ تلاش کر رہا ہے۔',
   
    skip:'مواد پر جائیں', langLabel:'زبان', largerText:'بڑا متن', tagline:'ایک مکمل رہنما',
    'nav.start':'یہاں سے شروع کریں','nav.understanding':'آٹزم کو سمجھنا','nav.kinds':'اقسام اور خصوصیات','nav.history':'تاریخ','nav.research':'تحقیق کیا کہتی ہے','nav.support':'علاج اور معاونت','nav.activities':'روزمرہ کی سرگرمیاں','nav.stigma':'بدنامی اور وکالت','nav.states':'آپ کی ریاست میں مدد','nav.resources':'وسائل',
    'nav.feedback':'رائے','nav.about':'ہمارے بارے میں','nav.contact':'رابطہ','nav.privacy':'رازداری',
    'side.guide':'رہنما','side.site':'اس سائٹ کے بارے میں','menu':'مینو','closemenu':'مینو بند کریں',
    'hero.h1':'یہ سب کچھ درست ترتیب میں سمجھنا ضروری نہیں۔',
    'hero.lede':'یہ آٹسٹک بچوں کے والدین اور سرپرستوں کے لیے سادہ زبان میں ایک رہنما ہے — آٹزم کیا ہے، تحقیق اصل میں کیا بتاتی ہے، روزمرہ زندگی میں کیا مدد دیتا ہے، اور اپنی ریاست سے ملنے والی خدمات کیسے حاصل کریں۔',
    'door1.t':'کچھ مختلف محسوس ہوتا ہے','door1.d':'آپ نے کچھ باتیں دیکھی ہیں مگر ابھی کسی نے وہ لفظ نہیں کہا۔ پہلے جانیے کہ آٹزم کیا ہے اور تشخیص کیسے ہوتی ہے۔',
    'door2.t':'ہمیں ابھی تشخیص ملی ہے','door2.d':'پہلے نوے دن، ترتیب سے۔ اس ہفتے کیا کرنا ہے، اس مہینے کیا، اور کیا انتظار کر سکتا ہے۔',
    'door3.t':'مجھے خدمات اور مالی مدد چاہیے','door3.d':'ابتدائی مداخلت، IEP، Medicaid ویور، وقفہ نگہداشت — اور آپ کی ریاست میں کس سے رابطہ کریں۔',
    'door4.t':'آج کا دن مشکل تھا','door4.d':'میلٹ ڈاؤن، نیند، کھانا، تبدیلیاں۔ گھر کا تناؤ کم کرنے کے عملی طریقے۔',
    'crisis.h':'اگر آپ اس وقت پریشان ہیں','crisis.t':'فوری مدد',
    'crisis.p1':'<strong>988</strong> — کسی بھی ذہنی صحت کے بحران کے لیے چوبیس گھنٹے کال یا پیغام کریں، دیکھ بھال کرنے والوں کے لیے بھی۔ بعض علاقوں میں پولیس کے بجائے موبائل کرائسس ٹیم بھیجی جا سکتی ہے۔ مترجم کے لیے انگریزی میں “Urdu” کہیں۔',
    'crisis.p2':'<strong>911</strong> — اگر آپ کا بچہ لاپتہ ہو۔ انگریزی میں کہیں “autistic and may not respond to their name” اور پانی کا ذکر کریں: گھر سے نکلنے کے بعد پانی کی طرف جانا موت کی سب سے بڑی وجہ ہے۔ مقامی پولیس سے پوچھیں کہ معذور رہائشیوں کے لیے رضاکارانہ رجسٹر ہے یا نہیں۔',
    'crisis.p3':'اگر بطور نگہداشت کنندہ آپ خود حد کو پہنچتے محسوس کریں تو اپنے ڈاکٹر یا مشیر سے بات کرنا مناسب اگلا قدم ہے، اور بہت سے والدین یہی کرتے ہیں۔',
    'crisis.p4':'دونوں لائنوں پر مترجم دستیاب ہیں۔ انگریزی میں اپنی زبان کا نام کہیں اور رابطے کا انتظار کریں۔',
    'states.h1':'آپ کی ریاست میں مدد','states.lede':'ہر ریاست میں یہی چند پروگرام مختلف ناموں سے چلتے ہیں۔ اپنی ریاست منتخب کریں اور دیکھیں کس سے رابطہ کرنا ہے — اُسی ترتیب میں جس سے مدد جلد ملے۔',
    'states.choose':'اپنی ریاست منتخب کریں','states.pickPrompt':'اوپر ریاست منتخب کریں، فہرست یہاں ظاہر ہوگی۔','states.selectOpt':'ریاست منتخب کریں…',
    'states.order':'اس فہرست پر ترتیب سے عمل کریں۔ مرحلہ ۱ اور ۳ سب سے زیادہ فوری ہیں۔',
    'states.worth':'{s} میں جاننے کے قابل بات:',
    's1.t':'اگر بچہ ۳ سال سے کم ہے — {ei}','s1.b':'ریفرل کے ۴۵ دن کے اندر مفت تشخیصی جائزہ؛ تشخیص یا ڈاکٹر کی پرچی ضروری نہیں۔ آپ خود فون کر کے اپنے بچے کو ریفر کر سکتے ہیں۔','s1.l':'رابطہ کی تفصیلات تلاش کریں',
    's2.t':'اگر بچہ ۳ سال یا اس سے بڑا ہے — آپ کا اسکول ڈسٹرکٹ','s2.b':'خصوصی تعلیم کے ڈائریکٹر کو مکمل جائزے کے لیے تاریخ سمیت خط لکھیں۔ اس سے قانونی مدت شروع ہوتی ہے، چاہے بچہ سرکاری اسکول میں ہو یا نہ ہو۔','s2.l':'{s} خصوصی تعلیم',
    's3.t':'Medicaid ویور — {dd}','s3.b':'یہ علاج، وقفہ نگہداشت، ذاتی دیکھ بھال اور آلات کے لیے طویل مدتی فنڈنگ ہے۔ انتظار کی فہرستیں برسوں کی ہوتی ہیں، اس لیے ابھی ضرورت نہ ہو تب بھی درخواست دیں۔','s3.l':'ویور اور انتظار کی فہرست','s3.l2':'Medicaid کے لیے درخواست',
    's4.t':'مفت مدد — Parent Training and Information Center','s4.b':'وفاقی فنڈڈ، مفت، اور وہ آپ کے ڈسٹرکٹ اور اداروں کو نام سے جانتے ہیں۔ پہلی IEP میٹنگ سے پہلے فون کریں۔','s4.l':'{s} کا مرکز تلاش کریں',
    's5.t':'قانونی حقوق — Protection & Advocacy ادارہ','s5.b':'ہر ریاست میں ایک ہے۔ اسکول، خدمات، رہائش اور صحت میں معذوری کے حقوق کے لیے مفت قانونی مدد۔','s5.l':'{s} کا P&A ادارہ',
    's6.t':'زبان تک رسائی','s6.b':'اسکولوں، ابتدائی مداخلت کے پروگراموں اور وفاقی فنڈ حاصل کرنے والے صحت فراہم کنندگان کو مفت مترجم اور ترجمہ شدہ دستاویزات دینی ہوتی ہیں۔ تحریری طور پر مانگیں اور جواب محفوظ رکھیں۔','s6.l':'{s} میں اسکول مترجم کے حقوق',
    's7.t':'مقامی برادری اور وقفہ نگہداشت','s7.b':'Autism Society کی مقامی شاخیں، آپ کی ریاست کی DD کونسل، یونیورسٹی معذوری مرکز (UCEDD)، اور وقفہ، خوراک اور بلوں میں مدد کے لیے 211۔','s7.l':'مقامی آٹزم گروپ','s7.l2':'{s} میں وقفہ نگہداشت',
    's8.t':'انشورنس اور فوائد','s8.b':'آجر سے پوچھیں کہ آپ کا پلان ریاستی ضابطے میں ہے یا خود مالی — {s} کا آٹزم انشورنس ضابطہ صرف پہلے پر لاگو ہوتا ہے۔ SSI اہلیت جانچیں اور بچت ممکن ہو تو ABLE اکاؤنٹ کھولیں۔','s8.l':'{s} انشورنس ضابطہ',
    'states.everyH':'نام کچھ بھی ہو، ہر ریاست میں جو موجود ہے',
    'e1.tag':'۰ سے ۳ سال','e1.t':'ابتدائی مداخلت (Part C)','e1.b':'گھر پر مفت جائزہ اور خدمات۔ تشخیص یا ڈاکٹر کے ریفرل کی ضرورت نہیں — آپ خود ریفر کر سکتے ہیں۔ ریاست کے مطابق مفت یا آمدنی کے حساب سے۔',
    'e2.tag':'۳ سے ۲۱ سال','e2.t':'خصوصی تعلیم (Part B)','e2.b':'آپ کے سرکاری اسکول ڈسٹرکٹ کو جائزہ لینا ہوگا اور اہل ہونے پر IEP دینا ہوگا — چاہے بچہ نجی اسکول میں ہو یا گھر پر پڑھتا ہو۔ تحریری طور پر درخواست دیں۔',
    'e3.tag':'مالی','e3.t':'Medicaid اور HCBS ویور','e3.b':'ویور علاج، وقفہ، ذاتی دیکھ بھال اور آلات پورے کر سکتے ہیں؛ کئی ریاستوں میں معذور بچے کے لیے والدین کی آمدنی شمار نہیں ہوتی۔ فہرستیں طویل ہیں۔ ابھی درخواست دیں۔',
    'e4.tag':'مالی','e4.t':'SSI اور ABLE اکاؤنٹس','e4.b':'معذور بچے والے کم آمدنی خاندانوں کے لیے SSI۔ ABLE اکاؤنٹ فوائد کھوئے بغیر معذوری کے اخراجات کے لیے بچت کی اجازت دیتا ہے۔',
    'e5.tag':'مفت مدد','e5.t':'Parent Training and Information Center','e5.b':'ہر ریاست میں ایک، وفاقی فنڈڈ، مفت۔ وہ والدین کو خصوصی تعلیم کے حقوق سکھاتے ہیں اور IEP تنازع میں ساتھ چلتے ہیں۔',
    'e6.tag':'مفت مدد','e6.t':'DD کونسل، UCEDD اور P&A','e6.b':'ہر ریاست میں ترقیاتی معذوری کونسل، یونیورسٹی مرکز (UCEDD) اور مفت قانونی وکالت دینے والا Protection & Advocacy ادارہ ہے۔',
    'e7.tag':'زبان','e7.t':'ترجمانی اور ترجمہ','e7.b':'اسکول، ابتدائی مداخلت اور وفاقی فنڈڈ صحت کی خدمات میں مفت مترجم اور ترجمہ شدہ دستاویزات حق ہیں، احسان نہیں۔ تحریری طور پر مانگیں۔',
    'e8.tag':'بالغ زندگی','e8.t':'پیشہ ورانہ بحالی','e8.b':'ہر ریاست میں VR ادارہ ہے جو ملازمت کی تربیت، کوچنگ اور معاون روزگار کی مالی مدد کرتا ہے۔ منتقلی کی منصوبہ بندی ۱۶ سال تک IEP میں شروع ہونی چاہیے۔',
    'footer.1':'Yuvan میں خوش آمدید۔ یہ سائٹ خاندانوں کے لیے عمومی معلومات فراہم کرتی ہے۔ یہاں دی گئی معلومات صرف آگاہی کے لیے ہیں اور یہ طبی، قانونی یا تعلیمی مشورہ نہیں۔<br><br>پروگراموں کی تفصیلات ہر ریاست میں مختلف ہوتی ہیں اور اکثر بدلتی رہتی ہیں۔ کسی بھی معلومات پر انحصار سے پہلے متعلقہ ادارے سے تصدیق کریں۔',
    'footer.2':'بحران میں 988 پر کال یا پیغام کریں۔ بچہ لاپتہ ہو تو 911 پر کال کریں۔',
    pending:'یہ حصہ ابھی ترجمہ نہیں ہوا اور انگریزی میں دکھایا جا رہا ہے۔ مینو، ہنگامی معلومات اور ریاست وار مکمل رہنما آپ کی زبان میں دستیاب ہیں۔'
  };



  /* ================= policy banner ================= */
  (function(){
    var b=document.getElementById('policyBanner');
    if(!b) return;
    var KEY='cg-banner-2026-10';
    try{ if(localStorage.getItem(KEY)==='x'){ b.remove(); return; } }catch(e){}
    b.hidden=false;
    var x=document.getElementById('bannerClose');
    if(x) x.addEventListener('click',function(){
      b.remove();
      try{ localStorage.setItem(KEY,'x'); }catch(e){}
    });
  })();

  /* ================= mobile menu drawer ================= */
  (function(){
    var btn=document.getElementById('menuBtn');
    var side=document.getElementById('sidenav');
    var scrim=document.getElementById('scrim');
    var close=document.getElementById('sideClose');
    if(!btn||!side||!scrim) return;
    function open(){ side.classList.add('open'); scrim.classList.add('on');
      btn.setAttribute('aria-expanded','true'); document.body.style.overflow='hidden';
      var f=side.querySelector('a'); if(f) f.focus(); }
    function shut(){ side.classList.remove('open'); scrim.classList.remove('on');
      btn.setAttribute('aria-expanded','false'); document.body.style.overflow=''; btn.focus(); }
    btn.addEventListener('click',function(){ side.classList.contains('open')?shut():open(); });
    scrim.addEventListener('click',shut);
    if(close) close.addEventListener('click',shut);
    document.addEventListener('keydown',function(e){ if(e.key==='Escape'&&side.classList.contains('open')) shut(); });
    window.addEventListener('resize',function(){ if(window.innerWidth>980&&side.classList.contains('open')) shut(); });
  })();

  /* ================= preferences ================= */
  var root=document.documentElement;
  function get(k){try{return localStorage.getItem(k)}catch(e){return null}}
  function set(k,v){try{localStorage.setItem(k,v)}catch(e){}}

  var sizeBtn=document.getElementById('sizeBtn');
  if(get('cg-size')==='large'){root.setAttribute('data-size','large');sizeBtn.setAttribute('aria-pressed','true');}
  sizeBtn.addEventListener('click',function(){
    var big=root.getAttribute('data-size')==='large';
    if(big){root.removeAttribute('data-size');set('cg-size','normal');sizeBtn.setAttribute('aria-pressed','false');}
    else{root.setAttribute('data-size','large');set('cg-size','large');sizeBtn.setAttribute('aria-pressed','true');}
  });

  var themeBtn=document.getElementById('themeBtn');
  function isDark(){
    var t=root.getAttribute('data-theme');
    return t==='dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }
  var savedTheme=get('cg-theme');
  if(savedTheme==='dark'||savedTheme==='light') root.setAttribute('data-theme',savedTheme);
  function syncTheme(){ themeBtn.textContent = isDark() ? '☀' : '☾'; themeBtn.setAttribute('aria-label', isDark()?'Light mode':'Dark mode'); }
  syncTheme();
  themeBtn.addEventListener('click',function(){
    var next = isDark() ? 'light':'dark';
    root.setAttribute('data-theme',next); set('cg-theme',next); syncTheme();
  });

  /* ================= i18n engine ================= */
  var lang='en';
  function t(key){
    var d=T[lang]||{};
    return (key in d) ? d[key] : (T.en[key]||'');
  }
  function fill(str,vals){
    return String(str).replace(/\{(\w+)\}/g,function(m,k){return (k in vals)?vals[k]:m});
  }

  var langSel=document.getElementById('langSel');
  LANGS.forEach(function(L){
    var o=document.createElement('option'); o.value=L.c; o.textContent=L.n; langSel.appendChild(o);
  });

  function applyLang(code){
    var L=null;
    for(var i=0;i<LANGS.length;i++){ if(LANGS[i].c===code) L=LANGS[i]; }
    if(!L){ L=LANGS[0]; code='en'; }
    lang=code;
    root.setAttribute('lang',code);
    root.setAttribute('dir',L.dir);
    langSel.value=code;

    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n]'),function(el){
      var v=t(el.getAttribute('data-i18n'));
      if(!v) return;
      if(el.getAttribute('data-html')==='1') el.innerHTML=v; else el.textContent=v;
    });

    // body visibility: use this language if a translated body exists, else English
    Array.prototype.forEach.call(document.querySelectorAll('.page'),function(pg){
      var bodies=pg.querySelectorAll('.i18nbody');
      if(!bodies.length) return;
      var found=false;
      Array.prototype.forEach.call(bodies,function(b){
        var match=b.getAttribute('data-lang')===code;
        if(match) found=true;
        b.hidden=!match;
      });
      if(!found){
        Array.prototype.forEach.call(bodies,function(b){
          b.hidden = b.getAttribute('data-lang')!=='en';
        });
      }
      var banner=pg.querySelector('.pending');
      if(banner){
        var needs = !found && code!=='en';
        banner.classList.toggle('on',needs);
        if(needs){ banner.textContent=t('pending'); banner.setAttribute('lang',code); banner.setAttribute('dir',L.dir); }
      }
    });

    buildEveryGrid();
    rebuildStateSelect();
    if(hasStates){
      if(currentState) pick(currentState,true);
      else out.innerHTML='<p class="quiet">'+t('states.pickPrompt')+'</p>';
    }
    set('cg-lang',code);
  }

  langSel.addEventListener('change',function(){ applyLang(langSel.value); });

  /* ================= state data ================= */
  var S=[
   ['AL','Alabama',"Alabama's Early Intervention System",'Dept. of Mental Health, Division of Developmental Disabilities',''],
   ['AK','Alaska','Infant Learning Program','Senior & Disabilities Services (DHSS)',''],
   ['AZ','Arizona','Arizona Early Intervention Program (AzEIP)','DES Division of Developmental Disabilities',''],
   ['AR','Arkansas','First Connections','DHS Division of Developmental Disabilities Services',''],
   ['CA','California','Early Start','your regional center, under the Lanterman Act','Regional centers coordinate most services, including the Self-Determination Program. Find yours by county — it is your single most important contact.'],
   ['CO','Colorado','Early Intervention Colorado','your Community Centered Board (Office of Community Living)',''],
   ['CT','Connecticut','Birth to Three','Dept. of Developmental Services',''],
   ['DE','Delaware','Child Development Watch','Division of Developmental Disabilities Services',''],
   ['DC','District of Columbia','Strong Start Early Intervention','DDS Developmental Disabilities Administration',''],
   ['FL','Florida','Early Steps','Agency for Persons with Disabilities (APD)','Ask about the iBudget Florida waiver and join the waiting list as early as possible — it is long and prioritised by crisis category.'],
   ['GA','Georgia',"Babies Can't Wait",'DBHDD Division of Developmental Disabilities','Ask specifically about the NOW and COMP waivers and the planning list.'],
   ['HI','Hawaii','Early Intervention Section (Dept. of Health)','Developmental Disabilities Division',''],
   ['ID','Idaho','Infant Toddler Program','Family and Community Services (DHW)',''],
   ['IL','Illinois','Illinois Early Intervention','Division of Developmental Disabilities','Get your child on the PUNS list (Prioritization of Urgency of Need for Services) immediately — waiver funding is drawn from it.'],
   ['IN','Indiana','First Steps','Bureau of Disabilities Services',''],
   ['IA','Iowa','Early ACCESS','HHS Division of Aging and Disability Services',''],
   ['KS','Kansas','Infant-Toddler Services (tiny-k)','KDADS and your Community Developmental Disability Organization',''],
   ['KY','Kentucky','First Steps','Division of Developmental and Intellectual Disabilities',''],
   ['LA','Louisiana','EarlySteps','Office for Citizens with Developmental Disabilities (OCDD)',''],
   ['ME','Maine','Child Development Services','Office of Aging and Disability Services',''],
   ['MD','Maryland','Maryland Infants and Toddlers Program','Developmental Disabilities Administration','The Autism Waiver registry is a separate application and fills quickly — ask about it by name.'],
   ['MA','Massachusetts','Early Intervention (Dept. of Public Health)','Dept. of Developmental Services',''],
   ['MI','Michigan','Early On Michigan','your county Community Mental Health (CMHSP) agency',''],
   ['MN','Minnesota','Help Me Grow / Infant and Toddler Intervention','DHS Disability Services Division',''],
   ['MS','Mississippi','First Steps Early Intervention','Dept. of Mental Health, Bureau of IDD',''],
   ['MO','Missouri','First Steps','Division of Developmental Disabilities',''],
   ['MT','Montana','Part C Family Support Services','Developmental Services Division (DPHHS)',''],
   ['NE','Nebraska','Early Development Network','DHHS Division of Developmental Disabilities',''],
   ['NV','Nevada','Nevada Early Intervention Services','Aging and Disability Services Division',''],
   ['NH','New Hampshire','Family Centered Early Supports and Services','your regional Area Agency (Bureau of Developmental Services)',''],
   ['NJ','New Jersey','New Jersey Early Intervention System','Children\u2019s System of Care (under 21); Division of Developmental Disabilities (adults)','PerformCare is the single entry point for children\u2019s behavioural and developmental services.'],
   ['NM','New Mexico','Family Infant Toddler (FIT) Program','Developmental Disabilities Supports Division',''],
   ['NY','New York','Early Intervention Program (via your county)','Office for People With Developmental Disabilities (OPWDD)','OPWDD eligibility is a separate application from school and Medicaid services. Start it early.'],
   ['NC','North Carolina','Infant-Toddler Program','your LME/MCO, under DHHS','Ask to be added to the Registry of Unmet Needs for the NC Innovations Waiver.'],
   ['ND','North Dakota','Right Track','Developmental Disabilities Division',''],
   ['OH','Ohio','Help Me Grow Early Intervention','your County Board of Developmental Disabilities','County boards are the main door to services in Ohio and vary a lot by county.'],
   ['OK','Oklahoma','SoonerStart','DHS Developmental Disabilities Services',''],
   ['OR','Oregon','Early Intervention / Early Childhood Special Education','your Community Developmental Disability Program (ODDS)',''],
   ['PA','Pennsylvania','Pennsylvania Early Intervention','Office of Developmental Programs and your county MH/IDD office',''],
   ['RI','Rhode Island','Rhode Island Early Intervention','BHDDH Division of Developmental Disabilities',''],
   ['SC','South Carolina','BabyNet','Dept. of Disabilities and Special Needs',''],
   ['SD','South Dakota','Birth to Three','Division of Developmental Disabilities',''],
   ['TN','Tennessee','Tennessee Early Intervention System (TEIS)','Dept. of Disability and Aging',''],
   ['TX','Texas','Early Childhood Intervention (ECI)','your Local IDD Authority, under HHSC','Sign up for every interest list you qualify for — HCS, CLASS, MDCP and others. Waits run many years, and you can be on several at once.'],
   ['UT','Utah','Baby Watch Early Intervention','Division of Services for People with Disabilities',''],
   ['VT','Vermont',"Children's Integrated Services",'Developmental Disabilities Services Division',''],
   ['VA','Virginia','Infant & Toddler Connection of Virginia','your Community Services Board (DBHDS)','Ask about the three DD waivers — Family and Individual Supports, Community Living, and Building Independence.'],
   ['WA','Washington','Early Support for Infants and Toddlers (ESIT)','Developmental Disabilities Administration','Apply for DDA eligibility separately from early intervention; it gates later services.'],
   ['WV','West Virginia','WV Birth to Three','Bureau for Behavioral Health, I/DD Waiver program',''],
   ['WI','Wisconsin','Birth to 3 Program','your county human services department','Ask about the Children\u2019s Long-Term Support (CLTS) Waiver by name.'],
   ['WY','Wyoming','Early Intervention and Education Program','Behavioral Health Division, Developmental Disabilities Section','']
  ];

  var POS={AK:[1,1],ME:[1,11],VT:[2,10],NH:[2,11],
    WA:[3,1],ID:[3,2],MT:[3,3],ND:[3,4],MN:[3,5],IL:[3,6],WI:[3,7],MI:[3,8],NY:[3,9],MA:[3,10],RI:[3,11],
    OR:[4,1],NV:[4,2],WY:[4,3],SD:[4,4],IA:[4,5],IN:[4,6],OH:[4,7],PA:[4,8],NJ:[4,9],CT:[4,10],
    CA:[5,1],UT:[5,2],CO:[5,3],NE:[5,4],MO:[5,5],KY:[5,6],WV:[5,7],VA:[5,8],MD:[5,9],DE:[5,10],
    AZ:[6,2],NM:[6,3],KS:[6,4],AR:[6,5],TN:[6,6],NC:[6,7],SC:[6,8],DC:[6,9],
    OK:[7,4],LA:[7,5],MS:[7,6],AL:[7,7],GA:[7,8],
    HI:[8,2],TX:[8,4],FL:[8,10]};

  var sel=document.getElementById('stateSel');
  var map=document.getElementById('usmap');
  var out=document.getElementById('stateOut');
  var hasStates = !!(sel && map && out);
  var byAbbr={};
  var currentState=null;

  function rebuildStateSelect(){
    if(!hasStates) return;
    sel.innerHTML='';
    var o0=document.createElement('option'); o0.value=''; o0.textContent=t('states.selectOpt'); sel.appendChild(o0);
    S.slice().sort(function(a,b){return a[1]<b[1]?-1:1}).forEach(function(s){
      var o=document.createElement('option'); o.value=s[0]; o.textContent=s[1]; sel.appendChild(o);
    });
    if(currentState) sel.value=currentState;
  }

  S.forEach(function(s){
    byAbbr[s[0]]=s;
    if(!hasStates) return;
    var p=POS[s[0]]; if(!p) return;
    var b=document.createElement('button');
    b.className='st'; b.type='button'; b.textContent=s[0];
    b.setAttribute('aria-label',s[1]); b.setAttribute('aria-pressed','false');
    b.setAttribute('data-abbr',s[0]);
    b.style.gridRow=p[0]; b.style.gridColumn=p[1];
    b.addEventListener('click',function(){pick(s[0])});
    map.appendChild(b);
  });

  function q(txt){return 'https://www.google.com/search?q='+encodeURIComponent(txt)}
  function esc(x){return String(x).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}

  function render(s){
    var name=s[1], v={s:name, ei:s[2], dd:s[3]};
    var extra = s[4] ? '<div class="note"><p><strong>'+esc(fill(t('states.worth'),v))+'</strong> '+esc(s[4])+'</p></div>' : '';
    function step(key,body,links){
      return '<li><h4>'+esc(fill(t(key+'.t'),v))+'</h4><p>'+esc(fill(t(key+'.b'),v))+'</p>'+links+'</li>';
    }
    function L(label,href){return '<a class="btnlink" target="_blank" rel="noopener" href="'+href+'">'+esc(fill(label,v))+'</a> '}
    return '<div class="card" style="margin-top:8px">'+
      '<h2 style="margin-bottom:.25em">'+esc(name)+'</h2>'+
      '<p class="quiet">'+esc(t('states.order'))+'</p>'+ extra +
      '<ol class="steps" style="margin-top:22px">'+
      step('s1','',L(t('s1.l'),q(s[2]+' '+name+' early intervention referral')))+
      step('s2','',L(t('s2.l'),q(name+' special education department of education parent rights IEP')))+
      step('s3','',L(t('s3.l'),q(name+' Medicaid HCBS waiver developmental disabilities apply waiting list'))+L(t('s3.l2'),q(name+' Medicaid apply children disability')))+
      step('s4','',L(t('s4.l'),'https://www.parentcenterhub.org/find-your-center/'))+
      step('s5','',L(t('s5.l'),q(name+' protection and advocacy disability rights agency')))+
      step('s6','',L(t('s6.l'),q(name+' school district interpreter translation rights parents limited English')))+
      step('s7','',L(t('s7.l'),q('Autism Society '+name+' chapter'))+L(t('s7.l2'),q(name+' respite care disability children'))+L('211','https://www.211.org/'))+
      step('s8','',L(t('s8.l'),q(name+' autism insurance mandate coverage')))+
      '</ol></div>';
  }

  function pick(abbr,quiet){
    var s=byAbbr[abbr]; if(!s) return;
    currentState=abbr; set('cg-state',abbr);
    if(!hasStates) return;
    currentState=abbr;
    sel.value=abbr;
    Array.prototype.forEach.call(map.children,function(b){
      b.setAttribute('aria-pressed', b.getAttribute('data-abbr')===abbr ? 'true':'false');
    });
    out.innerHTML=render(s);
    set('cg-state',abbr);
    if(!quiet) out.scrollIntoView({block:'start',behavior:'smooth'});
  }
  if(hasStates) sel.addEventListener('change',function(){ if(sel.value) pick(sel.value); });

  function buildEveryGrid(){
    var g=document.getElementById('everyGrid');
    if(!g) return;
    var cls=['','','h','h','l','l','l',''];
    var html='';
    for(var i=1;i<=8;i++){
      html+='<div class="card"><span class="tag '+cls[i-1]+'">'+esc(t('e'+i+'.tag'))+'</span><h3>'+esc(t('e'+i+'.t'))+'</h3><p>'+esc(t('e'+i+'.b'))+'</p></div>';
    }
    g.innerHTML=html;
  }

  /* ================= boot ================= */
  var start=get('cg-lang');
  if(!start){
    var nav=(navigator.language||'en');
    for(var i=0;i<LANGS.length;i++){
      if(nav.toLowerCase().indexOf(LANGS[i].c.toLowerCase().split('-')[0])===0){ start=LANGS[i].c; break; }
    }
    if(nav.toLowerCase().indexOf('zh')===0) start='zh-Hans';
  }
  applyLang(start||'en');
  var savedState=get('cg-state');
  if(savedState && byAbbr[savedState]) pick(savedState,true);
})();
