/*******************************************************
 * INTERNATIONALIZATION (i18n) MODULE
 * Supports: Spanish (es), English (en), German (de)
 *******************************************************/

const I18n = {
    currentLang: 'es',

    translations: {
        // ============================================
        // SPANISH (Default)
        // ============================================
        es: {
            // General UI
            game_title: 'El Juego de Sergio',
            next_month: 'Siguiente Mes',
            save_game: 'Guardar',
            load_game: 'Cargar',
            reset_game: 'Reiniciar',
            settings: 'Ajustes',
            close: 'Cerrar',
            cancel: 'Cancelar',
            confirm: 'Confirmar',
            accept: 'Aceptar',
            understood: 'Entendido',
            yes: 'Sí',
            no: 'No',
            buy: 'Comprar',
            sell: 'Vender',

            // Navigation
            nav_dashboard: 'Panel',
            nav_market: 'Bolsa',
            nav_bank: 'Banco',
            nav_real_estate: 'Inmuebles',
            nav_job: 'Trabajo',
            nav_education: 'Educación',
            nav_lifestyle: 'Estilo de Vida',

            // Header
            cash: 'Efectivo',
            net_worth: 'Patrimonio Neto',
            monthly_income: 'Ingresos Mensuales',
            monthly_expenses: 'Gastos Mensuales',
            age: 'Edad',
            years: 'años',
            year: 'Año',
            month: 'Mes',

            // Dashboard
            dashboard_title: 'Resumen Ejecutivo',
            cash_box: 'Caja (Efectivo)',
            total_debt: 'Deuda Total',
            total_assets: 'Activos Totales',
            financial_history: 'Historial Financiero',
            monthly_flow: 'Flujo Mensual',
            asset_breakdown: 'Desglose de Activos',
            stocks_value: 'Valor Acciones',
            real_estate_value: 'Valor Inmuebles',
            company_value: 'Valor Empresa',
            income_sources: 'Fuentes de Ingresos',
            expense_sources: 'Fuentes de Gastos',
            from_salary: 'De Salario',
            from_rental: 'De Alquileres',
            from_company: 'De Empresa',
            from_gigs: 'De Gigs',
            living_expenses: 'Gastos de Vida',
            loan_payments: 'Pagos Préstamos',
            no_income: 'Sin ingresos aún',
            no_expenses: 'Sin gastos',
            chart_legend_networth: 'Patrimonio',
            chart_legend_cash: 'Efectivo',
            chart_legend_debt: 'Deuda',
            chart_timeframe_6m: '6M',
            chart_timeframe_2y: '2A',
            chart_timeframe_max: 'MAX',

            // Stock Market
            stock_market: 'Mercado de Valores',
            stocks: 'Acciones',
            portfolio: 'Mi Cartera',
            portfolio_value: 'Valor Cartera',
            portfolio_limit: 'Límite de Cartera (Según Vivienda)',
            stock_price: 'Precio',
            stock_change: 'Cambio',
            stock_shares: 'Acciones',
            stock_value: 'Valor',
            stock_buy: 'Comprar',
            stock_sell: 'Vender',
            stock_quantity: 'Cantidad',
            stock_total: 'Total',
            no_stocks: 'No tienes acciones',
            no_positions: 'No hay posiciones abiertas.',
            stock_limit_reached: 'Has alcanzado tu límite de inversión. Mejora tu vivienda para invertir más.',
            total_return: 'Retorno Total',
            profitability: 'Rentabilidad',
            quotes: 'Cotizaciones',
            tap_to_trade: 'Toca para operar',
            my_positions: 'Mis Posiciones',
            avg_price: 'Precio Medio',
            invested: 'Invertido',
            gain_loss: 'Ganancia/Pérdida',

            // Bank
            bank_title: 'Banco Central',
            financial_services: 'Servicios Financieros',
            loans: 'Préstamos',
            take_loan: 'Solicitar Préstamo',
            pay_loan: 'Pagar Préstamo',
            loan_amount: 'Cantidad',
            loan_interest: 'Interés',
            loan_monthly: 'Cuota Mensual',
            loan_remaining: 'Restante',
            max_loan: 'Préstamo Máximo',
            no_loans: 'No tienes préstamos activos',
            personal_loan: 'Préstamo Personal',
            business_loan: 'Préstamo Empresarial',
            mortgage: 'Hipoteca',
            monthly_payment: 'Pago Mensual',
            available_credit: 'Crédito Disponible',
            request_loan: 'Solicitar Financiación',
            amount_to_request: 'Cantidad a solicitar',
            loan_term: 'Plazo',
            years: 'años',
            interest_rate: 'Tipo de Interés',
            my_loans: 'Mis Préstamos',

            // Real Estate
            real_estate_title: 'Bienes Inmuebles',
            properties: 'Propiedades',
            available_properties: 'Propiedades Disponibles',
            my_properties: 'Mis Propiedades',
            property_price: 'Precio',
            property_rent: 'Alquiler Mensual',
            property_type: 'Tipo',
            buy_property: 'Comprar',
            sell_property: 'Vender',
            buy_with_mortgage: 'Comprar con Hipoteca',
            no_properties: 'No tienes propiedades',
            property_limit_reached: 'Has alcanzado el límite de propiedades para tu nivel de vivienda.',

            // Property Types
            property_residential: 'Residencial',
            property_commercial: 'Comercial',
            property_garage: 'Garaje',
            property_land: 'Terreno',
            property_luxury: 'Lujo',

            // Jobs
            job_title: 'Trabajo',
            current_job: 'Trabajo Actual',
            current_position: 'Puesto Actual',
            salary: 'Salario',
            unemployed: 'Desempleado',
            look_for_work: 'BUSCA TRABAJO',
            you_are_unemployed: 'Estás Desempleado',
            unemployed_message: 'Revisa las ofertas de abajo y aplica a un puesto para empezar a ganar dinero.',
            available_jobs: 'Trabajos Disponibles',
            gig_jobs: 'Trabajos Temporales (Gigs)',
            career_jobs: 'Carreras Profesionales',
            apply: 'Aplicar',
            quit_job: 'Dejar Trabajo',
            promotion: 'Ascenso',
            promotion_ready: 'Has cumplido todos los requisitos para ascender.',
            promotion_go_to_work: 'Ve a la sección de <strong>Trabajo</strong> para solicitar tu ascenso y mejorar tu salario.',
            next_objective: 'Próximo Objetivo',
            ready: 'LISTO',
            salary_increase: 'Incremento Salarial',
            entry_level: 'Nivel Inicial',
            requirements: 'Requisitos',
            experience: 'Experiencia',
            max_level: 'Nivel Máximo',
            holding_companies: 'Holding Empresarial',
            current_profit: 'Beneficio Actual',
            sell: 'Vender',
            sell_now: 'Vender Ahora',
            valuation: 'Valoración',
            search_job: 'Buscar Trabajo',
            looking_for_work: 'Buscando empleo...',
            cancel: 'Cancelar',
            assets: 'Activos',

            // Job Titles - Unskilled
            job_reponedor: 'Reponedor / Auxiliar',
            job_cajero: 'Cajero / Atención',
            job_supervisor_planta: 'Supervisor de Planta',
            job_tres_deporte: 'TRES DEPORTE',

            // Job Titles - DJ Career (literal translations)
            job_dj_casa: 'DJ Residente de tu casa',
            job_dj_reggeton: 'DJ Reggeton',
            job_dj_res_reggeton: 'DJ Residente Reggeton',
            job_dj_electronica: 'DJ Electrónica',
            job_dj_res_electronica: 'DJ Residente Electrónica',
            job_dj_octogono: 'DJ Residente Octógono',
            job_dj_productor: 'DJ y Productor',
            job_dj_prod_sello: 'DJ Productor Sello',
            job_dj_studio77: 'DJ Residente Studio 77',
            job_dj_kapitol: 'DJ Residente Kapitol',
            job_dj_ibiza: 'DJ Residente Ibiza',
            job_dj_berghain: 'DJ Residente Berghain',
            job_dj_favrik: 'DJ Residente FAVRIK',
            job_dj_whiteworks: 'DJ Whiteworks',

            // Job Titles - Admin
            job_admin_contable: 'Administrativo contable',
            job_admin_senior: 'Administrativo senior',
            job_tecnico_gestion: 'Técnico de gestión financiera',
            job_resp_admin: 'Responsable administrativo',
            job_gestor_cobros: 'Gestor de cobros / facturación',
            job_resp_facturacion: 'Responsable de facturación',
            job_credit_controller: 'Credit controller',
            job_jefe_admin_clientes: 'Jefe de admi. de clientes',
            job_admin_inmo: 'Administrativo comercial inmo.',
            job_gestor_ops_inmo: 'Gestor de operaciones inmo.',
            job_resp_oficina_inmo: 'Responsable de oficina inmo.',
            job_director_zona: 'Director de zona',

            // Job Titles - IT/Development
            job_prog_junior: 'Programador junior (FP)',
            job_prog_semi: 'Programador semi-senior',
            job_dev_senior: 'Desarrollador senior',
            job_tech_lead: 'Tech lead',
            job_soporte: 'Técnico de soporte y sistemas',
            job_sys_admin: 'Administrador de sistemas',
            job_sys_engineer: 'Ingeniero de sistemas',
            job_resp_it: 'Responsable infraest. IT',
            job_mobile_dev: 'Desarrollador de apps móviles',
            job_mobile_mid: 'Mobile developer mid',
            job_mobile_senior: 'Senior mobile',
            job_mobile_lead: 'Lead mobile / arquitecto',

            // Job Titles - Maintenance
            job_tecnico_maint: 'Técnico mantenimiento ind.',
            job_tecnico_senior: 'Técnico senior',
            job_jefe_equipo: 'Jefe de equipo',
            job_resp_planta: 'Responsable de planta',
            job_tecnico_clima: 'Técnico de climatización',
            job_oficial_1: 'Oficial de 1ª',
            job_resp_servicio: 'Responsable servicio técnico',
            job_jefe_ops_maint: 'Jefe operaciones mant.',
            job_tecnico_edificios: 'Técnico manten. edificios',
            job_encargado_edificio: 'Encargado de edificio',
            job_supervisor_multi: 'Supervisor multiedificio',
            job_facility_manager: 'Facility manager',

            // Job Titles - Business/Finance
            job_analista_fin: 'Analista financiero',
            job_analista_senior: 'Analista senior',
            job_controller: 'Controller financiero',
            job_cfo: 'Director financiero (CFO)',
            job_consultor: 'Consultor de negocio',
            job_consultor_senior: 'Consultor senior',
            job_manager_proyecto: 'Manager de proyecto',
            job_socio_director: 'Socio / Director',
            job_gestor_cuentas: 'Gestor de cuentas empresa',
            job_key_account: 'Key account manager',
            job_sales_manager: 'Sales manager',
            job_director_comercial: 'Director comercial',

            // Job Titles - Engineering/CS
            job_swe: 'Ingeniero de software',
            job_swe_mid: 'Software engineer mid',
            job_swe_senior: 'Senior software engineer',
            job_eng_manager: 'Engineering manager',
            job_data_analyst: 'Data analyst / BI',
            job_data_senior: 'Data analyst senior',
            job_data_scientist: 'Data scientist',
            job_head_data: 'Head of data',
            job_devops: 'DevOps / cloud engineer',
            job_devops_mid: 'DevOps mid',
            job_cloud_architect: 'Senior / Cloud architect',
            job_dir_cloud: 'Director infraest. cloud',

            // Job Titles - Civil Engineering
            job_ing_obra: 'Ingeniero de obra',
            job_jefe_obra: 'Jefe de obra',
            job_jefe_proyecto: 'Jefe de proyecto',
            job_dir_construccion: 'Director construcción',
            job_tecnico_oficina: 'Técnico oficina técnica',
            job_ing_proyectos: 'Ingeniero de proyectos',
            job_resp_oficina_tec: 'Responsable of. técnica',
            job_dir_tecnico: 'Director técnico',
            job_consultor_urb: 'Consultor ingeniería / urb.',
            job_consultor_urb_senior: 'Consultor senior',
            job_manager_consultoria: 'Manager consultoría',
            job_socio_cons: 'Socio / Director cons.',

            // Gig Jobs (Temporary)
            job_gig_cromos: 'Vender cromos',
            job_gig_wallapop: 'Ventas en Wallapop',
            job_gig_limpiar: 'Limpiar casas',
            job_gig_perros: 'Pasear perros',
            job_gig_publicidad: 'Repartir publicidad',
            job_gig_ninos: 'Cuidar niños',
            job_gig_mudanzas: 'Ayudante mudanzas',
            job_gig_cliente: 'Cliente misterioso',
            job_gig_transcribir: 'Transcribir audios',
            job_gig_encuestador: 'Encuestador',
            job_gig_dj: 'DJ fiestas infantiles',
            job_gig_monitor: 'Monitor comedor',
            job_gig_cesped: 'Cortar césped',

            // Education
            education_title: 'Formación',
            current_studies: 'Estudios Actuales',
            available_courses: 'Cursos Disponibles',
            enroll: 'Matricularse',
            studying: 'Estudiando',
            completed: 'Completado',
            duration: 'Duración',
            months: 'meses',
            cost: 'Coste',
            free: 'Gratis',
            in_progress: 'En Curso',
            time_remaining: 'Tiempo restante',
            progress: 'Progreso',
            current_education: 'Formación Actual',
            highest_degree: 'Máximo Grado',
            no_studies: 'Sin Estudios',
            enroll_tip: 'Inscríbete en un curso para mejorar tus perspectivas laborales.',
            required_prereq: 'Requiere',
            available_section: 'Cursos Disponibles',
            locked_section: 'Bloqueados',
            enrolled_msg: '¡Matriculado!',
            start_studying: 'A estudiar',
            course_fee: 'Matrícula',

            // Education Courses (Spanish names kept as originals)
            course_bachillerato: 'Bachillerato',
            course_bachillerato_desc: 'Formación académica base. Necesaria para la Universidad.',
            course_fp_medio: 'FP Grado Medio',
            course_fp_medio_desc: 'Formación Profesional práctica. Acceso a FP Superior.',
            course_fp_admin: 'FP Sup. Administración',
            course_fp_admin_desc: 'Gestión y Finanzas.',
            course_fp_dam: 'FP Sup. Desarrollo Apps',
            course_fp_dam_desc: 'Programación y Software.',
            course_fp_maint: 'FP Sup. Mantenimiento',
            course_fp_maint_desc: 'Instalaciones y Montaje.',
            course_grado_ade: 'Grado en ADE',
            course_grado_ade_desc: 'Administración de Empresas.',
            course_grado_cs: 'Grado en Ing. Informática',
            course_grado_cs_desc: 'Ciencias de la Computación.',
            course_grado_civil: 'Grado en Ing. Civil',
            course_grado_civil_desc: 'Obras y Construcción.',
            course_master_fin: 'Máster en Finanzas',
            course_master_fin_desc: 'Dirección Financiera.',
            course_master_ai: 'Máster en IA',
            course_master_ai_desc: 'Inteligencia Artificial.',
            course_master_ing: 'Máster Ingeniería',
            course_master_ing_desc: 'Habilitante para firma de proyectos.',
            course_bootcamp: 'Bootcamp Programación',
            course_bootcamp_desc: 'Intensivo tech. Alta demanda.',
            course_dj_basic: 'Curso DJ Básico SYNC',
            course_dj_basic_desc: 'Aprende a mezclar con el botón SYNC. Lo básico.',
            course_dj_pioneer: 'Curso DJ Pioneer',
            course_dj_pioneer_desc: 'Dominio de CDJs y Rekordbox. Estándar de club.',
            course_dj_vinyl: 'Curso DJ Avanzado Vinilo',
            course_dj_vinyl_desc: 'El arte del beatmatching manual. Respeto puro.',
            course_dj_pro: 'Master DJ Professional',
            course_dj_pro_desc: 'Producción musical, marketing y marca personal.',

            // Lifestyle
            lifestyle_title: 'Estilo de Vida',
            housing: 'Vivienda',
            food: 'Alimentación',
            transport: 'Transporte',
            leisure: 'Ocio',
            clothes: 'Ropa',
            current: 'Actual',
            upgrade: 'Mejorar',
            monthly_cost: 'Coste Mensual',

            // Company
            company_title: 'Empresa',
            found_company: 'Fundar Empresa',
            my_company: 'Mi Empresa',
            company_name: 'Nombre de la Empresa',
            company_type: 'Tipo de Negocio',
            company_location: 'Ubicación',
            company_cash: 'Caja de la Empresa',
            company_revenue: 'Ingresos',
            company_expenses: 'Gastos',
            company_profit: 'Beneficio',
            employees: 'Empleados',
            hire: 'Contratar',
            fire: 'Despedir',
            marketing: 'Marketing',
            product: 'Producto',
            upgrade_office: 'Ampliar Oficina',

            // Company Types
            company_cafe: 'Cafetería',
            company_retail: 'Tienda de Ropa',
            company_marketing: 'Agencia Marketing',
            company_tech: 'Startup SaaS',

            // Locations
            location_suburbs: 'Afueras',
            location_downtown: 'Centro Ciudad',
            location_business: 'Distrito Financiero',

            // Alerts & Messages
            not_enough_money: 'No tienes suficiente dinero.',
            requirement_not_met: 'No cumples los requisitos.',
            purchase_successful: 'Compra realizada con éxito.',
            sale_successful: 'Venta realizada con éxito.',
            action_completed: 'Acción completada.',

            // Taxes
            tax_declaration: 'Declaración de la Renta',
            tax_warning: 'Hacienda Somos Todos',
            tax_income: 'Ingresos',
            tax_expenses: 'Gastos Deducibles',
            tax_base: 'Base Imponible',
            tax_rate: 'Tipo',
            tax_amount: 'A Pagar',
            pay_taxes: 'Pagar Impuestos',

            // Expropriation (Easter Egg)
            expropriation_title: 'Expropiación Estatal',
            expropriation_message: 'El Estado ha decidido que tenías demasiado dinero.',

            // Endgame
            game_over: 'Fin del Juego',
            bankruptcy: 'Bancarrota',
            final_stats: 'Estadísticas Finales',
            total_income: 'Ingresos Totales',
            total_expenses: 'Gastos Totales',
            taxes_paid: 'Impuestos Pagados',
            restart_game: 'Reiniciar Juego',

            // Tutorial
            tutorial_welcome: '¡Bienvenido a tu nueva vida!',
            tutorial_welcome_title: '¡Bienvenido!',
            tutorial_age_16: 'Tienes 16 años y acabas de terminar la ESO.',
            tutorial_decide_future: 'Es hora de decidir tu futuro.',
            tutorial_choose_education: 'Elige tu formación:',
            tutorial_bachillerato: 'Bachillerato',
            tutorial_fp_medio: 'FP Grado Medio',
            tutorial_free: 'Gratis',
            tutorial_access_university: '→ Acceso a Universidad',
            tutorial_quick_job: '→ Empleo rápido',
            tutorial_education: 'Primero, elige tu formación.',
            tutorial_job: 'Ahora busca tu primer trabajo.',
            tutorial_next: 'Siguiente',
            tutorial_skip: 'Saltar Tutorial',
            tutorial_understood: '¡Entendido!',
            tutorial_continue: 'Continuar',
            tutorial_lets_go: '¡Vamos!',
            tutorial_great: '¡Genial!',
            tutorial_perfect: '¡Perfecto!',
            tutorial_stock_1: 'Bienvenido al Mercado de Valores',
            tutorial_stock_2: 'Aquí puedes comprar y vender acciones',
            tutorial_stock_3: 'El precio fluctúa con el tiempo',
            tutorial_bank_1: 'Bienvenido al Banco',
            tutorial_bank_2: 'Aquí puedes pedir préstamos',
            tutorial_bank_3: 'Recuerda pagar tus deudas',
            tutorial_finished: '¡Tutorial Finalizado!',
            tutorial_basic_complete: 'Ya conoces lo básico. Trabaja, invierte y hazte millonario.',
            tutorial_good_luck: 'Suerte en la vida real...',
            graduated: 'Graduado',

            // Tutorial Step 3 (Temporary Jobs)
            tutorial_temp_jobs_title: 'Trabajos Temporales',
            tutorial_temp_jobs_msg: 'Sin titulación, solo tienes acceso a <strong style="color: #facc15;">trabajos temporales</strong>.',
            tutorial_tip: 'Consejo',
            tutorial_tip_accept_job: 'Acepta uno de los trabajos disponibles para ganar dinero mientras estudias.',
            tutorial_future: 'A futuro',
            tutorial_future_msg: 'Cuando termines tu formación, desbloquearás <strong>empleos fijos</strong> con mejores salarios.',
            tutorial_no_money_fp: 'No tienes 500€ para FP. Te has matriculado en Bachillerato (gratis).',

            // Tutorial Step 2 (Go to Work)
            tutorial_enrolled: '¡Ya estás matriculado!',
            tutorial_earn_money_studying: 'Mientras estudias, puedes ganar dinero con <strong style="color: #4ade80;">trabajos temporales</strong>.',
            tutorial_find_first_job: '¡Busca tu primer trabajo para empezar a ahorrar!',
            go_to_work: 'Ir a Trabajo',

            // Tutorial Step 6 (Jobs Unlocked)
            tutorial_jobs_unlocked: '¡Empleos Desbloqueados!',
            tutorial_jobs_unlocked_msg: 'Ahora que tienes tu título, puedes acceder a <strong>empleos fijos</strong>.<br><br>💼 Los empleos fijos pagan mejor y te permiten <strong>ascender</strong>.<br><br>👆 Elige un empleo de la sección "Mercado Laboral" para continuar.',

            // Tutorial Step 7 (First Real Job)
            tutorial_first_real_job: 'Tu Primer Empleo Fijo',
            tutorial_promotions: 'Ascensos',
            tutorial_promotions_msg: 'Pide aumentos cuando lleves tiempo. La educación superior desbloquea carreras mejores.',
            tutorial_salary_msg: 'Cobras cada mes automáticamente. Aparece en tu Dashboard.',
            tutorial_change_job: 'Cambiar',
            tutorial_change_job_msg: 'Puedes aplicar a otros empleos cuando quieras. Algunos requieren títulos.',
            congratulations: '¡Felicidades!',
            tutorial_lets_work: '¡A trabajar!',

            // Tutorial Step 8 (Housing Kickout)
            tutorial_kicked_out: '¡Te Echan de Casa!',
            tutorial_mom_quote: 'Hijo, ya vas siendo mayor. Cómprate algo bonito con estos 300€, pero espabila porque mañana usamos tu habitación para el gimnasio.',
            emergency: '¡Emergencia!',
            tutorial_need_housing: 'Necesitas un techo bajo el que dormir hoy mismo.',
            find_housing: 'Buscar Vivienda',

            // Tutorial Step 9 (Independence)
            tutorial_independence: '¡INDEPENDENCIA!',
            tutorial_new_stage: 'Nueva Etapa Desbloqueada',
            tutorial_financial_control: 'Control Financiero Total',
            tutorial_emancipated: 'Estado: Emancipado',
            tutorial_independence_msg: '¡Enhorabuena! Te has independizado (aunque sea a un sofá).<br>Ahora eres responsable de tus propias finanzas. Vamos a ver cómo van.',
            view_finances: 'Ver mis Finanzas',

            // Tutorial - Gig Acceptance & Free Mode
            tutorial_earning_while_studying: 'Generarás ingresos mientras estudias.',
            tutorial_free_mode_msg: 'El tutorial continúa en <strong>Modo Libre</strong>. Avanza el tiempo con "Siguiente Mes" hasta terminar tu formación.',
            tutorial_turns_mechanic: 'Mecánica de Turnos',
            tutorial_turns_msg: 'El tiempo no avanza solo.<br><br>Pulsa <strong>Siguiente Mes</strong> para cobrar, pagar gastos y avanzar en tus estudios.',
            understood: 'Entendido',
            next: 'Siguiente',

            // Tutorial - Degree Completion
            tutorial_well_done: '¡ENHORABUENA!',
            tutorial_education_complete: 'Formación Finalizada',
            tutorial_perm_jobs_access: 'Acceso a empleos fijos',
            tutorial_better_salaries: 'Mejores salarios disponibles',
            tutorial_promotions_available: 'Posibilidad de ascender',
            find_job: 'Buscar Empleo',

            // Tutorial - Dashboard Tooltips
            tutorial_net_worth_msg: 'Esto es lo que realmente vales.<br><br>Es la suma de todo tu dinero y propiedades, menos tus deudas. ¡Haz que crezca!',
            tutorial_cash_msg: 'El dinero líquido que tienes para gastar o invertir. ¡Si llega a cero, game over!',
            tutorial_flow_msg: 'Es la diferencia entre tus ingresos y gastos. Mantenlo positivo para acumular riqueza cada mes.',

            // Tutorial - Stock Market Unlock
            tutorial_stock_unlocked: '¡BOLSA DESBLOQUEADA!',
            tutorial_net_worth_30k: 'Patrimonio de 30.000€',
            tutorial_stock_access: 'Acceso a Mercado de Valores',
            tutorial_stock_congrats: '¡Enhorabuena! Has acumulado suficiente capital para invertir en bolsa.<br>Vamos a ver cómo funciona.',
            go_to_stock: 'Ir a Bolsa',

            // Tutorial - Stock Market Steps
            tutorial_stock: 'Tutorial Bolsa',
            tutorial_stock_step1: '📈 <strong>Mercado de Valores</strong><br><br>Aquí puedes invertir en acciones de empresas reales y ficticias.<br><br>El precio de cada acción fluctúa con el tiempo. ¡Elige bien!',
            tutorial_stock_step2: '📋 <strong>Lista de Acciones</strong><br><br>En el apartado Cotizaciones tienes todas las acciones disponibles.<br><br>Selecciona una para ver su gráfico y poder comprarla.',
            tutorial_stock_step3: '📊 <strong>Mis Posiciones</strong><br><br>Abajo en el apartado Mis Posiciones verás las acciones que tienes compradas, el precio medio de compra y la ganancia/pérdida actual.<br><br>💡 <em>Consejo: Mantén un ojo en tus posiciones para decidir cuándo vender.</em>',
            tutorial_stock_complete: '¡Ya sabes lo básico! Buena suerte invirtiendo.',

            // Tutorial - Bank Unlock & Steps
            tutorial_bank_unlocked: '¡BANCO DESBLOQUEADO!',
            new_feature: 'Nueva Funcionalidad',
            tutorial_bank_access: 'Acceso a Servicios Bancarios',
            tutorial_loans_financing: 'Préstamos y Financiación',
            tutorial_bank_congrats: '¡Ya puedes solicitar préstamos!<br>Vamos a ver cómo funciona.',
            go_to_bank: 'Ir al Banco',
            tutorial_bank: 'Tutorial Banco',
            tutorial_bank_step1: '🏦 <strong>Servicios Bancarios</strong><br><br>Aquí puedes solicitar préstamos personales para financiar tus inversiones.<br><br>El banco evaluará tu perfil antes de concederte un crédito.',
            tutorial_bank_step2: '💳 <strong>Límite de Crédito</strong><br><br>Tu límite de crédito depende de tu salario mensual.<br><br>Cuanto mayor sea tu sueldo, más dinero podrás pedir prestado.',
            tutorial_bank_step3: '🏠 <strong>¡Invierte en Inmuebles!</strong><br><br>Los préstamos son perfectos para comprar propiedades inmobiliarias que generen rentas mensuales.<br><br>💡 <em>Consejo: Un buen inmueble puede pagarse solo con los alquileres.</em>',
            tutorial_bank_complete: '¡Ya conoces el banco! Considera pedir un préstamo.',

            // Tax Declaration
            tax_authority: 'HACIENDA SOMOS TODOS',
            tax_intro: 'A partir de ahora, cada <strong>Mes 5</strong> deberás presentar la Declaración de la Renta.',
            income_bracket: 'Tramo de Ingresos',
            tax_rate: 'Tipo',
            tax_reminder: 'No olvides reservar liquidez...',

            // Job Acceptance
            gig_accepted_msg: 'Has aceptado un trabajo temporal. Ganarás dinero mientras dure el contrato.',
            career_accepted_msg: '¡Bienvenido al equipo! Has dado un gran paso en tu carrera profesional. Tu primer sueldo llegará a final de mes.',
            lets_start: '¡Empezar!',

            // Common messages
            msg_invalid_amount: 'Cantidad inválida',
            msg_not_enough_shares: 'No tienes suficientes acciones',
            msg_expenses_locked: '🔒 Gastos bloqueados: Aún vives con tus padres.',
            msg_company_name_required: 'Por favor, indica un nombre para tu empresa.',
            msg_business_type_required: 'Debes seleccionar un modelo de negocio.',
            msg_location_required: 'Selecciona una ubicación para tu sede.',
            msg_net_worth_required: 'Necesitas un patrimonio neto de al menos 100.000€ para asumir el riesgo de fundar una empresa.',
            msg_requirement_not_met: 'Requisito no cumplido',

            // Welcome Screen
            welcome_study: 'Estudia',
            welcome_study_desc: 'para mejorar tus habilidades',
            welcome_work: 'Trabaja',
            welcome_work_desc: 'y asciende en tu carrera',
            welcome_invest: 'Invierte',
            welcome_invest_desc: 'en bolsa e inmuebles',
            welcome_business: 'Crea tu negocio',
            welcome_business_desc: 'y llega a la cima',
            your_name: 'Tu Nombre',
            name_placeholder: '¿Cómo te llamas?',
            start_adventure: 'Empezar Aventura',
            tagline: 'Compra, vende, alquila... ¡Construye tu futuro!',
            create_profile: 'Crear Perfil',

            // Milestones
            milestone_reached: '¡Hito Desbloqueado!',
            milestone_message: 'Has alcanzado tus primeros {amount} de Patrimonio.',

            // Save/Load
            save_slot: 'Ranura',
            save_empty: 'Vacío',
            save_overwrite: '¿Sobrescribir partida guardada?',
            load_confirm: '¿Cargar esta partida?',
            autosave: 'Autoguardado'
        },

        // ============================================
        // ENGLISH
        // ============================================
        en: {
            // General UI
            game_title: "Sergio's Game",
            next_month: 'Next Month',
            save_game: 'Save',
            load_game: 'Load',
            reset_game: 'Reset',
            settings: 'Settings',
            close: 'Close',
            cancel: 'Cancel',
            confirm: 'Confirm',
            accept: 'Accept',
            understood: 'Understood',
            yes: 'Yes',
            no: 'No',
            buy: 'Buy',
            sell: 'Sell',

            // Navigation
            nav_dashboard: 'Dashboard',
            nav_market: 'Market',
            nav_bank: 'Bank',
            nav_real_estate: 'Real Estate',
            nav_job: 'Job',
            nav_education: 'Education',
            nav_lifestyle: 'Lifestyle',

            // Header
            cash: 'Cash',
            net_worth: 'Net Worth',
            monthly_income: 'Monthly Income',
            monthly_expenses: 'Monthly Expenses',
            age: 'Age',
            years: 'years',
            year: 'Year',
            month: 'Month',

            // Dashboard
            dashboard_title: 'Executive Summary',
            cash_box: 'Cash Box',
            total_debt: 'Total Debt',
            total_assets: 'Total Assets',
            financial_history: 'Financial History',
            monthly_flow: 'Monthly Flow',
            asset_breakdown: 'Asset Breakdown',
            stocks_value: 'Stocks Value',
            real_estate_value: 'Real Estate Value',
            company_value: 'Company Value',
            income_sources: 'Income Sources',
            expense_sources: 'Expense Sources',
            from_salary: 'From Salary',
            from_rental: 'From Rentals',
            from_company: 'From Company',
            from_gigs: 'From Gigs',
            living_expenses: 'Living Expenses',
            loan_payments: 'Loan Payments',
            no_income: 'No income yet',
            no_expenses: 'No expenses',
            chart_legend_networth: 'Net Worth',
            chart_legend_cash: 'Cash',
            chart_legend_debt: 'Debt',
            chart_timeframe_6m: '6M',
            chart_timeframe_2y: '2Y',
            chart_timeframe_max: 'MAX',

            // Stock Market
            stock_market: 'Stock Market',
            stocks: 'Stocks',
            portfolio: 'My Portfolio',
            portfolio_value: 'Portfolio Value',
            portfolio_limit: 'Portfolio Limit (By Housing)',
            stock_price: 'Price',
            stock_change: 'Change',
            stock_shares: 'Shares',
            stock_value: 'Value',
            stock_buy: 'Buy',
            stock_sell: 'Sell',
            stock_quantity: 'Quantity',
            stock_total: 'Total',
            no_stocks: 'You have no stocks',
            no_positions: 'No open positions.',
            stock_limit_reached: 'You have reached your investment limit. Upgrade your housing to invest more.',
            total_return: 'Total Return',
            profitability: 'Profitability',
            quotes: 'Quotes',
            tap_to_trade: 'Tap to trade',
            my_positions: 'My Positions',
            avg_price: 'Avg Price',
            invested: 'Invested',
            gain_loss: 'Gain/Loss',

            // Bank
            bank_title: 'Central Bank',
            financial_services: 'Financial Services',
            loans: 'Loans',
            take_loan: 'Take Loan',
            pay_loan: 'Pay Loan',
            loan_amount: 'Amount',
            loan_interest: 'Interest',
            loan_monthly: 'Monthly Payment',
            loan_remaining: 'Remaining',
            max_loan: 'Maximum Loan',
            no_loans: 'You have no active loans',
            personal_loan: 'Personal Loan',
            business_loan: 'Business Loan',
            mortgage: 'Mortgage',
            monthly_payment: 'Monthly Payment',
            available_credit: 'Available Credit',
            request_loan: 'Request Financing',
            amount_to_request: 'Amount to request',
            loan_term: 'Term',
            years: 'years',
            interest_rate: 'Interest Rate',
            my_loans: 'My Loans',

            // Real Estate
            real_estate_title: 'Real Estate',
            properties: 'Properties',
            available_properties: 'Available Properties',
            my_properties: 'My Properties',
            property_price: 'Price',
            property_rent: 'Monthly Rent',
            property_type: 'Type',
            buy_property: 'Buy',
            sell_property: 'Sell',
            buy_with_mortgage: 'Buy with Mortgage',
            no_properties: 'You have no properties',
            property_limit_reached: 'You have reached the property limit for your housing level.',

            // Property Types
            property_residential: 'Residential',
            property_commercial: 'Commercial',
            property_garage: 'Garage',
            property_land: 'Land',
            property_luxury: 'Luxury',

            // Jobs
            job_title: 'Job',
            current_job: 'Current Job',
            current_position: 'Current Position',
            salary: 'Salary',
            unemployed: 'Unemployed',
            look_for_work: 'FIND A JOB',
            you_are_unemployed: 'You Are Unemployed',
            unemployed_message: 'Check the job offers below and apply for a position to start earning money.',
            available_jobs: 'Available Jobs',
            gig_jobs: 'Gig Jobs',
            career_jobs: 'Career Paths',
            apply: 'Apply',
            quit_job: 'Quit Job',
            promotion: 'Promotion',
            promotion_ready: 'You have met all requirements to get promoted.',
            promotion_go_to_work: 'Go to the <strong>Work</strong> section to request your promotion and increase your salary.',
            next_objective: 'Next Objective',
            ready: 'READY',
            salary_increase: 'Salary Increase',
            entry_level: 'Entry Level',
            requirements: 'Requirements',
            experience: 'Experience',
            max_level: 'Max Level',
            holding_companies: 'Company Holdings',
            current_profit: 'Current Profit',
            sell: 'Sell',
            sell_now: 'Sell Now',
            valuation: 'Valuation',
            search_job: 'Search Job',
            looking_for_work: 'Looking for work...',
            cancel: 'Cancel',
            assets: 'Assets',

            // Job Titles - Unskilled
            job_reponedor: 'Shop Assistant',
            job_cajero: 'Cashier / Customer Service',
            job_supervisor_planta: 'Floor Supervisor',
            job_tres_deporte: 'SPORTS DIRECT',

            // Job Titles - DJ Career (literal translations)
            job_dj_casa: 'Bedroom DJ',
            job_dj_reggeton: 'Reggaeton DJ',
            job_dj_res_reggeton: 'Resident DJ Reggaeton',
            job_dj_electronica: 'Electronic DJ',
            job_dj_res_electronica: 'Resident DJ Electronic',
            job_dj_octogono: 'Resident DJ Octogon',
            job_dj_productor: 'DJ & Producer',
            job_dj_prod_sello: 'DJ Label Producer',
            job_dj_studio77: 'Resident DJ Studio 77',
            job_dj_kapitol: 'Resident DJ Kapitol',
            job_dj_ibiza: 'Resident DJ Ibiza',
            job_dj_berghain: 'Resident DJ Berghain',
            job_dj_favrik: 'Resident DJ FAVRIK',
            job_dj_whiteworks: 'DJ Whiteworks',

            // Job Titles - Admin
            job_admin_contable: 'Accounts Clerk',
            job_admin_senior: 'Senior Administrator',
            job_tecnico_gestion: 'Finance Technician',
            job_resp_admin: 'Administration Manager',
            job_gestor_cobros: 'Credit Controller',
            job_resp_facturacion: 'Billing Manager',
            job_credit_controller: 'Senior Credit Controller',
            job_jefe_admin_clientes: 'Customer Admin Manager',
            job_admin_inmo: 'Estate Agent Admin',
            job_gestor_ops_inmo: 'Property Operations Manager',
            job_resp_oficina_inmo: 'Branch Manager',
            job_director_zona: 'Area Director',

            // Job Titles - IT/Development
            job_prog_junior: 'Junior Developer',
            job_prog_semi: 'Mid-Level Developer',
            job_dev_senior: 'Senior Developer',
            job_tech_lead: 'Tech Lead',
            job_soporte: 'IT Support Technician',
            job_sys_admin: 'Systems Administrator',
            job_sys_engineer: 'Systems Engineer',
            job_resp_it: 'IT Infrastructure Manager',
            job_mobile_dev: 'Mobile App Developer',
            job_mobile_mid: 'Mid-Level Mobile Developer',
            job_mobile_senior: 'Senior Mobile Developer',
            job_mobile_lead: 'Mobile Lead / Architect',

            // Job Titles - Maintenance
            job_tecnico_maint: 'Industrial Maintenance Technician',
            job_tecnico_senior: 'Senior Technician',
            job_jefe_equipo: 'Team Leader',
            job_resp_planta: 'Plant Manager',
            job_tecnico_clima: 'HVAC Technician',
            job_oficial_1: 'Senior HVAC Engineer',
            job_resp_servicio: 'Service Manager',
            job_jefe_ops_maint: 'Maintenance Operations Manager',
            job_tecnico_edificios: 'Building Maintenance Technician',
            job_encargado_edificio: 'Building Supervisor',
            job_supervisor_multi: 'Multi-Site Supervisor',
            job_facility_manager: 'Facility Manager',

            // Job Titles - Business/Finance
            job_analista_fin: 'Financial Analyst',
            job_analista_senior: 'Senior Analyst',
            job_controller: 'Financial Controller',
            job_cfo: 'Chief Financial Officer (CFO)',
            job_consultor: 'Business Consultant',
            job_consultor_senior: 'Senior Consultant',
            job_manager_proyecto: 'Project Manager',
            job_socio_director: 'Partner / Director',
            job_gestor_cuentas: 'Corporate Account Manager',
            job_key_account: 'Key Account Manager',
            job_sales_manager: 'Sales Manager',
            job_director_comercial: 'Commercial Director',

            // Job Titles - Engineering/CS
            job_swe: 'Software Engineer',
            job_swe_mid: 'Mid-Level Software Engineer',
            job_swe_senior: 'Senior Software Engineer',
            job_eng_manager: 'Engineering Manager',
            job_data_analyst: 'Data Analyst / BI',
            job_data_senior: 'Senior Data Analyst',
            job_data_scientist: 'Data Scientist',
            job_head_data: 'Head of Data',
            job_devops: 'DevOps / Cloud Engineer',
            job_devops_mid: 'Mid-Level DevOps Engineer',
            job_cloud_architect: 'Cloud Architect',
            job_dir_cloud: 'Cloud Infrastructure Director',

            // Job Titles - Civil Engineering
            job_ing_obra: 'Site Engineer',
            job_jefe_obra: 'Site Manager',
            job_jefe_proyecto: 'Project Manager',
            job_dir_construccion: 'Construction Director',
            job_tecnico_oficina: 'Technical Office Technician',
            job_ing_proyectos: 'Project Engineer',
            job_resp_oficina_tec: 'Technical Office Manager',
            job_dir_tecnico: 'Technical Director',
            job_consultor_urb: 'Engineering Consultant',
            job_consultor_urb_senior: 'Senior Consultant',
            job_manager_consultoria: 'Consulting Manager',
            job_socio_cons: 'Partner / Director',

            // Gig Jobs (Temporary)
            job_gig_cromos: 'Trading Cards',
            job_gig_wallapop: 'eBay Selling',
            job_gig_limpiar: 'House Cleaning',
            job_gig_perros: 'Dog Walking',
            job_gig_publicidad: 'Flyer Distribution',
            job_gig_ninos: 'Babysitting',
            job_gig_mudanzas: 'Moving Helper',
            job_gig_cliente: 'Mystery Shopper',
            job_gig_transcribir: 'Audio Transcription',
            job_gig_encuestador: 'Survey Taker',
            job_gig_dj: 'Kids Party DJ',
            job_gig_monitor: 'Lunch Monitor',
            job_gig_cesped: 'Lawn Mowing',

            // Education
            education_title: 'Education',
            current_studies: 'Current Studies',
            available_courses: 'Available Courses',
            enroll: 'Enroll',
            studying: 'Studying',
            completed: 'Completed',
            duration: 'Duration',
            months: 'months',
            cost: 'Cost',
            free: 'Free',
            in_progress: 'In Progress',
            time_remaining: 'Time remaining',
            progress: 'Progress',
            current_education: 'Current Education',
            highest_degree: 'Highest Degree',
            no_studies: 'No Studies',
            enroll_tip: 'Enroll in a course to improve your job prospects.',
            required_prereq: 'Requires',
            available_section: 'Available Courses',
            locked_section: 'Locked',
            enrolled_msg: 'Enrolled!',
            start_studying: 'Start studying',
            course_fee: 'Tuition Fee',

            // Education Courses (UK equivalents)
            course_bachillerato: 'A-Levels',
            course_bachillerato_desc: 'Pre-university qualification. Required for University entry.',
            course_fp_medio: 'BTEC Level 3',
            course_fp_medio_desc: 'Vocational training. Pathway to higher qualifications.',
            course_fp_admin: 'BTEC HND Business Admin',
            course_fp_admin_desc: 'Business and Finance.',
            course_fp_dam: 'BTEC HND Software Development',
            course_fp_dam_desc: 'Programming and Software.',
            course_fp_maint: 'BTEC HND Engineering',
            course_fp_maint_desc: 'Industrial Maintenance.',
            course_grado_ade: 'BSc Business Administration',
            course_grado_ade_desc: 'Business Management.',
            course_grado_cs: 'BSc Computer Science',
            course_grado_cs_desc: 'Computing and Technology.',
            course_grado_civil: 'BEng Civil Engineering',
            course_grado_civil_desc: 'Construction & Infrastructure.',
            course_master_fin: 'MSc Finance',
            course_master_fin_desc: 'Financial Management.',
            course_master_ai: 'MSc Artificial Intelligence',
            course_master_ai_desc: 'AI & Machine Learning.',
            course_master_ing: 'MEng Civil Engineering',
            course_master_ing_desc: 'Chartered Engineer qualification.',
            course_bootcamp: 'Coding Bootcamp',
            course_bootcamp_desc: 'Intensive tech training. High demand.',
            course_dj_basic: 'Basic DJ Course SYNC',
            course_dj_basic_desc: 'Learn to mix with the SYNC button. The basics.',
            course_dj_pioneer: 'Pioneer DJ Course',
            course_dj_pioneer_desc: 'Master CDJs and Rekordbox. Club standard.',
            course_dj_vinyl: 'Advanced Vinyl DJ Course',
            course_dj_vinyl_desc: 'The art of manual beatmatching. Pure respect.',
            course_dj_pro: 'Master DJ Professional',
            course_dj_pro_desc: 'Music production, marketing & personal branding.',

            // Lifestyle
            lifestyle_title: 'Lifestyle',
            housing: 'Housing',
            food: 'Food',
            transport: 'Transport',
            leisure: 'Leisure',
            clothes: 'Clothes',
            current: 'Current',
            upgrade: 'Upgrade',
            monthly_cost: 'Monthly Cost',

            // Company
            company_title: 'Company',
            found_company: 'Found Company',
            my_company: 'My Company',
            company_name: 'Company Name',
            company_type: 'Business Type',
            company_location: 'Location',
            company_cash: 'Company Cash',
            company_revenue: 'Revenue',
            company_expenses: 'Expenses',
            company_profit: 'Profit',
            employees: 'Employees',
            hire: 'Hire',
            fire: 'Fire',
            marketing: 'Marketing',
            product: 'Product',
            upgrade_office: 'Expand Office',

            // Company Types
            company_cafe: 'Coffee Shop',
            company_retail: 'Clothing Store',
            company_marketing: 'Marketing Agency',
            company_tech: 'SaaS Startup',

            // Locations
            location_suburbs: 'Suburbs',
            location_downtown: 'Downtown',
            location_business: 'Business District',

            // Alerts & Messages
            not_enough_money: 'You don\'t have enough money.',
            requirement_not_met: 'Requirements not met.',
            purchase_successful: 'Purchase successful.',
            sale_successful: 'Sale successful.',
            action_completed: 'Action completed.',

            // Taxes
            tax_declaration: 'Tax Declaration',
            tax_warning: 'Tax Season',
            tax_income: 'Income',
            tax_expenses: 'Deductible Expenses',
            tax_base: 'Taxable Base',
            tax_rate: 'Rate',
            tax_amount: 'To Pay',
            pay_taxes: 'Pay Taxes',

            // Expropriation (Easter Egg)
            expropriation_title: 'State Expropriation',
            expropriation_message: 'The State has decided you had too much money.',

            // Endgame
            game_over: 'Game Over',
            bankruptcy: 'Bankruptcy',
            final_stats: 'Final Statistics',
            total_income: 'Total Income',
            total_expenses: 'Total Expenses',
            taxes_paid: 'Taxes Paid',
            restart_game: 'Restart Game',

            // Tutorial
            tutorial_welcome: "Welcome to your new life!",
            tutorial_welcome_title: 'Welcome!',
            tutorial_age_16: 'You are 16 years old and have just finished secondary school.',
            tutorial_decide_future: 'It\'s time to decide your future.',
            tutorial_choose_education: 'Choose your education:',
            tutorial_bachillerato: 'A-Levels',
            tutorial_fp_medio: 'BTEC Level 3',
            tutorial_free: 'Free',
            tutorial_access_university: '→ University access',
            tutorial_quick_job: '→ Quick employment',
            tutorial_education: 'First, choose your education.',
            tutorial_job: 'Now find your first job.',
            tutorial_next: 'Next',
            tutorial_skip: 'Skip Tutorial',
            tutorial_understood: 'Understood!',
            tutorial_continue: 'Continue',
            tutorial_lets_go: 'Let\'s go!',
            tutorial_great: 'Great!',
            tutorial_perfect: 'Perfect!',
            tutorial_stock_1: 'Welcome to the Stock Market',
            tutorial_stock_2: 'Here you can buy and sell stocks',
            tutorial_stock_3: 'Prices fluctuate over time',
            tutorial_bank_1: 'Welcome to the Bank',
            tutorial_bank_2: 'Here you can take out loans',
            tutorial_bank_3: 'Remember to pay your debts',
            tutorial_finished: 'Tutorial Finished!',
            tutorial_basic_complete: 'You now know the basics. Work, invest and become a millionaire.',
            tutorial_good_luck: 'Good luck in real life...',
            graduated: 'Graduate',

            // Tutorial Step 2 (Go to Work)
            tutorial_enrolled: "You're Enrolled!",
            tutorial_earn_money_studying: 'While you study, you can earn money with <strong style="color: #4ade80;">temporary jobs</strong>.',
            tutorial_find_first_job: 'Find your first job to start saving!',
            go_to_work: 'Go to Work',

            // Tutorial Step 6 (Jobs Unlocked)
            tutorial_jobs_unlocked: 'Jobs Unlocked!',
            tutorial_jobs_unlocked_msg: 'Now that you have your qualification, you can access <strong>permanent jobs</strong>.<br><br>💼 Permanent jobs pay better and allow you to <strong>get promoted</strong>.<br><br>👆 Choose a job from the "Job Market" section to continue.',

            // Tutorial Step 7 (First Real Job)
            tutorial_first_real_job: 'Your First Permanent Job',
            tutorial_promotions: 'Promotions',
            tutorial_promotions_msg: 'Ask for raises after working for a while. Higher education unlocks better careers.',
            tutorial_salary_msg: 'You get paid automatically each month. It shows in your Dashboard.',
            tutorial_change_job: 'Change',
            tutorial_change_job_msg: 'You can apply for other jobs anytime. Some require qualifications.',
            congratulations: 'Congratulations!',
            tutorial_lets_work: "Let's get to work!",

            // Tutorial Step 8 (Housing Kickout)
            tutorial_kicked_out: 'Kicked Out!',
            tutorial_mom_quote: "You're getting older now, love. Here's £300 to get yourself something nice, but hurry up because we're turning your room into a gym tomorrow.",
            emergency: 'Emergency!',
            tutorial_need_housing: 'You need somewhere to sleep tonight.',
            find_housing: 'Find Housing',

            // Tutorial Step 9 (Independence)
            tutorial_independence: 'INDEPENDENCE!',
            tutorial_new_stage: 'New Stage Unlocked',
            tutorial_financial_control: 'Full Financial Control',
            tutorial_emancipated: 'Status: Independent',
            tutorial_independence_msg: "Congratulations! You've moved out (even if it's just a sofa).<br>You're now responsible for your own finances. Let's see how they're doing.",
            view_finances: 'View My Finances',

            // Tutorial - Gig Acceptance & Free Mode
            tutorial_earning_while_studying: "You'll earn money while you study.",
            tutorial_free_mode_msg: 'The tutorial continues in <strong>Free Mode</strong>. Advance time with "Next Month" until you finish your education.',
            tutorial_turns_mechanic: 'Turn Mechanics',
            tutorial_turns_msg: "Time doesn't pass on its own.<br><br>Press <strong>Next Month</strong> to collect pay, pay expenses and advance your studies.",
            understood: 'Understood',
            next: 'Next',

            // Tutorial - Degree Completion
            tutorial_well_done: 'WELL DONE!',
            tutorial_education_complete: 'Education Complete',
            tutorial_perm_jobs_access: 'Access to permanent jobs',
            tutorial_better_salaries: 'Better salaries available',
            tutorial_promotions_available: 'Promotion opportunities',
            find_job: 'Find a Job',

            // Tutorial - Dashboard Tooltips
            tutorial_net_worth_msg: "This is what you're really worth.<br><br>It's the sum of all your money and assets, minus your debts. Make it grow!",
            tutorial_cash_msg: "The liquid money you have to spend or invest. If it hits zero, it's game over!",
            tutorial_flow_msg: "It's the difference between your income and expenses. Keep it positive to accumulate wealth each month.",

            // Tutorial - Stock Market Unlock
            tutorial_stock_unlocked: 'STOCK MARKET UNLOCKED!',
            tutorial_net_worth_30k: '£30,000 Net Worth',
            tutorial_stock_access: 'Stock Market Access',
            tutorial_stock_congrats: "Congratulations! You've accumulated enough capital to invest in stocks.<br>Let's see how it works.",
            go_to_stock: 'Go to Stocks',

            // Tutorial - Stock Market Steps
            tutorial_stock: 'Stock Tutorial',
            tutorial_stock_step1: '📈 <strong>Stock Market</strong><br><br>Here you can invest in shares of real and fictional companies.<br><br>The price of each share fluctuates over time. Choose wisely!',
            tutorial_stock_step2: "📋 <strong>Stock List</strong><br><br>In the Prices section you'll find all available stocks.<br><br>Select one to see its chart and buy it.",
            tutorial_stock_step3: "📊 <strong>My Positions</strong><br><br>Below in My Positions you'll see the shares you own, average purchase price and current profit/loss.<br><br>💡 <em>Tip: Keep an eye on your positions to decide when to sell.</em>",
            tutorial_stock_complete: "You know the basics now! Good luck investing.",

            // Tutorial - Bank Unlock & Steps
            tutorial_bank_unlocked: 'BANK UNLOCKED!',
            new_feature: 'New Feature',
            tutorial_bank_access: 'Access to Banking Services',
            tutorial_loans_financing: 'Loans and Financing',
            tutorial_bank_congrats: "You can now apply for loans!<br>Let's see how it works.",
            go_to_bank: 'Go to Bank',
            tutorial_bank: 'Bank Tutorial',
            tutorial_bank_step1: '🏦 <strong>Banking Services</strong><br><br>Here you can apply for personal loans to finance your investments.<br><br>The bank will assess your profile before granting credit.',
            tutorial_bank_step2: '💳 <strong>Credit Limit</strong><br><br>Your credit limit depends on your monthly salary.<br><br>The higher your income, the more you can borrow.',
            tutorial_bank_step3: '🏠 <strong>Invest in Property!</strong><br><br>Loans are perfect for buying real estate that generates monthly rent.<br><br>💡 <em>Tip: A good property can pay for itself with rental income.</em>',
            tutorial_bank_complete: 'You now know the bank! Consider taking out a loan.',

            // Tax Declaration
            tax_authority: 'TAX TIME',
            tax_intro: 'From now on, every <strong>Month 5</strong> you must file your Tax Return.',
            income_bracket: 'Income Bracket',
            tax_rate: 'Rate',
            tax_reminder: "Don't forget to keep some cash aside...",

            // Job Acceptance
            gig_accepted_msg: "You've accepted a temporary job. You'll earn money for the duration of the contract.",
            career_accepted_msg: "Welcome to the team! You've taken a big step in your career. Your first pay cheque will arrive at the end of the month.",
            lets_start: "Let's go!",

            // Welcome Screen
            welcome_study: 'Study',
            welcome_study_desc: 'to improve your skills',
            welcome_work: 'Work',
            welcome_work_desc: 'and advance your career',
            welcome_invest: 'Invest',
            welcome_invest_desc: 'in stocks and real estate',
            welcome_business: 'Start your business',
            welcome_business_desc: 'and reach the top',
            your_name: 'Your Name',
            name_placeholder: 'What is your name?',
            start_adventure: 'Start Adventure',
            tagline: 'Buy, sell, rent... Build your future!',
            create_profile: 'Create Profile',

            // Milestones
            milestone_reached: 'Milestone Unlocked!',
            milestone_message: 'You have reached your first {amount} in Net Worth.',

            // Save/Load
            save_slot: 'Slot',
            save_empty: 'Empty',
            save_overwrite: 'Overwrite saved game?',
            load_confirm: 'Load this game?',
            autosave: 'Autosave'
        },

        // ============================================
        // GERMAN
        // ============================================
        de: {
            // General UI
            game_title: 'Sergios Spiel',
            next_month: 'Nächster Monat',
            save_game: 'Speichern',
            load_game: 'Laden',
            reset_game: 'Zurücksetzen',
            settings: 'Einstellungen',
            close: 'Schließen',
            cancel: 'Abbrechen',
            confirm: 'Bestätigen',
            accept: 'Akzeptieren',
            understood: 'Verstanden',
            yes: 'Ja',
            no: 'Nein',
            buy: 'Kaufen',
            sell: 'Verkaufen',

            // Navigation
            nav_dashboard: 'Übersicht',
            nav_market: 'Börse',
            nav_bank: 'Bank',
            nav_real_estate: 'Immobilien',
            nav_job: 'Arbeit',
            nav_education: 'Bildung',
            nav_lifestyle: 'Lebensstil',

            // Header
            cash: 'Bargeld',
            net_worth: 'Vermögen',
            monthly_income: 'Monatliches Einkommen',
            monthly_expenses: 'Monatliche Ausgaben',
            age: 'Alter',
            years: 'Jahre',
            year: 'Jahr',
            month: 'Monat',

            // Dashboard
            dashboard_title: 'Zusammenfassung',
            cash_box: 'Kasse (Bargeld)',
            total_debt: 'Gesamtschulden',
            total_assets: 'Gesamtvermögen',
            financial_history: 'Finanzhistorie',
            monthly_flow: 'Monatlicher Cashflow',
            asset_breakdown: 'Vermögensaufteilung',
            stocks_value: 'Aktienwert',
            real_estate_value: 'Immobilienwert',
            company_value: 'Unternehmenswert',
            income_sources: 'Einnahmequellen',
            expense_sources: 'Ausgabequellen',
            from_salary: 'Von Gehalt',
            from_rental: 'Von Mieten',
            from_company: 'Von Unternehmen',
            from_gigs: 'Von Gigs',
            living_expenses: 'Lebenshaltungskosten',
            loan_payments: 'Kreditzahlungen',
            no_income: 'Noch kein Einkommen',
            no_expenses: 'Keine Ausgaben',
            chart_legend_networth: 'Vermögen',
            chart_legend_cash: 'Bargeld',
            chart_legend_debt: 'Schulden',
            chart_timeframe_6m: '6M',
            chart_timeframe_2y: '2J',
            chart_timeframe_max: 'MAX',

            // Stock Market
            stock_market: 'Aktienmarkt',
            stocks: 'Aktien',
            portfolio: 'Mein Portfolio',
            portfolio_value: 'Portfoliowert',
            portfolio_limit: 'Portfoliolimit (Nach Wohnung)',
            stock_price: 'Preis',
            stock_change: 'Änderung',
            stock_shares: 'Anteile',
            stock_value: 'Wert',
            stock_buy: 'Kaufen',
            stock_sell: 'Verkaufen',
            stock_quantity: 'Menge',
            stock_total: 'Gesamt',
            no_stocks: 'Sie haben keine Aktien',
            no_positions: 'Keine offenen Positionen.',
            stock_limit_reached: 'Sie haben Ihr Investitionslimit erreicht. Verbessern Sie Ihre Wohnung, um mehr zu investieren.',
            total_return: 'Gesamtrendite',
            profitability: 'Rentabilität',
            quotes: 'Kurse',
            tap_to_trade: 'Tippen zum Handeln',
            my_positions: 'Meine Positionen',
            avg_price: 'Durchschnittspreis',
            invested: 'Investiert',
            gain_loss: 'Gewinn/Verlust',

            // Bank
            bank_title: 'Zentralbank',
            financial_services: 'Finanzdienstleistungen',
            loans: 'Kredite',
            take_loan: 'Kredit aufnehmen',
            pay_loan: 'Kredit bezahlen',
            loan_amount: 'Betrag',
            loan_interest: 'Zinsen',
            loan_monthly: 'Monatliche Rate',
            loan_remaining: 'Restbetrag',
            max_loan: 'Maximaler Kredit',
            no_loans: 'Sie haben keine aktiven Kredite',
            personal_loan: 'Privatkredit',
            business_loan: 'Geschäftskredit',
            mortgage: 'Hypothek',
            monthly_payment: 'Monatliche Zahlung',
            available_credit: 'Verfügbarer Kredit',
            request_loan: 'Finanzierung beantragen',
            amount_to_request: 'Gewünschter Betrag',
            loan_term: 'Laufzeit',
            years: 'Jahre',
            interest_rate: 'Zinssatz',
            my_loans: 'Meine Kredite',

            // Real Estate
            real_estate_title: 'Immobilien',
            properties: 'Immobilien',
            available_properties: 'Verfügbare Immobilien',
            my_properties: 'Meine Immobilien',
            property_price: 'Preis',
            property_rent: 'Monatliche Miete',
            property_type: 'Typ',
            buy_property: 'Kaufen',
            sell_property: 'Verkaufen',
            buy_with_mortgage: 'Mit Hypothek kaufen',
            no_properties: 'Sie haben keine Immobilien',
            property_limit_reached: 'Sie haben das Immobilienlimit für Ihr Wohnungsniveau erreicht.',

            // Property Types
            property_residential: 'Wohnimmobilie',
            property_commercial: 'Gewerbeimmobilie',
            property_garage: 'Garage',
            property_land: 'Grundstück',
            property_luxury: 'Luxus',

            // Jobs
            job_title: 'Arbeit',
            current_job: 'Aktuelle Arbeit',
            current_position: 'Aktuelle Position',
            salary: 'Gehalt',
            unemployed: 'Arbeitslos',
            look_for_work: 'JOB SUCHEN',
            you_are_unemployed: 'Sie sind arbeitslos',
            unemployed_message: 'Schauen Sie sich die Stellenangebote unten an und bewerben Sie sich, um Geld zu verdienen.',
            available_jobs: 'Verfügbare Jobs',
            gig_jobs: 'Gelegenheitsjobs',
            career_jobs: 'Karrierewege',
            apply: 'Bewerben',
            quit_job: 'Kündigen',
            promotion: 'Beförderung',
            promotion_ready: 'Sie haben alle Anforderungen für eine Beförderung erfüllt.',
            promotion_go_to_work: 'Gehen Sie zum Bereich <strong>Arbeit</strong>, um Ihre Beförderung zu beantragen und Ihr Gehalt zu erhöhen.',
            next_objective: 'Nächstes Ziel',
            ready: 'BEREIT',
            salary_increase: 'Gehaltserhöhung',
            entry_level: 'Einstiegsstufe',
            requirements: 'Anforderungen',
            experience: 'Erfahrung',
            max_level: 'Maximale Stufe',
            holding_companies: 'Unternehmensholding',
            current_profit: 'Aktueller Gewinn',
            sell: 'Verkaufen',
            sell_now: 'Jetzt verkaufen',
            valuation: 'Bewertung',
            search_job: 'Job suchen',
            looking_for_work: 'Suche Arbeit...',
            cancel: 'Abbrechen',
            assets: 'Vermögenswerte',

            // Job Titles - Unskilled
            job_reponedor: 'Verkäufer / Aushilfe',
            job_cajero: 'Kassierer / Kundenservice',
            job_supervisor_planta: 'Filialleiter',
            job_tres_deporte: 'DECATHLON',

            // Job Titles - DJ Career (literal translations)
            job_dj_casa: 'Hobby-DJ zu Hause',
            job_dj_reggeton: 'Reggaeton DJ',
            job_dj_res_reggeton: 'Resident DJ Reggaeton',
            job_dj_electronica: 'Techno DJ',
            job_dj_res_electronica: 'Resident DJ Techno',
            job_dj_octogono: 'Resident DJ Octogon',
            job_dj_productor: 'DJ & Produzent',
            job_dj_prod_sello: 'DJ Label-Produzent',
            job_dj_studio77: 'Resident DJ Studio 77',
            job_dj_kapitol: 'Resident DJ Kapitol',
            job_dj_ibiza: 'Resident DJ Ibiza',
            job_dj_berghain: 'Resident DJ Berghain',
            job_dj_favrik: 'Resident DJ FAVRIK',
            job_dj_whiteworks: 'DJ Whiteworks',

            // Job Titles - Admin
            job_admin_contable: 'Buchhalter',
            job_admin_senior: 'Senior Buchhalter',
            job_tecnico_gestion: 'Finanzbuchhalter',
            job_resp_admin: 'Verwaltungsleiter',
            job_gestor_cobros: 'Debitorenbuchhalter',
            job_resp_facturacion: 'Fakturierungsleiter',
            job_credit_controller: 'Senior Kreditsachbearbeiter',
            job_jefe_admin_clientes: 'Kundenadministrationsleiter',
            job_admin_inmo: 'Immobilienkaufmann',
            job_gestor_ops_inmo: 'Immobilienverwalter',
            job_resp_oficina_inmo: 'Niederlassungsleiter',
            job_director_zona: 'Gebietsleiter',

            // Job Titles - IT/Development
            job_prog_junior: 'Junior Entwickler',
            job_prog_semi: 'Entwickler',
            job_dev_senior: 'Senior Entwickler',
            job_tech_lead: 'Technischer Leiter',
            job_soporte: 'IT-Support Techniker',
            job_sys_admin: 'Systemadministrator',
            job_sys_engineer: 'Systemingenieur',
            job_resp_it: 'IT-Leiter',
            job_mobile_dev: 'Mobile App Entwickler',
            job_mobile_mid: 'Mobile Entwickler',
            job_mobile_senior: 'Senior Mobile Entwickler',
            job_mobile_lead: 'Lead Mobile Entwickler / Architekt',

            // Job Titles - Maintenance
            job_tecnico_maint: 'Industriemechaniker',
            job_tecnico_senior: 'Senior Techniker',
            job_jefe_equipo: 'Teamleiter',
            job_resp_planta: 'Werksleiter',
            job_tecnico_clima: 'Klimatechniker',
            job_oficial_1: 'Senior Klimatechniker',
            job_resp_servicio: 'Serviceleiter',
            job_jefe_ops_maint: 'Instandhaltungsleiter',
            job_tecnico_edificios: 'Gebäudetechniker',
            job_encargado_edificio: 'Hausmeister',
            job_supervisor_multi: 'Standortübergreifender Supervisor',
            job_facility_manager: 'Facility Manager',

            // Job Titles - Business/Finance
            job_analista_fin: 'Finanzanalyst',
            job_analista_senior: 'Senior Analyst',
            job_controller: 'Controller',
            job_cfo: 'Finanzvorstand (CFO)',
            job_consultor: 'Unternehmensberater',
            job_consultor_senior: 'Senior Berater',
            job_manager_proyecto: 'Projektmanager',
            job_socio_director: 'Partner / Geschäftsführer',
            job_gestor_cuentas: 'Key Account Manager',
            job_key_account: 'Senior Key Account Manager',
            job_sales_manager: 'Vertriebsleiter',
            job_director_comercial: 'Vertriebsdirektor',

            // Job Titles - Engineering/CS
            job_swe: 'Software-Ingenieur',
            job_swe_mid: 'Software-Entwickler',
            job_swe_senior: 'Senior Software-Ingenieur',
            job_eng_manager: 'Engineering Manager',
            job_data_analyst: 'Datenanalyst',
            job_data_senior: 'Senior Datenanalyst',
            job_data_scientist: 'Data Scientist',
            job_head_data: 'Leiter Datenanalyse',
            job_devops: 'DevOps Engineer',
            job_devops_mid: 'DevOps Ingenieur',
            job_cloud_architect: 'Cloud Architekt',
            job_dir_cloud: 'Leiter Cloud Infrastruktur',

            // Job Titles - Civil Engineering
            job_ing_obra: 'Bauingenieur',
            job_jefe_obra: 'Bauleiter',
            job_jefe_proyecto: 'Projektleiter',
            job_dir_construccion: 'Bauvorstand',
            job_tecnico_oficina: 'Technischer Zeichner',
            job_ing_proyectos: 'Projektingenieur',
            job_resp_oficina_tec: 'Leiter technisches Büro',
            job_dir_tecnico: 'Technischer Direktor',
            job_consultor_urb: 'Ingenieurberater',
            job_consultor_urb_senior: 'Senior Berater',
            job_manager_consultoria: 'Beratungsmanager',
            job_socio_cons: 'Partner / Geschäftsführer',

            // Gig Jobs (Temporary)
            job_gig_cromos: 'Sammelkarten verkaufen',
            job_gig_wallapop: 'eBay Verkauf',
            job_gig_limpiar: 'Haushaltshilfe',
            job_gig_perros: 'Gassi gehen',
            job_gig_publicidad: 'Flyer verteilen',
            job_gig_ninos: 'Babysitten',
            job_gig_mudanzas: 'Umzugshelfer',
            job_gig_cliente: 'Testkäufer',
            job_gig_transcribir: 'Audio-Transkription',
            job_gig_encuestador: 'Umfrageteilnehmer',
            job_gig_dj: 'Kinder-Party DJ',
            job_gig_monitor: 'Mittagsaufsicht',
            job_gig_cesped: 'Rasenmähen',

            // Education
            education_title: 'Bildung',
            current_studies: 'Aktuelle Studien',
            available_courses: 'Verfügbare Kurse',
            enroll: 'Einschreiben',
            studying: 'Studierend',
            completed: 'Abgeschlossen',
            duration: 'Dauer',
            months: 'Monate',
            cost: 'Kosten',
            free: 'Kostenlos',
            in_progress: 'In Bearbeitung',
            time_remaining: 'Verbleibende Zeit',
            progress: 'Fortschritt',
            current_education: 'Aktuelle Bildung',
            highest_degree: 'Höchster Abschluss',
            no_studies: 'Keine Studien',
            enroll_tip: 'Schreiben Sie sich für einen Kurs ein, um Ihre Jobchancen zu verbessern.',
            required_prereq: 'Erfordert',
            available_section: 'Verfügbare Kurse',
            locked_section: 'Gesperrt',
            enrolled_msg: 'Eingeschrieben!',
            start_studying: 'Anfangen zu lernen',
            course_fee: 'Studiengebühr',

            // Education Courses (German equivalents)
            course_bachillerato: 'Abitur',
            course_bachillerato_desc: 'Hochschulreife. Voraussetzung für die Universität.',
            course_fp_medio: 'Ausbildung (IHK)',
            course_fp_medio_desc: 'Berufliche Ausbildung. Zugang zur Weiterbildung.',
            course_fp_admin: 'Fachwirt Büro/Verwaltung',
            course_fp_admin_desc: 'Wirtschaft und Finanzen.',
            course_fp_dam: 'Fachinformatiker Anwendungsentwicklung',
            course_fp_dam_desc: 'Programmierung und Software.',
            course_fp_maint: 'Industriemechaniker',
            course_fp_maint_desc: 'Anlagen und Montage.',
            course_grado_ade: 'Bachelor BWL',
            course_grado_ade_desc: 'Betriebswirtschaftslehre.',
            course_grado_cs: 'Bachelor Informatik',
            course_grado_cs_desc: 'Informatik und Technologie.',
            course_grado_civil: 'Bachelor Bauingenieurwesen',
            course_grado_civil_desc: 'Bau & Infrastruktur.',
            course_master_fin: 'Master Finanzen',
            course_master_fin_desc: 'Finanzmanagement.',
            course_master_ai: 'Master Künstliche Intelligenz',
            course_master_ai_desc: 'KI & Machine Learning.',
            course_master_ing: 'Master Bauingenieurwesen',
            course_master_ing_desc: 'Qualifikation zum beratenden Ingenieur.',
            course_bootcamp: 'Coding Bootcamp',
            course_bootcamp_desc: 'Intensives Tech-Training. Hohe Nachfrage.',
            course_dj_basic: 'DJ Grundkurs SYNC',
            course_dj_basic_desc: 'Lernen Sie mit dem SYNC-Button zu mixen. Die Grundlagen.',
            course_dj_pioneer: 'Pioneer DJ Kurs',
            course_dj_pioneer_desc: 'Beherrschung von CDJs und Rekordbox. Club-Standard.',
            course_dj_vinyl: 'Fortgeschrittener Vinyl DJ Kurs',
            course_dj_vinyl_desc: 'Die Kunst des manuellen Beatmatchings. Purer Respekt.',
            course_dj_pro: 'Master DJ Professional',
            course_dj_pro_desc: 'Musikproduktion, Marketing & Personal Branding.',

            // Lifestyle
            lifestyle_title: 'Lebensstil',
            housing: 'Wohnung',
            food: 'Ernährung',
            transport: 'Transport',
            leisure: 'Freizeit',
            clothes: 'Kleidung',
            current: 'Aktuell',
            upgrade: 'Verbessern',
            monthly_cost: 'Monatliche Kosten',

            // Company
            company_title: 'Unternehmen',
            found_company: 'Unternehmen gründen',
            my_company: 'Mein Unternehmen',
            company_name: 'Firmenname',
            company_type: 'Geschäftsart',
            company_location: 'Standort',
            company_cash: 'Firmenkasse',
            company_revenue: 'Einnahmen',
            company_expenses: 'Ausgaben',
            company_profit: 'Gewinn',
            employees: 'Mitarbeiter',
            hire: 'Einstellen',
            fire: 'Entlassen',
            marketing: 'Marketing',
            product: 'Produkt',
            upgrade_office: 'Büro erweitern',

            // Company Types
            company_cafe: 'Café',
            company_retail: 'Bekleidungsgeschäft',
            company_marketing: 'Marketingagentur',
            company_tech: 'SaaS-Startup',

            // Locations
            location_suburbs: 'Vorort',
            location_downtown: 'Stadtzentrum',
            location_business: 'Geschäftsviertel',

            // Alerts & Messages
            not_enough_money: 'Sie haben nicht genug Geld.',
            requirement_not_met: 'Anforderungen nicht erfüllt.',
            purchase_successful: 'Kauf erfolgreich.',
            sale_successful: 'Verkauf erfolgreich.',
            action_completed: 'Aktion abgeschlossen.',

            // Taxes
            tax_declaration: 'Steuererklärung',
            tax_warning: 'Steuersaison',
            tax_income: 'Einkommen',
            tax_expenses: 'Abzugsfähige Ausgaben',
            tax_base: 'Steuerbemessungsgrundlage',
            tax_rate: 'Steuersatz',
            tax_amount: 'Zu zahlen',
            pay_taxes: 'Steuern zahlen',

            // Expropriation (Easter Egg)
            expropriation_title: 'Staatliche Enteignung',
            expropriation_message: 'Der Staat hat entschieden, dass Sie zu viel Geld hatten.',

            // Endgame
            game_over: 'Spielende',
            bankruptcy: 'Bankrott',
            final_stats: 'Endstatistiken',
            total_income: 'Gesamteinkommen',
            total_expenses: 'Gesamtausgaben',
            taxes_paid: 'Gezahlte Steuern',
            restart_game: 'Spiel neustarten',

            // Tutorial
            tutorial_welcome: 'Willkommen in deinem neuen Leben!',
            tutorial_welcome_title: 'Willkommen!',
            tutorial_age_16: 'Du bist 16 Jahre alt und hast gerade die Schule abgeschlossen.',
            tutorial_decide_future: 'Es ist Zeit, deine Zukunft zu entscheiden.',
            tutorial_choose_education: 'Wähle deine Ausbildung:',
            tutorial_bachillerato: 'Abitur',
            tutorial_fp_medio: 'Ausbildung (IHK)',
            tutorial_free: 'Kostenlos',
            tutorial_access_university: '→ Universitätszugang',
            tutorial_quick_job: '→ Schnelle Beschäftigung',
            tutorial_education: 'Wählen Sie zuerst Ihre Ausbildung.',
            tutorial_job: 'Finden Sie jetzt Ihren ersten Job.',
            tutorial_next: 'Weiter',
            tutorial_skip: 'Tutorial überspringen',
            tutorial_understood: 'Verstanden!',
            tutorial_continue: 'Fortfahren',
            tutorial_lets_go: 'Los geht\'s!',
            tutorial_great: 'Großartig!',
            tutorial_perfect: 'Perfekt!',
            tutorial_stock_1: 'Willkommen am Aktienmarkt',
            tutorial_stock_2: 'Hier können Sie Aktien kaufen und verkaufen',
            tutorial_stock_3: 'Die Preise schwanken mit der Zeit',
            tutorial_bank_1: 'Willkommen bei der Bank',
            tutorial_bank_2: 'Hier können Sie Kredite aufnehmen',
            tutorial_bank_3: 'Denken Sie daran, Ihre Schulden zu bezahlen',
            tutorial_finished: 'Tutorial abgeschlossen!',
            tutorial_basic_complete: 'Du kennst jetzt die Grundlagen. Arbeite, investiere und werde Millionär.',
            tutorial_good_luck: 'Viel Glück im echten Leben...',
            graduated: 'Absolvent',

            // Tutorial Step 2 (Go to Work)
            tutorial_enrolled: 'Sie sind eingeschrieben!',
            tutorial_earn_money_studying: 'Während Sie studieren, können Sie mit <strong style="color: #4ade80;">Gelegenheitsjobs</strong> Geld verdienen.',
            tutorial_find_first_job: 'Finden Sie Ihren ersten Job, um mit dem Sparen zu beginnen!',
            go_to_work: 'Zur Arbeit',

            // Tutorial Step 6 (Jobs Unlocked)
            tutorial_jobs_unlocked: 'Jobs freigeschaltet!',
            tutorial_jobs_unlocked_msg: 'Jetzt, wo Sie Ihre Qualifikation haben, können Sie auf <strong>Festanstellungen</strong> zugreifen.<br><br>💼 Festanstellungen zahlen besser und ermöglichen <strong>Beförderungen</strong>.<br><br>👆 Wählen Sie einen Job aus dem "Arbeitsmarkt", um fortzufahren.',

            // Tutorial Step 7 (First Real Job)
            tutorial_first_real_job: 'Ihre erste Festanstellung',
            tutorial_promotions: 'Beförderungen',
            tutorial_promotions_msg: 'Bitten Sie um Gehaltserhöhungen, wenn Sie eine Weile gearbeitet haben. Höhere Bildung schaltet bessere Karrieren frei.',
            tutorial_salary_msg: 'Sie werden jeden Monat automatisch bezahlt. Es wird im Dashboard angezeigt.',
            tutorial_change_job: 'Wechseln',
            tutorial_change_job_msg: 'Sie können sich jederzeit auf andere Jobs bewerben. Einige erfordern Qualifikationen.',
            congratulations: 'Herzlichen Glückwunsch!',
            tutorial_lets_work: 'An die Arbeit!',

            // Tutorial Step 8 (Housing Kickout)
            tutorial_kicked_out: 'Rausgeworfen!',
            tutorial_mom_quote: 'Du wirst langsam erwachsen, Schatz. Hier sind 300€ für etwas Schönes, aber beeil dich, denn morgen wird dein Zimmer zum Fitnessraum.',
            emergency: 'Notfall!',
            tutorial_need_housing: 'Sie brauchen heute Nacht einen Platz zum Schlafen.',
            find_housing: 'Wohnung finden',

            // Tutorial Step 9 (Independence)
            tutorial_independence: 'UNABHÄNGIGKEIT!',
            tutorial_new_stage: 'Neue Phase freigeschaltet',
            tutorial_financial_control: 'Volle finanzielle Kontrolle',
            tutorial_emancipated: 'Status: Unabhängig',
            tutorial_independence_msg: 'Herzlichen Glückwunsch! Sie sind ausgezogen (auch wenn es nur ein Sofa ist).<br>Sie sind jetzt für Ihre eigenen Finanzen verantwortlich. Schauen wir mal, wie es läuft.',
            view_finances: 'Meine Finanzen ansehen',

            // Tutorial - Gig Acceptance & Free Mode
            tutorial_earning_while_studying: 'Sie verdienen Geld während Sie studieren.',
            tutorial_free_mode_msg: 'Das Tutorial geht im <strong>freien Modus</strong> weiter. Gehen Sie mit "Nächster Monat" vor, bis Sie Ihre Ausbildung abgeschlossen haben.',
            tutorial_turns_mechanic: 'Rundenbasiertes System',
            tutorial_turns_msg: 'Die Zeit vergeht nicht von alleine.<br><br>Klicken Sie auf <strong>Nächster Monat</strong>, um Gehalt zu erhalten, Ausgaben zu bezahlen und im Studium voranzukommen.',
            understood: 'Verstanden',
            next: 'Weiter',

            // Tutorial - Degree Completion
            tutorial_well_done: 'HERZLICHEN GLÜCKWUNSCH!',
            tutorial_education_complete: 'Ausbildung abgeschlossen',
            tutorial_perm_jobs_access: 'Zugang zu Festanstellungen',
            tutorial_better_salaries: 'Bessere Gehälter verfügbar',
            tutorial_promotions_available: 'Beförderungsmöglichkeiten',
            find_job: 'Job finden',

            // Tutorial - Dashboard Tooltips
            tutorial_net_worth_msg: 'Das ist Ihr wahrer Wert.<br><br>Es ist die Summe all Ihres Geldes und Ihrer Vermögenswerte, abzüglich Ihrer Schulden. Lassen Sie es wachsen!',
            tutorial_cash_msg: 'Das flüssige Geld, das Sie ausgeben oder investieren können. Wenn es auf Null fällt, ist das Spiel vorbei!',
            tutorial_flow_msg: 'Das ist die Differenz zwischen Ihren Einnahmen und Ausgaben. Halten Sie es positiv, um jeden Monat Vermögen aufzubauen.',

            // Tutorial - Stock Market Unlock
            tutorial_stock_unlocked: 'BÖRSE FREIGESCHALTET!',
            tutorial_net_worth_30k: '30.000€ Vermögen',
            tutorial_stock_access: 'Zugang zum Aktienmarkt',
            tutorial_stock_congrats: 'Herzlichen Glückwunsch! Sie haben genug Kapital angesammelt, um in Aktien zu investieren.<br>Schauen wir mal, wie es funktioniert.',
            go_to_stock: 'Zur Börse',

            // Tutorial - Stock Market Steps
            tutorial_stock: 'Börsen-Tutorial',
            tutorial_stock_step1: '📈 <strong>Aktienmarkt</strong><br><br>Hier können Sie in Aktien echter und fiktiver Unternehmen investieren.<br><br>Der Preis jeder Aktie schwankt mit der Zeit. Wählen Sie weise!',
            tutorial_stock_step2: '📋 <strong>Aktionliste</strong><br><br>Im Bereich Kurse finden Sie alle verfügbaren Aktien.<br><br>Wählen Sie eine aus, um ihr Diagramm zu sehen und sie zu kaufen.',
            tutorial_stock_step3: '📊 <strong>Meine Positionen</strong><br><br>Unten im Bereich Meine Positionen sehen Sie Ihre gekauften Aktien, den durchschnittlichen Kaufpreis und den aktuellen Gewinn/Verlust.<br><br>💡 <em>Tipp: Behalten Sie Ihre Positionen im Auge, um zu entscheiden, wann Sie verkaufen.</em>',
            tutorial_stock_complete: 'Sie kennen jetzt die Grundlagen! Viel Erfolg beim Investieren.',

            // Tutorial - Bank Unlock & Steps
            tutorial_bank_unlocked: 'BANK FREIGESCHALTET!',
            new_feature: 'Neue Funktion',
            tutorial_bank_access: 'Zugang zu Bankdienstleistungen',
            tutorial_loans_financing: 'Kredite und Finanzierung',
            tutorial_bank_congrats: 'Sie können jetzt Kredite beantragen!<br>Schauen wir mal, wie es funktioniert.',
            go_to_bank: 'Zur Bank',
            tutorial_bank: 'Bank-Tutorial',
            tutorial_bank_step1: '🏦 <strong>Bankdienstleistungen</strong><br><br>Hier können Sie persönliche Kredite beantragen, um Ihre Investitionen zu finanzieren.<br><br>Die Bank wird Ihr Profil bewerten, bevor sie einen Kredit gewährt.',
            tutorial_bank_step2: '💳 <strong>Kreditlimit</strong><br><br>Ihr Kreditlimit hängt von Ihrem monatlichen Gehalt ab.<br><br>Je höher Ihr Einkommen, desto mehr können Sie leihen.',
            tutorial_bank_step3: '🏠 <strong>In Immobilien investieren!</strong><br><br>Kredite sind perfekt, um Immobilien zu kaufen, die monatliche Mieteinnahmen generieren.<br><br>💡 <em>Tipp: Eine gute Immobilie kann sich selbst durch Mieteinnahmen bezahlen.</em>',
            tutorial_bank_complete: 'Sie kennen jetzt die Bank! Erwägen Sie einen Kredit aufzunehmen.',

            // Tax Declaration
            tax_authority: 'STEUERERKLÄRUNG',
            tax_intro: 'Ab jetzt müssen Sie jeden <strong>Monat 5</strong> Ihre Steuererklärung abgeben.',
            income_bracket: 'Einkommensstufe',
            tax_rate: 'Steuersatz',
            tax_reminder: 'Vergessen Sie nicht, etwas Geld zurückzulegen...',

            // Job Acceptance
            gig_accepted_msg: 'Sie haben einen befristeten Job angenommen. Sie verdienen Geld für die Dauer des Vertrags.',
            career_accepted_msg: 'Willkommen im Team! Sie haben einen großen Schritt in Ihrer Karriere gemacht. Ihr erstes Gehalt kommt am Monatsende.',
            lets_start: 'Los geht\'s!',

            // Welcome Screen
            welcome_study: 'Studieren',
            welcome_study_desc: 'um Ihre Fähigkeiten zu verbessern',
            welcome_work: 'Arbeiten',
            welcome_work_desc: 'und Karriere machen',
            welcome_invest: 'Investieren',
            welcome_invest_desc: 'in Aktien und Immobilien',
            welcome_business: 'Gründen Sie Ihr Unternehmen',
            welcome_business_desc: 'und erreichen Sie die Spitze',
            your_name: 'Ihr Name',
            name_placeholder: 'Wie heißen Sie?',
            start_adventure: 'Abenteuer starten',
            tagline: 'Kaufen, verkaufen, vermieten... Bauen Sie Ihre Zukunft!',
            create_profile: 'Profil erstellen',

            // Milestones
            milestone_reached: 'Meilenstein erreicht!',
            milestone_message: 'Sie haben Ihre ersten {amount} Vermögen erreicht.',

            // Save/Load
            save_slot: 'Speicherplatz',
            save_empty: 'Leer',
            save_overwrite: 'Gespeichertes Spiel überschreiben?',
            load_confirm: 'Dieses Spiel laden?',
            autosave: 'Automatisches Speichern'
        }
    },

    /**
     * Get translation for a key
     * @param {string} key - Translation key
     * @param {object} params - Optional parameters for interpolation
     * @returns {string} Translated string
     */
    t(key, params = {}) {
        const lang = this.translations[this.currentLang];
        let text = lang[key] || this.translations.es[key] || key;

        // Handle interpolation {param}
        Object.keys(params).forEach(param => {
            text = text.replace(`{${param}}`, params[param]);
        });

        return text;
    },

    /**
     * Set current language
     * @param {string} lang - Language code (es, en, de)
     */
    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('gameLanguage', lang);

            // Update page title
            document.title = this.t('game_title');

            // Update static UI elements (navigation, buttons)
            this.updateStaticUI();

            // Trigger UI refresh if UI module exists
            if (typeof UI !== 'undefined' && UI.render) {
                UI.render();
            }

            return true;
        }
        return false;
    },

    /**
     * Get current language
     * @returns {string} Current language code
     */
    getLanguage() {
        return this.currentLang;
    },

    /**
     * Initialize i18n from localStorage or browser preference
     */
    init() {
        // Check localStorage first
        const saved = localStorage.getItem('gameLanguage');
        if (saved && this.translations[saved]) {
            this.currentLang = saved;
            return;
        }

        // Check browser language
        const browserLang = navigator.language.split('-')[0];
        if (this.translations[browserLang]) {
            this.currentLang = browserLang;
        }
    },

    /**
     * Get list of available languages
     * @returns {array} Array of language objects
     */
    getAvailableLanguages() {
        return [
            { code: 'es', name: 'Español', flag: '🇪🇸' },
            { code: 'en', name: 'English', flag: '🇬🇧' },
            { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
        ];
    },

    /**
     * Update static UI elements with current language
     * This updates navigation buttons and other static HTML elements
     */
    updateStaticUI() {
        // Navigation labels mapping
        const navLabels = {
            'dashboard': { icon: '📊', key: 'nav_dashboard' },
            'education': { icon: '🎓', key: 'nav_education' },
            'lifestyle': { icon: '💸', key: 'nav_lifestyle' },
            'job': { icon: '💼', key: 'nav_job' },
            'bank': { icon: '🏦', key: 'nav_bank' },
            'real-estate': { icon: '🏘️', key: 'nav_real_estate' },
            'market': { icon: '📈', key: 'nav_market' }
        };

        // Update desktop nav buttons
        document.querySelectorAll('#main-nav .nav-btn').forEach(btn => {
            const view = btn.dataset.view;
            if (navLabels[view]) {
                btn.textContent = `${navLabels[view].icon} ${this.t(navLabels[view].key)}`;
            }
        });

        // Update mobile bottom nav labels
        document.querySelectorAll('#bottom-nav .b-nav-item').forEach(btn => {
            const view = btn.dataset.view;
            if (navLabels[view]) {
                const label = btn.querySelector('.label');
                if (label) {
                    label.textContent = this.t(navLabels[view].key);
                }
            }
        });

        // Update Next Month button
        const nextTurnBtn = document.getElementById('next-turn-btn');
        if (nextTurnBtn) {
            nextTurnBtn.innerHTML = `⚡ ${this.t('next_month')} →`;
        }

        // Highlight current language button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            const lang = btn.dataset.lang;
            if (lang === this.currentLang) {
                btn.style.border = '2px solid #4ade80';
                btn.style.background = 'rgba(74, 222, 128, 0.2)';
            } else {
                btn.style.border = '1px solid rgba(255,255,255,0.2)';
                btn.style.background = 'none';
            }
        });
    }
};

// Shorthand function for translations
function t(key, params) {
    return I18n.t(key, params);
}

// Helper to get translated course name and description
function getCourseTranslation(courseId) {
    const nameKey = `course_${courseId}`;
    const descKey = `course_${courseId}_desc`;
    const name = I18n.t(nameKey);
    const desc = I18n.t(descKey);
    // If translation exists (not returning the key itself), use it
    return {
        name: name !== nameKey ? name : null,
        desc: desc !== descKey ? desc : null
    };
}

// Job title to translation key mapping
const JOB_TRANSLATION_MAP = {
    'Reponedor / Auxiliar': 'job_reponedor',
    'Cajero / Atención': 'job_cajero',
    'Supervisor de Planta': 'job_supervisor_planta',
    'TRES DEPORTE': 'job_tres_deporte',
    'DJ Residente de tu casa': 'job_dj_casa',
    'DJ Reggeton': 'job_dj_reggeton',
    'DJ Residente Reggeton': 'job_dj_res_reggeton',
    'DJ Electronica': 'job_dj_electronica',
    'DJ Residente Electronica': 'job_dj_res_electronica',
    'DJ Residente Octogono': 'job_dj_octogono',
    'DJ y Productor': 'job_dj_productor',
    'DJ Productor Sello': 'job_dj_prod_sello',
    'DJ Residente Studio 77': 'job_dj_studio77',
    'DJ Residente Kapitol': 'job_dj_kapitol',
    'DJ Residente Ibiza': 'job_dj_ibiza',
    'DJ Residente Berghain': 'job_dj_berghain',
    'DJ Residente FAVRIK': 'job_dj_favrik',
    'DJ Whiteworks': 'job_dj_whiteworks',
    'Administrativo contable': 'job_admin_contable',
    'Administrativo senior': 'job_admin_senior',
    'Técnico de gestión financiera': 'job_tecnico_gestion',
    'Responsable administrativo': 'job_resp_admin',
    'Gestor de cobros / facturación': 'job_gestor_cobros',
    'Responsable de facturación': 'job_resp_facturacion',
    'Credit controller': 'job_credit_controller',
    'Jefe de admi. de clientes': 'job_jefe_admin_clientes',
    'Administrativo comercial inmo.': 'job_admin_inmo',
    'Gestor de operaciones inmo.': 'job_gestor_ops_inmo',
    'Responsable de oficina inmo.': 'job_resp_oficina_inmo',
    'Director de zona': 'job_director_zona',
    'Programador junior (FP)': 'job_prog_junior',
    'Programador semi‑senior': 'job_prog_semi',
    'Desarrollador senior': 'job_dev_senior',
    'Tech lead': 'job_tech_lead',
    'Técnico de soporte y sistemas': 'job_soporte',
    'Administrador de sistemas': 'job_sys_admin',
    'Ingeniero de sistemas': 'job_sys_engineer',
    'Responsable infraest. IT': 'job_resp_it',
    'Desarrollador de apps móviles': 'job_mobile_dev',
    'Mobile developer mid': 'job_mobile_mid',
    'Senior mobile': 'job_mobile_senior',
    'Lead mobile / arquitecto': 'job_mobile_lead',
    'Técnico mantenimiento ind.': 'job_tecnico_maint',
    'Técnico senior': 'job_tecnico_senior',
    'Jefe de equipo': 'job_jefe_equipo',
    'Responsable de planta': 'job_resp_planta',
    'Técnico de climatización': 'job_tecnico_clima',
    'Oficial de 1ª': 'job_oficial_1',
    'Responsable servicio técnico': 'job_resp_servicio',
    'Jefe operaciones mant.': 'job_jefe_ops_maint',
    'Técnico manten. edificios': 'job_tecnico_edificios',
    'Encargado de edificio': 'job_encargado_edificio',
    'Supervisor multiedificio': 'job_supervisor_multi',
    'Facility manager': 'job_facility_manager',
    'Analista financiero': 'job_analista_fin',
    'Analista senior': 'job_analista_senior',
    'Controller financiero': 'job_controller',
    'Director financiero (CFO)': 'job_cfo',
    'Consultor de negocio': 'job_consultor',
    'Consultor senior': 'job_consultor_senior',
    'Manager de proyecto': 'job_manager_proyecto',
    'Socio / Director': 'job_socio_director',
    'Gestor de cuentas empresa': 'job_gestor_cuentas',
    'Key account manager': 'job_key_account',
    'Sales manager': 'job_sales_manager',
    'Director comercial': 'job_director_comercial',
    'Ingeniero de software': 'job_swe',
    'Software engineer mid': 'job_swe_mid',
    'Senior software engineer': 'job_swe_senior',
    'Engineering manager': 'job_eng_manager',
    'Data analyst / BI': 'job_data_analyst',
    'Data analyst senior': 'job_data_senior',
    'Data scientist': 'job_data_scientist',
    'Head of data': 'job_head_data',
    'DevOps / cloud engineer': 'job_devops',
    'DevOps mid': 'job_devops_mid',
    'Senior / Cloud architect': 'job_cloud_architect',
    'Director infraest. cloud': 'job_dir_cloud',
    'Ingeniero de obra': 'job_ing_obra',
    'Jefe de obra': 'job_jefe_obra',
    'Jefe de proyecto': 'job_jefe_proyecto',
    'Director construcción': 'job_dir_construccion',
    'Técnico oficina técnica': 'job_tecnico_oficina',
    'Ingeniero de proyectos': 'job_ing_proyectos',
    'Responsable of. técnica': 'job_resp_oficina_tec',
    'Director técnico': 'job_dir_tecnico',
    'Consultor ingeniería / urb.': 'job_consultor_urb',
    'Manager consultoría': 'job_manager_consultoria',
    'Socio / Director cons.': 'job_socio_cons',

    // Gigs (Temporary Jobs)
    'Vender cromos': 'job_gig_cromos',
    'Ventas en Wallapop': 'job_gig_wallapop',
    'Limpiar casas': 'job_gig_limpiar',
    'Pasear perros': 'job_gig_perros',
    'Repartir publicidad': 'job_gig_publicidad',
    'Cuidar niños': 'job_gig_ninos',
    'Ayudante mudanzas': 'job_gig_mudanzas',
    'Cliente misterioso': 'job_gig_cliente',
    'Transcribir audios': 'job_gig_transcribir',
    'Encuestador': 'job_gig_encuestador',
    'DJ fiestas infantiles': 'job_gig_dj',
    'Monitor comedor': 'job_gig_monitor',
    'Cortar césped': 'job_gig_cesped'
};

// Helper to get translated job title
function getJobTranslation(spanishTitle) {
    const key = JOB_TRANSLATION_MAP[spanishTitle];
    if (key) {
        const translated = I18n.t(key);
        return translated !== key ? translated : spanishTitle;
    }
    return spanishTitle;
}

// Initialize on load
I18n.init();
