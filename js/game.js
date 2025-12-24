// Endgame

function showEndgameModal() {
    const stats = GameState.lifetimeStats;

    // Calc RE profit
    const realEstateProfit = (stats.realEstate && stats.realEstate.totalSales && stats.realEstate.totalPurchases)
        ? stats.realEstate.totalSales - stats.realEstate.totalPurchases
        : 0;

    const totalIncome = stats.totalIncome.salary + stats.totalIncome.rental + stats.totalIncome.stocks + stats.totalIncome.company + realEstateProfit;
    const totalExpenses = stats.totalExpenses.lifestyle + stats.totalExpenses.housing + stats.totalExpenses.education;

    const summary = `
                <div style="text-align: center; padding: 15px; max-height: 75vh; overflow-y: auto;">
                    <div style="font-size: 2.5rem; margin-bottom: 5px;">☠️</div>
                    <h2 style="color: #f87171; margin: 0 0 3px 0; font-size: 1.4rem;">${t('endgame_death_title')}</h2>
                    <p style="color: #4ade80; margin: 5px 0; font-size: 1rem; font-weight: 600;">
                        ${t('milestone_message', { amount: formatCurrency(GameState.netWorth) })}
                    </p>
                    <p style="color: #38bdf8; margin: 0 0 12px 0; font-size: 0.95rem; font-weight: bold;">
                        ${t('endgame_congrats')}
                    </p>
                    <p style="color: #94a3b8; margin: 0 0 12px 0; font-size: 0.85rem;">
                        ${t('endgame_thanks_msg')}
                    </p>
                    
                    <div style="background: rgba(30, 41, 59, 0.5); border: 1px solid #334155; border-radius: 8px; padding: 10px; margin: 8px auto; max-width: 400px;">
                        <h3 style="color: #4ade80; margin: 0 0 8px 0; font-size: 0.9rem; font-weight: 600;">💰 ${t('endgame_income_title')}</h3>
                        <div style="display: flex; justify-content: space-between; margin: 4px 0; font-size: 0.8rem;">
                            <span>💼 ${t('tax_src_salary')}:</span>
                            <strong style="color: #4ade80;">${formatCurrency(stats.totalIncome.salary)}</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin: 4px 0; font-size: 0.8rem;">
                            <span>🏠 ${t('tax_src_rental')}:</span>
                            <strong style="color: #4ade80;">${formatCurrency(stats.totalIncome.rental)}</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin: 4px 0; font-size: 0.8rem;">
                            <span>📈 ${t('tax_src_stocks')}:</span>
                            <strong style="color: #4ade80;">${formatCurrency(stats.totalIncome.stocks)}</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin: 4px 0; font-size: 0.8rem;">
                            <span>🏢 ${t('tax_src_company')}:</span>
                            <strong style="color: #4ade80;">${formatCurrency(stats.totalIncome.company)}</strong>
                        </div>
                        ${(stats.realEstate && stats.realEstate.propertiesSold > 0) ? `
                        <div style="margin: 8px 0; padding: 8px; background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 6px;">
                            <div style="font-size: 0.75rem; color: #38bdf8; font-weight: 600; margin-bottom: 4px;">
                                🏘️ ${t('endgame_op_real_estate')} (${stats.realEstate.propertiesSold})
                            </div>
                            <div style="display: flex; justify-content: space-between; margin: 2px 0; font-size: 0.75rem; color: #94a3b8;">
                                <span>${t('re_buy_price')}:</span>
                                <span>${formatCurrency(stats.realEstate.totalPurchases || 0)}</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin: 2px 0; font-size: 0.75rem; color: #94a3b8;">
                                <span>${t('re_sell_price')}:</span>
                                <span>${formatCurrency(stats.realEstate.totalSales || 0)}</span>
                            </div>
                            <div style="height: 1px; background: rgba(56, 189, 248, 0.3); margin: 4px 0;"></div>
                            <div style="display: flex; justify-content: space-between; margin: 2px 0; font-size: 0.8rem; font-weight: 600;">
                                <span style="color: #38bdf8;">${t('re_net_profit')}:</span>
                                <strong style="color: ${realEstateProfit >= 0 ? '#4ade80' : '#f87171'};">
                                    ${formatCurrency(realEstateProfit)} 
                                    ${stats.realEstate.totalPurchases > 0 ? `(${((realEstateProfit / stats.realEstate.totalPurchases) * 100).toFixed(1)}%)` : ''}
                                </strong>
                            </div>
                        </div>
                        ` : ''}
                        <div style="height: 1px; background: #334155; margin: 6px 0;"></div>
                        <div style="display: flex; justify-content: space-between; margin: 4px 0; font-size: 0.9rem; font-weight: 600;">
                            <span>${t('gross_income')}:</span>
                            <strong style="color: #4ade80;">${formatCurrency(totalIncome)}</strong>
                        </div>
                    </div>
                    
                    <div style="background: rgba(30, 41, 59, 0.5); border: 1px solid #334155; border-radius: 8px; padding: 10px; margin: 8px auto; max-width: 400px;">
                        <h3 style="color: #f87171; margin: 0 0 8px 0; font-size: 0.9rem; font-weight: 600;">💸 ${t('total_life_expenses')}</h3>
                        <div style="display: flex; justify-content: space-between; margin: 4px 0; font-size: 0.8rem;">
                            <span>🛍️ ${t('lifestyle')}:</span>
                            <strong style="color: #f87171;">${formatCurrency(stats.totalExpenses.lifestyle)}</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin: 4px 0; font-size: 0.8rem;">
                            <span>🏠 ${t('housing')}:</span>
                            <strong style="color: #f87171;">${formatCurrency(stats.totalExpenses.housing)}</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin: 4px 0; font-size: 0.8rem;">
                            <span>🎓 ${t('education_label')}:</span>
                            <strong style="color: #f87171;">${formatCurrency(stats.totalExpenses.education)}</strong>
                        </div>
                        <div style="height: 1px; background: #334155; margin: 6px 0;"></div>
                        <div style="display: flex; justify-content: space-between; margin: 4px 0; font-size: 0.9rem; font-weight: 600;">
                            <span>${t('total_expenses_label')}:</span>
                            <strong style="color: #f87171;">${formatCurrency(totalExpenses)}</strong>
                        </div>
                    </div>
                    
                    <div style="background: rgba(30, 41, 59, 0.5); border: 1px solid #334155; border-radius: 8px; padding: 10px; margin: 8px auto; max-width: 400px;">
                        <h3 style="color: #fbbf24; margin: 0 0 8px 0; font-size: 0.9rem; font-weight: 600;">📋 ${t('taxes_paid_title')}</h3>
                        <div style="display: flex; justify-content: space-between; margin: 4px 0; font-size: 0.9rem; font-weight: 600;">
                            <span>${t('total_paid_state')}:</span>
                            <strong style="color: #fbbf24;">${formatCurrency(stats.totalTaxesPaid)}</strong>
                        </div>
                    </div>
                    
                    <p style="color: #38bdf8; margin: 12px 0 0 0; font-size: 0.9rem;">
                        ${t('endgame_retry')}
                    </p>
                </div>
            `;

    UI.showModal(
        t('endgame_death_title'),
        summary,
        [{ text: `🔄 ${t('endgame_reset_title')}`, style: 'primary', fn: resetGame }],
        true
    );
}

function resetGame() {
    UI.showModal(`⚠️ ${t('endgame_reset_title')}`,
        `<div style="text-align:center;">
            <div style="font-size:3rem; margin-bottom:10px;">🤯</div>
            <p style="color:#cbd5e1; margin-bottom:15px; font-size:1.1rem;">${t('endgame_reset_msg')}</p>
            <div style="background:rgba(239, 68, 68, 0.1); border:1px solid rgba(239, 68, 68, 0.3); padding:15px; border-radius:10px;">
                <p style="color:#ef4444; font-weight:800; margin:0; text-transform:uppercase;">⛔ ${t('msg_irreversible_action')}</p>
            </div>
        </div>
        `,
        [
            { text: t('cancel'), style: 'secondary', fn: null },
            {
                text: t('endgame_reset_confirm'), style: 'danger', fn: () => {
                    localStorage.removeItem('gameState');
                    localStorage.removeItem('playerName');
                    location.reload();
                }
            }
        ], true
    );
}




function getJobTranslation(jobTitle) {
    if (!jobTitle) return '';

    // Unemployed
    if (jobTitle === 'Desempleado' || jobTitle === 'Unemployed') {
        return t('unemployed');
    }

    // CEO/Founder titles
    if (jobTitle.includes('CEO de')) {
        return jobTitle.replace('CEO de', t('ceo_of') || 'CEO of');
    }

    if (jobTitle.includes('Ex-Fundador')) {
        return t('ex_founder_unemployed') || jobTitle;
    }

    // Map
    if (typeof JOB_TRANSLATION_MAP !== 'undefined') {
        const key = JOB_TRANSLATION_MAP[jobTitle];
        if (key) {
            const translated = t(key);
            if (translated !== key) return translated;
        }
    }

    return jobTitle;
}

function getCourseTranslation(courseId) {
    if (!courseId) return { name: '', desc: '' };
    // Translate or fallback
    const nameKey = `course_${courseId}`;
    const descKey = `course_${courseId}_desc`;

    // Exists check
    const name = t(nameKey);
    const desc = t(descKey);

    const hasName = name !== nameKey;

    return {
        name: hasName ? name : null, // Fallback trigger
        desc: hasName ? desc : null
    };
}

// State
// Global State
const GameState = {
    playerName: 'Inversor',
    month: 1,
    year: 1,
    cash: 500,
    netWorth: 500,
    salary: 0,
    expenses: 0,
    lifestyle: {
        housing: 'parents', // 0
        food: 'scraps', // 0 (Mama)
        transport: 'walk', // 0
        leisure: 'free', // 0
        clothes: 'donations' // 0
    },
    jobTitle: 'Desempleado',
    inventory: {
        stocks: [],
        realEstate: []
    },
    loans: [],
    // Phase 2
    age: 16,
    education: ['ESO'],
    currentGigs: [], // Monthly gigs
    isStudying: false,
    currentCourse: null, // { name, remaining, cost }
    history: {
        netWorth: [500],
        cash: [500],
        assets: [0],
        debt: [0],
        labels: ['Inicio']
    },
    tutorialState: {
        initial: false,
        education: false,
        job: false,
        market: false,
        realEstate: false,
        company: false,
        forceHousing: false
    },

    // Tutorial System
    tutorialStep: 0,  // 0: Start, 1-8: Steps, 99: Done
    tutorialFlags: {
        educationChosen: false,
        wentToWorkFirst: false,
        acceptedFirstGig: false,
        completedFirstDegree: false,
        wentToWorkAfterDegree: false,
        acceptedFirstRealJob: false,
        independent: false,
        tutorialComplete: false,
        momKickedOut: false // Permanent
    },

    // Taxable Income
    currentYearIncome: {
        salary: 0,
        rental: 0,
        stocks: 0,
        company: 0
    },
    previousYearIncome: {
        salary: 0,
        rental: 0,
        stocks: 0,
        company: 0
    },
    taxWarningShown: false,

    // Expropriation
    expropriation500kDone: false,
    expropriation1MDone: false,
    expropriation3MDone: false,

    // Lifetime Stats
    lifetimeStats: {
        totalIncome: { salary: 0, rental: 0, stocks: 0, company: 0 },
        totalExpenses: { lifestyle: 0, housing: 0, education: 0 },
        totalTaxesPaid: 0,
        realEstate: {
            totalPurchases: 0,  // Purchases
            totalSales: 0,      // Sales
            propertiesSold: 0   // Sold Count
        }
    },

    // Job Persistence
    currentCareerPath: 'none',
    monthsInCurrentJob: 0,
    monthsSinceLastRaise: 0,

    // Unlocks
    totalMonths: 0,
    expensesUnlocked: false,
    stockUnlocked: false, // >30k NW
    bankUnlocked: false, // Y3 M6
    // Cache
    _netWorthCache: null,
    _netWorthCacheTurn: -1,
};

// Calc Net Worth
function updateNetWorth(forceRecalc = false) {
    const currentTurn = GameState.year * 12 + GameState.month;

    // Check Cache
    if (!forceRecalc && GameState._netWorthCache !== null && GameState._netWorthCacheTurn === currentTurn) {
        return GameState._netWorthCache;
    }

    let assets = GameState.cash;
    GameState.inventory.stocks.forEach(stock => {
        const liveStock = StockMarket.getStock(stock.symbol);
        const currentPrice = liveStock ? liveStock.price : stock.avgPrice;
        assets += stock.quantity * currentPrice;
    });
    GameState.inventory.realEstate.forEach(property => {
        assets += property.price;
    });
    let liabilities = 0;
    GameState.loans.forEach(loan => {
        liabilities += loan.remainingBalance;
    });

    GameState.netWorth = assets - liabilities;

    // Update Cache
    GameState._netWorthCache = GameState.netWorth;
    GameState._netWorthCacheTurn = currentTurn;

    return GameState.netWorth;
}

// Chart
const ChartModule = {
    instance: null,

    drawChart(canvasId, history, visibility = { netWorth: true, cash: true, debt: true }) {
        // Check Lib
        if (typeof Chart === 'undefined') {
            console.warn('Chart.js not loaded - skipping chart rendering');
            return;
        }

        const ctx = document.getElementById(canvasId).getContext('2d');

        // Reset Canvas
        if (this.instance) {
            this.instance.destroy();
        }

        // Gradients
        const gradientNW = ctx.createLinearGradient(0, 0, 0, 400);
        gradientNW.addColorStop(0, 'rgba(250, 204, 21, 0.5)'); // Yellow/Gold
        gradientNW.addColorStop(1, 'rgba(250, 204, 21, 0.0)');

        const gradientCash = ctx.createLinearGradient(0, 0, 0, 400);
        gradientCash.addColorStop(0, 'rgba(74, 222, 128, 0.4)'); // Green
        gradientCash.addColorStop(1, 'rgba(74, 222, 128, 0.0)');

        const datasets = [];

        if (visibility.netWorth) {
            datasets.push({
                label: 'P/n',
                data: history.netWorth,
                borderColor: '#facc15',
                backgroundColor: gradientNW,
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 0
            });
        }

        if (visibility.cash) {
            datasets.push({
                label: t('chart_cash'),
                data: history.cash,
                borderColor: '#4ade80', // Green
                backgroundColor: gradientCash,
                borderWidth: 2,
                borderDash: [5, 5],
                fill: true,
                tension: 0.4,
                pointRadius: 0
            });
        }

        if (visibility.debt) {
            datasets.push({
                label: t('chart_debt'),
                data: history.debt,
                borderColor: '#f87171', // Red
                borderWidth: 2,
                fill: false,
                tension: 0.4,
                pointRadius: 0
            });
        }

        this.instance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: history.labels,
                datasets: datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                plugins: {
                    legend: {
                        display: false // Custom Legend
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        backgroundColor: 'rgba(15, 23, 42, 0.9)',
                        titleColor: '#f1f5f9',
                        bodyColor: '#cbd5e1',
                        borderColor: '#334155',
                        borderWidth: 1
                    }
                },
                scales: {
                    x: {
                        grid: { color: '#334155' },
                        ticks: { color: '#94a3b8', maxTicksLimit: 8 }
                    },
                    y: {
                        grid: { color: '#334155' },
                        ticks: {
                            color: '#94a3b8',
                            callback: (val) => formatCurrency(val, 0) // Integer
                        }
                    }
                }
            }
        });
    },
    drawStockChart(canvasId, stock, timeframe) {
        // Check Lib
        if (typeof Chart === 'undefined') {
            console.warn('Chart.js not loaded - skipping stock chart rendering');
            return;
        }

        const ctx = document.getElementById(canvasId).getContext('2d');
        if (this.instanceStock) {
            this.instanceStock.destroy();
        }

        let data = stock.history || [];
        let labels = Array.from({ length: data.length }, (_, i) => i);

        // Limit data
        if (timeframe !== 999) { // 999: Max
            data = data.slice(-timeframe);
            labels = labels.slice(-timeframe);
        }

        if (data.length === 0) return;

        const startPrice = data[0];
        const endPrice = data[data.length - 1];
        const isPositive = endPrice >= startPrice;
        const color = isPositive ? '#4ade80' : '#f87171';
        const bgColor = isPositive ? 'rgba(74, 222, 128, 0.1)' : 'rgba(248, 113, 113, 0.1)';

        this.instanceStock = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    borderColor: color,
                    backgroundColor: bgColor,
                    borderWidth: 2,
                    fill: true,
                    pointRadius: 0,
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false }, tooltip: { mode: 'index', intersect: false } },
                scales: {
                    x: { display: false },
                    y: { display: false } // Minimalist
                    // Y ticks enabled
                }
            }
        });
    }
};

// Persistence
const PersistenceModule = {
    SAVE_KEY_AUTO: 'inversion_game_auto',
    SAVE_KEY_SLOT1: 'inversion_game_slot1',
    SAVE_KEY_SLOT2: 'inversion_game_slot2',
    SAVE_KEY: 'inversion_game_auto', // Legacy Default

    // Get Saves
    getAllSaves() {
        const saves = [];
        const keys = [
            { key: this.SAVE_KEY_AUTO, name: 'Auto-Guardado', isAuto: true },
            { key: this.SAVE_KEY_SLOT1, name: 'Slot 1', isAuto: false },
            { key: this.SAVE_KEY_SLOT2, name: 'Slot 2', isAuto: false }
        ];

        keys.forEach(slot => {
            const data = localStorage.getItem(slot.key);
            if (data) {
                try {
                    const parsed = JSON.parse(data);
                    saves.push({
                        key: slot.key,
                        name: slot.name,
                        isAuto: slot.isAuto,
                        data: parsed,
                        playerName: parsed.playerName || t('unknown'),
                        cash: parsed.cash || 0,
                        year: parsed.year || 1,
                        month: parsed.month || 1,
                        savedAt: parsed.savedAt || null
                    });
                } catch (e) {
                    console.error('Error parsing save:', slot.key, e);
                }
            }
        });

        return saves;
    },

    // Save Slot
    saveToSlot(slotKey) {
        try {
            const dataToSave = {
                ...GameState,
                savedAt: new Date().toISOString(),
                language: I18n.currentLang // Save Lang
            };
            const data = JSON.stringify(dataToSave);
            localStorage.setItem(slotKey, data);
            return { success: true, message: t('msg_save_success') };
        } catch (e) {
            return { success: false, message: t('msg_save_error', { error: e.message }) };
        }
    },

    // Load Slot
    loadFromSlot(slotKey) {
        try {
            const data = localStorage.getItem(slotKey);
            if (!data) return { success: false, message: t('msg_load_no_save') };
            const loadedState = JSON.parse(data);

            // Restore Lang
            if (loadedState.language) {
                I18n.setLanguage(loadedState.language);
                // Refresh Welcome
                if (window.updateWelcomeScreen) window.updateWelcomeScreen();
            }

            Object.assign(GameState, loadedState);
            return { success: true, message: t('welcome_back_title') + ', ' + GameState.playerName };
        } catch (e) {
            return { success: false, message: t('msg_load_error', { error: e.message }) };
        }
    },

    // Auto-save
    saveGame() {
        return this.saveToSlot(this.SAVE_KEY_AUTO);
    },

    // Load Auto
    loadGame() {
        return this.loadFromSlot(this.SAVE_KEY_AUTO);
    },

    // Check Exists
    checkSave() {
        return this.getAllSaves().length > 0;
    },

    // Delete Slot
    deleteSlot(slotKey) {
        localStorage.removeItem(slotKey);
    },

    // Clear All
    resetGame() {
        localStorage.removeItem(this.SAVE_KEY_AUTO);
        localStorage.removeItem(this.SAVE_KEY_SLOT1);
        localStorage.removeItem(this.SAVE_KEY_SLOT2);
        location.reload();
    },

    // Exit
    exitGame() {
        UI.showModal(
            t('exit_game_title') || 'Salir del Juego',
            `<div style="text-align:center; padding: 10px;">
                <p style="margin-bottom: 10px;">${t('exit_game_confirm') || '¿Seguro que quieres cerrar el juego?'}</p>
                <p style="color: #ef4444; font-size: 0.9em;">⚠️ ${t('exit_game_warning') || 'El progreso no guardado se perderá.'}</p>
            </div>`,
            [
                { text: t('cancel'), style: 'secondary', fn: null },
                {
                    text: t('exit_btn') || 'Cerrar Juego',
                    style: 'danger',
                    fn: () => { window.close(); }
                }
            ]
        );
    },

    // Save Modal
    showSaveModal() {
        const saves = this.getAllSaves();
        const slot1 = saves.find(s => s.key === this.SAVE_KEY_SLOT1);
        const slot2 = saves.find(s => s.key === this.SAVE_KEY_SLOT2);

        const formatSlot = (slot, key, name) => {
            if (slot) {
                return `
                    <div class="save-slot-card" data-key="${key}">
                        <div class="slot-header">
                            <span class="slot-name">${name}</span>
                            <span class="slot-date">${slot.savedAt ? new Date(slot.savedAt).toLocaleString('es-ES') : t('no_date')}</span>
                        </div>
                        <div class="slot-info">
                            <span>🎮 ${slot.playerName}</span>
                            <span>💰 ${formatCurrency(slot.cash)}</span>
                            <span>📅 ${t('year')} ${slot.year}, ${t('month')} ${slot.month}</span>
                        </div>
                        <button class="btn-save-slot" onclick="PersistenceModule.confirmSaveToSlot('${key}')">💾 ${t('save_overwrite_btn')}</button>
                    </div>
                `;
            } else {
                return `
                    <div class="save-slot-card empty" data-key="${key}">
                        <div class="slot-header">
                            <span class="slot-name">${name}</span>
                            <span class="slot-empty">${t('save_empty')}</span>
                        </div>
                        <button class="btn-save-slot" onclick="PersistenceModule.saveAndNotify('${key}')">💾 ${t('save_here')}</button>
                    </div>
                `;
            }
        };

        const msg = `
            <style>
                .save-slots-container { padding: 10px 0; }
                .save-slot-card {
                    background: rgba(15, 23, 42, 0.8);
                    border: 1px solid #334155;
                    border-radius: 12px;
                    padding: 15px;
                    margin-bottom: 12px;
                }
                .save-slot-card.empty {
                    border-style: dashed;
                    opacity: 0.7;
                }
                .slot-header {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 10px;
                }
                .slot-name {
                    font-weight: 700;
                    color: #38bdf8;
                }
                .slot-date {
                    font-size: 0.8rem;
                    color: #94a3b8;
                }
                .slot-empty {
                    font-size: 0.8rem;
                    color: #64748b;
                    font-style: italic;
                }
                .slot-info {
                    display: flex;
                    gap: 15px;
                    font-size: 0.85rem;
                    color: #e2e8f0;
                    margin-bottom: 12px;
                    flex-wrap: wrap;
                }
                .btn-save-slot {
                    width: 100%;
                    padding: 10px;
                    background: linear-gradient(135deg, #10b981, #059669);
                    border: none;
                    border-radius: 8px;
                    color: white;
                    font-weight: 600;
                    cursor: pointer;
                    transition: transform 0.1s;
                }
                .btn-save-slot:hover {
                    transform: scale(1.02);
                }
            </style>
            <div class="save-slots-container">
                ${formatSlot(slot1, this.SAVE_KEY_SLOT1, t('save_slot_1'))}
                ${formatSlot(slot2, this.SAVE_KEY_SLOT2, t('save_slot_2'))}
            </div>
        `;

        UI.showModal(t('msg_save_title'), msg, [
            { text: t('close'), style: 'secondary', fn: null }
        ]);
    },

    confirmSaveToSlot(slotKey) {
        UI.showModal(t('msg_overwrite_title'), `
            <div style="text-align:center;">
                <div style="font-size:3rem; margin-bottom:10px;">💾</div>
                <p style="color:#cbd5e1; margin-bottom:15px;">${t('save_overwrite_msg')}</p>
                <p style="color:#94a3b8; font-size:0.85rem;">${t('save_overwrite_warning')}</p>
            </div>
        `, [
            { text: t('cancel'), style: 'secondary', fn: null },
            { text: t('confirm'), style: 'primary', fn: () => PersistenceModule.saveAndNotify(slotKey) }
        ], true);
    },


    saveAndNotify(slotKey) {
        const result = this.saveToSlot(slotKey);

        document.querySelector('.custom-modal-overlay')?.remove();
        UI.showToast(result.success ? t('msg_saved_title') : t('msg_error_title'), result.message, result.success ? 'success' : 'error');
    }
};

// Balance
const GameBalance = {
    // Housing Tier (0-12)
    getHousingTier() {
        if (!GameState.lifestyle || !GameState.lifestyle.housing) return 0;
        const h = GameState.lifestyle.housing;

        const tiers = {
            'parents': 0,
            'sofa': 1,
            'pension': 2,
            'room_cheap': 3,
            'room': 4,
            'room_suit': 5,
            'basement': 6,
            'studio': 7,
            'apt_out': 8,
            'apartment': 9,
            'loft': 10,
            'penthouse': 11,
            'mansion': 12
        };
        return tiers[h] !== undefined ? tiers[h] : 0;
    },

    checkLifestyleReq(req) {
        if (!req) return { success: true };

        if (req.housing !== undefined) {
            const currentH = this.getHousingTier();
            if (currentH < req.housing) return { success: false, message: `Necesitas vivienda Nivel ${req.housing + 1}.` };
        }

        // Legacy vehicle/transport
        const reqTransport = req.transport !== undefined ? req.transport : req.vehicle;
        if (reqTransport !== undefined) {
            const currentV = this.getCombinedTier('transport'); // Transport Category
            if (currentV < reqTransport) return { success: false, message: `Necesitas transporte Nivel ${reqTransport + 1}.` };
        }

        if (req.clothes !== undefined) {
            const currentC = this.getCombinedTier('clothes');
            if (currentC < req.clothes) return { success: false, message: `Necesitas ropa Nivel ${req.clothes + 1}.` };
        }
        if (req.leisure !== undefined) {
            const currentL = this.getCombinedTier('leisure');
            if (currentL < req.leisure) return { success: false, message: `Necesitas ocio Nivel ${req.leisure + 1}.` };
        }
        if (req.food !== undefined) {
            const currentF = this.getCombinedTier('food');
            if (currentF < req.food) return { success: false, message: `Necesitas alimentación Nivel ${req.food + 1}.` };
        }
        return { success: true };
    },

    getCombinedTier(category) {
        // Map keys
        let lifestyleKey = category;
        if (category === 'vehicle') lifestyleKey = 'transport'; // Alias
        if (!GameState.lifestyle || !GameState.lifestyle[lifestyleKey]) return 0;
        const id = GameState.lifestyle[lifestyleKey];

        // Matches LifestyleModule
        const orders = {
            vehicle: ['walk', 'skate', 'bike', 'scooter_el', 'public', 'moto_125', 'moto_big', 'car_old', 'car_new', 'car_premium', 'car_sport', 'supercar', 'chofer'],
            transport: ['walk', 'skate', 'bike', 'scooter_el', 'public', 'moto_125', 'moto_big', 'car_old', 'car_new', 'car_premium', 'car_sport', 'supercar', 'chofer'], // Alias
            clothes: ['donations', 'second_hand', 'low_cost', 'basic', 'fast_fashion', 'sport', 'boutique', 'tech', 'suits', 'designer', 'collector'],
            leisure: ['free', 'library', 'internet', 'basic', 'hobbies', 'active', 'clubbing', 'weekend', 'vip', 'travel', 'exclusive', 'yacht'],
            food: ['scraps', 'noodles', 'junk', 'cooking_basic', 'cooking', 'menu', 'bio', 'delivery', 'rest_nice', 'chef', 'michelin']
        };



        const usedKey = orders[category] ? category : lifestyleKey;

        if (!orders[usedKey]) return 0;
        const idx = orders[usedKey].indexOf(id);
        return idx !== -1 ? idx : 0;
    },

    getLimits() {
        const tier = this.getHousingTier();

        // Stock Caps
        const stockCaps = [
            5000,       // Tier 0 (Parents)
            7500,       // Tier 1 (Sofa)
            12500,      // Tier 2 (Pension)
            20000,      // Tier 3 (Hab Interior)
            30000,      // Tier 4 (Hab Shared)
            45000,      // Tier 5 (Hab Suite)
            75000,      // Tier 6 (Basement)
            125000,     // Tier 7 (Studio)
            250000,     // Tier 8 (Apt Out)
            500000,     // Tier 9 (Apt Center)
            1250000,    // Tier 10 (Loft)
            2500000,    // Tier 11 (Penthouse)
            Infinity    // Tier 12 (Mansion)
        ];

        // Real Estate Cap (Max owned properties)
        const reCaps = [
            2,  // Tier 0
            2,  // Tier 1
            2,  // Tier 2
            3,  // Tier 3
            4,  // Tier 4
            4,  // Tier 5
            5,  // Tier 6
            6,  // Tier 7
            8,  // Tier 8
            12, // Tier 9
            18, // Tier 10
            25, // Tier 11
            Infinity // Tier 12
        ];

        return {
            stockCap: stockCaps[tier],
            reCap: reCaps[tier],
            tier: tier
        };
    }
};

// --- Stock Market ---
const StockMarket = {
    stocks: [
        { symbol: 'SP500', name: 'S&P 500', price: 4500.00, trend: 0.00, history: [], volatility: 0.08, type: 'index' },
        { symbol: 'NDX', name: 'Nasdaq 100', price: 15500.00, trend: 0.00, history: [], volatility: 0.12, type: 'index' },
        { symbol: 'TEL', name: 'Telefónica', price: 4.00, trend: 0.00, history: [], volatility: 0.10, earnings: 0.35 },
        { symbol: 'SAN', name: 'Santander', price: 3.50, trend: 0.00, history: [], volatility: 0.08, earnings: 0.30 },
        { symbol: 'IBE', name: 'Iberdrola', price: 11.00, trend: 0.00, history: [], volatility: 0.06, earnings: 0.95 },
        { symbol: 'ITX', name: 'Inditex', price: 30.00, trend: 0.00, history: [], volatility: 0.12, earnings: 2.80 },
        { symbol: 'REP', name: 'Repsol', price: 14.00, trend: 0.00, history: [], volatility: 0.15, earnings: 1.40 },
        { symbol: 'HOME', name: 'Home Asia', price: 50.00, trend: 0.00, history: [], volatility: 0.14, earnings: 4.20 },
        { symbol: 'RISU', name: 'La Risu', price: 20.00, trend: 0.00, history: [], volatility: 0.18, earnings: 1.75 },
        { symbol: 'VRDS', name: 'Los Verdes', price: 12.00, trend: 0.00, history: [], volatility: 0.11, earnings: 1.10 }
    ],

    init() {
        // Initialize history for graph
        this.stocks.forEach(s => {
            s.history = [s.price];
            // Add some fake history
            for (let i = 0; i < 10; i++) {
                s.history.unshift(s.price * (1 - (Math.random() * 0.1 - 0.05)));
            }
        });
    },

    getStock(symbol) {
        return this.stocks.find(s => s.symbol === symbol);
    },

    assignAnnualTargets() {
        // Filter stocks
        const regularStocks = this.stocks.filter(s => !s.type || s.type !== 'index');

        // Shuffle companies randomly
        const shuffled = [...regularStocks].sort(() => Math.random() - 0.5);

        // Assign performance tiers
        // Tier 1
        shuffled[0].annualTarget = 0.60 + Math.random() * 0.20;
        shuffled[1].annualTarget = 0.60 + Math.random() * 0.20;

        // Tier 2: 2 companies with 10-20% annual return
        shuffled[2].annualTarget = 0.10 + Math.random() * 0.10;
        shuffled[3].annualTarget = 0.10 + Math.random() * 0.10;

        // Tier 3: 2 companies with -10% to 1% annual return
        shuffled[4].annualTarget = -0.10 + Math.random() * 0.11;
        shuffled[5].annualTarget = -0.10 + Math.random() * 0.11;

        // Tier 4: 1 company with -20% to -10% annual return
        shuffled[6].annualTarget = -0.20 + Math.random() * 0.10;

        // Tier 5: 1 company with -50% to -30% annual return
        shuffled[7].annualTarget = -0.50 + Math.random() * 0.20;

        // Reset progress tracking for all companies
        regularStocks.forEach(stock => {
            stock.monthsInYear = 0;
            stock.yearStartPrice = stock.price;
        });
    },

    nextTurn() {
        this.stocks.forEach(stock => {
            let totalChange = 0;

            if (stock.type === 'index') {
                // Index Logic
                const targetMonthlyReturn = 0.0072; // ~9% APY
                const fluctuation = (Math.random() * stock.volatility) - (stock.volatility / 2);
                totalChange = targetMonthlyReturn + fluctuation;
            } else {
                // Regular stock logic with annual targets
                if (!stock.annualTarget) {
                    // Initialize if not set (first time)
                    stock.annualTarget = 0;
                    stock.monthsInYear = 0;
                    stock.yearStartPrice = stock.price;
                }

                // Calculate monthly target to reach annual goal
                const monthlyTarget = stock.annualTarget / 12;

                // Add randomness around the monthly target (±30% of volatility)
                const randomness = (Math.random() * stock.volatility) - (stock.volatility / 2);

                totalChange = monthlyTarget + (randomness * 0.3);

                // Occasional random events (5% chance)
                if (Math.random() < 0.05) {
                    const event = Math.random() < 0.5 ? -0.15 : 0.15;
                    totalChange += event;
                }

                stock.monthsInYear++;
            }

            stock.price = stock.price * (1 + totalChange);
            stock.trend = totalChange;
            if (stock.price < 0.10) stock.price = 0.10;

            // Update History
            stock.history.push(stock.price);
            if (stock.history.length > 20) stock.history.shift();
        });
    },

    buyStock(symbol, qty) {
        const stock = this.getStock(symbol);
        if (!stock) return { success: false, message: t('stock_not_found') };

        const cost = stock.price * qty;

        // Calculate current portfolio value
        let currentPortfolioValue = 0;
        GameState.inventory.stocks.forEach(p => {
            const s = this.getStock(p.symbol);
            if (s) {
                currentPortfolioValue += p.quantity * s.price;
            }
        });

        // Limit
        const limits = GameBalance.getLimits();
        const portfolioLimit = limits.stockCap;

        if (currentPortfolioValue >= portfolioLimit) {
            return { success: false, message: t('stock_limit_reached_msg').replace('{limit}', formatCurrency(portfolioLimit)) };
        }

        if (currentPortfolioValue + cost > portfolioLimit) {
            return { success: false, message: t('stock_limit_exceeded_msg').replace('{limit}', formatCurrency(portfolioLimit)) };
        }

        if (GameState.cash < cost) return { success: false, message: t('stock_insufficient_funds') };

        GameState.cash -= cost;
        let pItem = GameState.inventory.stocks.find(s => s.symbol === symbol);
        if (pItem) {
            const totalCost = (pItem.quantity * pItem.avgPrice) + cost;
            pItem.quantity += qty;
            pItem.avgPrice = totalCost / pItem.quantity;
        } else {
            GameState.inventory.stocks.push({ symbol: symbol, name: stock.name, quantity: qty, avgPrice: stock.price });
        }
        return { success: true, message: t('stock_buy_detail', { qty: qty, symbol: symbol, price: formatCurrency(cost) }) };
    },

    sellStock(symbol, qty) {
        const stock = this.getStock(symbol);
        if (!stock) return { success: false, message: t('stock_not_found') };
        let pItem = GameState.inventory.stocks.find(s => s.symbol === symbol);
        if (!pItem || pItem.quantity < qty) return { success: false, message: t('stock_not_enough') };

        const saleValue = stock.price * qty;
        const purchaseCost = pItem.avgPrice * qty;
        const profit = saleValue - purchaseCost;

        GameState.cash += saleValue;

        // Track stock gains for taxes (only if profit)
        if (profit > 0) {
            if (!GameState.currentYearIncome) {
                GameState.currentYearIncome = { salary: 0, rental: 0, stocks: 0, company: 0 };
            }
            GameState.currentYearIncome.stocks += profit;

            // Lifetime tracking - DEFENSIVE INIT
            if (!GameState.lifetimeStats) {
                GameState.lifetimeStats = {
                    totalIncome: { salary: 0, rental: 0, stocks: 0, company: 0 },
                    totalExpenses: { lifestyle: 0, housing: 0, education: 0 },
                    totalTaxesPaid: 0,
                    realEstate: {
                        totalPurchases: 0,
                        totalSales: 0,
                        propertiesSold: 0
                    }
                };
            }
            GameState.lifetimeStats.totalIncome.stocks += profit;
        }
        pItem.quantity -= qty;
        if (pItem.quantity <= 0) {
            GameState.inventory.stocks = GameState.inventory.stocks.filter(s => s.symbol !== symbol);
        }
        return { success: true, message: t('stock_sell_detail', { qty: qty, symbol: symbol, price: formatCurrency(saleValue) }) };
    }
};

const Portfolio = {
    buy(stockSymbol, quantity, gameState) {
        const stock = StockMarket.getStock(stockSymbol);
        const cost = stock.price * quantity;
        const commission = cost * 0.005;
        const totalCost = cost + commission;
        if (gameState.cash >= totalCost) {
            gameState.cash -= totalCost;
            const existing = gameState.inventory.stocks.find(s => s.symbol === stockSymbol);
            if (existing) {
                const totalValue = (existing.quantity * existing.avgPrice) + cost;
                existing.quantity += quantity;
                existing.avgPrice = totalValue / existing.quantity;
            } else {
                gameState.inventory.stocks.push({
                    symbol: stockSymbol,
                    name: stock.name,
                    quantity: quantity,
                    avgPrice: stock.price
                });
            }
            return { success: true, message: t('stock_buy_success', { qty: quantity, name: stock.name }) };
        }
        return { success: false, message: t('not_enough_money') };
    },
    sell(stockSymbol, quantity, gameState) {
        const existing = gameState.inventory.stocks.find(s => s.symbol === stockSymbol);
        if (existing && existing.quantity >= quantity) {
            const stock = StockMarket.getStock(stockSymbol);
            const saleValue = stock.price * quantity;
            const purchaseCost = existing.avgPrice * quantity;
            const profit = saleValue - purchaseCost;
            const commission = saleValue * 0.005;
            const totalReturn = saleValue - commission;

            gameState.cash += totalReturn;

            // Track stock gains for taxes (only if profit, after commission)
            const netProfit = profit - commission;
            if (netProfit > 0) {
                if (!GameState.currentYearIncome) {
                    GameState.currentYearIncome = { salary: 0, rental: 0, stocks: 0, company: 0 };
                }
                GameState.currentYearIncome.stocks += netProfit;

                // Lifetime tracking - DEFENSIVE INIT
                if (!GameState.lifetimeStats) {
                    GameState.lifetimeStats = {
                        totalIncome: { salary: 0, rental: 0, stocks: 0, company: 0 },
                        totalExpenses: { lifestyle: 0, housing: 0, education: 0 },
                        totalTaxesPaid: 0,
                        realEstate: {
                            totalPurchases: 0,
                            totalSales: 0,
                            propertiesSold: 0
                        }
                    };
                }
                GameState.lifetimeStats.totalIncome.stocks += netProfit;
            }

            existing.quantity -= quantity;
            if (existing.quantity === 0) {
                gameState.inventory.stocks = gameState.inventory.stocks.filter(s => s.symbol !== stockSymbol);
            }
            return { success: true, message: t('stock_sell_success', { qty: quantity, name: stock.name }) };
        }
        return { success: false, message: t('stock_not_enough') };
    }
};

// --- Bank ---
const Bank = {
    INTEREST_RATES: {
        personal: 0.12,
        business: 0.12,
        mortgage: 0.04
    },
    getMaxLoanAmount() {
        // Business Loan Logic
        if (GameState.company) {
            const co = GameState.company;
            const typeConf = CompanyModule.businessTypes[co.typeId];
            const openCost = typeConf.cost;

            let avgRev = co.revenueLastMonth || 0;
            if (co.financialHistory && co.financialHistory.length > 0) {
                const last6 = co.financialHistory.slice(-6);
                const sum = last6.reduce((acc, curr) => acc + curr.revenue, 0);
                avgRev = sum / last6.length;
            }

            const semiannualRev = avgRev * 6;
            return Math.floor(openCost + (semiannualRev * 2));
        }

        // Personal Loan Logic
        const netIncome = GameState.salary - (GameState.expenses * 0.5);
        const maxMonthlyPayment = Math.max(0, netIncome) * 0.40;
        const r = this.INTEREST_RATES.personal / 12;
        const n = 60;
        const maxPrincipal = (maxMonthlyPayment * (1 - Math.pow(1 + r, -n))) / r;
        const absoluteCap = Math.max(5000, GameState.netWorth * 2);
        return Math.min(Math.floor(maxPrincipal), absoluteCap);
    },

    createLoan(amount, isBusiness = false) {
        const annualRate = isBusiness ? this.INTEREST_RATES.business : this.INTEREST_RATES.personal;
        const monthlyRate = annualRate / 12;
        const termMonths = 60; // 5 years fixed for personal/business loans
        const monthlyPayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -termMonths));
        const loan = {
            id: Date.now(),
            type: isBusiness ? t('loan_type_business') : t('loan_type_personal'),
            principal: amount,
            termMonths: termMonths,
            remainingMonths: termMonths,
            monthlyPayment: monthlyPayment,
            interestRate: annualRate,
            remainingBalance: amount
        };
        GameState.loans.push(loan);
        GameState.cash += amount;
        return { success: true, message: `Préstamo concedido. Cuota: ${monthlyPayment.toFixed(2)}€/mes` };
    },

    takeLoan(amount, years) {
        if (amount <= 0) return { success: false, message: t('loan_amount_invalid') };

        const max = this.getMaxLoanAmount();
        // Exclude mortgages from personal credit limit check
        const currentDebt = GameState.loans
            .filter(l => !l.isMortgage)
            .reduce((sum, l) => sum + l.remainingBalance, 0);

        const available = Math.max(0, max - currentDebt);

        if (amount > available) return { success: false, message: `Límite excedido. Te quedan ${formatCurrency(available)} de crédito disponible (Total: ${formatCurrency(max)}).` };

        const isBusiness = !!GameState.company;
        return this.createLoan(amount, isBusiness);
    },

    payLoanPartial(loanId, amount) {
        const loan = GameState.loans.find(l => l.id === loanId);
        if (!loan) return { success: false, message: t('loan_not_found') };
        if (amount <= 0) return { success: false, message: t('msg_amt_invalid') };
        if (GameState.cash < amount) return { success: false, message: t('msg_not_enough_cash') };
        if (amount > loan.remainingBalance) amount = loan.remainingBalance;

        GameState.cash -= amount;
        loan.remainingBalance -= amount;

        if (loan.remainingBalance < 1) {
            // Fully paid
            const idx = GameState.loans.indexOf(loan);
            GameState.loans.splice(idx, 1);
            return { success: true, message: t('loan_paid_full') };
        } else {
            // Recalculate Quota (Reduce Quota, keep term)
            // Formula: P * r / (1 - (1+r)^-n)
            const r = loan.interestRate / 12;
            const n = loan.remainingMonths;
            loan.monthlyPayment = (loan.remainingBalance * r) / (1 - Math.pow(1 + r, -n));

            return { success: true, message: `Amortización realizada. Nueva cuota: ${formatCurrency(loan.monthlyPayment)}/mes` };
        }
    },

    payLoanTotally(loanId) {
        const loanIndex = GameState.loans.findIndex(l => l.id === loanId);
        if (loanIndex === -1) return { success: false, message: t('loan_not_found') };
        const loan = GameState.loans[loanIndex];
        if (GameState.cash >= loan.remainingBalance) {
            GameState.cash -= loan.remainingBalance;
            GameState.loans.splice(loanIndex, 1);
            return { success: true, message: t('loan_paid_full') };
        }
        return { success: false, message: t('loan_insufficient_funds') };
    },
    nextTurn() {
        let totalPaid = 0;
        const loansToRemove = [];
        GameState.loans.forEach((loan, index) => {
            if (GameState.cash >= loan.monthlyPayment) {
                GameState.cash -= loan.monthlyPayment;
                totalPaid += loan.monthlyPayment;

                // Lifetime housing expense tracking (mortgages only)
                if (loan.isMortgage) {
                    if (!GameState.lifetimeStats) {
                        GameState.lifetimeStats = {
                            totalIncome: { salary: 0, rental: 0, stocks: 0, company: 0 },
                            totalExpenses: { lifestyle: 0, housing: 0, education: 0 },
                            totalTaxesPaid: 0,
                            realEstate: {
                                totalPurchases: 0,
                                totalSales: 0,
                                propertiesSold: 0
                            }
                        };
                    }
                    GameState.lifetimeStats.totalExpenses.housing += loan.monthlyPayment;
                }

                const interestPayment = loan.remainingBalance * (loan.interestRate / 12);
                const principalPayment = loan.monthlyPayment - interestPayment;
                loan.remainingBalance -= principalPayment;
                loan.remainingMonths--;
                if (loan.remainingMonths <= 0 || loan.remainingBalance <= 1) {
                    loansToRemove.push(index);
                }
            } else {
                GameState.cash -= loan.monthlyPayment; // Deuda aumenta
            }
        });
        for (let i = loansToRemove.length - 1; i >= 0; i--) {
            GameState.loans.splice(loansToRemove[i], 1);
        }
        return totalPaid;
    }
};

// --- Real Estate ---
const RealEstate = {
    availableProperties: [],
    PROPERTY_TYPES: {
        're_cat_residential': [
            { name: 'prop_res_studio', minM2: 25, maxM2: 35, minPrice: 1500, maxPrice: 3500, icon: '🏢' },
            { name: 'prop_res_1bed', minM2: 40, maxM2: 55, minPrice: 1500, maxPrice: 3000, icon: '🏢' },
            { name: 'prop_res_2bed', minM2: 70, maxM2: 90, minPrice: 1500, maxPrice: 3000, icon: '🏢' },
            { name: 'prop_res_family', minM2: 100, maxM2: 130, minPrice: 1400, maxPrice: 2800, icon: '🏢' },
            { name: 'prop_res_penthouse', minM2: 70, maxM2: 120, minPrice: 2000, maxPrice: 4500, icon: '🏠' }
        ],
        're_cat_touristic': [
            { name: 'prop_tour_studio', minM2: 25, maxM2: 35, minPrice: 2000, maxPrice: 5000, icon: '🏖️' },
            { name: 'prop_tour_1bed', minM2: 45, maxM2: 70, minPrice: 2000, maxPrice: 5000, icon: '🏖️' },
            { name: 'prop_tour_building', minM2: 250, maxM2: 400, minPrice: 1800, maxPrice: 4000, icon: '🏨' },
            { name: 'prop_tour_coliving', minM2: 90, maxM2: 140, minPrice: 1600, maxPrice: 3200, icon: '🛏️' },
            { name: 'prop_tour_hotel', minM2: 800, maxM2: 1500, minPrice: 1500, maxPrice: 4000, icon: '🏨' }
        ],
        're_cat_garages': [
            { name: 'prop_garage_s', minM2: 5, maxM2: 10, minPrice: 800, maxPrice: 2000, icon: '🚗' },
            { name: 'prop_garage_m', minM2: 10, maxM2: 15, minPrice: 800, maxPrice: 2000, icon: '🚗' },
            { name: 'prop_garage_l', minM2: 15, maxM2: 25, minPrice: 800, maxPrice: 2000, icon: '🚗' },
            { name: 'prop_storage_s', minM2: 1, maxM2: 3, minPrice: 600, maxPrice: 1800, icon: '📦' },
            { name: 'prop_storage_box', minM2: 8, maxM2: 15, minPrice: 700, maxPrice: 2000, icon: '📦' }
        ],
        're_cat_commercial': [
            { name: 'prop_retail_s', minM2: 30, maxM2: 60, minPrice: 1000, maxPrice: 4000, icon: '🏪' },
            { name: 'prop_retail_m', minM2: 80, maxM2: 150, minPrice: 1500, maxPrice: 6000, icon: '🏪' },
            { name: 'prop_office', minM2: 80, maxM2: 200, minPrice: 1500, maxPrice: 4000, icon: '💼' },
            { name: 'prop_warehouse_s', minM2: 300, maxM2: 600, minPrice: 400, maxPrice: 1200, icon: '🏭' }
        ],
        're_cat_land': [
            { name: 'prop_land_urban', minM2: 400, maxM2: 800, minPrice: 300, maxPrice: 1500, icon: '🏗️' }
        ],
        're_cat_luxury': [
            { name: 'prop_luxury_flat', minM2: 120, maxM2: 200, minPrice: 8000, maxPrice: 15000, icon: '💎' },
            { name: 'prop_luxury_duplex', minM2: 150, maxM2: 250, minPrice: 9000, maxPrice: 18000, icon: '💎' },
            { name: 'prop_luxury_villa', minM2: 400, maxM2: 800, minPrice: 6000, maxPrice: 12000, icon: '🏰' },
            { name: 'prop_luxury_mansion', minM2: 800, maxM2: 1500, minPrice: 8000, maxPrice: 20000, icon: '🏰' },
            { name: 'prop_luxury_apt_beach', minM2: 120, maxM2: 220, minPrice: 6000, maxPrice: 20000, icon: '🏖️' },
            { name: 'prop_luxury_villa_sea', minM2: 300, maxM2: 700, minPrice: 8000, maxPrice: 25000, icon: '🏰' },
            { name: 'prop_luxury_ultra', minM2: 200, maxM2: 400, minPrice: 12000, maxPrice: 25000, icon: '💎' },
            { name: 'prop_luxury_penthouse', minM2: 250, maxM2: 500, minPrice: 15000, maxPrice: 30000, icon: '💎' },
            { name: 'prop_luxury_historic', minM2: 300, maxM2: 700, minPrice: 7000, maxPrice: 18000, icon: '🏛️' },
            { name: 'prop_luxury_boutique', minM2: 800, maxM2: 2000, minPrice: 7000, maxPrice: 16000, icon: '💎' }
        ]
    },
    availableProperties: [],
    marketTrend: 1.0, // 1.0 = neutral

    createProperty() {
        const categories = Object.keys(this.PROPERTY_TYPES);
        const cat = categories[Math.floor(Math.random() * categories.length)];
        const subTypes = this.PROPERTY_TYPES[cat];
        const typeVar = subTypes[Math.floor(Math.random() * subTypes.length)];

        const sizeM2 = Math.floor(Math.random() * (typeVar.maxM2 - typeVar.minM2) + typeVar.minM2);
        const pricePerM2 = Math.floor(Math.random() * (typeVar.maxPrice - typeVar.minPrice) + typeVar.minPrice);

        const finalPricePerM2 = Math.floor(pricePerM2 * (this.marketTrend || 1));
        const price = sizeM2 * finalPricePerM2;
        const zoneAvgPrice = Math.floor(finalPricePerM2 * (1 + ((Math.random() * 0.2) - 0.1)));

        let baseYield = 0.045;
        if (cat === 're_cat_garages') baseYield = 0.055;
        if (cat === 're_cat_touristic') baseYield = 0.06;
        if (cat === 're_cat_luxury') baseYield = 0.03;
        if (cat === 're_cat_land') baseYield = 0.01;

        const actualYield = baseYield + ((Math.random() * 0.02) - 0.01);
        const monthlyRent = Math.floor((price * actualYield) / 12);

        return {
            id: Date.now() + Math.floor(Math.random() * 100000),
            name: typeVar.name,
            price: isNaN(price) ? 100000 : price,
            monthlyRent: isNaN(monthlyRent) ? 500 : monthlyRent,
            downPaymentPct: 0.20,
            sizeM2: sizeM2,
            pricePerM2: finalPricePerM2,
            zoneAvgPrice: zoneAvgPrice,
            icon: typeVar.icon,
            timestamp: Date.now() // Track age
        };
    },

    generateListings() {
        this.availableProperties = [];
        for (let i = 0; i < 6; i++) {
            this.availableProperties.push(this.createProperty());
        }
    },

    nextTurn() {
        // Cycle monthly market listings
        if (this.availableProperties.length > 0) {
            // Assuming index 0 is oldest due to push order
            this.availableProperties.shift();
        }
        if (this.availableProperties.length < 6) {
            this.availableProperties.push(this.createProperty());
        }

        // 2. Price Evolution
        const change = (Math.random() * 0.06) - 0.025;
        this.marketTrend *= (1 + change);
        GameState.inventory.realEstate.forEach(prop => {
            const localChange = (Math.random() * 0.04) - 0.02;
            const totalChange = change + localChange;
            prop.price = Math.floor(prop.price * (1 + totalChange));
        });
    },

    buyProperty(propertyId, useMortgage = true, termYears = 30) {
        const propertyIndex = this.availableProperties.findIndex(p => p.id === propertyId);
        if (propertyIndex === -1) return { success: false, message: t('re_prop_not_found') };

        // Cap
        const limits = GameBalance.getLimits();
        const ownedCount = GameState.inventory.realEstate.length;
        if (ownedCount >= limits.reCap) {
            return { success: false, message: t('re_limit_msg', { limit: limits.reCap }) + '<br>' + t('re_bank_limit_msg') };
        }

        const property = this.availableProperties[propertyIndex];
        const downPayment = useMortgage ? property.price * property.downPaymentPct : property.price;
        const loanAmount = property.price - downPayment;

        if (GameState.cash < downPayment) {
            return { success: false, message: t('re_need_down_payment') };
        }

        if (useMortgage && loanAmount > 0) {
            const r = Bank.INTEREST_RATES.mortgage / 12;
            const n = termYears * 12;
            const monthlyPayment = (loanAmount * r) / (1 - Math.pow(1 + r, -n));
            const mortgageId = Date.now();

            GameState.loans.push({
                id: mortgageId,
                isMortgage: true,
                type: t('mortgage_label', { years: termYears }),
                principal: loanAmount,
                termMonths: n,
                remainingMonths: n,
                monthlyPayment: monthlyPayment,
                interestRate: Bank.INTEREST_RATES.mortgage,
                remainingBalance: loanAmount
            });

            property.mortgageId = mortgageId;
        }

        GameState.cash -= downPayment;
        property.purchasePrice = property.price;
        GameState.inventory.realEstate.push(property);
        this.availableProperties.splice(propertyIndex, 1);
        return { success: true, message: t('re_bought_success', { name: t(property.name) }) };
    },

    sellProperty(propertyId) {
        const propIndex = GameState.inventory.realEstate.findIndex(p => p.id === propertyId);
        if (propIndex === -1) return { success: false, message: t('re_prop_not_found') };

        const property = GameState.inventory.realEstate[propIndex];
        const marketValue = property.price;
        const purchasePrice = property.purchasePrice || property.price; // Fallback if not set

        let mortgageCost = 0;
        if (property.mortgageId) {
            const loanIndex = GameState.loans.findIndex(l => l.id === property.mortgageId);
            if (loanIndex !== -1) {
                mortgageCost = GameState.loans[loanIndex].remainingBalance;
                GameState.loans.splice(loanIndex, 1);
            }
        }

        const netProfit = marketValue - mortgageCost;
        const actualProfit = marketValue - purchasePrice; // Net Profit

        GameState.cash += netProfit;

        // Lifetime real estate tracking
        if (!GameState.lifetimeStats) {
            GameState.lifetimeStats = {
                totalIncome: { salary: 0, rental: 0, stocks: 0, company: 0 },
                totalExpenses: { lifestyle: 0, housing: 0, education: 0 },
                totalTaxesPaid: 0,
                realEstate: {
                    totalPurchases: 0,
                    totalSales: 0,
                    propertiesSold: 0
                }
            };
        }
        if (!GameState.lifetimeStats.realEstate) {
            GameState.lifetimeStats.realEstate = {
                totalPurchases: 0,
                totalSales: 0,
                propertiesSold: 0
            };
        }
        GameState.lifetimeStats.realEstate.totalPurchases += purchasePrice;
        GameState.lifetimeStats.realEstate.totalSales += marketValue;
        GameState.lifetimeStats.realEstate.propertiesSold += 1;

        GameState.inventory.realEstate.splice(propIndex, 1);
        return {
            success: true,
            message: t('re_sold_success', {
                amount: formatCurrency(marketValue),
                mortgage: formatCurrency(mortgageCost),
                net: formatCurrency(netProfit)
            })
        };
    }
};
RealEstate.generateListings();

// --- Lifestyle ---
const LifestyleModule = {
    categories: {
        housing: {
            label: 'cat_housing',
            items: [
                { id: 'parents', cost: 0, deposit: 0 },
                { id: 'sofa', cost: 150, deposit: 0 },
                { id: 'pension', cost: 200, deposit: 400 },
                { id: 'room_cheap', cost: 250, deposit: 1000 },
                { id: 'room', cost: 300, deposit: 1200 },
                { id: 'room_suit', cost: 450, deposit: 1800 },
                { id: 'basement', cost: 600, deposit: 2400 },
                { id: 'studio', cost: 900, deposit: 3600 },
                { id: 'apt_out', cost: 1100, deposit: 4400 },
                { id: 'apartment', cost: 1500, deposit: 6000 },
                { id: 'loft', cost: 2500, deposit: 10000 },
                { id: 'penthouse', cost: 5000, deposit: 20000 },
                { id: 'mansion', cost: 15000, deposit: 60000 }
            ]
        },
        food: {
            label: 'cat_food',
            items: [
                { id: 'scraps', cost: 0 },
                { id: 'noodles', cost: 100 },
                { id: 'junk', cost: 200 },
                { id: 'cooking_basic', cost: 250 },
                { id: 'cooking', cost: 300 },
                { id: 'menu', cost: 450 },
                { id: 'bio', cost: 600 },
                { id: 'delivery', cost: 900 },
                { id: 'rest_nice', cost: 1500 },
                { id: 'chef', cost: 3000 },
                { id: 'michelin', cost: 10000 }
            ]
        },
        transport: {
            label: 'cat_transport',
            items: [
                { id: 'walk', cost: 0, purchaseCost: 0 },
                { id: 'skate', cost: 0, purchaseCost: 100 },
                { id: 'bike', cost: 10, purchaseCost: 150 },
                { id: 'scooter_el', cost: 20, purchaseCost: 400 },
                { id: 'public', cost: 50, purchaseCost: 0 },
                { id: 'moto_125', cost: 100, purchaseCost: 2500 },
                { id: 'moto_big', cost: 200, purchaseCost: 9000 },
                { id: 'car_old', cost: 250, purchaseCost: 8000 },
                { id: 'car_new', cost: 400, purchaseCost: 22000 },
                { id: 'car_premium', cost: 600, purchaseCost: 50000 },
                { id: 'car_sport', cost: 1000, purchaseCost: 90000 },
                { id: 'supercar', cost: 3000, purchaseCost: 250000 },
                { id: 'chofer', cost: 5000, purchaseCost: 0 }
            ]
        },
        leisure: {
            label: 'cat_leisure',
            items: [
                { id: 'free', cost: 0 },
                { id: 'library', cost: 20 },
                { id: 'internet', cost: 50 },
                { id: 'basic', cost: 100 },
                { id: 'hobbies', cost: 200 },
                { id: 'active', cost: 300 },
                { id: 'clubbing', cost: 500 },
                { id: 'weekend', cost: 800 },
                { id: 'vip', cost: 1500 },
                { id: 'travel', cost: 3000 },
                { id: 'exclusive', cost: 6000 },
                { id: 'yacht', cost: 15000 }
            ]
        },
        clothes: {
            label: 'cat_clothes',
            items: [
                { id: 'donations', cost: 0 },
                { id: 'second_hand', cost: 30 },
                { id: 'low_cost', cost: 60 },
                { id: 'basic', cost: 100 },
                { id: 'fast_fashion', cost: 200 },
                { id: 'sport', cost: 300 },
                { id: 'boutique', cost: 500 },
                { id: 'tech', cost: 800 },
                { id: 'suits', cost: 1500 },
                { id: 'designer', cost: 3000 },
                { id: 'collector', cost: 10000 }
            ]
        }
    },

    calculateTotal() {
        let total = 0;
        const s = GameState.lifestyle;
        if (!s) return 750;

        Object.keys(this.categories).forEach(catKey => {
            const itemId = s[catKey];
            const item = this.categories[catKey].items.find(i => i.id === itemId);
            if (item) total += item.cost;
        });
        return total;
    },

    getItem(category, id) {
        return this.categories[category].items.find(i => i.id === id);
    },

    setOption(category, id) {
        if (!GameState.lifestyle) return { success: false };

        // Check Selected
        if (GameState.lifestyle[category] === id) return { success: false, message: t('lifestyle_already_selected') };

        const item = this.getItem(category, id);
        if (!item) return { success: false, message: t('lifestyle_invalid_option') };

        // Upfront cost logic
        let upfront = 0;
        if (item.deposit) upfront += item.deposit;
        if (item.purchaseCost) upfront += item.purchaseCost;

        if (GameState.cash < upfront) {
            return { success: false, message: `${t('msg_not_enough_cash')}. ${t('upfront_payment')}: ${formatCurrency(upfront)}` };
        }

        // Deduct & SET
        GameState.cash -= upfront;
        GameState.lifestyle[category] = id;
        GameState.expenses = this.calculateTotal();

        // Tutorial Trigger: First independent housing
        if (category === 'housing' && id !== 'parents' && !GameState.tutorialFlags.independent) {
            TutorialSystem.step9_Independence();
        }

        const itemName = t(`lifestyle_${category}_${id}_name`) || id;
        return { success: true, message: t('lifestyle_upgrade_success_msg', { name: itemName }) };
    }
};
const EducationModule = {
    courses: [
        { id: 'bachillerato', name: 'Bachillerato', cost: 0, duration: 18, salaryMod: 1.0, required: null, desc: 'Formación académica base. Necesaria para la Universidad.' },
        { id: 'fp_medio', name: 'FP Grado Medio', cost: 500, duration: 18, salaryMod: 1.2, required: null, desc: 'Formación Profesional práctica. Acceso a FP Superior.' },

        // FP Superior
        { id: 'fp_admin', name: 'FP Sup. Administración', cost: 1500, duration: 18, salaryMod: 1.5, required: ['bachillerato', 'fp_medio'], desc: 'Gestión y Finanzas.' },
        { id: 'fp_dam', name: 'FP Sup. Desarrollo Apps', cost: 1500, duration: 18, salaryMod: 1.6, required: ['bachillerato', 'fp_medio'], desc: 'Programación y Software.' },
        { id: 'fp_maint', name: 'FP Sup. Mantenimiento', cost: 1500, duration: 18, salaryMod: 1.5, required: ['bachillerato', 'fp_medio'], desc: 'Instalaciones y Montaje.' },

        // Grados
        { id: 'grado_ade', name: 'Grado en ADE', cost: 6000, duration: 36, salaryMod: 2.0, required: ['bachillerato'], desc: 'Administración de Empresas.' },
        { id: 'grado_cs', name: 'Grado en Ing. Informática', cost: 6000, duration: 36, salaryMod: 2.2, required: ['bachillerato'], desc: 'Ciencias de la Computación.' },
        { id: 'grado_civil', name: 'Grado en Ing. Civil', cost: 6000, duration: 36, salaryMod: 2.1, required: ['bachillerato'], desc: 'Obras y Construcción.' },

        // Masters
        { id: 'master_fin', name: 'Máster en Finanzas', cost: 12000, duration: 12, salaryMod: 3.5, required: ['grado_ade'], desc: 'Dirección Financiera.' },
        { id: 'master_ai', name: 'Máster en IA', cost: 12000, duration: 12, salaryMod: 4.0, required: ['grado_cs'], desc: 'Inteligencia Artificial.' },
        { id: 'master_ing', name: 'Máster Ingeniería', cost: 12000, duration: 12, salaryMod: 3.5, required: ['grado_civil'], desc: 'Habilitante para firma de proyectos.' },

        { id: 'bootcamp', name: 'Bootcamp Programación', cost: 8000, duration: 6, salaryMod: 2.5, required: null, desc: 'Intensivo tech. Alta demanda.' },

        // DJ CAREER PATH
        { id: 'dj_basic', name: 'Curso DJ Básico SYNC', cost: 700, duration: 6, salaryMod: 1.0, required: ['bachillerato', 'fp_medio'], desc: 'Aprende a mezclar con el botón SYNC. Lo básico.' },
        { id: 'dj_pioneer', name: 'Curso DJ Pioneer', cost: 5000, duration: 12, salaryMod: 1.0, required: ['dj_basic'], desc: 'Dominio de CDJs y Rekordbox. Estándar de club.' },
        { id: 'dj_vinyl', name: 'Curso DJ Avanzado Vinilo', cost: 15000, duration: 18, salaryMod: 1.0, required: ['dj_pioneer'], desc: 'El arte del beatmatching manual. Respeto puro.' },
        { id: 'dj_pro', name: 'Master DJ Professional', cost: 30000, duration: 24, salaryMod: 1.0, required: ['dj_vinyl'], desc: 'Producción musical, marketing y marca personal.' }
    ],

    getCourse(id) {
        return this.courses.find(c => c.id === id);
    },

    startCourse(courseId) {
        if (GameState.currentCourse) return { success: false, message: t('edu_already_studying') };
        const course = this.courses.find(c => c.id === courseId);
        const cost = course.cost;
        if (GameState.cash < cost) return { success: false, message: t('edu_no_funds') };

        // Strict Requirement Check
        if (course.required) {
            const hasReq = course.required.some(req => GameState.education.includes(req));
            if (!hasReq) return { success: false, message: t('edu_req_missing', { req: course.required.join(' ' + t('or') + ' ') }) };
        }

        GameState.cash -= cost;

        // Lifetime education expense tracking
        if (!GameState.lifetimeStats) {
            GameState.lifetimeStats = {
                totalIncome: { salary: 0, rental: 0, stocks: 0, company: 0 },
                totalExpenses: { lifestyle: 0, housing: 0, education: 0 },
                totalTaxesPaid: 0,
                realEstate: {
                    totalPurchases: 0,
                    totalSales: 0,
                    propertiesSold: 0
                }
            };
        }
        GameState.lifetimeStats.totalExpenses.education += cost;

        GameState.isStudying = true;
        GameState.currentCourse = {
            ...course,
            remainingMonths: course.duration
        };

        const courseTr = getCourseTranslation(course.id);
        const courseName = courseTr.name || course.name;
        return { success: true, message: t('edu_start_success', { name: courseName }) };
    },

    nextTurn() {
        if (GameState.isStudying) {
            GameState.currentCourse.remainingMonths--;
            if (GameState.currentCourse.remainingMonths <= 0) {
                this.completeCourse();
            }
        }
    },

    completeCourse() {
        const course = GameState.currentCourse;
        if (!GameState.education.includes(course.id)) {
            GameState.education.push(course.id);
        }
        GameState.isStudying = false;
        GameState.currentCourse = null;

        // Trigger tutorial step 5 if this is the first degree
        if (!GameState.tutorialFlags.completedFirstDegree) {
            const tr = getCourseTranslation(course.id);
            TutorialSystem.onDegreeCompleted(tr.name || course.name);
            return; // Tutorial handles the modal
        }

        // Course completion message
        const themeColor = '#818cf8'; // Indigo
        const icon = '🎓';

        let finishMsg = `
            <div style="text-align: center; margin-bottom: 20px;">
                <div style="font-size: 4rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px ${themeColor}66); animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);">${icon}</div>
                <h3 style="color: ${themeColor}; margin: 0; font-size: 1.6rem; text-shadow: 0 0 10px ${themeColor}4d; font-weight: 800; letter-spacing: 1px;">${t('edu_complete_title')}</h3>
            </div>

            <div style="background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.6)); border: 1px solid ${themeColor}4d; border-radius: 16px; padding: 25px; text-align: center; margin-bottom: 25px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                <div style="font-size: 0.85rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px;">${t('edu_degree_obtained')}</div>
                <div style="font-size: 1.6rem; font-weight: 800; color: #f8fafc; margin-bottom: 15px;">${course.name}</div>
                
                <div style="display: inline-block; background: ${themeColor}26; border: 1px solid ${themeColor}4d; padding: 10px 20px; border-radius: 30px;">
                    <span style="color: ${themeColor}; font-weight: 700; font-size: 1.1rem;">${t('edu_qualification_up')}</span>
                </div>
            </div>

            <p style="text-align: center; color: #cbd5e1; font-size: 1rem; line-height: 1.6; margin: 0; padding: 0 10px;">
                ${t('edu_complete_msg')}
            </p>
        `;

        UI.showModal(' ', finishMsg, [
            {
                text: `${t('nav_job')}`, style: 'success', fn: () => {
                    // Switch to Job View
                    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
                    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
                    document.getElementById('job-view').classList.add('active');
                    const jobBtn = document.querySelector(`button[data-view="job"]`);
                    if (jobBtn) jobBtn.classList.add('active');

                    // Also sync bottom nav if exists (mobile)
                    document.querySelectorAll('.b-nav-item').forEach(b => {
                        b.classList.remove('active');
                        if (b.dataset.view === 'job') b.classList.add('active');
                    });

                    UI.updateJob(JobSystem);
                    window.scrollTo(0, 0);
                }
            }
        ], true);

        UI.updateEducation(this);
        UI.updateJob(JobSystem);
    }
};

// --- Company ---
const CompanyModule = {
    // Configuration
    businessTypes: {
        'cafe': { nameKey: 'biz_cafe', cost: 50000, initialCash: 20000, baseDemand: 800, baseTicket: 5, cogsPct: 0.25, productivityPerStaff: 800, volatility: 0.05, tier: 1, baseWage: 1200, icon: '☕', baseRent: 1500 },
        'retail_clothing': { nameKey: 'biz_retail_clothing', cost: 50000, baseDemand: 100, baseTicket: 55, cogsPct: 0.4, productivityPerStaff: 120, volatility: 0.2, tier: 1, baseWage: 1200, icon: '👗', baseRent: 2500 },
        'marketing_agency': { nameKey: 'biz_marketing_agency', cost: 250000, baseDemand: 8, baseTicket: 2000, cogsPct: 0.1, productivityPerStaff: 4, volatility: 0.3, tier: 1, baseWage: 2800, icon: '📈', baseRent: 4000 },
        'tech_startup': { nameKey: 'biz_tech_startup', cost: 750000, baseDemand: 100, baseTicket: 100, cogsPct: 0.05, productivityPerStaff: 200, volatility: 0.6, tier: 2, baseWage: 3000, icon: '💻', baseRent: 2000 }
    },
    locations: {
        'suburbs': { nameKey: 'loc_suburbs', rentMult: 0.5, trafficMult: 0.8, maxStaff: 10 },
        'downtown': { nameKey: 'loc_downtown', rentMult: 1.5, trafficMult: 1.0, maxStaff: 15 },
        'business_district': { nameKey: 'loc_business_district', rentMult: 3.0, trafficMult: 1.2, maxStaff: 20 }
    },
    providers: {
        'cheap': { nameKey: 'prov_cheap', priceMod: 0.8, quality: 0.4, reliability: 0.7 },
        'standard': { nameKey: 'prov_standard', priceMod: 1.0, quality: 0.7, reliability: 0.9 },
        'premium': { nameKey: 'prov_premium', priceMod: 1.4, quality: 1.0, reliability: 0.99 }
    },
    marketingChannels: {
        'none': { nameKey: 'mkt_none', cost: 0, impact: 1.0 },
        'social': { nameKey: 'mkt_social', cost: 500, impact: 1.3 },
        'local': { nameKey: 'mkt_local', cost: 1500, impact: 1.6 },
        'influencers': { nameKey: 'mkt_influencers', cost: 5000, impact: 2.2 }
    },

    // Logic
    createCompany(name, typeKey, locKey) {
        const type = this.businessTypes[typeKey];
        const loc = this.locations[locKey];
        if (!type || !loc) return { success: false, message: t('comp_create_invalid') };
        if (GameState.cash < type.cost) return { success: false, message: t('msg_not_enough_money_cost', { cost: formatCurrency(type.cost) }) };

        GameState.cash -= type.cost;

        GameState.company = {
            name: name,
            typeId: typeKey,
            typeName: t(type.nameKey),
            locationId: locKey,
            locationName: t(loc.nameKey),

            // Financials
            cash: type.initialCash || 5000,
            revenueLastMonth: 0,
            expensesLastMonth: 0,
            profitLastMonth: 0,

            // Analytics
            revenueHistory: [],
            profitHistory: [],

            // State
            reputation: 3.0,
            customerSatisfaction: 0.7,

            // Assets / Levels
            marketingLevel: 1,
            productLevel: 1,
            maxStaff: 5, // Tier 1 CAP

            // Decisions
            marketingChannel: 'none',
            providerId: 'standard',
            staff: [],

            events: [],
            age: 0,

            // Upgrades
            upgrades: {
                autoPayroll: false
            }
        };

        GameState.jobTitle = `CEO de ${name}`;
        GameState.salary = 0;
        JobSystem.currentCareerPath = 'entrepreneur';

        return { success: true, message: t('you_founded_name', { name: name }) };
    },

    hireStaff(role, salary, skill, name) {
        if (!GameState.company) return;
        const co = GameState.company;

        if (co.staff.length >= co.maxStaff) {
            return { success: false, message: t('staff_limit_reached', { max: co.maxStaff }) };
        }

        const newEmp = {
            name: name || role,
            role: role,
            salary: salary,
            startWage: salary,
            skill: skill || 0.5,
            morale: 0.8
        };

        // Initialize requiredWage immediately
        const calculationSkill = Math.min(1.0, newEmp.skill);
        const wageSteps = Math.floor((calculationSkill - 0.5) / 0.1);
        const increasePct = Math.max(0, wageSteps * 0.10);
        newEmp.requiredWage = Math.floor(newEmp.startWage * (1 + increasePct));

        co.staff.push(newEmp);
        return { success: true, message: t('hired_name', { name: name || role }) };
    },

    fireStaff(index) {
        if (!GameState.company) return;
        GameState.company.staff.splice(index, 1);
        GameState.company.staff.forEach(s => s.morale = Math.max(0, s.morale - 0.1));
        return { success: true, message: t('employee_fired') };
    },

    upgradeOffice() {
        if (!GameState.company) return;
        const co = GameState.company;
        const loc = this.locations[co.locationId];
        const locationMaxStaff = loc?.maxStaff || 15;

        // Loc Max
        if (co.maxStaff >= locationMaxStaff) {
            return { success: false, message: t('office_max_location', { loc: t('loc_' + co.locationId), max: locationMaxStaff }) };
        }

        if (co.staff.length < co.maxStaff) {
            return { success: false, message: t('office_must_fill', { current: co.staff.length, max: co.maxStaff }) };
        }

        let nextLimit = 0;
        let baseCost = 0;

        if (co.maxStaff === 5) { nextLimit = 10; baseCost = 45000; }
        else if (co.maxStaff === 10) { nextLimit = 15; baseCost = 90000; }
        else if (co.maxStaff === 15) { nextLimit = 20; baseCost = 180000; }
        else return { success: false, message: t('office_is_max') };

        // Ensure next limit doesn't exceed location max
        if (nextLimit > locationMaxStaff) {
            return { success: false, message: t('location_limit_staff', { loc: t('loc_' + co.locationId), max: locationMaxStaff }) };
        }

        const profitCalc = Math.max(0, co.profitLastMonth) * 3;
        const finalCost = Math.max(baseCost, profitCalc);

        if (co.cash < finalCost) return { success: false, message: t('msg_not_enough_money_cost', { cost: formatCurrency(finalCost) }) };

        co.cash -= finalCost;
        co.maxStaff = nextLimit;

        return { success: true, message: t('office_expanded_limit', { limit: nextLimit }) };
    },

    buyUpgrade(upgradeId) {
        if (!GameState.company) return;
        const co = GameState.company;

        if (upgradeId === 'autoPayroll') {
            if (co.upgrades && co.upgrades.autoPayroll) return { success: false, message: t('upgrade_owned') };

            // Req: Office Level > 1 (Implies maxStaff > 5 for standard tiers)
            if (co.maxStaff <= 5) return { success: false, message: t('req_business_level_2') };

            const cost = 25000;
            if (co.cash < cost) return { success: false, message: t('msg_not_enough_money_cost', { cost: formatCurrency(cost) }) };

            co.cash -= cost;
            if (!co.upgrades) co.upgrades = {};
            co.upgrades.autoPayroll = true;
            const themeColor = '#10b981'; // Emerald
            const successHtml = `
                <div style="text-align: center; margin-bottom: 20px;">
                    <div style="font-size: 4rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px ${themeColor}66); animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);">📋</div>
                    <h3 style="color: ${themeColor}; margin: 0; font-size: 1.6rem; text-shadow: 0 0 10px ${themeColor}4d; font-weight: 800; letter-spacing: 1px;">${t('hr_activated_title')}</h3>
                </div>
                
                <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
                    <p style="color: #fff; font-size: 1.1rem; line-height: 1.5; margin: 0; font-weight: 600;">
                        ${t('hr_activated_msg')}
                    </p>
                </div>

                <p style="text-align: center; color: #94a3b8; font-size: 0.9rem; margin: 0;">
                    ${t('hr_activated_sub')}
                </p>
            `;
            return { success: true, message: successHtml };
        }
    },


    setStrategicOption(category, value) {
        if (!GameState.company) return;
        if (category === 'marketing') GameState.company.marketingChannel = value;
        if (category === 'provider') GameState.company.providerId = value;
    },

    invest(type) {
        if (!GameState.company) return;
        const co = GameState.company;

        let currentLevel = 1;
        let name = '';

        if (type === 'product_dev') { currentLevel = co.productLevel; name = t('product'); }
        if (type === 'marketing_infra') { currentLevel = co.marketingLevel; name = t('marketing'); }

        if (currentLevel >= co.staff.length) {
            return { success: false, message: t('invest_limit_employees', { req: co.staff.length }) };
        }

        const cost = 5000 * currentLevel;

        if (co.cash < cost) return { success: false, message: t('msg_not_enough_money_cost', { cost: formatCurrency(cost) }) };

        co.cash -= cost;

        if (type === 'product_dev') co.productLevel++;
        if (type === 'marketing_infra') co.marketingLevel++;

        return { success: true, message: t('upgrade_completed_level', { name: name, level: currentLevel + 1 }) };
    },

    sellPassiveCompany(index) {
        const co = GameState.ownedCompanies[index];
        if (!co) return { success: false, message: t('company_not_found') };

        const valuation = Math.floor(co.baselineProfit * 12 * 3); // 3x Annual Profit
        const taxRate = 0.25;
        const taxes = Math.floor(valuation * taxRate);
        const netAmount = valuation - taxes;

        GameState.cash += netAmount;
        GameState.ownedCompanies.splice(index, 1);

        // Tax deduction
        // Return detail
        return {
            success: true,
            message: t('company_sold_msg', {
                val: formatCurrency(valuation),
                taxes: formatCurrency(taxes),
                net: formatCurrency(netAmount)
            })
        };
    },

    nextTurn() {
        if (GameState.company) {
            this.processCompany(GameState.company, true);

            // Salary Demands
            if (GameState.company.tempSalaryDemands && GameState.company.tempSalaryDemands.length > 0) {
                const demands = GameState.company.tempSalaryDemands;
                const count = demands.length;
                let demandListHtml = '';

                demands.forEach(d => {
                    demandListHtml += `
                        <div style="background: rgba(255, 255, 255, 0.05); border-radius: 8px; padding: 10px; margin-bottom: 8px; text-align: left; border-left: 3px solid #ef4444;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                                <span style="font-weight: 700; color: #f8fafc;">${d.name}</span>
                                <span style="font-weight: 700; color: #f8fafc;">${d.name}</span>
                                <span style="font-size: 0.8rem; color: #94a3b8;">${d.role}</span>
                            </div>
                            <div style="font-size: 0.9rem; color: #cbd5e1;">
                                ${t('demands_amount', { amount: formatCurrency(d.required) })} <span style="font-size: 0.8rem;">(Actual: ${formatCurrency(d.current)})</span>
                            </div>
                        </div>
                    `;
                });

                const modalTitle = count === 1 ? '⚠️ Queja Salarial' : `⚠️ ${count} Quejas Salariales`;
                const modalMsg = `
                    <div style="text-align: center; margin-bottom: 15px;">
                        <div style="font-size: 3rem; margin-bottom: 10px;">📢</div>
                        <p style="color: #cbd5e1; margin-bottom: 15px;">
                            ${count === 1 ? t('employee_unhappy_single') : t('employee_unhappy_multiple')}
                            <br>Si no lo subes, su motivación bajará.
                        </p>
                    </div>
                    <div style="max-height: 300px; overflow-y: auto; margin-bottom: 15px;">
                        ${demandListHtml}
                    </div>
                `;

                // Critical Demand
                UI.showModal(
                    modalTitle,
                    modalMsg,
                    [{
                        text: t('manage_salaries_btn'),
                        style: 'primary',
                        fn: () => {
                            // Go to Staff Tab
                            const btn = document.querySelector('.b-nav-item[data-view="company"]'); // Mobile
                            if (btn) btn.click();
                            const dBtn = document.querySelector('.nav-btn[data-view="company"]'); // Desktop
                            if (dBtn) dBtn.click();
                            setTimeout(() => {
                                const staffTab = document.querySelector('button.tab-btn[data-tab="staff"]');
                                if (staffTab) staffTab.click();
                            }, 200);
                        }
                    },
                    { text: t('demand_ignore'), style: 'secondary', fn: null }],
                    true // isHTML
                );
            }
        }

        if (GameState.ownedCompanies && GameState.ownedCompanies.length > 0) {
            GameState.ownedCompanies.forEach(co => {
                this.processCompany(co, false);
                if (co.profitLastMonth > 0) {
                    GameState.cash += co.profitLastMonth;

                    // Taxable Profit
                    if (!GameState.currentYearIncome) {
                        GameState.currentYearIncome = { salary: 0, rental: 0, stocks: 0, company: 0 };
                    }
                    GameState.currentYearIncome.company += co.profitLastMonth;
                    // Lifetime Income
                }
            });
        }
    },

    processCompany(co, isActive) {
        const type = this.businessTypes[co.typeId];

        // Passive Logic
        if (!isActive) {
            let volatPct = 0.10;
            if (co.typeId === 'retail') volatPct = 0.25;
            if (co.typeId === 'tech') volatPct = 0.50;

            const variation = (Math.random() * (volatPct * 2)) - volatPct;

            const base = co.baselineProfit || 1000;
            const monthlyProfit = Math.floor(base * (1 + variation));

            co.profitLastMonth = monthlyProfit;
            co.financialHistory = co.financialHistory || [];

            co.financialHistory.push({
                month: GameState.month,
                revenue: monthlyProfit * 1.5,
                profit: monthlyProfit,
                expenses: { total: monthlyProfit * 0.5, wages: 0, rent: 0, cogs: 0, marketing: 0, opex: 0, salary: 0 }
            });

            return { profit: monthlyProfit };
        }

        // Active Logic
        const loc = this.locations[co.locationId];
        const marketing = this.marketingChannels[co.marketingChannel];
        const provider = this.providers[co.providerId];

        co.age++;
        co.events = [];
        co.tempSalaryDemands = [];

        let totalProductivity = 1.0;
        let wageBill = 0;

        co.staff.forEach(emp => {
            if (emp.skill < 1.0) {
                const growth = ((Math.random() * 0.04) + 0.01) / 2;
                emp.skill = Math.min(1.0, emp.skill + growth);
            } else {
                // Expert Bonus
                const growthRate = (emp.role === t('role_expert') || emp.role === 'Experto') ? 0.006 : 0.005;
                emp.skill += growthRate;
            }

            if (!emp.startWage) emp.startWage = emp.salary;

            const calculationSkill = Math.min(1.0, emp.skill);
            const wageSteps = Math.floor((calculationSkill - 0.5) / 0.1);
            const increasePct = wageSteps * 0.10;
            emp.requiredWage = Math.floor(emp.startWage * (1 + increasePct));

            if (emp.autoWage || (co.upgrades && co.upgrades.autoPayroll)) {
                emp.salary = emp.requiredWage;
            }

            if (emp.salary >= emp.requiredWage) {
                emp.morale = Math.min(1.0, emp.morale + 0.05);
            } else {
                emp.morale = Math.max(0.0, emp.morale - 0.10);
                co.events.push(t('news_unhappy_employee', { amount: formatCurrency(emp.requiredWage) }));
                // Queue Modal
                co.tempSalaryDemands.push({
                    name: emp.name,
                    role: emp.role || t('role_employee'),
                    current: emp.salary,
                    required: emp.requiredWage
                });
            }

            const contribution = emp.skill * emp.morale;
            totalProductivity += (contribution);
            wageBill += emp.salary;
        });

        if (!co.organicDemandMult) co.organicDemandMult = 1.0;

        let growthRate = 0;
        if (co.reputation >= 2.5) {
            growthRate = ((co.reputation - 2.5) / 2.5) * 0.05;
        } else {
            growthRate = ((co.reputation - 2.5) / 2.5) * 0.03;
        }

        co.organicDemandMult *= (1 + growthRate);
        co.organicDemandMult = Math.max(0.1, co.organicDemandMult);

        const marketingEffectiveness = marketing.impact * (1 + (co.marketingLevel * 0.2));
        let demand = (type.baseDemand) * loc.trafficMult * marketingEffectiveness;

        demand *= (0.5 + (co.reputation / 5));
        demand *= co.organicDemandMult;

        const volatility = type.volatility;
        const fluctuation = 1 + ((Math.random() * volatility * 2) - volatility);
        demand *= fluctuation;

        const capacity = Math.floor(totalProductivity * type.productivityPerStaff);
        const actualCustomers = Math.min(demand, capacity);

        if (demand > capacity) {
            const locationMaxStaff = loc?.maxStaff || 15;
            if (co.staff.length >= co.maxStaff && co.maxStaff >= locationMaxStaff) {
                co.events.push(t('news_limit_staff'));
            } else {
                co.events.push(t('news_need_staff'));
            }
        }

        const baseTicket = type.baseTicket;
        const sellingPrice = co.customPrice || baseTicket;
        const avgTicket = sellingPrice;

        const revenue = actualCustomers * avgTicket;

        let cogs = revenue * type.cogsPct * provider.priceMod;
        const opEx = (co.marketingLevel * 100) + (co.productLevel * 150);
        const rent = 1500 * loc.rentMult;
        const marketingCost = marketing.cost;

        let ceoSalary = co.ceoSalary || 0;
        if (isActive) GameState.salary = ceoSalary;

        if (co.cash < ceoSalary) {
            ceoSalary = co.cash; // Can't pay what you don't have
            if (isActive) GameState.salary = ceoSalary;
        }

        // Handled in Main Loop

        const totalExpenses = wageBill + rent + cogs + marketingCost + opEx + ceoSalary;
        const profit = revenue - totalExpenses;

        co.cash += profit;

        co.revenueLastMonth = Math.floor(revenue);
        co.expensesLastMonth = Math.floor(totalExpenses);
        co.profitLastMonth = Math.floor(profit);

        const unitCost = avgTicket * type.cogsPct * provider.priceMod;
        const prevDemand = co.lastStats ? co.lastStats.demand : 0;
        let growthPct = 0;

        if (prevDemand > 0) {
            growthPct = ((Math.floor(demand) - prevDemand) / prevDemand);
        }

        co.lastStats = {
            ticket: avgTicket,
            unitCost: unitCost,
            unitMargin: avgTicket - unitCost,
            demand: Math.floor(demand),
            demandGrowth: growthPct,
            capacity: Math.floor(capacity),
            customers: Math.floor(actualCustomers),
            productivityPerStaff: type.productivityPerStaff,
            totalProductivity: totalProductivity,
            demandComposition: {
                base: type.baseDemand,
                traffic: loc.trafficMult,
                marketing: marketingEffectiveness,
                reputation: (0.5 + (co.reputation / 5)),
                organic: co.organicDemandMult,
                volatility: fluctuation
            }
        };

        const historyEntry = {
            month: co.age,
            revenue: co.revenueLastMonth,
            profit: co.profitLastMonth,
            expenses: {
                wages: Math.floor(wageBill),
                rent: Math.floor(rent),
                cogs: Math.floor(cogs),
                marketing: Math.floor(marketingCost),
                opex: Math.floor(opEx),
                salary: Math.floor(ceoSalary),
                total: co.expensesLastMonth
            }
        };

        if (!co.financialHistory) co.financialHistory = [];
        co.financialHistory.push(historyEntry);
        if (co.financialHistory.length > 24) co.financialHistory.shift();

        if (!co.revenueHistory) co.revenueHistory = [];
        if (!co.profitHistory) co.profitHistory = [];
        co.revenueHistory.push(co.revenueLastMonth);
        co.profitHistory.push(co.profitLastMonth);
        if (co.revenueHistory.length > 24) co.revenueHistory.shift();
        if (co.profitHistory.length > 24) co.profitHistory.shift();

        const actualQuality = provider.quality + ((co.productLevel - 1) * 0.05);
        const priceRatio = (avgTicket / baseTicket) || 1;
        const priceChangePct = priceRatio - 1;
        const requiredQuality = 0.70 + (priceChangePct * 2.0);

        const qualityGap = actualQuality - requiredQuality;

        let targetRep = 3.5 + (qualityGap * 5);
        targetRep = Math.min(5, Math.max(0, targetRep));

        const change = (targetRep - co.reputation) * 0.1;
        const repBefore = co.reputation;
        co.reputation = Math.min(5, Math.max(0, co.reputation + change));
        const repGrowthPct = repBefore > 0 ? (co.reputation - repBefore) / repBefore : 0;

        if (co.lastStats) {
            co.lastStats.actualQuality = actualQuality;
            co.lastStats.requiredQuality = requiredQuality;
            co.lastStats.targetRep = targetRep;
            co.lastStats.repGrowth = repGrowthPct;
            co.lastStats.currentRep = co.reputation;
        }

        if (Math.random() > provider.reliability) {
            const lost = Math.floor(revenue * 0.2);
            co.revenueLastMonth -= lost;
            co.cash -= lost;
            co.events.push(`📉 Problema de suministros. Ventas afectadas.`);
        }

        if (co.cash < -10000) {
            co.events.push(t('danger_negative_cash'));
        }

        return { revenue: co.revenueLastMonth, profit: co.profitLastMonth };
    },

    withdraw(amount) {
        if (!GameState.company) return;
        if (GameState.company.cash < amount) return { success: false, message: t('company_no_cash') };
        GameState.company.cash -= amount;
        GameState.cash += amount;

        // Tax Declaration
        if (GameState.currentYearIncome) {
            GameState.currentYearIncome.company += amount;
        }
        if (GameState.lifetimeStats && GameState.lifetimeStats.totalIncome) {
            GameState.lifetimeStats.totalIncome.company += amount;
        }

        return { success: true, message: `Retirados ${formatCurrency(amount)}.` };
    },

    deposit(amount) {
        if (!GameState.company) return;
        if (GameState.cash < amount) return { success: false, message: t('company_no_personal_cash') };
        GameState.cash -= amount;
        GameState.company.cash += amount;
        return { success: true, message: `Inyectados ${formatCurrency(amount)}.` };
    },

    async sellCompany() {
        if (!GameState.company) return;
        const co = GameState.company;

        let annualProfit = 0;
        if (co.financialHistory && co.financialHistory.length > 0) {
            const last12 = co.financialHistory.slice(-12);
            annualProfit = last12.reduce((sum, m) => sum + m.profit, 0);
        } else {
            annualProfit = co.profitLastMonth * 12;
        }

        if (annualProfit < 0) annualProfit = 0;

        let upgradeMult = 1;
        if (co.maxStaff >= 10) upgradeMult *= 2;
        if (co.maxStaff >= 15) upgradeMult *= 2;

        const valuation = Math.floor(annualProfit * upgradeMult);
        const liquidationCash = co.cash;
        const totalExit = valuation + liquidationCash;

        const message = `${t('sell_annual_profit')}: ${formatCurrency(annualProfit)}
${t('sell_upgrade_mult')}: x${upgradeMult}

${t('sell_valuation')}: ${formatCurrency(valuation)}
${t('sell_liquidation_cash')}: ${formatCurrency(liquidationCash)}

${t('sell_total_op')}: ${formatCurrency(totalExit)}

${t('sell_confirm_desc')}`;

        const confirmed = await showGameConfirm(message, t('sell_offer_title'), t('sell'), t('cancel'));
        if (!confirmed) return { success: false, message: t('company_op_cancelled') };

        GameState.cash += totalExit;
        GameState.company = null;
        GameState.jobTitle = t('job_ex_founder');
        GameState.salary = 0;
        JobSystem.currentCareerPath = 'none';

        return { success: true, message: t('company_sold_success').replace('{amount}', formatCurrency(totalExit)) };
    },

    canAutomate(co) {
        if (!co) return { can: false, missing: [] };
        const loc = this.locations[co.locationId];
        const locationMaxStaff = loc?.maxStaff || 15;
        const missing = [];

        const cash = Number(co.cash) || 0;
        const profit = Number(co.profitLastMonth) || 0;
        const salary = Number(co.ceoSalary) || 0;
        const staffCount = (co.staff || []).length;

        if (cash < 150000) missing.push(t('msg_cash_150k_required'));
        if (staffCount < locationMaxStaff) missing.push(t('msg_full_capacity_required'));
        if (salary <= 0) missing.push(t('msg_ceo_salary_required'));
        if (profit < 1000) missing.push(t('msg_min_profit_automate'));

        return {
            can: missing.length === 0,
            missing: missing,
            locationMaxStaff: locationMaxStaff
        };
    },

    automate() {
        if (!GameState.company) return { success: false, message: t('company_not_found') };
        const co = GameState.company;
        const status = this.canAutomate(co);

        if (!status.can) {
            return { success: false, message: status.missing.join('\n') };
        }

        // Prepare Holding Object
        const holding = {
            name: co.name,
            typeId: co.typeId,
            locationId: co.locationId,
            baselineProfit: co.profitLastMonth,
            profitLastMonth: co.profitLastMonth,
            ceoSalary: co.ceoSalary,
            financialHistory: [...(co.financialHistory || [])],
            age: co.age
        };

        if (!GameState.ownedCompanies) GameState.ownedCompanies = [];
        GameState.ownedCompanies.push(holding);

        // Reset State
        GameState.company = null;
        GameState.jobTitle = t('job_investor') || 'Inversor / Propietario';
        GameState.salary = 0;
        JobSystem.currentCareerPath = 'none';

        return {
            success: true,
            message: t('company_automated_success', { name: co.name })
        };
    }
};

// Jobs
const BossMessages = {
    positive: [
        "Has superado las expectativas este año. Te lo mereces.",
        "Tu rendimiento ha sido excelente. Aquí tienes tu recompensa.",
        "Valoramos mucho tu compromiso con la empresa.",
        "Eres una pieza clave en el equipo. Sigue así.",
        "Me ha impresionado tu productividad. Aumento concedido.",
        "Tus resultados hablan por sí solos. Buen trabajo.",
        "La dirección está muy contenta contigo.",
        "Es justo reconocer tu esfuerzo con hechos.",
        "Gracias por tu dedicación extra. Disfruta del aumento.",
        "Personas como tú hacen crecer esta empresa.",
        "Tu liderazgo informal ha sido notable.",
        "Has gestionado los problemas con gran eficacia.",
        "Tu actitud positiva contagia al equipo. Gracias.",
        "Este aumento es solo el principio si sigues así.",
        "Confío plenamente en tu capacidad. Adelante.",
        "Tus métricas están por encima de la media. Felicidades.",
        "Has sabido adaptarte a los cambios. Bien hecho.",
        "Tu lealtad y esfuerzo tienen recompensa.",
        "Veo un gran futuro para ti aquí.",
        "Aprobado sin dudarlo. ¡Enhorabuena!"
    ],
    negative: [
        "El presupuesto está ajustado, pero haré una excepción pequeña.",
        "Esperaba más de ti, pero te daré un voto de confianza.",
        "No es el mejor momento para la empresa, confórmate con esto.",
        "Tu rendimiento ha sido justo, igual que este aumento.",
        "Te lo doy porque llevas tiempo, no por brillar.",
        "Deberías agradecer que haya algo de subida este año.",
        "Espero ver mejores números el próximo trimestre.",
        "No me convences del todo, pero vale.",
        "Considera esto un aviso: necesito más implicación.",
        "El mercado está difícil, esto es lo máximo posible.",
        "Otros lo merecían más, pero aquí tienes algo.",
        "No te acostumbres. El año que viene quiero más.",
        "A regañadientes, administración lo ha aprobado.",
        "Es poco, pero es mejor que nada.",
        "Tu actitud debe mejorar. Tómalo como incentivo.",
        "Estás en la cuerda floja, aprovéchalo.",
        "Ha costado convencer a finanzas. No me falles.",
        "Más vale pájaro en mano... aquí tienes un poco.",
        "No es lo que pedías, pero es lo que hay.",
        "Haz que valga la pena cada céntimo extra."
    ]
};

// Gigs Pool
const GIGS_POOL = [
    { title: 'Vender cromos', titleKey: 'gig_cromos', descKey: 'gig_cromos_desc', salary: 50, duration: 3, type: 'gig', reqMonths: 0, reqEdu: null },
    { title: 'Ventas en Wallapop', titleKey: 'gig_wallapop', descKey: 'gig_wallapop_desc', salary: 120, duration: 4, type: 'gig', reqMonths: 0, reqEdu: null },
    { title: 'Limpiar casas', titleKey: 'gig_limpiar', descKey: 'gig_limpiar_desc', salary: 200, duration: 5, type: 'gig', reqMonths: 0, reqEdu: null },
    { title: 'Pasear perros', titleKey: 'gig_perros', descKey: 'gig_perros_desc', salary: 150, duration: 3, type: 'gig', reqMonths: 0, reqEdu: null },
    { title: 'Repartir publicidad', titleKey: 'gig_publicidad', descKey: 'gig_publicidad_desc', salary: 80, duration: 2, type: 'gig', reqMonths: 0, reqEdu: null },
    { title: 'Cuidar niños', titleKey: 'gig_ninos', descKey: 'gig_ninos_desc', salary: 180, duration: 4, type: 'gig', reqMonths: 0, reqEdu: null },
    { title: 'Ayudante mudanzas', titleKey: 'gig_mudanzas', descKey: 'gig_mudanzas_desc', salary: 220, duration: 2, type: 'gig', reqMonths: 0, reqEdu: null },
    { title: 'Cliente misterioso', titleKey: 'gig_misterioso', descKey: 'gig_misterioso_desc', salary: 100, duration: 3, type: 'gig', reqMonths: 0, reqEdu: null },
    { title: 'Transcribir audios', titleKey: 'gig_transcribir', descKey: 'gig_transcribir_desc', salary: 130, duration: 4, type: 'gig', reqMonths: 0, reqEdu: null },
    { title: 'Encuestador', titleKey: 'gig_encuestador', descKey: 'gig_encuestador_desc', salary: 90, duration: 2, type: 'gig', reqMonths: 0, reqEdu: null },
    { title: 'DJ fiestas infantiles', titleKey: 'gig_dj_fiestas', descKey: 'gig_dj_fiestas_desc', salary: 160, duration: 3, type: 'gig', reqMonths: 0, reqEdu: null },
    { title: 'Monitor comedor', titleKey: 'gig_monitor', descKey: 'gig_monitor_desc', salary: 210, duration: 5, type: 'gig', reqMonths: 0, reqEdu: null },
    { title: 'Cortar césped', titleKey: 'gig_cesped', descKey: 'gig_cesped_desc', salary: 140, duration: 4, type: 'gig', reqMonths: 0, reqEdu: null }
];

// Gig Translation
function getGigTranslation(gig) {
    if (gig.titleKey) return t(gig.titleKey);
    return gig.title;
}

const JobSystem = {
    careers: {
        // Basic
        'unskilled': [
            { title: 'Reponedor / Auxiliar', salary: 700, reqMonths: 0, reqEdu: ['bachillerato', 'fp_medio'], req: null }, // Entry Level
            { title: 'Cajero / Atención', salary: 1150, reqMonths: 6, reqEdu: null, req: { housing: 3, food: 2, clothes: 2 } }, // Requirements: Room+
            { title: 'Supervisor de Planta', salary: 1400, reqMonths: 24, reqEdu: null, req: { housing: 4, food: 3, clothes: 3, leisure: 2 } } // Requirements: Shared+
        ],

        // DJ Career
        'dj': [
            { title: 'DJ Residente de tu casa', salary: 600, reqMonths: 0, reqEdu: null, req: null },
            { title: 'DJ Reggeton', salary: 1400, reqMonths: 2, reqEdu: ['dj_basic'], req: { transport: 4 } }, // Transport T4 (Public)
            { title: 'DJ Residente Reggeton', salary: 1800, reqMonths: 4, reqEdu: ['dj_basic'], req: { clothes: 4 } }, // Clothes T4 (Fast Fash)
            { title: 'DJ Electronica', salary: 2300, reqMonths: 6, reqEdu: ['dj_basic'], req: { food: 5 } }, // Food T5 (Menu)
            { title: 'DJ Residente Electronica', salary: 2800, reqMonths: 8, reqEdu: ['dj_basic'], req: { leisure: 6 } }, // Leisure T6
            { title: 'DJ Residente Octogono', salary: 3400, reqMonths: 10, reqEdu: ['dj_pioneer'], req: { housing: 7 } }, // Housing T7
            { title: 'DJ y Productor', salary: 4500, reqMonths: 12, reqEdu: ['dj_pioneer'], req: { transport: 8 } }, // Transport T8
            { title: 'DJ Productor Sello', salary: 5500, reqMonths: 18, reqEdu: ['dj_pioneer'], req: { clothes: 6 } }, // Clothes T6
            { title: 'DJ Residente Studio 77', salary: 5900, reqMonths: 24, reqEdu: ['dj_vinyl'], req: { food: 7 } }, // Food T7
            { title: 'DJ Residente Kapitol', salary: 7100, reqMonths: 30, reqEdu: ['dj_vinyl'], req: { leisure: 8 } }, // Leisure T8
            { title: 'DJ Residente Ibiza', salary: 10750, reqMonths: 36, reqEdu: ['dj_pro'], req: { housing: 11 } }, // Housing T11
            { title: 'DJ Residente Berghain', salary: 15000, reqMonths: 48, reqEdu: ['dj_pro'], req: { transport: 11 } }, // Transport T11
            { title: 'DJ Residente FAVRIK', salary: 21500, reqMonths: 60, reqEdu: ['dj_pro'], req: { clothes: 8, food: 9 } }, // Clothes T8 (Suits) + Food T9 (Chef)
            { title: 'DJ Whiteworks', salary: 40000, reqMonths: 72, reqEdu: ['dj_pro'], req: { housing: 12, leisure: 11 } } // Housing T12 (Mansion) + Leisure T11 (Yacht)
        ],

        // Tres Deporte (No Promos)
        'tres_deporte': [
            { title: 'TRES DEPORTE', salary: 800, reqMonths: 0, reqEdu: 'bachillerato', req: null }
        ],

        // FP Admin
        'admin_contable': [
            { title: 'Administrativo contable', salary: 1300, reqMonths: 0, reqEdu: 'fp_admin', req: { housing: 3, clothes: 3, food: 2 } }, // Independent + Basic Look
            { title: 'Administrativo senior', salary: 1700, reqMonths: 12, reqEdu: 'fp_admin', req: { housing: 4, clothes: 4, food: 3, leisure: 2 } }, // Shared + Fast Fashion
            { title: 'Técnico de gestión financiera', salary: 2200, reqMonths: 30, reqEdu: 'fp_admin', req: { housing: 6, clothes: 5, food: 4, transport: 4 } }, // Basement + Sport + Variada + Scooter
            { title: 'Responsable administrativo', salary: 3000, reqMonths: 60, reqEdu: 'fp_admin', req: { housing: 7, clothes: 6, food: 4, transport: 5 } } // Studio + Boutique + Public
        ],
        'gestor_cobros': [
            { title: 'Gestor de cobros / facturación', salary: 1300, reqMonths: 0, reqEdu: 'fp_admin', req: { housing: 3, clothes: 3 } },
            { title: 'Responsable de facturación', salary: 1700, reqMonths: 12, reqEdu: 'fp_admin', req: { housing: 4, clothes: 4, food: 3 } },
            { title: 'Credit controller', salary: 2200, reqMonths: 30, reqEdu: 'fp_admin', req: { housing: 6, clothes: 5, leisure: 3 } },
            { title: 'Jefe de admi. de clientes', salary: 3000, reqMonths: 60, reqEdu: 'fp_admin', req: { housing: 7, clothes: 6, transport: 5 } }
        ],
        'admin_inmo': [
            { title: 'Administrativo comercial inmo.', salary: 1300, reqMonths: 0, reqEdu: 'fp_admin', req: { housing: 3, clothes: 4 } }, // High Image
            { title: 'Gestor de operaciones inmo.', salary: 1800, reqMonths: 18, reqEdu: 'fp_admin', req: { housing: 5, clothes: 5, transport: 4 } },
            { title: 'Responsable de oficina inmo.', salary: 2400, reqMonths: 36, reqEdu: 'fp_admin', req: { housing: 7, clothes: 6, transport: 5, leisure: 4 } },
            { title: 'Director de zona', salary: 3200, reqMonths: 72, reqEdu: 'fp_admin', req: { housing: 8, clothes: 7, transport: 6, leisure: 5 } } // Apt Out + Boutique + Moto
        ],

        // FP DAM
        'prog_apps': [
            { title: 'Programador junior (FP)', salary: 1500, reqMonths: 0, reqEdu: ['fp_dam', 'bootcamp'], req: { housing: 3, leisure: 2, food: 2 } },
            { title: 'Programador semi‑senior', salary: 2000, reqMonths: 18, reqEdu: ['fp_dam', 'bootcamp'], req: { housing: 5, leisure: 3, food: 3 } }, // Suite+
            { title: 'Desarrollador senior', salary: 2700, reqMonths: 36, reqEdu: ['fp_dam', 'bootcamp'], req: { housing: 7, leisure: 5, food: 4, clothes: 4 } }, // Studio + Hobbies
            { title: 'Tech lead', salary: 3800, reqMonths: 72, reqEdu: ['fp_dam', 'bootcamp'], req: { housing: 9, leisure: 6, food: 5, clothes: 5 } } // Apt Center + Active
        ],
        'sys_support': [
            { title: 'Técnico de soporte y sistemas', salary: 1400, reqMonths: 0, reqEdu: 'fp_dam', req: { housing: 3, leisure: 2 } },
            { title: 'Administrador de sistemas', salary: 1900, reqMonths: 24, reqEdu: 'fp_dam', req: { housing: 5, leisure: 3, food: 3 } },
            { title: 'Ingeniero de sistemas', salary: 2500, reqMonths: 42, reqEdu: 'fp_dam', req: { housing: 7, leisure: 4, transport: 4 } },
            { title: 'Responsable infraest. IT', salary: 3500, reqMonths: 72, reqEdu: 'fp_dam', req: { housing: 8, leisure: 5, transport: 5 } }
        ],
        'mobile_dev': [
            { title: 'Desarrollador de apps móviles', salary: 1600, reqMonths: 0, reqEdu: ['fp_dam', 'bootcamp'], req: { housing: 4, leisure: 3 } },
            { title: 'Mobile developer mid', salary: 2200, reqMonths: 24, reqEdu: ['fp_dam', 'bootcamp'], req: { housing: 6, leisure: 4, food: 3 } },
            { title: 'Senior mobile', salary: 3000, reqMonths: 48, reqEdu: ['fp_dam', 'bootcamp'], req: { housing: 7, leisure: 5, food: 4, clothes: 4 } },
            { title: 'Lead mobile / arquitecto', salary: 4000, reqMonths: 84, reqEdu: ['fp_dam', 'bootcamp'], req: { housing: 9, leisure: 6, food: 5, transport: 5 } }
        ],

        // FP Maintenance

        'maint_ind': [
            { title: 'Técnico mantenimiento ind.', salary: 1500, reqMonths: 0, reqEdu: 'fp_maint', req: { housing: 3, food: 3 } }, // Physical Job
            { title: 'Técnico senior', salary: 1900, reqMonths: 24, reqEdu: 'fp_maint', req: { housing: 5, food: 4, transport: 4 } },
            { title: 'Jefe de equipo', salary: 2400, reqMonths: 48, reqEdu: 'fp_maint', req: { housing: 6, food: 4, transport: 5, clothes: 3 } },
            { title: 'Responsable de planta', salary: 3300, reqMonths: 84, reqEdu: 'fp_maint', req: { housing: 8, food: 5, transport: 6, clothes: 5 } }
        ],
        'clima': [
            { title: 'Técnico de climatización', salary: 1500, reqMonths: 0, reqEdu: 'fp_maint', req: { housing: 3, food: 3 } },
            { title: 'Oficial de 1ª', salary: 1900, reqMonths: 24, reqEdu: 'fp_maint', req: { housing: 5, food: 4, transport: 8 } }, // Van
            { title: 'Responsable servicio técnico', salary: 2400, reqMonths: 48, reqEdu: 'fp_maint', req: { housing: 7, food: 4, transport: 8, clothes: 4 } },
            { title: 'Jefe operaciones mant.', salary: 3200, reqMonths: 84, reqEdu: 'fp_maint', req: { housing: 8, food: 5, transport: 9, clothes: 5 } }
        ],
        'buildings': [
            { title: 'Técnico manten. edificios', salary: 1400, reqMonths: 0, reqEdu: 'fp_maint', req: { housing: 3, food: 3 } },
            { title: 'Encargado de edificio', salary: 1800, reqMonths: 24, reqEdu: 'fp_maint', req: { housing: 5, food: 4, clothes: 3 } },
            { title: 'Supervisor multiedificio', salary: 2300, reqMonths: 48, reqEdu: 'fp_maint', req: { housing: 6, food: 4, transport: 4, clothes: 4 } },
            { title: 'Facility manager', salary: 3200, reqMonths: 84, reqEdu: 'fp_maint', req: { housing: 8, food: 5, transport: 5, clothes: 5 } }
        ],

        // Degree ADE
        'analyst_fin': [
            { title: 'Analista financiero', salary: 1600, reqMonths: 0, reqEdu: 'grado_ade', req: { housing: 4, clothes: 4, food: 3 } }, // Suit Req
            { title: 'Analista senior', salary: 2300, reqMonths: 36, reqEdu: 'grado_ade', req: { housing: 6, clothes: 5, food: 4, transport: 4 } },
            { title: 'Controller financiero', salary: 3000, reqMonths: 60, reqEdu: 'master_fin', req: { housing: 8, clothes: 6, food: 5, transport: 5 } },
            { title: 'Director financiero (CFO)', salary: 4500, reqMonths: 108, reqEdu: 'master_fin', req: { housing: 10, clothes: 8, food: 7, leisure: 7 } } // High Stakes
        ],
        'consultant': [
            { title: 'Consultor de negocio', salary: 1700, reqMonths: 0, reqEdu: 'grado_ade', req: { housing: 4, clothes: 4, transport: 4 } }, // Travel
            { title: 'Consultor senior', salary: 2500, reqMonths: 36, reqEdu: 'grado_ade', req: { housing: 7, clothes: 5, transport: 5, food: 4 } },
            { title: 'Manager de proyecto', salary: 3500, reqMonths: 72, reqEdu: 'master_fin', req: { housing: 9, clothes: 7, transport: 7, food: 6 } }, // High appearance reqs
            { title: 'Socio / Director', salary: 5000, reqMonths: 120, reqEdu: 'master_fin', req: { housing: 11, clothes: 9, housing: 10, food: 8, leisure: 8 } } // Exec High Stakes
        ],
        'sales_b2b': [
            { title: 'Gestor de cuentas empresa', salary: 1600, reqMonths: 0, reqEdu: 'grado_ade', req: { housing: 4, clothes: 4 } },
            { title: 'Key account manager', salary: 2300, reqMonths: 36, reqEdu: 'grado_ade', req: { housing: 6, clothes: 5, leisure: 4 } }, // Networking
            { title: 'Sales manager', salary: 3200, reqMonths: 72, reqEdu: 'grado_ade', req: { housing: 8, clothes: 7, leisure: 6, food: 5 } },
            { title: 'Director comercial', salary: 4500, reqMonths: 108, reqEdu: 'master_fin', req: { housing: 10, clothes: 8, leisure: 7, food: 6 } }
        ],

        // Degree CS
        'swe': [
            { title: 'Ingeniero de software', salary: 1800, reqMonths: 0, reqEdu: 'grado_cs', req: { housing: 4, leisure: 3, food: 3 } }, // Setup Req
            { title: 'Software engineer mid', salary: 2500, reqMonths: 24, reqEdu: 'grado_cs', req: { housing: 6, leisure: 5, food: 4 } },
            { title: 'Senior software engineer', salary: 3400, reqMonths: 60, reqEdu: 'grado_cs', req: { housing: 8, leisure: 6, food: 5, clothes: 4 } },
            { title: 'Engineering manager', salary: 4800, reqMonths: 108, reqEdu: 'master_ai', req: { housing: 10, leisure: 8, food: 6, clothes: 6 } } // Exec
        ],
        'data': [
            { title: 'Data analyst / BI', salary: 1700, reqMonths: 0, reqEdu: 'grado_cs', req: { housing: 4, leisure: 3 } },
            { title: 'Data analyst senior', salary: 2400, reqMonths: 36, reqEdu: 'grado_cs', req: { housing: 6, leisure: 5, food: 3 } },
            { title: 'Data scientist', salary: 3300, reqMonths: 60, reqEdu: 'master_ai', req: { housing: 8, leisure: 7, food: 5, transport: 4 } },
            { title: 'Head of data', salary: 5000, reqMonths: 108, reqEdu: 'master_ai', req: { housing: 10, leisure: 8, food: 6, clothes: 5 } }
        ],
        'devops': [
            { title: 'DevOps / cloud engineer', salary: 1800, reqMonths: 0, reqEdu: 'grado_cs', req: { housing: 4, leisure: 3 } },
            { title: 'DevOps mid', salary: 2600, reqMonths: 36, reqEdu: 'grado_cs', req: { housing: 6, leisure: 5, food: 4 } },
            { title: 'Senior / Cloud architect', salary: 3600, reqMonths: 72, reqEdu: 'grado_cs', req: { housing: 9, leisure: 7, food: 5 } },
            { title: 'Director infraest. cloud', salary: 5000, reqMonths: 120, reqEdu: 'master_ai', req: { housing: 10, leisure: 8, food: 6, transport: 5 } }
        ],

        // Degree Civil

        'ing_obra': [
            { title: 'Ingeniero de obra', salary: 1700, reqMonths: 0, reqEdu: 'grado_civil', req: { housing: 4, food: 3, transport: 4 } }, // Travel
            { title: 'Jefe de obra', salary: 2400, reqMonths: 36, reqEdu: 'grado_civil', req: { housing: 6, food: 4, transport: 5, clothes: 3 } },
            { title: 'Jefe de proyecto', salary: 3300, reqMonths: 72, reqEdu: 'master_ing', req: { housing: 8, food: 5, transport: 6, clothes: 5 } },
            { title: 'Director construcción', salary: 4700, reqMonths: 120, reqEdu: 'master_ing', req: { housing: 10, food: 6, transport: 7, clothes: 6 } }
        ],
        'oficina_tecnica': [
            { title: 'Técnico oficina técnica', salary: 1600, reqMonths: 0, reqEdu: 'grado_civil', req: { housing: 4, food: 2 } },
            { title: 'Ingeniero de proyectos', salary: 2300, reqMonths: 36, reqEdu: 'grado_civil', req: { housing: 6, food: 3, transport: 4 } },
            { title: 'Responsable of. técnica', salary: 3000, reqMonths: 72, reqEdu: 'grado_civil', req: { housing: 8, food: 4, transport: 5, leisure: 4 } },
            { title: 'Director técnico', salary: 4300, reqMonths: 108, reqEdu: 'master_ing', req: { housing: 10, food: 5, transport: 6, clothes: 5 } }
        ],
        'urbz_consult': [
            { title: 'Consultor ingeniería / urb.', salary: 1700, reqMonths: 0, reqEdu: 'grado_civil', req: { housing: 4, clothes: 4, transport: 4 } },
            { title: 'Consultor senior', salary: 2500, reqMonths: 48, reqEdu: 'grado_civil', req: { housing: 7, clothes: 5, transport: 5 } },
            { title: 'Manager consultoría', salary: 3400, reqMonths: 84, reqEdu: 'master_ing', req: { housing: 9, clothes: 6, transport: 6, food: 5 } },
            { title: 'Socio / Director cons.', salary: 5000, reqMonths: 132, reqEdu: 'master_ing', req: { housing: 11, clothes: 8, transport: 7, food: 7 } }
        ]
    },
    get currentCareerPath() { return GameState.currentCareerPath || 'none'; },
    set currentCareerPath(v) { GameState.currentCareerPath = v; },
    get monthsInCurrentJob() { return GameState.monthsInCurrentJob || 0; },
    set monthsInCurrentJob(v) { GameState.monthsInCurrentJob = v; },
    get monthsSinceLastRaise() { return GameState.monthsSinceLastRaise || 0; },
    set monthsSinceLastRaise(v) { GameState.monthsSinceLastRaise = v; },

    getCareerPath(pathKey) {
        return this.careers[pathKey];
    },

    nextTurn() {
        if (GameState.company) return;

        // Gig Expiration
        if (GameState.jobType === 'gig') {
            if (GameState.gigRemaining > 0) {
                GameState.gigRemaining--;
            }
            if (GameState.gigRemaining <= 0) {
                // Show Modal
                const expiryMsg = `
                    <div style="text-align: center; margin-bottom: 20px;">
                        <div style="font-size: 4rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px rgba(244, 63, 94, 0.4)); animation: bounceIn 0.6s;">🏁</div>
                        <h3 style="color: #f43f5e; margin: 0; font-size: 1.5rem; text-shadow: 0 0 10px rgba(244, 63, 94, 0.3);">${t('contract_ended')}</h3>
                    </div>

                    <div style="background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.6)); border: 1px solid rgba(244, 63, 94, 0.3); border-radius: 16px; padding: 20px; text-align: center; margin-bottom: 20px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                        <div style="font-size: 0.85rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">${t('job_status')}</div>
                        <div style="font-size: 1.2rem; font-weight: 700; color: #f8fafc; margin-bottom: 10px;">${t('unemployed')}</div>
                        <div style="font-size: 0.9rem; color: #cbd5e1;">${t('temp_job_ended_msg')}</div>
                    </div>

                    <p style="text-align: center; color: #cbd5e1; font-size: 0.95rem; line-height: 1.5; margin: 0;">
                        ${t('find_new_opportunities')}
                    </p>
                `;

                UI.showModal(
                    ' ',
                    expiryMsg,
                    [{ text: t('job_search_btn'), style: 'primary', fn: () => UI.updateJob(this) }],
                    true
                );
                GameState.jobTitle = t('unemployed');
                GameState.salary = 0;
                GameState.jobType = 'unemployed';
                this.currentCareerPath = 'none';
                UI.updateJob(this); // Refresh UI
                return;
            }
        }

        if (!GameState.isStudying) {
            this.monthsInCurrentJob += 1;
            this.monthsSinceLastRaise = (this.monthsSinceLastRaise || 0) + 1; // Track Raises
        } else {
            this.monthsInCurrentJob += 0.5;
            this.monthsSinceLastRaise += 0.5;
        }

        // Check Promo
        this.checkAvailablePromotion();

        // Generate Gigs
    },

    // Generate Gigs
    generateMonthlyGigs() {
        // Check Active
        if (GameState.jobType === 'gig' && GameState.gigRemaining > 0) {
            return; // Skip
        }

        // Shuffle & Pick
        const shuffled = [...GIGS_POOL].sort(() => 0.5 - Math.random());
        GameState.currentGigs = shuffled.slice(0, 2).map(gig => ({ ...gig, path: 'temporary' }));
    },

    getAvailablePromotions() {
        if (this.currentCareerPath === 'entrepreneur' || this.currentCareerPath === 'none' || this.currentCareerPath === 'temporary') return null;

        const path = this.careers[this.currentCareerPath];
        if (!path) return null; // Guard
        const currentJobIndex = path.findIndex(j => j.title === GameState.jobTitle);

        if (currentJobIndex === -1 || currentJobIndex >= path.length - 1) return null;
        const nextJob = path[currentJobIndex + 1];
        return nextJob;
    },

    promote() {
        // No Promos (Tres Deporte)
        if (GameState.jobTitle === 'TRES DEPORTE') {
            const monthsSinceLastRequest = this.monthsSinceLastRaise || 0;

            if (monthsSinceLastRequest < 2) {
                return {
                    success: false,
                    message: t('tres_deporte_wait_msg').replace('{months}', 2 - monthsSinceLastRequest)
                };
            }

            // Reset
            this.monthsSinceLastRaise = 0;

            // Boss Excuses
            const excuseKeys = Array.from({ length: 30 }, (_, i) => `boss_excuse_${i + 1}`);
            const randomKey = excuseKeys[Math.floor(Math.random() * excuseKeys.length)];
            return { success: false, message: t(randomKey) };
        }


        // Promotion Logic
        const nextJob = this.getAvailablePromotions();
        if (!nextJob) return { success: false, message: t('job_no_promotions') };

        if (Math.floor(this.monthsInCurrentJob) < nextJob.reqMonths) {
            return { success: false, message: t('job_exp_missing', { months: (nextJob.reqMonths - this.monthsInCurrentJob).toFixed(1) }) };
        }

        if (nextJob.reqEdu) {
            if (!this.checkEducation(nextJob.reqEdu)) return { success: false, message: `Necesitas estudios de tipo: ${nextJob.reqEdu}` };
        }

        // Status Ladder
        if (nextJob.req) {
            const lsCheck = GameBalance.checkLifestyleReq(nextJob.req);
            if (!lsCheck.success) {
                return { success: false, message: `RRHH: "${lsCheck.message}"` };
            }
        }

        // Success
        GameState.jobTitle = nextJob.title;
        GameState.salary = nextJob.salary;
        this.monthsInCurrentJob = 0;

        // Reset Flag
        GameState.promotionNotified = false;

        return { success: true, message: t('promoted_to').replace('{job}', nextJob.title).replace('{salary}', nextJob.salary) };
    },

    checkAvailablePromotion() {
        if (GameState.jobType === 'gig' || GameState.jobType === 'unemployed') return;
        if (this.currentCareerPath === 'none' || this.currentCareerPath === 'entrepreneur') return;

        // Check Notified
        if (GameState.promotionNotified) return;

        const nextJob = this.getAvailablePromotions();
        if (!nextJob) return;

        // Reqs
        const reqMonths = nextJob.reqMonths;
        const currentMonths = this.monthsInCurrentJob;
        const isTimeOk = currentMonths >= reqMonths;
        const isEduOk = !nextJob.reqEdu || this.checkEducation(nextJob.reqEdu);

        if (isTimeOk && isEduOk) {
            GameState.promotionNotified = true;

            // Notif
            const themeColor = '#8b5cf6'; // Violet/Purple for Career
            const icon = '🚀';

            let msg = `
                <div style="text-align: center; margin-bottom: 20px;">
                    <div style="font-size: 4rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px ${themeColor}66); animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);">${icon}</div>
                    <h3 style="color: ${themeColor}; margin: 0; font-size: 1.6rem; text-shadow: 0 0 10px ${themeColor}4d; font-weight: 800; letter-spacing: 1px;">${t('promotion_available')}</h3>
                </div>

                <div style="background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.6)); border: 1px solid ${themeColor}4d; border-radius: 16px; padding: 25px; text-align: center; margin-bottom: 25px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                    <div style="font-size: 0.85rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px;">${t('promotion')}</div>
                    <div style="font-size: 1.4rem; font-weight: 700; color: #f8fafc; margin-bottom: 10px;">${getJobTranslation(nextJob.title)}</div>
                    <div style="font-size: 0.95rem; color: #cbd5e1;">${t('promotion_ready')}</div>
                </div>

                <p style="text-align: center; color: #cbd5e1; font-size: 1rem; line-height: 1.6; margin: 0; padding: 0 10px;">
                    ${t('promotion_go_to_work')}
                </p>
            `;

            UI.showModal(
                ' ',
                msg,
                [{
                    text: t('btn_go_to_work'),
                    style: 'primary',
                    fn: () => {
                        const btn = document.querySelector('.b-nav-item[data-view="job"]');
                        if (btn) btn.click();
                        // Also for desktop?
                        const dBtn = document.querySelector('.nav-btn[data-view="job"]');
                        if (dBtn) dBtn.click();
                    }
                }],
                true
            );
        }
    },

    checkEducation(req) {
        if (!req) return true;

        // OR Logic for Arrays
        if (Array.isArray(req)) {
            return req.some(r => GameState.education.includes(r));
        }

        // Strict Match
        if (GameState.education.includes(req)) return true;

        // Legacy Fallback (just in case)
        return GameState.education.some(e => {
            if (req === 'FP') return e.includes('FP') || e.includes('Grado') || e.includes('Ingeniería');
            if (req === 'Carrera') return e.includes('Grado') || e.includes('Ingeniería');
            if (req === 'Master') return e.includes('MBA') || e.includes('Master');
            return false;
        });
    },

    getAllVacancies() {
        const allJobs = [];
        for (const [pathKey, jobs] of Object.entries(this.careers)) {
            jobs.forEach(job => {
                if (job.title === GameState.jobTitle) return;
                allJobs.push({ ...job, path: pathKey });
            });
        }

        // Inject Gigs (Persisted Monthly)
        if (!GameState.currentGigs || GameState.currentGigs.length === 0) {
            this.generateMonthlyGigs();
        }

        GameState.currentGigs.forEach(gig => {
            allJobs.push(gig);
        });

        return allJobs;
    },

    applyToJob(jobTitle, force = false) {
        let targetJob, targetPath;

        // Careers
        for (const [pathKey, jobs] of Object.entries(this.careers)) {
            const found = jobs.find(j => j.title === jobTitle);
            if (found) {
                targetJob = found;
                targetPath = pathKey;
                break;
            }
        }

        // Gigs
        if (!targetJob) {
            targetJob = GIGS_POOL.find(g => g.title === jobTitle);
            targetPath = 'temporary';
        }

        if (!targetJob) return { success: false, message: t('job_offer_invalid') };
        if (targetJob.reqEdu && !this.checkEducation(targetJob.reqEdu)) {
            return { success: false, message: `Requisito académico no cumplido: ${targetJob.reqEdu}` };
        }

        // Lifestyle check for entry level and lateral moves
        if (targetJob.req) {
            const lsCheck = GameBalance.checkLifestyleReq(targetJob.req);
            if (!lsCheck.success) {
                return { success: false, message: `Requisitos de estatus no cumplidos: ${lsCheck.message}` };
            }
        }

        // Strict experience check
        // External applicants start at Entry Level
        // Higher positions must be earned via Promotion.
        if (targetJob.reqMonths > 0) {
            return { success: false, message: `Este puesto requiere experiencia interna previa. Debes empezar por un puesto de acceso (Nivel 0) y ascender.` };
        }

        if (GameState.company) {
            if (!force) {
                return { success: false, requiresConfirmation: true, message: t('company_close_required') };
            }
            GameState.company = null;
        }

        // Check if player already has a job (salary > 0) and confirm switch
        if (GameState.salary > 0 && !force) {
            return {
                success: false,
                requiresJobConfirmation: true,
                currentJob: GameState.jobTitle
            };
        }

        this.switchJobEnhanced(targetPath, targetJob);

        // Tutorial triggers
        let tutorialHandled = false;
        if (targetPath === 'temporary') {
            // Accepted a gig
            tutorialHandled = TutorialSystem.onGigAccepted();
        } else {
            // Accepted a real job
            TutorialSystem.onRealJobAccepted(targetJob.title);
        }

        return { success: true, message: t('hired_as').replace('{job}', targetJob.title), tutorialHandled: tutorialHandled };
    },

    switchJobEnhanced(pathKey, jobObj) {
        this.currentCareerPath = pathKey;
        GameState.jobTitle = jobObj.title;
        GameState.salary = jobObj.salary;
        this.monthsInCurrentJob = 0;
        this.monthsSinceLastRaise = 0; // Reset raise timer on new job

        if (jobObj.type === 'gig') {
            GameState.jobType = 'gig';
            GameState.gigRemaining = jobObj.duration;
        } else {
            GameState.jobType = 'career';
            GameState.gigRemaining = 0;
        }
    },

    requestRaise() {
        const raisePct = (Math.floor(Math.random() * 6) + 1); // 1 to 6%
        let msgList = raisePct >= 3 ? BossMessages.positive : BossMessages.negative;
        const msg = msgList[Math.floor(Math.random() * msgList.length)];

        const oldSalary = GameState.salary;
        const increase = Math.floor(oldSalary * (raisePct / 100));
        GameState.salary += increase;
        this.monthsSinceLastRaise = 0;

        return {
            success: true,
            increase: increase,
            raisePct: raisePct,
            message: t('salary_raise_msg').replace('{bossMsg}', msg).replace('{pct}', raisePct).replace('{amount}', formatCurrency(increase))
        };
    }
};

// --- Tutorial ---
const TutorialSystem = {
    overlayElement: null,
    highlightedElements: [],

    // Css styles for tutorial (injected once)
    injectStyles() {
        if (document.getElementById('tutorial-styles')) return;
        const style = document.createElement('style');
        style.id = 'tutorial-styles';
        style.textContent = `
            .tutorial-overlay {
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                right: 0 !important;
                bottom: 0 !important;
                width: 100vw !important;
                height: 100vh !important;
                background: rgba(0, 0, 0, 0.8) !important;
                z-index: 99999 !important;
                pointer-events: all !important;
                animation: tutorialFadeIn 0.3s ease-out;
            }
            @keyframes tutorialFadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            .tutorial-highlight {
                position: relative !important;
                z-index: 100001 !important;
                animation: tutorialPulse 1.5s infinite !important;
                box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.8), 0 0 40px rgba(56, 189, 248, 0.6) !important;
                pointer-events: auto !important;
                border-radius: 12px !important;
            }
            @keyframes tutorialPulse {
                0%, 100% { box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.8), 0 0 30px rgba(56, 189, 248, 0.5); }
                50% { box-shadow: 0 0 0 8px rgba(56, 189, 248, 0.6), 0 0 50px rgba(56, 189, 248, 0.7); }
            }
            .tutorial-tooltip {
                position: fixed !important;
                background: linear-gradient(145deg, #1e293b, #0f172a) !important;
                border: 2px solid rgba(56, 189, 248, 0.6) !important;
                border-radius: 16px !important;
                padding: 20px !important;
                max-width: 320px !important;
                z-index: 100002 !important;
                color: #f8fafc !important;
                box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8), 0 0 40px rgba(56, 189, 248, 0.3) !important;
                animation: tutorialSlideIn 0.3s ease-out;
            }
            @keyframes tutorialSlideIn {
                from { transform: translateY(20px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            .tutorial-tooltip h3 {
                color: #38bdf8;
                margin: 0 0 12px 0;
                font-size: 1.1rem;
                display: flex;
                align-items: center;
                gap: 8px;
            }
            .tutorial-tooltip p {
                margin: 0 0 15px 0;
                font-size: 0.9rem;
                line-height: 1.5;
                color: #e2e8f0;
            }
            .tutorial-tooltip button {
                background: linear-gradient(135deg, #38bdf8, #0ea5e9);
                border: none;
                color: white;
                padding: 12px 24px;
                border-radius: 10px;
                font-size: 0.95rem;
                font-weight: 700;
                cursor: pointer;
                width: 100%;
                transition: all 0.2s;
            }
            .tutorial-tooltip button:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 15px rgba(56, 189, 248, 0.4);
            }
            .tutorial-arrow {
                position: absolute;
                width: 0;
                height: 0;
                border: 10px solid transparent;
            }
            .tutorial-arrow.bottom {
                bottom: -20px;
                left: 50%;
                transform: translateX(-50%);
                border-top-color: rgba(56, 189, 248, 0.5);
            }
            .tutorial-arrow.top {
                top: -20px;
                left: 50%;
                transform: translateX(-50%);
                border-bottom-color: rgba(56, 189, 248, 0.5);
            }
        `;
        document.head.appendChild(style);
    },

    showOverlay() {
        this.injectStyles();
        if (this.overlayElement) return;
        this.overlayElement = document.createElement('div');
        this.overlayElement.className = 'tutorial-overlay';
        document.body.appendChild(this.overlayElement);
    },

    hideOverlay() {
        if (this.overlayElement) {
            this.overlayElement.remove();
            this.overlayElement = null;
        }
    },

    addHighlight(selectorOrElement) {
        let elements = [];
        if (typeof selectorOrElement === 'string') {
            elements = document.querySelectorAll(selectorOrElement);
        } else if (selectorOrElement instanceof Element) {
            elements = [selectorOrElement];
        } else if (selectorOrElement && selectorOrElement.length) {
            // Handle NodeList or Array
            elements = Array.from(selectorOrElement);
        }

        elements.forEach(el => {
            el.classList.add('tutorial-highlight');
            this.highlightedElements.push(el);
        });
    },

    removeHighlights() {
        this.highlightedElements.forEach(el => {
            el.classList.remove('tutorial-highlight');
        });
        this.highlightedElements = [];
    },

    lockScroll() {
        document.body.style.overflow = 'hidden';
    },

    unlockScroll() {
        document.body.style.overflow = '';
    },

    showTooltip(targetSelectorOrElement, title, message, buttonText, onComplete) {
        const existing = document.querySelector('.tutorial-tooltip');
        if (existing) existing.remove();

        let target;
        if (typeof targetSelectorOrElement === 'string') {
            target = document.querySelector(targetSelectorOrElement);
        } else if (targetSelectorOrElement instanceof Element) {
            target = targetSelectorOrElement;
        }

        if (!target) return;

        const tooltip = document.createElement('div');
        tooltip.className = 'tutorial-tooltip';
        tooltip.innerHTML = `
            <h3>💡 ${title}</h3>
            <p>${message}</p>
            <button>${buttonText}</button>
            <div class="tutorial-arrow bottom"></div>
        `;

        document.body.appendChild(tooltip);

        // Position tooltip above target
        const targetRect = target.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();

        // Default: Above
        let offset = 8; // Reduced from 12 for tighter fit
        let top = targetRect.top - tooltipRect.height - offset;
        let left = targetRect.left + (targetRect.width / 2) - (tooltipRect.width / 2);
        let arrowClass = 'bottom';

        // Position
        if (top < 10) {
            top = targetRect.bottom + offset;
            arrowClass = 'top';
        }

        // Keep within viewport (horizontal)
        if (left < 10) left = 10;
        if (left + tooltipRect.width > window.innerWidth - 10) {
            left = window.innerWidth - tooltipRect.width - 10;
        }

        // Final check: Bottom screen edge
        if (top + tooltipRect.height > window.innerHeight - 10) {
            // If it goes off bottom, force it above even if it's tight, or try center?
            // Fallback to center screen if completely stuck
            if (top < 10) {
                top = window.innerHeight / 2 - tooltipRect.height / 2;
                left = window.innerWidth / 2 - tooltipRect.width / 2;
                arrowClass = 'hidden'; // Hide arrow if forced center
            } else {
                top = window.innerHeight - tooltipRect.height - 10;
            }
        }

        tooltip.style.top = top + 'px';
        tooltip.style.left = left + 'px';

        const arrow = tooltip.querySelector('.tutorial-arrow');
        if (arrowClass === 'hidden') {
            arrow.style.display = 'none';
        } else {
            arrow.className = `tutorial-arrow ${arrowClass}`;
        }

        tooltip.querySelector('button').onclick = () => {
            tooltip.remove();
            if (onComplete) onComplete();
        };
    },

    hideTooltip() {
        const existing = document.querySelector('.tutorial-tooltip');
        if (existing) existing.remove();
    },

    // Step 1: Choose Education
    step1_ChooseEducation() {
        if (GameState.tutorialFlags.educationChosen) return;

        // Inject styles first
        this.injectStyles();

        GameState.tutorialStep = 1;

        // Force navigation to Education Tab
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.getElementById('education-view').classList.add('active');
        document.querySelector(`button[data-view="education"]`).classList.add('active');

        // Create education choice modal
        const overlay = document.createElement('div');
        overlay.className = 'tutorial-overlay';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.innerHTML = `
            <div style="
                background: linear-gradient(145deg, #1e293b, #0f172a);
                border: 2px solid rgba(56, 189, 248, 0.4);
                border-radius: 24px;
                padding: 35px;
                max-width: 450px;
                width: 90%;
                text-align: center;
                box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6), 0 0 50px rgba(56, 189, 248, 0.15);
                animation: tutorialSlideIn 0.4s ease-out;
            ">
                <div style="font-size: 4rem; margin-bottom: 15px; filter: drop-shadow(0 0 20px rgba(56, 189, 248, 0.4));">🎓</div>
                <h2 style="color: #38bdf8; margin: 0 0 10px 0; font-size: 1.5rem;">${t('tutorial_welcome_title')}</h2>
                <p style="color: #94a3b8; margin: 0 0 25px 0; font-size: 0.95rem;">
                    ${t('tutorial_age_16')}<br>
                    ${t('tutorial_decide_future')}
                </p>
                <p style="color: #e2e8f0; margin: 0 0 20px 0; font-size: 1rem; font-weight: 600;">
                    ${t('tutorial_choose_education')}
                </p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                    <button id="tutorial-choose-bach" style="
                        background: linear-gradient(145deg, rgba(56, 189, 248, 0.1), rgba(14, 165, 233, 0.05));
                        border: 2px solid rgba(56, 189, 248, 0.3);
                        border-radius: 16px;
                        padding: 20px 15px;
                        cursor: pointer;
                        transition: all 0.3s;
                        color: #f8fafc;
                    ">
                        <div style="font-size: 2.5rem; margin-bottom: 10px;">📚</div>
                        <div style="font-weight: 700; font-size: 1rem; margin-bottom: 5px;">${t('tutorial_bachillerato')}</div>
                        <div style="font-size: 0.75rem; color: #94a3b8;">18 ${t('months')} • ${t('free')}</div>
                        <div style="font-size: 0.7rem; color: #4ade80; margin-top: 5px;">${t('tutorial_access_university')}</div>
                    </button>
                    <button id="tutorial-choose-fp" style="
                        background: linear-gradient(145deg, rgba(250, 204, 21, 0.1), rgba(234, 179, 8, 0.05));
                        border: 2px solid rgba(250, 204, 21, 0.3);
                        border-radius: 16px;
                        padding: 20px 15px;
                        cursor: pointer;
                        transition: all 0.3s;
                        color: #f8fafc;
                    ">
                        <div style="font-size: 2.5rem; margin-bottom: 10px;">🔧</div>
                        <div style="font-weight: 700; font-size: 1rem; margin-bottom: 5px;">${t('tutorial_fp_medio')}</div>
                        <div style="font-size: 0.75rem; color: #94a3b8;">18 ${t('months')} • 500€</div>
                        <div style="font-size: 0.7rem; color: #4ade80; margin-top: 5px;">${t('tutorial_quick_job')}</div>
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);

        const bachBtn = overlay.querySelector('#tutorial-choose-bach');
        const fpBtn = overlay.querySelector('#tutorial-choose-fp');

        [bachBtn, fpBtn].forEach(btn => {
            btn.onmouseenter = () => {
                btn.style.transform = 'translateY(-5px)';
                btn.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
            };
            btn.onmouseleave = () => {
                btn.style.transform = 'translateY(0)';
                btn.style.boxShadow = 'none';
            };
        });

        bachBtn.onclick = () => {
            overlay.remove();
            EducationModule.startCourse('bachillerato');
            GameState.tutorialFlags.educationChosen = true;
            this.step2_GoToWork();
        };

        fpBtn.onclick = () => {
            overlay.remove();
            // Affordability
            if (GameState.cash >= 500) {
                EducationModule.startCourse('fp_medio');
            } else {
                EducationModule.startCourse('bachillerato');
                showGameAlert(t('education_fail_msg'), 'info');
            }
            GameState.tutorialFlags.educationChosen = true;
            this.step2_GoToWork();
        };
    },

    // Step 2: Go to Work tab
    step2_GoToWork() {
        if (GameState.tutorialFlags.wentToWorkFirst) return;

        this.injectStyles();
        GameState.tutorialStep = 2;

        // Update UI to show education status
        UI.updateEducation(EducationModule);

        // Wait a moment, then show a modal with button to go to Work
        setTimeout(() => {
            const overlay = document.createElement('div');
            overlay.className = 'tutorial-overlay';
            overlay.style.display = 'flex';
            overlay.style.alignItems = 'center';
            overlay.style.justifyContent = 'center';
            overlay.innerHTML = `
                <div style="
                    background: linear-gradient(145deg, #1e293b, #0f172a);
                    border: 2px solid rgba(56, 189, 248, 0.4);
                    border-radius: 20px;
                    padding: 30px;
                    max-width: 380px;
                    width: 90%;
                    text-align: center;
                    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(56, 189, 248, 0.15);
                    animation: tutorialSlideIn 0.3s ease-out;
                ">
                    <div style="font-size: 3rem; margin-bottom: 15px; filter: drop-shadow(0 0 15px rgba(56, 189, 248, 0.4));">💼</div>
                    <h2 style="color: #38bdf8; margin: 0 0 15px 0; font-size: 1.3rem;">${t('tutorial_enrolled')}</h2>
                    <p style="color: #e2e8f0; margin: 0 0 20px 0; font-size: 0.95rem; line-height: 1.5;">
                        ${t('tutorial_earn_money_studying')}
                    </p>
                    <p style="color: #94a3b8; margin: 0 0 25px 0; font-size: 0.85rem;">
                        ${t('tutorial_find_first_job')}
                    </p>
                    <button id="tutorial-go-work" style="
                        background: linear-gradient(135deg, #38bdf8, #0ea5e9);
                        border: none;
                        color: white;
                        padding: 14px 30px;
                        border-radius: 12px;
                        font-size: 1rem;
                        font-weight: 700;
                        cursor: pointer;
                        width: 100%;
                        transition: all 0.2s;
                        box-shadow: 0 4px 15px rgba(56, 189, 248, 0.3);
                    ">💼 ${t('go_to_work')}</button>
                </div>
            `;
            document.body.appendChild(overlay);

            const btn = overlay.querySelector('#tutorial-go-work');
            btn.onmouseenter = () => { btn.style.transform = 'translateY(-2px)'; };
            btn.onmouseleave = () => { btn.style.transform = 'translateY(0)'; };
            btn.onclick = () => {
                overlay.remove();
                GameState.tutorialFlags.wentToWorkFirst = true;
                // Navigate to Work tab
                const workTab = document.querySelector('.b-nav-item[data-view="job"]');
                if (workTab) workTab.click();
                setTimeout(() => this.step3_AcceptGig(), 500);
            };
        }, 1250);
    },

    // Step 3: Accept a Gig
    step3_AcceptGig() {
        if (GameState.tutorialFlags.acceptedFirstGig) return;

        GameState.tutorialStep = 3;

        // Show explanation modal
        const themeColor = '#facc15'; // Yellow for temp work
        const icon = '🎒';

        const tutorialMsg = `
            <div style="text-align: center; margin-bottom: 20px;">
                <div style="font-size: 4rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px ${themeColor}66);">${icon}</div>
                <h3 style="color: ${themeColor}; margin: 0; font-size: 1.5rem; text-shadow: 0 0 10px ${themeColor}4d; font-weight: 800;">${t('tutorial_temp_jobs_title')}</h3>
            </div>

            <div style="background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.6)); border: 1px solid ${themeColor}4d; border-radius: 16px; padding: 20px; margin-bottom: 20px;">
                <p style="color: #e2e8f0; margin: 0 0 15px 0; font-size: 0.95rem; line-height: 1.6; text-align: center;">
                    ${t('tutorial_temp_jobs_msg')}
                </p>
                
                <div style="background: rgba(74, 222, 128, 0.1); border: 1px solid rgba(74, 222, 128, 0.3); border-radius: 12px; padding: 12px; margin-bottom: 15px;">
                    <div style="color: #4ade80; font-weight: 700; font-size: 0.85rem; margin-bottom: 5px;">💡 ${t('tutorial_tip')}</div>
                    <div style="color: #cbd5e1; font-size: 0.9rem;">${t('tutorial_tip_accept_job')}</div>
                </div>
                
                <div style="background: rgba(129, 140, 248, 0.1); border: 1px solid rgba(129, 140, 248, 0.3); border-radius: 12px; padding: 12px;">
                    <div style="color: #818cf8; font-weight: 700; font-size: 0.85rem; margin-bottom: 5px;">🎓 ${t('tutorial_future')}</div>
                    <div style="color: #cbd5e1; font-size: 0.9rem;">${t('tutorial_future_msg')}</div>
                </div>
            </div>
        `;

        UI.showModal(
            ' ',
            tutorialMsg,
            [{
                text: `✅ ${t('understood')}`,
                style: 'primary',
                fn: () => {
                    // Block everything except the gig section
                    this.showOverlay();
                    this.addHighlight('#temp-jobs-section');

                    // Scroll to the temp jobs section
                    const tempJobsSection = document.querySelector('#temp-jobs-section');
                    if (tempJobsSection) {
                        tempJobsSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }
            }],
            true // isHTML
        );
    },

    // Called when player accepts any gig
    onGigAccepted() {
        if (GameState.tutorialStep === 3 && !GameState.tutorialFlags.acceptedFirstGig) {
            this.hideOverlay();
            this.removeHighlights();
            GameState.tutorialFlags.acceptedFirstGig = true;
            GameState.tutorialStep = 4; // Free play while studying

            // Acceptance Msg
            const welcomeMsg = `
                <div style="text-align: center; margin-bottom: 20px;">
                    <div style="font-size: 4rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px rgba(250, 204, 21, 0.4)); animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);">⚡</div>
                    <h3 style="color: #facc15; margin: 0; font-size: 1.5rem; text-shadow: 0 0 10px rgba(250, 204, 21, 0.3);">${t('job_accepted')}</h3>
                </div>

                <div style="background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.6)); border: 1px solid rgba(250, 204, 21, 0.3); border-radius: 16px; padding: 20px; text-align: center; margin-bottom: 20px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                    <div style="font-size: 0.85rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">${t('gig_jobs')}</div>
                    <div style="font-size: 0.9rem; color: #cbd5e1;">${t('tutorial_earning_while_studying')}</div>
                </div>

                <p style="text-align: center; color: #cbd5e1; font-size: 0.9rem; line-height: 1.5; margin: 0;">
                    ${t('tutorial_free_mode_msg')}
                </p>
            `;

            UI.showModal(' ', welcomeMsg, [{
                text: `🚀 ${t('understood')}`,
                style: 'success',
                fn: () => {
                    // 1. Setup Focus
                    TutorialSystem.showOverlay();
                    TutorialSystem.addHighlight('#next-turn-btn');
                    window.scrollTo({ top: 0, behavior: 'smooth' });

                    // 2. Show Tooltip (Like Net Worth explanation)
                    setTimeout(() => {
                        TutorialSystem.showTooltip(
                            '#next-turn-btn',
                            `⏳ ${t('tutorial_turns_mechanic')}`,
                            t('tutorial_turns_msg'),
                            t('understood'),
                            () => {
                                TutorialSystem.hideTooltip();
                                // Overlay and Highlight remain until user clicks the button (handled in nextTurn)
                            }
                        );
                    }, 500);
                }
            }], true);
            return true; // Indicates tutorial modal handled the event
        }
        return false;
    },

    // Tutorial: Degree Completion
    onDegreeCompleted(degreeName) {
        if (GameState.tutorialFlags.completedFirstDegree) return;

        GameState.tutorialStep = 5;
        GameState.tutorialFlags.completedFirstDegree = true;

        // Celebration modal
        const themeColor = '#4ade80'; // Green/Success (Match text) or Indigo? Plan said Indigo but text uses Green. Let's stick to Green for "Enhorabuena"/Success match.
        // Using Green (#4ade80) for success vibe


        // But keep the success/checks vibe.

        const finalTheme = '#818cf8'; // Indigo
        const icon = '🎓';

        let successMsg = `
        <div style="text-align: center; margin-bottom: 20px;">
            <div style="font-size: 4rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px ${finalTheme}66); animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);">${icon}</div>
            <h3 style="color: ${finalTheme}; margin: 0; font-size: 1.6rem; text-shadow: 0 0 10px ${finalTheme}4d; font-weight: 800; letter-spacing: 1px;">${t('edu_complete_title')}</h3>
        </div>

        <div style="background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.6)); border: 1px solid ${finalTheme}4d; border-radius: 16px; padding: 25px; text-align: center; margin-bottom: 25px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
            <div style="font-size: 0.85rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px;">${t('edu_degree_obtained')}</div>
            <div style="font-size: 1.6rem; font-weight: 800; color: #f8fafc; margin-bottom: 15px;">${degreeName}</div>
            
            <div style="text-align: left; background: ${finalTheme}1a; border-radius: 12px; padding: 15px; margin-top: 15px; border: 1px solid ${finalTheme}33;">
                <div style="margin-bottom: 8px; font-size: 0.95rem; color: #e2e8f0;">✅ ${t('tutorial_perm_jobs_access')}</div>
                <div style="margin-bottom: 8px; font-size: 0.95rem; color: #e2e8f0;">✅ ${t('tutorial_better_salaries')}</div>
                <div style="font-size: 0.95rem; color: #e2e8f0;">✅ ${t('tutorial_promotions_available')}</div>
            </div>
        </div>
    `;

        UI.showModal(
            ' ',
            successMsg,
            [{
                text: `🔍 ${t('find_job')}`,
                style: 'primary',
                fn: () => {
                    GameState.tutorialFlags.wentToWorkAfterDegree = true;

                    // Navigate to Work tab
                    const jobTab = document.querySelector('.nav-btn[data-view="job"]'); // Use safe selector
                    if (jobTab) jobTab.click();

                    // Fallback navigation if click fails or logic is different
                    UI.updateJob(JobSystem); // Ensure refreshed

                    setTimeout(() => this.step6_AcceptRealJob(), 500);
                }
            }],
            true // isHTML
        );
    },

    // Tutorial: Accept Real Job
    step6_AcceptRealJob() {
        GameState.tutorialStep = 6;

        // Show explanation modal
        showGameAlert(
            t('tutorial_jobs_unlocked_msg'),
            'success',
            `🎉 ${t('tutorial_jobs_unlocked')}`,
            () => {
                // Block everything except the market section
                this.showOverlay();
                const target = document.querySelector('#regular-jobs-grid');
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    this.addHighlight('#regular-jobs-grid'); // Pass SELECTOR string
                } else {
                    // Fallback to market section wrapper if grid not found
                    const fallback = document.querySelector('.market-section');
                    if (fallback) {
                        fallback.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        this.addHighlight('.market-section');
                    } else {
                        this.addHighlight('.company-dashboard-full-view');
                    }
                }
            },
            true
        );
    },

    // Called when player accepts a real job (not gig)
    onRealJobAccepted(jobTitle) {
        if (GameState.tutorialStep === 6 && !GameState.tutorialFlags.acceptedFirstRealJob) {
            this.hideOverlay();
            this.removeHighlights();
            this.hideTooltip();
            GameState.tutorialFlags.acceptedFirstRealJob = true;
            GameState.tutorialStep = 7;

            this.step7_ExplainJobSystem(jobTitle);
        }
    },

    // Tutorial: Explain Job System
    step7_ExplainJobSystem(jobTitle) {
        const content = `
            <div style="text-align: center; margin-bottom: 20px;">
                <div style="font-size: 3rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px rgba(56, 189, 248, 0.4));">💼</div>
                <div style="font-size: 0.85rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 2px;">${t('tutorial_first_real_job')}</div>
            </div>
            
            <div style="background: linear-gradient(145deg, rgba(74, 222, 128, 0.1), rgba(34, 197, 94, 0.05)); border: 1px solid rgba(74, 222, 128, 0.3); border-radius: 12px; padding: 15px; margin-bottom: 15px; text-align: center;">
                <div style="font-size: 1.2rem; color: #4ade80; font-weight: 700;">${getJobTranslation(jobTitle)}</div>
            </div>
            
            <div style="display: grid; gap: 12px;">
                <div style="background: rgba(15, 23, 42, 0.5); border-radius: 10px; padding: 12px;">
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 5px;">
                        <span style="font-size: 1.2rem;">📈</span>
                        <span style="color: #38bdf8; font-weight: 600;">${t('tutorial_promotions')}</span>
                    </div>
                    <div style="font-size: 0.85rem; color: #94a3b8;">${t('tutorial_promotions_msg')}</div>
                </div>
                <div style="background: rgba(15, 23, 42, 0.5); border-radius: 10px; padding: 12px;">
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 5px;">
                        <span style="font-size: 1.2rem;">💰</span>
                        <span style="color: #38bdf8; font-weight: 600;">${t('salary')}</span>
                    </div>
                    <div style="font-size: 0.85rem; color: #94a3b8;">${t('tutorial_salary_msg')}</div>
                </div>
                <div style="background: rgba(15, 23, 42, 0.5); border-radius: 10px; padding: 12px;">
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 5px;">
                        <span style="font-size: 1.2rem;">🔄</span>
                        <span style="color: #38bdf8; font-weight: 600;">${t('tutorial_change_job')}</span>
                    </div>
                    <div style="font-size: 0.85rem; color: #94a3b8;">${t('tutorial_change_job_msg')}</div>
                </div>
            </div>
        `;

        UI.showModal(
            `🎉 ${t('congratulations')}`,
            content,
            [{
                text: `${t('tutorial_lets_work')} 💪`, style: 'primary', fn: () => {
                    GameState.tutorialStep = 8;
                    GameState.tutorialFlags.tutorialComplete = true;
                    PersistenceModule.saveGame();
                }
            }], true
        );
    },

    // Tutorial: Housing Crisis
    step8_ForceHousing() {
        if (GameState.tutorialState.forceHousing) return;
        GameState.tutorialStep = 8;
        GameState.tutorialState.forceHousing = true;

        this.injectStyles();

        // Custom Overlay with Direct Action
        const overlay = document.createElement('div');
        overlay.className = 'tutorial-overlay';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.innerHTML = `
            <div style="
                background: linear-gradient(145deg, #1e293b, #0f172a);
                border: 2px solid rgba(244, 63, 94, 0.4);
                border-radius: 24px;
                padding: 35px;
                max-width: 450px;
                width: 90%;
                text-align: center;
                box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6), 0 0 50px rgba(244, 63, 94, 0.15);
                animation: tutorialSlideIn 0.4s ease-out;
            ">
                <div style="font-size: 4rem; margin-bottom: 15px; filter: drop-shadow(0 0 20px rgba(244, 63, 94, 0.4)); animation: tutorialShake 0.5s infinite;">🏠</div>
                <h2 style="color: #f43f5e; margin: 0 0 15px 0; font-size: 1.6rem; text-shadow: 0 0 20px rgba(244, 63, 94, 0.3);">${t('tutorial_kicked_out')}</h2>
                
                <div style="background: rgba(255, 255, 255, 0.05); padding: 15px; border-radius: 12px; margin-bottom: 20px; text-align: left; font-style: italic; color: #cbd5e1;">
                    "${t('tutorial_mom_quote')}"
                </div>

                <p style="color: #e2e8f0; margin: 0 0 25px 0; font-size: 1rem;">
                    😱 <strong>${t('emergency')}</strong> ${t('tutorial_need_housing')}
                </p>

                <button id="tutorial-go-housing-btn" style="
                    background: linear-gradient(135deg, #f43f5e, #e11d48);
                    border: none;
                    color: white;
                    padding: 16px 30px;
                    border-radius: 12px;
                    font-size: 1.1rem;
                    font-weight: 700;
                    cursor: pointer;
                    width: 100%;
                    transition: all 0.2s;
                    box-shadow: 0 4px 15px rgba(244, 63, 94, 0.4);
                ">📦 ${t('find_housing')}</button>
            </div>
            <style>
                @keyframes tutorialShake {
                    0% { transform: rotate(0deg); }
                    25% { transform: rotate(-5deg); }
                    75% { transform: rotate(5deg); }
                    100% { transform: rotate(0deg); }
                }
            </style>`;

        document.body.appendChild(overlay);

        overlay.querySelector('#tutorial-go-housing-btn').onclick = () => {
            overlay.remove();

            // Navigate to Lifestyle
            document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            document.getElementById('lifestyle-view').classList.add('active');

            // Update active state in nav
            const lifestyleBtn = document.querySelector(`button[data-view="lifestyle"]`);
            if (lifestyleBtn) lifestyleBtn.classList.add('active');

            // Sync bottom nav (mobile)
            document.querySelectorAll('.b-nav-item').forEach(b => b.classList.remove('active'));
            const mobileBtn = document.querySelector(`.b-nav-item[data-view="lifestyle"]`);
            if (mobileBtn) mobileBtn.classList.add('active');

            UI.updateLifestyle(LifestyleModule);

            // Block navigation, NEXT TURN, AND USER PROFILE
            document.querySelectorAll('.nav-btn, .b-nav-item').forEach(btn => {
                btn.style.pointerEvents = 'none';
                btn.style.opacity = '0.5';
            });
            const activeBtn = document.querySelector(`.nav-btn.active`);
            if (activeBtn) activeBtn.style.opacity = '1';
            const activeMobileBtn = document.querySelector(`.b-nav-item.active`);
            if (activeMobileBtn) activeMobileBtn.style.opacity = '1';

            // Block Next Turn Buttons
            document.querySelectorAll('#next-turn-btn, #dashboard-next-btn').forEach(btn => {
                btn.style.pointerEvents = 'none';
                btn.style.opacity = '0.5';
            });

            // Block User Profile (Parent of the name display)
            const userProfileBtn = document.getElementById('header-player-name')?.parentElement;
            if (userProfileBtn) {
                userProfileBtn.style.pointerEvents = 'none';
                userProfileBtn.style.opacity = '0.5';
            }

            // Highlight Housing Section
            setTimeout(() => {
                const housingSection = document.getElementById('housing-options');
                if (housingSection) {
                    housingSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    this.addHighlight('#housing-options');
                }

                // Highlight Sofa button specifically
                const sofaButtons = Array.from(document.querySelectorAll('button'));
                const sofaBtn = sofaButtons.find(b => b.innerText.includes('Sofá') || (b.getAttribute('onclick') && b.getAttribute('onclick').includes('sofa')));

                if (sofaBtn) {
                    this.addHighlight(sofaBtn);
                    this.showTooltip(
                        sofaBtn,
                        t('tutorial_emergency_title'),
                        t('tutorial_emergency_msg'),
                        t('understood'),
                        null
                    );
                } else {
                    // Fallback if button not found
                    this.showTooltip(
                        '#housing-options',
                        t('tutorial_find_housing_title'),
                        t('tutorial_find_housing_msg'),
                        t('understood'),
                        null
                    );
                }
            }, 600);
        };
    },

    // Tutorial: Independence Celebration
    step9_Independence() {
        GameState.tutorialStep = 9;
        GameState.tutorialState.forceHousing = false; // Release lock
        GameState.tutorialFlags.independent = true;
        this.removeHighlights();
        this.hideTooltip();

        // Unblock navigation, NEXT TURN, AND USER PROFILE
        document.querySelectorAll('.nav-btn, .b-nav-item').forEach(btn => {
            btn.style.pointerEvents = 'all';
            btn.style.opacity = '1';
        });

        document.querySelectorAll('#next-turn-btn, #dashboard-next-btn').forEach(btn => {
            btn.style.pointerEvents = 'all';
            btn.style.opacity = '1';
        });

        const userProfileBtn = document.getElementById('header-player-name')?.parentElement;
        if (userProfileBtn) {
            userProfileBtn.style.pointerEvents = 'all';
            userProfileBtn.style.opacity = '1';
        }

        // Congratulation modal
        const themeColor = '#f59e0b'; // Amber/Gold
        const icon = '🔑';

        let indepMsg = `
            <div style="text-align: center; margin-bottom: 20px;">
                <div style="font-size: 4rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px ${themeColor}66); animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);">${icon}</div>
                <h3 style="color: ${themeColor}; margin: 0; font-size: 1.6rem; text-shadow: 0 0 10px ${themeColor}4d; font-weight: 800; letter-spacing: 1px;">${t('tutorial_independence')}</h3>
            </div>

            <div style="background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.6)); border: 1px solid ${themeColor}4d; border-radius: 16px; padding: 25px; text-align: center; margin-bottom: 25px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                <div style="font-size: 0.85rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px;">${t('tutorial_new_stage')}</div>
                <div style="font-size: 1.4rem; font-weight: 700; color: #f8fafc; margin-bottom: 15px;">${t('tutorial_financial_control')}</div>
                
                <div style="display: inline-block; background: ${themeColor}26; border: 1px solid ${themeColor}4d; padding: 10px 20px; border-radius: 30px;">
                    <span style="color: ${themeColor}; font-weight: 700; font-size: 1.1rem;">${t('tutorial_emancipated')}</span>
                </div>
            </div>

            <p style="text-align: center; color: #cbd5e1; font-size: 1rem; line-height: 1.6; margin: 0; padding: 0 10px;">
                ${t('tutorial_independence_msg')}
            </p>
        `;

        UI.showModal(
            ' ',
            indepMsg,
            [{
                text: `🏠 ${t('view_finances')}`,
                style: 'success',
                fn: () => {
                    // Scroll to top immediately to ensure header is visible
                    window.scrollTo({ top: 0, behavior: 'auto' });

                    // Mobile/Header Home Button logic
                    const homeTab = document.querySelector('.nav-btn[data-view="dashboard"]');
                    if (homeTab) homeTab.click();

                    // Restore Personal Finance Tutorial Chain
                    TutorialSystem.continueToMonthlyFlow();
                }
            }], true
        );
    },

    // Contextual tutorials router
    checkContextual(view) {
        // Only run if main tutorial is complete
        if (!GameState.tutorialFlags.tutorialComplete) return;

        switch (view) {
            case 'company_summary':
                this.tutorial_CompanySummary();
                break;
            case 'company_staff':
                this.tutorial_CompanyPersonnel();
                break;
            case 'company_product':
                this.tutorial_CompanyProduct();
                break;
            case 'company_marketing':
                this.tutorial_CompanyMarketing_V2();
                break;
            case 'company_finance':
                this.tutorial_CompanyFinance();
                break;
        }
    },

    // Tutorial: Company Summary
    tutorial_CompanySummary() {
        if (GameState.tutorialFlags.seenCompanySummary) return;

        // Don't set flag yet. Wait for success.

        this.injectStyles();
        this.showOverlay();
        this.lockScroll();

        // Retry check for element (up to 5 times, 200ms apart)
        let attempts = 0;
        const check = setInterval(() => {
            attempts++;
            const summaryTab = document.getElementById('comp-summary-tab');
            if (summaryTab) {
                clearInterval(check);

                // Mark as seen only on success
                GameState.tutorialFlags.seenCompanySummary = true;
                PersistenceModule.saveGame();

                // Find the summary cards container (first grid usually)
                const grid = summaryTab.querySelector('div[style*="display:grid"]') || summaryTab.firstElementChild;

                if (grid) {
                    this.addHighlight(grid);
                    grid.scrollIntoView({ behavior: 'auto', block: 'center' });

                    this.showTooltip(
                        grid,
                        t('financial_health'),
                        t('tutorial_profit_rule'),
                        t('next'),
                        () => {
                            this.removeHighlights();
                            this.hideTooltip();

                            // Section: News
                            setTimeout(() => {
                                const newsCard = document.getElementById('comp-summary-news');
                                if (newsCard) {
                                    this.addHighlight(newsCard);
                                    newsCard.scrollIntoView({ behavior: 'auto', block: 'center' });

                                    this.showTooltip(
                                        newsCard,
                                        t('news'),
                                        t('tutorial_news_msg'),
                                        t('next'),
                                        () => {
                                            this.removeHighlights();
                                            this.hideTooltip();

                                            // Section: General Status
                                            setTimeout(() => {
                                                const statusCard = document.getElementById('comp-status-card');
                                                if (statusCard) {
                                                    this.addHighlight(statusCard);
                                                    statusCard.scrollIntoView({ behavior: 'auto', block: 'center' });

                                                    this.showTooltip(
                                                        statusCard,
                                                        t('tutorial_general_status'),
                                                        t('tutorial_general_status_msg'),
                                                        t('go_to_finance'),
                                                        () => {
                                                            this.removeHighlights();
                                                            this.hideOverlay();
                                                            this.hideTooltip();
                                                            this.unlockScroll();

                                                            // Auto-navigate to Finance
                                                            const financeTab = document.querySelector('button[data-tab="finance"]');
                                                            if (financeTab) financeTab.click();
                                                        }
                                                    );
                                                } else {
                                                    this.hideOverlay();
                                                    this.unlockScroll();
                                                }
                                            }, 500);
                                        }
                                    );
                                } else {
                                    // Fallback to status card
                                    setTimeout(() => {
                                        const statusCard = document.getElementById('comp-status-card');
                                        if (statusCard) {
                                            this.addHighlight(statusCard);
                                            statusCard.scrollIntoView({ behavior: 'auto', block: 'center' });

                                            this.showTooltip(
                                                t('tutorial_general_status'),
                                                t('tutorial_general_status_msg'),
                                                t('go_to_finance'),
                                                () => {
                                                    this.removeHighlights();
                                                    this.hideOverlay();
                                                    this.hideTooltip();
                                                    this.unlockScroll();

                                                    // Auto-navigate to Finance
                                                    const financeTab = document.querySelector('button[data-tab="finance"]');
                                                    if (financeTab) financeTab.click();
                                                }
                                            );
                                        } else {
                                            this.hideOverlay();
                                            this.unlockScroll();
                                        }
                                    }, 500);
                                }
                            }, 500);
                        }
                    );
                } else {
                    // Fallback
                    this.hideOverlay();
                    this.unlockScroll();
                }
            } else {
                if (attempts >= 10) {
                    clearInterval(check);
                    this.hideOverlay();
                    this.unlockScroll();
                    console.warn('Tutorial Target Not Found: comp-summary-tab');
                }
            }
        }, 200);
    },

    // Tutorial: Personnel
    tutorial_CompanyPersonnel() {
        if (GameState.tutorialFlags.seenCompanyPersonnel) return;

        this.injectStyles();
        this.showOverlay();

        let attempts = 0;
        const check = setInterval(() => {
            attempts++;
            const hireTab = document.getElementById('comp-hire-tab');
            if (hireTab) {
                clearInterval(check);
                GameState.tutorialFlags.seenCompanyPersonnel = true;
                PersistenceModule.saveGame();
                this.lockScroll();

                this.addHighlight(hireTab);
                hireTab.scrollIntoView({ behavior: 'auto', block: 'center' });

                this.showTooltip(
                    hireTab,
                    t('tutorial_grow_team'),
                    t('tutorial_grow_team_msg'),
                    t('understood'),
                    () => {
                        this.removeHighlights();
                        this.hideOverlay();
                        this.hideTooltip();
                        this.unlockScroll();
                    }
                );
            } else {
                if (attempts >= 10) {
                    clearInterval(check);
                    this.hideOverlay();
                }
            }
        }, 200);
    },

    // Tutorial: Product
    tutorial_CompanyProduct() {
        if (GameState.tutorialFlags.seenCompanyProduct) return;

        this.injectStyles();
        this.showOverlay();

        let attempts = 0;
        const check = setInterval(() => {
            attempts++;
            // Target ID
            const target = document.getElementById('comp-product-dev-card');

            if (target) {
                clearInterval(check);
                GameState.tutorialFlags.seenCompanyProduct = true;
                PersistenceModule.saveGame();
                this.lockScroll();

                // Step 1: Dev
                this.addHighlight(target);
                target.scrollIntoView({ behavior: 'auto', block: 'center' });

                this.showTooltip(
                    target,
                    t('tutorial_product_dev'),
                    t('tutorial_product_dev_msg'),
                    t('next'),
                    () => {
                        this.removeHighlights();
                        this.hideTooltip();

                        // Step 2: Pricing
                        setTimeout(() => {
                            const pricing = document.getElementById('comp-pricing-card');
                            if (pricing) {
                                this.addHighlight(pricing);
                                pricing.scrollIntoView({ behavior: 'auto', block: 'center' });

                                this.showTooltip(
                                    pricing,
                                    t('tutorial_pricing_strat'),
                                    t('tutorial_pricing_strat_msg'),
                                    t('next'),
                                    () => {
                                        this.removeHighlights();
                                        this.hideTooltip();

                                        // Step 3: Reputation
                                        setTimeout(() => {
                                            const rep = document.getElementById('comp-reputation-card');
                                            if (rep) {
                                                this.addHighlight(rep);
                                                rep.scrollIntoView({ behavior: 'auto', block: 'center' });

                                                this.showTooltip(
                                                    rep,
                                                    t('tutorial_your_reputation'),
                                                    t('tutorial_your_reputation_msg'),
                                                    t('next'),
                                                    () => {
                                                        this.removeHighlights();
                                                        this.hideTooltip();

                                                        // Step 4: Providers
                                                        setTimeout(() => {
                                                            const prov = document.getElementById('comp-providers-section');
                                                            if (prov) {
                                                                this.addHighlight(prov);
                                                                prov.scrollIntoView({ behavior: 'auto', block: 'center' });

                                                                this.showTooltip(
                                                                    prov,
                                                                    t('tutorial_providers'),
                                                                    t('tutorial_providers_msg'),
                                                                    t('understood'),
                                                                    () => {
                                                                        this.removeHighlights();
                                                                        this.hideOverlay();
                                                                        this.hideTooltip();
                                                                        this.unlockScroll();
                                                                    }
                                                                );
                                                            } else {
                                                                this.hideOverlay(); // Exit Safe
                                                            }
                                                        }, 500);
                                                    }
                                                );
                                            } else {
                                                this.hideOverlay(); // Exit Safe
                                            }
                                        }, 500);
                                    }
                                );
                            } else {
                                this.hideOverlay(); // Exit Safe
                            }
                        }, 500);
                    }
                );
            } else {
                if (attempts >= 10) {
                    clearInterval(check);
                    this.hideOverlay();
                }
            }
        }, 200);
    },

    // Tutorial: Marketing
    tutorial_CompanyMarketing() {
        if (GameState.tutorialFlags.seenCompanyMarketing) return;
        GameState.tutorialFlags.seenCompanyMarketing = true;
        PersistenceModule.saveGame();

        this.injectStyles();
        this.showOverlay();

        setTimeout(() => {
            // Find Campaign
            const marketingTab = document.getElementById('comp-marketing-tab');
            const campaigns = marketingTab ? marketingTab.querySelectorAll('button') : [];

            if (campaigns.length > 0) {
                // Highlight First
                const target = campaigns[0].parentElement; // Container
                if (target) {
                    this.addHighlight(target);
                    target.scrollIntoView({ behavior: 'auto', block: 'center' });

                    this.showTooltip(
                        target,
                        'Campañas de Marketing',
                        'Si nadie te conoce, nadie te compra. <br><br>Lanza campañas para aumentar tu <strong>Reputación</strong> y atraer más clientes.',
                        '¡A vender!',
                        () => {
                            this.removeHighlights();
                            this.hideOverlay();
                            this.hideTooltip();
                        }
                    );
                } else {
                    this.hideOverlay();
                }
            } else {
                this.hideOverlay();
            }
        }, 300);
    },

    // Tutorial: Finance
    tutorial_CompanyFinance() {
        if (GameState.tutorialFlags.seenCompanyFinance) return;

        this.injectStyles();
        this.showOverlay();

        let attempts = 0;
        const check = setInterval(() => {
            attempts++;
            // Target ID
            const target = document.getElementById('comp-finance-movements-card');

            if (target) {
                clearInterval(check);
                GameState.tutorialFlags.seenCompanyFinance = true;
                PersistenceModule.saveGame();
                this.lockScroll();

                // Step 1: Cash
                this.addHighlight(target);
                target.scrollIntoView({ behavior: 'auto', block: 'center' });

                this.showTooltip(
                    target,
                    t('tutorial_finance_movements'),
                    t('tutorial_finance_movements_msg'),
                    t('next'),
                    () => {
                        this.removeHighlights();
                        this.hideTooltip();

                        // Step 2: Salary
                        setTimeout(() => {
                            const salary = document.getElementById('comp-finance-salary-card');
                            if (salary) {
                                this.addHighlight(salary);
                                salary.scrollIntoView({ behavior: 'auto', block: 'center' });

                                this.showTooltip(
                                    salary,
                                    t('tutorial_finance_salary'),
                                    t('tutorial_finance_salary_msg'),
                                    t('next'),
                                    () => {
                                        this.removeHighlights();
                                        this.hideTooltip();

                                        // Step 3: Danger
                                        setTimeout(() => {
                                            const danger = document.getElementById('comp-finance-danger-card');
                                            if (danger) {
                                                this.addHighlight(danger);
                                                danger.scrollIntoView({ behavior: 'auto', block: 'center' });

                                                this.showTooltip(
                                                    danger,
                                                    t('tutorial_finance_danger'),
                                                    t('tutorial_finance_danger_msg'),
                                                    t('understood'),
                                                    () => {
                                                        this.removeHighlights();
                                                        this.hideOverlay();
                                                        this.hideTooltip();
                                                        this.unlockScroll();
                                                    }
                                                );
                                            } else {
                                                this.hideOverlay();
                                                this.unlockScroll();
                                            }
                                        }, 500);
                                    }
                                );
                            } else {
                                this.hideOverlay();
                                this.unlockScroll();
                            }
                        }, 500);
                    }
                );
            } else {
                if (attempts >= 10) {
                    clearInterval(check);
                    this.hideOverlay();
                    this.unlockScroll();
                }
            }
        }, 200);
    },

    // Tutorial: Marketing V2
    tutorial_CompanyMarketing_V2() {
        if (GameState.tutorialFlags.seenCompanyMarketing) return;

        this.injectStyles();
        this.showOverlay();

        let attempts = 0;
        const check = setInterval(() => {
            attempts++;
            // Target ID
            const target = document.getElementById('comp-marketing-infra-card');

            if (target) {
                clearInterval(check);
                GameState.tutorialFlags.seenCompanyMarketing = true;
                PersistenceModule.saveGame();

                this.lockScroll();

                // Step 1: Infra
                this.addHighlight(target);
                target.scrollIntoView({ behavior: 'auto', block: 'center' });

                this.showTooltip(
                    target,
                    t('tutorial_mkt_infra'),
                    t('tutorial_mkt_infra_msg'),
                    t('next'),
                    () => {
                        this.removeHighlights();
                        this.hideTooltip();

                        // Step 2: Channels
                        setTimeout(() => {
                            const channels = document.getElementById('comp-marketing-channels-section');
                            if (channels) {
                                this.addHighlight(channels);
                                channels.scrollIntoView({ behavior: 'auto', block: 'center' });

                                this.showTooltip(
                                    channels,
                                    t('tutorial_mkt_channels'),
                                    t('tutorial_mkt_channels_msg'),
                                    t('next'),
                                    () => {
                                        this.removeHighlights();
                                        this.hideTooltip();

                                        // Step 3: Analysis
                                        setTimeout(() => {
                                            const analysis = document.getElementById('comp-marketing-analysis-card');
                                            if (analysis) {
                                                this.addHighlight(analysis);
                                                analysis.scrollIntoView({ behavior: 'auto', block: 'center' });

                                                this.showTooltip(
                                                    analysis,
                                                    t('tutorial_mkt_analysis'),
                                                    t('tutorial_mkt_analysis_msg'),
                                                    t('understood'),
                                                    () => {
                                                        this.removeHighlights();
                                                        this.hideOverlay();
                                                        this.hideTooltip();
                                                        this.unlockScroll();
                                                    }
                                                );
                                            } else {
                                                this.hideOverlay();
                                                this.unlockScroll();
                                            }
                                        }, 500);
                                    }
                                );
                            } else {
                                this.hideOverlay();
                                this.unlockScroll();
                            }
                        }, 500);
                    }
                );
            } else {
                if (attempts >= 10) {
                    clearInterval(check);
                    this.hideOverlay();
                    this.unlockScroll();
                }
            }
        }, 200);
    },


    // Helper to continue the sequence (split for readability)
    // Continue Seq
    continueToMonthlyFlow() {
        this.showOverlay();
        this.lockScroll();
        setTimeout(() => {
            // 1. Net Worth
            const netWorth = document.querySelector('.net-worth-card');
            if (netWorth) {
                this.addHighlight('.net-worth-card');
                netWorth.scrollIntoView({ behavior: 'auto', block: 'center' });
            }

            this.showTooltip(
                '.net-worth-card',
                `🏛️ ${t('net_worth')}`,
                t('tutorial_net_worth_msg'),
                t('next'),
                () => {
                    this.removeHighlights();
                    this.hideTooltip();

                    // 2. Cash
                    setTimeout(() => {
                        const cash = document.querySelector('.dashboard-cash-card');
                        if (cash) {
                            this.addHighlight('.dashboard-cash-card');
                            cash.scrollIntoView({ behavior: 'auto', block: 'center' });
                        }

                        this.showTooltip(
                            '.dashboard-cash-card',
                            `💵 ${t('cash')}`,
                            t('tutorial_cash_msg'),
                            t('next'),
                            () => {
                                this.removeHighlights();
                                this.hideTooltip();

                                // 3. Flow
                                setTimeout(() => {
                                    const mFlow = document.querySelector('.monthly-flow-card');
                                    if (mFlow) {
                                        this.addHighlight('.monthly-flow-card');
                                        mFlow.scrollIntoView({ behavior: 'auto', block: 'center' });
                                    }

                                    this.showTooltip(
                                        '.monthly-flow-card',
                                        `📉 ${t('monthly_flow')}`,
                                        t('tutorial_flow_msg'),
                                        t('understood'),
                                        () => {
                                            this.removeHighlights();
                                            this.hideTooltip();
                                            this.hideOverlay(); // Unblock
                                            this.unlockScroll();

                                            setTimeout(() => {
                                                showGameAlert(
                                                    `🎉 <strong>${t('tutorial_finished')}</strong><br><br>` +
                                                    t('tutorial_basic_complete') + '<br><br>' +
                                                    t('tutorial_good_luck'),
                                                    'success',
                                                    '🎓 ' + t('graduated')
                                                );
                                                GameState.tutorialFlags.tutorialComplete = true;
                                                PersistenceModule.saveGame();
                                            }, 500);
                                        }
                                    );
                                }, 500);
                            }
                        );
                    }, 500);
                }
            );
        }, 500);
    },

    // Unlock Stock
    stepStock_Unlock() {
        const themeColor = '#4ade80'; // Green
        const icon = '📈';

        let unlockMsg = `
            <div style="text-align: center; margin-bottom: 20px;">
                <div style="font-size: 4rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px ${themeColor}66); animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);">${icon}</div>
                <h3 style="color: ${themeColor}; margin: 0; font-size: 1.6rem; text-shadow: 0 0 10px ${themeColor}4d; font-weight: 800; letter-spacing: 1px;">${t('tutorial_stock_unlocked')}</h3>
            </div>

            <div style="background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.6)); border: 1px solid ${themeColor}4d; border-radius: 16px; padding: 25px; text-align: center; margin-bottom: 25px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                <div style="font-size: 0.85rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px;">${t('milestone_reached')}</div>
                <div style="font-size: 1.4rem; font-weight: 700; color: #f8fafc; margin-bottom: 15px;">${t('tutorial_net_worth_30k')}</div>
                
                <div style="display: inline-block; background: ${themeColor}26; border: 1px solid ${themeColor}4d; padding: 10px 20px; border-radius: 30px;">
                    <span style="color: ${themeColor}; font-weight: 700; font-size: 1.1rem;">${t('tutorial_stock_access')}</span>
                </div>
            </div>

            <p style="text-align: center; color: #cbd5e1; font-size: 1rem; line-height: 1.6; margin: 0; padding: 0 10px;">
                ${t('tutorial_stock_congrats')}
            </p>
        `;

        UI.showModal(
            ' ',
            unlockMsg,
            [{
                text: `📈 ${t('go_to_stock')}`,
                style: 'success',
                fn: () => {
                    UI.showView('market');

                    // Clear Overlay
                    TutorialSystem.hideOverlay();
                    TutorialSystem.removeHighlights();

                    // Start Tutorial
                    setTimeout(() => {
                        // Step 1: Chart
                        showGameAlert(
                            t('tutorial_stock_step1'),
                            'info',
                            `📈 ${t('tutorial_stock')} (1/3)`,
                            () => {
                                // Step 2: List
                                setTimeout(() => {
                                    showGameAlert(
                                        t('tutorial_stock_step2'),
                                        'info',
                                        `📈 ${t('tutorial_stock')} (2/3)`,
                                        () => {
                                            // Step 3: Trade
                                            setTimeout(() => {
                                                showGameAlert(
                                                    t('tutorial_stock_step3'),
                                                    'success',
                                                    `📈 ${t('tutorial_stock')} (3/3)`,
                                                    () => {
                                                        UI.showToast(`📈 ${t('tutorial_stock')}`, t('tutorial_stock_complete'), 'success');
                                                    },
                                                    true
                                                );
                                            }, 200);
                                        },
                                        true
                                    );
                                }, 200);
                            },
                            true
                        );
                    }, 500);
                }
            }], true
        );
    },

    // Unlock Bank
    stepBank_Unlock() {
        const themeColor = '#3b82f6'; // Blue
        const icon = '🏦';

        let unlockMsg = `
            <div style="text-align: center; margin-bottom: 20px;">
                <div style="font-size: 4rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px ${themeColor}66); animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);">${icon}</div>
                <h3 style="color: ${themeColor}; margin: 0; font-size: 1.6rem; text-shadow: 0 0 10px ${themeColor}4d; font-weight: 800; letter-spacing: 1px;">${t('tutorial_bank_unlocked')}</h3>
            </div>

            <div style="background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.6)); border: 1px solid ${themeColor}4d; border-radius: 16px; padding: 25px; text-align: center; margin-bottom: 25px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                <div style="font-size: 0.85rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px;">${t('new_feature')}</div>
                <div style="font-size: 1.4rem; font-weight: 700; color: #f8fafc; margin-bottom: 15px;">${t('tutorial_bank_access')}</div>
                
                <div style="display: inline-block; background: ${themeColor}26; border: 1px solid ${themeColor}4d; padding: 10px 20px; border-radius: 30px;">
                    <span style="color: ${themeColor}; font-weight: 700; font-size: 1.1rem;">${t('tutorial_loans_financing')}</span>
                </div>
            </div>

            <p style="text-align: center; color: #cbd5e1; font-size: 1rem; line-height: 1.6; margin: 0; padding: 0 10px;">
                ${t('tutorial_bank_congrats')}
            </p>
        `;

        UI.showModal(
            ' ',
            unlockMsg,
            [{
                text: `🏦 ${t('go_to_bank')}`,
                style: 'success',
                fn: () => {
                    UI.showView('bank');

                    // Clear Overlay
                    TutorialSystem.hideOverlay();
                    TutorialSystem.removeHighlights();

                    // Start Tutorial
                    setTimeout(() => {
                        // Step 1: Intro
                        showGameAlert(
                            t('tutorial_bank_step1'),
                            'info',
                            `🏦 ${t('tutorial_bank')} (1/3)`,
                            () => {
                                // Step 2: Credit
                                setTimeout(() => {
                                    showGameAlert(
                                        t('tutorial_bank_step2'),
                                        'info',
                                        `🏦 ${t('tutorial_bank')} (2/3)`,
                                        () => {
                                            // Step 3: Real Estate
                                            setTimeout(() => {
                                                showGameAlert(
                                                    t('tutorial_bank_step3'),
                                                    'success',
                                                    `🏦 ${t('tutorial_bank')} (3/3)`,
                                                    () => {
                                                        UI.showToast(`🏦 ${t('tutorial_bank')}`, t('tutorial_bank_complete'), 'success');
                                                    },
                                                    true
                                                );
                                            }, 200);
                                        },
                                        true
                                    );
                                }, 200);
                            },
                            true
                        );
                    }, 500);
                }
            }], true
        );
    },

    // Check Start
    checkStart() {
        if (GameState.tutorialFlags.tutorialComplete && GameState.tutorialStep !== 8) return;
        if (GameState.tutorialStep === 0 && !GameState.tutorialFlags.educationChosen) {
            this.step1_ChooseEducation();
        }
    }
};

// UI Config
const formatCurrency = (amount, decimals = 2) => {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(amount);
};
const formatPercent = (val) => (val * 100).toFixed(2) + '%';

// Custom Alert
function showGameAlert(message, type = 'info', title = null, callback = null, blocking = false) {
    const config = {
        info: {
            icon: '💬',
            color: '#38bdf8',
            bgGradient: 'linear-gradient(145deg, rgba(56, 189, 248, 0.15), rgba(14, 165, 233, 0.05))',
            borderColor: 'rgba(56, 189, 248, 0.4)',
            glowColor: 'rgba(56, 189, 248, 0.3)',
            title: 'Información',
            btnStyle: 'linear-gradient(135deg, #38bdf8, #0ea5e9)'
        },
        success: {
            icon: '✅',
            color: '#4ade80',
            bgGradient: 'linear-gradient(145deg, rgba(74, 222, 128, 0.15), rgba(34, 197, 94, 0.05))',
            borderColor: 'rgba(74, 222, 128, 0.4)',
            glowColor: 'rgba(74, 222, 128, 0.3)',
            title: '¡Éxito!',
            btnStyle: 'linear-gradient(135deg, #4ade80, #22c55e)'
        },
        warning: {
            icon: '⚠️',
            color: '#facc15',
            bgGradient: 'linear-gradient(145deg, rgba(250, 204, 21, 0.15), rgba(234, 179, 8, 0.05))',
            borderColor: 'rgba(250, 204, 21, 0.4)',
            glowColor: 'rgba(250, 204, 21, 0.3)',
            title: t('warning') || 'Aviso',
            btnStyle: 'linear-gradient(135deg, #facc15, #eab308)'
        },
        error: {
            icon: '❌',
            color: '#f87171',
            bgGradient: 'linear-gradient(145deg, rgba(248, 113, 113, 0.15), rgba(239, 68, 68, 0.05))',
            borderColor: 'rgba(248, 113, 113, 0.4)',
            glowColor: 'rgba(248, 113, 113, 0.3)',
            title: 'Error',
            btnStyle: 'linear-gradient(135deg, #f87171, #ef4444)'
        }
    };

    const cfg = config[type] || config.info;
    const displayTitle = title || cfg.title;

    const existing = document.querySelector('.game-alert-overlay');
    if (existing) existing.remove();

    // Build Modal
    const overlay = document.createElement('div');
    overlay.className = 'game-alert-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(4px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.2s ease-out;
    `;

    const modal = document.createElement('div');
    modal.style.cssText = `
        background: linear-gradient(145deg, #1e293b, #0f172a);
        border: 1px solid ${cfg.borderColor};
        border-radius: 20px;
        padding: 30px;
        max-width: 380px;
        width: 90%;
        text-align: center;
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5), 0 0 40px ${cfg.glowColor};
        animation: scaleIn 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
    `;

    modal.innerHTML = `
        <style>
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes scaleIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
            @keyframes iconPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }
            @keyframes iconShake { 0%, 100% { transform: rotate(0deg); } 25% { transform: rotate(-5deg); } 75% { transform: rotate(5deg); } }
        </style>
        <div style="
            font-size: 3.5rem;
            margin-bottom: 15px;
            filter: drop-shadow(0 0 20px ${cfg.glowColor});
            animation: ${type === 'error' ? 'iconShake' : 'iconPulse'} 0.6s ease-out;
        ">${cfg.icon}</div>
        <h2 style="
            color: ${cfg.color};
            margin: 0 0 15px 0;
            font-size: 1.4rem;
            font-weight: 800;
            text-shadow: 0 0 20px ${cfg.glowColor};
        ">${displayTitle}</h2>
        <div style="
            background: ${cfg.bgGradient};
            border: 1px solid ${cfg.borderColor};
            border-radius: 12px;
            padding: 15px 20px;
            margin-bottom: 20px;
        ">
            <p style="
                color: #e2e8f0;
                margin: 0;
                font-size: 0.95rem;
                line-height: 1.5;
            ">${message}</p>
        </div>
        <button class="game-alert-btn" style="
            background: ${cfg.btnStyle};
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 25px;
            font-weight: 700;
            font-size: 1rem;
            cursor: pointer;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            transition: transform 0.2s, box-shadow 0.2s;
        ">
            ${t('understood')}
        </button>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    const btn = modal.querySelector('.game-alert-btn');
    btn.onmouseenter = () => btn.style.transform = 'translateY(-2px)';
    btn.onmouseleave = () => btn.style.transform = 'translateY(0)';
    btn.onclick = () => {
        overlay.style.animation = 'fadeIn 0.15s ease-out reverse';
        setTimeout(() => {
            overlay.remove();
            if (callback) callback();
        }, 150);
    };

    // Close on Click
    overlay.onclick = (e) => {
        if (!blocking && type !== 'error' && e.target === overlay) {
            overlay.style.animation = 'fadeIn 0.15s ease-out reverse';
            setTimeout(() => overlay.remove(), 150);
        }
    };

    // Close on Escape key
    const escHandler = (e) => {
        if (!blocking && type !== 'error' && e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
}

// Styled confirm modal. Returns Promise<boolean>
function showGameConfirm(message, title = '¿Confirmar?', confirmText = 'Confirmar', cancelText = 'Cancelar') {
    // t() unavailable in default params 
    // Assuming t() is available globally.
    // If not, we should handle inside:
    confirmText = confirmText === 'Confirmar' ? t('confirm') : confirmText;
    cancelText = cancelText === 'Cancelar' ? t('cancel') : cancelText;
    return new Promise((resolve) => {
        const existing = document.querySelector('.game-confirm-overlay');
        if (existing) existing.remove();

        // Create premium modal
        const overlay = document.createElement('div');
        overlay.className = 'game-confirm-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.75);
            backdrop-filter: blur(5px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.2s ease-out;
        `;

        const modal = document.createElement('div');
        modal.style.cssText = `
            background: linear-gradient(145deg, #1e293b, #0f172a);
            border: 1px solid rgba(56, 189, 248, 0.3);
            border-radius: 20px;
            padding: 30px;
            max-width: 420px;
            width: 90%;
            text-align: center;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5), 0 0 40px rgba(56, 189, 248, 0.15);
            animation: scaleIn 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        `;

        // Format message with proper styling for sections
        let formattedMessage = message
            .replace(/\n\n/g, '</p><div style="height:12px;"></div><p style="color:#e2e8f0;margin:0;font-size:0.95rem;line-height:1.6;">')
            .replace(/\n/g, '<br>');

        // Style currency values and important text
        formattedMessage = formattedMessage
            .replace(/([\d.,]+\s*€)/g, '<span style="color:#4ade80;font-weight:700;">$1</span>')
            .replace(/(x\d+)/g, '<span style="color:#4ade80;font-weight:700;">$1</span>')
            .replace(/(TOTAL OPERACIÓN:)/g, '<span style="color:#38bdf8;font-weight:800;font-size:1.1rem;">$1</span>')
            .replace(/(OFERTA DE COMPRA)/g, '')
            .replace(/(Valoración:|Caja Actual:|Beneficio Anual:|Multiplicador Mejoras:)/g, '<span style="color:#94a3b8;">$1</span>');

        modal.innerHTML = `
            <style>
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes scaleIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
            </style>
            <div style="
                font-size: 3rem;
                margin-bottom: 15px;
                filter: drop-shadow(0 0 15px rgba(250, 204, 21, 0.4));
            ">🤔</div>
            <h2 style="
                color: #facc15;
                margin: 0 0 20px 0;
                font-size: 1.3rem;
                font-weight: 800;
                text-shadow: 0 0 15px rgba(250, 204, 21, 0.3);
            ">${title}</h2>
            <div style="
                background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.5));
                border: 1px solid rgba(148, 163, 184, 0.2);
                border-radius: 12px;
                padding: 20px;
                margin-bottom: 25px;
                text-align: left;
            ">
                <p style="color:#e2e8f0;margin:0;font-size:0.95rem;line-height:1.6;">${formattedMessage}</p>
            </div>
            <div style="display:flex;gap:12px;justify-content:center;">
                <button class="game-confirm-cancel" style="
                    background: linear-gradient(145deg, #334155, #1e293b);
                    border: 1px solid #475569;
                    color: #e2e8f0;
                    padding: 14px 30px;
                    border-radius: 12px;
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                    flex: 1;
                ">${cancelText}</button>
                <button class="game-confirm-ok" style="
                    background: linear-gradient(135deg, #4ade80, #22c55e);
                    border: none;
                    color: #0f172a;
                    padding: 14px 30px;
                    border-radius: 12px;
                    font-size: 1rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.2s;
                    box-shadow: 0 4px 15px rgba(74, 222, 128, 0.3);
                    flex: 1;
                ">${confirmText}</button>
            </div>
        `;

        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        const okBtn = modal.querySelector('.game-confirm-ok');
        const cancelBtn = modal.querySelector('.game-confirm-cancel');

        okBtn.onmouseenter = () => { okBtn.style.transform = 'translateY(-2px)'; okBtn.style.boxShadow = '0 6px 20px rgba(74, 222, 128, 0.4)'; };
        okBtn.onmouseleave = () => { okBtn.style.transform = 'translateY(0)'; okBtn.style.boxShadow = '0 4px 15px rgba(74, 222, 128, 0.3)'; };

        cancelBtn.onmouseenter = () => { cancelBtn.style.background = 'linear-gradient(145deg, #475569, #334155)'; };
        cancelBtn.onmouseleave = () => { cancelBtn.style.background = 'linear-gradient(145deg, #334155, #1e293b)'; };

        const closeModal = (result) => {
            overlay.style.animation = 'fadeIn 0.15s ease-out reverse';
            setTimeout(() => {
                overlay.remove();
                resolve(result);
            }, 150);
        };

        okBtn.onclick = () => closeModal(true);
        cancelBtn.onclick = () => closeModal(false);

        // Close on overlay click (cancels)
        overlay.onclick = (e) => {
            if (e.target === overlay) closeModal(false);
        };

        // Escape key cancels
        const escHandler = (e) => {
            if (e.key === 'Escape') {
                closeModal(false);
                document.removeEventListener('keydown', escHandler);
            }
        };
        document.addEventListener('keydown', escHandler);
    });
}

const UI = {
    chartTimeframe: 24, // Default 2 years
    stockChartTimeframe: 24,
    currentOpenStock: null,

    // Chart Visibility State
    chartVisibleDatasets: { netWorth: true, cash: true, debt: true },

    toggleChartDataset(key) {
        if (this.chartVisibleDatasets[key] !== undefined) {
            this.chartVisibleDatasets[key] = !this.chartVisibleDatasets[key];
            this.updateDashboard();
        }
    },

    // State for animations
    lastCash: 0,
    lastNetWorth: 0,

    animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease out quart
            const ease = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(progress * (end - start) + start);
            obj.textContent = formatCurrency(current);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                obj.textContent = formatCurrency(end);
            }
        };
        window.requestAnimationFrame(step);
    },

    setupLanguageSwitcher() {
        const btn = document.getElementById('lang-switch-btn');
        if (!btn) return;

        const flags = { es: '🇪🇸', en: '🇬🇧', de: '🇩🇪', zh: '🇨🇳', ru: '🇷🇺' };
        const labels = { es: 'ES', en: 'EN', de: 'DE', zh: '中文', ru: 'RU' };

        const updateBtn = () => {
            const lang = I18n.currentLang;
            const spanFlag = btn.querySelector('span:nth-child(1)');
            const spanText = btn.querySelector('span:nth-child(2)');
            if (spanFlag) spanFlag.textContent = flags[lang] || '🌐';
            if (spanText) spanText.textContent = labels[lang] || lang.toUpperCase();
        };

        updateBtn();

        // Click handler
        btn.onclick = () => {
            const current = I18n.currentLang;
            let next = 'es';
            if (current === 'es') next = 'en';
            else if (current === 'en') next = 'de';
            else if (current === 'de') next = 'zh';
            else if (current === 'zh') next = 'ru';
            else if (current === 'ru') next = 'es';

            I18n.setLanguage(next);
            updateBtn();

            // Refresh UI
            this.updateStaticTranslations();
            this.updateHeader();

            // Re-render current view to apply translations
            const currentView = document.querySelector('.view.active');
            if (currentView) {
                const viewName = currentView.id.replace('-view', '');
                document.querySelector(`.nav-btn[data-view="${viewName}"]`)?.click();
            }
        };
    },

    updateStaticTranslations() {
        const setT = (id, key, prefix = '', suffix = '') => {
            const el = document.getElementById(id);
            if (el) el.textContent = prefix + t(key) + suffix;
        };

        setT('header-game-title', 'game_title', '🎮 ', ' 🎮');
        setT('label-save-desktop', 'save_game');
        setT('label-save-mobile', 'save_game');
        setT('label-next-month', 'next_month', '⚡ ', ' →');

        // Navigation labels (Mobile)
        setT('nav-label-education', 'nav_education');
        setT('nav-label-market', 'nav_market');
        setT('nav-label-lifestyle', 'nav_lifestyle_mobile');
        setT('nav-label-job', 'nav_job');
        setT('nav-label-dashboard', 'nav_dashboard');
        setT('nav-label-holdings', 'nav_holdings');
        setT('nav-label-real-estate', 'nav_real_estate');

        // Navigation labels (Desktop)
        setT('d-nav-label-dashboard', 'nav_dashboard', '📊 ');
        setT('d-nav-label-education', 'nav_education', '🎓 ');
        setT('d-nav-label-lifestyle', 'nav_lifestyle', '💸 ');
        setT('d-nav-label-job', 'nav_job', '💼 ');
        setT('d-nav-label-bank', 'nav_bank', '🏦 ');
        setT('d-nav-label-real-estate', 'nav_real_estate', '🏘️ ');
        setT('d-nav-label-market', 'nav_market', '📈 ');

        // Dashboard
        setT('dashboard-title', 'nav_dashboard');
        setT('label-net-worth', 'net_worth');
        setT('label-monthly-income', 'monthly_income');
        setT('label-monthly-expenses', 'monthly_expenses');
        setT('label-age', 'age');

        // Stock Modal Fundamentals
        setT('label-stock-eps', 'stock_fund_eps');
        setT('label-stock-vol', 'stock_fund_vol');
        setT('label-stock-per', 'stock_fund_per');
        setT('label-stock-trend', 'stock_fund_trend');

        // Company Wizard
        setT('wiz-main-title', 'wiz_main_title');
        setT('wiz-main-subtitle', 'wiz_main_subtitle');
        setT('wiz-step-label-1', 'wiz_step_1_label');
        setT('wiz-step-label-2', 'wiz_step_2_label');
        setT('wiz-step-1-header', 'wiz_step_1_header');
        setT('wiz-name-label', 'wiz_name_label');
        setT('wiz-select-vehicle', 'wiz_select_vehicle');
        setT('wiz-step-2-header', 'wiz_step_2_header');
        setT('wiz-select-location', 'wiz_select_location');
        setT('wiz-sidebar-title', 'wiz_sidebar_title');
        setT('wiz-cash-label', 'wiz_cash_available');
        setT('wiz-label-setup', 'wiz_setup_cost', '🏢 ');
        setT('wiz-label-rent', 'wiz_rent_cost', '🏠 ');
        setT('wiz-label-total', 'wiz_total_investment', '💸 ');

        const wizError = document.getElementById('wiz-error-msg');
        if (wizError) wizError.textContent = t('wiz_insufficient_capital');

        // Bank View
        setT('view-bank-title', 'bank_title');
        setT('label-bank-loans', 'bank_active_loans_title');
        setT('label-bank-request', 'bank_request_loan_title');
        setT('label-bank-limit', 'bank_limit_label');
        setT('label-bank-amt', 'bank_amount_label');
        setT('label-bank-term', 'bank_term_label');
        setT('label-bank-int', 'bank_interest_label');
        setT('label-bank-quota', 'bank_monthly_quota_label');
        setT('btn-request-loan', 'bank_request_btn');

        // Market View
        setT('market-title', 'market_view_title');
        setT('label-market-available', 'market_available_stocks');
        setT('label-market-portfolio', 'market_your_portfolio');
        setT('label-market-trade', 'market_trade_title');
        setT('btn-buy', 'market_buy_btn');
        setT('btn-sell', 'market_sell_btn');

        // Real Estate View
        setT('view-re-title', 're_view_title');
        setT('label-re-market', 're_market_opportunities');
        setT('label-re-my', 're_my_properties_title');

        // Job View
        setT('view-job-title', 'job_view_title');
        setT('label-job-current', 'job_current_title');
        setT('label-job-market', 'job_market_title');

        // Education View
        setT('view-edu-title', 'edu_view_title');
        setT('label-edu-current', 'edu_current_title');
        setT('label-edu-available', 'edu_available_title');

        // Wizard Navigation
        setT('btn-wiz-back-mobile', 'wiz_back', '← ');
        setT('btn-wiz-next-mobile', 'wiz_next', '', ' ➡️');
        setT('btn-wiz-back', 'wiz_back', '← ');
        setT('btn-wiz-next', 'wiz_next', '', ' ➡️');

        // Empty states and other polish
        setT('market-empty-msg', 'market_empty_msg');
        setT('re-empty-msg', 're_empty_msg');
        setT('label-job-promotion-title', 'job_promotion_label');
        setT('label-edu-bachillerato', 'edu_bachillerato');
        setT('label-net-worth-chart', 'label_net_worth_chart');
        setT('btn-promote', 'job_btn_promote');
        setT('next-job-info', 'loading');
    }
    ,

    updateHeader() {
        const cashDisplay = document.getElementById('money-display');
        const netWorthDisplay = document.getElementById('net-worth-display');

        // Animate Cash
        if (cashDisplay) {
            // Red if negative
            cashDisplay.style.color = GameState.cash < 0 ? '#ef4444' : '';

            if (this.lastCash !== GameState.cash) {
                this.animateValue(cashDisplay, this.lastCash, GameState.cash, 1000);
                this.lastCash = GameState.cash;
            } else {
                cashDisplay.textContent = formatCurrency(GameState.cash);
            }
        }

        // Animate Net Worth
        if (netWorthDisplay) {
            if (this.lastNetWorth !== GameState.netWorth) {
                this.animateValue(netWorthDisplay, this.lastNetWorth, GameState.netWorth, 1000);
                this.lastNetWorth = GameState.netWorth;
            } else {
                netWorthDisplay.textContent = formatCurrency(GameState.netWorth);
            }
        }

        document.getElementById('date-display').textContent = `${t('month')}: ${GameState.month} | ${t('year')}: ${GameState.year}`;
        const pName = document.getElementById('header-player-name');
        if (pName) {
            pName.textContent = GameState.playerName || t('player_placeholder');
        }
        const pNameDesktop = document.getElementById('header-player-name-desktop');
        if (pNameDesktop) {
            pNameDesktop.textContent = GameState.playerName || t('player_placeholder');
        }
    },

    // --- MODALS ---
    showModal(title, content, actions = [], isHTML = false) {
        const existing = document.querySelector('.custom-modal-overlay');
        if (existing) existing.remove();

        const overlay = document.createElement('div');
        overlay.className = 'custom-modal-overlay';

        const modal = document.createElement('div');
        modal.className = 'custom-modal-content';
        modal.id = 'modal-content'; // For referencing

        const titleEl = document.createElement('h2');
        titleEl.textContent = title;
        modal.appendChild(titleEl);

        const bodyEl = document.createElement('div');
        bodyEl.className = 'custom-modal-body';
        if (isHTML) {
            bodyEl.innerHTML = content;
        } else {
            content.split('\n').forEach(line => {
                const p = document.createElement('p');
                p.textContent = line;
                bodyEl.appendChild(p);
            });
        }
        modal.appendChild(bodyEl);

        const footer = document.createElement('div');
        footer.className = 'custom-modal-footer';

        if (actions.length === 0) {
            const btn = document.createElement('button');
            btn.textContent = t('close');
            btn.className = 'btn-modal-action btn-secondary';
            btn.onclick = () => overlay.remove();
            footer.appendChild(btn);
        } else {
            actions.forEach(action => {
                const btn = document.createElement('button');
                btn.textContent = action.text;
                // Map style strings to simplified classes
                let btnClass = 'btn-secondary';
                if (action.style === 'primary' || action.style === 'success') btnClass = 'btn-primary';
                if (action.style === 'danger') btnClass = 'btn-danger';

                btn.className = `btn-modal-action ${btnClass}`;

                btn.onclick = () => {
                    overlay.remove();
                    if (action.fn) action.fn();
                };
                footer.appendChild(btn);
            });
        }

        modal.appendChild(footer);
        overlay.appendChild(modal);
        document.body.appendChild(overlay);
    },

    confirmModal(title, text, onConfirm) {
        this.showModal(title, text, [
            { text: t('cancel'), style: 'secondary', fn: null },
            { text: t('confirm'), style: 'primary', fn: onConfirm }
        ]);
    },
    updateDashboard() {
        const nw = updateNetWorth();

        let cash = GameState.cash;
        let stocksVal = 0;
        GameState.inventory.stocks.forEach(s => {
            const st = StockMarket.getStock(s.symbol);
            stocksVal += s.quantity * (st ? st.price : s.avgPrice);
        });

        let reValue = 0;
        let reMortgage = 0;
        GameState.inventory.realEstate.forEach(p => reValue += p.price);
        GameState.loans.forEach(l => {
            if (l.isMortgage) reMortgage += l.remainingBalance;
        });
        let reEquity = reValue - reMortgage;

        let rentIncome = GameState.inventory.realEstate.reduce((acc, p) => acc + p.monthlyRent, 0);
        let holdingIncome = (GameState.ownedCompanies || []).reduce((acc, c) => acc + (c.profitLastMonth !== undefined ? c.profitLastMonth : (c.baselineProfit || 0)), 0);
        // Calculate company profit

        if (GameState.company) {
            // holdingIncome += (GameState.company.profitLastMonth || 0); 
            // Exclude company profit from personal flow (only salary counts)
            // Salary is already in GameState.salary.
        }

        let loanPayments = 0;
        GameState.loans.forEach(l => { loanPayments += l.monthlyPayment; });

        const totalIncome = GameState.salary + rentIncome + holdingIncome;
        const totalExpenses = GameState.expenses + loanPayments;
        const monthlyFlow = totalIncome - totalExpenses;

        let companyCount = (GameState.company ? 1 : 0) + (GameState.ownedCompanies ? GameState.ownedCompanies.length : 0);
        // holdingIncome is already calculated above as sum of profits

        const container = document.getElementById('dashboard-view');
        if (!container) return;

        // Clear existing to rebuild
        container.innerHTML = `
        <div class="dashboard-container">
            <div class="section-header">
                <h2>${t('dashboard_title')}</h2>
                <span style="color:#94a3b8; font-size:0.9rem;">${t('age')}: ${GameState.age} ${t('years')} | ${t('month')}: ${GameState.month}</span>
            </div>

            <div class="kpi-row">
                <div class="kpi-card gold net-worth-card" style="flex:1; min-width: 200px;">
                    <div class="kpi-icon gold">👑</div>
                    <span class="kpi-label">${t('net_worth')}</span>
                    <span class="kpi-value gold lg">${formatCurrency(nw)}</span>
                </div>
                <div class="kpi-card green dashboard-cash-card" style="flex:1; min-width: 200px;">
                    <div class="kpi-icon green">💵</div>
                    <span class="kpi-label">${t('cash_box')}</span>
                    <span class="kpi-value green lg">${formatCurrency(cash)}</span>
                </div>
                <div class="kpi-card ${monthlyFlow >= 0 ? 'green' : 'red'} monthly-flow-card" style="flex:1; min-width: 160px;">
                    <div class="kpi-icon ${monthlyFlow >= 0 ? 'green' : 'red'}">${monthlyFlow >= 0 ? '📈' : '📉'}</div>
                    <span class="kpi-label">${t('monthly_flow')}</span>
                    <span class="kpi-value ${monthlyFlow >= 0 ? 'green' : 'red'}">${monthlyFlow >= 0 ? '+' : ''}${formatCurrency(monthlyFlow)}</span>
                    <div class="flow-detail">
                        <span class="flow-up">▲ ${formatCurrency(totalIncome)}</span> · 
                        <span class="flow-down">▼ ${formatCurrency(totalExpenses)}</span>
                    </div>
                </div>
            </div>

            <div class="dashboard-grid">
                <div class="dash-card">

                    <div class="dash-card-header">
                        <h3 class="dash-card-title">
                            <span style="font-size: 1.3rem;">📈</span> ${t('financial_history')}
                        </h3>
                        <div class="timeframe-btns">
                            <button class="btn-time ${UI.chartTimeframe === 6 ? 'active' : ''}" onclick="UI.chartTimeframe=6; UI.updateDashboard()">${t('chart_timeframe_6m')}</button>
                            <button class="btn-time ${UI.chartTimeframe === 24 ? 'active' : ''}" onclick="UI.chartTimeframe=24; UI.updateDashboard()">${t('chart_timeframe_2y')}</button>
                            <button class="btn-time ${UI.chartTimeframe === 999 ? 'active' : ''}" onclick="UI.chartTimeframe=999; UI.updateDashboard()">${t('chart_timeframe_max')}</button>
                        </div>
                    </div>
                    <div style="height:300px; width:100%;">
                        <canvas id="net-worth-chart"></canvas>
                    </div>
                    <!-- Custom Chart Legend (Interactive) -->
                    <div class="chart-legend">
                        <div class="legend-item ${UI.chartVisibleDatasets.netWorth ? '' : 'faded'}" onclick="UI.toggleChartDataset('netWorth')">
                            <div class="legend-dot gold"></div>
                            <span class="legend-text gold ${UI.chartVisibleDatasets.netWorth ? '' : 'crossed'}">${t('chart_legend_networth')}</span>
                        </div>
                        <div class="legend-item ${UI.chartVisibleDatasets.cash ? '' : 'faded'}" onclick="UI.toggleChartDataset('cash')">
                            <div class="legend-line green"></div>
                            <span class="legend-text green ${UI.chartVisibleDatasets.cash ? '' : 'crossed'}">${t('chart_legend_cash')}</span>
                        </div>
                        <div class="legend-item ${UI.chartVisibleDatasets.debt ? '' : 'faded'}" onclick="UI.toggleChartDataset('debt')">
                            <div class="legend-line red"></div>
                            <span class="legend-text red ${UI.chartVisibleDatasets.debt ? '' : 'crossed'}">${t('chart_legend_debt')}</span>
                        </div>
                    </div>
                </div>

                <div class="dash-card">
                    <h3 class="dash-card-title" style="margin-bottom:20px; border-bottom:1px solid #334155; padding-bottom:15px;">
                        <span style="font-size: 1.3rem;">📊</span> ${t('asset_breakdown')}
                    </h3>
                    <div class="assets-grid">
                        <div class="asset-item cash">
                            <div class="asset-icon">💵</div>
                            <div class="asset-label">${t('chart_legend_cash')}</div>
                            <div class="asset-value cash">${formatCurrency(cash)}</div>
                        </div>
                        <div class="asset-item stocks">
                            <div class="asset-icon">📈</div>
                            <div class="asset-label">${t('stocks')}</div>
                            <div class="asset-value stocks">${formatCurrency(stocksVal)}</div>
                        </div>
                        <div class="asset-item real-estate">
                            <div class="asset-icon">🏠</div>
                            <div class="asset-label">${t('nav_real_estate')}</div>
                            <div class="asset-value real-estate">${formatCurrency(reEquity)}</div>
                        </div>
                        <div class="asset-item company">
                            <div class="asset-icon">🏢</div>
                            <div class="asset-label">${t('company_title')}</div>
                            <div class="asset-value company">${companyCount}</div>
                        </div>
                    </div>
                    <div style="border-top:1px solid #334155; padding-top:15px; background: linear-gradient(145deg, rgba(34, 197, 94, 0.05), transparent); margin: -5px -20px -20px -20px; padding: 15px 20px; border-radius: 0 0 16px 16px;">
                        <div class="flex items-center justify-between">
                            <div>
                                <div class="asset-label">💰 ${t('holding_profit')}</div>
                                <div class="asset-value ${holdingIncome >= 0 ? 'cash' : ''}" style="${holdingIncome < 0 ? 'color:#f87171' : ''}">${holdingIncome >= 0 ? '+' : ''}${formatCurrency(holdingIncome)}/${t('month')}</div>
                            </div>
                            <div style="font-size: 2rem; opacity: 0.5;">🏦</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;


        // Re-draw chart (Filtered)
        const h = GameState.history;
        const limit = UI.chartTimeframe;
        const slicedHistory = {
            labels: h.labels.slice(-limit),
            netWorth: h.netWorth.slice(-limit),
            cash: h.cash.slice(-limit),
            debt: h.debt.slice(-limit)
        };
        ChartModule.drawChart('net-worth-chart', slicedHistory, UI.chartVisibleDatasets);
    },
    updateMarket() {
        const container = document.getElementById('market-view');
        if (!container) return;

        // Data
        const stocks = StockMarket.stocks;
        const portfolio = GameState.inventory.stocks;

        // Calcs
        let portValue = 0;
        let costBasis = 0;
        portfolio.forEach(p => {
            const s = StockMarket.getStock(p.symbol);
            if (s) {
                portValue += p.quantity * s.price;
                costBasis += p.quantity * p.avgPrice;
            }
        });
        const totalReturn = portValue - costBasis;
        const returnDir = totalReturn >= 0 ? '+' : '';
        const returnClass = totalReturn >= 0 ? '#4ade80' : '#f87171';

        // New: Get Limits
        const limits = GameBalance.getLimits();
        const limitDisp = limits.stockCap === Infinity ? '∞' : formatCurrency(limits.stockCap);
        const limitPct = limits.stockCap === Infinity ? 0 : Math.min(100, (portValue / limits.stockCap) * 100);
        const isLimitReached = limits.stockCap !== Infinity && portValue >= limits.stockCap;

        // Render
        container.innerHTML = `
                    <div class="dashboard-container">
                        <div class="section-header">
                            <h2>${t('stock_market')}</h2>
                            <span style="color:#94a3b8; font-size:0.9rem;">IBEX 35</span>
                        </div>

                        <!-- LIMIT ALERT MOCKUP -->
                        <div style="margin-bottom: 20px; background: #0f172a; border: 1px solid #334155; border-radius: 12px; padding: 15px;">
                             <div style="display:flex; justify-content:space-between; margin-bottom: 8px;">
                                <span style="color:#94a3b8; font-size:0.85rem;">${t('portfolio_limit')}</span>
                                <span style="color:${isLimitReached ? '#f87171' : '#cbd5e1'}; font-weight:700; font-size:0.9rem;">
                                    ${formatCurrency(portValue)} / ${limitDisp}
                                </span>
                            </div>
                            <div style="background:#1e293b; height:8px; border-radius:4px; overflow:hidden;">
                                <div style="width:${limitPct}%; height:100%; background:${isLimitReached ? '#f87171' : '#38bdf8'}; transition: width 0.3s;"></div>
                            </div>
                            ${isLimitReached ? `<div style="color:#f87171; font-size:0.8rem; margin-top:5px;">⚠️ ${t('stock_limit_reached')}</div>` : ''}
                        </div>

                        <div class="market-hero-stats" style="display:flex; flex-wrap:wrap; gap:15px; margin-bottom:25px;">
                            <div class="market-stat-card" style="flex:2; min-width: 180px; background: linear-gradient(145deg, rgba(56, 189, 248, 0.1), rgba(14, 165, 233, 0.05)); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 16px; padding: 20px; text-align: center;">
                                <div style="font-size: 2rem; margin-bottom: 8px; filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.4));">📈</div>
                                <span style="display:block; color:#94a3b8; font-size:0.75rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom:8px;">${t('portfolio_value')}</span>
                                <span style="font-size:1.5rem; font-weight:800; color:#38bdf8; text-shadow: 0 0 20px rgba(56, 189, 248, 0.3);">${formatCurrency(portValue)}</span>
                            </div>
                            <div class="market-stat-card" style="flex:1.3; min-width: 150px; background: linear-gradient(145deg, ${totalReturn >= 0 ? 'rgba(74, 222, 128, 0.1), rgba(34, 197, 94, 0.05)' : 'rgba(248, 113, 113, 0.1), rgba(239, 68, 68, 0.05)'}); border: 1px solid ${totalReturn >= 0 ? 'rgba(74, 222, 128, 0.3)' : 'rgba(248, 113, 113, 0.3)'}; border-radius: 16px; padding: 20px; text-align: center;">
                                <div style="font-size: 2rem; margin-bottom: 8px; filter: drop-shadow(0 0 10px ${totalReturn >= 0 ? 'rgba(74, 222, 128, 0.4)' : 'rgba(248, 113, 113, 0.4)'});">${totalReturn >= 0 ? '💰' : '📉'}</div>
                                <span style="display:block; color:#94a3b8; font-size:0.75rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom:8px;">${t('total_return')}</span>
                                <span style="font-size:1.3rem; font-weight:800; color:${returnClass}; text-shadow: 0 0 15px ${totalReturn >= 0 ? 'rgba(74, 222, 128, 0.3)' : 'rgba(248, 113, 113, 0.3)'};"> ${returnDir}${formatCurrency(totalReturn)}</span>
                            </div>

                            <div class="market-stat-card" style="flex:1; min-width: 140px; background: linear-gradient(145deg, ${totalReturn >= 0 ? 'rgba(74, 222, 128, 0.1), rgba(34, 197, 94, 0.05)' : 'rgba(248, 113, 113, 0.1), rgba(239, 68, 68, 0.05)'}); border: 1px solid ${totalReturn >= 0 ? 'rgba(74, 222, 128, 0.3)' : 'rgba(248, 113, 113, 0.3)'}; border-radius: 16px; padding: 20px; text-align: center;">
                                <div style="font-size: 2rem; margin-bottom: 8px; filter: drop-shadow(0 0 10px ${totalReturn >= 0 ? 'rgba(74, 222, 128, 0.4)' : 'rgba(248, 113, 113, 0.4)'});">📊</div>
                                <span style="display:block; color:#94a3b8; font-size:0.75rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom:8px;">${t('profitability')}</span>
                                <span style="font-size:1.3rem; font-weight:800; color:${returnClass}; text-shadow: 0 0 15px ${totalReturn >= 0 ? 'rgba(74, 222, 128, 0.3)' : 'rgba(248, 113, 113, 0.3)'};"> ${costBasis > 0 ? (totalReturn / costBasis * 100).toFixed(2) : '0.00'}%</span>
                            </div>
                        </div>

                        <!-- TICKER TAPE / GRID -->
                        <div class="job-section-spacer">
                            <h3 style="color:#cbd5e1; margin-bottom:15px;">📊 ${t('quotes')}</h3>
                            <p style="color:#94a3b8; font-size:0.85rem; margin-bottom:10px;">${t('tap_to_trade')}</p>
                            <div class="market-grid" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(160px, 1fr)); gap:10px;">
                                ${stocks.map(stock => {
            const trendClass = stock.trend >= 0 ? 'rising' : 'falling';
            const trendColor = stock.trend >= 0 ? '#4ade80' : '#f87171';
            const sign = stock.trend >= 0 ? '+' : '';
            return `
                                    <div class="stock-chip ${trendClass}" data-symbol="${stock.symbol}" style="background:#1e293b; border-radius:8px; padding:10px; cursor:pointer; transition:all 0.2s; border:1px solid #334155;">
                                        <div>
                                            <div style="font-weight:bold; font-size:1rem; color:white;">${stock.symbol}</div>
                                            <div style="font-size:0.75rem; color:#94a3b8; margin-bottom:6px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${stock.name}</div>
                                        </div>
                                        <div style="text-align:right;">
                                            <div style="font-weight:bold; font-size:1.05rem; color:white;">${formatCurrency(stock.price)}</div>
                                            <div style="font-size:0.8rem; color:${trendColor}; font-weight:600;">${sign}${(stock.trend * 100).toFixed(2)}%</div>
                                        </div>
                                    </div>
                                    `;
        }).join('')}
                            </div>
                        </div>

                        <!-- POSITIONS CARDS (RESPONSIVE) -->
                         <div class="dashboard-card">
                            <h3 style="margin-top:0; color:#cbd5e1; margin-bottom:15px; border-bottom:1px solid #334155; padding-bottom:10px;">💼 ${t('my_positions')}</h3>
                            ${portfolio.length === 0 ? `<p style="color:#64748b;">${t('no_positions')}</p>` :
                `<div style="display:flex; flex-direction:column; gap:10px;">
                            ${portfolio.map(p => {
                    const s = StockMarket.getStock(p.symbol);
                    if (!s) return '';
                    const val = p.quantity * s.price;
                    const pl = val - (p.quantity * p.avgPrice);
                    const plColor = pl >= 0 ? '#4ade80' : '#f87171';
                    const plSign = pl >= 0 ? '+' : '';
                    // Calculate percentage
                    const invested = p.quantity * p.avgPrice;
                    const plPercent = invested > 0 ? ((pl / invested) * 100).toFixed(2) : 0;
                    return `
                                <div style="background:#1e293b; border-radius:8px; padding:12px; border-left:3px solid ${plColor};">
                                    <div style="display:flex; justify-content:space-between; align-items:start; margin-bottom:10px;">
                                        <div>
                                            <div style="font-weight:bold; font-size:1.1rem; color:white;">${p.symbol}</div>
                                            <div style="font-size:0.8rem; color:#94a3b8;">${s.name}</div>
                                        </div>
                                        <button onclick="UI.openStockModal(StockMarket.getStock('${p.symbol}'))" style="background:#dc2626; color:white; border:none; padding:6px 12px; border-radius:4px; cursor:pointer; font-size:0.85rem; font-weight:600;">${t('stock_btn_sell')}</button>
                                    </div>
                                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; font-size:0.85rem;">
                                        <div>
                                            <div style="color:#94a3b8; font-size:0.75rem;">${t('stock_pos_qty')}</div>
                                            <div style="color:white; font-weight:600;">${p.quantity}</div>
                                        </div>
                                        <div>
                                            <div style="color:#94a3b8; font-size:0.75rem;">${t('stock_pos_avg')}</div>
                                            <div style="color:white; font-weight:600;">${formatCurrency(p.avgPrice)}</div>
                                        </div>
                                        <div>
                                            <div style="color:#94a3b8; font-size:0.75rem;">${t('stock_pos_val')}</div>
                                            <div style="color:white; font-weight:600;">${formatCurrency(val)}</div>
                                        </div>
                                        <div>
                                            <div style="color:#94a3b8; font-size:0.75rem;">${t('stock_pos_pl')}</div>
                                            <div style="color:${plColor}; font-weight:bold;">${plSign}${formatCurrency(pl)} <span style="font-size:0.9rem;">(${plSign}${plPercent}%)</span></div>
                                        </div>
                                    </div>
                                </div>
                                `;
                }).join('')}
                        </div>`
            }
                        </div>
                    </div>
                `;

        // Events
        container.querySelectorAll('.stock-chip').forEach(chip => {
            chip.onclick = () => {
                const symbol = chip.dataset.symbol;
                const stock = StockMarket.getStock(symbol);
                if (stock) UI.openStockModal(stock);
            };
        });
    },

    openStockModal(stock) {
        const portfolioItem = GameState.inventory.stocks.find(s => s.symbol === stock.symbol);
        const owned = portfolioItem ? portfolioItem.quantity : 0;

        // New mobile-FIRST LAYOUT
        // We use a flex-column container that takes up the full modal height
        // content-header: Fixed
        // content-body: Scrollable (Chart + Stats)
        // content-footer: Fixed (Buttons)

        const trendColor = stock.trend >= 0 ? '#4ade80' : '#f87171';
        const trendBg = stock.trend >= 0 ? 'rgba(74, 222, 128, 0.1)' : 'rgba(248, 113, 113, 0.1)';
        const trendBorder = stock.trend >= 0 ? 'rgba(74, 222, 128, 0.3)' : 'rgba(248, 113, 113, 0.3)';
        const trendIcon = stock.trend >= 0 ? '📈' : '📉';

        const msg = `
                    <div class="stock-ops-container" style="display:flex; flex-direction:column; height:80vh; max-height:80vh; position: relative;">
                        
                        <!-- Close Button -->
                        <button id="btn-close-stock-modal" style="position: absolute; top: 10px; right: 10px; background: rgba(239, 68, 68, 0.2); border: 1px solid rgba(239, 68, 68, 0.5); color: #f87171; width: 36px; height: 36px; border-radius: 50%; font-size: 1.2rem; cursor: pointer; z-index: 10; display: flex; align-items: center; justify-content: center; transition: all 0.2s;">✕</button>


                        <div class="ops-header" style="flex:0 0 auto; background: linear-gradient(145deg, ${trendBg}, transparent); border: 1px solid ${trendBorder}; border-radius: 16px; padding: 12px 15px; margin-bottom: 10px; margin-top: 15px;">
                            <div style="display:flex; justify-content:space-between; align-items:center;">
                                <div style="display: flex; align-items: center; gap: 10px;">
                                    <div style="font-size: 2rem; filter: drop-shadow(0 0 10px ${trendColor});">${trendIcon}</div>
                                    <div>
                                        <h3 style="margin:0; font-size:1.2rem; color:white; font-weight: 800;">${stock.symbol}</h3>
                                        <span style="color:#94a3b8; font-size:0.8rem;">${stock.name}</span>
                                    </div>
                                </div>
                                <div style="text-align:right;">
                                    <div style="font-size:1.4rem; font-weight:800; color:${trendColor}; text-shadow: 0 0 15px ${trendColor}40;">
                                        ${formatCurrency(stock.price)}
                                    </div>
                                    <span style="font-size:0.85rem; color:${trendColor}; font-weight: 600;">
                                        ${stock.trend >= 0 ? '▲' : '▼'} ${(Math.abs(stock.trend) * 100).toFixed(2)}%
                                    </span>
                                </div>
                            </div>
                        </div>

                        <!-- 2. BODY (Scrollable) -->
                        <div class="ops-body" style="flex:1 1 auto; overflow-y:auto; min-height:0; padding-right:5px;">
                            
                            <!-- Chart Container -->
                            <div style="background: linear-gradient(145deg, #1e293b, #0f172a); border-radius: 12px; padding: 0; margin-bottom: 15px; border: 1px solid #334155; position: relative; overflow: hidden;">
                                <div style="padding: 10px 15px; border-bottom: 1px solid rgba(51, 65, 85, 0.5); font-size: 0.8rem; color: #94a3b8; background: rgba(15, 23, 42, 0.3);">
                                    ${t('stock_modal_yield')}: <span id="chart-roi-display" style="color: white; font-weight: bold;">--</span>
                                </div>
                                <div style="height:180px; width:100%; padding: 10px;">
                                    <canvas id="stock-modal-chart"></canvas>
                                </div>
                            </div>

                            <!-- Timeframe Selectors -->
                            <div class="timeframe-segmented" style="display:flex; background:#0f172a; padding:5px; border-radius:10px; margin-bottom:15px; border: 1px solid #334155;">
                                <button class="btn-seg" data-tf="6" onclick="UI.changeTimeframe(6)" style="flex:1; background:transparent; border:none; color:#94a3b8; padding:10px; border-radius:8px; font-weight: 600; font-size: 0.85rem;">${t('stock_time_6m')}</button>
                                <button class="btn-seg active" data-tf="24" onclick="UI.changeTimeframe(24)" style="flex:1; background: linear-gradient(135deg, #38bdf8, #0ea5e9); border:none; color:white; padding:10px; border-radius:8px; font-weight: 700; font-size: 0.85rem;">${t('stock_time_2y')}</button>
                                <button class="btn-seg" data-tf="999" onclick="UI.changeTimeframe(999)" style="flex:1; background:transparent; border:none; color:#94a3b8; padding:10px; border-radius:8px; font-weight: 600; font-size: 0.85rem;">${t('stock_time_all')}</button>
                            </div>


                        </div>

                        <div class="ops-footer" style="flex:0 0 auto; border-top:1px solid #334155; padding-top:15px; margin-top:10px;">
                            
                            <!-- Compact Portfolio Stats -->
                            <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:0.85rem; color:#cbd5e1; background:rgba(15, 23, 42, 0.5); padding:8px 12px; border-radius:8px; border:1px solid #334155;">
                                <div>
                                    <span style="color:#94a3b8;">${t('stock_modal_owned')}:</span> 
                                    <strong style="color:#38bdf8;">${owned}</strong>
                                </div>
                                <div>
                                    <span style="color:#94a3b8;">${t('stock_modal_value')}:</span> 
                                    <strong style="color:#facc15;">${formatCurrency(owned * stock.price)}</strong>
                                </div>
                            </div>

                            <div style="margin-bottom:12px;">
                                <input type="number" id="stock-action-qty" placeholder="${t('stock_pos_qty')}" 
                                    style="width:100%; padding:14px; background: linear-gradient(145deg, #1e293b, #0f172a); border:1px solid #475569; border-radius:10px; color:white; font-size:1.1rem; text-align:center; font-weight: 600;">
                            </div>
                            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
                                <button id="btn-modal-buy" class="btn-action" style="background: linear-gradient(135deg, #22c55e, #16a34a); color:white; border:none; padding:14px; border-radius:10px; font-weight:700; font-size:1rem; text-transform: uppercase; letter-spacing: 0.5px; cursor: pointer; transition: all 0.2s;">${t('stock_btn_buy')}</button>
                                <button id="btn-modal-sell" class="btn-action" style="background: linear-gradient(135deg, #ef4444, #dc2626); color:white; border:none; padding:14px; border-radius:10px; font-weight:700; font-size:1rem; text-transform: uppercase; letter-spacing: 0.5px; cursor: pointer; transition: all 0.2s;">${t('stock_btn_sell')}</button>
                            </div>
                        </div>

                    </div>
                    `;


        // Overwrite the default modal buttons logic by passing empty array
        // We handle buttons manually inside the HTML
        // Sanitize newlines for HTML modal
        this.showModal(' ', msg.replace(/\n/g, ' '), [], true);

        // Attach Handlers
        setTimeout(() => {
            // Title fix (hack to remove default header if showModal adds one)
            const modalTitle = document.querySelector('#modal-content h2');
            if (modalTitle) modalTitle.style.display = 'none'; // Hide default title

            // Mobile fix: Add wrapper class for full-screen handling
            const modalContent = document.getElementById('modal-content');
            if (modalContent) modalContent.classList.add('stock-modal-wrapper');

            document.getElementById('btn-close-stock-modal').onclick = (e) => {
                const overlay = e.target.closest('.custom-modal-overlay');
                if (overlay) overlay.remove();
            };

            document.getElementById('btn-modal-buy').onclick = (e) => {
                const qty = parseInt(document.getElementById('stock-action-qty').value);
                if (!qty || qty <= 0) return showGameAlert(t('msg_amt_invalid'), 'warning');
                const res = StockMarket.buyStock(stock.symbol, qty);
                if (res.success) {
                    // Close the modal first
                    const overlay = e.target.closest('.custom-modal-overlay');
                    if (overlay) overlay.remove();

                    showGameAlert(res.message, 'success');
                    UI.updateHeader();
                    UI.updateDashboard();
                    UI.updateMarket();
                } else {
                    showGameAlert(res.message, 'error');
                }
            };

            document.getElementById('btn-modal-sell').onclick = (e) => {
                const qty = parseInt(document.getElementById('stock-action-qty').value);
                if (!qty || qty <= 0) return showGameAlert(t('msg_amt_invalid'), 'warning');
                if (owned < qty) return showGameAlert(t('stock_not_enough'), 'warning');
                const res = StockMarket.sellStock(stock.symbol, qty);
                if (res.success) {
                    // Close the modal first
                    const overlay = e.target.closest('.custom-modal-overlay');
                    if (overlay) overlay.remove();

                    showGameAlert(res.message, 'success');
                    UI.updateHeader();
                    UI.updateDashboard();
                    UI.updateMarket();
                } else {
                    showGameAlert(res.message, 'error');
                }
            };
        }, 50);

        // Init Chart
        UI.currentOpenStock = stock;
        UI.stockChartTimeframe = 24;
        setTimeout(() => UI.updateStockModalChart(), 100);
    },

    changeTimeframe(months) {
        this.stockChartTimeframe = months;
        this.updateStockModalChart();

        // Update Active State Visuals
        document.querySelectorAll('.btn-seg').forEach(btn => {
            btn.classList.remove('active');
            // Reset styles
            btn.style.background = 'transparent';
            btn.style.color = '#94a3b8';

            if (parseInt(btn.dataset.tf) === months) {
                btn.classList.add('active');
                // Apply active styles
                btn.style.background = 'linear-gradient(135deg, #38bdf8, #0ea5e9)';
                btn.style.color = 'white';
            }
        });
    },

    updateStockModalChart() {
        if (!UI.currentOpenStock) return;
        ChartModule.drawStockChart('stock-modal-chart', UI.currentOpenStock, UI.stockChartTimeframe);

        // Calculate ROI for timeframe
        const h = UI.currentOpenStock.history || [];
        let roi = 0;
        let subset = h;

        if (UI.stockChartTimeframe !== 999) {
            subset = h.slice(-UI.stockChartTimeframe);
        }

        if (subset.length > 0) {
            const start = subset[0];
            const end = subset[subset.length - 1];
            if (start > 0) roi = (end - start) / start;
        }

        // Update ROI Display
        const roiEl = document.getElementById('chart-roi-display');
        if (roiEl) {
            const sign = roi >= 0 ? '+' : '';
            const color = roi >= 0 ? '#4ade80' : '#f87171';
            const bg = roi >= 0 ? 'rgba(74, 222, 128, 0.2)' : 'rgba(248, 113, 113, 0.2)';
            roiEl.textContent = `${sign}${(roi * 100).toFixed(2)}%`;
            roiEl.style.color = color;
            roiEl.style.backgroundColor = bg;
        }

    },
    updateBank(BankModule) {
        const container = document.getElementById('bank-view');
        if (!container) return;

        // Data
        const limit = BankModule.getMaxLoanAmount();
        const loans = GameState.loans;

        // Calculate total debt
        let totalDebt = 0;
        let totalMonthlyPayment = 0;
        loans.forEach(l => {
            totalDebt += l.remainingBalance;
            totalMonthlyPayment += l.monthlyPayment;
        });


        // Calculate eligible debt for limit (excluding mortgages)
        const currentDebtForLimit = loans
            .filter(l => !l.isMortgage)
            .reduce((sum, l) => sum + l.remainingBalance, 0);

        const remainingLimit = Math.max(0, limit - currentDebtForLimit);

        // Render
        container.innerHTML = `
                    <div class="dashboard-container">
                         <div class="section-header">
                            <h2>${t('bank_title')}</h2>
                            <span style="color:#94a3b8; font-size:0.9rem;">${t('financial_services')}</span>
                        </div>

                        <!-- BANK HERO STATS -->
                        <div class="bank-stats-container" style="display:flex; flex-wrap:wrap; gap:15px; margin-bottom:25px;">
                            <div class="bank-stat-card" style="flex:1; min-width: 140px; background: linear-gradient(145deg, rgba(250, 204, 21, 0.1), rgba(251, 191, 36, 0.05)); border: 1px solid rgba(250, 204, 21, 0.3); border-radius: 16px; padding: 20px; text-align: center;">
                                <div style="font-size: 2rem; margin-bottom: 8px; filter: drop-shadow(0 0 10px rgba(250, 204, 21, 0.4));">💸</div>
                                <span style="display:block; color:#94a3b8; font-size:0.7rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom:8px;">${t('monthly_payment')}</span>
                                <span style="font-size:1.3rem; font-weight:800; color:#facc15; text-shadow: 0 0 15px rgba(250, 204, 21, 0.3);">-${formatCurrency(totalMonthlyPayment)}</span>
                            </div>
                            <div class="bank-stat-card" style="flex:1; min-width: 140px; background: linear-gradient(145deg, rgba(248, 113, 113, 0.1), rgba(239, 68, 68, 0.05)); border: 1px solid rgba(248, 113, 113, 0.3); border-radius: 16px; padding: 20px; text-align: center;">
                                <div style="font-size: 2rem; margin-bottom: 8px; filter: drop-shadow(0 0 10px rgba(248, 113, 113, 0.4));">📊</div>
                                <span style="display:block; color:#94a3b8; font-size:0.7rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom:8px;">${t('total_debt')}</span>
                                <span style="font-size:1.3rem; font-weight:800; color:#f87171; text-shadow: 0 0 15px rgba(248, 113, 113, 0.3);">-${formatCurrency(totalDebt)}</span>
                            </div>
                            <div class="bank-stat-card metric-card cash" style="flex:1; min-width: 140px; background: linear-gradient(145deg, rgba(74, 222, 128, 0.1), rgba(34, 197, 94, 0.05)); border: 1px solid rgba(74, 222, 128, 0.3); border-radius: 16px; padding: 20px; text-align: center;">
                                <div style="font-size: 2rem; margin-bottom: 8px; filter: drop-shadow(0 0 10px rgba(74, 222, 128, 0.4));">💳</div>
                                <span style="display:block; color:#94a3b8; font-size:0.7rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom:8px;">${t('available_credit')}</span>
                                <span style="font-size:1.3rem; font-weight:800; color:#4ade80; text-shadow: 0 0 15px rgba(74, 222, 128, 0.3);">${formatCurrency(remainingLimit)}</span>
                            </div>
                        </div>

                        <div class="bank-grid">
                            <!-- LEFT: CALCULATOR -->
                            <div class="calculator-card">
                                <h3 style="margin-top:0; color:#facc15; border-bottom:1px solid rgba(250, 204, 21, 0.2); padding-bottom:15px; margin-bottom:25px; font-size: 1.2rem; display: flex; align-items: center; gap: 10px;">
                                    <span style="font-size: 1.5rem;">🏦</span> ${t('bank_request_loan')}
                                </h3>
                                
                                <div class="loan-input-group">
                                    <label>${t('bank_amount_req')}</label>
                                    <input type="number" id="loan-amount-input" class="loan-input" placeholder="Ej. 50000" min="1000" step="1000">
                                </div>
                                <div class="loan-input-group">
                                    <label>${t('bank_term_years').replace('{years}', '<span id="loan-years-val" style="color:#facc15; font-weight:bold;">2</span>')}</label>
                                    <input type="range" id="loan-years-input" min="1" max="5" value="2" style="width:100%; accent-color:#facc15; height: 8px;">
                                </div>

                                <div class="loan-summary">
                                    <div style="display:flex; justify-content:space-between; margin-bottom:12px; align-items: center;">
                                        <span style="color: #94a3b8; font-size: 0.9rem;">${t('bank_interest_rate')}</span>
                                        <span style="color:#f87171; font-weight:700; font-size: 1.1rem;">12.0% TAE</span>
                                    </div>
                                    <div style="display:flex; justify-content:space-between; font-size:1.2rem; border-top:1px solid #334155; padding-top:12px; margin-top:10px; align-items: center;">
                                        <span style="color: #94a3b8;">${t('bank_monthly_quota')}</span>
                                        <span id="loan-monthly-preview" style="color:#facc15; font-weight:800; font-size: 1.4rem;">0,00 €</span>
                                    </div>
                                </div>

                                <button id="btn-request-loan-dynamic" class="btn-action-primary" style="background: linear-gradient(135deg, #facc15, #eab308); color:#0f172a; margin-top:25px; width: 100%; padding: 14px; font-size: 1rem; border-radius: 12px; font-weight: 700;">${t('bank_btn_request')}</button>
                            </div>

                            <!-- RIGHT: ACTIVE LOANS -->
                            <div>
                                <h3 style="margin-top:0; color:#94a3b8; margin-bottom:20px; display: flex; align-items: center; gap: 10px;">
                                    <span style="font-size: 1.3rem;">📋</span> ${t('bank_active_loans', { count: loans.length })}
                                </h3>
                                <div id="active-loans-wrapper">
                                    ${loans.length === 0 ?
                `<div style="background: linear-gradient(145deg, rgba(74, 222, 128, 0.05), #0f172a); border:1px solid rgba(74, 222, 128, 0.2); padding:30px; border-radius:16px; text-align:center;">
                                        <div style="font-size: 3rem; margin-bottom: 15px; filter: drop-shadow(0 0 10px rgba(74, 222, 128, 0.3));">🎉</div>
                                        <p style="color:#4ade80; font-weight: 700; font-size: 1.1rem; margin: 0;">${t('debt_free_title')}</p>
                                        <p style="color:#94a3b8; font-size: 0.9rem; margin-top: 8px;">${t('debt_free_msg')}</p>
                                    </div>` :
                loans.map(loan => {
                    const progress = ((loan.termMonths - loan.remainingMonths) / loan.termMonths) * 100;
                    const loanIcon = loan.isMortgage ? '🏠' : '💳';
                    // Translate loan type if it's dynamic, or leave as is if generated elsewhere.
                    // Assuming loan.type is already correct or hard to translate retroactively. 
                    // New mortgages use "Hipotecario...", old ones might differ.
                    // Ideally we'd store a key, but for now let's leave loan.type.

                    return `
                                            <div class="active-loan-card">
                                                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                                                    <div style="display: flex; align-items: center; gap: 12px;">
                                                        <span style="font-size: 1.8rem;">${loanIcon}</span>
                                                        <strong style="color:#fff; font-size:1.1rem;">${loan.type}</strong>
                                                    </div>
                                                    <span style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(220, 38, 38, 0.1)); color:#f87171; padding:6px 12px; border-radius:20px; font-size:0.85rem; font-weight: 700; border: 1px solid rgba(239, 68, 68, 0.3);">-${formatCurrency(loan.remainingBalance)}</span>
                                                </div>
                                                <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size:0.85rem; color:#cbd5e1; background: rgba(15, 23, 42, 0.5); padding: 12px; border-radius: 10px;">
                                                    <div><span style="color:#94a3b8;">${t('bank_monthly_quota')}:</span> <span style="color: #facc15; font-weight: 600;">${formatCurrency(loan.monthlyPayment)}</span></div>
                                                    <div><span style="color:#94a3b8;">${t('remaining')}:</span> <span style="font-weight: 600;">${loan.remainingMonths} ${t('months')}</span></div>
                                                </div>
                                                <div style="margin-top:10px; background:rgba(255,255,255,0.1); height:4px; border-radius:2px;">
                                                    <div class="loan-bar" style="width:${progress}%; height:100%; background:#4ade80; border-radius:2px;"></div>
                                                </div>
                                                <div style="display:flex; gap:10px; margin-top:15px;">
                                                    <button class="btn-pay-partial" data-id="${loan.id}" style="flex:1; background: linear-gradient(135deg, #3b82f6, #2563eb); color:white; border:none; border-radius:8px; padding:10px; cursor:pointer; font-size:0.85rem; font-weight: 700; transition: transform 0.1s;">📉 ${t('bank_btn_amortize')}</button>
                                                    <button class="btn-pay-loan" data-id="${loan.id}" style="flex:1; background: linear-gradient(135deg, #ef4444, #dc2626); color:white; border:none; border-radius:8px; padding:10px; cursor:pointer; font-size:0.85rem; font-weight: 700; transition: transform 0.1s;">💥 ${t('bank_btn_liquidate')}</button>
                                                </div>
                                            </div>
                                            `;
                }).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                `;


        // Events
        const amountInput = document.getElementById('loan-amount-input');
        const rangeInput = document.getElementById('loan-years-input');
        const yearsVal = document.getElementById('loan-years-val');
        const monthlyPreview = document.getElementById('loan-monthly-preview');
        const btnRequest = document.getElementById('btn-request-loan-dynamic');

        const updatePreview = () => {
            const amount = parseInt(amountInput.value) || 0;
            const years = parseInt(rangeInput.value);
            yearsVal.textContent = `${years} ${t('years')}`;

            if (amount > 0) {
                const r = Bank.INTEREST_RATES.personal / 12;
                const n = years * 12;
                const payment = (amount * r) / (1 - Math.pow(1 + r, -n));
                monthlyPreview.textContent = formatCurrency(payment);
            } else {
                monthlyPreview.textContent = "0,00 €";
            }
        };

        amountInput.oninput = updatePreview;
        rangeInput.oninput = updatePreview;

        btnRequest.onclick = () => {
            const amount = parseInt(amountInput.value);
            const years = parseInt(rangeInput.value);
            if (!amount || amount <= 0) return showGameAlert(t('msg_amt_invalid'), 'warning');

            const result = BankModule.takeLoan(amount, years);

            if (result.success) {
                showGameAlert(t('loan_approved') + ' ' + t('loan_received_msg', { amount: formatCurrency(amount) }), 'success');
                UI.updateAll();
            } else {
                showGameAlert(t('loan_denied') + ' ' + result.message, 'error');
            }
        };

        container.querySelectorAll('.btn-pay-loan').forEach(btn => {
            btn.onclick = (e) => {
                const id = parseInt(e.target.dataset.id); // Parse ID!
                const res = BankModule.payLoanTotally(id);

                if (res.success) {
                    // Debt Free Msg
                    const themeColor = '#10b981'; // Emerald
                    const icon = '💸';

                    let freeMsg = `
                        <div style="text-align: center; margin-bottom: 20px;">
                            <div style="font-size: 4rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px ${themeColor}66); animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);">${icon}</div>
                            <h3 style="color: ${themeColor}; margin: 0; font-size: 1.6rem; text-shadow: 0 0 10px ${themeColor}4d; font-weight: 800; letter-spacing: 1px;">${t('bank_debt_free_title')}</h3>
                        </div>

                        <div style="background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.6)); border: 1px solid ${themeColor}4d; border-radius: 16px; padding: 25px; text-align: center; margin-bottom: 25px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                            <div style="font-size: 0.85rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px;">${t('bank_paid_loan_label')}</div>
                            <div style="font-size: 1.6rem; font-weight: 800; color: #f8fafc; margin-bottom: 15px;">${t('bank_paid_100')}</div>
                            
                            <div style="display: inline-block; background: ${themeColor}26; border: 1px solid ${themeColor}4d; padding: 10px 20px; border-radius: 30px;">
                                <span style="color: ${themeColor}; font-weight: 700; font-size: 1.1rem;">${t('bank_liberty_gain')}</span>
                            </div>
                        </div>

                        <p style="text-align: center; color: #cbd5e1; font-size: 1rem; line-height: 1.6; margin: 0; padding: 0 10px;">
                            ${t('bank_debt_free_msg')}
                        </p>
                    `;

                    UI.showModal(' ', freeMsg, [{ text: t('bank_excellent'), style: 'success', fn: null }], true);
                    UI.updateHeader();
                    UI.updateDashboard();
                    UI.updateBank(BankModule);
                } else {
                    showGameAlert(res.message, 'error');
                }
            };
        });

        container.querySelectorAll('.btn-pay-partial').forEach(btn => {
            btn.onclick = (e) => {
                const loanId = parseInt(e.target.dataset.id);

                const modalContent = `
                                <p style="margin-bottom:10px;">${t('msg_enter_amortization')}</p>
                                <input type="number" id="amortize-input-${loanId}" placeholder="Ej: 5000" style="width:100%; padding:10px; border-radius:4px; border:1px solid #334155; background:#1e293b; color:white;">
                            `;

                UI.showModal(t('bank_loan_repay'), modalContent, [
                    {
                        text: t('confirm'),
                        style: 'primary',
                        fn: () => {
                            const input = document.getElementById(`amortize-input-${loanId}`);
                            if (!input) return;
                            const val = parseInt(input.value);

                            if (isNaN(val) || val <= 0) {
                                // Alert prevents flow break
                                showGameAlert(t('msg_amt_invalid'), 'warning');
                                return;
                            }

                            const res = BankModule.payLoanPartial(loanId, val);
                            if (res.success) {
                                // Success Message
                                const themeColor = '#34d399'; // Emerald 400
                                const icon = '📉';

                                let amortMsg = `
                                    <div style="text-align: center; margin-bottom: 20px;">
                                        <div style="font-size: 4rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px ${themeColor}66); animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);">${icon}</div>
                                        <h3 style="color: ${themeColor}; margin: 0; font-size: 1.6rem; text-shadow: 0 0 10px ${themeColor}4d; font-weight: 800; letter-spacing: 1px;">${t('repay_success_title')}</h3>
                                    </div>

                                    <div style="background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.6)); border: 1px solid ${themeColor}4d; border-radius: 16px; padding: 25px; text-align: center; margin-bottom: 25px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                                        <div style="font-size: 0.85rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px;">${t('repay_reduced_capital')}</div>
                                        <div style="font-size: 1.6rem; font-weight: 800; color: #f8fafc; margin-bottom: 15px;">-${formatCurrency(val)}</div>
                                        
                                        <div style="display: inline-block; background: ${themeColor}26; border: 1px solid ${themeColor}4d; padding: 10px 20px; border-radius: 30px;">
                                            <span style="color: ${themeColor}; font-weight: 700; font-size: 1.1rem;">${t('repay_interests_down')}</span>
                                        </div>
                                    </div>

                                    <p style="text-align: center; color: #cbd5e1; font-size: 1rem; line-height: 1.6; margin: 0; padding: 0 10px;">
                                        ${t('repay_success_desc')}
                                    </p>
                                `;
                                UI.showModal(' ', amortMsg, [{ text: t('accept'), style: 'success', fn: null }], true);
                                UI.updateBank(BankModule);
                                UI.updateHeader();
                                UI.updateDashboard();
                            } else {
                                UI.showModal(t('error'), res.message, [{ text: t('close'), style: 'secondary', fn: null }]);
                            }
                        }
                    },
                    { text: t('cancel'), style: 'secondary', fn: null }
                ]);
            };
        });
    },
    updateRealEstate(REModule) {
        const container = document.getElementById('real-estate-view');
        if (!container) return;

        // Data
        const properties = REModule.availableProperties;
        const owned = GameState.inventory.realEstate;

        // Hero Stats
        let totalVal = 0;
        let totalRent = 0;
        let totalEquity = 0;
        let totalMortgagePayment = 0;

        owned.forEach(p => {
            totalVal += p.price;
            totalRent += p.monthlyRent;
        });

        // Calc Equity & Mortgage
        let mortgageDebt = 0;
        GameState.loans.forEach(l => {
            if (l.isMortgage) {
                mortgageDebt += l.remainingBalance;
                totalMortgagePayment += l.monthlyPayment;
            }
        });
        totalEquity = totalVal - mortgageDebt;

        // Render
        container.innerHTML = `
                    <div class="dashboard-container">
                        <div class="section-header">
                            <h2>Bienes Inmobiliarios</h2>
                            <span style="color:#94a3b8; font-size:0.9rem;">Propiedades: ${owned.length}</span>
                        </div>

                        <!-- RE Limit Alert -->
                        ${(() => {
                const limits = GameBalance.getLimits();
                const limitDisp = limits.reCap === Infinity ? '∞' : limits.reCap;
                const limitPct = limits.reCap === Infinity ? 0 : Math.min(100, (owned.length / limits.reCap) * 100);
                const isLimitReached = limits.reCap !== Infinity && owned.length >= limits.reCap;

                return `
                            <div style="margin-bottom: 20px; background: #0f172a; border: 1px solid #334155; border-radius: 12px; padding: 15px;">
                                <div style="display:flex; justify-content:space-between; margin-bottom: 8px;">
                                    <span style="color:#94a3b8; font-size:0.85rem;">${t('re_limit_title')}</span>
                                    <span style="color:${isLimitReached ? '#f87171' : '#cbd5e1'}; font-weight:700; font-size:0.9rem;">
                                        ${owned.length} / ${limitDisp}
                                    </span>
                                </div>
                                <div style="background:#1e293b; height:8px; border-radius:4px; overflow:hidden;">
                                    <div style="width:${limitPct}%; height:100%; background:${isLimitReached ? '#f87171' : '#a855f7'}; transition: width 0.3s;"></div>
                                </div>
                                ${isLimitReached ? `<div style="color:#f87171; font-size:0.8rem; margin-top:5px;">${t('re_limit_reached')}</div>` : ''}
                            </div>
                            `;
            })()}

                        <div class="re-stats-container" style="display:flex; flex-wrap:wrap; gap:15px; margin-bottom:25px;">
                            <div class="re-stat-card" style="flex:2; min-width: 200px; background: linear-gradient(145deg, rgba(250, 204, 21, 0.1), rgba(251, 191, 36, 0.05)); border: 1px solid rgba(250, 204, 21, 0.3); border-radius: 16px; padding: 20px; text-align: center; position: relative; overflow: hidden;">
                                <div style="font-size: 2rem; margin-bottom: 8px; filter: drop-shadow(0 0 10px rgba(250, 204, 21, 0.4));">🏛️</div>
                                <span style="display:block; color:#94a3b8; font-size:0.75rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom:8px;">${t('net_worth')}</span>
                                <span style="font-size:1.6rem; font-weight:800; color:#facc15; text-shadow: 0 0 20px rgba(250, 204, 21, 0.3);">${formatCurrency(totalEquity)}</span>
                            </div>
                            <div class="re-stat-card" style="flex:1; min-width: 140px; background: linear-gradient(145deg, rgba(74, 222, 128, 0.1), rgba(34, 197, 94, 0.05)); border: 1px solid rgba(74, 222, 128, 0.3); border-radius: 16px; padding: 20px; text-align: center; position: relative; overflow: hidden;">
                                <div style="font-size: 2rem; margin-bottom: 8px; filter: drop-shadow(0 0 10px rgba(74, 222, 128, 0.4));">💰</div>
                                <span style="display:block; color:#94a3b8; font-size:0.75rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom:8px;">${t('re_rents_month')}</span>
                                <span style="font-size:1.3rem; font-weight:800; color:#4ade80; text-shadow: 0 0 15px rgba(74, 222, 128, 0.3);">+${formatCurrency(totalRent)}</span>
                            </div>
                            <div class="re-stat-card" style="flex:1; min-width: 140px; background: linear-gradient(145deg, rgba(248, 113, 113, 0.1), rgba(239, 68, 68, 0.05)); border: 1px solid rgba(248, 113, 113, 0.3); border-radius: 16px; padding: 20px; text-align: center; position: relative; overflow: hidden;">
                                <div style="font-size: 2rem; margin-bottom: 8px; filter: drop-shadow(0 0 10px rgba(248, 113, 113, 0.4));">🏦</div>
                                <span style="display:block; color:#94a3b8; font-size:0.75rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom:8px;">${t('re_mortgages_month')}</span>
                                <span style="font-size:1.3rem; font-weight:800; color:#f87171; text-shadow: 0 0 15px rgba(248, 113, 113, 0.3);">-${formatCurrency(totalMortgagePayment)}</span>
                            </div>
                        </div>

                        <!-- RE Market -->
                        <div class="job-section-spacer">
                            <h3 style="color:#cbd5e1; margin-bottom:20px;">${t('re_market_title')}</h3>
                            <div class="market-grid">
                                ${properties.map(prop => {
                const pricePerM2 = prop.price / prop.sizeM2;
                const isGoodDeal = pricePerM2 < prop.zoneAvgPrice;
                const dealText = isGoodDeal ? t('re_good_deal') : t('re_bad_deal');
                const dealClass = isGoodDeal ? 'good-deal' : 'bad-deal';
                const roi = (prop.monthlyRent * 12) / prop.price;

                return `
                                    <div class="property-card-expert">
                                        <div class="prop-img" style="display:flex; align-items:center; justify-content:center; background:#1e293b; font-size:4rem; position:relative;">
                                            ${prop.icon || '🏠'}
                                            <span class="deal-badge ${dealClass}">${dealText}</span>
                                        </div>
                                        <div class="prop-content">
                                            <h4 style="margin:0 0 5px 0; color:#fff;">${t(prop.name)}</h4>
                                            <p style="color:#94a3b8; font-size:0.85rem; margin-bottom:10px;">
                                                ${prop.sizeM2}m² | ${t('re_zone')}: ${formatCurrency(prop.zoneAvgPrice)}/m²
                                            </p>
                                            
                                            <div class="prop-financials" style="display:grid; grid-template-columns: 1fr 1fr; gap:8px; background:rgba(15,23,42,0.5); padding:10px; border-radius:8px; margin-bottom:15px;">
                                                <div>
                                                    <span class="label" style="display:block; font-size:0.75rem; color:#94a3b8;">${t('property_price')}</span>
                                                    <span class="value" style="color:#facc15; font-weight:700;">${formatCurrency(prop.price)}</span>
                                                </div>
                                                <div>
                                                    <span class="label" style="display:block; font-size:0.75rem; color:#94a3b8;">${t('re_rent')}</span>
                                                    <span class="value" style="color:#4ade80; font-weight:700;">+${formatCurrency(prop.monthlyRent)}/m</span>
                                                </div>
                                                <div>
                                                    <span class="label" style="display:block; font-size:0.75rem; color:#94a3b8;">${t('re_btn_entry')} (20%)</span>
                                                    <span class="value" style="color:#e2e8f0; font-weight:700;">${formatCurrency(prop.price * prop.downPaymentPct)}</span>
                                                </div>
                                                <div>
                                                    <span class="label" style="display:block; font-size:0.75rem; color:#94a3b8;">${t('re_yield')}</span>
                                                    <span class="value" style="color:#facc15; font-weight:700;">${((prop.monthlyRent * 12 / prop.price) * 100).toFixed(1)}%</span>
                                                </div>
                                            </div>

                                            <div style="display:flex; gap:10px;">
                                                <button class="btn-buy-prop-dynamic btn-action-primary" data-id="${prop.id}" data-mortgage="true" style="flex:1; font-size:0.85rem;">${t('re_buy_mortgage')}</button>
                                                <button class="btn-buy-prop-dynamic btn-action-primary" data-id="${prop.id}" data-mortgage="false" style="flex:1; background:#475569; border:1px solid #94a3b8; font-size:0.85rem;">${t('re_buy_cash')}</button>
                                            </div>
                                        </div>
                                    </div>
                                    `;
            }).join('')}
                            </div>
                        </div>

                        <!-- RE My Props -->
                        <div class="dashboard-card" style="margin-top:25px;">
                            <h3 style="margin-top:0; color:#cbd5e1; margin-bottom:15px; border-bottom:1px solid #334155; padding-bottom:10px;">🔑 ${t('re_my_properties')}</h3>
                             ${owned.length === 0 ? `<p style="color:#64748b;">${t('re_no_properties')}</p>` :
                '<div style="display:grid; gap:10px;">' +
                owned.map(prop => {
                    const purchasePrice = prop.purchasePrice || prop.price; // Fallback
                    const diff = prop.price - purchasePrice;
                    const pct = ((diff / purchasePrice) * 100).toFixed(2);
                    const color = diff >= 0 ? '#4ade80' : '#f87171';
                    const sign = diff >= 0 ? '+' : '';

                    const mortgage = GameState.loans.find(l => l.id === prop.mortgageId);
                    const debtHtml = mortgage
                        ? `<div>${t('re_debt')}: <span style="color:#f87171">-${formatCurrency(mortgage.monthlyPayment)}/m</span></div>`
                        : '';

                    return `
                                    <div style="background:#0f172a; padding:15px; border-radius:8px; display:flex; justify-content:space-between; align-items:center; border: 1px solid #334155;">
                                        <div>
                                            <strong style="color:#fff;">${t(prop.name)}</strong>
                                            <div style="font-size:0.85rem; color:#94a3b8; margin-top:5px;">
                                                <div>${t('re_bought_for')}: ${formatCurrency(purchasePrice)} | ${t('re_current')}: ${formatCurrency(prop.price)}</div>
                                                <div style="color:${color}; font-weight:bold;">${t('re_appreciation')}: ${sign}${pct}%</div>
                                                <div>${t('re_rent')}: <span style="color:#4ade80">+${formatCurrency(prop.monthlyRent)}/m</span></div>
                                                ${debtHtml}
                                            </div>
                                        </div>
                                        <button class="btn-sell-prop-dynamic" data-id="${prop.id}" style="background:#ef4444; color:white; border:none; padding:8px 16px; border-radius:6px; cursor:pointer; font-weight:600; font-size:0.85rem;">${t('re_sell')}</button>
                                    </div>
                                `;
                }).join('') +
                '</div>'
            }
                        </div>
                    </div>
                `;

        // Events
        container.querySelectorAll('.btn-buy-prop-dynamic').forEach(btn => {
            btn.onclick = (e) => {
                const target = e.currentTarget;
                const id = parseInt(target.dataset.id);
                const prop = REModule.availableProperties.find(p => p.id === id);
                if (!prop) return;

                const useMortgage = target.dataset.mortgage === 'true';

                // Buy Helper
                const buy = (propId, mortgage, term) => {
                    const res = REModule.buyProperty(propId, mortgage, term);
                    if (res.success) {
                        const purchasedProp = GameState.inventory.realEstate.find(p => p.id === propId);
                        UI.showModal(t('re_bought_title'), `
                            <div style="text-align:center;">
                                <div style="font-size:4rem; margin-bottom:10px; animation: bounceIn 0.8s;">🔑</div>
                                <h3 style="color:#facc15; font-size:1.5rem; margin:0 0 10px 0; text-shadow:0 0 10px rgba(250, 204, 21, 0.3);">${t('re_acquired_title')}</h3>
                                <div style="background:rgba(15, 23, 42, 0.6); border:1px solid #facc15; border-radius:12px; padding:20px; margin-bottom:20px;">
                                    <p style="color:#cbd5e1; font-size:1.1rem; margin-bottom:5px;">${t('re_you_bought')}:</p>
                                    <div style="font-size:1.4rem; font-weight:800; color:#fff;">${purchasedProp ? t(purchasedProp.name) : t('re_new_property')}</div>
                                </div>
                                <p style="color:#94a3b8; font-size:0.9rem;">${t('re_added_to_portfolio')}</p>
                            </div>
                        `, [{ text: t('great'), style: 'success', fn: null }], true);

                        const existingModal = document.querySelector('.game-modal-overlay');
                        if (existingModal) existingModal.remove();

                        UI.updateHeader();
                        UI.updateDashboard();
                        UI.updateBank(Bank);
                        UI.updateRealEstate(REModule);
                    } else {
                        UI.showModal(t('error'), res.message, [{ text: t('close'), style: 'secondary', fn: null }]);
                    }
                };


                if (useMortgage) {
                    const downPayment = prop.price * prop.downPaymentPct;
                    const loanAmount = prop.price - downPayment;
                    const rateAnnual = Bank.INTEREST_RATES.mortgage;
                    const r = rateAnnual / 12;

                    // Options
                    const calcPmt = (years) => {
                        const n = years * 12;
                        return (loanAmount * r) / (1 - Math.pow(1 + r, -n));
                    };

                    const msg = `
                        <div style="text-align:center;">
                            <div style="font-size:3rem; margin-bottom:10px;">🏠</div>
                            <h3 style="color:#facc15; margin:0 0 5px 0;">${t('re_config_mortgage')}</h3>
                            <p style="color:#cbd5e1; font-size:1rem; margin-bottom:20px;">${t(prop.name)}</p>

                            <div style="background:rgba(15, 23, 42, 0.6); border-radius:12px; padding:20px; text-align:left; border:1px solid #334155;">
                                <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                                    <span style="color:#94a3b8;">${t('re_property_value')}</span>
                                    <span style="color:#e2e8f0; font-weight:700;">${formatCurrency(prop.price)}</span>
                                </div>
                                <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                                    <span style="color:#94a3b8;">${t('re_down_payment')}</span>
                                    <span style="color:#ef4444; font-weight:700;">- ${formatCurrency(downPayment)}</span>
                                </div>
                                <div style="border-top:1px dashed #475569; margin:10px 0;"></div>
                               <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                                    <span style="color:#f97316; font-weight:600;">${t('re_loan_amount')}</span>
                                    <span style="color:#f97316; font-weight:800; font-size:1.1rem;">${formatCurrency(loanAmount)}</span>
                                </div>
                                <div style="display:flex; justify-content:space-between; font-size:0.85rem;">
                                   <span style="color:#94a3b8;">${t('re_annual_interest')}</span>
                                   <span style="color:#fff;">${(rateAnnual * 100).toFixed(2)}%</span>
                                </div>
                            </div>
                            
                            <p style="margin-top:20px; font-size:0.9rem; color:#94a3b8; margin-bottom:10px;">${t('re_select_term')}</p>
                            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap:10px;">
                                <div id="mortgage-10y" class="mortgage-card" style="background:rgba(30, 41, 59, 0.8); border:1px solid #334155; border-radius:10px; padding:15px; cursor:pointer; transition:all 0.2s; text-align:center;">
                                    <div style="font-size:0.9rem; color:#94a3b8; margin-bottom:5px;">10 ${t('years')}</div>
                                    <div style="font-size:1.1rem; color:#facc15; font-weight:700;">${formatCurrency(calcPmt(10))}/m</div>
                                </div>
                                <div id="mortgage-20y" class="mortgage-card" style="background:rgba(30, 41, 59, 0.8); border:1px solid #334155; border-radius:10px; padding:15px; cursor:pointer; transition:all 0.2s; text-align:center;">
                                    <div style="font-size:0.9rem; color:#94a3b8; margin-bottom:5px;">20 ${t('years')}</div>
                                    <div style="font-size:1.1rem; color:#facc15; font-weight:700;">${formatCurrency(calcPmt(20))}/m</div>
                                </div>
                                <div id="mortgage-30y" class="mortgage-card" style="background:rgba(30, 41, 59, 0.8); border:1px solid #334155; border-radius:10px; padding:15px; cursor:pointer; transition:all 0.2s; text-align:center;">
                                    <div style="font-size:0.9rem; color:#94a3b8; margin-bottom:5px;">30 ${t('years')}</div>
                                    <div style="font-size:1.1rem; color:#facc15; font-weight:700;">${formatCurrency(calcPmt(30))}/m</div>
                                </div>
                            </div>
                            <style>
                                .mortgage-card:hover {
                                    background: rgba(59, 130, 246, 0.1) !important;
                                    border-color: #3b82f6 !important;
                                    transform: translateY(-2px);
                                }
                            </style>
                        </div>
                    `;

                    const overlay = UI.showModal(t('re_config_mortgage'), msg, [
                        { text: t('cancel'), style: 'secondary', fn: null }
                    ]);

                    // Attach Events
                    if (overlay) {
                        const m10 = overlay.querySelector('#mortgage-10y');
                        const m20 = overlay.querySelector('#mortgage-20y');
                        const m30 = overlay.querySelector('#mortgage-30y');

                        if (m10) m10.onclick = () => { buy(id, true, 10); overlay.remove(); };
                        if (m20) m20.onclick = () => { buy(id, true, 20); overlay.remove(); };
                        if (m30) m30.onclick = () => { buy(id, true, 30); overlay.remove(); };
                    }

                } else {
                    // Cash Buy
                    const modalMsg = `
                        <div style="text-align:center;">
                            <div style="font-size:3rem; margin-bottom:10px;">💎</div>
                            <h3 style="color:#fff; margin:0 0 5px 0;">${t(prop.name)}</h3>
                            <p style="color:#94a3b8; font-size:0.9rem; margin-bottom:20px;">${t('re_prop_acquisition')}</p>

                            <div style="background:linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.05)); border:1px solid rgba(16, 185, 129, 0.3); border-radius:12px; padding:20px; margin-bottom:20px;">
                                <div style="font-size:0.85rem; color:#6ee7b7; text-transform:uppercase; margin-bottom:5px;">${t('re_total_price')}</div>
                                <div style="font-size:2rem; font-weight:800; color:#fff; text-shadow:0 0 15px rgba(16, 185, 129, 0.5);">${formatCurrency(prop.price)}</div>
                            </div>

                            <div style="display:flex; justify-content:space-between; padding:10px 20px; background:rgba(15, 23, 42, 0.5); border-radius:8px;">
                                 <span style="color:#94a3b8;">${t('re_current_balance')}</span>
                                 <span style="color:#cbd5e1;">${formatCurrency(GameState.cash)}</span>
                            </div>
                             <div style="display:flex; justify-content:space-between; padding:10px 20px; background:rgba(30, 41, 59, 0.5); border-radius:8px; margin-top:5px;">
                                 <span style="color:#94a3b8;">${t('re_balance_after')}</span>
                                 <span style="color:${(GameState.cash - prop.price) >= 0 ? '#4ade80' : '#f87171'}; font-weight:700;">${formatCurrency(GameState.cash - prop.price)}</span>
                            </div>
                        </div>
                        `;

                    UI.showModal(
                        t('re_cash_buy'),
                        modalMsg,
                        [
                            { text: t('re_cancel'), style: 'secondary', fn: null },
                            { text: t('re_buy_cash_btn'), style: 'success', fn: () => buy(id, false, 0) }
                        ],
                        true
                    );
                }
            };
        });

        container.querySelectorAll('.btn-sell-prop-dynamic').forEach(btn => {
            btn.onclick = (e) => {
                const id = parseInt(e.target.dataset.id);
                const prop = GameState.inventory.realEstate.find(p => p.id === id);
                // Details
                let outstandingMortgage = 0;
                if (prop.mortgageId) {
                    const loan = GameState.loans.find(l => l.id === prop.mortgageId);
                    if (loan) outstandingMortgage = loan.remainingBalance;
                }
                const netProceeds = prop.price - outstandingMortgage;

                UI.showModal(t('re_sell_title'), `
                    <div style="text-align:center;">
                        <div style="font-size:3rem; margin-bottom:10px;">🏷️</div>
                        <h3 style="color:#fff; margin:0 0 5px 0;">${t(prop.name)}</h3>
                        <p style="color:#94a3b8; font-size:0.9rem; margin-bottom:20px;">${t('re_confirm_sell')}</p>

                        <div style="background:rgba(15, 23, 42, 0.6); border-radius:12px; padding:20px; text-align:left; border:1px solid #334155;">
                            <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                                <span style="color:#94a3b8;">${t('re_market_price')}</span>
                                <span style="color:#e2e8f0; font-weight:700;">${formatCurrency(prop.price)}</span>
                            </div>
                            ${outstandingMortgage > 0 ? `
                            <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                                <span style="color:#f87171;">${t('re_mortgage_cancel')}</span>
                                <span style="color:#f87171; font-weight:700;">- ${formatCurrency(outstandingMortgage)}</span>
                            </div>
                            <div style="border-top:1px dashed #475569; margin:10px 0;"></div>
                            ` : ''}
                            <div style="display:flex; justify-content:space-between; align-items:center;">
                                <span style="color:#4ade80; font-weight:600;">${t('re_net_receive')}:</span>
                                <span style="color:#4ade80; font-weight:800; font-size:1.2rem;">${formatCurrency(netProceeds)}</span>
                            </div>
                        </div>
                    </div>
                `, [
                    { text: t('cancel'), style: 'secondary', fn: null },
                    {
                        text: t('sell_now'),
                        style: 'danger',
                        fn: () => {
                            const res = REModule.sellProperty(id);
                            showGameAlert(res.message, res.success ? 'success' : 'error');
                            if (res.success) {
                                UI.updateHeader();
                                UI.updateDashboard();
                                UI.updateBank(Bank);
                                UI.updateRealEstate(REModule);
                            }
                        }
                    }
                ], true);
            };
        });
    },

    openCompanyWizard() {
        const modal = document.getElementById('company-wizard-modal');
        const close = document.getElementById('close-wizard');

        // Steps
        const step1 = document.getElementById('wizard-step-1');
        const step2 = document.getElementById('wizard-step-2');
        const dot1 = document.getElementById('wiz-step-ind-1');
        const dot2 = document.getElementById('wiz-step-dot-2');
        const bar2 = document.getElementById('wiz-step-bar-2');
        const label2 = document.getElementById('wiz-step-label-2');


        // Buttons
        const btnNext = document.getElementById('btn-wiz-next');
        const btnBack = document.getElementById('btn-wiz-back');

        // UI Elements
        const nameInput = document.getElementById('wiz-name');
        const typeGrid = document.getElementById('wiz-types-grid');
        const locGrid = document.getElementById('wiz-loc-grid');
        const summaryCash = document.getElementById('wiz-current-cash');
        const summarySetup = document.getElementById('summ-setup-cost');
        const summaryRent = document.getElementById('summ-rent-cost');
        const summaryTotal = document.getElementById('wiz-total-cost');
        const errorMsg = document.getElementById('wiz-error-msg');

        // State
        let currentStep = 1;
        let state = {
            name: '',
            typeId: null,
            locId: null
        };

        // Update Summary
        const updateSummary = () => {
            summaryCash.textContent = formatCurrency(GameState.cash);

            let setupCost = 0;
            let rentCost = 0;

            if (state.typeId) {
                const type = CompanyModule.businessTypes[state.typeId];
                setupCost = type.cost;

                // Calc Rent
                if (state.locId) {
                    const loc = CompanyModule.locations[state.locId];
                    rentCost = type.baseRent * loc.rentMult;
                }
            }

            summarySetup.textContent = formatCurrency(setupCost);
            summaryRent.textContent = rentCost > 0 ? `${formatCurrency(rentCost)}/mes` : '---';

            // Setup + 1 Month Rent
            const totalRequired = setupCost + rentCost;

            summaryTotal.textContent = formatCurrency(totalRequired);

            if (GameState.cash < totalRequired) {
                summaryTotal.style.color = '#f87171'; // Red
                errorMsg.style.display = 'block';
                btnNext.disabled = true;
            } else {
                summaryTotal.style.color = '#f8fafc';
                errorMsg.style.display = 'none';
                btnNext.disabled = false;
            }
        };

        // Render Step 1
        typeGrid.innerHTML = '';

        // Count Cafes
        const cafeCount = (GameState.ownedCompanies || []).filter(c => c.typeId === 'cafe').length;

        for (const [key, val] of Object.entries(CompanyModule.businessTypes)) {
            const volatility = val.volatility || 0.1;
            const riskTag = volatility > 0.3 ? `<span class="biz-tag tag-high-risk">${t('cat_high_risk')}</span>` : `<span class="biz-tag tag-low-risk">${t('cat_stable')}</span>`;
            const icon = val.icon || '🏢';

            // Check Lock
            const isLocked = (key !== 'cafe' && cafeCount < 2);

            // Check Funds
            const canAfford = GameState.cash >= val.cost;
            const isComingSoon = (key !== 'cafe');
            const isDisabled = isLocked || !canAfford || isComingSoon;

            const card = document.createElement('div');
            // Add Lock Class
            card.className = `biz-model-card ${isDisabled ? 'locked' : ''}`;

            if (isComingSoon) {
                card.innerHTML = `
                            <div style="text-align: center;">
                                <div style="font-size: 2.5rem; margin-bottom: 10px; filter: grayscale(1); opacity:0.6;">${val.icon}</div>
                                <div style="font-size: 1.1rem; font-weight: 700; color: #64748b; margin-bottom: 8px;">${t('biz_type_' + key)}</div>
                                <span style="display: inline-block; background: #334155; color: #94a3b8; padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 600;">${t('wiz_in_development')}</span>
                            </div>
                            <div style="margin-top: 15px; padding: 12px; border-radius: 10px; border: 1px dashed #475569; text-align: center;">
                                <div style="font-size: 0.9rem; color: #fbbf24; font-weight:600;">${t('wiz_coming_soon')}</div>
                            </div>
                        `;

            } else if (isLocked) {
                // Locked State
                card.innerHTML = `
                            <div style="text-align: center;">
                                <div style="font-size: 2.5rem; margin-bottom: 10px; filter: grayscale(1);">🔒</div>
                                <div style="font-size: 1.1rem; font-weight: 700; color: #64748b; margin-bottom: 8px;">${t('biz_type_' + key)}</div>
                                <span style="display: inline-block; background: #334155; color: #64748b; padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 600;">${t('locked')}</span>
                            </div>
                            <div style="margin-top: 15px; padding: 12px; background: rgba(248, 113, 113, 0.1); border-radius: 10px; border: 1px solid rgba(248, 113, 113, 0.2); text-align: center;">
                                <div style="font-size: 0.85rem; color: #f87171;">${t('wiz_req_cafes', { count: 2 })}</div>
                                <div style="font-size: 0.8rem; color: #94a3b8; margin-top: 4px;">${t('you_have')}: <strong style="color: #fbbf24;">${cafeCount}</strong></div>
                            </div>
                        `;

            } else if (!canAfford) {
                // Insufficient Funds
                card.innerHTML = `
                            <div style="text-align: center;">
                                <div style="font-size: 2.5rem; margin-bottom: 10px; opacity: 0.5;">${icon}</div>
                                <div style="font-size: 1.1rem; font-weight: 700; color: #64748b; margin-bottom: 8px;">${t('biz_type_' + key)}</div>
                                <span style="display: inline-block; background: rgba(239, 68, 68, 0.1); color: #ef4444; padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 600; border: 1px solid rgba(239, 68, 68, 0.2);">${t('insufficient_funds')}</span>
                            </div>
                            <div style="margin-top: 15px; padding: 12px; background: rgba(15, 23, 42, 0.3); border-radius: 10px; border: 1px dashed #475569; text-align: center;">
                                <div style="font-size: 0.85rem; color: #94a3b8;">${t('wiz_investment_cost')}</div>
                                <div style="font-size: 1.1rem; font-weight: 800; color: #ef4444; margin-top: 4px;">${formatCurrency(val.cost)}</div>
                                <div style="font-size: 0.8rem; color: #64748b; margin-top: 4px;">${t('you_have')}: <span style="${GameState.cash < val.cost ? 'color:#ef4444' : 'color:#4ade80'}">${formatCurrency(GameState.cash)}</span></div>
                            </div>
                        `;

            } else {
                // Unlocked
                const riskColor = volatility > 0.3 ? '#f87171' : '#4ade80';
                const riskBg = volatility > 0.3 ? 'rgba(248, 113, 113, 0.1)' : 'rgba(74, 222, 128, 0.1)';
                const riskBorder = volatility > 0.3 ? 'rgba(248, 113, 113, 0.3)' : 'rgba(74, 222, 128, 0.3)';
                const riskText = volatility > 0.3 ? '⚡ ' + t('cat_high_risk') : '✓ ' + t('cat_stable');


                card.innerHTML = `
                            <div style="text-align: center; margin-bottom: 15px;">
                                <div style="font-size: 3rem; margin-bottom: 10px; filter: drop-shadow(0 0 10px rgba(251, 191, 36, 0.3));">${icon}</div>
                                <div style="font-size: 1.2rem; font-weight: 800; color: #fff; margin-bottom: 8px;">${t('biz_type_' + key)}</div>
                                <span style="display: inline-block; background: ${riskBg}; color: ${riskColor}; padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 600; border: 1px solid ${riskBorder};">${volatility > 0.3 ? '⚡ ' + t('cat_high_risk') : '✓ ' + t('cat_stable')}</span>
                            </div>
                            <div style="display: grid; gap: 8px;">
                                <div style="display: flex; justify-content: space-between; padding: 8px; background: rgba(251, 191, 36, 0.05); border-radius: 8px;">
                                    <span style="color: #94a3b8; font-size: 0.85rem;">💰 ${t('wiz_investment_cost')}</span>
                                    <span style="color: #fbbf24; font-weight: 700;">${formatCurrency(val.cost)}</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; padding: 8px; background: rgba(248, 113, 113, 0.05); border-radius: 8px;">
                                    <span style="color: #94a3b8; font-size: 0.85rem;">🏠 ${t('comp_rent_label')}</span>
                                    <span style="color: #f87171; font-weight: 700;">${formatCurrency(val.baseRent)}/mes</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; padding: 8px; background: rgba(74, 222, 128, 0.05); border-radius: 8px;">
                                    <span style="color: #94a3b8; font-size: 0.85rem;">📈 ${t('wiz_demand_label')}</span>
                                    <span style="color: #4ade80; font-weight: 700;">${val.baseDemand}/mes</span>
                                </div>
                            </div>
                        `;

                card.onclick = () => {
                    typeGrid.querySelectorAll('.biz-model-card').forEach(el => el.classList.remove('selected'));
                    card.classList.add('selected');
                    state.typeId = key;
                    updateSummary();
                };
            }
            typeGrid.appendChild(card);
        }

        // Render Locations
        const renderLocations = () => {
            locGrid.innerHTML = '';

            // Count Businesses
            const totalBusinesses = (GameState.company ? 1 : 0) + (GameState.ownedCompanies ? GameState.ownedCompanies.length : 0);
            const premiumLocationsUnlocked = totalBusinesses >= 2;

            for (const [key, val] of Object.entries(CompanyModule.locations)) {
                const trafficPct = Math.min(100, val.trafficMult * 80);

                // Calc Dynamic Price
                let priceDisplay = `x${val.rentMult}`;

                if (state.typeId) {
                    const base = CompanyModule.businessTypes[state.typeId].baseRent;
                    const final = base * val.rentMult;
                    priceDisplay = formatCurrency(final) + '/mes';
                }

                // Requirement Logic
                let isLocked = false;
                let lockReason = '';

                // 1. Check Type
                const isPremium = (key === 'downtown' || key === 'business_district');

                if (isPremium) {
                    // Cafe Progression
                    if (state.typeId === 'cafe') {
                        const hasAutoOuter = (GameState.ownedCompanies || []).some(c => c.typeId === 'cafe' && c.locationId === 'suburbs');
                        const hasAutoDowntown = (GameState.ownedCompanies || []).some(c => c.typeId === 'cafe' && c.locationId === 'downtown');

                        if (key === 'downtown') {
                            if (!hasAutoOuter) {
                                isLocked = true;
                                lockReason = t('wiz_req_cafe_auto_suburbs');
                            }
                        } else if (key === 'business_district') {
                            if (!hasAutoDowntown) {
                                isLocked = true;
                                lockReason = t('wiz_req_cafe_auto_downtown');
                            }
                        }
                    } else {
                        // Fallback
                        if (!premiumLocationsUnlocked) {
                            isLocked = true;
                            lockReason = t('wiz_req_active_biz', { count: 2 });
                        }
                    }
                }

                const card = document.createElement('div');
                card.className = 'loc-tier-card';
                if (isLocked) card.classList.add('locked');
                if (state.locId === key) card.classList.add('selected');

                // Get Icon
                const getLocIcon = (locKey) => {
                    const icons = { 'suburbs': '🏡', 'residential': '🏘️', 'commercial': '🏪', 'downtown': '🌆', 'business_district': '🏙️' };
                    return icons[locKey] || '📍';
                };
                const locIcon = getLocIcon(key);
                const trafficColor = val.trafficMult >= 1.5 ? '#4ade80' : val.trafficMult >= 1.0 ? '#fbbf24' : '#f87171';

                card.innerHTML = `
                        <div style="text-align: center; margin-bottom: 15px;">
                            <div style="font-size: 2.5rem; margin-bottom: 10px; filter: ${isLocked ? 'grayscale(1)' : 'drop-shadow(0 0 10px rgba(56, 189, 248, 0.3))'};">${isLocked ? '🔒' : locIcon}</div>
                            <div style="font-size: 1.1rem; font-weight: 800; color: ${isLocked ? '#64748b' : '#fff'}; margin-bottom: 5px;">${t('loc_' + key)}</div>
                            ${isLocked ?
                        `<span style="display: inline-block; background: rgba(251, 191, 36, 0.1); color: #fbbf24; padding: 4px 10px; border-radius: 20px; font-size: 0.7rem; font-weight: 600; border: 1px solid rgba(251, 191, 36, 0.3);">🔒 ${lockReason}</span>` :
                        `<p style="color: #94a3b8; font-size: 0.8rem; margin: 0;">${t('wiz_loc_desc_volume')}</p>`
                    }
                        </div>
                        <div style="margin-top: auto;">
                            <div style="margin-bottom: 10px;">
                                <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: #94a3b8; margin-bottom: 4px;">
                                    <span>${t('wiz_traffic_label')}</span>
                                    <span>${val.trafficMult}x</span>
                                </div>
                                <div style="background: #0f172a; border-radius: 6px; height: 8px; overflow: hidden;">
                                    <div style="width: ${trafficPct}%; height: 100%; background: linear-gradient(90deg, ${trafficColor}, ${trafficColor}99); border-radius: 6px;"></div>
                                </div>
                            </div>
                            <div style="display: flex; justify-content: space-between; padding: 10px; background: rgba(248, 113, 113, 0.05); border-radius: 8px; margin-top: 5px;">
                                <span style="color: #94a3b8; font-size: 0.85rem;">🏠 ${t('comp_rent_label')}</span>
                                <span class="loc-price-tag" data-mult="${val.rentMult}" style="color: #f87171; font-weight: 700;">${priceDisplay}</span>
                            </div>
                        </div>
                    `;

                card.onclick = () => {
                    if (isLocked) {
                        UI.showModal(
                            '🔒 ' + t('wiz_loc_locked_title'),
                            `<div style="text-align:center;">
                                    <p style="margin-bottom:15px;">${t('wiz_loc_locked_msg', { name: val.name })}</p>
                                    <div style="background:rgba(251, 191, 36, 0.1); border:1px solid #fbbf24; border-radius:8px; padding:15px; margin:15px 0;">
                                        <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                                            <span>${t('required_prereq')}:</span>
                                            <strong style="color:#fbbf24;">${lockReason}</strong>
                                        </div>
                                    </div>
                                    <p style="color:#94a3b8; font-size:0.9rem; margin-top:15px;">
                                        ${t('wiz_loc_locked_tip')}
                                    </p>
                                </div>`,
                            [{ text: t('understood'), style: 'secondary', fn: null }],
                            true
                        );
                        return;
                    }

                    locGrid.querySelectorAll('.loc-tier-card').forEach(el => el.classList.remove('selected'));
                    card.classList.add('selected');
                    state.locId = key;
                    updateSummary();
                };
                locGrid.appendChild(card);
            }
        };

        // Initial Render

        // Nav
        const showStep = (step) => {
            currentStep = step;
            // Get Steps
            const step1Container = document.getElementById('wizard-step-1');
            const step2Container = document.getElementById('wizard-step-2');

            // Get Progress
            const badge2 = document.getElementById('wiz-step-dot-2');
            const label2 = document.getElementById('wiz-step-label-2');
            const line2 = document.getElementById('wiz-step-bar-2');

            if (step === 1) {
                step1Container.style.display = 'block';
                step2Container.style.display = 'none';

                // Update Progress
                line2.style.width = '0%';
                badge2.classList.remove('active');
                badge2.classList.add('inactive');
                label2.classList.remove('active');
                label2.classList.add('inactive');

                btnBack.style.display = 'none';
                btnNext.textContent = t('wizard_next');
                btnNext.onclick = goNext;

                // Mobile btns
                btnBackMobile.style.display = 'none';
                btnNextMobile.textContent = t('wizard_next');
                btnNextMobile.onclick = goNext;
            } else if (step === 2) {
                step1Container.style.display = 'none';
                step2Container.style.display = 'block';

                // Update Progress
                line2.style.width = '100%';
                badge2.classList.remove('inactive');
                badge2.classList.add('active');
                label2.classList.remove('inactive');
                label2.classList.add('active');

                btnBack.style.display = 'block';
                btnNext.textContent = t('wizard_found_btn');
                btnNext.onclick = finishWizard;

                // Mobile btns
                btnBackMobile.style.display = 'block';
                btnNextMobile.textContent = t('wizard_found_btn');
                btnNextMobile.onclick = finishWizard;

                // Update Rent & Locks
                renderLocations();
            }
        };


        const goNext = () => {
            state.name = nameInput.value;
            if (!state.name) return showGameAlert(t('msg_company_name_required'), 'warning');
            if (!state.typeId) return showGameAlert(t('msg_business_type_required'), 'warning');
            showStep(2);
        };

        btnBack.onclick = () => showStep(1);

        // Connect mobile buttons to same logic
        const btnBackMobile = document.getElementById('btn-wiz-back-mobile');
        const btnNextMobile = document.getElementById('btn-wiz-next-mobile');

        btnBackMobile.onclick = () => showStep(1);
        btnNextMobile.onclick = goNext; // Will be reassigned in showStep(2)

        const finishWizard = () => {
            if (!state.locId) return showGameAlert(t('msg_location_required'), 'warning');

            // Execute Creation
            const res = CompanyModule.createCompany(state.name, state.typeId, state.locId);

            if (res.success) {
                modal.style.display = 'none';
                UI.showModal(t('company_founded_title'), `
                    <div style="text-align:center;">
                        <div style="font-size:4rem; margin-bottom:10px; animation: bounceIn 0.8s;">🏢</div>
                        <h3 style="color:#facc15; font-size:1.6rem; margin:0 0 5px 0; text-shadow:0 0 10px rgba(250, 204, 21, 0.4);">${t('congratulations')}</h3>
                        <p style="color:#cbd5e1; font-size:1.1rem; margin-bottom:20px;">${t('you_founded')} <strong style="color:#fff;">${state.name}</strong></p>
                        
                        <div style="text-align:left; background:rgba(15, 23, 42, 0.6); border:1px solid #334155; border-radius:12px; padding:20px;">
                            <p style="color:#94a3b8; font-size:0.9rem; margin-bottom:15px; text-transform:uppercase; letter-spacing:1px; font-weight:700;">${t('control_panel')}:</p>
                            
                            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px;">
                                <div style="display:flex; align-items:center;">
                                    <span style="font-size:1.5rem; margin-right:10px;">📊</span>
                                    <div>
                                        <div style="color:#e2e8f0; font-weight:700; font-size:0.95rem;">${t('summary')}</div>
                                        <div style="color:#64748b; font-size:0.8rem;">${t('overview')}</div>
                                    </div>
                                </div>
                                <div style="display:flex; align-items:center;">
                                    <span style="font-size:1.5rem; margin-right:10px;">👥</span>
                                    <div>
                                        <div style="color:#e2e8f0; font-weight:700; font-size:0.95rem;">${t('personnel')}</div>
                                        <div style="color:#64748b; font-size:0.8rem;">${t('team_hr')}</div>
                                    </div>
                                </div>
                                <div style="display:flex; align-items:center;">
                                    <span style="font-size:1.5rem; margin-right:10px;">📦</span>
                                    <div>
                                        <div style="color:#e2e8f0; font-weight:700; font-size:0.95rem;">${t('product')}</div>
                                        <div style="color:#64748b; font-size:0.8rem;">${t('quality_control')}</div>
                                    </div>
                                </div>
                                <div style="display:flex; align-items:center;">
                                    <span style="font-size:1.5rem; margin-right:10px;">📣</span>
                                    <div>
                                        <div style="color:#e2e8f0; font-weight:700; font-size:0.95rem;">${t('marketing')}</div>
                                        <div style="color:#64748b; font-size:0.8rem;">${t('marketing_campaigns')}</div>
                                    </div>
                                </div>
                                <div style="display:flex; align-items:center; grid-column: span 2;">
                                    <span style="font-size:1.5rem; margin-right:10px;">💰</span>
                                    <div>
                                        <div style="color:#e2e8f0; font-weight:700; font-size:0.95rem;">${t('finance')}</div>
                                        <div style="color:#64748b; font-size:0.8rem;">${t('ceo_salary')}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p style="color:#94a3b8; font-size:0.9rem; margin-top:20px;">${t('adventure_begins')}</p>
                    </div>
                `, [{
                    text: t('go_to_dashboard'),
                    style: 'success',
                    fn: () => {
                        UI.updateHeader();
                        UI.updateJob(JobSystem);
                        UI.updateDashboard();
                        setTimeout(() => {
                            // Force reset to ensure it runs even if it failed previously
                            if (GameState.tutorialFlags) GameState.tutorialFlags.seenCompanySummary = false;

                            UI.checkContextualTutorial('company_summary');
                        }, 500);
                    }
                }], true);
            } else {
                showGameAlert(res.message, 'error');
            }
        };

        // Initialize
        nameInput.value = '';
        state = { name: '', typeId: null, locId: null };
        updateSummary();
        showStep(1);
        modal.style.display = 'block';

        close.onclick = () => modal.style.display = 'none';
        window.onclick = (e) => { if (e.target == modal) modal.style.display = 'none'; }
    },

    closeCompanyWizard() {
        document.getElementById('company-wizard-modal').style.display = 'none';
    },

    // Modified to call Company Tutorial upon success
    finishCompanyWizard() {

        // I'll leave the event listener logic but invoke tutorial there.
    },

    render() {
        this.updateHeader();
        this.updateDashboard();
        // Only update active view
        const activeViewId = document.querySelector('.view.active')?.id;
        if (activeViewId === 'market-view') this.updateMarket();
        else if (activeViewId === 'bank-view') this.updateBank(Bank);
        else if (activeViewId === 'real-estate-view') this.updateRealEstate(RealEstate);
        else if (activeViewId === 'job-view') this.updateJob(JobSystem);
        else if (activeViewId === 'education-view') this.updateEducation(EducationModule);
        // Dashboard is always updated by updateDashboard()
    },

    showView(targetView) {

        // Locked view checks
        if (targetView === 'lifestyle' && !GameState.expensesUnlocked) {
            showGameAlert(t('msg_expenses_locked'), 'warning');
            // Redirect to dashboard (force click to update nav state properly)
            const dashBtn = document.querySelector('.nav-btn[data-view="dashboard"]');
            if (dashBtn) dashBtn.click();
            return;
        }

        // 1. Update View Visibility
        document.querySelectorAll('.view').forEach(view => {
            view.classList.remove('active');
            if (view.id === `${targetView}-view`) {
                view.classList.add('active');

                // Trigger Data Updates
                if (targetView === 'market') UI.updateMarket();
                else if (targetView === 'bank') UI.updateBank(Bank);
                else if (targetView === 'real-estate') UI.updateRealEstate(RealEstate);
                else if (targetView === 'job') UI.updateJob(JobSystem);
                else if (targetView === 'education') UI.updateEducation(EducationModule);
                else if (targetView === 'lifestyle') {
                    UI.updateLifestyle(LifestyleModule);
                }
                else if (targetView === 'dashboard') UI.updateDashboard();

                // Trigger Tutorials
                UI.checkContextualTutorial(targetView);
            }
        });

        // 2. Update Desktop Nav State
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.view === targetView);
        });

        // 3. Update Mobile Bottom Nav State
        document.querySelectorAll('.b-nav-item').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.view === targetView);
        });
    },

    // Tutorial module
    startInitialTutorial() {
        // Use the new obligatory TutorialSystem
        TutorialSystem.checkStart();
    },

    checkContextualTutorial(view) {
        if (TutorialSystem && TutorialSystem.checkContextual) {
            TutorialSystem.checkContextual(view);
        }
    },

    startCompanyTutorial() {
        // Disabled
        return;
    },

    runTutorialSequence(steps, onComplete) {
        // Disabled in favor of new TutorialSystem
        if (onComplete) onComplete();
    },


    playCoinSound() {
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;

            const ctx = new AudioContext();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.connect(gain);
            gain.connect(ctx.destination);

            // Coin "Ding" Effect
            osc.type = 'sine';
            osc.frequency.setValueAtTime(1200, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(2000, ctx.currentTime + 0.1);

            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);

            osc.start();
            osc.stop(ctx.currentTime + 0.3);
        } catch (e) {
            console.error('Audio play failed', e);
        }
    },

    playLossSound() {
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;

            const ctx = new AudioContext();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.connect(gain);
            gain.connect(ctx.destination);

            // Loss "Thud" Effect
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(300, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.2);

            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);

            osc.start();
            osc.stop(ctx.currentTime + 0.3);
        } catch (e) {
            console.error('Audio play failed', e);
        }
    },

    triggerConfetti() {
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '99999';
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const colors = ['#f472b6', '#38bdf8', '#4ade80', '#facc15', '#fbbf24'];

        for (let i = 0; i < 150; i++) {
            particles.push({
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                vx: (Math.random() - 0.5) * 15,
                vy: (Math.random() - 1) * 15,
                size: Math.random() * 8 + 4,
                color: colors[Math.floor(Math.random() * colors.length)],
                life: 100
            });
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let active = false;

            particles.forEach(p => {
                if (p.life > 0) {
                    p.x += p.vx;
                    p.y += p.vy;
                    p.vy += 0.5; // Gravity
                    p.life--;
                    active = true;

                    ctx.fillStyle = p.color;
                    ctx.fillRect(p.x, p.y, p.size, p.size);
                }
            });

            if (active) requestAnimationFrame(animate);
            else canvas.remove();
        }

        animate();
    },

    showTurnFeedback(netIncome) {
        if (netIncome === 0) return;

        const isPositive = netIncome > 0;
        const text = isPositive ? `+${formatCurrency(netIncome)}` : formatCurrency(netIncome);
        const color = isPositive ? '#4ade80' : '#f87171';

        const el = document.createElement('div');
        el.textContent = text;
        el.style.position = 'fixed';
        el.style.left = '50%';
        el.style.top = '50%';
        el.style.transform = 'translate(-50%, -50%)';
        el.style.fontSize = '3rem';
        el.style.fontWeight = 'bold';
        el.style.color = color;
        el.style.textShadow = '0 4px 10px rgba(0,0,0,0.5)';
        el.style.pointerEvents = 'none';
        el.style.zIndex = '9999';
        el.style.animation = 'floatUpFade 1.5s ease-out forwards';

        document.body.appendChild(el);

        if (isPositive) {
            this.playCoinSound();
        } else {
            this.playLossSound();
        }

        setTimeout(() => el.remove(), 1500);
    },

    showToast(title, message, type = 'info') {
        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            document.body.appendChild(container); // Append gracefully
        }

        const toast = document.createElement('div');
        toast.className = `toast-card ${type}`;
        toast.innerHTML = `
                    <strong>${title}</strong>
                    <p>${message}</p>
                `;

        container.appendChild(toast);

        // Auto Remove
        setTimeout(() => {
            toast.style.animation = 'slideOutRight 0.3s ease-in forwards';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    },

    updateLifestyle(LifestyleModule) {
        const container = document.getElementById('lifestyle-view');
        if (!container) return;

        if (!GameState.expensesUnlocked) {
            container.innerHTML = `
                <div class="empty-state">
                    <h3>${t('lifestyle_locked_title')}</h3>
                    <p>${t('lifestyle_locked_msg')}</p>
                </div>
            `;
            return;
        }

        const current = GameState.lifestyle;
        let totalCost = LifestyleModule.calculateTotal();

        // Hero
        const heroHTML = `
            <div class="lifestyle-hero" style="background: linear-gradient(145deg, rgba(236, 72, 153, 0.15), rgba(219, 39, 119, 0.05)); border: 1px solid rgba(236, 72, 153, 0.3); border-radius: 20px; padding: 25px; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #ec4899, #db2777);"></div>
                <div style="display: flex; align-items: center; gap: 20px;">
                    <div style="font-size: 3.5rem; filter: drop-shadow(0 0 15px rgba(236, 72, 153, 0.5));">💸</div>
                    <div style="flex: 1;">
                        <span style="display: inline-block; background: linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(219, 39, 119, 0.1)); color: #ec4899; padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 700; border: 1px solid rgba(236, 72, 153, 0.3); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">${t('lifestyle')}</span>
                        <p style="margin: 0 0 5px 0; font-size: 0.85rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px;">${t('monthly_expenses')}</p>
                        <h2 style="margin: 0 0 12px 0; font-size: 1.6rem; color: #ec4899; font-weight: 800;">${formatCurrency(totalCost)}</h2>
                        <p style="color: #94a3b8; margin: 0; font-size: 0.9rem;">💡 ${t('lifestyle_upgrade_tip')}</p>
                    </div>
                </div>
            </div>
        `;

        // Category icons
        const getCatIcon = (key) => {
            const icons = { 'housing': '🏠', 'food': '🍽️', 'transport': '🚗', 'leisure': '🎮', 'clothes': '👔' };
            return icons[key] || '📋';
        };

        // Item icons
        const getItemIcon = (itemId) => {
            const icons = {
                'parents': '🏠', 'sofa': '🛋️', 'pension': '🏚️', 'room_cheap': '🚪', 'room': '🛏️',
                'room_suit': '🚿', 'basement': '🪟', 'studio': '🏢', 'apt_out': '🏘️', 'apartment': '🏬',
                'loft': '🏗️', 'penthouse': '🌆', 'mansion': '🏰',
                'scraps': '🍞', 'noodles': '🍜', 'junk': '🍔', 'cooking_basic': '🥚', 'cooking': '🥗',
                'menu': '🍽️', 'bio': '🥬', 'delivery': '📦', 'rest_nice': '🍷', 'chef': '👨‍🍳', 'michelin': '⭐',
                'walk': '🚶', 'skate': '🛹', 'bike': '🚲', 'scooter_el': '🛴', 'public': '🚌',
                'moto_125': '🏍️', 'moto_big': '🏎️', 'car_old': '🚗', 'car_new': '🚙',
                'car_premium': '🚘', 'car_sport': '🏎️', 'supercar': '🏁', 'chofer': '🎩',
                'free': '🌳', 'library': '📚', 'internet': '🎮', 'basic': '📺', 'hobbies': '🎨',
                'active': '💪', 'clubbing': '🍸', 'weekend': '✈️', 'vip': '🥂', 'travel': '🌍',
                'exclusive': '🎯', 'yacht': '🛥️',
                'donations': '👕', 'second_hand': '♻️', 'low_cost': '🛒', 'basic_clothes': '👔',
                'fast_fashion': '🛍️', 'sport': '👟', 'boutique': '🎀', 'tech': '⌚',
                'designer': '💎', 'tailor': '✂️', 'couture': '👗'
            };
            return icons[itemId] || '📦';
        };

        // Categories with upgrade buttons
        const categoriesHTML = Object.keys(LifestyleModule.categories).map(catKey => {
            const cat = LifestyleModule.categories[catKey];
            const selectedId = current ? current[catKey] : null;
            const items = cat.items;

            const currentIndex = items.findIndex(i => i.id === selectedId);
            const effectiveIndex = currentIndex === -1 ? 0 : currentIndex;
            const currentItem = items[effectiveIndex];
            const nextItem = items[effectiveIndex + 1] || null;
            const levelNum = effectiveIndex + 1;
            const maxLevel = items.length;

            const isTutorialForce = (catKey === 'housing' && GameState.tutorialState.forceHousing);
            const isCategoryLocked = (catKey !== 'housing' && GameState.tutorialState.forceHousing);

            let upfrontInfo = '';
            if (nextItem) {
                if (nextItem.deposit) upfrontInfo = `${t('plus_deposit')} ${formatCurrency(nextItem.deposit)}`;
                else if (nextItem.purchaseCost) upfrontInfo = `${t('plus_purchase')} ${formatCurrency(nextItem.purchaseCost)}`;
            }

            // Button Styles
            const btnStyle = `width: 100%; padding: 12px 20px; background: linear-gradient(135deg, #ec4899, #db2777); color: white; border: none; border-radius: 12px; font-weight: 800; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 6px 0 #9d174d, 0 10px 20px rgba(236, 72, 153, 0.4); transform: translateY(-2px); transition: all 0.15s;${isTutorialForce ? ' animation: pulse 1.5s infinite;' : ''}`;

            // Locked overlay
            const lockOverlay = isCategoryLocked ? `
                <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(15, 23, 42, 0.9); border-radius: 16px; display: flex; flex-direction: column; justify-content: center; align-items: center; z-index: 5;">
                    <span style="font-size: 2rem; margin-bottom: 8px;">🔒</span>
                    <span style="color: #94a3b8; font-weight: 600;">${t('choose_housing_first')}</span>
                </div>
            ` : '';

            return `
                <div class="lifestyle-category-card" style="background: linear-gradient(145deg, #1e293b, #0f172a); border: 1px solid ${isTutorialForce ? '#facc15' : '#334155'}; border-radius: 16px; padding: 20px; margin-bottom: 15px; position: relative;">
                    ${lockOverlay}
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                        <h3 style="color: #cbd5e1; margin: 0; display: flex; align-items: center; gap: 10px; font-size: 1rem;">
                            <span style="font-size: 1.3rem;">${getCatIcon(catKey)}</span> ${t(catKey)}
                        </h3>
                        <span style="background: rgba(236, 72, 153, 0.15); color: #ec4899; padding: 4px 10px; border-radius: 12px; font-size: 0.7rem; font-weight: 700; border: 1px solid rgba(236, 72, 153, 0.3);">${t('level')} ${levelNum}/${maxLevel}</span>
                    </div>
                    
                    <div style="background: rgba(15, 23, 42, 0.5); border: 1px solid #475569; border-radius: 12px; padding: 15px; margin-bottom: 12px;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <span style="font-size: 2rem;">${getItemIcon(currentItem.id)}</span>
                                <div>
                                    <h4 style="margin: 0 0 4px 0; color: #f8fafc; font-weight: 700;">${t(`life_${catKey}_${currentItem.id}_name`)}</h4>
                                    <p style="margin: 0; color: #94a3b8; font-size: 0.85rem;">${t(`life_${catKey}_${currentItem.id}_desc`)}</p>
                                </div>
                            </div>
                            <div style="text-align: right;">
                                <span style="font-size: 1.2rem; color: #ec4899; font-weight: 800;">${formatCurrency(currentItem.cost)}</span>
                                <span style="display: block; color: #64748b; font-size: 0.75rem;">${t('per_month')}</span>
                            </div>
                        </div>
                    </div>
                    
                    ${nextItem && !isCategoryLocked ? `
                        <button class="btn-upgrade-lifestyle ${isTutorialForce ? 'tutorial-highlight' : ''}" data-cat="${catKey}" data-next-id="${nextItem.id}" style="${btnStyle}">
                            <span style="display: flex; align-items: center; gap: 8px;">
                                <span style="font-size: 1.1rem;">⬆️</span>
                                <span>${t('upgrade_level')} ${levelNum}</span>
                            </span>
                            <span style="text-align: right; font-size: 0.75rem; font-weight: 600;">
                                ${t(`life_${catKey}_${nextItem.id}_name`)}<br>
                                <span style="opacity: 0.85;">${formatCurrency(nextItem.cost)}${t('per_month')} ${upfrontInfo}</span>
                            </span>
                        </button>
                    ` : (!isCategoryLocked ? `
                        <div style="text-align: center; padding: 14px; background: linear-gradient(135deg, rgba(74, 222, 128, 0.15), rgba(34, 197, 94, 0.05)); border: 2px solid rgba(74, 222, 128, 0.3); border-radius: 14px;">
                            <span style="color: #4ade80; font-weight: 800;">${t('max_level')}</span>
                        </div>
                    ` : '')}
                </div>
            `;
        }).join('');

        container.innerHTML = `
            <div class="dashboard-container">
                ${heroHTML}
                <div style="margin-top: 20px;">${categoriesHTML}</div>
            </div>
        `;

        // Events
        container.querySelectorAll('.btn-upgrade-lifestyle').forEach(btn => {
            btn.onmouseover = () => { btn.style.transform = 'scale(1.02)'; btn.style.boxShadow = '0 4px 15px rgba(74, 222, 128, 0.3)'; };
            btn.onmouseout = () => { btn.style.transform = 'scale(1)'; btn.style.boxShadow = 'none'; };

            btn.onclick = () => {
                const catKey = btn.dataset.cat;
                const nextId = btn.dataset.nextId;
                const cat = LifestyleModule.categories[catKey];
                const item = cat.items.find(i => i.id === nextId);
                if (!item) return;

                let upfront = item.deposit || item.purchaseCost || 0;
                let upfrontLabel = item.deposit ? `${t('deposit_label')}: ${formatCurrency(item.deposit)}` : (item.purchaseCost ? `${t('purchase_label')}: ${formatCurrency(item.purchaseCost)}` : '');
                const costMsg = upfront > 0 ? `\n\n❗ ${t('upfront_payment')}: ${formatCurrency(upfront)} (${upfrontLabel})` : '';

                const performUpdate = () => {
                    const res = LifestyleModule.setOption(catKey, nextId);
                    if (res.success) {
                        if (GameState.tutorialState.forceHousing && nextId === 'sofa') {
                            GameState.tutorialState.forceHousing = false;
                            GameState.expensesUnlocked = true;
                        } else {
                            if (res.message) UI.showToast(t('upgrade_success'), t(`lifestyle_${catKey}_${item.id}_name`) || item.id, 'success');
                        }
                        UI.updateLifestyle(LifestyleModule);
                        UI.updateHeader();
                        UI.updateDashboard();
                        UI.playCoinSound();
                    } else {
                        UI.showToast(t('error'), res.message, 'error');
                    }
                };

                if (GameState.tutorialState.forceHousing && nextId === 'sofa') {
                    performUpdate();
                } else {
                    const currentId = GameState.lifestyle[catKey];
                    const currentItem = cat.items.find(i => i.id === currentId) || cat.items[0];

                    UI.showModal(t('lifestyle_upgrade_title'), `
                        <div style="text-align:center;">
                            <div style="font-size:3rem; margin-bottom:10px;">✨</div>
                            <h3 style="color:#fbbf24; margin:0 0 5px 0;">${t('lifestyle_cat_' + catKey) || cat.label}</h3>
                            <p style="color:#94a3b8; font-size:0.9rem; margin-bottom:20px;">${t('upgrade_confirm_msg')}</p>

                            <div style="background:rgba(15, 23, 42, 0.5); border-radius:12px; padding:15px; margin-bottom:20px; border:1px solid #334155;">
                                <!-- Comparison -->
                                <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:15px; padding-bottom:15px; border-bottom:1px solid #334155;">
                                    <div style="text-align:left; width:45%;">
                                        <div style="font-size:0.75rem; color:#64748b; margin-bottom:4px;">${t('current_level')}</div>
                                        <div style="font-weight:700; color:#cbd5e1; font-size:0.9rem;">${t('lifestyle_' + catKey + '_' + currentItem.id + '_name') || currentItem.name}</div>
                                        <div style="color:#94a3b8; font-size:0.8rem;">${formatCurrency(currentItem.cost)}${t('per_month')}</div>
                                    </div>
                                    <div style="color:#fbbf24; font-size:1.2rem;">➔</div>
                                    <div style="text-align:right; width:45%;">
                                        <div style="font-size:0.75rem; color:#fbbf24; margin-bottom:4px;">${t('new_level')}</div>
                                        <div style="font-weight:800; color:#fff; font-size:0.95rem;">${t('lifestyle_' + catKey + '_' + item.id + '_name') || item.name}</div>
                                        <div style="color:#4ade80; font-weight:700; font-size:0.85rem;">${formatCurrency(item.cost)}${t('per_month')}</div>
                                    </div>
                                </div>
                                
                                <!-- Upfront Cost if any -->
                                ${upfront > 0 ? `
                                <div style="background:rgba(239, 68, 68, 0.1); border:1px solid rgba(239, 68, 68, 0.3); border-radius:8px; padding:10px;">
                                    <div style="color:#ef4444; font-weight:700; font-size:0.85rem; margin-bottom:2px;">❗ ${t('upfront_payment')}</div>
                                    <div style="color:#fff; font-weight:700;">${formatCurrency(upfront)}</div>
                                    <div style="color:#cbd5e1; font-size:0.75rem;">${upfrontLabel}</div>
                                </div>
                                ` : ''}

                                <div style="margin-top:15px; font-size:0.85rem; color:#94a3b8; font-style:italic;">
                                    "${t('lifestyle_' + catKey + '_' + item.id + '_desc') || item.desc}"
                                </div>
                            </div>
                        </div>
                    `, [
                        { text: t('cancel'), style: 'secondary', fn: null },
                        { text: t('upgrade_btn'), style: 'primary', fn: performUpdate }
                    ], true);
                }
            };
        });
    },

    updateEducation(EduModule) {
        const container = document.getElementById('education-view');
        if (!container) return;

        // Data
        const courses = EduModule.courses;
        const myEdu = GameState.education;
        const current = GameState.currentCourse;

        // Hero content
        let heroHTML = '';
        if (current) {
            const progress = ((current.duration - current.remainingMonths) / current.duration) * 100;
            const currentTr = getCourseTranslation(current.id);
            const currentCourseName = currentTr.name || current.name;
            heroHTML = `
                    <div class="edu-hero" style="background: linear-gradient(145deg, rgba(168, 85, 247, 0.15), rgba(139, 92, 246, 0.05)); border: 1px solid rgba(168, 85, 247, 0.3); border-radius: 20px; padding: 25px; position: relative; overflow: hidden;">
                        <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #a855f7, #8b5cf6);"></div>
                        <div style="display: flex; align-items: center; gap: 20px;">
                            <div style="font-size: 3.5rem; filter: drop-shadow(0 0 15px rgba(168, 85, 247, 0.5));">📚</div>
                            <div style="flex: 1;">
                                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                                    <span style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(139, 92, 246, 0.1)); color: #a855f7; padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 700; border: 1px solid rgba(168, 85, 247, 0.3); text-transform: uppercase; letter-spacing: 1px;">${t('in_progress')}</span>
                                </div>
                                <h2 style="margin: 0 0 8px 0; font-size: 1.4rem; color: #fff; font-weight: 800;">${currentCourseName}</h2>
                                <p style="color: #94a3b8; margin: 0 0 15px 0; font-size: 0.9rem;">⏱️ ${t('time_remaining')}: <span style="color: #a855f7; font-weight: 700;">${current.remainingMonths} ${t('months')}</span></p>
                                <div style="background: #1e293b; border-radius: 8px; height: 12px; overflow: hidden;">
                                    <div style="width: ${progress}%; height: 100%; background: linear-gradient(90deg, #a855f7, #8b5cf6); border-radius: 8px; transition: width 0.3s;"></div>
                                </div>
                                <div style="display: flex; justify-content: space-between; margin-top: 8px; font-size: 0.8rem; color: #64748b;">
                                    <span>${t('progress')}</span>
                                    <span style="color: #a855f7; font-weight: 700;">${progress.toFixed(0)}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;

        } else {
            const highestId = myEdu[myEdu.length - 1];
            const highest = highestId ? UI.getLabel(highestId) : t('no_studies');

            // Get education icon based on level
            const getEduIcon = (eduId) => {
                if (eduId && eduId.startsWith('dj_')) return '🎧';
                const icons = {
                    'eso': '📖', 'bach': '📕', 'fp_medio': '🔧', 'fp_superior': '⚙️',
                    'grado': '🎓', 'master': '👨‍🎓', 'doctorado': '🏆'
                };
                return icons[eduId] || '🎓';
            };
            const eduIcon = getEduIcon(highestId);

            heroHTML = `
                    <div class="edu-hero" style="background: linear-gradient(145deg, rgba(168, 85, 247, 0.1), rgba(139, 92, 246, 0.05)); border: 1px solid rgba(168, 85, 247, 0.3); border-radius: 20px; padding: 25px; position: relative; overflow: hidden;">
                        <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #a855f7, #8b5cf6);"></div>
                        <div style="display: flex; align-items: center; gap: 20px;">
                            <div style="font-size: 3.5rem; filter: drop-shadow(0 0 15px rgba(168, 85, 247, 0.5));">${eduIcon}</div>
                            <div style="flex: 1;">
                                <span style="display: inline-block; background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(139, 92, 246, 0.1)); color: #a855f7; padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 700; border: 1px solid rgba(168, 85, 247, 0.3); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">${t('current_education')}</span>
                                <p style="margin: 0 0 5px 0; font-size: 0.85rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px;">${t('highest_degree')}</p>
                                <h2 style="margin: 0 0 12px 0; font-size: 1.6rem; color: #a855f7; font-weight: 800;">${highest}</h2>

                                <p style="color: #94a3b8; margin: 0; font-size: 0.9rem;">💡 ${t('enroll_tip')}</p>
                            </div>
                        </div>
                    </div>
                    `;
        }


        // Grid content
        const available = [];
        const locked = [];

        courses.forEach(course => {
            const isCompleted = myEdu.includes(course.id);
            const isStudying = current && current.id === course.id;

            // Prereqs Check
            let hasReq = true;
            if (course.required && course.required.length > 0) {
                const meetsOne = course.required.some(r => myEdu.includes(r));
                if (!meetsOne) hasReq = false;
            }

            // Categorize
            if (isCompleted || isStudying || hasReq) {
                available.push(course);
            } else {
                locked.push(course);
            }
        });

        // Helper to render card
        const renderCourseCard = (course, isLocked = false) => {
            const isCompleted = myEdu.includes(course.id);
            const isStudying = current && current.id === course.id;
            let actionBtn = '';
            let statusBadge = '';

            // Checks
            let missingReqText = '';
            let hasReq = true;
            if (course.required && course.required.length > 0) {
                const meetsOne = course.required.some(r => myEdu.includes(r));
                if (!meetsOne) {
                    hasReq = false;
                    const reqNames = course.required.map(mid => {
                        const m = courses.find(c => c.id === mid);
                        return m ? (getCourseTranslation(m.id).name || m.name) : mid;
                    }).join(` ${t('or')} `);
                    missingReqText = `${t('requirements')}: ${reqNames}`;
                }
            }

            // Age Check
            const ageOk = !course.minAge || GameState.age >= course.minAge;
            const ageText = !ageOk ? t('course_min_age', { age: course.minAge }) : '';
            const hasFunds = GameState.cash >= (course.cost || 0);

            if (isCompleted) {
                statusBadge = `<span style="background:rgba(245, 158, 11, 0.2); color:#f59e0b; padding:2px 8px; border-radius:4px; font-size:0.8rem; border:1px solid #f59e0b;">${t('course_completed')}</span>`;
            } else if (isStudying) {
                statusBadge = `<span style="background:rgba(56, 189, 248, 0.2); color:#38bdf8; padding:2px 8px; border-radius:4px; font-size:0.8rem; border:1px solid #38bdf8;">${t('course_in_progress')}</span>`;
            } else if (!hasReq) {
                statusBadge = `<span style="background:rgba(239, 68, 68, 0.2); color:#ef4444; padding:2px 8px; border-radius:4px; font-size:0.8rem; border:1px solid #ef4444;">${t('course_locked')}</span>`;
            }

            if (!isCompleted && !isStudying) {
                if (!hasReq) {
                    actionBtn = `<button class="btn-apply-small" disabled style="opacity:0.5; cursor:not-allowed;">${t('course_locked')}</button>`;
                } else if (!ageOk) {
                    actionBtn = `<button class="btn-apply-small" disabled style="opacity:0.5; cursor:not-allowed;">${t('course_min_age', { age: course.minAge })}</button>`;
                } else if (!hasFunds && course.cost > 0) {
                    actionBtn = `<button class="btn-apply-small" disabled style="opacity:0.5; cursor:not-allowed;">${t('course_no_funds')}</button>`;
                } else {
                    actionBtn = `<button class="btn-apply-small btn-course-start" data-id="${course.id}">${t('course_enroll')}</button>`;
                }
            }

            const card = document.createElement('div');
            card.className = 'course-card-new'; // Existing class
            if (isLocked) {
                card.style.opacity = '0.7';
                card.style.borderColor = '#475569';
            }

            // Course icon based on type/category
            const getCourseIcon = (courseId) => {
                if (courseId && courseId.startsWith('dj_')) return '🎧';
                const icons = {
                    'bachillerato': '🎒',
                    'fp_medio': '🔧',
                    'fp_admin': '📊',
                    'fp_dam': '💻',
                    'fp_maint': '🔩',
                    'grado_ade': '🏛️',
                    'grado_cs': '🖥️',
                    'grado_civil': '🏗️',
                    'master_fin': '💹',
                    'master_ai': '🤖',
                    'master_ing': '⚙️',
                    'bootcamp': '🚀'
                };
                return icons[courseId] || '📚';
            };


            const courseIcon = getCourseIcon(course.id);

            // Get translated course name and description
            const courseTr = getCourseTranslation(course.id);
            const courseName = courseTr.name || course.name;
            const courseDesc = courseTr.desc || course.desc;

            card.innerHTML = `
                        <div class="course-icon">${courseIcon}</div>
                        <div style="display:flex; justify-content:space-between; margin-bottom:5px;">
                            <h4 style="margin:0; ${isLocked ? 'color:#cbd5e1' : 'color:#facc15'}">${courseName}</h4>
                            ${statusBadge}
                        </div>
                        <p style="color:#94a3b8; font-size:0.85rem; margin-bottom:10px;">${courseDesc}</p>
                        <div style="display:flex; flex-wrap:wrap; gap:5px; margin-bottom:10px;">
                            <span class="tag">⏱ ${course.duration} ${t('months')}</span>
                            ${course.cost > 0 ? `<span class="tag">💰 ${formatCurrency(course.cost)}</span>` : `<span class="tag">${t('free')}</span>`}
                            ${missingReqText ? `<span class="tag" style="background:#450a0a; color:#fca5a5; border-color:#7f1d1d;">🔒 ${missingReqText}</span>` : ''}
                            ${ageText ? `<span class="tag" style="background:#450a0a; color:#fca5a5; border-color:#7f1d1d;">🔞 ${ageText}</span>` : ''}
                        </div>
                        ${actionBtn}
                    `;


            const btn = card.querySelector('.btn-course-start');
            if (btn) {
                btn.onclick = () => {
                    const res = EduModule.startCourse(course.id);
                    if (res.success) {
                        UI.showModal(t('enrolled_msg'), res.message, [{ text: t('start_studying'), style: 'success', fn: () => UI.updateEducation(EduModule) }]);
                        UI.updateHeader();
                        UI.updateDashboard();
                    } else {
                        showGameAlert(res.message, res.success ? 'success' : 'error');
                    }
                }
            }
            return card;
        };

        const mainGrid = document.createElement('div');
        mainGrid.className = 'course-grid';

        // Render Available
        available.forEach(c => mainGrid.appendChild(renderCourseCard(c)));

        container.innerHTML = ''; // Clear

        const wrapper = document.createElement('div');
        wrapper.className = 'education-container';
        wrapper.style.maxWidth = '1200px';
        wrapper.style.margin = '0 auto';
        wrapper.innerHTML = heroHTML;

        // Style the grid (Live Elements)
        mainGrid.style.display = 'grid';
        mainGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(320px, 1fr))';
        mainGrid.style.gap = '20px';
        mainGrid.style.marginTop = '25px';

        wrapper.appendChild(mainGrid);
        container.appendChild(wrapper);
        // Render Locked (Collapsible)
        if (locked.length > 0) {
            const details = document.createElement('details');
            details.style.marginTop = '30px';
            details.style.marginBottom = '20px';
            details.style.borderTop = '1px solid #334155';
            details.style.paddingTop = '20px';

            const summary = document.createElement('summary');
            summary.textContent = `📚 ${t('see_other_courses', { count: locked.length })}`;
            summary.style.cursor = 'pointer';
            summary.style.color = '#94a3b8';
            summary.style.marginBottom = '15px';
            details.appendChild(summary);

            const lockedGrid = document.createElement('div');
            lockedGrid.className = 'course-grid';
            lockedGrid.style.display = 'grid';
            lockedGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(320px, 1fr))';
            lockedGrid.style.gap = '20px';
            lockedGrid.style.opacity = '0.7';

            locked.forEach(c => lockedGrid.appendChild(renderCourseCard(c, true)));

            details.appendChild(lockedGrid);

            // Need to append to container. But container has innerHTML set. 
            // We should append to the .education-container inside or just append to container?
            // container.innerHTML replaced everything.
            // The structure is: div#education-view > div.education-container > ...
            // So we should append to the .education-container.
            container.querySelector('.education-container').appendChild(details);
        }
    },

    showModal(title, msg, actions = [], skipDefaultAction = false) {
        const overlay = document.createElement('div');
        overlay.className = 'custom-modal-overlay';

        // Only convert newlines to <br> if the message is plain text (no HTML tags)
        const processedMsg = msg.includes('<') ? msg : msg.replace(/\n/g, '<br>');

        overlay.innerHTML = `
                    <div class="custom-modal-box">
                        <h3>${title}</h3>
                        <div class="modal-body">${processedMsg}</div>
                        <div class="modal-actions"></div>
                    </div>
                `;
        const actionBox = overlay.querySelector('.modal-actions');
        if (actions.length === 0 && !skipDefaultAction) actions.push({ text: t('tutorial_understood'), style: 'primary', fn: null });

        actions.forEach(a => {
            const btn = document.createElement('button');
            btn.textContent = a.text;
            btn.className = `btn-modal btn-${a.style}-modal`;
            btn.onclick = () => {
                // Execute callback first (so inputs are still in DOM)
                if (a.fn) {
                    // Optional: catch errors so modal still closes? 
                    // For now, let's just run it. If it fails, console will show it.
                    // But we should ensure close happens if possible, unless we want to keep it open on error?
                    // Simple approach: Run then Close.
                    try {
                        a.fn();
                    } catch (e) {
                        console.error("Modal Action Error:", e);
                        showGameAlert('Error ejecutando acción: ' + e.message, 'error');
                    }
                }
                overlay.remove();
            };
            actionBox.appendChild(btn);
        });
        document.body.appendChild(overlay);
        return overlay;
    },

    confirmModal(title, msg, onConfirm) {
        UI.showModal(t('msg_reset_title'), t('msg_reset_confirm'), [
            { text: t('cancel'), style: 'secondary', fn: null },
            {
                text: t('confirm'), style: 'danger', fn: () => {
                    onConfirm()
                }
            }
        ]);
    },

    getLabel(id) {
        if (!id) return '';
        const translated = t(`cat_${id}`);
        if (translated !== `cat_${id}`) return translated;

        // Fallback for educational ids if prefixing didn't work directly
        const eduTranslated = t(id);
        if (eduTranslated !== id) return eduTranslated;

        return id;
    },

    updateJob(JobSys = JobSystem) {
        try {
            const jobContainer = document.getElementById('job-view');
            if (!jobContainer) return;
            jobContainer.innerHTML = '';
            const contentContainer = document.createElement('div');

            if (GameState.company) {
                contentContainer.className = 'company-dashboard-full-view';
                contentContainer.style.display = 'block';
            } else {
                contentContainer.className = 'dashboard-container';
            }
            jobContainer.appendChild(contentContainer);

            // --- SHARED: HOLDING LIST (MANAGED COMPANIES) ---
            if (GameState.ownedCompanies && GameState.ownedCompanies.length > 0) {
                const holdingSection = document.createElement('div');
                holdingSection.style.marginBottom = '30px';

                // Header
                holdingSection.innerHTML = `
                    <div style="background: linear-gradient(90deg, #1e293b, transparent); border-left: 4px solid #f59e0b; padding: 10px 15px; margin-bottom: 15px; border-radius: 0 8px 8px 0;">
                        <h3 style="margin:0; font-size: 1.2rem; color: #fbbf24; font-weight:800; display:flex; align-items:center; gap:8px;">
                            👑 ${t('holding_companies')} <span style="font-size:0.8rem; color:#94a3b8; font-weight:400; margin-left:auto;">${GameState.ownedCompanies.length} ${t('assets')}</span>
                        </h3>
                    </div>
                `;

                const holdingList = document.createElement('div');
                holdingList.className = 'holding-list-container';
                holdingList.style.display = 'flex';
                holdingList.style.flexDirection = 'column';
                holdingList.style.gap = '12px';

                GameState.ownedCompanies.forEach((co, idx) => {
                    // Calculate Variation
                    let pctVar = 0;
                    if (co.baselineProfit > 0) {
                        pctVar = ((co.profitLastMonth - co.baselineProfit) / co.baselineProfit) * 100;
                    }
                    const isPos = pctVar >= 0;
                    const varColor = isPos ? '#4ade80' : '#f87171';
                    const varSign = isPos ? '+' : '';

                    const div = document.createElement('div');
                    div.style.background = 'linear-gradient(90deg, #1e293b, #0f172a)';
                    div.style.border = '1px solid #334155';
                    div.style.borderLeft = '4px solid #fbbf24'; // Gold accent
                    div.style.borderRadius = '8px';
                    div.style.padding = '15px 20px';
                    div.style.display = 'flex';
                    div.style.alignItems = 'center';
                    div.style.justifyContent = 'space-between';
                    div.style.flexWrap = 'wrap';
                    div.style.gap = '15px';
                    div.style.transition = 'all 0.2s';
                    div.className = 'holding-row-item';

                    div.innerHTML = `
                        <div style="flex: 2; min-width: 200px;">
                            <div style="display:flex; align-items:center; gap:10px;">
                                <div style="font-size:1.5rem;">🏢</div>
                                <div>
                                    <h4 style="margin:0; color:#f1f5f9; font-size:1.1rem; font-weight:700;">${co.name}</h4>
                                    <div style="font-size:0.85rem; color:#94a3b8;">${t('biz_type_' + co.typeId)} • ${t('loc_' + co.locationId)}</div>
                                </div>
                            </div>
                        </div>

                        <div style="flex: 1; min-width: 140px; text-align:right;">
                            <div style="font-size:0.75rem; color:#64748b; text-transform:uppercase; font-weight:600;">${t('current_profit')}</div>
                            <div style="font-size:1.2rem; color:${varColor}; font-weight:800;">+${formatCurrency(co.profitLastMonth)}</div>
                            <div style="font-size:0.8rem; color:${varColor}; font-weight:600;">${varSign}${pctVar.toFixed(1)}% vs Base</div>
                        </div>

                        <div style="flex: 0 0 auto; text-align:right;">
                             <button class="btn-sell-passive" data-idx="${idx}" style="background:rgba(239, 68, 68, 0.1); border:1px solid rgba(239, 68, 68, 0.3); color:#ef4444; padding:8px 12px; border-radius:6px; font-size:0.75rem; cursor:pointer; font-weight:700; transition:all 0.1s;">
                                ${t('sell').toUpperCase()}
                             </button>
                        </div>
                    `;

                    const btnSell = div.querySelector('.btn-sell-passive');
                    btnSell.onmouseenter = () => { btnSell.style.background = '#ef4444'; btnSell.style.color = 'white'; };
                    btnSell.onmouseleave = () => { btnSell.style.background = 'rgba(239, 68, 68, 0.1)'; btnSell.style.color = '#ef4444'; };

                    btnSell.onclick = () => {
                        const annualProfit = co.baselineProfit * 12;
                        const valuation = annualProfit * 3;

                        UI.showModal(t('company_sell_title'), `
                            <div style="text-align:center;">
                                <div style="font-size:3rem; margin-bottom:10px; filter: grayscale(1);">📉</div>
                                <p style="color:#cbd5e1; margin-bottom:20px; font-size:1rem;">Estás a punto de liquidar tu participación en <strong style="color:#fff;">${co.name}</strong>.</p>
                                
                                <div style="background:rgba(15, 23, 42, 0.6); padding:20px; border-radius:16px; margin-bottom:20px; border:1px solid #334155;">
                                    <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
                                        <span style="color:#94a3b8;">Beneficio Base Mes:</span>
                                        <span style="color:#e2e8f0; font-family:monospace;">${formatCurrency(co.baselineProfit)}</span>
                                    </div>
                                    <div style="display:flex; justify-content:space-between; margin-bottom:15px;">
                                        <span style="color:#94a3b8;">Proyección Anual (x12):</span>
                                        <span style="color:#e2e8f0; font-family:monospace;">${formatCurrency(annualProfit)}</span>
                                    </div>
                                    <div style="border-top:1px dashed #475569; margin:10px 0;"></div>
                                    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:15px;">
                                        <span style="color:#fbbf24; font-weight:700; text-transform:uppercase; font-size:0.9rem;">VALORACIÓN (x3)</span>
                                        <span style="color:#fbbf24; font-weight:800; font-size:1.3rem;">${formatCurrency(valuation)}</span>
                                    </div>
                                </div>
                                
                                <p style="font-size:0.85rem; color:#ef4444; background: rgba(239, 68, 68, 0.1); padding: 10px; border-radius: 8px;">
                                    ⚠️ <strong>Atención:</strong> La venta está sujeta a impuestos estatales del 25% sobre el valor total.
                                </p>
                            </div>
                        `, [
                            { text: 'Cancelar', style: 'secondary', fn: null },
                            {
                                text: 'VENDER AHORA',
                                style: 'danger',
                                fn: () => {
                                    // Original sell logic
                                    const res = CompanyModule.sellPassiveCompany(idx);
                                    if (res && res.success) {
                                        UI.updateJob(JobSys);
                                        UI.updateDashboard();
                                        showGameAlert(res.message, res.success ? 'success' : 'error');
                                    }
                                }
                            }
                        ], true);
                    };
                    holdingList.appendChild(div);
                });
                holdingSection.appendChild(holdingList);
                contentContainer.appendChild(holdingSection);
            }

            if (!GameState.company) {
                // --- PROFESSIONAL DASHBOARD MODE ---

                const dashboardGrid = document.createElement('div');
                dashboardGrid.className = 'dashboard-grid mb-30';

                // --- CARD 1: CURRENT POSITION (HERO) ---
                const heroCard = document.createElement('div');
                heroCard.className = 'dashboard-card hero-card';

                const nextJob = JobSys.getAvailablePromotions();
                let expPercent = 0;
                let expText = t('max_level');
                if (nextJob) {
                    expPercent = Math.min(100, (JobSys.monthsInCurrentJob / nextJob.reqMonths) * 100);
                    expText = `${JobSys.monthsInCurrentJob.toFixed(1)} / ${nextJob.reqMonths} ${t('months')}`;
                }

                // Get job icon based on career path
                const getJobIconForPath = (path) => {
                    const icons = {
                        'dj': '🎧',
                        'unskilled': '🛒',
                        'tres_deporte': '👟',
                        'admin_contable': '📋',
                        'gestor_cobros': '💳',
                        'admin_inmo': '🏘️',
                        'prog_apps': '💻',
                        'sys_support': '🖥️',
                        'mobile_dev': '📱',
                        'maint_ind': '🔧',
                        'clima': '❄️',
                        'buildings': '🏢',
                        'analyst_fin': '📊',
                        'pm_marketing': '📣',
                        'consultant': '💼',
                        'data_science': '🧠',
                        'software_eng': '⌨️',
                        'devops': '🚀',
                        'civil_eng': '🏗️',
                        'site_works': '🦺',
                        'project_mgmt': '📐',
                        'temporary': '⏰',
                        'none': '🔍'
                    };
                    return icons[path] || '💼';
                };

                const jobIcon = getJobIconForPath(JobSys.currentCareerPath);

                heroCard.innerHTML = `
                        <div class="card-header">
                            <span class="badge-primary">${t('current_position').toUpperCase()}</span>
                            <span class="salary-badge">${formatCurrency(GameState.salary)}/${t('month')}</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 15px;">
                            <div style="font-size: 3.5rem; filter: drop-shadow(0 0 15px rgba(56, 189, 248, 0.4));">${jobIcon}</div>
                            <div>
                                <h2 class="hero-title" style="margin-bottom: 5px;">${getJobTranslation(GameState.jobTitle)}</h2>
                                <div class="career-path" style="margin-bottom: 0;">📍 ${UI.getLabel(JobSys.currentCareerPath)}</div>
                            </div>
                        </div>
                        
                        <div class="progress-section" style="background: rgba(15, 23, 42, 0.5); padding: 15px; border-radius: 12px; margin-top: 10px;">
                            <div class="progress-label" style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                                <span style="color: #94a3b8; font-size: 0.85rem;">⏱️ ${t('experience')}</span>
                                <span style="color: #38bdf8; font-weight: 700;">${expText}</span>
                            </div>
                            <div class="progress-track" style="background: #1e293b; height: 10px; border-radius: 5px; overflow: hidden;">
                                <div class="progress-fill" style="width: ${expPercent}%; height: 100%; background: linear-gradient(90deg, #38bdf8, #0ea5e9); border-radius: 5px; transition: width 0.3s;"></div>
                            </div>
                        </div>
                    `;
                dashboardGrid.appendChild(heroCard);


                // Promotion / Raise Logic
                const path = JobSys.getCareerPath(JobSys.currentCareerPath);
                const currentJobIndex = (path && path.length > 0) ? path.findIndex(job => job.title === GameState.jobTitle) : -1;
                const isMaxLevel = (currentJobIndex !== -1 && currentJobIndex === path.length - 1);

                if (JobSys.currentCareerPath === 'none' || !path) {
                    // --- UNEMPLOYED OR TEMPORARY JOB CASE ---
                    const goalCard = document.createElement('div');
                    goalCard.className = 'dashboard-card goal-card';

                    // Temp Check
                    const hasGigs = GameState.currentGigs && GameState.currentGigs.length > 0 && GameState.salary > 0;

                    if (hasGigs) {
                        // Temporary job message
                        goalCard.innerHTML = `
                                <div class="card-header"><span class="badge-secondary">${t('temp_job_badge')}</span></div>
                                <h3 class="goal-title">${t('temp_job_title')}</h3>
                                <p style="color:#94a3b8; margin-top:10px;">${t('temp_job_desc')}</p>
                            `;
                    } else {
                        // Unemployed message
                        goalCard.innerHTML = `
                                <div class="card-header"><span class="badge-secondary">${t('look_for_work')}</span></div>
                                <h3 class="goal-title">${t('you_are_unemployed')}</h3>
                                <p style="color:#94a3b8; margin-top:10px;">${t('unemployed_message')}</p>
                            `;
                    }
                    dashboardGrid.appendChild(goalCard);

                } else if (!isMaxLevel) {
                    // --- SPECIAL CASE: TRES DEPORTE ---
                    if (GameState.jobTitle === 'TRES DEPORTE') {
                        const monthsSinceLastRequest = JobSys.monthsSinceLastRaise || 0;
                        const canAsk = monthsSinceLastRequest >= 2;
                        const monthsRemaining = Math.max(0, 2 - monthsSinceLastRequest);

                        const goalCard = document.createElement('div');
                        goalCard.className = 'dashboard-card goal-card';
                        goalCard.innerHTML = `
                                <div class="card-header"><span class="badge-warning">PEDIR AUMENTO</span></div>
                                <h3 class="goal-title">Solicitar Aumento de Salario</h3>
                                <p style="color:#94a3b8; margin:10px 0;">${t('job_tres_deporte_desc')}</p>
                                
                                <div class="progress-section" style="margin-top:15px;">
                                    <div style="display:flex; justify-content:space-between; font-size:0.85rem; color:#cbd5e1; margin-bottom:8px;">
                                        <span style="display:flex; align-items:center; gap:5px;">⏱️ ${t('job_time_since_request')}</span>
                                        <span style="font-family:monospace; color:${canAsk ? '#34d399' : '#94a3b8'}">${monthsSinceLastRequest} / 2 ${t('months')}</span>
                                    </div>
                                    <div class="edu-bar-bg"><div class="edu-bar-fill" style="width:${Math.min(100, (monthsSinceLastRequest / 2) * 100)}%"></div></div>
                                </div>

                                <button id="btn-raise-tres" class="btn-primary" style="margin-top:15px;" ${canAsk ? '' : 'disabled'}>
                                    ${canAsk ? t('job_raise_btn') : t('job_raise_wait', { months: monthsRemaining })}
                                </button>
                            `;
                        if (canAsk) {
                            goalCard.querySelector('#btn-raise-tres').onclick = () => {
                                const res = JobSys.promote();
                                if (!res.success) {
                                    showGameAlert(res.message, res.success ? 'success' : 'error');
                                }
                                UI.updateJob(JobSys);
                            };
                        }
                        dashboardGrid.appendChild(goalCard);
                    }
                    // --- NORMAL PROMOTION CASE ---
                    else {
                        const nextJobInPath = path[currentJobIndex + 1];
                        const canPromote = JobSys.getAvailablePromotions() !== null;

                        const reqMonths = nextJobInPath.reqMonths;
                        const currentMonths = JobSys.monthsInCurrentJob;
                        const progress = Math.min(100, (currentMonths / reqMonths) * 100);

                        const isEduOk = !nextJobInPath.reqEdu || JobSys.checkEducation(nextJobInPath.reqEdu);
                        const isTimeOk = currentMonths >= reqMonths;

                        // Lifestyle Logic
                        let isLifestyleOk = true;
                        let premiumTagsHTML = '';

                        if (nextJobInPath.req) {
                            const r = nextJobInPath.req;

                            // Tag Helper
                            const createTag = (label, level, currentLevel, icon, typeKey) => {
                                const ok = currentLevel >= level;
                                if (!ok) isLifestyleOk = false;
                                return `
                                    <div style="
                                        background:${ok ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)'}; 
                                        border:1px solid ${ok ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)'}; 
                                        border-radius:12px; 
                                        padding:12px; 
                                        display:flex; 
                                        align-items:center; 
                                        gap:12px;
                                        transition:all 0.2s ease;
                                    ">
                                        <div style="
                                            font-size:1.5rem; 
                                            filter:drop-shadow(0 2px 4px ${ok ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'});
                                        ">${icon}</div>
                                        <div style="display:flex; flex-direction:column; line-height:1.2;">
                                            <span style="font-size:0.65rem; font-weight:700; text-transform:uppercase; color:${ok ? '#34d399' : '#f87171'}">
                                                ${ok ? t('job_fulfilled') : t('job_required')}
                                            </span>
                                            <span style="font-size:0.85rem; font-weight:600; color:#f1f5f9;">
                                                ${t('lifestyle_cat_' + typeKey)} <span style="color:#94a3b8;">(${t('tier_abbr')} ${level + 1})</span>
                                            </span>
                                        </div>
                                    </div>`;
                            };

                            // Housing
                            if (r.housing !== undefined) {
                                premiumTagsHTML += createTag('Vivienda', r.housing, GameBalance.getHousingTier(), '🏠', 'housing');
                            }

                            // Transport
                            const reqTrans = r.transport !== undefined ? r.transport : r.vehicle;
                            if (reqTrans !== undefined) {
                                premiumTagsHTML += createTag('Transporte', reqTrans, GameBalance.getCombinedTier('transport'), '🚗', 'transport');
                            }

                            // Food
                            if (r.food !== undefined) {
                                premiumTagsHTML += createTag('Dieta', r.food, GameBalance.getCombinedTier('food'), '🥗', 'food');
                            }

                            // Clothes
                            if (r.clothes !== undefined) {
                                premiumTagsHTML += createTag('Imagen', r.clothes, GameBalance.getCombinedTier('clothes'), '👔', 'clothes');
                            }

                            // Leisure
                            if (r.leisure !== undefined) {
                                premiumTagsHTML += createTag('Ocio', r.leisure, GameBalance.getCombinedTier('leisure'), '🎉', 'leisure');
                            }
                        }

                        const nextCard = document.createElement('div');
                        nextCard.className = 'job-promo-card';

                        nextCard.style.background = 'linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.95))';
                        nextCard.style.border = '1px solid rgba(148, 163, 184, 0.1)';
                        nextCard.style.borderRadius = '16px';
                        nextCard.style.padding = '20px';
                        nextCard.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.3)';
                        nextCard.style.position = 'relative';
                        nextCard.style.overflow = 'hidden';

                        // Status
                        const isReady = canPromote && isEduOk && isLifestyleOk;
                        const cardAccent = isReady ? '#10b981' : '#64748b'; // Green vs Slate

                        nextCard.innerHTML = `
                                <div style="position:absolute; top:0; left:0; width:100%; height:4px; background:${isReady ? 'linear-gradient(90deg, #10b981, #34d399)' : '#334155'};"></div>
                                
                                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                                    <div>
                                        <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:1px; color:#cbd5e1; margin-bottom:4px;">${t('next_objective')}</div>
                                        <div style="font-size:1.25rem; font-weight:700; color:#f8fafc; display:flex; align-items:center; gap:10px;">
                                            <span>${getJobTranslation(nextJobInPath.title)}</span>
                                            ${isReady ? `<span style="font-size:0.8rem; background:rgba(16, 185, 129, 0.2); color:#34d399; padding:2px 8px; border-radius:12px; border:1px solid rgba(16, 185, 129, 0.3);">${t('ready')}</span>` : ''}
                                        </div>
                                    </div>
                                    <div style="text-align:right;">
                                        <div style="font-size:0.8rem; color:#94a3b8;">${t('salary_increase')}</div>
                                        <div style="font-size:1.1rem; font-weight:700; color:#fbbf24; text-shadow:0 0 10px rgba(251, 191, 36, 0.2);">+${formatCurrency(nextJobInPath.salary - GameState.salary)}</div>
                                    </div>
                                </div>
                                
                                <!-- Experience Bar -->
                                <div style="margin-bottom:20px; background:rgba(15, 23, 42, 0.6); padding:15px; border-radius:12px; border:1px solid rgba(255,255,255,0.05);">
                                    <div style="display:flex; justify-content:space-between; font-size:0.85rem; color:#cbd5e1; margin-bottom:8px;">
                                        <span style="display:flex; align-items:center; gap:5px;">⏱️ ${t('job_exp_label')}</span>
                                        <span style="font-family:monospace; color:${isTimeOk ? '#34d399' : '#94a3b8'}">${Math.floor(currentMonths)} / ${reqMonths} ${t('months')}</span>
                                    </div>
                                    <div style="height:8px; background:#1e293b; border-radius:4px; overflow:hidden;">
                                        <div style="width:${progress}%; height:100%; background:${isTimeOk ? 'linear-gradient(90deg, #10b981, #34d399)' : '#3b82f6'}; transition:width 0.5s ease; box-shadow:0 0 10px rgba(59, 130, 246, 0.3);"></div>
                                    </div>
                                </div>

                                <!-- Requirements -->
                                <div style="margin-bottom:25px;">
                                    <div style="font-size:0.75rem; text-transform:uppercase; color:#64748b; margin-bottom:10px; padding-left:5px;">${t('job_req_access')}</div>
                                    <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap:10px;">
                                        
                                        <!-- Edu Tag -->
                                        ${nextJobInPath.reqEdu ? `
                                            <div style="background:${isEduOk ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)'}; border:1px solid ${isEduOk ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)'}; border-radius:8px; padding:10px; display:flex; align-items:center; gap:10px;">
                                                <div style="font-size:1.2rem;">${isEduOk ? '🎓' : '📚'}</div>
                                                <div style="display:flex; flex-direction:column;">
                                                    <span style="font-size:0.7rem; color:${isEduOk ? '#34d399' : '#f87171'}">${isEduOk ? t('job_fulfilled') : t('job_missing_edu')}</span>
                                                    <span style="font-size:0.8rem; font-weight:600; color:#e2e8f0;">${Array.isArray(nextJobInPath.reqEdu) ? nextJobInPath.reqEdu.map(id => UI.getLabel('course_' + id)).join(' / ') : UI.getLabel('course_' + nextJobInPath.reqEdu)}</span>
                                                </div>
                                            </div>
                                        ` : ''}

                                        <!-- Lifestyle Tags -->
                                        ${premiumTagsHTML}
                                    </div>
                                </div>

                                <button id="btn-promote" class="btn-premium-action" ${isReady ? '' : 'disabled'} 
                                    style="width:100%; padding:15px; border-radius:12px; border:none; 
                                    background:${isReady ? 'linear-gradient(135deg, #2563eb, #1d4ed8)' : '#334155'}; 
                                    color:${isReady ? '#fff' : '#94a3b8'}; font-weight:700; font-size:1rem; 
                                    cursor:${isReady ? 'pointer' : 'not-allowed'}; 
                                    box-shadow:${isReady ? '0 10px 20px -5px rgba(37, 99, 235, 0.4)' : 'none'}; 
                                    transition:all 0.2s ease;">
                                    ${!isReady ? `🔒 ${t('job_req_pending')}` : `✨ ${t('job_ask_promotion')}`}
                                </button>
                            `;



                        if (canPromote && isEduOk && isLifestyleOk) {
                            nextCard.querySelector('#btn-promote').onclick = () => {
                                const res = JobSys.promote();
                                if (res.success) {
                                    // Success Msg
                                    const themeColor = '#8b5cf6'; // Violet/Purple
                                    const icon = '🚀';

                                    let promoMsg = `
                                        <div style="text-align: center; margin-bottom: 20px;">
                                            <div style="font-size: 4rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px ${themeColor}66); animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);">${icon}</div>
                                            <h3 style="color: ${themeColor}; margin: 0; font-size: 1.5rem; text-shadow: 0 0 10px ${themeColor}4d;">${t('job_promotion_success')}</h3>
                                        </div>

                                        <div style="background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.6)); border: 1px solid ${themeColor}4d; border-radius: 16px; padding: 20px; text-align: center; margin-bottom: 20px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                                            <div style="font-size: 0.85rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">${t('job_new_position')}</div>
                                            <div style="font-size: 1.4rem; font-weight: 700; color: #f8fafc; margin-bottom: 15px;">${getJobTranslation(GameState.jobTitle)}</div>
                                            
                                            <div style="display: inline-block; background: ${themeColor}26; border: 1px solid ${themeColor}4d; padding: 8px 16px; border-radius: 20px;">
                                                <span style="color: ${themeColor}; font-weight: 700; font-size: 1.1rem;">${formatCurrency(GameState.salary)}/${t('month')}</span>
                                            </div>
                                        </div>

                                        <p style="text-align: center; color: #cbd5e1; font-size: 0.95rem; line-height: 1.5; margin: 0;">
                                            ${t('job_effort_worth')}
                                        </p>
                                    `;

                                    UI.showModal(' ', promoMsg, [{ text: `🚀 ${t('job_go_for_it')}`, style: 'success', fn: () => UI.updateJob(JobSys) }], true);
                                    UI.updateHeader();
                                    UI.updateDashboard();
                                } else {
                                    showGameAlert(res.message, res.success ? 'success' : 'error');
                                }
                            };
                        }
                        dashboardGrid.appendChild(nextCard);
                    } // Close normal promotion case
                } else {
                    // Max Level or Special Case

                    // Special: TRES DEPORTE
                    if (GameState.jobTitle === 'TRES DEPORTE') {
                        const monthsSinceLastRequest = JobSys.monthsSinceLastRaise || 0;
                        const canAsk = monthsSinceLastRequest >= 2;
                        const monthsRemaining = Math.max(0, 2 - monthsSinceLastRequest);

                        const goalCard = document.createElement('div');
                        goalCard.className = 'dashboard-card goal-card';
                        goalCard.innerHTML = `
                                <div class="card-header"><span class="badge-warning">${t('job_raise_request').toUpperCase()}</span></div>
                                <h3 class="goal-title">${t('job_raise_request')}</h3>
                                <p style="color:#94a3b8; margin:10px 0;">${t('job_tres_deporte_desc')}</p>
                                
                                <div class="progress-section" style="margin-top:15px;">
                                    <div class="progress-label">
                                        <span>${t('job_time_since_request')}</span>
                                        <span>${monthsSinceLastRequest.toFixed(1)} / 2 ${t('months')}</span>
                                    </div>
                                    <div class="progress-track">
                                        <div class="progress-fill" style="width: ${Math.min(100, (monthsSinceLastRequest / 2) * 100)}%"></div>
                                    </div>
                                </div>
                                
                                ${!canAsk ? `<p style="color:#f87171; margin-top:15px; font-size:0.9rem;">⏱️ ${t('job_raise_wait', { months: monthsRemaining.toFixed(1) })}</p>` : ''}
                                
                                <button class="btn-promote" ${!canAsk ? 'disabled' : ''} style="margin-top:15px; width:100%; padding:12px; background:${canAsk ? 'var(--success-color)' : '#334155'}; color:white; border:none; border-radius:8px; font-weight:bold; cursor:${canAsk ? 'pointer' : 'not-allowed'};">
                                    ${canAsk ? `💰 ${t('job_raise_btn')}` : `🔒 ${t('job_locked_wait')}`}
                                </button>
                            `;

                        const promoteBtn = goalCard.querySelector('.btn-promote');
                        if (canAsk) {
                            promoteBtn.onclick = () => {
                                const res = JobSys.promote();
                                showGameAlert(res.message, res.success ? 'success' : 'error');
                                UI.updateJob(JobSys);
                            };
                        }

                        dashboardGrid.appendChild(goalCard);
                    }
                    else {
                        const monthsSince = JobSys.monthsSinceLastRaise || 0;
                        const canRaise = monthsSince >= 12;
                        const waittime = 12 - monthsSince;

                        const raiseCard = document.createElement('div');
                        raiseCard.className = 'job-peak-card';
                        raiseCard.innerHTML = `
                                <div class="job-peak-content">
                                    <h3>👑 ${t('job_peak_title')}</h3>
                                    <p style="color:#cbd5e1; font-size:0.95rem;">${t('job_peak_desc')}</p>
                                    <div style="margin-top:10px;">
                                        <span class="req-tag ${canRaise ? 'success' : 'fail'}">
                                            ${canRaise ? `✓ ${t('ready')}` : `⏳ Cooldown: ${Math.ceil(waittime)} ${t('months')}`}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <button id="btn-request-raise" class="btn-gold" ${canRaise ? '' : 'disabled'}>
                                        ${canRaise ? t('job_raise_request') : t('job_salary_review')}
                                    </button>
                                </div>
                            `;

                        if (canRaise) {
                            raiseCard.querySelector('#btn-request-raise').onclick = () => {
                                const res = JobSys.requestRaise();
                                // Boss Response
                                const themeColor = '#f97316'; // Orange
                                const icon = '🗣️';

                                let bossMsg = `
                                    <div style="text-align: center; margin-bottom: 20px;">
                                        <div style="font-size: 3.5rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px ${themeColor}66); animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);">${icon}</div>
                                        <h3 style="color: ${themeColor}; margin: 0; font-size: 1.4rem; text-shadow: 0 0 10px ${themeColor}4d; font-weight: 800; letter-spacing: 1px;">${t('job_boss_response')}</h3>
                                    </div>

                                    <div style="background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.6)); border: 1px solid ${themeColor}4d; border-radius: 16px; padding: 20px; text-align: center; margin-bottom: 20px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); position: relative;">
                                        <div style="font-size: 3rem; position: absolute; top: -20px; left: 10px; opacity: 0.2; color: ${themeColor};">“</div>
                                        <p style="color: #cbd5e1; font-size: 1.1rem; line-height: 1.6; margin: 10px 0; font-style: italic;">
                                            ${res.message.replace(/^Tu jefa dice que\.\.\. /, '')}
                                        </p>
                                        <div style="font-size: 3rem; position: absolute; bottom: -40px; right: 10px; opacity: 0.2; color: ${themeColor};">”</div>
                                    </div>
                                    
                                    <div style="text-align: center; font-size: 0.85rem; color: #94a3b8; margin-top: 15px;">
                                        ${t('job_boss_try_next_year')}
                                    </div>
                                `;

                                UI.showModal(' ', bossMsg, [{
                                    text: 'Entendido', style: 'primary', fn: () => {
                                        UI.updateJob(JobSys);
                                        UI.updateHeader();
                                        UI.updateDashboard();
                                    }
                                }], true);
                            };
                        }
                        dashboardGrid.appendChild(raiseCard);
                    } // Close normal max level else
                } // Close MAX LEVEL case

                contentContainer.appendChild(dashboardGrid);

                // 3. Market
                const marketSection = document.createElement('div');
                marketSection.className = 'market-section';
                marketSection.innerHTML = `<h3 class="section-title">🌐 ${t('job_market_title')}</h3>`;

                const marketGrid = document.createElement('div');
                marketGrid.className = 'market-grid';
                marketGrid.id = 'regular-jobs-grid';

                const vacancyList = JobSys.getAllVacancies().filter(vac => vac.reqMonths === 0);

                // Split Gigs vs Regular
                const gigs = vacancyList.filter(v => v.path === 'temporary');
                const regular = vacancyList.filter(v => {
                    // Hide DJ career until Year 1, Month 10 (invisible lock)
                    if (v.path === 'dj' && (GameState.year < 1 || (GameState.year === 1 && GameState.month < 10))) {
                        return false;
                    }
                    return v.path !== 'temporary';
                });

                // Gigs
                const gigSection = document.createElement('div');
                gigSection.className = 'market-section';
                gigSection.id = 'temp-jobs-section';
                gigSection.style.marginBottom = '40px';
                gigSection.innerHTML = `<h3 class="section-title" style="color:#facc15;">⚡ ${t('gig_jobs')}</h3>`;
                const gigGrid = document.createElement('div');
                gigGrid.className = 'market-grid';

                gigs.forEach(vac => {
                    const card = document.createElement('div');
                    card.className = 'market-card';
                    card.innerHTML = `
                                <div class="market-card-top">
                                    <h4>${getJobTranslation(vac.title)}</h4>
                                    <span class="market-path">${t('gig_jobs')}</span>
                                </div>
                                <div class="market-tags">
                                    <span class="tag" style="background:rgba(234, 179, 8, 0.2); color:#facc15; border:1px solid #facc15;">⏱ ${vac.duration} ${t('months')}</span>
                                </div>
                                <div class="market-footer">
                                    <div class="market-salary">${formatCurrency(vac.salary)}</div>
                                    <button class="btn-apply-small">${t('apply')}</button>
                                </div>
                            `;
                    card.querySelector('.btn-apply-small').onclick = () => {
                        const performApply = (force = false) => {
                            const res = JobSys.applyToJob(vac.title, force);
                            if (res.requiresJobConfirmation) {
                                // Trigger tutorial advancement when job confirmation is shown
                                if (GameState.tutorialStep === 6 && !GameState.tutorialFlags.acceptedFirstRealJob) {
                                    TutorialSystem.onRealJobAccepted(vac.title);
                                }
                                const currentJobName = getJobTranslation(res.currentJob);
                                UI.showModal(
                                    t('msg_confirm_switch_job_title'),
                                    `<div style="text-align: center;">
                                        <div style="font-size: 3rem; margin-bottom: 15px;">⚠️</div>
                                        <div style="background: linear-gradient(145deg, rgba(239, 68, 68, 0.1), rgba(185, 28, 28, 0.05)); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
                                            <p style="color: #cbd5e1; font-size: 1.1rem; line-height: 1.5; margin: 0;">
                                                ${t('msg_confirm_switch_job_desc').replace('{currentJob}', `<span style="color: #60a5fa; font-weight: 700;">${currentJobName}</span>`)}
                                            </p>
                                        </div>
                                    </div>`,
                                    [
                                        { text: t('cancel'), style: 'secondary', fn: null },
                                        { text: t('confirm_switch_btn'), style: 'danger', fn: () => performApply(true) }
                                    ],
                                    true
                                );
                                return;
                            }
                            if (res.requiresConfirmation) {
                                UI.showModal(t('msg_close_company_title'),
                                    `<div style="text-align:center;">
                                        <div style="font-size:3rem; margin-bottom:10px;">building</div>
                                        <p style="color:#cbd5e1; margin-bottom:15px;">${t('msg_close_company_confirm')}</p>
                                        <p style="color:#ef4444; font-weight:700;">${t('msg_irreversible_action')}</p>
                                    </div>`,
                                    [
                                        { text: t('cancel'), style: 'secondary', fn: null },
                                        { text: t('close_and_accept'), style: 'danger', fn: () => performApply(true) }
                                    ], true
                                );
                                return;
                            }
                            if (res.success) {
                                // Welcome Msg
                                const themeColor = '#facc15';
                                const icon = '⚡';

                                let gigMsg = `
                                <div style="text-align: center; margin-bottom: 20px;">
                                    <div style="font-size: 4rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px ${themeColor}66); animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);">${icon}</div>
                                    <h3 style="color: ${themeColor}; margin: 0; font-size: 1.6rem; text-shadow: 0 0 10px ${themeColor}4d; font-weight: 800; letter-spacing: 1px;">${t('temp_job_accepted')}</h3>
                                </div>

                                <div style="background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.6)); border: 1px solid ${themeColor}4d; border-radius: 16px; padding: 25px; text-align: center; margin-bottom: 25px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                                    <div style="font-size: 0.85rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px;">${t('temp_job_title')}</div>
                                    <div style="font-size: 1.6rem; font-weight: 800; color: #f8fafc; margin-bottom: 15px;">${getJobTranslation(vac.title)}</div>
                                    
                                    <div style="display: inline-block; background: ${themeColor}26; border: 1px solid ${themeColor}4d; padding: 10px 20px; border-radius: 30px;">
                                        <span style="color: ${themeColor}; font-weight: 700; font-size: 1.2rem;">${formatCurrency(vac.salary)}/mes</span>
                                    </div>
                                </div>

                                <p style="text-align: center; color: #cbd5e1; font-size: 1rem; line-height: 1.6; margin: 0; padding: 0 10px;">
                                    ${t('gig_accepted_msg')}
                                </p>
                            `;

                                UI.showModal(' ', gigMsg, [{ text: `🚀 ${t('lets_start')}`, style: 'primary', fn: () => UI.updateJob(JobSys) }], true);
                                UI.updateHeader();
                                UI.updateDashboard();
                            } else {
                                showGameAlert(res.message, res.success ? 'success' : 'error');
                            }
                        };
                        performApply();
                    };
                    gigGrid.appendChild(card);
                });
                gigSection.appendChild(gigGrid);
                contentContainer.appendChild(gigSection);


                // --- SECTION: CAREER MARKET ---
                const eligible = [];
                const locked = [];

                regular.forEach(vac => {
                    if (!vac.reqEdu || JobSys.checkEducation(vac.reqEdu)) {
                        eligible.push(vac);
                    } else {
                        locked.push(vac);
                    }
                });

                // 1. RENDER ELIGIBLE
                eligible.forEach(vac => {
                    const card = document.createElement('div');
                    card.className = 'market-card';

                    let eduText = null;
                    if (vac.reqEdu) {
                        if (Array.isArray(vac.reqEdu)) {
                            eduText = vac.reqEdu.map(id => UI.getLabel('course_' + id)).join(' o ');
                        } else {
                            eduText = UI.getLabel('course_' + vac.reqEdu);
                        }
                    }

                    const pathName = UI.getLabel(vac.path);

                    // Job icon based on career path
                    const getJobIcon = (path) => {
                        const icons = {
                            'dj': '🎧',
                            'unskilled': '🛒',
                            'tres_deporte': '👟',
                            'admin_contable': '📋',
                            'gestor_cobros': '💳',
                            'admin_inmo': '🏘️',
                            'prog_apps': '💻',
                            'sys_support': '🖥️',
                            'mobile_dev': '📱',
                            'maint_ind': '🔧',
                            'clima': '❄️',
                            'buildings': '🏢',
                            'analyst_fin': '📊',
                            'pm_marketing': '📣',
                            'consultant': '💼',
                            'data_science': '🧠',
                            'software_eng': '⌨️',
                            'devops': '🚀',
                            'civil_eng': '🏗️',
                            'site_works': '🦺',
                            'project_mgmt': '📐',
                            'temporary': '⏰'
                        };
                        return icons[path] || '💼';
                    };

                    const jobIcon = getJobIcon(vac.path);

                    card.innerHTML = `
                            <div class="job-icon">${jobIcon}</div>
                            <div class="market-card-top">
                                <h4>${getJobTranslation(vac.title)}</h4>
                                <span class="market-path">${pathName}</span>
                            </div>
                            <div class="market-tags">
                                <span class="tag">${t('entry_level')}</span>
                                ${vac.type === 'gig' ? `<span class="tag" style="background:rgba(234, 179, 8, 0.2); color:#facc15; border:1px solid #facc15;">⏱ ${vac.duration} meses</span>` : ''}
                                ${eduText ? `<span class="tag tag-edu">${eduText}</span>` : ''}
                            </div>
                            <div class="market-footer">
                                <div class="market-salary">${formatCurrency(vac.salary)}</div>
                                <button class="btn-apply-small">${t('apply')}</button>
                            </div>
                        `;


                    card.querySelector('.btn-apply-small').onclick = () => {
                        const performApply = (force = false) => {
                            const res = JobSys.applyToJob(vac.title, force);
                            if (res.requiresJobConfirmation) {
                                // Trigger tutorial advancement when job confirmation is shown
                                if (GameState.tutorialStep === 6 && !GameState.tutorialFlags.acceptedFirstRealJob) {
                                    TutorialSystem.onRealJobAccepted(vac.title);
                                }
                                const currentJobName = getJobTranslation(res.currentJob);
                                UI.showModal(
                                    t('msg_confirm_switch_job_title'),
                                    `<div style="text-align: center;">
                                        <div style="font-size: 3rem; margin-bottom: 15px;">⚠️</div>
                                        <div style="background: linear-gradient(145deg, rgba(239, 68, 68, 0.1), rgba(185, 28, 28, 0.05)); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
                                            <p style="color: #cbd5e1; font-size: 1.1rem; line-height: 1.5; margin: 0;">
                                                ${t('msg_confirm_switch_job_desc').replace('{currentJob}', `<span style="color: #60a5fa; font-weight: 700;">${currentJobName}</span>`)}
                                            </p>
                                        </div>
                                    </div>`,
                                    [
                                        { text: t('cancel'), style: 'secondary', fn: null },
                                        { text: t('confirm_switch_btn'), style: 'danger', fn: () => performApply(true) }
                                    ],
                                    true
                                );
                                return;
                            }
                            if (res.requiresConfirmation) {
                                UI.showModal(t('msg_close_company_title'),
                                    `<div style="text-align:center;">
                                        <div style="font-size:3rem; margin-bottom:10px;">building</div>
                                        <p style="color:#cbd5e1; margin-bottom:15px;">${t('msg_close_company_confirm')}</p>
                                        <p style="color:#ef4444; font-weight:700;">${t('msg_irreversible_action')}</p>
                                    </div>`,
                                    [
                                        { text: t('cancel'), style: 'secondary', fn: null },
                                        { text: t('close_and_accept'), style: 'danger', fn: () => performApply(true) }
                                    ], true
                                );
                                return;
                            }
                            if (res.success) {
                                const isGig = vac.type === 'gig';
                                // Use Blue/Cyan for Permanent Jobs to be distinct from Green (Success)
                                const themeColor = isGig ? '#facc15' : '#0ea5e9'; // Yellow vs Sky Blue
                                const icon = isGig ? '⚡' : '👔';
                                const title = isGig ? t('temp_job_accepted') : t('contract_signed');
                                const subTitle = isGig ? t('temp_job_title') : t('new_career_path');

                                // Welcome Msg
                                let welcomeMsg = `
                                <div style="text-align: center; margin-bottom: 20px;">
                                    <div style="font-size: 4rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px ${themeColor}66); animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);">${icon}</div>
                                    <h3 style="color: ${themeColor}; margin: 0; font-size: 1.6rem; text-shadow: 0 0 10px ${themeColor}4d; font-weight: 800; letter-spacing: 1px;">${title}</h3>
                                </div>

                                <div style="background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.6)); border: 1px solid ${themeColor}4d; border-radius: 16px; padding: 25px; text-align: center; margin-bottom: 25px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                                    <div style="font-size: 0.85rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px;">${subTitle}</div>
                                    <div style="font-size: 1.6rem; font-weight: 800; color: #f8fafc; margin-bottom: 15px;">${getJobTranslation(vac.title)}</div>
                                    
                                    <div style="display: inline-block; background: ${themeColor}26; border: 1px solid ${themeColor}4d; padding: 10px 20px; border-radius: 30px;">
                                        <span style="color: ${themeColor}; font-weight: 700; font-size: 1.2rem;">${formatCurrency(vac.salary)}/mes</span>
                                    </div>
                                </div>

                                <p style="text-align: center; color: #cbd5e1; font-size: 1rem; line-height: 1.6; margin: 0; padding: 0 10px;">
                                    ${isGig ? t('gig_accepted_msg') : t('career_accepted_msg')}
                                </p>
                            `;

                                if (!GameState.tutorialState.job || vac.title.includes('Reponedor')) {
                                    GameState.tutorialState.job = true;
                                }

                                if (!res.tutorialHandled) {
                                    UI.showModal(' ', welcomeMsg, [{ text: `🚀 ${t('lets_start')}`, style: 'primary', fn: () => UI.updateJob(JobSys) }], true);
                                } else {
                                    // If tutorial handled it, just update header/dashboard silently in background
                                    UI.updateJob(JobSys);
                                }

                                UI.updateHeader();
                                UI.updateDashboard();
                            } else {
                                // Rejection Msg
                                const themeColor = '#f43f5e'; // Rose
                                const icon = '🚫';

                                let rejectMsg = `
                                <div style="text-align: center; margin-bottom: 20px;">
                                    <div style="font-size: 4rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px ${themeColor}66); animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;">${icon}</div>
                                    <h3 style="color: ${themeColor}; margin: 0; font-size: 1.5rem; text-shadow: 0 0 10px ${themeColor}4d; font-weight: 800; letter-spacing: 1px;">CANDIDATURA RECHAZADA</h3>
                                </div>

                                <div style="background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.6)); border: 1px solid ${themeColor}4d; border-radius: 16px; padding: 20px; text-align: center; margin-bottom: 20px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                                    <p style="color: #e2e8f0; font-size: 1rem; line-height: 1.5; margin: 0;">
                                        ${res.message}
                                    </p>
                                </div>

                                <p style="text-align: center; color: #94a3b8; font-size: 0.9rem; margin: 0;">
                                    Revisa los requisitos y vuelve a intentarlo.
                                </p>
                                <style>
                                    @keyframes shake {
                                        10%, 90% { transform: translate3d(-1px, 0, 0); }
                                        20%, 80% { transform: translate3d(2px, 0, 0); }
                                        30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
                                        40%, 60% { transform: translate3d(4px, 0, 0); }
                                    }
                                </style>
                            `;

                                UI.showModal(' ', rejectMsg, [{ text: 'Entendido', style: 'secondary', fn: null }], true);
                            }
                        };
                        performApply();
                    };

                    marketGrid.appendChild(card);
                });
                marketSection.appendChild(marketGrid);

                // 2. Locked
                if (locked.length > 0) {
                    const details = document.createElement('details');
                    details.style.marginTop = '30px';
                    details.style.marginBottom = '20px';
                    details.style.borderTop = '1px solid #334155';
                    details.style.paddingTop = '20px';

                    const summary = document.createElement('summary');
                    summary.textContent = `📚 ${t('see_other_opportunities', { count: locked.length })}`;
                    summary.style.cursor = 'pointer';
                    summary.style.color = '#94a3b8';
                    summary.style.marginBottom = '15px';
                    details.appendChild(summary);

                    const lockedGrid = document.createElement('div');
                    lockedGrid.className = 'market-grid';
                    lockedGrid.style.opacity = '0.7';

                    locked.forEach(vac => {
                        const card = document.createElement('div');
                        card.className = 'market-card';
                        card.style.borderColor = '#475569';

                        let eduText = null;
                        if (vac.reqEdu) {
                            if (Array.isArray(vac.reqEdu)) {
                                eduText = vac.reqEdu.map(id => UI.getLabel('course_' + id)).join(' o ');
                            } else {
                                eduText = UI.getLabel('course_' + vac.reqEdu);
                            }
                        }

                        const pathName = UI.getLabel(vac.path);

                        // Job icon based on career path (same function as eligible)
                        const getJobIcon = (path) => {
                            const icons = {
                                'dj': '🎧',
                                'unskilled': '🛒',
                                'tres_deporte': '👟',
                                'admin_contable': '📋',
                                'gestor_cobros': '💳',
                                'admin_inmo': '🏘️',
                                'prog_apps': '💻',
                                'sys_support': '🖥️',
                                'mobile_dev': '📱',
                                'maint_ind': '🔧',
                                'clima': '❄️',
                                'buildings': '🏢',
                                'analyst_fin': '📊',
                                'pm_marketing': '📣',
                                'consultant': '💼',
                                'data_science': '🧠',
                                'software_eng': '⌨️',
                                'devops': '🚀',
                                'civil_eng': '🏗️',
                                'site_works': '🦺',
                                'project_mgmt': '📐',
                                'temporary': '⏰'
                            };
                            return icons[path] || '💼';
                        };

                        const jobIcon = getJobIcon(vac.path);

                        card.innerHTML = `
                                <div class="job-icon" style="opacity:0.5;">${jobIcon}</div>
                                <div class="market-card-top">
                                    <h4 style="color:#cbd5e1">${getJobTranslation(vac.title)}</h4>
                                    <span class="market-path">${pathName}</span>
                                </div>
                                <div class="market-tags">
                                    <span class="tag">${t('entry_level')}</span>
                                    ${eduText ? `<span class="tag tag-edu" style="background:rgba(239, 68, 68, 0.1); border:1px solid #ef4444; color:#ef4444;">🔒 ${eduText}</span>` : ''}
                                </div>
                                <div class="market-footer">
                                    <div class="market-salary">${formatCurrency(vac.salary)}</div>
                                    <button class="btn-apply-small" disabled>${t('job_missing_edu')}</button>
                                </div>
                            `;
                        lockedGrid.appendChild(card);
                    });


                    details.appendChild(lockedGrid);
                    marketSection.appendChild(details);
                }

                contentContainer.appendChild(marketSection);

                // 4. Entrepreneur
                const enoughNetWorth = GameState.netWorth >= 100000;
                const entrepreneurSection = document.createElement('div');
                entrepreneurSection.className = 'entrepreneur-footer';
                entrepreneurSection.innerHTML = `
                        <div style="background: linear-gradient(145deg, rgba(251, 191, 36, 0.1), rgba(245, 158, 11, 0.05)); border: 1px solid rgba(251, 191, 36, 0.3); border-radius: 20px; padding: 30px; position: relative; overflow: hidden; margin-top: 25px;">
                            <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #fbbf24, #f59e0b);"></div>
                            <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 20px;">
                                <div style="flex: 1; min-width: 200px;">
                                    <div style="font-size: 2.5rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px rgba(251, 191, 36, 0.5));">🚀</div>
                                    <h3 style="margin: 0 0 8px 0; font-size: 1.3rem; color: #fbbf24; font-weight: 800;">${t('found_company_title')}</h3>
                                    <p style="color: #94a3b8; margin: 0; font-size: 0.9rem;">${t('found_company_desc')}</p>
                                    ${!enoughNetWorth ? `<p style="color: #f87171; margin-top: 8px; font-weight: bold; font-size: 0.9rem;">⚠️ ${t('requirement')}: 100.000€ ${t('net_worth')} (${t('you_have')}: ${formatCurrency(GameState.netWorth)})</p>` : ''}
                                </div>
                                <button id="btn-found-company" ${!enoughNetWorth ? 'disabled' : ''} style="background: ${enoughNetWorth ? 'linear-gradient(135deg, #fbbf24, #f59e0b)' : '#334155'}; color: ${enoughNetWorth ? '#0f172a' : '#94a3b8'}; border: none; padding: 16px 40px; border-radius: 12px; font-weight: 900; font-size: 1rem; cursor: ${enoughNetWorth ? 'pointer' : 'not-allowed'}; text-transform: uppercase; letter-spacing: 1px; box-shadow: ${enoughNetWorth ? '0 4px 0 #b45309, 0 8px 20px rgba(251, 191, 36, 0.3)' : 'none'}; transition: all 0.15s; opacity: ${enoughNetWorth ? '1' : '0.6'};">
                                    ${enoughNetWorth ? `🏢 ${t('found_company_btn')}` : `🔒 ${t('insufficient_net_worth')}`}
                                </button>
                            </div>
                        </div>
                    `;

                if (enoughNetWorth) {
                    entrepreneurSection.querySelector('#btn-found-company').onclick = () => UI.openCompanyWizard();
                } else {
                    entrepreneurSection.querySelector('#btn-found-company').onclick = () => showGameAlert(t('company_found_req'), 'warning', '🔒 ' + t('requirement_not_met'));
                }
                contentContainer.appendChild(entrepreneurSection);
            } else {
                // Owner Mode
                const co = GameState.company;
                const activeTab = jobContainer.dataset.activeTab || 'summary';

                const coDash = document.createElement('div');
                coDash.innerHTML = `
                        <div class="company-dashboard">
                            <div style="background: linear-gradient(145deg, rgba(251, 191, 36, 0.12), rgba(245, 158, 11, 0.05)); border: 1px solid rgba(251, 191, 36, 0.3); border-radius: 20px; padding: 25px; position: relative; overflow: hidden; margin-bottom: 20px;">
                                <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #fbbf24, #f59e0b);"></div>
                                <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 20px;">
                                    <div style="display: flex; align-items: center; gap: 15px;">
                                        <div style="font-size: 3rem; filter: drop-shadow(0 0 15px rgba(251, 191, 36, 0.5));">${CompanyModule.businessTypes[co.typeId]?.icon || '🏢'}</div>
                                        <div>
                                            <h2 style="margin: 0 0 5px 0; font-size: 1.5rem; color: #fbbf24; font-weight: 800;">${co.name}</h2>
                                            <p style="margin: 0; color: #94a3b8; font-size: 0.9rem;">${t('biz_type_' + co.typeId)} • ${t('loc_' + co.locationId)}</p>
                                        </div>
                                    </div>
                                    <div style="display: flex; gap: 15px; flex-wrap: wrap;">
                                        <div style="background: linear-gradient(145deg, rgba(74, 222, 128, 0.1), transparent); padding: 12px 18px; border-radius: 12px; border: 1px solid rgba(74, 222, 128, 0.3); text-align: center; min-width: 100px;">
                                            <div style="font-size: 0.7rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px;">💵 ${t('comp_hero_cash')}</div>
                                            <div style="font-size: 1.2rem; font-weight: 800; color: #4ade80;">${formatCurrency(co.cash)}</div>
                                        </div>
                                        <div style="background: linear-gradient(145deg, ${co.profitLastMonth >= 0 ? 'rgba(74, 222, 128, 0.1)' : 'rgba(248, 113, 113, 0.1)'}, transparent); padding: 12px 18px; border-radius: 12px; border: 1px solid ${co.profitLastMonth >= 0 ? 'rgba(74, 222, 128, 0.3)' : 'rgba(248, 113, 113, 0.3)'}; text-align: center; min-width: 100px;">
                                            <div style="font-size: 0.7rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px;">📈 ${t('comp_hero_profit')}</div>
                                            <div style="font-size: 1.2rem; font-weight: 800; color: ${co.profitLastMonth >= 0 ? '#4ade80' : '#f87171'};">${co.profitLastMonth >= 0 ? '+' : ''}${formatCurrency(co.profitLastMonth)}</div>
                                        </div>

                                        <!-- Action Buttons (Header) -->
                                        <div style="display: flex; gap: 10px;">
                                            ${(() => {
                        const status = CompanyModule.canAutomate(co);
                        const canAuto = status.can;
                        const icon = canAuto ? '👑' : '🔒';
                        const label = canAuto ? t('automate_btn') : t('automate_btn_locked');
                        const pulseClass = canAuto ? 'ready-pulse' : '';
                        const btnStyle = canAuto
                            ? 'background: linear-gradient(135deg, #fbbf24, #f59e0b); color: #0f172a; box-shadow: 0 4px 15px rgba(251, 191, 36, 0.3);'
                            : 'background: #334155; color: #64748b; opacity: 0.8;';

                        return `
                                                    <button id="btn-automate-holding-header" class="${pulseClass}" style="display: inline-flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px; padding: 8px 18px; border-radius: 12px; font-weight: 800; font-size: 0.75rem; border: none; cursor: pointer; transition: all 0.2s; ${btnStyle} min-height: 56px; min-width: 110px;">
                                                        <span style="font-size: 1.1rem;">${icon}</span>
                                                        <div>${label}</div>
                                                    </button>
                                                `;
                    })()}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style="display: flex; gap: 8px; margin-bottom: 20px; flex-wrap: wrap; background: #1e293b; padding: 8px; border-radius: 12px;">
                                <button class="tab-btn ${activeTab === 'summary' ? 'active' : ''}" data-tab="summary" style="flex: 1; min-width: 60px; padding: 12px 8px; border: none; border-radius: 8px; cursor: pointer; font-weight: 700; font-size: 0.85rem; transition: all 0.2s; ${activeTab === 'summary' ? 'background: linear-gradient(135deg, #fbbf24, #f59e0b); color: #0f172a;' : 'background: transparent; color: #94a3b8;'}">
                                    📊 <span class="desktop-text">${t('comp_tab_summary')}</span>
                                </button>
                                <button class="tab-btn ${activeTab === 'staff' ? 'active' : ''}" data-tab="staff" style="flex: 1; min-width: 60px; padding: 12px 8px; border: none; border-radius: 8px; cursor: pointer; font-weight: 700; font-size: 0.85rem; transition: all 0.2s; ${activeTab === 'staff' ? 'background: linear-gradient(135deg, #fbbf24, #f59e0b); color: #0f172a;' : 'background: transparent; color: #94a3b8;'}">
                                    👥 <span class="desktop-text">${t('comp_tab_personnel')}</span>
                                </button>
                                <button class="tab-btn ${activeTab === 'product' ? 'active' : ''}" data-tab="product" style="flex: 1; min-width: 60px; padding: 12px 8px; border: none; border-radius: 8px; cursor: pointer; font-weight: 700; font-size: 0.85rem; transition: all 0.2s; ${activeTab === 'product' ? 'background: linear-gradient(135deg, #fbbf24, #f59e0b); color: #0f172a;' : 'background: transparent; color: #94a3b8;'}">
                                    📦 <span class="desktop-text">${t('comp_tab_product')}</span>
                                </button>
                                <button class="tab-btn ${activeTab === 'marketing' ? 'active' : ''}" data-tab="marketing" style="flex: 1; min-width: 60px; padding: 12px 8px; border: none; border-radius: 8px; cursor: pointer; font-weight: 700; font-size: 0.85rem; transition: all 0.2s; ${activeTab === 'marketing' ? 'background: linear-gradient(135deg, #fbbf24, #f59e0b); color: #0f172a;' : 'background: transparent; color: #94a3b8;'}">
                                    📢 <span class="desktop-text">${t('comp_tab_marketing')}</span>
                                </button>
                                <button class="tab-btn ${activeTab === 'finance' ? 'active' : ''}" data-tab="finance" style="flex: 1; min-width: 60px; padding: 12px 8px; border: none; border-radius: 8px; cursor: pointer; font-weight: 700; font-size: 0.85rem; transition: all 0.2s; ${activeTab === 'finance' ? 'background: linear-gradient(135deg, #fbbf24, #f59e0b); color: #0f172a;' : 'background: transparent; color: #94a3b8;'}">
                                    💰 <span class="desktop-text">${t('comp_tab_finance')}</span>
                                </button>
                            </div>

                            <div class="company-tab-content" id="co-tab-content" style="background: linear-gradient(145deg, #1e293b, #0f172a); border: 1px solid #334155; border-radius: 16px; padding: 20px;">
                                <!-- Content injected here -->
                            </div>
                        </div>
                    `;
                contentContainer.appendChild(coDash);

                // Attach Header Listeners
                const btnAutoHeader = document.getElementById('btn-automate-holding-header');
                if (btnAutoHeader) {
                    btnAutoHeader.onclick = async () => {
                        const status = CompanyModule.canAutomate(co);

                        if (!status.can) {
                            const containerHtml = `
                                <div style="text-align: center; margin-bottom: 5px;">
                                    <div style="font-size: 2.5rem; margin-bottom: 10px; filter: drop-shadow(0 0 10px rgba(251, 191, 36, 0.4));">👑</div>
                                    <p style="color: #94a3b8; font-size: 0.9rem; line-height: 1.4; margin-bottom: 15px;">${t('automate_req_title')}</p>
                                </div>
                                <div style="background: rgba(30, 41, 59, 0.7); border-radius: 16px; padding: 20px; border: 1px solid rgba(251, 191, 36, 0.2); margin-top: 10px;">
                                    ${status.missing.map(m => `
                                        <div style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 12px; color: #cbd5e1; font-size: 0.85rem; text-align: left;">
                                            <div style="color: #fbbf24; background: rgba(251, 191, 36, 0.1); width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 1rem;">•</div>
                                            <span style="flex: 1;">${m}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            `;
                            return showGameAlert(containerHtml, 'warning', t('warning') || 'Aviso');
                        }

                        const msg = t('automate_confirm_msg') || '¿Quieres automatizar este negocio? Dejarás de gestionarlo directamente y pasará a generar ingresos pasivos en tu Holding como inversión. Se calculará en base a los beneficios de la empresa de los últimos meses.';
                        const confirmed = await showGameConfirm(msg, t('automate_confirm_title') || 'Automatizar Negocio', t('confirm'), t('cancel'));
                        if (!confirmed) return;

                        const r = CompanyModule.automate();
                        if (r && r.success) {
                            showGameAlert(r.message, 'success');
                            UI.updateHeader();
                            UI.updateJob(JobSystem);
                            UI.updateDashboard();
                        } else {
                            showGameAlert(r.message, 'error');
                        }
                    };
                }


                contentContainer.querySelectorAll('.tab-btn').forEach(btn => {
                    btn.onclick = () => {
                        jobContainer.dataset.activeTab = btn.dataset.tab;
                        UI.updateJob(JobSystem);
                        UI.checkContextualTutorial('company_' + btn.dataset.tab);
                    };
                });




                const tabContent = document.getElementById('co-tab-content');

                // Helpers
                window.setStrat = (cat, val) => {
                    CompanyModule.setStrategicOption(cat, val);
                    UI.updateJob(JobSystem);
                };
                window.investCo = (type) => {
                    const r = CompanyModule.invest(type);
                    if (r) { if (r.message) showGameAlert(r.message, r.success ? 'success' : 'error'); UI.updateJob(JobSystem); }
                };
                window.updatePrice = () => {
                    const el = document.getElementById('price-input');
                    if (!el) return;
                    const val = parseFloat(el.value);
                    if (val > 0) {
                        GameState.company.customPrice = val;
                        showGameAlert(t('comp_price_updated_msg', { amount: formatCurrency(val) }), 'success', t('comp_price_updated_title'));
                        UI.updateJob(JobSystem);
                    }
                };

                if (activeTab === 'summary') {
                    try {
                        let eventsHtml = co.events.map(e => `<li>${e}</li>`).join('');
                        if (!eventsHtml) eventsHtml = `<li style="color:#aaa">${t('comp_no_news')}</li>`;

                        let revDiff = 0;
                        let expDiff = 0;
                        let profDiff = 0;

                        if (co.financialHistory && co.financialHistory.length >= 2) {
                            const curr = co.financialHistory[co.financialHistory.length - 1];
                            const prev = co.financialHistory[co.financialHistory.length - 2];

                            if (curr && prev) {
                                if (prev.revenue > 0) revDiff = (curr.revenue - prev.revenue) / prev.revenue;
                            }
                        }

                        let details = { wages: 0, rent: 0, cogs: 0, marketing: 0, opex: 0, salary: 0 };
                        let income = { revenue: co.revenueLastMonth };

                        if (co.financialHistory && co.financialHistory.length > 0) {
                            const lastEntry = co.financialHistory[co.financialHistory.length - 1];
                            if (lastEntry.expenses) {
                                details = { ...details, ...lastEntry.expenses };
                            }
                        }

                        const fmtDiff = (val) => {
                            const s = val > 0 ? '+' : '';
                            const color = val > 0 ? '#4ade80' : (val < 0 ? '#f87171' : '#94a3b8');
                            return `<span style="color:${color}; font-size:0.8rem; margin-left:5px;">(${s}${(val * 100).toFixed(1)}%)</span>`;
                        };

                        tabContent.innerHTML = `
                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
                                    <!-- General Status -->
                                    <div id="comp-status-card" style="background: linear-gradient(145deg, rgba(74, 222, 128, 0.08), transparent); border: 1px solid rgba(74, 222, 128, 0.2); border-radius: 16px; padding: 20px;">
                                        <h3 style="margin: 0 0 15px 0; color: #4ade80; font-size: 1rem; display: flex; align-items: center; gap: 8px;">
                                            <span style="font-size: 1.3rem;">📊</span> ${t('comp_status_general')}
                                        </h3>
                                        <div style="display: grid; gap: 10px;">
                                            <div style="display: flex; justify-content: space-between;">
                                                <span style="color: #94a3b8;">⭐ ${t('comp_reputation')}</span>
                                                <span style="font-weight: 700; color: #fbbf24;">${co.reputation.toFixed(1)}/5.0</span>
                                            </div>
                                            <div style="display: flex; justify-content: space-between;">
                                                <span style="color: #94a3b8;">👥 ${t('comp_clients_mo')}</span>
                                                <span style="font-weight: 700; color: #fff;">${co.lastStats ? co.lastStats.customers : 0}</span>
                                            </div>
                                            <div style="display: flex; justify-content: space-between;">
                                                <span style="color: #94a3b8;">📦 ${t('comp_capacity_mo')}</span>
                                                <span style="font-weight: 700; color: #fff;">${co.lastStats ? co.lastStats.capacity : 0}</span>
                                            </div>
                                        </div>
                                        <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #334155;">
                                            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                                <span style="color: #94a3b8;">${t('income')}</span>
                                                <span style="color: #4ade80; font-weight: 700;">${formatCurrency(co.revenueLastMonth)} ${fmtDiff(revDiff)}</span>
                                            </div>
                                            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                                <span style="color: #94a3b8;">${t('expenses')}</span>
                                                <span style="color: #f87171; font-weight: 700;">${formatCurrency(co.expensesLastMonth)}</span>
                                            </div>
                                            <div style="display: flex; justify-content: space-between; font-size: 1.1rem; padding-top: 8px; border-top: 1px dashed #334155;">
                                                <span style="color: #fff; font-weight: 700;">${t('comp_hero_profit')}</span>
                                                <span style="color: ${co.profitLastMonth >= 0 ? '#4ade80' : '#f87171'}; font-weight: 800;">${co.profitLastMonth >= 0 ? '+' : ''}${formatCurrency(co.profitLastMonth)}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- News -->
                                    <div id="comp-summary-news" style="background: linear-gradient(145deg, rgba(56, 189, 248, 0.08), transparent); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 16px; padding: 20px;">
                                        <h3 style="margin: 0 0 15px 0; color: #38bdf8; font-size: 1rem; display: flex; align-items: center; gap: 8px;">
                                            <span style="font-size: 1.3rem;">📢</span> ${t('comp_news_title')}
                                        </h3>
                                        <ul style="max-height: 150px; overflow-y: auto; padding-left: 20px; color: #cbd5e1; font-size: 0.9rem; line-height: 1.6;">${eventsHtml}</ul>
                                    </div>
                                    
                                    <div id="comp-summary-tab">
                                        <!-- Financial Breakdown -->
                                        <div style="background: linear-gradient(145deg, rgba(168, 85, 247, 0.08), transparent); border: 1px solid rgba(168, 85, 247, 0.2); border-radius: 16px; padding: 20px;">
                                            <h3 style="margin: 0 0 15px 0; color: #a855f7; font-size: 1rem; display: flex; align-items: center; gap: 8px;">
                                                <span style="font-size: 1.3rem;">📋</span> ${t('comp_breakdown_title')}
                                            </h3>
                                            <table style="width: 100%; font-size: 0.85rem; border-collapse: collapse;">
                                                <tr style="border-bottom: 1px solid #334155;">
                                                    <td style="padding: 6px 0; color: #94a3b8;">💵 ${t('comp_sales_label')}</td>
                                                    <td style="text-align: right; color: #4ade80; font-weight: 700;">+${formatCurrency(income.revenue)}</td>
                                                </tr>
                                                <tr><td style="padding: 6px 0; color: #94a3b8;">📦 ${t('comp_cogs_label')}</td><td style="text-align: right; color: #f87171;">-${formatCurrency(details.cogs)}</td></tr>
                                                <tr><td style="padding: 6px 0; color: #94a3b8;">👥 ${t('comp_wages_label')}</td><td style="text-align: right; color: #f87171;">-${formatCurrency(details.wages)}</td></tr>
                                                <tr><td style="padding: 6px 0; color: #94a3b8;">🏠 ${t('comp_rent_label')}</td><td style="text-align: right; color: #f87171;">-${formatCurrency(details.rent)}</td></tr>
                                                <tr><td style="padding: 6px 0; color: #94a3b8;">📢 ${t('comp_marketing_label')}</td><td style="text-align: right; color: #f87171;">-${formatCurrency(details.marketing)}</td></tr>
                                                <tr><td style="padding: 6px 0; color: #94a3b8;">🔬 ${t('comp_rd_label')}</td><td style="text-align: right; color: #f87171;">-${formatCurrency(details.opex)}</td></tr>
                                                <tr style="border-bottom: 1px solid #334155;"><td style="padding: 6px 0; color: #94a3b8;">👔 ${t('comp_ceo_salary_label')}</td><td style="text-align: right; color: #f87171;">-${formatCurrency(details.salary)}</td></tr>
                                                <tr style="font-weight: bold;"><td style="padding-top: 10px; color: #fff;">${t('comp_total_expenses')}</td><td style="text-align: right; padding-top: 10px; color: #f87171;">-${formatCurrency(co.expensesLastMonth)}</td></tr>
                                            </table>
                                        </div>
    
                                        <!-- Charts -->
                                        <div style="background: linear-gradient(145deg, rgba(251, 191, 36, 0.08), transparent); border: 1px solid rgba(251, 191, 36, 0.2); border-radius: 16px; padding: 20px;">
                                            <h3 style="margin: 0 0 15px 0; color: #fbbf24; font-size: 1rem; display: flex; align-items: center; gap: 8px;">
                                                <span style="font-size: 1.3rem;">📈</span> ${t('comp_evolution_title')}
                                            </h3>
                                            <div style="height: 200px; width: 100%;">
                                                <canvas id="revenueChart"></canvas>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;


                        if (co.revenueHistory && co.revenueHistory.length > 0) {
                            const ctx = document.getElementById('revenueChart').getContext('2d');
                            const labels = Array.from({ length: co.revenueHistory.length }, (_, i) => i + 1).slice(-12);
                            const revData = co.revenueHistory.slice(-12);
                            const profData = co.profitHistory.slice(-12);
                            const expData = co.financialHistory ? co.financialHistory.slice(-12).map(h => h.expenses ? h.expenses.total : 0) : [];

                            new Chart(ctx, {
                                type: 'line',
                                data: {
                                    labels: labels,
                                    datasets: [
                                        { label: 'Ingresos', data: revData, borderColor: '#4ade80', tension: 0.2, pointRadius: 2 },
                                        { label: 'Gastos', data: expData, borderColor: '#f87171', tension: 0.2, pointRadius: 2 },
                                        { label: 'Beneficio', data: profData, borderColor: '#38bdf8', tension: 0.2, pointRadius: 2 }
                                    ]
                                },
                                options: {
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    plugins: { legend: { display: true, labels: { boxWidth: 10, font: { size: 10 } } } },
                                    scales: {
                                        y: { grid: { color: '#334155' }, ticks: { font: { size: 9 } } },
                                        x: { display: false }
                                    }
                                }
                            });
                        }
                    } catch (err) {
                        console.error("Summary Render Error", err);
                        tabContent.innerHTML = `<div class="error-box">ERROR RENDERING SUMMARY: ${err.message}</div>`;
                    }

                } else if (activeTab === 'staff') {
                    let staffHtml = '';
                    let upgradeText = t('comp_expand_btn');
                    let upgradeDisabled = "";

                    // Loc Staff
                    const loc = CompanyModule.locations[co.locationId];
                    const locationMaxStaff = loc?.maxStaff || 15;

                    // Max Check
                    if (co.maxStaff >= locationMaxStaff) {
                        upgradeText = `${t('max_level')} (${locationMaxStaff})`;
                        upgradeDisabled = "disabled";
                    } else if (co.staff.length < co.maxStaff) {
                        upgradeText = `${t('comp_expand_btn')} (Req: ${t('comp_full_staff_req')})`;
                        upgradeDisabled = "disabled";
                    } else if (co.maxStaff === 5) {
                        upgradeCost = Math.max(15000, (co.profitLastMonth || 0) * 3);
                    } else if (co.maxStaff === 10) {
                        upgradeCost = Math.max(30000, (co.profitLastMonth || 0) * 3);
                    } else if (co.maxStaff === 15) {
                        upgradeCost = Math.max(60000, (co.profitLastMonth || 0) * 3);
                    }

                    if (!upgradeDisabled && upgradeCost > 0) {
                        upgradeText += ` (${formatCurrency(upgradeCost)})`;
                    }

                    // Check Expert Lock
                    const expertLocked = co.productLevel < 5;
                    const expertBtnDisabled = expertLocked ? 'disabled' : '';
                    const expertBtnStyle = expertLocked ? 'opacity:0.5; cursor:not-allowed;' : '';
                    const expertBtnText = expertLocked ? `${t('cat_expert')} (1.8k) 🔒 ${t('required_prereq')}: ${t('tier_abbr')} 5` : `${t('cat_expert')} (1.8k)`;


                    // Staff Cards
                    co.staff.forEach((emp, i) => {
                        staffHtml += `
                                <div class="staff-card">
                                    <div class="staff-header-row">
                                        <div>
                                            <h4 class="staff-role-title">${emp.name || emp.role}</h4>
                                            <div class="staff-meta" style="color:#64748b; font-size:0.75rem;">${emp.role}</div>
                                        </div>
                                    </div>
                                    
                                    <div class="staff-stat-row">
                                        <span style="width:60px;">${t('skill')}</span>
                                        <div class="staff-bar-track">
                                            <div class="staff-bar-fill bar-skill" style="width:${(emp.skill * 100).toFixed(0)}%"></div>
                                        </div>
                                        <span>${(emp.skill * 100).toFixed(0)}%</span>
                                    </div>
                                    <div class="staff-stat-row">
                                        <span style="width:60px;">${t('morale')}</span>
                                        <div class="staff-bar-track">
                                            <div class="staff-bar-fill bar-morale ${emp.morale < 0.4 ? 'low' : ''}" style="width:${(emp.morale * 100).toFixed(0)}%"></div>
                                        </div>
                                        <span>${(emp.morale * 100).toFixed(0)}%</span>
                                    </div>

                                    <div class="staff-controls">
                                        <div class="salary-control">
                                            <span style="font-size:0.8rem; color:#94a3b8;">${t('salary')}</span>
                                            <div class="salary-input-wrapper">
                                                <input 
                                                    type="number" 
                                                    id="salary-input-${i}" 
                                                    value="${emp.salary}" 
                                                    min="1000" 
                                                    max="9000" 
                                                    step="50"
                                                    class="comp-input-sm"
                                                    onchange="updateEmployeeSalary(${i})"
                                                >
                                                <button 
                                                    onclick="updateEmployeeSalary(${i})" 
                                                    class="btn-icon-check"
                                                    title="${t('update_salary')}"
                                                >✓</button>
                                            </div>
                                        </div>
                                        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:5px;">
                                            <span style="font-size:0.7rem; color:#64748b;">Mín: ${formatCurrency(emp.requiredWage)}</span>
                                        </div>
                                    </div>
                                    
                                    <button 
                                        onclick="fireEmployee(${i})" 
                                        class="btn-fire-sm" 
                                        style="width: 100%; margin-top: 12px; padding: 8px 12px; border-radius: 8px; background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.3); color: #f87171; font-size: 0.8rem; cursor: pointer; transition: all 0.2s;"
                                        onmouseover="this.style.background='rgba(239, 68, 68, 0.25)'"
                                        onmouseout="this.style.background='rgba(239, 68, 68, 0.15)'"
                                    >🚪 ${t('comp_fire_btn')}</button>
                                </div>
                            `;
                    });


                    tabContent.innerHTML = `
                            <div class="comp-dash-container">
                                <div class="staff-header" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #334155; padding-bottom:15px; flex-wrap: wrap; gap: 10px;">
                                    <h3 style="margin:0;">👥 ${t('comp_staff_header')} (${co.staff.length} / ${co.maxStaff})</h3>
                                    <div style="display: flex; gap: 10px; align-items: center;">
                                        <button id="btn-upgrade-office" ${upgradeDisabled} style="
                                            display: inline-flex; align-items: center; gap: 8px; padding: 10px 18px; border-radius: 10px; font-weight: 700; font-size: 0.85rem; border: none; cursor: ${upgradeDisabled ? 'not-allowed' : 'pointer'}; transition: all 0.2s;
                                            ${upgradeDisabled ? 'background: #334155; color: #64748b; opacity: 0.6;' : 'background: linear-gradient(135deg, #a855f7, #7c3aed); color: white; box-shadow: 0 4px 15px rgba(168, 85, 247, 0.3);'}
                                        ">
                                            <span style="font-size: 1.1rem;">🏢</span>
                                            ${t('comp_upgrade_office')}
                                        </button>
                                        
                                        <!-- Auto-Payroll Btn -->
                                        ${(() => {
                            const hasAuto = co.upgrades && co.upgrades.autoPayroll;
                            const canBuy = !hasAuto && co.maxStaff > 5 && co.cash >= 25000;
                            const btnStyle = hasAuto
                                ? 'background: linear-gradient(135deg, #10b981, #059669); color: white; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3); pointer-events: none;'
                                : (canBuy ? 'background: linear-gradient(135deg, #6366f1, #4f46e5); color: white; box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);' : 'background: #334155; color: #64748b; opacity: 0.6;');

                            // Show Price
                            let label = hasAuto ? t('comp_auto_payroll') : t('comp_hire_rrhh', { amount: formatCurrency(25000) });
                            let subLabel = '';

                            if (!hasAuto && !canBuy) {
                                if (co.maxStaff <= 5) {
                                    subLabel = t('req_business_level', { level: 2 });
                                } else if (co.cash < 25000) {
                                    subLabel = t('insufficient_funds');
                                }
                            }

                            return `
                                                <button id="btn-upgrade-payroll" ${!canBuy && !hasAuto ? 'disabled' : ''} style="display: inline-flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px; padding: 8px 18px; border-radius: 10px; font-weight: 700; font-size: 0.85rem; border: none; cursor: ${canBuy ? 'pointer' : 'default'}; transition: all 0.2s; ${btnStyle} min-height: 46px;">
                                                    <div style="display: flex; align-items: center; gap: 8px;">
                                                        <span style="font-size: 1.1rem;">${hasAuto ? '👥' : '📋'}</span>
                                                        <span>${label}</span>
                                                    </div>
                                                    ${subLabel ? `<span style="font-size: 0.7rem; opacity: 0.8; font-weight: 400;">${subLabel}</span>` : ''}
                                                </button>
                                            `;
                        })()}
                                    </div>
                                </div>
                                
                                <div id="comp-hire-tab" style="
                                    background: linear-gradient(145deg, rgba(56, 189, 248, 0.1), rgba(14, 165, 233, 0.05));
                                    border: 1px solid rgba(56, 189, 248, 0.3);
                                    border-radius: 16px;
                                    padding: 25px;
                                    margin-bottom: 30px;
                                ">
                                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
                                        <div style="
                                            width: 50px; height: 50px;
                                            background: linear-gradient(135deg, #38bdf8, #0ea5e9);
                                            border-radius: 14px;
                                            display: flex; align-items: center; justify-content: center;
                                            font-size: 1.5rem;
                                            box-shadow: 0 4px 15px rgba(56, 189, 248, 0.3);
                                        ">🧑‍💼</div>
                                        <div>
                                            <h3 style="margin: 0; color: #38bdf8; font-size: 1.1rem;">${t('comp_hiring_center')}</h3>
                                            <p style="margin: 4px 0 0 0; color: #64748b; font-size: 0.8rem;">${t('comp_staff_header')}: ${co.staff.length} / ${co.maxStaff}</p>
                                        </div>
                                    </div>
                                    
                                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 15px;">
                                        <div onclick="hireRole('Dependiente', 1200)" style="
                                            background: linear-gradient(145deg, #1e293b, #0f172a);
                                            border: 1px solid #334155;
                                            border-radius: 12px;
                                            padding: 20px;
                                            text-align: center;
                                            cursor: pointer;
                                            transition: all 0.2s;
                                        "
                                        onmouseover="this.style.borderColor='#38bdf8'; this.style.transform='translateY(-2px)'"
                                        onmouseout="this.style.borderColor='#334155'; this.style.transform='translateY(0)'"
                                        >
                                            <div style="font-size: 2rem; margin-bottom: 10px;">👤</div>
                                            <div style="font-weight: 700; color: #fff; margin-bottom: 5px;">${t('comp_role_clerk')}</div>
                                            <div style="font-size: 0.85rem; color: #94a3b8;">${t('comp_skill')}: 40%</div>
                                            <div style="
                                                margin-top: 12px;
                                                padding: 8px 15px;
                                                background: linear-gradient(135deg, #38bdf8, #0ea5e9);
                                                color: #0f172a;
                                                border-radius: 8px;
                                                font-weight: 700;
                                                font-size: 0.85rem;
                                            ">${t('comp_hire_per_month', { amount: formatCurrency(1200) })}</div>
                                        </div>
                                        
                                        <div onclick="${expertLocked ? '' : `hireRole('Experto', 1800)`}" style="
                                            background: linear-gradient(145deg, #1e293b, #0f172a);
                                            border: 1px solid ${expertLocked ? '#334155' : '#a855f7'};
                                            border-radius: 12px;
                                            padding: 20px;
                                            text-align: center;
                                            cursor: ${expertLocked ? 'not-allowed' : 'pointer'};
                                            transition: all 0.2s;
                                            opacity: ${expertLocked ? '0.6' : '1'};
                                        "
                                        ${expertLocked ? '' : `onmouseover="this.style.borderColor='#a855f7'; this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 15px rgba(168, 85, 247, 0.2)'"`}
                                        ${expertLocked ? '' : `onmouseout="this.style.borderColor='#a855f7'; this.style.transform='translateY(0)'; this.style.boxShadow='none'"`}
                                        >
                                            <div style="font-size: 2rem; margin-bottom: 10px;">${expertLocked ? '🔒' : '⭐'}</div>
                                            <div style="font-weight: 700; color: ${expertLocked ? '#64748b' : '#a855f7'}; margin-bottom: 5px;">${t('comp_role_expert')}</div>
                                            <div style="font-size: 0.85rem; color: #94a3b8;">${t('comp_skill')}: 80%</div>
                                            ${expertLocked ?
                            `<div style="margin-top: 12px; padding: 8px 15px; background: #334155; color: #64748b; border-radius: 8px; font-size: 0.75rem;">🔒 ${t('comp_expert_req')}</div>` :
                            `<div style="margin-top: 12px; padding: 8px 15px; background: linear-gradient(135deg, #a855f7, #7c3aed); color: #fff; border-radius: 8px; font-weight: 700; font-size: 0.85rem;">${t('comp_hire_per_month', { amount: formatCurrency(1800) })}</div>`
                        }
                                        </div>
                                    </div>
                                    
                                    ${expertLocked ? `<p style="color:#fbbf24; font-size:0.8rem; margin: 15px 0 0 0; text-align: center;">💡 ${t('comp_expert_hint')}</p>` : ''}
                                </div>
                                
                                <h4 style="color:#94a3b8; margin-bottom: 15px; border-bottom: 1px solid #334155; padding-bottom: 10px;">📋 ${t('comp_current_employees')}</h4>
                                <div class="staff-grid">
                                    ${staffHtml || `<div style="grid-column:1/-1; text-align:center; padding:40px; color:#64748b;">${t('comp_no_employees')}</div>`}
                                </div>
                            </div>
                        `;

                    document.getElementById('btn-upgrade-office').onclick = () => {
                        const r = CompanyModule.upgradeOffice();
                        if (r) { showGameAlert(r.message, r.success ? 'success' : 'error'); UI.updateJob(JobSystem); }
                    };

                    const btnPayroll = document.getElementById('btn-upgrade-payroll');
                    if (btnPayroll && !btnPayroll.disabled) {
                        btnPayroll.onclick = () => {
                            const res = CompanyModule.buyUpgrade('autoPayroll');
                            if (res) {
                                UI.showModal(res.success ? t('comp_hr_hired_title') : t('error'), res.message, [
                                    { text: t('great') || 'Excelente', style: 'primary', fn: () => UI.updateJob(JobSystem) }
                                ]);
                            }
                        };
                    }

                    window.hireRole = (role, sal) => {
                        // Validate Expert
                        if (role === 'Experto' && GameState.company.productLevel < 5) {
                            const lockMsg = `
                                        <div style="text-align:center;">
                                            <p style="margin-bottom:15px;">${t('comp_expert_locked_msg')}</p>
                                            <div style="background:rgba(251, 191, 36, 0.1); border:1px solid #fbbf24; border-radius:8px; padding:15px; margin:15px 0;">
                                                <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                                                    <span>${t('requirements')}:</span>
                                                    <strong style="color:#fbbf24;">${t('comp_expert_req').replace('Req: ', '')}</strong>
                                                </div>
                                                <div style="display:flex; justify-content:space-between;">
                                                    <span>${t('current_level') || 'Nivel Actual'}:</span>
                                                    <strong style="color:#f87171;">${t('comp_product_level')} ${GameState.company.productLevel}</strong>
                                                </div>
                                            </div>
                                            <p style="color:#94a3b8; font-size:0.9rem; margin-top:15px;">
                                                💡 ${t('comp_expert_hint')}
                                            </p>
                                            <p style="color:#94a3b8; font-size:0.9rem;">
                                                Ve a la pestaña <strong style="color:#38bdf8;">"Producto"</strong> y realiza inversiones hasta alcanzar el Nivel 5.
                                            </p>
                                        </div>
                                    `;
                            UI.showModal(t('comp_expert_locked_msg'), lockMsg, [
                                { text: t('understood') || 'Entendido', style: 'secondary', fn: null }
                            ]);
                            return;
                        }
                        const skill = role === 'Experto' ? 0.8 : 0.4;
                        const roleName = role === 'Experto' ? t('comp_role_expert') : t('comp_role_clerk');

                        // Name Modal
                        const nameInputHtml = `
                            <div style="text-align: center;">
                                <div style="font-size: 3rem; margin-bottom: 15px;">👤</div>
                                <p style="color: #94a3b8; margin-bottom: 20px;">
                                    ${t('comp_new_employee_desc')} <strong style="color: #38bdf8;">${roleName}</strong>
                                </p>
                                <input 
                                    type="text" 
                                    id="new-employee-name" 
                                    maxlength="10" 
                                    placeholder="${t('name_placeholder')}"
                                    style="
                                        width: 100%;
                                        padding: 12px 16px;
                                        font-size: 1.1rem;
                                        font-weight: 600;
                                        text-align: center;
                                        background: rgba(15, 23, 42, 0.8);
                                        border: 2px solid rgba(56, 189, 248, 0.3);
                                        border-radius: 12px;
                                        color: #fff;
                                        outline: none;
                                        transition: border-color 0.2s;
                                    "
                                    onfocus="this.style.borderColor='#38bdf8'"
                                    onblur="this.style.borderColor='rgba(56, 189, 248, 0.3)'"
                                />
                                <p style="color: #64748b; font-size: 0.75rem; margin-top: 8px;">Max 10 chars</p>
                            </div>
                        `;

                        // Hiring Modal
                        const themeColor = '#06b6d4'; // Cyan
                        const icon = '👥';

                        let hireMsg = `
                            <div style="text-align: center; margin-bottom: 20px;">
                                <div style="font-size: 4rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px ${themeColor}66); animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);">${icon}</div>
                                <h3 style="color: ${themeColor}; margin: 0; font-size: 1.6rem; text-shadow: 0 0 10px ${themeColor}4d; font-weight: 800; letter-spacing: 1px;">${t('comp_new_employee_title')}</h3>
                            </div>
                            
                            <div style="margin-bottom: 20px;">
                                ${nameInputHtml}
                            </div>
                            
                            <p style="text-align: center; color: #cbd5e1; font-size: 0.9rem; line-height: 1.5; margin: 0;">
                                ${t('comp_hire_info')}
                            </p>
                        `;

                        UI.showModal(' ', hireMsg, [
                            {
                                text: t('cancel'),
                                style: 'secondary',
                                fn: null
                            },
                            {
                                text: t('comp_hire_action'),
                                style: 'primary', // Cyan button style
                                fn: () => {
                                    const nameInput = document.getElementById('new-employee-name');
                                    let empName = (nameInput.value || '').trim().substring(0, 10) || roleName;

                                    const r = CompanyModule.hireStaff(role, sal, skill, empName);
                                    if (r) {
                                        if (!r.success) {
                                            UI.showModal(t('error'), r.message, [
                                                { text: t('close') || 'Cerrar', style: 'secondary', fn: null }
                                            ]);
                                        } else {
                                            UI.showToast(t('comp_employee_joined', { name: empName }), 'success');
                                        }
                                        UI.updateJob(JobSystem);
                                    }
                                }
                            }
                        ], true);

                        // Focus
                        setTimeout(() => {
                            const inp = document.getElementById('new-employee-name');
                            if (inp) inp.focus();
                        }, 100);
                    };
                    window.fireEmployee = (i) => {
                        if (confirm(t('comp_fire_confirm'))) {
                            CompanyModule.fireStaff(i);
                            UI.updateJob(JobSystem);
                        }
                    };
                    window.toggleAutoWage = (i) => {
                        if (GameState.company.staff[i]) GameState.company.staff[i].autoWage = !GameState.company.staff[i].autoWage;
                    }

                    window.updateEmployeeSalary = (employeeIndex) => {
                        const inputEl = document.getElementById(`salary-input-${employeeIndex}`);
                        const newSalary = parseInt(inputEl.value);

                        // Range Valid
                        if (isNaN(newSalary) || newSalary < 1000 || newSalary > 9000) {
                            UI.showModal(
                                '⚠️ ' + t('comp_salary_invalid'),
                                t('comp_salary_range_msg', { min: '<strong>1.000€</strong>', max: '<strong>9.000€</strong>' }),
                                [{
                                    text: t('understood') || 'Entendido', style: 'secondary', fn: () => {
                                        inputEl.value = GameState.company.staff[employeeIndex].salary;
                                    }
                                }]
                            );
                            return;
                        }

                        const employee = GameState.company.staff[employeeIndex];
                        const oldSalary = employee.salary;

                        // Warn: Low Wage
                        if (newSalary < employee.requiredWage) {
                            const warningMsg = `
                                        <div style="text-align:left;">
                                            <p style="margin-bottom:10px;">${t('comp_salary_low_desc').split('.')[0]}:</p>
                                            <div style="background:rgba(248, 113, 113, 0.1); border-left:3px solid #f87171; padding:10px; margin:10px 0; border-radius:4px;">
                                                <div style="display:flex; justify-content:space-between; margin-bottom:5px;">
                                                    <span>${t('salary')}:</span>
                                                    <strong>${formatCurrency(newSalary)}</strong>
                                                </div>
                                                <div style="display:flex; justify-content:space-between;">
                                                    <span>${t('requirements')}:</span>
                                                    <strong style="color:#f87171;">${formatCurrency(employee.requiredWage)}</strong>
                                                </div>
                                            </div>
                                            <p style="color:#fbbf24; margin-top:10px;">
                                                ⚠️ ${t('comp_salary_low_desc')}
                                            </p>
                                            <p style="margin-top:10px;">${t('continue_question') || '¿Continuar?'}</p>
                                        </div>
                                    `;

                            UI.confirmModal('⚠️ ' + t('comp_salary_low_warning'), warningMsg, () => {
                                // Confirmed
                                employee.salary = newSalary;

                                const diff = newSalary - oldSalary;
                                const diffText = diff >= 0 ? `+${formatCurrency(diff)}` : formatCurrency(diff);

                                UI.showModal(
                                    '⚠️ ' + t('comp_salary_reduced'),
                                    `<div style="text-align:center;">
                                                <p>${t('comp_salary_updated')} <strong style="color:#f87171;">${formatCurrency(newSalary)}</strong></p>
                                                <p style="color:#94a3b8; font-size:0.9rem;">(${diffText})</p>
                                                <p style="margin-top:15px; color:#fbbf24;">${t('comp_salary_demotivated')}</p>
                                            </div>`,
                                    [{
                                        text: t('understood') || 'Entendido', style: 'secondary', fn: () => {
                                            UI.updateJob(JobSystem);
                                            UI.updateHeader();
                                        }
                                    }]
                                );
                            }, () => {
                                // Cancel
                                inputEl.value = oldSalary;
                            });
                            return;
                        }

                        // Update
                        employee.salary = newSalary;

                        // Feedback
                        const diff = newSalary - oldSalary;
                        const diffText = diff >= 0 ? `+${formatCurrency(diff)}` : formatCurrency(diff);

                        if (diff > 0) {
                            UI.showModal(
                                '✅ ' + t('comp_salary_updated'),
                                `<div style="text-align:center;">
                                            <p>${t('comp_salary_updated')}: <strong style="color:#4ade80;">${formatCurrency(newSalary)}</strong></p>
                                            <p style="color:#94a3b8; font-size:0.9rem;">(${diffText})</p>
                                            <p style="margin-top:15px; color:#4ade80;">${t('comp_salary_motivated')}</p>
                                        </div>`,
                                [{
                                    text: t('great') || 'Perfecto', style: 'success', fn: () => {
                                        UI.updateJob(JobSystem);
                                        UI.updateHeader();
                                    }
                                }]
                            );
                        } else if (diff < 0) {
                            UI.showModal(
                                '⚠️ ' + t('comp_salary_reduced'),
                                `<div style="text-align:center;">
                                            <p>${t('comp_salary_updated')}: <strong style="color:#f87171;">${formatCurrency(newSalary)}</strong></p>
                                            <p style="color:#94a3b8; font-size:0.9rem;">(${diffText})</p>
                                            <p style="margin-top:15px; color:#fbbf24;">${t('comp_salary_demotivated')}</p>
                                        </div>`,
                                [{
                                    text: t('understood') || 'Entendido', style: 'secondary', fn: () => {
                                        UI.updateJob(JobSystem);
                                        UI.updateHeader();
                                    }
                                }]
                            );
                        } else {
                            UI.showModal(
                                'ℹ️ ' + t('comp_salary_confirmed'),
                                `<div style="text-align:center;">
                                            <p>${t('comp_salary_confirmed')}: <strong>${formatCurrency(newSalary)}</strong></p>
                                        </div>`,
                                [{
                                    text: 'OK', style: 'primary', fn: () => {
                                        UI.updateJob(JobSystem);
                                        UI.updateHeader();
                                    }
                                }]
                            );
                        }
                    }

                } else if (activeTab === 'product') {
                    const baseTicket = CompanyModule.businessTypes[co.typeId].baseTicket;
                    const currentPrice = co.customPrice || baseTicket;

                    const curProv = CompanyModule.providers[co.providerId];
                    const curActualQ = curProv.quality + ((co.productLevel - 1) * 0.05);
                    const neededGap = (co.reputation - 3.5) / 5;
                    const maxRequired = curActualQ - neededGap;
                    const allowedPct = (maxRequired - 0.7) / 2;
                    const equiPrice = baseTicket * (1 + allowedPct);

                    const stats = co.lastStats || { actualQuality: 0, requiredQuality: 0, targetRep: 3, repGrowth: 0 };
                    const qGap = stats.actualQuality - stats.requiredQuality;
                    const qColor = qGap >= 0 ? '#4ade80' : '#f87171';
                    const qText = qGap >= 0 ? t('comp_rep_rising') : t('comp_rep_falling');

                    let provOpts = '';
                    for (const [k, v] of Object.entries(CompanyModule.providers)) {
                        const isSel = co.providerId === k;
                        provOpts += `<div class="selection-card ${isSel ? 'selected' : ''}" onclick="setStrat('provider', '${k}')">
                                <strong>${t('prov_' + k)}</strong><br>${t('comp_cost_label')}: x${v.priceMod}<br>${t('comp_quality_label')}: ${(v.quality * 100).toFixed(0)}%
                            </div>`;
                    }

                    tabContent.innerHTML = `
                            <div class="comp-dash-container">
                                <div id="comp-product-dev-card" style="
                                    background: linear-gradient(145deg, rgba(74, 222, 128, 0.1), rgba(34, 197, 94, 0.05));
                                    border: 1px solid rgba(74, 222, 128, 0.3);
                                    border-radius: 16px;
                                    padding: 25px;
                                    margin-bottom: 30px;
                                ">
                                    <div style="display: flex; align-items: flex-start; gap: 20px; flex-wrap: wrap;">
                                        <div style="
                                            width: 60px; height: 60px;
                                            background: linear-gradient(135deg, #4ade80, #22c55e);
                                            border-radius: 16px;
                                            display: flex; align-items: center; justify-content: center;
                                            font-size: 1.8rem;
                                            box-shadow: 0 4px 15px rgba(74, 222, 128, 0.3);
                                            flex-shrink: 0;
                                        ">🔬</div>
                                        <div style="flex: 1; min-width: 200px;">
                                            <h3 style="margin: 0 0 8px 0; color: #4ade80; font-size: 1.1rem;">${t('comp_product_dev')}</h3>
                                            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                                                <span style="color: #fff; font-weight: 800; font-size: 1.5rem;">${t('comp_product_level')} ${co.productLevel}</span>
                                                <span style="color: #64748b; font-size: 0.85rem;">/ 10</span>
                                            </div>
                                            <div style="background: #0f172a; border-radius: 8px; height: 10px; overflow: hidden; margin-bottom: 12px;">
                                                <div style="width: ${co.productLevel * 10}%; height: 100%; background: linear-gradient(90deg, #4ade80, #22c55e); border-radius: 8px; transition: width 0.3s;"></div>
                                            </div>
                                            <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">
                                                ${t('comp_prod_level_desc1')} <strong style="color: #4ade80;">${t('comp_prod_level_desc2')}</strong> → ${t('comp_prod_level_desc3')}.
                                            </p>
                                        </div>
                                        ${(() => {
                            const productCost = co.productLevel * 5000;
                            const canAfford = co.cash >= productCost;
                            const isMaxLevel = co.productLevel >= 10;
                            const needsMoreStaff = co.productLevel >= co.staff.length;
                            const requiredStaff = co.productLevel + 1;

                            if (isMaxLevel) {
                                return `<div style="padding: 14px 28px; border-radius: 12px; background: #334155; color: #64748b; font-weight: 700; text-align: center;">${t('comp_product_max')}</div>`;
                            }

                            if (needsMoreStaff) {
                                return `<button disabled style="
                                                    background: #334155;
                                                    color: #64748b;
                                                    border: none;
                                                    padding: 14px 28px;
                                                    border-radius: 12px;
                                                    font-weight: 700;
                                                    font-size: 0.85rem;
                                                    cursor: not-allowed;
                                                    opacity: 0.8;
                                                    display: flex;
                                                    flex-direction: column;
                                                    align-items: center;
                                                    gap: 4px;
                                                ">
                                                    <span>🔒 ${t('req_staff_needs', { count: requiredStaff })}</span>
                                                    <span style="font-size: 0.7rem; color: #fbbf24;">${t('you_have_staff', { count: co.staff.length })} 👥</span>
                                                </button>`;
                            }

                            if (!canAfford) {
                                return `<button disabled style="
                                                    background: #334155;
                                                    color: #64748b;
                                                    border: none;
                                                    padding: 14px 28px;
                                                    border-radius: 12px;
                                                    font-weight: 700;
                                                    font-size: 0.85rem;
                                                    cursor: not-allowed;
                                                    opacity: 0.8;
                                                    display: flex;
                                                    flex-direction: column;
                                                    align-items: center;
                                                    gap: 4px;
                                                ">
                                                    <span>🔒 ${formatCurrency(productCost)}</span>
                                                    <span style="font-size: 0.7rem; color: #f87171;">${t('cash_label')}: ${formatCurrency(co.cash)}</span>
                                                </button>`;
                            }

                            return `<button onclick="investCo('product_dev')" style="
                                                background: linear-gradient(135deg, #4ade80, #22c55e);
                                                color: #0f172a;
                                                border: none;
                                                padding: 14px 28px;
                                                border-radius: 12px;
                                                font-weight: 800;
                                                font-size: 0.95rem;
                                                cursor: pointer;
                                                box-shadow: 0 4px 15px rgba(74, 222, 128, 0.3);
                                                transition: all 0.2s;
                                                white-space: nowrap;
                                            "
                                            onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(74, 222, 128, 0.4)'"
                                            onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(74, 222, 128, 0.3)'"
                                            >⬆️ ${t('comp_upgrade_action')} (${formatCurrency(productCost)})</button>`;
                        })()}
                                    </div>
                                </div>
                                
                                <div class="strategy-grid">
                                    <div id="comp-pricing-card" class="strat-card">
                                        <h4 class="staff-role-title" style="margin-bottom:15px;">${t('comp_pricing_strategy')}</h4>
                                        <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:5px;">${t('comp_market_base')}: ${formatCurrency(baseTicket)}</p>
                                        <p style="font-size:0.85rem; color:#facc15; margin-bottom:15px;">${t('comp_break_even')} (Rep. ${co.reputation.toFixed(1)}): <strong>${formatCurrency(equiPrice)}</strong></p>
                                        <div style="display:flex; align-items:center; gap:10px;">
                                            <input type="number" id="price-input" value="${currentPrice}" step="0.5" class="comp-input-sm" style="width:100px; text-align:center;">
                                            <button onclick="updatePrice()" class="btn-sm" style="background:#38bdf8; color:#0f172a; border:none; padding:6px 15px;">${t('comp_set_btn')}</button>
                                        </div>
                                    </div>
                                    <div id="comp-reputation-card" class="strat-card highlight">
                                        <h4 class="staff-role-title">${t('comp_rep_analysis')}</h4>
                                        <div class="analysis-box">
                                            <div class="data-row strong">
                                                <span>${t('comp_real_quality')}</span>
                                                <span>${(stats.actualQuality * 100).toFixed(0)}%</span>
                                            </div>
                                            <div class="data-row">
                                                <span>${t('comp_provider_base')}</span>
                                                <span>${(curProv.quality * 100).toFixed(0)}%</span>
                                            </div>
                                            <div class="data-row" style="margin-bottom:15px;">
                                                <span>${t('comp_rnd_bonus')} (${t('comp_product_level')} ${co.productLevel})</span>
                                                <span style="color:#4ade80;">+${((co.productLevel - 1) * 5).toFixed(0)}%</span>
                                            </div>

                                            <div class="data-row strong">
                                                <span>${t('comp_demand_price')}</span>
                                                <span>${(stats.requiredQuality * 100).toFixed(0)}%</span>
                                            </div>
                                            <div class="data-row">
                                                <span>${t('comp_market_base')}</span>
                                                <span>70%</span>
                                            </div>
                                            <div class="data-row">
                                                <span>${t('comp_price_adj')}</span>
                                                <span>${((stats.requiredQuality - 0.70) * 100).toFixed(0)}%</span>
                                            </div>
                                        </div>
                                        <div style="text-align:center; padding-top:15px;">
                                            <p style="margin-bottom:5px; color:#fbbf24;">${t('comp_current_rep')}: <strong>${co.reputation.toFixed(2)}</strong></p>
                                            <p style="margin-bottom:5px; color:${(stats.targetRep || 0) > co.reputation ? '#4ade80' : '#f87171'}">${t('comp_projected_rep')}: <strong>${stats.targetRep ? stats.targetRep.toFixed(2) : '3.50'}</strong></p>

                                        </div>
                                    </div>
                                </div>
                                
                                <div id="comp-providers-section">
                                    <h3 style="border-bottom:1px solid #334155; padding-bottom:10px; margin: 25px 0 20px 0;">${t('comp_providers_section')}</h3>
                                    <div class="options-grid">${provOpts}</div>
                                </div>
                            </div>
                        `;



                } else if (activeTab === 'marketing') {
                    const stats = co.lastStats || {};
                    const comp = stats.demandComposition || { base: 0, traffic: 1, marketing: 1, reputation: 1, organic: 1 };

                    let mktOpts = '';
                    const channelIcons = { 'none': '🚫', 'social': '📱', 'local': '📻', 'influencers': '⭐' };
                    const channelColors = { 'none': '#64748b', 'social': '#38bdf8', 'local': '#fbbf24', 'influencers': '#a855f7' };

                    for (const [k, v] of Object.entries(CompanyModule.marketingChannels)) {
                        const isSel = co.marketingChannel === k;
                        const icon = channelIcons[k] || '📢';
                        const color = channelColors[k] || '#94a3b8';

                        mktOpts += `
                            <div class="selection-card ${isSel ? 'selected' : ''}" onclick="setStrat('marketing', '${k}')" style="
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                text-align: center;
                                gap: 10px;
                                padding: 20px 15px;
                                min-height: 140px;
                                ${isSel ? `border-color: ${color}; box-shadow: 0 0 15px ${color}33;` : ''}
                            ">
                                <div style="font-size: 2rem; filter: ${isSel ? 'none' : 'grayscale(0.5)'};">${icon}</div>
                                <div style="font-weight: 700; color: ${isSel ? color : '#fff'}; font-size: 0.95rem;">${t('mkt_chan_' + k)}</div>
                                <div style="display: flex; flex-direction: column; gap: 4px; font-size: 0.8rem; color: #94a3b8;">
                                    <span>💰 ${v.cost === 0 ? t('comp_cost_free') : formatCurrency(v.cost) + (t('per_month') || '/mes')}</span>
                                    <span style="color: ${v.impact > 1 ? '#4ade80' : '#64748b'};">📈 ${t('comp_impact_label')} x${v.impact}</span>
                                </div>
                            </div>`;
                    }

                    const strategyHTML = `
                                <div class="comp-dash-container">
                                    <div id="comp-marketing-infra-card" style="
                                        background: linear-gradient(145deg, rgba(251, 191, 36, 0.1), rgba(245, 158, 11, 0.05));
                                        border: 1px solid rgba(251, 191, 36, 0.3);
                                        border-radius: 16px;
                                        padding: 25px;
                                        margin-bottom: 30px;
                                    ">
                                        <div style="display: flex; align-items: flex-start; gap: 20px; flex-wrap: wrap;">
                                            <div style="
                                                width: 60px; height: 60px;
                                                background: linear-gradient(135deg, #fbbf24, #f59e0b);
                                                border-radius: 16px;
                                                display: flex; align-items: center; justify-content: center;
                                                font-size: 1.8rem;
                                                box-shadow: 0 4px 15px rgba(251, 191, 36, 0.3);
                                                flex-shrink: 0;
                                            ">📣</div>
                                            <div style="flex: 1; min-width: 200px;">
                                                <h3 style="margin: 0 0 8px 0; color: #fbbf24; font-size: 1.1rem;">${t('comp_mkt_infra')}</h3>
                                                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                                                    <span style="color: #fff; font-weight: 800; font-size: 1.5rem;">${t('comp_mkt_level')} ${co.marketingLevel}</span>
                                                    <span style="color: #64748b; font-size: 0.85rem;">/ 10</span>
                                                </div>
                                                <div style="background: #0f172a; border-radius: 8px; height: 10px; overflow: hidden; margin-bottom: 12px;">
                                                    <div style="width: ${co.marketingLevel * 10}%; height: 100%; background: linear-gradient(90deg, #fbbf24, #f59e0b); border-radius: 8px; transition: width 0.3s;"></div>
                                                </div>
                                                <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">
                                                    ${t('comp_prod_level_desc1')} <strong style="color: #fbbf24;">${t('comp_mkt_level_effect')}</strong> → ${t('comp_mkt_level_benefit')}.
                                                </p>
                                            </div>
                                            ${(() => {
                            const mktCost = co.marketingLevel * 5000;
                            const canAfford = co.cash >= mktCost;
                            const isMaxLevel = co.marketingLevel >= 10;
                            const needsMoreStaff = co.marketingLevel >= co.staff.length;
                            const requiredStaff = co.marketingLevel + 1;

                            if (isMaxLevel) {
                                return `<div style="padding: 14px 28px; border-radius: 12px; background: #334155; color: #64748b; font-weight: 700; text-align: center;">${t('comp_product_max')}</div>`;
                            }

                            if (needsMoreStaff) {
                                return `<button disabled style="
                                                        background: #334155;
                                                        color: #64748b;
                                                        border: none;
                                                        padding: 14px 28px;
                                                        border-radius: 12px;
                                                        font-weight: 700;
                                                        font-size: 0.85rem;
                                                        cursor: not-allowed;
                                                        opacity: 0.8;
                                                        display: flex;
                                                        flex-direction: column;
                                                        align-items: center;
                                                        gap: 4px;
                                                    ">
                                                        <span>🔒 ${t('req_staff_needs', { count: requiredStaff })}</span>
                                                        <span style="font-size: 0.7rem; color: #fbbf24;">${t('you_have_staff', { count: co.staff.length })} 👥</span>
                                                    </button>`;
                            }

                            if (!canAfford) {
                                return `<button disabled style="
                                                        background: #334155;
                                                        color: #64748b;
                                                        border: none;
                                                        padding: 14px 28px;
                                                        border-radius: 12px;
                                                        font-weight: 700;
                                                        font-size: 0.85rem;
                                                        cursor: not-allowed;
                                                        opacity: 0.8;
                                                        display: flex;
                                                        flex-direction: column;
                                                        align-items: center;
                                                        gap: 4px;
                                                    ">
                                                        <span>🔒 ${formatCurrency(mktCost)}</span>
                                                        <span style="font-size: 0.7rem; color: #f87171;">${t('cash_label')}: ${formatCurrency(co.cash)}</span>
                                                    </button>`;
                            }

                            return `<button onclick="investCo('marketing_infra')" style="
                                                    background: linear-gradient(135deg, #fbbf24, #f59e0b);
                                                    color: #0f172a;
                                                    border: none;
                                                    padding: 14px 28px;
                                                    border-radius: 12px;
                                                    font-weight: 800;
                                                    font-size: 0.95rem;
                                                    cursor: pointer;
                                                    box-shadow: 0 4px 15px rgba(251, 191, 36, 0.3);
                                                    transition: all 0.2s;
                                                    white-space: nowrap;
                                                "
                                                onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(251, 191, 36, 0.4)'"
                                                onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(251, 191, 36, 0.3)'"
                                                >⬆️ ${t('comp_upgrade_action')} (${formatCurrency(mktCost)})</button>`;
                        })()}
                                        </div>
                                    </div>
                                    
                                    <div class="strategy-grid">
                                        <div id="comp-marketing-channels-section">
                                            <h3 style="border-bottom:1px solid #334155; padding-bottom:10px; margin: 0 0 15px 0;">${t('marketing_campaigns')}</h3>
                                            <div class="options-grid">${mktOpts}</div>
                                        </div>
                                        <div id="comp-marketing-analysis-card" class="strat-card">
                                            <h4 class="staff-role-title">🔍 ${t('comp_impact_label')}</h4>
                                            <div class="analysis-box">
                                                <div class="data-row">
                                                    <span>${t('impact_natural')}</span>
                                                    <span>${(comp.organic || 1).toFixed(1)}x</span>
                                                </div>
                                                <div class="data-row strong">
                                                    <span>${t('marketing')}</span>
                                                    <span>${(comp.marketing || 1).toFixed(1)}x</span>
                                                </div>
                                                <div class="data-row">
                                                    <span>${t('comp_reputation')}</span>
                                                    <span>${(comp.reputation || 1).toFixed(1)}x</span>
                                                </div>
                                                <div style="border-top:1px solid #334155; margin-top:10px; padding-top:10px; display:flex; justify-content:space-between; color:#fbbf24; font-weight:700;">
                                                    <span>${t('impact_total')}</span>
                                                    <span>${((comp.traffic || 1) * 100).toFixed(0)}%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;

                    tabContent.innerHTML = strategyHTML;


                } else if (activeTab === 'finance') {
                    tabContent.innerHTML = `
                        <div style="display: flex; flex-direction: column; gap: 20px;">
                            
                            <!-- Cash -->
                            <div id="comp-finance-movements-card" style="
                                background: linear-gradient(145deg, rgba(56, 189, 248, 0.1), rgba(14, 165, 233, 0.05));
                                border: 1px solid rgba(56, 189, 248, 0.3);
                                border-radius: 16px;
                                padding: 25px;
                            ">
                                <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
                                    <div style="
                                        width: 50px; height: 50px;
                                        background: linear-gradient(135deg, #38bdf8, #0ea5e9);
                                        border-radius: 14px;
                                        display: flex; align-items: center; justify-content: center;
                                        font-size: 1.5rem;
                                        box-shadow: 0 4px 15px rgba(56, 189, 248, 0.3);
                                    ">💰</div>
                                    <div>
                                        <h3 style="margin: 0; color: #38bdf8; font-size: 1.1rem;">${t('comp_cash_movements')}</h3>
                                        <p style="margin: 4px 0 0 0; color: #64748b; font-size: 0.8rem;">${t('comp_cash_movements_desc')}</p>
                                    </div>
                                </div>
                                
                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                                    <div style="background: rgba(15, 23, 42, 0.5); border-radius: 12px; padding: 15px;">
                                        <label style="display:block; margin-bottom:8px; color:#4ade80; font-weight: 600; font-size:0.9rem;">${t('comp_withdraw_label')}</label>
                                        <div style="display:flex; flex-wrap:wrap; gap:10px;">
                                            <input type="number" id="co-trans-amount" placeholder="${t('comp_amount_placeholder')}" style="
                                                flex: 1;
                                                background: #0f172a;
                                                border: 1px solid #334155;
                                                padding: 12px;
                                                border-radius: 8px;
                                                color: white;
                                                font-size: 1rem;
                                            ">
                                            <button id="btn-withdraw" style="
                                                background: linear-gradient(135deg, #4ade80, #22c55e);
                                                color: #0f172a;
                                                border: none;
                                                padding: 12px 20px;
                                                border-radius: 8px;
                                                font-weight: 700;
                                                cursor: pointer;
                                            ">${t('withdraw_btn')}</button>
                                        </div>
                                    </div>
                                    <div style="background: rgba(15, 23, 42, 0.5); border-radius: 12px; padding: 15px;">
                                        <label style="display:block; margin-bottom:8px; color:#a855f7; font-weight: 600; font-size:0.9rem;">${t('comp_deposit_label')}</label>
                                        <div style="display:flex; flex-wrap:wrap; gap:10px;">
                                            <input type="number" id="co-dep-amount" placeholder="${t('comp_amount_placeholder')}" style="
                                                flex: 1;
                                                background: #0f172a;
                                                border: 1px solid #334155;
                                                padding: 12px;
                                                border-radius: 8px;
                                                color: white;
                                                font-size: 1rem;
                                            ">
                                            <button id="btn-deposit" style="
                                                background: linear-gradient(135deg, #a855f7, #7c3aed);
                                                color: white;
                                                border: none;
                                                padding: 12px 20px;
                                                border-radius: 8px;
                                                font-weight: 700;
                                                cursor: pointer;
                                            ">${t('deposit_btn')}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Salary -->
                            <div id="comp-finance-salary-card" style="
                                background: linear-gradient(145deg, rgba(251, 191, 36, 0.1), rgba(245, 158, 11, 0.05));
                                border: 1px solid rgba(251, 191, 36, 0.3);
                                border-radius: 16px;
                                padding: 25px;
                            ">
                                <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
                                    <div style="
                                        width: 50px; height: 50px;
                                        background: linear-gradient(135deg, #fbbf24, #f59e0b);
                                        border-radius: 14px;
                                        display: flex; align-items: center; justify-content: center;
                                        font-size: 1.5rem;
                                        box-shadow: 0 4px 15px rgba(251, 191, 36, 0.3);
                                    ">💼</div>
                                    <div>
                                        <h3 style="margin: 0; color: #fbbf24; font-size: 1.1rem;">${t('comp_ceo_salary')}</h3>
                                        <p style="margin: 4px 0 0 0; color: #64748b; font-size: 0.8rem;">${t('comp_ceo_salary_desc')}</p>
                                    </div>
                                </div>
                                <div style="display:flex; flex-wrap:wrap; gap:10px; align-items: center;">
                                    <input type="number" id="co-ceo-salary" value="${co.ceoSalary || 0}" style="
                                        flex: 1; min-width: 120px;
                                        background: #0f172a;
                                        border: 1px solid #334155;
                                        padding: 12px;
                                        border-radius: 8px;
                                        color: white;
                                        font-size: 1.1rem;
                                        font-weight: 700;
                                        text-align: center;
                                    ">
                                    <span style="color: #64748b;">${t('per_month_unit') || t('per_month') || '€ / mes'}</span>
                                    <button id="btn-set-salary" style="
                                        background: linear-gradient(135deg, #fbbf24, #f59e0b);
                                        color: #0f172a;
                                        border: none;
                                        padding: 12px 25px;
                                        border-radius: 8px;
                                        font-weight: 700;
                                        cursor: pointer;
                                        margin-left: auto;
                                    ">${t('update_btn')}</button>
                                </div>
                            </div>
                            
                            <!-- Danger -->
                            <div id="comp-finance-danger-card" style="
                                background: linear-gradient(145deg, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.05));
                                border: 1px solid rgba(239, 68, 68, 0.3);
                                border-radius: 16px;
                                padding: 25px;
                            ">
                                <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
                                    <div style="
                                        width: 50px; height: 50px;
                                        background: linear-gradient(135deg, #ef4444, #dc2626);
                                        border-radius: 14px;
                                        display: flex; align-items: center; justify-content: center;
                                        font-size: 1.5rem;
                                        box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
                                    ">⚠️</div>
                                    <div>
                                        <h3 style="margin: 0; color: #ef4444; font-size: 1.1rem;">${t('danger_zone')}</h3>
                                        <p style="margin: 4px 0 0 0; color: #64748b; font-size: 0.8rem;">${t('irreversible_actions')}</p>
                                    </div>
                                </div>
                                <button onclick="sellCompanyAction()" style="
                                    background: transparent;
                                    color: #ef4444;
                                    border: 2px solid #ef4444;
                                    padding: 12px 25px;
                                    border-radius: 8px;
                                    font-weight: 700;
                                    cursor: pointer;
                                    transition: all 0.2s;
                                "
                                onmouseover="this.style.background='rgba(239, 68, 68, 0.1)'"
                                onmouseout="this.style.background='transparent'"
                                >${t('sell_company_exit')}</button>
                            </div>
                        </div>
            `;

                    document.getElementById('btn-withdraw').onclick = () => {
                        const val = parseInt(document.getElementById('co-trans-amount').value);
                        if (!val || val <= 0) return showGameAlert(t('msg_amt_invalid'), 'warning');
                        let r = CompanyModule.withdraw(val);
                        if (r) showGameAlert(r.message, r.success ? 'success' : 'error');
                        UI.updateJob(JobSystem);
                        UI.updateHeader();
                    };
                    document.getElementById('btn-deposit').onclick = () => {
                        const val = parseInt(document.getElementById('co-dep-amount').value);
                        if (!val || val <= 0) return showGameAlert(t('msg_amt_invalid'), 'warning');
                        let r = CompanyModule.deposit(val);
                        if (r) showGameAlert(r.message, r.success ? 'success' : 'error');
                        UI.updateJob(JobSystem);
                        UI.updateHeader();
                    };
                    document.getElementById('btn-set-salary').onclick = () => {
                        const val = parseInt(document.getElementById('co-ceo-salary').value) || 0;
                        co.ceoSalary = val;
                        showGameAlert(t('comp_ceo_salary_updated_msg', { amount: formatCurrency(val) }), 'success', t('comp_salary_updated_title'));
                        UI.updateJob(JobSystem);
                    };

                    window.sellCompanyAction = async () => {
                        const r = await CompanyModule.sellCompany();
                        if (r && r.success) {
                            showGameAlert(r.message, 'success');
                            UI.updateHeader();
                            UI.updateJob(JobSystem);
                            UI.updateDashboard();
                        }
                    };

                }
            }
        } catch (e) {
            console.error("UI Error:", e);
        }
    },

    checkStoryEvents() {

        // Event 1
        if (GameState.year === 1 && GameState.month === 4) {
            GameState.cash += 300;
            // Birthday Msg
            const themeColor = '#e879f9'; // Fuchsia
            const icon = '🎁';

            let bdayMsg = `
                        <div style = "text-align: center; margin-bottom: 20px;" >
                    <div style="font-size: 4rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px ${themeColor}66); animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);">${icon}</div>
                    <h3 style="color: ${themeColor}; margin: 0; font-size: 1.6rem; text-shadow: 0 0 10px ${themeColor}4d; font-weight: 800; letter-spacing: 1px;">${t('happy_birthday')}</h3>
                </div>

                <div style="background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.6)); border: 1px solid ${themeColor}4d; border-radius: 16px; padding: 25px; text-align: center; margin-bottom: 25px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                    <div style="font-size: 0.85rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px;">${t('family_gift_label')}</div>
                    <div style="font-size: 1.6rem; font-weight: 800; color: #f8fafc; margin-bottom: 15px;">+300,00 €</div>
                    
                    <div style="display: inline-block; background: ${themeColor}26; border: 1px solid ${themeColor}4d; padding: 10px 20px; border-radius: 30px;">
                        <span style="color: ${themeColor}; font-weight: 700; font-size: 1.1rem;">${t('cash_extra_label')}</span>
                    </div>
                </div>

                <p style="text-align: center; color: #cbd5e1; font-size: 1rem; line-height: 1.6; margin: 0; padding: 0 10px;">
                    ${t('family_gift_msg')}
                </p>
`;
            UI.showModal(' ', bdayMsg, [{ text: t('thanks_btn'), style: 'primary', fn: null }], true);
            UI.playCoinSound();
        }

        // Event 2A
        if (GameState.year === 2 && GameState.month === 4) {
            GameState.expensesUnlocked = true;
            // Notification removed as requested
        }

        // Event 2B
        if (!GameState.tutorialState.forceHousing &&
            !GameState.tutorialFlags.momKickedOut && // Prevent re-triggering
            ((GameState.year === 2 && GameState.month >= 4) || GameState.year > 2)) {

            GameState.cash += 300;
            GameState.tutorialFlags.momKickedOut = true; // Mark as done permanently

            UI.playCoinSound();

            // Tutorial Step 8
            TutorialSystem.step8_ForceHousing();
        }
    }
};

// Game Loop
function nextTurn() {
    // Tut Cleanup
    if (GameState.tutorialStep === 4) {
        TutorialSystem.hideOverlay();
        TutorialSystem.removeHighlights();
        TutorialSystem.unlockScroll();
    }

    StockMarket.nextTurn();
    RealEstate.nextTurn(); // Dynamic prices
    Bank.nextTurn();
    // JobSys (Moved)
    EducationModule.nextTurn(); // Study
    CompanyModule.nextTurn(); // Company

    // Expenses
    if (GameState.lifestyle) {
        GameState.expenses = LifestyleModule.calculateTotal();
    }

    const rentIncome = GameState.inventory.realEstate.reduce((acc, p) => acc + p.monthlyRent, 0);
    const netIncome = GameState.salary + rentIncome - GameState.expenses;
    GameState.cash += netIncome;

    // Tax Track
    if (!GameState.currentYearIncome) {
        GameState.currentYearIncome = { salary: 0, rental: 0, stocks: 0, company: 0 };
    }
    if (!GameState.currentYearExpenses) {
        GameState.currentYearExpenses = 0;
    }

    // Init Stats
    if (!GameState.lifetimeStats) {
        GameState.lifetimeStats = {
            totalIncome: { salary: 0, rental: 0, stocks: 0, company: 0 },
            totalExpenses: { lifestyle: 0, housing: 0, education: 0 },
            totalTaxesPaid: 0
        };
    }

    if (GameState.salary > 0) {
        GameState.currentYearIncome.salary += GameState.salary;
        GameState.lifetimeStats.totalIncome.salary += GameState.salary;
    }
    if (rentIncome > 0) {
        GameState.currentYearIncome.rental += rentIncome;
        GameState.lifetimeStats.totalIncome.rental += rentIncome;
    }
    // Lifetime Exp
    if (GameState.expenses > 0) {
        GameState.lifetimeStats.totalExpenses.lifestyle += GameState.expenses;
        GameState.currentYearExpenses += GameState.expenses;
    }
    // Stock Gains
    // Co Profits

    // Expropriation
    let expropriationTriggered = false;
    let expropriationAmount = 0;
    let expropriationPercent = 0;
    let expropriationMessage = '';

    // Tier 4
    if (GameState.cash >= 6000000) {
        expropriationPercent = 0.90;
        expropriationAmount = Math.floor(GameState.cash * expropriationPercent);
        GameState.cash -= expropriationAmount;
        expropriationTriggered = true;
        expropriationMessage = t('event_wealth_tax_6m');
    }
    // Tier 3
    else if (GameState.cash >= 3000000 && !GameState.expropriation3MDone) {
        expropriationPercent = 0.70;
        expropriationAmount = Math.floor(GameState.cash * expropriationPercent);
        GameState.cash -= expropriationAmount;
        GameState.expropriation3MDone = true;
        expropriationTriggered = true;
        expropriationMessage = t('event_wealth_tax_3m');
    }
    // Tier 2
    else if (GameState.cash >= 1000000 && !GameState.expropriation1MDone) {
        expropriationPercent = 0.60;
        expropriationAmount = Math.floor(GameState.cash * expropriationPercent);
        GameState.cash -= expropriationAmount;
        GameState.expropriation1MDone = true;
        expropriationTriggered = true;
        expropriationMessage = t('event_wealth_tax_1m');
    }
    // Tier 1
    else if (GameState.cash >= 500000 && !GameState.expropriation500kDone) {
        expropriationPercent = 0.50;
        expropriationAmount = Math.floor(GameState.cash * expropriationPercent);
        GameState.cash -= expropriationAmount;
        GameState.expropriation500kDone = true;
        expropriationTriggered = true;
        expropriationMessage = t('event_wealth_tax_500k');
    }

    // Show Modal
    if (expropriationTriggered) {
        setTimeout(() => {
            // Msg
            const themeColor = '#f97316'; // Orange/Amber for Fiscal Warning (Neutral/Caution)
            const icon = '🏛️';

            let exproMsg = `
    <div style = "text-align: center; margin-bottom: 20px;" >
                    <div style="font-size: 4rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px ${themeColor}66); animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);">${icon}</div>
                    <h3 style="color: ${themeColor}; margin: 0; font-size: 1.6rem; text-shadow: 0 0 10px ${themeColor}4d; font-weight: 800; letter-spacing: 1px;">${t('event_wealth_tax_title')}</h3>
                </div>

                <div style="background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.6)); border: 1px solid ${themeColor}4d; border-radius: 16px; padding: 25px; text-align: center; margin-bottom: 25px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                    <div style="font-size: 0.85rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px;">${t('tax_policy_label')}</div>
                    <div style="font-size: 1.6rem; font-weight: 800; color: #f87171; margin-bottom: 15px;">-${formatCurrency(expropriationAmount)}</div>
                    
                    <div style="display: inline-block; background: ${themeColor}26; border: 1px solid ${themeColor}4d; padding: 10px 20px; border-radius: 30px;">
                        <span style="color: ${themeColor}; font-weight: 700; font-size: 1.1rem;">${t('fiscal_contribution_label')}</span>
                    </div>
                </div>

                <p style="text-align: center; color: #cbd5e1; font-size: 1rem; line-height: 1.6; margin: 0; padding: 0 10px;">
                    ${expropriationMessage}
                    <br/><br/>
                    <small style="color:#64748b">${t('wealth_tax_desc')}</small>
                </p>
            `;

            UI.showModal(
                ' ',
                exproMsg,
                [{ text: t('understood_sad'), style: 'danger', fn: null }],
                true
            );
        }, 500);
    }

    JobSystem.nextTurn(); // Job Expiry

    // Tax Sys
    // Year 4 Warn
    if (GameState.year === 4 && GameState.month === 1 && !GameState.taxWarningShown) {
        GameState.taxWarningShown = true;
        setTimeout(() => {
            // Warn Msg
            const themeColor = '#3b82f6'; // Blue
            const icon = '🏛️'; // Bank/Institution icon

            let taxMsg = `
                <div style="text-align: center; margin-bottom: 20px;">
                    <div style="font-size: 4rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px ${themeColor}66); animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);">${icon}</div>
                    <h3 style="color: ${themeColor}; margin: 0; font-size: 1.6rem; text-shadow: 0 0 10px ${themeColor}4d; font-weight: 800; letter-spacing: 1px;">${t('tax_authority')}</h3>
                </div>

                <div style="background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.6)); border: 1px solid ${themeColor}4d; border-radius: 16px; padding: 25px; margin-bottom: 25px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                    <p style="text-align: center; color: #e2e8f0; font-size: 1rem; margin-bottom: 20px;">
                        ${t('tax_intro')}
                    </p>
                    
                    <div style="background: rgba(15, 23, 42, 0.5); border-radius: 12px; overflow: hidden; border: 1px solid #334155;">
                        <div style="display: grid; grid-template-columns: 1fr 100px; padding: 10px 15px; background: rgba(59, 130, 246, 0.1); border-bottom: 1px solid #334155; font-weight: 700; color: #93c5fd; font-size: 0.9rem;">
                            <span>${t('income_bracket')}</span>
                            <span style="text-align: right;">${t('tax_rate')}</span>
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 100px; padding: 8px 15px; border-bottom: 1px solid #334155; font-size: 0.9rem; color: #cbd5e1;">
                            <span>&lt; 10.000€</span>
                            <span style="text-align: right; color: #4ade80;">10%</span>
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 100px; padding: 8px 15px; border-bottom: 1px solid #334155; font-size: 0.9rem; color: #cbd5e1;">
                            <span>10.000 - 25.000€</span>
                            <span style="text-align: right; color: #facc15;">15%</span>
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 100px; padding: 8px 15px; border-bottom: 1px solid #334155; font-size: 0.9rem; color: #cbd5e1;">
                            <span>25.000 - 50.000€</span>
                            <span style="text-align: right; color: #fb923c;">25%</span>
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 100px; padding: 8px 15px; border-bottom: 1px solid #334155; font-size: 0.9rem; color: #cbd5e1;">
                            <span>50.000 - 100.000€</span>
                            <span style="text-align: right; color: #f87171;">35%</span>
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 100px; padding: 8px 15px; font-size: 0.9rem; color: #cbd5e1;">
                            <span>&gt; 100.000€</span>
                            <span style="text-align: right; color: #ef4444; font-weight: 700;">45%</span>
                        </div>
                    </div>
                </div>

                <p style="text-align: center; color: #94a3b8; font-size: 0.9rem; margin: 0; font-style: italic;">
                    "${t('tax_reminder')}" 
                </p>
            `;

            UI.showModal(
                ' ',
                taxMsg,
                [{ text: t('understood'), style: 'primary', fn: null }],
                true
            );
        }, 800);
    }

    // Declaration
    if (GameState.year >= 4 && GameState.month === 5) {
        if (!GameState.previousYearIncome) {
            GameState.previousYearIncome = { salary: 0, rental: 0, stocks: 0, company: 0 };
        }

        const totalIncome =
            GameState.previousYearIncome.salary +
            GameState.previousYearIncome.rental +
            GameState.previousYearIncome.stocks +
            GameState.previousYearIncome.company;

        // Deductions
        const totalExpenses = GameState.previousYearExpenses || 0;
        const deductibleExpenses = Math.floor(totalExpenses * 0.75);
        const taxableBase = Math.max(0, totalIncome - deductibleExpenses);

        // Tax Rate
        function calculateTaxRate(income) {
            if (income < 10000) return 0.10;
            if (income < 25000) return 0.15;
            if (income < 50000) return 0.25;
            if (income < 100000) return 0.35;
            return 0.45; // 100k or more
        }

        const taxRate = calculateTaxRate(taxableBase);
        const taxAmount = Math.floor(taxableBase * taxRate);

        if (totalIncome > 0) {
            // GameState.cash -= taxAmount; // Removed immediate deduction
            // GameState.lifetimeStats.totalTaxesPaid += taxAmount; // Moved to callback

            const breakdown = `
                <div style="text-align: center; margin-bottom: 20px;">
                    <div style="font-size: 3rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px rgba(248, 113, 113, 0.4));">📋</div>
                    <div style="font-size: 0.85rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 2px;">${t('tax_declaration')}</div>
                </div>
                
                <div style="background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.5)); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 16px; padding: 20px; margin-bottom: 20px;">
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px;">
                        <span style="font-size: 1.3rem;">📊</span>
                        <span style="color: #38bdf8; font-weight: 700; font-size: 1rem;">${t('income_year')} ${GameState.year - 1}</span>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                        <div style="background: rgba(15, 23, 42, 0.5); border-radius: 10px; padding: 12px; text-align: center;">
                            <div style="font-size: 1.5rem; margin-bottom: 5px;">💼</div>
                            <div style="font-size: 0.75rem; color: #94a3b8; margin-bottom: 3px;">${t('tax_src_salary')}</div>
                            <div style="font-size: 1rem; color: #4ade80; font-weight: 700;">${formatCurrency(GameState.previousYearIncome.salary)}</div>
                        </div>
                        <div style="background: rgba(15, 23, 42, 0.5); border-radius: 10px; padding: 12px; text-align: center;">
                            <div style="font-size: 1.5rem; margin-bottom: 5px;">🏠</div>
                            <div style="font-size: 0.75rem; color: #94a3b8; margin-bottom: 3px;">${t('tax_src_rental')}</div>
                            <div style="font-size: 1rem; color: #4ade80; font-weight: 700;">${formatCurrency(GameState.previousYearIncome.rental)}</div>
                        </div>
                        <div style="background: rgba(15, 23, 42, 0.5); border-radius: 10px; padding: 12px; text-align: center;">
                            <div style="font-size: 1.5rem; margin-bottom: 5px;">📈</div>
                            <div style="font-size: 0.75rem; color: #94a3b8; margin-bottom: 3px;">${t('tax_src_stocks')}</div>
                            <div style="font-size: 1rem; color: #4ade80; font-weight: 700;">${formatCurrency(GameState.previousYearIncome.stocks)}</div>
                        </div>
                        <div style="background: rgba(15, 23, 42, 0.5); border-radius: 10px; padding: 12px; text-align: center;">
                            <div style="font-size: 1.5rem; margin-bottom: 5px;">🏢</div>
                            <div style="font-size: 0.75rem; color: #94a3b8; margin-bottom: 3px;">${t('tax_src_company')}</div>
                            <div style="font-size: 1rem; color: #4ade80; font-weight: 700;">${formatCurrency(GameState.previousYearIncome.company)}</div>
                        </div>
                    </div>
                </div>
                
                <div style="background: linear-gradient(145deg, rgba(74, 222, 128, 0.1), rgba(34, 197, 94, 0.05)); border: 1px solid rgba(74, 222, 128, 0.3); border-radius: 12px; padding: 15px; margin-bottom: 15px; text-align: center;">
                    <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: #94a3b8; margin-bottom: 5px; padding: 0 20px;">
                        <span>${t('gross_income')}:</span>
                        <span>${formatCurrency(totalIncome)}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: #fbbf24; margin-bottom: 10px; padding: 0 20px;">
                        <span>${t('tax_expenses')} (75%):</span>
                        <span>-${formatCurrency(deductibleExpenses)}</span>
                    </div>
                    <div style="border-top: 1px solid rgba(255,255,255,0.1); margin: 5px 0;"></div>
                    <div style="font-size: 0.8rem; color: #e2e8f0; margin-bottom: 5px;">${t('taxable_base')}</div>
                    <div style="font-size: 1.5rem; color: #4ade80; font-weight: 800; text-shadow: 0 0 15px rgba(74, 222, 128, 0.3);">${formatCurrency(taxableBase)}</div>
                    <div style="font-size: 0.75rem; color: #94a3b8; margin-top: 5px;">${t('tax_bracket_label')} <span style="color: #facc15; font-weight: 600;">${(taxRate * 100).toFixed(0)}%</span></div>
                </div>
                
                <div style="background: linear-gradient(145deg, rgba(248, 113, 113, 0.15), rgba(239, 68, 68, 0.05)); border: 1px solid rgba(248, 113, 113, 0.4); border-radius: 12px; padding: 15px; text-align: center;">
                    <div style="font-size: 0.8rem; color: #f87171; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 1px;">${t('to_pay')}</div>
                    <div style="font-size: 1.8rem; color: #f87171; font-weight: 800; text-shadow: 0 0 20px rgba(248, 113, 113, 0.4);">${formatCurrency(taxAmount)}</div>
                </div>
            `;

            UI.showModal(
                `📋 ${t('tax_return_year')} ` + (GameState.year - 1),
                breakdown,
                [{
                    text: `💸 ${t('pay_taxes')} `,
                    style: 'danger',
                    fn: () => {
                        // Confirm Pay
                        showGameAlert(
                            t('tax_paid_msg', { amount: formatCurrency(taxAmount) }),
                            'warning',
                            t('tax_paid_title'),
                            () => {
                                GameState.cash -= taxAmount;
                                GameState.lifetimeStats.totalTaxesPaid += taxAmount;
                                UI.updateHeader();
                                UI.updateDashboard();
                                UI.playLossSound();
                                UI.showTurnFeedback(-taxAmount);
                            },
                            true // Blocking = true
                        );
                    }
                }],
                true
            );
        }
    }


    GameState.month++;

    // Check Events
    UI.checkStoryEvents();

    if (GameState.month > 12) {
        GameState.month = 1;
        GameState.year++;
        GameState.age++; // Birthday!

        // Endgame
        if (GameState.year > 50) {
            setTimeout(() => showEndgameModal(), 500);
            return; // Stop game progression
        }

        // Assign new annual stock targets stockMarket.assignAnnualTargets();

        // Reset annual income tracking
        if (!GameState.previousYearIncome) {
            GameState.previousYearIncome = { salary: 0, rental: 0, stocks: 0, company: 0 };
        }
        GameState.previousYearIncome = { ...GameState.currentYearIncome };
        GameState.currentYearIncome = { salary: 0, rental: 0, stocks: 0, company: 0 };

        // Reset annual expenses tracking gameState.previousYearExpenses = GameState.currentYearExpenses || 0;
        GameState.currentYearExpenses = 0;
    }



    // Auto-save
    if (GameState.month % 3 === 0) {
        const saveRes = PersistenceModule.saveGame();
    }

    // Regen Listings
    if (GameState.month % 6 === 0) {
        RealEstate.generateListings();
    }

    // History & Chart
    const nw = updateNetWorth();

    // Milestones
    const milestones = [5000, 50000, 100000, 500000, 1000000];
    if (!GameState.achievedMilestones) GameState.achievedMilestones = []; // Old Save Safety

    milestones.forEach(m => {
        if (nw >= m && !GameState.achievedMilestones.includes(m)) {
            GameState.achievedMilestones.push(m);
            UI.triggerConfetti();
            UI.showToast(t('milestone_title'), t('milestone_msg', { amount: formatCurrency(m) }), 'success');
            // Add a small bonus? No, visual only for now.
        }
    });

    // Unlock Stock
    // Init Unlocked
    if (GameState.stockUnlocked === undefined) {
        GameState.stockUnlocked = false;
    }


    if (nw >= 30000 && !GameState.stockUnlocked) {
        GameState.stockUnlocked = true;
        // Celebration
        setTimeout(() => {
            TutorialSystem.stepStock_Unlock();
        }, 500);
    }

    // Unlock Bank
    // Init Bank
    if (GameState.bankUnlocked === undefined) {
        GameState.bankUnlocked = false;
    }

    if (!GameState.bankUnlocked && GameState.year >= 3 && GameState.month >= 6) {
        GameState.bankUnlocked = true;
        // Bank Tut
        setTimeout(() => {
            TutorialSystem.stepBank_Unlock();
        }, 600);
    }

    let totalDebt = 0;
    GameState.loans.forEach(l => totalDebt += l.remainingBalance);
    let assetsOnly = nw + totalDebt; // Roughly

    GameState.history.netWorth.push(nw);
    GameState.history.cash.push(GameState.cash);
    GameState.history.debt.push(totalDebt);
    GameState.history.assets.push(assetsOnly);
    GameState.history.labels.push(`${GameState.month}/${GameState.year}`);

    // Max Points
    if (GameState.history.netWorth.length > 50) {
        GameState.history.netWorth.shift();
        GameState.history.cash.shift();
        GameState.history.debt.shift();
        GameState.history.assets.shift();
        GameState.history.labels.shift();
    }

    // Bankruptcy Sys
    if (GameState.cash < 0) {
        // Increment Cnt
        GameState.consecutiveBankruptcyTurns = (GameState.consecutiveBankruptcyTurns || 0) + 1;

        if (GameState.consecutiveBankruptcyTurns >= 3) {
            // Game Over
            setTimeout(() => {
                showBankruptcyModal();
            }, 100);
            return; // Stop rendering updates behind modal
        }

        // Warn
        showGameAlert(
            `
            <div style="text-align: center;">
                <div style="font-size: 3rem; margin-bottom: 15px;">💸</div>
                <p style="color: #ef4444; font-weight: 700; font-size: 1.1rem; margin-bottom: 10px;">${t('bankruptcy_negative_balance')}</p>
                <p style="color: #cbd5e1; margin-bottom: 15px;">
                    ${t('bankruptcy_warnings', { count: GameState.consecutiveBankruptcyTurns })}
                    <br>
                    ${t('bankruptcy_liquidity_req')}
                </p>
                <p style="color: #94a3b8; font-size: 0.9rem; font-style: italic;">
                    ${t('bankruptcy_consecutive_msg')}
                </p>
            </div>
            `,
            'error',
            t('bankruptcy_alert_title')
        );
    } else {
        // Reset Cnt
        GameState.consecutiveBankruptcyTurns = 0;
    }

    UI.render();
}





function showBankruptcyModal() {
    const stats = GameState.lifetimeStats;

    // Calc Stats
    let totalDebt = 0;
    GameState.loans.forEach(l => totalDebt += l.remainingBalance);
    const liquidationValue = GameState.netWorth; // Simplified view

    const summary = `
                <div style="text-align: center; padding: 15px; max-height: 75vh; overflow-y: auto;">
                    <div style="font-size: 3rem; margin-bottom: 10px;">💸☠️</div>
                    <h2 style="color: #ef4444; margin: 0 0 10px 0; font-size: 1.6rem; text-transform: uppercase; letter-spacing: 1px;">${t('bankruptcy_title')}</h2>
                    
                    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 12px; padding: 15px; margin-bottom: 20px;">
                        <p style="color: #fca5a5; margin: 0 0 10px 0; font-size: 1rem; font-weight: 600;">
                            ${t('bankruptcy_liquidity_out')}
                        </p>
                        <p style="color: #cbd5e1; margin: 0; font-size: 0.9rem;">
                            ${t('bankruptcy_seizure_msg')}
                        </p>
                    </div>

                    <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid #334155; border-radius: 12px; padding: 15px; margin-bottom: 20px;">
                         <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                            <span style="color: #94a3b8;">${t('final_net_worth')}:</span>
                            <strong style="color: #f87171;">${formatCurrency(liquidationValue)}</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: #94a3b8;">${t('total_debt')}:</span>
                            <strong style="color: #f87171;">-${formatCurrency(totalDebt)}</strong>
                        </div>
                    </div>

                    <p style="color: #94a3b8; font-size: 0.85rem; font-style: italic;">
                        ${t('bankruptcy_quote')}
                    </p>
                    
                    <button onclick="location.reload()" style="
                        background: linear-gradient(135deg, #ef4444, #b91c1c);
                        color: white; border: none; padding: 12px 25px; border-radius: 8px;
                        font-weight: 700; font-size: 1rem; cursor: pointer; margin-top: 15px;
                        box-shadow: 0 4px 6px -1px rgba(239, 68, 68, 0.3);
                        width: 100%;
                    ">
                        ${t('try_again_btn')}
                    </button>
                </div>
    `;

    // Create Modal
    const overlay = document.createElement('div');
    overlay.className = 'game-alert-overlay';
    overlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0, 0, 0, 0.85); backdrop-filter: blur(8px);
        display: flex; justify-content: center; align-items: center; z-index: 9999;
        animation: fadeIn 0.3s ease-out;
    `;

    overlay.innerHTML = `
        <div style="
            background: linear-gradient(145deg, #1e293b, #0f172a);
            border: 1px solid #ef4444; box-shadow: 0 0 30px rgba(239, 68, 68, 0.15);
            border-radius: 20px; width: 90%; max-width: 500px;
            animation: slideUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative; overflow: hidden;
        ">
            ${summary}
        </div>
    `;

    document.body.appendChild(overlay);
}

// Init App
try {
    const setupEventListeners = () => {
        // Next Turn
        const nextBtns = document.querySelectorAll('#next-turn-btn, #dashboard-next-btn');
        nextBtns.forEach(btn => {
            btn.onclick = () => {
                const prevCash = GameState.cash;
                nextTurn();
                const diff = GameState.cash - prevCash;
                UI.showTurnFeedback(diff);
            };
        });

        // Stock
        const btnBuy = document.getElementById('btn-buy');
        if (btnBuy) btnBuy.onclick = () => {
            const symbol = document.getElementById('stock-select').value;
            const amount = parseInt(document.getElementById('trade-amount').value);
            const feedback = document.getElementById('trade-feedback');
            const res = StockMarket.buyStock(symbol, amount);
            feedback.textContent = res.message;
            feedback.className = res.success ? 'success-msg' : 'error-msg';
            if (res.success) {
                UI.updateMarket();
                UI.updateHeader();
            }
        };

        const btnSell = document.getElementById('btn-sell');
        if (btnSell) btnSell.onclick = () => {
            const symbol = document.getElementById('stock-select').value;
            const amount = parseInt(document.getElementById('trade-amount').value);
            const feedback = document.getElementById('trade-feedback');
            const res = StockMarket.sellStock(symbol, amount);
            feedback.textContent = res.message;
            feedback.className = res.success ? 'success-msg' : 'error-msg';
            if (res.success) {
                UI.updateMarket();
                UI.updateHeader();
            }
        };

        // Bank
        const btnLoan = document.getElementById('btn-request-loan');
        if (btnLoan) btnLoan.onclick = () => {
            const amount = parseInt(document.getElementById('loan-amount').value);
            const years = parseInt(document.getElementById('loan-years').value);
            const feedback = document.getElementById('bank-feedback');
            const res = Bank.takeLoan(amount, years);
            feedback.textContent = res.message;
            feedback.className = res.success ? 'success-msg' : 'error-msg';
            if (res.success) {
                UI.updateBank(Bank);
                UI.updateHeader();
            }
        };

        // Slider
        const slider = document.getElementById('loan-years');
        if (slider) {
            slider.oninput = (e) => {
                document.getElementById('loan-years-display').textContent = t('loan_years_label', { years: e.target.value });
                Bank.calculateLoanPayment();
            };
            document.getElementById('loan-amount').oninput = () => Bank.calculateLoanPayment();
        }

        // Job
        const btnPromote = document.getElementById('btn-promote');
        if (btnPromote) btnPromote.onclick = () => {
            const res = JobSystem.promote();
            showGameAlert(res.message, res.success ? 'success' : 'error');
            if (res.success) {
                UI.updateJob(JobSystem);
                UI.updateHeader();
            }
        };

        // Modal Close
        document.querySelectorAll('.close').forEach(btn => {
            btn.onclick = () => {
                btn.closest('.modal').style.display = 'none';
            };
        });

        // Outside Click
        window.onclick = (event) => {
            if (event.target.classList.contains('modal')) {
                event.target.style.display = "none";
            }
        };
    };

    const initGame = () => {
        document.getElementById('app').style.display = 'block';
        StockMarket.init();
        UI.render();
        UI.setupLanguageSwitcher();
        UI.updateStaticTranslations(); // Translate Static
        setupEventListeners();

        // Sync Bottom Nav
        document.querySelectorAll('.b-nav-item').forEach(btn => {
            btn.onclick = () => {
                const view = btn.dataset.view;

                // Lock Bank
                if (view === 'bank' && !GameState.bankUnlocked) {
                    UI.showView(view); // Show background
                    showGameAlert(
                        `${t('access_restricted')}<br>${t('access_restricted_bank')}`,
                        'warning',
                        null,
                        () => UI.showView('dashboard'),
                        true
                    );
                    return;
                }

                // Lock Stock
                if (view === 'market' && !GameState.stockUnlocked) {
                    UI.showView(view); // Show background
                    showGameAlert(
                        `${t('access_restricted')}<br>${t('access_restricted_stock')}`,
                        'warning',
                        null,
                        () => UI.showView('dashboard'),
                        true
                    );
                    return;
                }

                UI.showView(view);
            };
        });

        // Sync Nav
        document.getElementById('main-nav').querySelectorAll('.nav-btn').forEach(btn => {
            const originalClick = btn.onclick; // Preserve Click
            btn.onclick = () => {
                const view = btn.dataset.view;

                // Lock bank until unlocked
                if (view === 'bank' && !GameState.bankUnlocked) {
                    UI.showView(view); // Show background
                    showGameAlert(
                        `${t('access_restricted')}<br>${t('access_restricted_bank')}`,
                        'warning',
                        null,
                        () => UI.showView('dashboard'),
                        true
                    );
                    return;
                }

                // Lock stock until unlocked via 25K MILESTONE
                if (view === 'market' && !GameState.stockUnlocked) {
                    UI.showView(view); // Show background
                    showGameAlert(
                        `${t('access_restricted')}<br>${t('access_restricted_stock')}`,
                        'warning',
                        null,
                        () => UI.showView('dashboard'),
                        true
                    );
                    return;
                }

                UI.showView(view);

                // Sync Bottom Nav
                document.querySelectorAll('.b-nav-item').forEach(b => {
                    b.classList.remove('active');
                    if (b.dataset.view === view) b.classList.add('active');
                });
            }
        });

        // Force Init
        setTimeout(() => {
            try {
                UI.updateJob(JobSystem);
                UI.updateDashboard();

                // Check if game should already be at endgame (prevents playing past endgame after loading)
                if (GameState.year > 50) {
                    setTimeout(() => showEndgameModal(), 500);
                }
            } catch (e) {
                console.error('Async Init Error:', e);
            }
        }, 100);
    };

    // Startup
    if (PersistenceModule.checkSave()) {
        const allSaves = PersistenceModule.getAllSaves();

        const renderSaveSlot = (save) => {
            const dateStr = save.savedAt ? new Date(save.savedAt).toLocaleString('es-ES', {
                day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit'
            }) : '';
            return `
                <div class="load-slot-card" data-key="${save.key}">
                    <div class="slot-badge ${save.isAuto ? 'auto' : 'manual'}">${save.isAuto ? '🔄 Auto' : '💾'}</div>
                    <div class="slot-player">🎮 ${save.playerName}</div>
                    <div class="slot-details">
                        <span class="slot-money">💰 ${formatCurrency(save.cash)}</span>
                        <span>📅 ${t('year')} ${save.year}, ${t('month')} ${save.month}</span>
                    </div>
                    ${dateStr ? `<div class="slot-date">⏰ ${dateStr}</div>` : ''}
                    <button class="btn-load-slot" data-key="${save.key}">▶️ ${t('load_game_btn')}</button>
                </div>
            `;
        };

        const msg = `
            <style>
                .custom-modal-box h3 { display: none !important; }
                .custom-modal-box .modal-body { padding: 0 !important; }
                .custom-modal-box { max-width: 440px !important; border-radius: 24px !important; overflow: hidden !important; border: 1px solid #334155 !important; }
                .welcome-back-container { padding: 25px; text-align: center; background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%); border-radius: 24px; max-height: 80vh; overflow-y: auto; }
                .welcome-icon { font-size: 3.5rem; margin-bottom: 10px; display: block; animation: pulse 2s ease-in-out infinite; filter: drop-shadow(0 0 15px rgba(56, 189, 248, 0.4)); }
                @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }
                .welcome-title { color: #38bdf8; margin: 0 0 8px; font-size: 1.5rem; font-weight: 800; text-shadow: 0 0 20px rgba(56, 189, 248, 0.4); white-space: nowrap; }
                .welcome-subtitle { color: #94a3b8; font-size: 0.9rem; margin-bottom: 20px; }
                .saves-list { display: flex; flex-direction: column; gap: 10px; margin-bottom: 15px; }
                .load-slot-card { background: rgba(30, 41, 59, 0.8); border: 1px solid #334155; border-radius: 12px; padding: 12px; text-align: left; position: relative; transition: border-color 0.2s; }
                .load-slot-card:hover { border-color: #38bdf8; }
                .slot-badge { position: absolute; top: -6px; right: 10px; background: #1e293b; padding: 2px 8px; border-radius: 8px; font-size: 0.65rem; font-weight: 600; }
                .slot-badge.auto { color: #4ade80; border: 1px solid #4ade80; }
                .slot-badge.manual { color: #38bdf8; border: 1px solid #38bdf8; }
                .slot-player { font-size: 1rem; font-weight: 700; color: #fbbf24; margin-bottom: 5px; }
                .slot-details { display: flex; gap: 12px; font-size: 0.8rem; color: #e2e8f0; margin-bottom: 4px; flex-wrap: wrap; }
                .slot-money { color: #4ade80; font-weight: 600; }
                .slot-date { font-size: 0.7rem; color: #64748b; margin-bottom: 8px; }
                .btn-load-slot { width: 100%; padding: 8px; background: linear-gradient(135deg, #4ade80, #22c55e); border: none; border-radius: 6px; color: #0f172a; font-weight: 700; cursor: pointer; font-size: 0.85rem; }
                .btn-load-slot:hover { transform: scale(1.02); }
                .btn-new-game { width: 100%; padding: 12px; font-size: 0.95rem; font-weight: 600; border-radius: 10px; border: 2px solid #475569; cursor: pointer; background: transparent; color: #94a3b8; transition: all 0.2s; }
                .btn-new-game:hover { border-color: #f87171; color: #f87171; }
                @media (max-width: 480px) { .welcome-back-container { padding: 20px 15px; } .welcome-icon { font-size: 2.5rem; } }
            </style>
            <div class="welcome-back-container">
                <span class="welcome-icon">👋</span>
                <h2 class="welcome-title">${t('welcome_back_title')}</h2>
                <p class="welcome-subtitle">${t('welcome_back_subtitle')}</p>
                <div class="saves-list">${allSaves.map(renderSaveSlot).join('')}</div>
                <button id="btn-new-game-saved" class="btn-new-game">🔄 ${t('new_game_btn')}</button>
            </div>
        `;

        UI.showModal(t('welcome_back_title'), msg, [], true);

        document.querySelectorAll('.btn-load-slot').forEach(btn => {
            btn.onclick = () => {
                const key = btn.dataset.key;
                document.querySelector('.custom-modal-overlay').remove();
                PersistenceModule.loadFromSlot(key);
                initGame();
            };
        });

        document.getElementById('btn-new-game-saved').onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            // First close the welcome modal
            const welcomeModal = document.querySelector('.custom-modal-overlay');
            if (welcomeModal) welcomeModal.remove();

            // Confirmation
            const confirmMsg = `
                <style>
                    .custom-modal-box h3 { display: none !important; }
                    .custom-modal-box .modal-body { padding: 0 !important; }
                    .custom-modal-box { max-width: 400px !important; border-radius: 20px !important; overflow: hidden !important; border: 1px solid #334155 !important; }
                    .confirm-container { padding: 30px; text-align: center; background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%); }
                    .confirm-icon { font-size: 3rem; margin-bottom: 15px; display: block; }
                    .confirm-title { color: #f87171; margin: 0 0 10px; font-size: 1.3rem; font-weight: 700; }
                    .confirm-text { color: #94a3b8; font-size: 0.95rem; line-height: 1.5; margin-bottom: 25px; }
                    .confirm-buttons { display: flex; gap: 12px; }
                    .btn-confirm-cancel { flex: 1; padding: 12px; background: transparent; border: 2px solid #475569; border-radius: 10px; color: #94a3b8; font-weight: 600; cursor: pointer; transition: all 0.2s; }
                    .btn-confirm-cancel:hover { border-color: #64748b; color: #e2e8f0; }
                    .btn-confirm-action { flex: 1; padding: 12px; background: linear-gradient(135deg, #f87171, #ef4444); border: none; border-radius: 10px; color: white; font-weight: 700; cursor: pointer; transition: all 0.2s; }
                    .btn-confirm-action:hover { transform: scale(1.02); }
                    .custom-modal-footer { display: none !important; }
                </style>
                <div class="confirm-container">
                    <span class="confirm-icon">⚠️</span>
                    <h2 class="confirm-title">${t('msg_new_game_title')}</h2>
                    <p class="confirm-text">${t('msg_new_game_warning')}</p>
                    <div class="confirm-buttons">
                        <button id="btn-confirm-cancel" class="btn-confirm-cancel">${t('cancel')}</button>
                        <button id="btn-confirm-action" class="btn-confirm-action">${t('confirm')}</button>
                    </div>
                </div>
            `;

            UI.showModal(' ', confirmMsg, [], true);

            document.getElementById('btn-confirm-cancel').onclick = () => location.reload();
            document.getElementById('btn-confirm-action').onclick = () => {
                document.querySelector('.custom-modal-overlay').remove();
                promptNewUser(initGame);
            };
        };

    } else {
        promptNewUser(initGame);
    }

    // Update language
    function updateWelcomeScreen() {
        const title = document.querySelector('.profile-title');
        if (title) title.textContent = t('tutorial_welcome');

        const studyText = document.querySelector('.welcome-text-study');
        if (studyText) studyText.innerHTML = `<strong style="color: #818cf8;">${t('welcome_study')}</strong> ${t('welcome_study_desc')}`;

        const workText = document.querySelector('.welcome-text-work');
        if (workText) workText.innerHTML = `<strong style="color: #4ade80;">${t('welcome_work')}</strong> ${t('welcome_work_desc')}`;

        const investText = document.querySelector('.welcome-text-invest');
        if (investText) investText.innerHTML = `<strong style="color: #facc15;">${t('welcome_invest')}</strong> ${t('welcome_invest_desc')}`;

        const businessText = document.querySelector('.welcome-text-business');
        if (businessText) businessText.innerHTML = `<strong style="color: #fbbf24;">${t('welcome_business')}</strong> ${t('welcome_business_desc')}`;

        const nameLabel = document.querySelector('.welcome-label-name');
        if (nameLabel) nameLabel.textContent = t('your_name');

        const nameInput = document.getElementById('start-player-name');
        if (nameInput) nameInput.placeholder = t('name_placeholder');

        const startBtn = document.getElementById('btn-start-game-custom');
        if (startBtn) startBtn.innerHTML = `🎮 ${t('start_adventure')}`;

        const tagline = document.querySelector('.profile-tagline');
        if (tagline) tagline.innerHTML = `💰 ${t('tagline')}`;

        // Update language button highlighting
        document.querySelectorAll('#welcome-lang-selector .lang-btn').forEach(btn => {
            const lang = btn.dataset.lang;
            if (lang === I18n.currentLang) {
                btn.style.border = '2px solid #4ade80';
                btn.style.background = 'rgba(74, 222, 128, 0.2)';
            } else {
                btn.style.border = '2px solid rgba(255,255,255,0.3)';
                btn.style.background = 'rgba(255,255,255,0.1)';
            }
        });
    }
    // Make it globally accessible
    window.updateWelcomeScreen = updateWelcomeScreen;

    function promptNewUser(callback) {
        const msg = `
                    <style>
                        .custom-modal-footer, .modal-actions { display: none !important; }
                        .custom-modal-box h3 { display: none !important; }
                        .custom-modal-box .modal-body { padding: 0 !important; }
                        .custom-modal-box { 
                            max-width: 420px !important; 
                            border-radius: 24px !important;
                            overflow-y: auto !important;
                            max-height: 90vh !important;
                            border: 1px solid #334155 !important;
                        }
                        .profile-create-container {
                            padding: 30px;
                            text-align: center;
                            background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
                            border-radius: 24px;
                            overflow: hidden;
                        }
                        .profile-rocket {
                            font-size: 4rem;
                            margin-bottom: 10px;
                            display: block;
                            animation: rocketBounce 2s ease-in-out infinite;
                        }
                        @keyframes rocketBounce {
                            0%, 100% { transform: translateY(0); }
                            50% { transform: translateY(-10px); }
                        }
                        .profile-title {
                            color: #38bdf8;
                            margin: 0 0 20px 0;
                            font-size: clamp(1.1rem, 5vw, 1.6rem);
                            font-weight: 800;
                            text-shadow: 0 0 20px rgba(56, 189, 248, 0.4);
                            line-height: 1.3;
                        }
                        .profile-features {
                            background: rgba(56, 189, 248, 0.1);
                            border: 1px solid rgba(56, 189, 248, 0.2);
                            border-radius: 12px;
                            padding: 15px;
                            margin-bottom: 20px;
                            text-align: left;
                        }
                        .profile-features p {
                            color: #e2e8f0;
                            font-size: 0.9rem;
                            line-height: 1.8;
                            margin: 0;
                        }
                        .profile-input-group {
                            margin-bottom: 20px;
                        }
                        .profile-input-group label {
                            display: block;
                            color: #94a3b8;
                            font-size: 0.85rem;
                            margin-bottom: 8px;
                            text-align: left;
                        }
                        .profile-input-group input {
                            width: 100%;
                            padding: 14px;
                            background: #0f172a;
                            border: 2px solid #334155;
                            color: white;
                            border-radius: 10px;
                            font-size: 1rem;
                            transition: border-color 0.2s;
                            box-sizing: border-box;
                        }
                        .profile-input-group input:focus {
                            outline: none;
                            border-color: #38bdf8;
                        }
                        .profile-start-btn {
                            width: 100%;
                            padding: 16px;
                            font-size: 1.1rem;
                            font-weight: 700;
                            border-radius: 10px;
                            border: none;
                            cursor: pointer;
                            background: linear-gradient(135deg, #38bdf8, #0ea5e9);
                            color: #0f172a;
                            margin-bottom: 15px;
                            transition: transform 0.1s, box-shadow 0.2s;
                            box-shadow: 0 4px 15px rgba(56, 189, 248, 0.3);
                        }
                        .profile-start-btn:hover {
                            transform: translateY(-2px);
                            box-shadow: 0 6px 20px rgba(56, 189, 248, 0.4);
                        }
                        .profile-start-btn:active {
                            transform: scale(0.98);
                        }
                        .profile-tagline {
                            color: #fbbf24;
                            font-size: 0.85rem;
                            font-style: italic;
                            margin: 0;
                        }
                        /* Mobile */
                        @media (max-width: 480px) {
                            .custom-modal-box {
                                margin: 10px !important;
                                max-height: 90vh !important;
                            }
                            .profile-create-container {
                                padding: 20px 15px;
                            }
                            .profile-rocket {
                                font-size: 3rem;
                            }
                            .profile-title {
                                font-size: 1.1rem;
                            }
                            .profile-features p {
                                font-size: 0.85rem;
                                line-height: 1.6;
                            }
                            .profile-input-group input {
                                padding: 12px;
                            }
                            .profile-start-btn {
                                padding: 14px;
                                font-size: 1rem;
                            }
                        }
                    </style>
                    <div class="profile-create-container">
                        <span class="profile-rocket">🚀</span>
                        <h2 class="profile-title">${t('tutorial_welcome')}</h2>
                        
                        <!-- Lang Selector -->
                        <div id="welcome-lang-selector" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; margin-bottom: 15px;">
                            <button onclick="I18n.setLanguage('es'); setTimeout(function(){ if(window.updateWelcomeScreen) window.updateWelcomeScreen(); }, 50);" class="lang-btn" data-lang="es" title="Español" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.3); border-radius: 8px; padding: 5px 10px; cursor: pointer; font-size: 1.1rem; transition: all 0.2s;">🇪🇸</button>
                            <button onclick="I18n.setLanguage('en'); setTimeout(function(){ if(window.updateWelcomeScreen) window.updateWelcomeScreen(); }, 50);" class="lang-btn" data-lang="en" title="English" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.3); border-radius: 8px; padding: 5px 10px; cursor: pointer; font-size: 1.1rem; transition: all 0.2s;">🇬🇧</button>
                            <button onclick="I18n.setLanguage('de'); setTimeout(function(){ if(window.updateWelcomeScreen) window.updateWelcomeScreen(); }, 50);" class="lang-btn" data-lang="de" title="Deutsch" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.3); border-radius: 8px; padding: 5px 10px; cursor: pointer; font-size: 1.1rem; transition: all 0.2s;">🇩🇪</button>
                            <button onclick="I18n.setLanguage('zh'); setTimeout(function(){ if(window.updateWelcomeScreen) window.updateWelcomeScreen(); }, 50);" class="lang-btn" data-lang="zh" title="中文" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.3); border-radius: 8px; padding: 5px 10px; cursor: pointer; font-size: 1.1rem; transition: all 0.2s;">🇨🇳</button>
                            <button onclick="I18n.setLanguage('ru'); setTimeout(function(){ if(window.updateWelcomeScreen) window.updateWelcomeScreen(); }, 50);" class="lang-btn" data-lang="ru" title="Русский" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.3); border-radius: 8px; padding: 5px 10px; cursor: pointer; font-size: 1.1rem; transition: all 0.2s;">🇷🇺</button>
                        </div>
                        
                        <div class="profile-features">
                            <div style="display: grid; gap: 10px;">
                                <div style="display: flex; align-items: center; gap: 12px; background: rgba(129, 140, 248, 0.1); border: 1px solid rgba(129, 140, 248, 0.3); border-radius: 10px; padding: 10px 14px;">
                                    <span style="font-size: 1.5rem;">📚</span>
                                    <span class="welcome-text-study" style="color: #e2e8f0; font-size: 0.9rem;"><strong style="color: #818cf8;">${t('welcome_study')}</strong> ${t('welcome_study_desc')}</span>
                                </div>
                                <div style="display: flex; align-items: center; gap: 12px; background: rgba(74, 222, 128, 0.1); border: 1px solid rgba(74, 222, 128, 0.3); border-radius: 10px; padding: 10px 14px;">
                                    <span style="font-size: 1.5rem;">💼</span>
                                    <span class="welcome-text-work" style="color: #e2e8f0; font-size: 0.9rem;"><strong style="color: #4ade80;">${t('welcome_work')}</strong> ${t('welcome_work_desc')}</span>
                                </div>
                                <div style="display: flex; align-items: center; gap: 12px; background: rgba(250, 204, 21, 0.1); border: 1px solid rgba(250, 204, 21, 0.3); border-radius: 10px; padding: 10px 14px;">
                                    <span style="font-size: 1.5rem;">📈</span>
                                    <span class="welcome-text-invest" style="color: #e2e8f0; font-size: 0.9rem;"><strong style="color: #facc15;">${t('welcome_invest')}</strong> ${t('welcome_invest_desc')}</span>
                                </div>
                                <div style="display: flex; align-items: center; gap: 12px; background: rgba(251, 191, 36, 0.1); border: 1px solid rgba(251, 191, 36, 0.3); border-radius: 10px; padding: 10px 14px;">
                                    <span style="font-size: 1.5rem;">🏢</span>
                                    <span class="welcome-text-business" style="color: #e2e8f0; font-size: 0.9rem;"><strong style="color: #fbbf24;">${t('welcome_business')}</strong> ${t('welcome_business_desc')}</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="profile-input-group">
                            <label class="welcome-label-name">${t('your_name')}</label>
                            <input type="text" id="start-player-name" placeholder="${t('name_placeholder')}" maxlength="20">
                        </div>
                        
                        <button id="btn-start-game-custom" class="profile-start-btn">🎮 ${t('start_adventure')}</button>
                        
                        <p class="profile-tagline">💰 ${t('tagline')}</p>
                    </div>
                `;

        UI.showModal(t('create_profile'), msg, [], true);

        // Remove Footer
        const overlay = document.querySelector('.custom-modal-overlay');
        if (overlay) {
            const footer = overlay.querySelector('.custom-modal-footer, .modal-actions');
            if (footer) footer.style.display = 'none';
        }

        // Attach Handler
        document.getElementById('btn-start-game-custom').onclick = () => {
            const name = document.getElementById('start-player-name').value || 'Inversor';
            GameState.playerName = name;

            // Cheat
            if (name === 'SergioGuapo') {
                GameState.cash = 200000;
            }

            // Close Modal
            const overlay = document.querySelector('.custom-modal-overlay');
            if (overlay) overlay.remove();

            callback();
            setTimeout(() => UI.startInitialTutorial(), 500);
        };
    }

} catch (e) {
    console.error('Critical Error loading save, resetting:', e);
    // Reset
    promptNewUser(initGame);
}

