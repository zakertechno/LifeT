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
            bank_title: 'Banco',
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
            salary: 'Salario',
            unemployed: 'Desempleado',
            available_jobs: 'Trabajos Disponibles',
            gig_jobs: 'Trabajos Temporales (Gigs)',
            career_jobs: 'Carreras Profesionales',
            apply: 'Aplicar',
            quit_job: 'Dejar Trabajo',
            promotion: 'Ascenso',
            requirements: 'Requisitos',

            // Education
            education_title: 'Educación',
            current_studies: 'Estudios Actuales',
            available_courses: 'Cursos Disponibles',
            enroll: 'Matricularse',
            studying: 'Estudiando',
            completed: 'Completado',
            duration: 'Duración',
            months: 'meses',
            cost: 'Coste',

            // Education Levels
            edu_eso: 'ESO',
            edu_bachillerato: 'Bachillerato',
            edu_fp_basic: 'FP Básica',
            edu_fp_medio: 'FP Grado Medio',
            edu_fp_superior: 'FP Grado Superior',
            edu_university: 'Universidad',
            edu_master: 'Máster',

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
            tutorial_education: 'Primero, elige tu formación.',
            tutorial_job: 'Ahora busca tu primer trabajo.',
            tutorial_next: 'Siguiente',
            tutorial_skip: 'Saltar Tutorial',

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
            bank_title: 'Bank',
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
            salary: 'Salary',
            unemployed: 'Unemployed',
            available_jobs: 'Available Jobs',
            gig_jobs: 'Gig Jobs',
            career_jobs: 'Career Paths',
            apply: 'Apply',
            quit_job: 'Quit Job',
            promotion: 'Promotion',
            requirements: 'Requirements',

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

            // Education Levels
            edu_eso: 'Secondary School',
            edu_bachillerato: 'High School',
            edu_fp_basic: 'Basic Vocational',
            edu_fp_medio: 'Intermediate Vocational',
            edu_fp_superior: 'Advanced Vocational',
            edu_university: 'University',
            edu_master: 'Master\'s Degree',

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
            tutorial_education: 'First, choose your education.',
            tutorial_job: 'Now find your first job.',
            tutorial_next: 'Next',
            tutorial_skip: 'Skip Tutorial',

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
            bank_title: 'Bank',
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
            salary: 'Gehalt',
            unemployed: 'Arbeitslos',
            available_jobs: 'Verfügbare Jobs',
            gig_jobs: 'Gelegenheitsjobs',
            career_jobs: 'Karrierewege',
            apply: 'Bewerben',
            quit_job: 'Kündigen',
            promotion: 'Beförderung',
            requirements: 'Anforderungen',

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

            // Education Levels
            edu_eso: 'Sekundarschule',
            edu_bachillerato: 'Abitur',
            edu_fp_basic: 'Grundausbildung',
            edu_fp_medio: 'Mittlere Ausbildung',
            edu_fp_superior: 'Höhere Ausbildung',
            edu_university: 'Universität',
            edu_master: 'Master',

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
            tutorial_education: 'Wählen Sie zuerst Ihre Ausbildung.',
            tutorial_job: 'Finden Sie jetzt Ihren ersten Job.',
            tutorial_next: 'Weiter',
            tutorial_skip: 'Tutorial überspringen',

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

// Initialize on load
I18n.init();
