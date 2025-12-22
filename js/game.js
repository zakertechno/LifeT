/*******************************************************
 * ENDGAME SYSTEM (YEAR 50)
 *******************************************************/
function showEndgameModal() {
    const stats = GameState.lifetimeStats;

    // Calculate real estate profit
    const realEstateProfit = (stats.realEstate && stats.realEstate.totalSales && stats.realEstate.totalPurchases)
        ? stats.realEstate.totalSales - stats.realEstate.totalPurchases
        : 0;

    const totalIncome = stats.totalIncome.salary + stats.totalIncome.rental + stats.totalIncome.stocks + stats.totalIncome.company + realEstateProfit;
    const totalExpenses = stats.totalExpenses.lifestyle + stats.totalExpenses.housing + stats.totalExpenses.education;

    const summary = `
                <div style="text-align: center; padding: 15px; max-height: 75vh; overflow-y: auto;">
                    <div style="font-size: 2.5rem; margin-bottom: 5px;">☠️</div>
                    <h2 style="color: #f87171; margin: 0 0 3px 0; font-size: 1.4rem;">Has Muerto - Año 50</h2>
                    <p style="color: #4ade80; margin: 5px 0; font-size: 1rem; font-weight: 600;">
                        Has llegado a tener un patrimonio de ${formatCurrency(GameState.netWorth)}
                    </p>
                    <p style="color: #38bdf8; margin: 0 0 12px 0; font-size: 0.95rem; font-weight: bold;">
                        ¡ENHORABUENA!
                    </p>
                    <p style="color: #94a3b8; margin: 0 0 12px 0; font-size: 0.85rem;">
                        Gracias por jugar, pero seguro que podrías haberlo hecho mejor...
                    </p>
                    
                    <div style="background: rgba(30, 41, 59, 0.5); border: 1px solid #334155; border-radius: 8px; padding: 10px; margin: 8px auto; max-width: 400px;">
                        <h3 style="color: #4ade80; margin: 0 0 8px 0; font-size: 0.9rem; font-weight: 600;">💰 Ingresos Totales de tu Vida</h3>
                        <div style="display: flex; justify-content: space-between; margin: 4px 0; font-size: 0.8rem;">
                            <span>💼 Salarios:</span>
                            <strong style="color: #4ade80;">${formatCurrency(stats.totalIncome.salary)}</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin: 4px 0; font-size: 0.8rem;">
                            <span>🏠 Alquileres:</span>
                            <strong style="color: #4ade80;">${formatCurrency(stats.totalIncome.rental)}</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin: 4px 0; font-size: 0.8rem;">
                            <span>📈 Bolsa:</span>
                            <strong style="color: #4ade80;">${formatCurrency(stats.totalIncome.stocks)}</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin: 4px 0; font-size: 0.8rem;">
                            <span>🏢 Empresas:</span>
                            <strong style="color: #4ade80;">${formatCurrency(stats.totalIncome.company)}</strong>
                        </div>
                        ${(stats.realEstate && stats.realEstate.propertiesSold > 0) ? `
                        <div style="margin: 8px 0; padding: 8px; background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 6px;">
                            <div style="font-size: 0.75rem; color: #38bdf8; font-weight: 600; margin-bottom: 4px;">
                                🏘️ Operaciones Inmobiliarias (${stats.realEstate.propertiesSold} inmuebles)
                            </div>
                            <div style="display: flex; justify-content: space-between; margin: 2px 0; font-size: 0.75rem; color: #94a3b8;">
                                <span>Precio Compra:</span>
                                <span>${formatCurrency(stats.realEstate.totalPurchases || 0)}</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin: 2px 0; font-size: 0.75rem; color: #94a3b8;">
                                <span>Precio Venta:</span>
                                <span>${formatCurrency(stats.realEstate.totalSales || 0)}</span>
                            </div>
                            <div style="height: 1px; background: rgba(56, 189, 248, 0.3); margin: 4px 0;"></div>
                            <div style="display: flex; justify-content: space-between; margin: 2px 0; font-size: 0.8rem; font-weight: 600;">
                                <span style="color: #38bdf8;">Beneficio Neto:</span>
                                <strong style="color: ${realEstateProfit >= 0 ? '#4ade80' : '#f87171'};">
                                    ${formatCurrency(realEstateProfit)} 
                                    ${stats.realEstate.totalPurchases > 0 ? `(${((realEstateProfit / stats.realEstate.totalPurchases) * 100).toFixed(1)}%)` : ''}
                                </strong>
                            </div>
                        </div>
                        ` : ''}
                        <div style="height: 1px; background: #334155; margin: 6px 0;"></div>
                        <div style="display: flex; justify-content: space-between; margin: 4px 0; font-size: 0.9rem; font-weight: 600;">
                            <span>Total Ingresos:</span>
                            <strong style="color: #4ade80;">${formatCurrency(totalIncome)}</strong>
                        </div>
                    </div>
                    
                    <div style="background: rgba(30, 41, 59, 0.5); border: 1px solid #334155; border-radius: 8px; padding: 10px; margin: 8px auto; max-width: 400px;">
                        <h3 style="color: #f87171; margin: 0 0 8px 0; font-size: 0.9rem; font-weight: 600;">💸 Gastos Totales de tu Vida</h3>
                        <div style="display: flex; justify-content: space-between; margin: 4px 0; font-size: 0.8rem;">
                            <span>🛍️ Estilo de Vida:</span>
                            <strong style="color: #f87171;">${formatCurrency(stats.totalExpenses.lifestyle)}</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin: 4px 0; font-size: 0.8rem;">
                            <span>🏠 Vivienda:</span>
                            <strong style="color: #f87171;">${formatCurrency(stats.totalExpenses.housing)}</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin: 4px 0; font-size: 0.8rem;">
                            <span>🎓 Formación:</span>
                            <strong style="color: #f87171;">${formatCurrency(stats.totalExpenses.education)}</strong>
                        </div>
                        <div style="height: 1px; background: #334155; margin: 6px 0;"></div>
                        <div style="display: flex; justify-content: space-between; margin: 4px 0; font-size: 0.9rem; font-weight: 600;">
                            <span>Total Gastos:</span>
                            <strong style="color: #f87171;">${formatCurrency(totalExpenses)}</strong>
                        </div>
                    </div>
                    
                    <div style="background: rgba(30, 41, 59, 0.5); border: 1px solid #334155; border-radius: 8px; padding: 10px; margin: 8px auto; max-width: 400px;">
                        <h3 style="color: #fbbf24; margin: 0 0 8px 0; font-size: 0.9rem; font-weight: 600;">📋 Impuestos Pagados</h3>
                        <div style="display: flex; justify-content: space-between; margin: 4px 0; font-size: 0.9rem; font-weight: 600;">
                            <span>Total Pagado al Estado:</span>
                            <strong style="color: #fbbf24;">${formatCurrency(stats.totalTaxesPaid)}</strong>
                        </div>
                    </div>
                    
                    <p style="color: #38bdf8; margin: 12px 0 0 0; font-size: 0.9rem;">
                        ¿Por qué no lo intentas de nuevo tomando otras decisiones?
                    </p>
                </div>
            `;

    UI.showModal(
        '🎮 Fin del Juego',
        summary,
        [{ text: '🔄 Reiniciar Juego', style: 'primary', fn: resetGame }],
        true
    );
}

function resetGame() {
    UI.showModal('⚠️ Reiniciar Juego',
        `<div style="text-align:center;">
            <div style="font-size:3rem; margin-bottom:10px;">🤯</div>
            <p style="color:#cbd5e1; margin-bottom:15px; font-size:1.1rem;">¿Estás seguro de que quieres reiniciar?</p>
            <div style="background:rgba(239, 68, 68, 0.1); border:1px solid rgba(239, 68, 68, 0.3); padding:15px; border-radius:10px;">
                <p style="color:#ef4444; font-weight:800; margin:0; text-transform:uppercase;">⛔ SE PERDERÁN TODOS LOS DATOS</p>
            </div>
        </div>
        `,
        [
            { text: 'Cancelar', style: 'secondary', fn: null },
            {
                text: 'SÍ, BORRAR TODO', style: 'danger', fn: () => {
                    localStorage.removeItem('gameState');
                    localStorage.removeItem('playerName');
                    location.reload();
                }
            }
        ], true
    );
}

/*******************************************************
 * STATE
 *******************************************************/
/**
 * Global game state object containing all player data.
 * @typedef {Object} GameStateType
 * @property {string} playerName - Player's display name
 * @property {number} month - Current month (1-12)
 * @property {number} year - Current game year (1-50)
 * @property {number} cash - Available cash in euros
 * @property {number} netWorth - Total net worth (assets - liabilities)
 * @property {number} salary - Monthly salary from job
 * @property {number} expenses - Monthly lifestyle expenses
 * @property {Object} inventory - Player's assets (stocks, realEstate)
 * @property {Array} loans - Active loans
 * @property {Object} lifetimeStats - Statistics for endgame summary
 */
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
    currentGigs: [], // Persist monthly gigs
    isStudying: false,
    currentCourse: null, // { name: 'FP Informática', remainingMonths: 12, costMonthly: 0 }
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

    // TUTORIAL SYSTEM - Obligatory guided tutorial
    tutorialStep: 0,  // 0=start, 1-8=steps, 99=completed
    tutorialFlags: {
        educationChosen: false,
        wentToWorkFirst: false,
        acceptedFirstGig: false,
        completedFirstDegree: false,
        wentToWorkAfterDegree: false,
        acceptedFirstRealJob: false,
        independent: false,
        tutorialComplete: false,
        momKickedOut: false // New permanent flag
    },

    // ANNUAL INCOME TRACKING FOR TAXES
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

    // EXPROPRIATION TRACKING
    expropriation500kDone: false,
    expropriation1MDone: false,
    expropriation3MDone: false,

    // LIFETIME STATISTICS (for endgame summary)
    lifetimeStats: {
        totalIncome: { salary: 0, rental: 0, stocks: 0, company: 0 },
        totalExpenses: { lifestyle: 0, housing: 0, education: 0 },
        totalTaxesPaid: 0,
        realEstate: {
            totalPurchases: 0,  // Total spent buying properties that were sold
            totalSales: 0,      // Total received from selling properties
            propertiesSold: 0   // Count of properties sold
        }
    },

    // Job Persistence
    currentCareerPath: 'none',
    monthsInCurrentJob: 0,
    monthsSinceLastRaise: 0,

    // Story & Unlocks
    totalMonths: 0,
    expensesUnlocked: false,
    stockUnlocked: false, // Unlocked when netWorth >= 30000
    bankUnlocked: false, // Unlocked when Year 3, Month 6
    // Cache for performance optimization
    _netWorthCache: null,
    _netWorthCacheTurn: -1,
};

/**
 * Calculate net worth with caching to avoid redundant calculations.
 * Cache invalidates when month/year changes.
 * @param {boolean} forceRecalc - Force recalculation ignoring cache
 * @returns {number} Current net worth
 */
function updateNetWorth(forceRecalc = false) {
    const currentTurn = GameState.year * 12 + GameState.month;

    // Return cached value if valid and not forced
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

    // Update cache
    GameState._netWorthCache = GameState.netWorth;
    GameState._netWorthCacheTurn = currentTurn;

    return GameState.netWorth;
}

/*******************************************************
 * CHART MODULE (Simple Canvas Header)
 *******************************************************/
/*******************************************************
 * CHART MODULE (Premium Chart.js)
 *******************************************************/
const ChartModule = {
    instance: null,

    drawChart(canvasId, history, visibility = { netWorth: true, cash: true, debt: true }) {
        const ctx = document.getElementById(canvasId).getContext('2d');

        // Destroy previous to avoid overlay
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
                label: 'Efectivo',
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
                label: 'Deuda',
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
                        display: false // Hide default legend, we'll use custom
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
                            callback: (val) => formatCurrency(val, 0) // Force integer
                        }
                    }
                }
            }
        });
    },
    drawStockChart(canvasId, stock, timeframe) {
        const ctx = document.getElementById(canvasId).getContext('2d');
        if (this.instanceStock) {
            this.instanceStock.destroy();
        }

        let data = stock.history || [];
        let labels = Array.from({ length: data.length }, (_, i) => i);

        // Limit data
        if (timeframe !== 999) { // 999 = MAX
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
                    y: { display: false } // Minimalist sparkline style or show ticks? User said "historial", imply detail.
                    // Let's show Y ticks for readability
                }
            }
        });
    }
};

/*******************************************************
 * PERSISTENCE MODULE
 *******************************************************/
const PersistenceModule = {
    SAVE_KEY_AUTO: 'inversion_game_auto',
    SAVE_KEY_SLOT1: 'inversion_game_slot1',
    SAVE_KEY_SLOT2: 'inversion_game_slot2',
    SAVE_KEY: 'inversion_game_auto', // Default for backwards compatibility

    // Get all available saves
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
                        playerName: parsed.playerName || 'Desconocido',
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

    // Save to specific slot
    saveToSlot(slotKey) {
        try {
            const dataToSave = { ...GameState, savedAt: new Date().toISOString() };
            const data = JSON.stringify(dataToSave);
            localStorage.setItem(slotKey, data);
            return { success: true, message: 'Partida guardada correctamente.' };
        } catch (e) {
            return { success: false, message: 'Error al guardar: ' + e.message };
        }
    },

    // Load from specific slot
    loadFromSlot(slotKey) {
        try {
            const data = localStorage.getItem(slotKey);
            if (!data) return { success: false, message: 'No hay partida en este slot.' };
            const loadedState = JSON.parse(data);
            Object.assign(GameState, loadedState);
            return { success: true, message: `Bienvenido de nuevo, ${GameState.playerName}` };
        } catch (e) {
            return { success: false, message: 'Error al cargar: ' + e.message };
        }
    },

    // Auto-save (used by the game loop)
    saveGame() {
        return this.saveToSlot(this.SAVE_KEY_AUTO);
    },

    // Load from auto-save (backwards compatibility)
    loadGame() {
        return this.loadFromSlot(this.SAVE_KEY_AUTO);
    },

    // Check if any save exists
    checkSave() {
        return this.getAllSaves().length > 0;
    },

    // Delete a specific slot
    deleteSlot(slotKey) {
        localStorage.removeItem(slotKey);
    },

    // Clear all saves
    resetGame() {
        localStorage.removeItem(this.SAVE_KEY_AUTO);
        localStorage.removeItem(this.SAVE_KEY_SLOT1);
        localStorage.removeItem(this.SAVE_KEY_SLOT2);
        location.reload();
    },

    // Show save slots modal for manual saving
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
                            <span class="slot-date">${slot.savedAt ? new Date(slot.savedAt).toLocaleString('es-ES') : 'Sin fecha'}</span>
                        </div>
                        <div class="slot-info">
                            <span>🎮 ${slot.playerName}</span>
                            <span>💰 ${formatCurrency(slot.cash)}</span>
                            <span>📅 Año ${slot.year}, Mes ${slot.month}</span>
                        </div>
                        <button class="btn-save-slot" onclick="PersistenceModule.confirmSaveToSlot('${key}')">💾 Sobrescribir</button>
                    </div>
                `;
            } else {
                return `
                    <div class="save-slot-card empty" data-key="${key}">
                        <div class="slot-header">
                            <span class="slot-name">${name}</span>
                            <span class="slot-empty">Vacío</span>
                        </div>
                        <button class="btn-save-slot" onclick="PersistenceModule.saveAndNotify('${key}')">💾 Guardar Aquí</button>
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
                ${formatSlot(slot1, this.SAVE_KEY_SLOT1, 'Slot 1')}
                ${formatSlot(slot2, this.SAVE_KEY_SLOT2, 'Slot 2')}
            </div>
        `;

        UI.showModal('💾 Guardar Partida', msg, [
            { text: 'Cerrar', style: 'secondary', fn: null }
        ]);
    },

    confirmSaveToSlot(slotKey) {
        UI.showModal('Sobrescribir Partida', `
            <div style="text-align:center;">
                <div style="font-size:3rem; margin-bottom:10px;">💾</div>
                <p style="color:#cbd5e1; margin-bottom:15px;">¿Seguro que quieres sobrescribir este espacio?</p>
                <p style="color:#94a3b8; font-size:0.85rem;">La partida anterior se perderá para siempre.</p>
            </div>
        `, [
            { text: 'Cancelar', style: 'secondary', fn: null },
            { text: 'SOBRESCRIBIR', style: 'primary', fn: () => this.saveAndNotify(slotKey) }
        ], true);
    },

    saveAndNotify(slotKey) {
        const result = this.saveToSlot(slotKey);
        document.querySelector('.custom-modal-overlay')?.remove();
        UI.showToast(result.success ? '✅ Guardado' : '❌ Error', result.message, result.success ? 'success' : 'error');
    }
};

/*******************************************************
 * GAME BALANCE (New "Status Ladder" System)
 *******************************************************/
const GameBalance = {
    // Maps Housing ID to Tier Level (0-12)
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

        // Handle both 'vehicle' (legacy) and 'transport' keys
        const reqTransport = req.transport !== undefined ? req.transport : req.vehicle;
        if (reqTransport !== undefined) {
            const currentV = this.getCombinedTier('transport'); // Use 'transport' category
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
        // Map common request keys to internal lifestyle keys
        let lifestyleKey = category;
        if (category === 'vehicle') lifestyleKey = 'transport'; // Alias
        if (!GameState.lifestyle || !GameState.lifestyle[lifestyleKey]) return 0;
        const id = GameState.lifestyle[lifestyleKey];

        // Order matches LifestyleModule definition
        const orders = {
            vehicle: ['walk', 'skate', 'bike', 'scooter_el', 'public', 'moto_125', 'moto_big', 'car_old', 'car_new', 'car_premium', 'car_sport', 'supercar', 'chofer'],
            transport: ['walk', 'skate', 'bike', 'scooter_el', 'public', 'moto_125', 'moto_big', 'car_old', 'car_new', 'car_premium', 'car_sport', 'supercar', 'chofer'], // Alias
            clothes: ['donations', 'second_hand', 'low_cost', 'basic', 'fast_fashion', 'sport', 'boutique', 'tech', 'suits', 'designer', 'collector'],
            leisure: ['free', 'library', 'internet', 'basic', 'hobbies', 'active', 'clubbing', 'weekend', 'vip', 'travel', 'exclusive', 'yacht'],
            food: ['scraps', 'noodles', 'junk', 'cooking_basic', 'cooking', 'menu', 'bio', 'delivery', 'rest_nice', 'chef', 'michelin']
        };

        // Use the original category for lookup in orders or the mapped one?
        // My orders object uses 'vehicle' AND 'transport' just to be safe.
        // Actually orders object keys should match the input to getCombinedTier OR the mapped key. 
        // Let's use mapped key logic.

        const usedKey = orders[category] ? category : lifestyleKey;

        if (!orders[usedKey]) return 0;
        const idx = orders[usedKey].indexOf(id);
        return idx !== -1 ? idx : 0;
    },

    getLimits() {
        const tier = this.getHousingTier();

        // 1. STOCK MARKET CAP
        // Exponential Curve: Base 10k -> Unlimited
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

        // 2. REAL ESTATE CAP (Max properties owned)
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

/*******************************************************
 * STOCK MARKET
 *******************************************************/
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
        // Get only non-index stocks (exclude SP500 and NDX)
        const regularStocks = this.stocks.filter(s => !s.type || s.type !== 'index');

        // Shuffle companies randomly
        const shuffled = [...regularStocks].sort(() => Math.random() - 0.5);

        // Assign performance tiers
        // Tier 1: 2 companies with 60-80% annual return
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
                // INDEX LOGIC: Mean reversion to +9% annual (~0.72% monthly)
                const targetMonthlyReturn = 0.0072; // ~9% APY
                const fluctuation = (Math.random() * stock.volatility) - (stock.volatility / 2);
                totalChange = targetMonthlyReturn + fluctuation;
            } else {
                // REGULAR STOCK LOGIC WITH ANNUAL TARGETS
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
        if (!stock) return { success: false, message: 'Acción no encontrada' };

        const cost = stock.price * qty;

        // CALCULATE CURRENT PORTFOLIO VALUE
        let currentPortfolioValue = 0;
        GameState.inventory.stocks.forEach(p => {
            const s = this.getStock(p.symbol);
            if (s) {
                currentPortfolioValue += p.quantity * s.price;
            }
        });

        // CHECK PORTFOLIO LIMIT (Game Balance)
        const limits = GameBalance.getLimits();
        const portfolioLimit = limits.stockCap;

        if (currentPortfolioValue >= portfolioLimit) {
            return { success: false, message: `Has alcanzado el límite de inversión (${formatCurrency(portfolioLimit)}).<br>Banco: "Necesitas mejorar tu vivienda para que te dejemos invertir más."` };
        }

        if (currentPortfolioValue + cost > portfolioLimit) {
            return { success: false, message: `Esta compra superaría tu límite actual de ${formatCurrency(portfolioLimit)}.<br>Mejora tu nivel de vida para aumentar tu credibilidad financiera.` };
        }

        if (GameState.cash < cost) return { success: false, message: 'Dinero insuficiente' };

        GameState.cash -= cost;
        let pItem = GameState.inventory.stocks.find(s => s.symbol === symbol);
        if (pItem) {
            const totalCost = (pItem.quantity * pItem.avgPrice) + cost;
            pItem.quantity += qty;
            pItem.avgPrice = totalCost / pItem.quantity;
        } else {
            GameState.inventory.stocks.push({ symbol: symbol, name: stock.name, quantity: qty, avgPrice: stock.price });
        }
        return { success: true, message: `Compradas ${qty} acciones de ${symbol} por ${formatCurrency(cost)}` };
    },

    sellStock(symbol, qty) {
        const stock = this.getStock(symbol);
        if (!stock) return { success: false, message: 'Acción no encontrada' };
        let pItem = GameState.inventory.stocks.find(s => s.symbol === symbol);
        if (!pItem || pItem.quantity < qty) return { success: false, message: 'No tienes suficientes acciones' };

        const saleValue = stock.price * qty;
        const purchaseCost = pItem.avgPrice * qty;
        const profit = saleValue - purchaseCost;

        GameState.cash += saleValue;

        // TRACK STOCK GAINS FOR TAXES (only if profit)
        if (profit > 0) {
            if (!GameState.currentYearIncome) {
                GameState.currentYearIncome = { salary: 0, rental: 0, stocks: 0, company: 0 };
            }
            GameState.currentYearIncome.stocks += profit;

            // LIFETIME TRACKING - DEFENSIVE INIT
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
        return { success: true, message: `Vendidas ${qty} acciones de ${symbol} por ${formatCurrency(saleValue)}` };
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
            return { success: true, message: `Has comprado ${quantity} acciones de ${stock.name}` };
        }
        return { success: false, message: 'Dinero insuficiente' };
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

            // TRACK STOCK GAINS FOR TAXES (only if profit, after commission)
            const netProfit = profit - commission;
            if (netProfit > 0) {
                if (!GameState.currentYearIncome) {
                    GameState.currentYearIncome = { salary: 0, rental: 0, stocks: 0, company: 0 };
                }
                GameState.currentYearIncome.stocks += netProfit;

                // LIFETIME TRACKING - DEFENSIVE INIT
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
            return { success: true, message: `Has vendido ${quantity} acciones de ${stock.name}` };
        }
        return { success: false, message: 'No tienes suficientes acciones' };
    }
};

/*******************************************************
 * BANK
 *******************************************************/
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
            type: isBusiness ? 'Crédito Empresarial' : 'Préstamo Personal',
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
        if (amount <= 0) return { success: false, message: 'La cantidad debe ser mayor a 0' };

        const max = this.getMaxLoanAmount();
        // Exclude mortgages from personal credit limit check
        const currentDebt = GameState.loans
            .filter(l => !l.type.includes('Hipotecario'))
            .reduce((sum, l) => sum + l.remainingBalance, 0);

        const available = Math.max(0, max - currentDebt);

        if (amount > available) return { success: false, message: `Límite excedido. Te quedan ${formatCurrency(available)} de crédito disponible (Total: ${formatCurrency(max)}).` };

        const isBusiness = !!GameState.company;
        return this.createLoan(amount, isBusiness);
    },

    payLoanPartial(loanId, amount) {
        const loan = GameState.loans.find(l => l.id === loanId);
        if (!loan) return { success: false, message: 'Préstamo no encontrado' };
        if (amount <= 0) return { success: false, message: 'Cantidad inválida' };
        if (GameState.cash < amount) return { success: false, message: 'No tienes suficiente dinero' };
        if (amount > loan.remainingBalance) amount = loan.remainingBalance;

        GameState.cash -= amount;
        loan.remainingBalance -= amount;

        if (loan.remainingBalance < 1) {
            // Fully paid
            const idx = GameState.loans.indexOf(loan);
            GameState.loans.splice(idx, 1);
            return { success: true, message: '¡Préstamo liquidado totalmente!' };
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
        if (loanIndex === -1) return { success: false, message: 'Préstamo no encontrado' };
        const loan = GameState.loans[loanIndex];
        if (GameState.cash >= loan.remainingBalance) {
            GameState.cash -= loan.remainingBalance;
            GameState.loans.splice(loanIndex, 1);
            return { success: true, message: 'Préstamo liquidado totalmente' };
        }
        return { success: false, message: 'Dinero insuficiente para liquidar' };
    },
    nextTurn() {
        let totalPaid = 0;
        const loansToRemove = [];
        GameState.loans.forEach((loan, index) => {
            if (GameState.cash >= loan.monthlyPayment) {
                GameState.cash -= loan.monthlyPayment;
                totalPaid += loan.monthlyPayment;

                // LIFETIME HOUSING EXPENSE TRACKING (mortgages only)
                if (loan.type && loan.type.includes('Hipotecario')) {
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

/*******************************************************
 * REAL ESTATE
 *******************************************************/
const RealEstate = {
    availableProperties: [],
    PROPERTY_TYPES: {
        'Residencial': [
            { name: 'Estudio urbano compacto', minM2: 25, maxM2: 35, minPrice: 1500, maxPrice: 3500, icon: '🏢' },
            { name: 'Piso pequeño 1 dormitorio', minM2: 40, maxM2: 55, minPrice: 1500, maxPrice: 3000, icon: '🏢' },
            { name: 'Piso mediano 2-3 dormitorios', minM2: 70, maxM2: 90, minPrice: 1500, maxPrice: 3000, icon: '🏢' },
            { name: 'Piso grande familiar', minM2: 100, maxM2: 130, minPrice: 1400, maxPrice: 2800, icon: '🏢' },
            { name: 'Ático con terraza', minM2: 70, maxM2: 120, minPrice: 2000, maxPrice: 4500, icon: '🏠' }
        ],
        'Turistico': [
            { name: 'Apto. turístico estudio', minM2: 25, maxM2: 35, minPrice: 2000, maxPrice: 5000, icon: '🏖️' },
            { name: 'Apto. turístico 1-2 hab', minM2: 45, maxM2: 70, minPrice: 2000, maxPrice: 5000, icon: '🏖️' },
            { name: 'Edificio aptos. turísticos', minM2: 250, maxM2: 400, minPrice: 1800, maxPrice: 4000, icon: '🏨' },
            { name: 'Coliving optimizado', minM2: 90, maxM2: 140, minPrice: 1600, maxPrice: 3200, icon: '🛏️' },
            { name: 'Hotel urbano pequeño', minM2: 800, maxM2: 1500, minPrice: 1500, maxPrice: 4000, icon: '🏨' }
        ],
        'Garajes': [
            { name: 'Garaje pequeño', minM2: 5, maxM2: 10, minPrice: 800, maxPrice: 2000, icon: '🚗' },
            { name: 'Garaje mediano', minM2: 10, maxM2: 15, minPrice: 800, maxM2: 2000, icon: '🚗' },
            { name: 'Garaje grande', minM2: 15, maxM2: 25, minPrice: 800, maxPrice: 2000, icon: '🚗' },
            { name: 'Trastero pequeño', minM2: 1, maxM2: 3, minPrice: 600, maxPrice: 1800, icon: '📦' },
            { name: 'Box self-storage', minM2: 8, maxM2: 15, minPrice: 700, maxPrice: 2000, icon: '📦' }
        ],
        'Comercial': [
            { name: 'Local comercial pequeño', minM2: 30, maxM2: 60, minPrice: 1000, maxPrice: 4000, icon: '🏪' },
            { name: 'Local comercial mediano', minM2: 80, maxM2: 150, minPrice: 1500, maxPrice: 6000, icon: '🏪' },
            { name: 'Oficina edificio', minM2: 80, maxM2: 200, minPrice: 1500, maxPrice: 4000, icon: '💼' },
            { name: 'Nave industrial pequeña', minM2: 300, maxM2: 600, minPrice: 400, maxPrice: 1200, icon: '🏭' }
        ],
        'Suelo': [
            { name: 'Solar urbano edificable', minM2: 400, maxM2: 800, minPrice: 300, maxPrice: 1500, icon: '🏗️' }
        ],
        'Lujo': [
            { name: 'Piso de Lujo Prime', minM2: 120, maxM2: 200, minPrice: 8000, maxPrice: 15000, icon: '💎' },
            { name: 'Ático Dúplex Lujo', minM2: 150, maxM2: 250, minPrice: 9000, maxPrice: 18000, icon: '💎' },
            { name: 'Villa de Lujo Prime', minM2: 400, maxM2: 800, minPrice: 6000, maxPrice: 12000, icon: '🏰' },
            { name: 'Mansión Súper Lujo', minM2: 800, maxM2: 1500, minPrice: 8000, maxPrice: 20000, icon: '🏰' },
            { name: 'Apto. Lujo Playa', minM2: 120, maxM2: 220, minPrice: 6000, maxPrice: 20000, icon: '🏖️' },
            { name: 'Villa Lujo Mar', minM2: 300, maxM2: 700, minPrice: 8000, maxPrice: 25000, icon: '🏰' },
            { name: 'Piso Ultra High-End', minM2: 200, maxM2: 400, minPrice: 12000, maxM2: 25000, icon: '💎' },
            { name: 'Penthouse Vistas 360', minM2: 250, maxM2: 500, minPrice: 15000, maxPrice: 30000, icon: '💎' },
            { name: 'Casa Histórica Lujo', minM2: 300, maxM2: 700, minPrice: 7000, maxPrice: 18000, icon: '🏛️' },
            { name: 'Residencial Boutique', minM2: 800, maxM2: 2000, minPrice: 7000, maxPrice: 16000, icon: '💎' }
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
        if (cat === 'Garajes') baseYield = 0.055;
        if (cat === 'Turistico') baseYield = 0.06;
        if (cat === 'Lujo') baseYield = 0.03;
        if (cat === 'Suelo') baseYield = 0.01;

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
        // 1. Cycle Market: Remove oldest available, add new one
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
        if (propertyIndex === -1) return { success: false, message: 'Propiedad no encontrada' };

        // CHECK REAL ESTATE CAP (Game Balance)
        const limits = GameBalance.getLimits();
        const ownedCount = GameState.inventory.realEstate.length;
        if (ownedCount >= limits.reCap) {
            return { success: false, message: `Has alcanzado el límite de propiedades (${limits.reCap}).<br>Banco: "Tu vivienda actual no justifica un patrimonio mayor. Múdate a algo mejor."` };
        }

        const property = this.availableProperties[propertyIndex];
        const downPayment = useMortgage ? property.price * property.downPaymentPct : property.price;
        const loanAmount = property.price - downPayment;

        if (GameState.cash < downPayment) {
            return { success: false, message: 'Necesitas más dinero para la entrada' };
        }

        if (useMortgage && loanAmount > 0) {
            const r = Bank.INTEREST_RATES.mortgage / 12;
            const n = termYears * 12;
            const monthlyPayment = (loanAmount * r) / (1 - Math.pow(1 + r, -n));
            const mortgageId = Date.now();

            GameState.loans.push({
                id: mortgageId,
                type: `Hipotecario (${termYears} años)`,
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
        return { success: true, message: `¡Has comprado: ${property.name}!` };
    },

    sellProperty(propertyId) {
        const propIndex = GameState.inventory.realEstate.findIndex(p => p.id === propertyId);
        if (propIndex === -1) return { success: false, message: 'No posees esta propiedad.' };

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
        const actualProfit = marketValue - purchasePrice; // True profit (sale - purchase)

        GameState.cash += netProfit;

        // LIFETIME REAL ESTATE TRACKING
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
        return { success: true, message: `Propiedad vendida por ${formatCurrency(marketValue)}. Hipoteca cancelada: ${formatCurrency(mortgageCost)}. Neto: ${formatCurrency(netProfit)}` };
    }
};
RealEstate.generateListings();

/*******************************************************
 * EDUCATION SYSTEM
 *******************************************************/
const LifestyleModule = {
    categories: {
        housing: {
            label: 'Vivienda',
            items: [
                { id: 'parents', name: 'Casa de los Padres', cost: 0, deposit: 0, desc: 'Ahorro máximo. Cero privacidad.' },
                { id: 'sofa', name: 'Sofá de un amigo', cost: 150, deposit: 0, desc: 'Temporal e incómodo. Mejor que la calle.' },
                { id: 'pension', name: 'Pensión Mala Muerte', cost: 200, deposit: 400, desc: 'Ruidoso y sucio.' },
                { id: 'room_cheap', name: 'Habitación Interior', cost: 250, deposit: 1000, desc: 'Sin ventanas, solo para dormir.' },
                { id: 'room', name: 'Habitación Compartida', cost: 300, deposit: 1200, desc: 'El estándar de estudiante.' },
                { id: 'room_suit', name: 'Habitación con Baño', cost: 450, deposit: 1800, desc: 'Un poco más de dignidad.' },
                { id: 'basement', name: 'Sótano / Loft', cost: 600, deposit: 2400, desc: 'Espacioso pero oscuro.' },
                { id: 'studio', name: 'Estudio Privado', cost: 900, deposit: 3600, desc: 'Tu propio espacio. Pequeño.' },
                { id: 'apt_out', name: 'Piso en las Afueras', cost: 1100, deposit: 4400, desc: 'Grande pero lejos.' },
                { id: 'apartment', name: 'Apartamento Céntrico', cost: 1500, deposit: 6000, desc: 'Buena zona, 2 habitaciones.' },
                { id: 'loft', name: 'Loft de Diseño', cost: 2500, deposit: 10000, desc: 'Techos altos, ladrillo visto.' },
                { id: 'penthouse', name: 'Ático de Lujo', cost: 5000, deposit: 20000, desc: 'Mejores vistas de la ciudad.' },
                { id: 'mansion', name: 'Mansión Privada', cost: 15000, deposit: 60000, desc: 'Seguridad privada, piscina, todo.' }
            ]
        },
        food: {
            label: 'Alimentación',
            items: [
                { id: 'scraps', name: 'Comida de la Mamá', cost: 0, desc: 'Tuppers y cariño. Supervivencia.' },
                { id: 'noodles', name: 'Ramen Instantáneo', cost: 100, desc: 'Mucha sal, poco precio.' },
                { id: 'junk', name: 'Comida Rápida / Básica', cost: 200, desc: 'Grasientiento pero barato.' },
                { id: 'cooking_basic', name: 'Cocina Simple', cost: 250, desc: 'Ingredientes marca blanca.' },
                { id: 'cooking', name: 'Cocina Variada', cost: 300, desc: 'Carne, pescado y verduras.' },
                { id: 'menu', name: 'Menú del Día', cost: 450, desc: 'Comer fuera a diario (barato).' },
                { id: 'bio', name: 'Supermercado Bio', cost: 600, desc: 'Todo orgánico y caro.' },
                { id: 'delivery', name: 'Delivery Diario', cost: 900, desc: 'Glovo/Uber Eats para todo.' },
                { id: 'rest_nice', name: 'Restaurantes Buenos', cost: 1500, desc: 'Sitios de moda y calidad.' },
                { id: 'chef', name: 'Chef Privado', cost: 3000, desc: 'Te cocinan en casa.' },
                { id: 'michelin', name: 'Ruta Michelin', cost: 10000, desc: 'Solo lo mejor del mundo.' }
            ]
        },
        transport: {
            label: 'Transporte',
            items: [
                { id: 'walk', name: 'Andando', cost: 0, purchaseCost: 0, desc: 'Gratis. Cansa y tarda.' },
                { id: 'skate', name: 'Skate / Patines', cost: 0, purchaseCost: 100, desc: 'Rápido en distancias cortas.' },
                { id: 'bike', name: 'Bicicleta', cost: 10, purchaseCost: 150, desc: 'Sano y ecológico.' },
                { id: 'scooter_el', name: 'Patinete Eléctrico', cost: 20, purchaseCost: 400, desc: 'El rey de la ciudad.' },
                { id: 'public', name: 'Transporte Público', cost: 50, purchaseCost: 0, desc: 'Metro y Bus. Fiable.' },
                { id: 'moto_125', name: 'Moto 125cc', cost: 100, purchaseCost: 2500, desc: 'Aparcas donde quieres.' },
                { id: 'moto_big', name: 'Moto Gran Cilindrada', cost: 200, purchaseCost: 9000, desc: 'Potencia y ruido.' },
                { id: 'car_old', name: 'Coche 2ª Mano', cost: 250, purchaseCost: 8000, desc: 'Te lleva y te trae.' },
                { id: 'car_new', name: 'Coche Nuevo', cost: 400, purchaseCost: 22000, desc: 'Olor a nuevo, sin problemas.' },
                { id: 'car_premium', name: 'Berlina Premium', cost: 600, purchaseCost: 50000, desc: 'Comodidad alemana.' },
                { id: 'car_sport', name: 'Deportivo', cost: 1000, purchaseCost: 90000, desc: 'Miradas en cada semáforo.' },
                { id: 'supercar', name: 'Superdeportivo', cost: 3000, purchaseCost: 250000, desc: 'Una bestia italiana.' },
                { id: 'chofer', name: 'Chófer Privado', cost: 5000, purchaseCost: 0, desc: 'No conduces nunca más.' }
            ]
        },
        leisure: {
            label: 'Ocio',
            items: [
                { id: 'free', name: 'Parque y Sol', cost: 0, desc: 'Aire libre y gratis.' },
                { id: 'library', name: 'Libros y Biblioteca', cost: 20, desc: 'Cultura barata.' },
                { id: 'internet', name: 'Internet y Juegos', cost: 50, desc: 'Ocio digital casero.' },
                { id: 'basic', name: 'Ocio Básico', cost: 100, desc: 'Netflix y alguna caña.' },
                { id: 'hobbies', name: 'Hobbies Caseros', cost: 200, desc: 'Maquetas, pintura, cursos.' },
                { id: 'active', name: 'Vida Activa', cost: 300, desc: 'Gimnasio, cine y cenas.' },
                { id: 'clubbing', name: 'Fiesta y Copas', cost: 500, desc: 'Cerrar discotecas.' },
                { id: 'weekend', name: 'Escapadas Fin de Semana', cost: 800, desc: 'Turismo nacional frecuente.' },
                { id: 'vip', name: 'Reservados VIP', cost: 1500, desc: 'Botellas y zonas exclusivas.' },
                { id: 'travel', name: 'Viajes Internacionales', cost: 3000, desc: 'Japón, NY, Maldivas.' },
                { id: 'exclusive', name: 'Clubes Privados', cost: 6000, desc: 'Networking de alto nivel.' },
                { id: 'yacht', name: 'Fiestas en Yate', cost: 15000, desc: 'El Lobo de Wall Street.' }
            ]
        },
        clothes: {
            label: 'Ropa',
            items: [
                { id: 'donations', name: 'Ropa Donada', cost: 0, desc: 'Lo que te dan.' },
                { id: 'second_hand', name: 'Segunda Mano', cost: 30, desc: 'Wallapop y Humana.' },
                { id: 'low_cost', name: 'Mercadillo', cost: 60, desc: 'Barato y funcional.' },
                { id: 'basic', name: 'Moda Básica', cost: 100, desc: 'Basicos sin marca.' },
                { id: 'fast_fashion', name: 'Fast Fashion', cost: 200, desc: 'Zara, Mango, H&M.' },
                { id: 'sport', name: 'Marcas Deportivas', cost: 300, desc: 'Nike, Adidas. Comodidad.' },
                { id: 'boutique', name: 'Boutique Local', cost: 500, desc: 'Ropa con personalidad.' },
                { id: 'tech', name: 'Techwear / Gadgets', cost: 800, desc: 'Estilo funcional caro.' },
                { id: 'suits', name: 'Trajes a Medida', cost: 1500, desc: 'Sastrería clásica.' },
                { id: 'designer', name: 'Firmas de Lujo', cost: 3000, desc: 'Gucci, Prada, LV.' },
                { id: 'collector', name: 'Coleccionista', cost: 10000, desc: 'Piezas únicas de pasarela.' }
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

        // Check if already selected
        if (GameState.lifestyle[category] === id) return { success: false, message: 'Ya tienes este nivel.' };

        const item = this.getItem(category, id);
        if (!item) return { success: false, message: 'Opción inválida.' };

        // UPFRONT COST LOGIC
        let upfront = 0;
        if (item.deposit) upfront += item.deposit;
        if (item.purchaseCost) upfront += item.purchaseCost;

        if (GameState.cash < upfront) {
            return { success: false, message: `Fondos insuficientes. Necesitas ${formatCurrency(upfront)} para el pago inicial (Fianza/Compra).` };
        }

        // DEDUCT & SET
        GameState.cash -= upfront;
        GameState.lifestyle[category] = id;
        GameState.expenses = this.calculateTotal();

        // Tutorial Trigger: First independent housing
        if (category === 'housing' && id !== 'parents' && !GameState.tutorialFlags.independent) {
            TutorialSystem.step9_Independence();
        }

        return { success: true, message: `¡Has contratado: ${item.name}` };
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
        if (GameState.currentCourse) return { success: false, message: 'Ya estás estudiando.' };
        const course = this.courses.find(c => c.id === courseId);
        const cost = course.cost; // Changed from costYear to cost
        if (GameState.cash < cost) return { success: false, message: 'No tienes dinero suficiente para la matrícula.' };

        // Strict Requirement Check
        if (course.required) {
            const hasReq = course.required.some(req => GameState.education.includes(req));
            if (!hasReq) return { success: false, message: `Requisito no cumplido: Necesitas ${course.required.join(' o ')}.` };
        }

        GameState.cash -= cost;

        // LIFETIME EDUCATION EXPENSE TRACKING
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

        return { success: true, message: `Has empezado: ${course.name}` };
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
            TutorialSystem.onDegreeCompleted(course.name);
            return; // Tutorial handles the modal
        }

        // PREMIUM COURSE COMPLETION MESSAGE
        const themeColor = '#818cf8'; // Indigo
        const icon = '🎓';

        let finishMsg = `
            <div style="text-align: center; margin-bottom: 20px;">
                <div style="font-size: 4rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px ${themeColor}66); animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);">${icon}</div>
                <h3 style="color: ${themeColor}; margin: 0; font-size: 1.6rem; text-shadow: 0 0 10px ${themeColor}4d; font-weight: 800; letter-spacing: 1px;">¡FORMACIÓN COMPLETADA!</h3>
            </div>

            <div style="background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.6)); border: 1px solid ${themeColor}4d; border-radius: 16px; padding: 25px; text-align: center; margin-bottom: 25px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                <div style="font-size: 0.85rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px;">Título Obtenido</div>
                <div style="font-size: 1.6rem; font-weight: 800; color: #f8fafc; margin-bottom: 15px;">${course.name}</div>
                
                <div style="display: inline-block; background: ${themeColor}26; border: 1px solid ${themeColor}4d; padding: 10px 20px; border-radius: 30px;">
                    <span style="color: ${themeColor}; font-weight: 700; font-size: 1.1rem;">Cualificación ++</span>
                </div>
            </div>

            <p style="text-align: center; color: #cbd5e1; font-size: 1rem; line-height: 1.6; margin: 0; padding: 0 10px;">
                Has finalizado tus estudios. Ahora puedes acceder a puestos de mayor responsabilidad y salario.
            </p>
        `;

        UI.showModal(' ', finishMsg, [
            {
                text: 'Ir a Trabajo', style: 'success', fn: () => {
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

/*******************************************************
 * COMPANY MODULE (Entrepreneurship Mode)
 *******************************************************/
const CompanyModule = {
    // Configuration
    businessTypes: {
        'cafe': { name: 'Cafetería', cost: 50000, initialCash: 20000, baseDemand: 800, baseTicket: 5, cogsPct: 0.25, productivityPerStaff: 800, volatility: 0.05, tier: 1, baseWage: 1200, icon: '☕', baseRent: 1500 },
        'retail_clothing': { name: 'Tienda de Ropa', cost: 50000, baseDemand: 100, baseTicket: 55, cogsPct: 0.4, productivityPerStaff: 120, volatility: 0.2, tier: 1, baseWage: 1200, icon: '👗', baseRent: 2500 },
        'marketing_agency': { name: 'Agencia Marketing', cost: 250000, baseDemand: 8, baseTicket: 2000, cogsPct: 0.1, productivityPerStaff: 4, volatility: 0.3, tier: 1, baseWage: 2800, icon: '📈', baseRent: 4000 },
        'tech_startup': { name: 'Startup SaaS', cost: 750000, baseDemand: 100, baseTicket: 100, cogsPct: 0.05, productivityPerStaff: 200, volatility: 0.6, tier: 2, baseWage: 3000, icon: '💻', baseRent: 2000 }
    },
    locations: {
        'suburbs': { name: 'Afueras', rentMult: 0.5, trafficMult: 0.8, maxStaff: 10 },
        'downtown': { name: 'Centro Ciudad', rentMult: 1.5, trafficMult: 1.0, maxStaff: 15 },
        'business_district': { name: 'Distrito Financiero', rentMult: 3.0, trafficMult: 1.2, maxStaff: 20 }
    },
    providers: {
        'cheap': { name: 'Mayorista Low-Cost', priceMod: 0.8, quality: 0.4, reliability: 0.7 },
        'standard': { name: 'Distribuidor Estándar', priceMod: 1.0, quality: 0.7, reliability: 0.9 },
        'premium': { name: 'Importador Premium', priceMod: 1.4, quality: 1.0, reliability: 0.99 }
    },
    marketingChannels: {
        'none': { name: 'Sin Publicidad', cost: 0, impact: 1.0 },
        'social': { name: 'Redes Sociales', cost: 500, impact: 1.3 },
        'local': { name: 'Radio/Prensa Local', cost: 1500, impact: 1.6 },
        'influencers': { name: 'Campaña Influencers', cost: 5000, impact: 2.2 }
    },

    // Logic
    createCompany(name, typeKey, locKey) {
        const type = this.businessTypes[typeKey];
        const loc = this.locations[locKey];
        if (!type || !loc) return { success: false, message: 'Configuración inválida.' };
        if (GameState.cash < type.cost) return { success: false, message: `Necesitas ${formatCurrency(type.cost)}.` };

        GameState.cash -= type.cost;

        GameState.company = {
            name: name,
            typeId: typeKey,
            typeName: type.name,
            locationId: locKey,
            locationName: loc.name,

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
            maxStaff: 5, // TIER 1 CAP

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

        return { success: true, message: `Has fundado ${name}.` };
    },

    hireStaff(role, salary, skill, name) {
        if (!GameState.company) return;
        const co = GameState.company;

        if (co.staff.length >= co.maxStaff) {
            return { success: false, message: `Límite de personal alcanzado (${co.maxStaff}). Mejora tu oficina.` };
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
        return { success: true, message: `¡${name || role} contratado!` };
    },

    fireStaff(index) {
        if (!GameState.company) return;
        GameState.company.staff.splice(index, 1);
        GameState.company.staff.forEach(s => s.morale = Math.max(0, s.morale - 0.1));
        return { success: true, message: 'Empleado despedido.' };
    },

    upgradeOffice() {
        if (!GameState.company) return;
        const co = GameState.company;
        const loc = this.locations[co.locationId];
        const locationMaxStaff = loc?.maxStaff || 15;

        // Check if already at location max
        if (co.maxStaff >= locationMaxStaff) {
            return { success: false, message: `Ya tienes el máximo de oficina para ${co.locationName} (${locationMaxStaff} empleados).` };
        }

        if (co.staff.length < co.maxStaff) {
            return { success: false, message: `Debes llenar tu oficina actual (${co.staff.length}/${co.maxStaff}) antes de ampliar.` };
        }

        let nextLimit = 0;
        let baseCost = 0;

        if (co.maxStaff === 5) { nextLimit = 10; baseCost = 15000; }
        else if (co.maxStaff === 10) { nextLimit = 15; baseCost = 30000; }
        else if (co.maxStaff === 15) { nextLimit = 20; baseCost = 60000; }
        else return { success: false, message: 'Ya tienes la oficina máxima.' };

        // Ensure next limit doesn't exceed location max
        if (nextLimit > locationMaxStaff) {
            return { success: false, message: `La ubicación ${co.locationName} permite máximo ${locationMaxStaff} empleados.` };
        }

        const profitCalc = Math.max(0, co.profitLastMonth) * 3;
        const finalCost = Math.max(baseCost, profitCalc);

        if (co.cash < finalCost) return { success: false, message: `Faltan fondos. Coste: ${formatCurrency(finalCost)}` };

        co.cash -= finalCost;
        co.maxStaff = nextLimit;

        return { success: true, message: `¡Oficina ampliada! Nuevo límite: ${nextLimit} empleados.` };
    },

    buyUpgrade(upgradeId) {
        if (!GameState.company) return;
        const co = GameState.company;

        if (upgradeId === 'autoPayroll') {
            if (co.upgrades && co.upgrades.autoPayroll) return { success: false, message: 'Ya tienes esta mejora.' };

            // Req: Office Level > 1 (Implies maxStaff > 5 for standard tiers)
            if (co.maxStaff <= 5) return { success: false, message: 'Requisito: Negocio Nivel 2+.' };

            const cost = 25000;
            if (co.cash < cost) return { success: false, message: `Faltan fondos. Coste: ${formatCurrency(cost)}` };

            co.cash -= cost;
            if (!co.upgrades) co.upgrades = {};
            co.upgrades.autoPayroll = true;
            const themeColor = '#10b981'; // Emerald
            const successHtml = `
                <div style="text-align: center; margin-bottom: 20px;">
                    <div style="font-size: 4rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px ${themeColor}66); animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);">📋</div>
                    <h3 style="color: ${themeColor}; margin: 0; font-size: 1.6rem; text-shadow: 0 0 10px ${themeColor}4d; font-weight: 800; letter-spacing: 1px;">¡RRHH ACTIVADO!</h3>
                </div>
                
                <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
                    <p style="color: #fff; font-size: 1.1rem; line-height: 1.5; margin: 0; font-weight: 600;">
                        "¡Ya no se preocupe por el salario de los empleados, el departamento de RRHH se encargará!"
                    </p>
                </div>

                <p style="text-align: center; color: #94a3b8; font-size: 0.9rem; margin: 0;">
                    Las subidas salariales ahora son automáticas.
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

        if (type === 'product_dev') { currentLevel = co.productLevel; name = "Desarrollo Producto"; }
        if (type === 'marketing_infra') { currentLevel = co.marketingLevel; name = "Infraestructura Mkt"; }

        if (currentLevel >= co.staff.length) {
            return { success: false, message: `Límite alcanzado: Necesitas más empleados (${co.staff.length}) para mejorar esto.` };
        }

        const cost = 5000 * currentLevel;

        if (co.cash < cost) return { success: false, message: `Necesitas ${formatCurrency(cost)} para mejorar ${name}.` };

        co.cash -= cost;

        if (type === 'product_dev') co.productLevel++;
        if (type === 'marketing_infra') co.marketingLevel++;

        return { success: true, message: `¡Mejora completada! ${name} ahora es Nivel ${currentLevel + 1}` };
    },

    sellPassiveCompany(index) {
        const co = GameState.ownedCompanies[index];
        if (!co) return { success: false, message: 'Empresa no encontrada.' };

        const valuation = Math.floor(co.baselineProfit * 12 * 5); // 5x Annual Profit
        const taxRate = 0.25;
        const taxes = Math.floor(valuation * taxRate);
        const netAmount = valuation - taxes;

        GameState.cash += netAmount;
        GameState.ownedCompanies.splice(index, 1);

        // Track tax payment if needed, or just deduct it.
        // Returning detailed message for the user.
        return {
            success: true,
            message: `✅ Venta realizada: ${formatCurrency(valuation)}\n<span style="color:#ef4444">🏛️ Impuestos (Estado 25%): -${formatCurrency(taxes)}</span>\n💰 Ingreso Neto: ${formatCurrency(netAmount)}`
        };
    },

    nextTurn() {
        if (GameState.company) {
            this.processCompany(GameState.company, true);

            // CHECK FOR SALARY DEMANDS (Modal)
            if (GameState.company.tempSalaryDemands && GameState.company.tempSalaryDemands.length > 0) {
                const demands = GameState.company.tempSalaryDemands;
                const count = demands.length;
                let demandListHtml = '';

                demands.forEach(d => {
                    demandListHtml += `
                        <div style="background: rgba(255, 255, 255, 0.05); border-radius: 8px; padding: 10px; margin-bottom: 8px; text-align: left; border-left: 3px solid #ef4444;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                                <span style="font-weight: 700; color: #f8fafc;">${d.name}</span>
                                <span style="font-size: 0.8rem; color: #94a3b8;">${d.role}</span>
                            </div>
                            <div style="font-size: 0.9rem; color: #cbd5e1;">
                                Pide: <strong style="color: #ef4444;">${formatCurrency(d.required)}</strong> <span style="font-size: 0.8rem;">(Actual: ${formatCurrency(d.current)})</span>
                            </div>
                        </div>
                    `;
                });

                const modalTitle = count === 1 ? '⚠️ Queja Salarial' : `⚠️ ${count} Quejas Salariales`;
                const modalMsg = `
                    <div style="text-align: center; margin-bottom: 15px;">
                        <div style="font-size: 3rem; margin-bottom: 10px;">📢</div>
                        <p style="color: #cbd5e1; margin-bottom: 15px;">
                            ${count === 1 ? 'Un empleado está descontento con su sueldo.' : 'Varios empleados exigen un aumento.'}
                            <br>Si no lo subes, su motivación bajará.
                        </p>
                    </div>
                    <div style="max-height: 300px; overflow-y: auto; margin-bottom: 15px;">
                        ${demandListHtml}
                    </div>
                `;

                // Use setTimeout to ensure it appears after other turn events if needed, 
                // but direct call is usually fine.
                // We use showModal queueing or just show it.
                // Since this is critical, we force it.
                UI.showModal(
                    modalTitle,
                    modalMsg,
                    [{
                        text: 'Ir a RRHH',
                        style: 'primary',
                        fn: () => {
                            // 1. Navigate to Company View
                            const btn = document.querySelector('.b-nav-item[data-view="company"]'); // Mobile
                            if (btn) btn.click();
                            const dBtn = document.querySelector('.nav-btn[data-view="company"]'); // Desktop
                            if (dBtn) dBtn.click();

                            // 2. Click "Personal" Tab after render
                            setTimeout(() => {
                                const staffTab = document.querySelector('button.tab-btn[data-tab="staff"]');
                                if (staffTab) staffTab.click();
                            }, 200);
                        }
                    },
                    { text: 'Ignorar por ahora', style: 'secondary', fn: null }],
                    true // isHTML
                );
            }
        }

        if (GameState.ownedCompanies && GameState.ownedCompanies.length > 0) {
            GameState.ownedCompanies.forEach(co => {
                this.processCompany(co, false);
                if (co.profitLastMonth > 0) {
                    GameState.cash += co.profitLastMonth;

                    // TRACK COMPANY PROFITS FOR TAXES
                    if (!GameState.currentYearIncome) {
                        GameState.currentYearIncome = { salary: 0, rental: 0, stocks: 0, company: 0 };
                    }
                    GameState.currentYearIncome.company += co.profitLastMonth;
                    // LIFETIME TRACKING
                    GameState.lifetimeStats.totalIncome.company += co.profitLastMonth;
                }
            });
        }
    },

    processCompany(co, isActive) {
        const type = this.businessTypes[co.typeId];

        // --- PASSIVE LOGIC (Manager) ---
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

        // --- ACTIVE LOGIC ---
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
                // Expert endgame growth bonus
                const growthRate = (emp.role === 'Experto') ? 0.006 : 0.005;
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
                co.events.push(`⚠️ Empleado descontento: Exige ${formatCurrency(emp.requiredWage)}`);
                // Collect for modal
                co.tempSalaryDemands.push({
                    name: emp.name,
                    role: emp.role || 'Empleado',
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
                co.events.push(`⚠️ Has llegado al límite de empleados.`);
            } else {
                co.events.push(`⚠️ Necesitas más empleados.`);
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

        // Do NOT add to GameState.cash here. The main loop does it via GameState.salary.
        // Just deduct from company.

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
            co.events.push("⛔ ¡PELIGRO! Caja muy negativa.");
        }

        return { revenue: co.revenueLastMonth, profit: co.profitLastMonth };
    },

    withdraw(amount) {
        if (!GameState.company) return;
        if (GameState.company.cash < amount) return { success: false, message: 'No hay suficiente caja.' };
        GameState.company.cash -= amount;
        GameState.cash += amount;

        // Track for tax declaration (renta)
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
        if (GameState.cash < amount) return { success: false, message: 'No tienes suficiente efectivo personal.' };
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

        const message = `Beneficio Anual: ${formatCurrency(annualProfit)}
Multiplicador Mejoras: x${upgradeMult}

Valoración: ${formatCurrency(valuation)}
Caja Actual: ${formatCurrency(liquidationCash)}

TOTAL OPERACIÓN: ${formatCurrency(totalExit)}

¿Vender empresa y salir?`;

        const confirmed = await showGameConfirm(message, '💰 Oferta de Compra', 'Vender', 'Cancelar');
        if (!confirmed) return { success: false, message: 'Operación cancelada' };

        GameState.cash += totalExit;
        GameState.company = null;
        GameState.jobTitle = 'Ex-Fundador (Desempleado)';
        GameState.salary = 0;
        JobSystem.currentCareerPath = 'none';

        return { success: true, message: `¡EXITO! Empresa vendida por ${formatCurrency(totalExit)}.` };
    }
};

/*******************************************************
 * JOB SYSTEM
 *******************************************************/
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

// --- GIGS POOL ---
const GIGS_POOL = [
    { title: 'Vender cromos', salary: 50, duration: 3, type: 'gig', desc: 'Pequeño trapicheo escolar.', reqMonths: 0, reqEdu: null },
    { title: 'Ventas en Wallapop', salary: 120, duration: 4, type: 'gig', desc: 'Limpiando el trastero.', reqMonths: 0, reqEdu: null },
    { title: 'Limpiar casas', salary: 200, duration: 5, type: 'gig', desc: 'Trabajo doméstico puntual.', reqMonths: 0, reqEdu: null },
    { title: 'Pasear perros', salary: 150, duration: 3, type: 'gig', desc: 'Sacar a Rufo y sus amigos.', reqMonths: 0, reqEdu: null },
    { title: 'Repartir publicidad', salary: 80, duration: 2, type: 'gig', desc: 'Buzoneo por el barrio.', reqMonths: 0, reqEdu: null },
    { title: 'Cuidar niños', salary: 180, duration: 4, type: 'gig', desc: 'Babysitter de fin de semana.', reqMonths: 0, reqEdu: null },
    { title: 'Ayudante mudanzas', salary: 220, duration: 2, type: 'gig', desc: 'Cargar cajas pesadas.', reqMonths: 0, reqEdu: null },
    { title: 'Cliente misterioso', salary: 100, duration: 3, type: 'gig', desc: 'Evaluar tiendas locales.', reqMonths: 0, reqEdu: null },
    { title: 'Transcribir audios', salary: 130, duration: 4, type: 'gig', desc: 'Trabajo freelance online.', reqMonths: 0, reqEdu: null },
    { title: 'Encuestador', salary: 90, duration: 2, type: 'gig', desc: 'Hacer preguntas por la calle.', reqMonths: 0, reqEdu: null },
    { title: 'DJ fiestas infantiles', salary: 160, duration: 3, type: 'gig', desc: 'Música y globoflexia.', reqMonths: 0, reqEdu: null },
    { title: 'Monitor comedor', salary: 210, duration: 5, type: 'gig', desc: 'Vigilar el patio del cole.', reqMonths: 0, reqEdu: null },
    { title: 'Cortar césped', salary: 140, duration: 4, type: 'gig', desc: 'Jardinería básica vecinal.', reqMonths: 0, reqEdu: null }
];

const JobSystem = {
    careers: {
        // --- BASICO ---
        'unskilled': [
            { title: 'Reponedor / Auxiliar', salary: 700, reqMonths: 0, reqEdu: ['bachillerato', 'fp_medio'], req: null }, // Entry Level: No reqs
            { title: 'Cajero / Atención', salary: 1150, reqMonths: 6, reqEdu: null, req: { housing: 3, food: 2, clothes: 2 } }, // Room + Junk + 2nd Hand
            { title: 'Supervisor de Planta', salary: 1400, reqMonths: 24, reqEdu: null, req: { housing: 4, food: 3, clothes: 3, leisure: 2 } } // Shared + Cooking + Basic + Net
        ],

        // --- DJ CAREER ---
        'dj': [
            { title: 'DJ Residente de tu casa', salary: 600, reqMonths: 0, reqEdu: null, req: null },
            { title: 'DJ Reggeton', salary: 1400, reqMonths: 2, reqEdu: ['dj_basic'], req: { transport: 4 } }, // Transport T4 (Public)
            { title: 'DJ Residente Reggeton', salary: 1800, reqMonths: 4, reqEdu: ['dj_basic'], req: { clothes: 4 } }, // Clothes T4 (Fast Fash)
            { title: 'DJ Electronica', salary: 2300, reqMonths: 6, reqEdu: ['dj_basic'], req: { food: 5 } }, // Food T5 (Menu)
            { title: 'DJ Residente Electronica', salary: 2800, reqMonths: 8, reqEdu: ['dj_basic'], req: { leisure: 6 } }, // Leisure T6 (Clubbing)
            { title: 'DJ Residente Octogono', salary: 3400, reqMonths: 10, reqEdu: ['dj_pioneer'], req: { housing: 7 } }, // Housing T7 (Studio)
            { title: 'DJ y Productor', salary: 4500, reqMonths: 12, reqEdu: ['dj_pioneer'], req: { transport: 8 } }, // Transport T8 (New Car)
            { title: 'DJ Productor Sello', salary: 5500, reqMonths: 18, reqEdu: ['dj_pioneer'], req: { clothes: 6 } }, // Clothes T6 (Boutique)
            { title: 'DJ Residente Studio 77', salary: 5900, reqMonths: 24, reqEdu: ['dj_vinyl'], req: { food: 7 } }, // Food T7 (Delivery)
            { title: 'DJ Residente Kapitol', salary: 7100, reqMonths: 30, reqEdu: ['dj_vinyl'], req: { leisure: 8 } }, // Leisure T8 (VIP)
            { title: 'DJ Residente Ibiza', salary: 10750, reqMonths: 36, reqEdu: ['dj_pro'], req: { housing: 11 } }, // Housing T11 (Penthouse)
            { title: 'DJ Residente Berghain', salary: 15000, reqMonths: 48, reqEdu: ['dj_pro'], req: { transport: 11 } }, // Transport T11 (Supercar)
            { title: 'DJ Residente FAVRIK', salary: 21500, reqMonths: 60, reqEdu: ['dj_pro'], req: { clothes: 8, food: 9 } }, // Clothes T8 (Suits) + Food T9 (Chef)
            { title: 'DJ Whiteworks', salary: 40000, reqMonths: 72, reqEdu: ['dj_pro'], req: { housing: 12, leisure: 11 } } // Housing T12 (Mansion) + Leisure T11 (Yacht)
        ],

        // --- TRES DEPORTE (Sin ascensos) ---
        'tres_deporte': [
            { title: 'TRES DEPORTE', salary: 800, reqMonths: 0, reqEdu: 'bachillerato', req: null }
        ],

        // --- FP ADMINISTRACION ---
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
            { title: 'Administrativo comercial inmo.', salary: 1300, reqMonths: 0, reqEdu: 'fp_admin', req: { housing: 3, clothes: 4 } }, // Image matters
            { title: 'Gestor de operaciones inmo.', salary: 1800, reqMonths: 18, reqEdu: 'fp_admin', req: { housing: 5, clothes: 5, transport: 4 } },
            { title: 'Responsable de oficina inmo.', salary: 2400, reqMonths: 36, reqEdu: 'fp_admin', req: { housing: 7, clothes: 6, transport: 5, leisure: 4 } },
            { title: 'Director de zona', salary: 3200, reqMonths: 72, reqEdu: 'fp_admin', req: { housing: 8, clothes: 7, transport: 6, leisure: 5 } } // Apt Out + Boutique + Moto
        ],

        // --- FP DAM ---
        'prog_apps': [
            { title: 'Programador junior (FP)', salary: 1500, reqMonths: 0, reqEdu: ['fp_dam', 'bootcamp'], req: { housing: 3, leisure: 2, food: 2 } },
            { title: 'Programador semi‑senior', salary: 2000, reqMonths: 18, reqEdu: ['fp_dam', 'bootcamp'], req: { housing: 5, leisure: 3, food: 3 } }, // Suite + Internet
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

        // --- FP MANTENIMIENTO ---
        // --- FP MANTENIMIENTO ---
        // --- FP MANTENIMIENTO ---
        'maint_ind': [
            { title: 'Técnico mantenimiento ind.', salary: 1500, reqMonths: 0, reqEdu: 'fp_maint', req: { housing: 3, food: 3 } }, // Physical job needs food
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

        // --- GRADO ADE ---
        'analyst_fin': [
            { title: 'Analista financiero', salary: 1600, reqMonths: 0, reqEdu: 'grado_ade', req: { housing: 4, clothes: 4, food: 3 } }, // Suit required
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

        // --- GRADO INFORMATICA ---
        'swe': [
            { title: 'Ingeniero de software', salary: 1800, reqMonths: 0, reqEdu: 'grado_cs', req: { housing: 4, leisure: 3, food: 3 } }, // High leisure (setup)
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

        // --- GRADO CIVIL ---
        // --- GRADO CIVIL ---
        'ing_obra': [
            { title: 'Ingeniero de obra', salary: 1700, reqMonths: 0, reqEdu: 'grado_civil', req: { housing: 4, food: 3, transport: 4 } }, // Travel + Food
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

        // Handle Gig Expiration
        if (GameState.jobType === 'gig') {
            if (GameState.gigRemaining > 0) {
                GameState.gigRemaining--;
            }
            if (GameState.gigRemaining <= 0) {
                // Gig finished - Show modal instead of toast for better visibility
                const expiryMsg = `
                    <div style="text-align: center; margin-bottom: 20px;">
                        <div style="font-size: 4rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px rgba(244, 63, 94, 0.4)); animation: bounceIn 0.6s;">🏁</div>
                        <h3 style="color: #f43f5e; margin: 0; font-size: 1.5rem; text-shadow: 0 0 10px rgba(244, 63, 94, 0.3);">Contrato Finalizado</h3>
                    </div>

                    <div style="background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.6)); border: 1px solid rgba(244, 63, 94, 0.3); border-radius: 16px; padding: 20px; text-align: center; margin-bottom: 20px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                        <div style="font-size: 0.85rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Estado Laboral</div>
                        <div style="font-size: 1.2rem; font-weight: 700; color: #f8fafc; margin-bottom: 10px;">Desempleado</div>
                        <div style="font-size: 0.9rem; color: #cbd5e1;">Tu trabajo temporal ha concluido.</div>
                    </div>

                    <p style="text-align: center; color: #cbd5e1; font-size: 0.95rem; line-height: 1.5; margin: 0;">
                        Es hora de buscar nuevas oportunidades en la sección de <strong>Trabajo</strong>.
                    </p>
                `;

                UI.showModal(
                    ' ',
                    expiryMsg,
                    [{ text: '🔍 Buscar Trabajo', style: 'primary', fn: () => UI.updateJob(this) }],
                    true
                );
                GameState.jobTitle = 'Desempleado';
                GameState.salary = 0;
                GameState.jobType = 'unemployed';
                this.currentCareerPath = 'none';
                UI.updateJob(this); // Refresh UI if open
                return;
            }
        }

        if (!GameState.isStudying) {
            this.monthsInCurrentJob += 1;
            this.monthsSinceLastRaise = (this.monthsSinceLastRaise || 0) + 1; // Track for TRES DEPORTE salary requests
        } else {
            this.monthsInCurrentJob += 0.5;
            this.monthsSinceLastRaise += 0.5;
        }

        // Check for available promotion
        this.checkAvailablePromotion();

        // Generar nuevos gigs para el mes siguiente
        this.generateMonthlyGigs();
    },

    /**
     * Generate new monthly gigs for the job market.
     * Only regenerates if player doesn't have an active gig (prevents losing active temporary jobs).
     */
    generateMonthlyGigs() {
        // Don't regenerate if player has an active gig job
        if (GameState.jobType === 'gig' && GameState.gigRemaining > 0) {
            return; // Keep current gigs list unchanged
        }

        // Shuffle and pick 2 random gigs
        const shuffled = [...GIGS_POOL].sort(() => 0.5 - Math.random());
        GameState.currentGigs = shuffled.slice(0, 2).map(gig => ({ ...gig, path: 'temporary' }));
    },

    getAvailablePromotions() {
        if (this.currentCareerPath === 'entrepreneur' || this.currentCareerPath === 'none' || this.currentCareerPath === 'temporary') return null;

        const path = this.careers[this.currentCareerPath];
        if (!path) return null; // Safe guard
        const currentJobIndex = path.findIndex(j => j.title === GameState.jobTitle);

        if (currentJobIndex === -1 || currentJobIndex >= path.length - 1) return null;
        const nextJob = path[currentJobIndex + 1];
        return nextJob;
    },

    promote() {
        // SPECIAL CASE: TRES DEPORTE - No promotions, but can ask for raise every 2 months
        if (GameState.jobTitle === 'TRES DEPORTE') {
            const monthsSinceLastRequest = this.monthsSinceLastRaise || 0;

            if (monthsSinceLastRequest < 2) {
                return {
                    success: false,
                    message: `Tu jefa te ignora. Espera ${2 - monthsSinceLastRequest} mes(es) más para volver a intentarlo.`
                };
            }

            // Reset counter
            this.monthsSinceLastRaise = 0;

            // Array of comic excuses
            const excuses = [
                "Tu jefa dice que... primero tendrías que vender más mochilas. Por cierto, ¿puedes trabajar el sábado?",
                "Tu jefa dice que... arréglate esa barba. Pareces un vagabundo, no un empleado.",
                "Tu jefa dice que... si quieres más dinero, vende tu riñón. Por cierto, ¿puedes trabajar el domingo?",
                "Tu jefa dice que... ¿aumento? ¡Pero si ya tienes un trabajo!",
                "Tu jefa dice que... la empresa está en crisis mientras ella se va de crucero.",
                "Tu jefa dice que... el año que viene seguro, confía en mí. Por cierto, ¿puedes trabajar el sábado?",
                "Tu jefa dice que... ¿has probado buscar monedas en la calle?",
                "Tu jefa dice que... con tu rendimiento deberías PAGAR por trabajar aquí. ¿Y ese día que te pusiste malo? Eso nos costó dinero.",
                "Tu jefa dice que... primero aprende a llegar puntual.",
                "Tu jefa dice que... ¿aumento? ¡Qué gracioso eres! Por cierto, ¿puedes trabajar el domingo?",
                "Tu jefa dice que... yo te lo daría, pero los de arriba no me dejan. Ya sabes cómo son.",
                "Tu jefa dice que... estás ganando experiencia, ¿no te basta? Y esas vacaciones que pediste en verano, ¿te parecen poco?",
                "Tu jefa dice que... te pagaremos en exposición y buen rollo.",
                "Tu jefa dice que... ya puedes entrenar sin pagar en el gimnasio, ¿qué más quieres?",
                "Tu jefa dice que... si tanto lo necesitas, vende cosas en Wallapop. Por cierto, ¿puedes trabajar el sábado?",
                "Tu jefa dice que... el café gratis es tu aumento.",
                "Tu jefa dice que... ¿aumento? No veo que vendas más que Pedro. Y encima te pones malo cada dos por tres.",
                "Tu jefa dice que... estamos esperando a que la economía mejore. Por cierto, ¿puedes trabajar el domingo?",
                "Tu jefa dice que... con 850€ vives como un rey en 1985.",
                "Tu jefa dice que... primero demuestra que mereces lo que ya ganas. ¿Y ese día de baja el mes pasado?",
                "Tu jefa dice que... agradece que no te hemos bajado el sueldo.",
                "Tu jefa dice que... ¿sabes cuánta gente querría tu puesto? Y tú cogiendo vacaciones...",
                "Tu jefa dice que... el trabajo en equipo no se paga, se siente. Por cierto, ¿puedes trabajar el sábado?",
                "Tu jefa dice que... hemos decidido invertir en un nuevo logo en vez de salarios. Ah, y necesitamos que vengas el domingo.",
                "Tu jefa dice que... ¿otra vez con lo mismo? La semana pasada te fuiste 'malo' y ahora quieres aumento.",
                "Tu jefa dice que... las vacaciones son un privilegio, no un derecho. Y menos si quieres más dinero.",
                "Tu jefa dice que... llevas mal puesto el uniforme. Así no puedo subirte el sueldo.",
                "Tu jefa dice que... ¿con esos pendientes? Primero quítatelos y luego hablamos de dinero.",
                "Tu jefa dice que... ese peinado no es adecuado para la empresa. Arréglate primero.",
                "Tu jefa dice que... el uniforme tiene que estar impecable. Ven mañana bien vestido y lo hablamos."
            ];

            const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];
            return { success: false, message: randomExcuse };
        }


        // NORMAL PROMOTION LOGIC
        const nextJob = this.getAvailablePromotions();
        if (!nextJob) return { success: false, message: 'No hay ascensos disponibles.' };

        if (Math.floor(this.monthsInCurrentJob) < nextJob.reqMonths) {
            return { success: false, message: `Faltan ${(nextJob.reqMonths - this.monthsInCurrentJob).toFixed(1)} meses de experiencia.` };
        }

        if (nextJob.reqEdu) {
            if (!this.checkEducation(nextJob.reqEdu)) return { success: false, message: `Necesitas estudios de tipo: ${nextJob.reqEdu}` };
        }

        // LIFESTYLE REQUIREMENTS (Status Ladder)
        if (nextJob.req) {
            const lsCheck = GameBalance.checkLifestyleReq(nextJob.req);
            if (!lsCheck.success) {
                return { success: false, message: `RRHH: "${lsCheck.message}"` };
            }
        }

        // SUCCESSFUL PROMOTION
        GameState.salary = nextJob.salary;
        GameState.jobTitle = nextJob.title;
        this.monthsInCurrentJob = 0;

        // Reset notification flag
        GameState.promotionNotified = false;

        return { success: true, message: `¡Ascendido a ${nextJob.title}! Nuevo salario base: ${nextJob.salary}€` };
    },

    checkAvailablePromotion() {
        if (GameState.jobType === 'gig' || GameState.jobType === 'unemployed') return;
        if (this.currentCareerPath === 'none' || this.currentCareerPath === 'entrepreneur') return;

        // Don't notify if already notified for this level
        if (GameState.promotionNotified) return;

        const nextJob = this.getAvailablePromotions();
        if (!nextJob) return;

        // Check requirements
        const reqMonths = nextJob.reqMonths;
        const currentMonths = this.monthsInCurrentJob;
        const isTimeOk = currentMonths >= reqMonths;
        const isEduOk = !nextJob.reqEdu || this.checkEducation(nextJob.reqEdu);

        if (isTimeOk && isEduOk) {
            GameState.promotionNotified = true;

            // PREMIUM NOTIFICATION
            const themeColor = '#8b5cf6'; // Violet/Purple for Career
            const icon = '🚀';

            let msg = `
                <div style="text-align: center; margin-bottom: 20px;">
                    <div style="font-size: 4rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px ${themeColor}66); animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);">${icon}</div>
                    <h3 style="color: ${themeColor}; margin: 0; font-size: 1.6rem; text-shadow: 0 0 10px ${themeColor}4d; font-weight: 800; letter-spacing: 1px;">¡ASCENSO DISPONIBLE!</h3>
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
                    text: '💼 Ir a Trabajo',
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

        // Check strict match for new system (e.g. "Grado en ADE")
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

        // Check Careers
        for (const [pathKey, jobs] of Object.entries(this.careers)) {
            const found = jobs.find(j => j.title === jobTitle);
            if (found) {
                targetJob = found;
                targetPath = pathKey;
                break;
            }
        }

        // Check Gigs
        if (!targetJob) {
            targetJob = GIGS_POOL.find(g => g.title === jobTitle);
            targetPath = 'temporary';
        }

        if (!targetJob) return { success: false, message: 'Oferta no válida.' };
        if (targetJob.reqEdu && !this.checkEducation(targetJob.reqEdu)) {
            return { success: false, message: `Requisito académico no cumplido: ${targetJob.reqEdu}` };
        }

        // LIFESTYLE CHECK FOR ENTRY LEVEL AND LATERAL MOVES
        if (targetJob.req) {
            const lsCheck = GameBalance.checkLifestyleReq(targetJob.req);
            if (!lsCheck.success) {
                return { success: false, message: `Requisitos de estatus no cumplidos: ${lsCheck.message}` };
            }
        }

        // STRICT EXPERIENCE CHECK
        // If applying from outside (Vacancy List), you can only enter at level 0 (Entry Level).
        // Higher positions must be earned via Promotion.
        if (targetJob.reqMonths > 0) {
            return { success: false, message: `Este puesto requiere experiencia interna previa. Debes empezar por un puesto de acceso (Nivel 0) y ascender.` };
        }

        if (GameState.company) {
            if (!force) {
                return { success: false, requiresConfirmation: true, message: 'Cierre de empresa requerido.' };
            }
            GameState.company = null;
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

        return { success: true, message: `¡Contratado como ${targetJob.title}!`, tutorialHandled: tutorialHandled };
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
            message: `"${msg}"\n\nTu salario ha subido un ${raisePct}% (+${formatCurrency(increase)}).`
        };
    }
};

/*******************************************************
 * TUTORIAL SYSTEM - Obligatory Guided Tutorial
 *******************************************************/
const TutorialSystem = {
    overlayElement: null,
    highlightedElements: [],

    // CSS styles for tutorial (injected once)
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

    // Lock scroll to prevent disorientation
    lockScroll() {
        document.body.style.overflow = 'hidden';
    },

    unlockScroll() {
        document.body.style.overflow = '';
    },

    showTooltip(targetSelectorOrElement, title, message, buttonText, onComplete) {
        // Remove existing tooltip
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

        // Check if top flows off screen, if so put below
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

        // Update arrow
        const arrow = tooltip.querySelector('.tutorial-arrow');
        if (arrowClass === 'hidden') {
            arrow.style.display = 'none';
        } else {
            arrow.className = `tutorial-arrow ${arrowClass}`;
        }

        // Button handler
        tooltip.querySelector('button').onclick = () => {
            tooltip.remove();
            if (onComplete) onComplete();
        };
    },

    hideTooltip() {
        const existing = document.querySelector('.tutorial-tooltip');
        if (existing) existing.remove();
    },

    // STEP 1: Choose Education
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

        // Button handlers with hover effects
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
            // Check if player can afford FP
            if (GameState.cash >= 500) {
                EducationModule.startCourse('fp_medio');
            } else {
                EducationModule.startCourse('bachillerato');
                showGameAlert('No tienes 500€ para FP. Te has matriculado en Bachillerato (gratis).', 'info');
            }
            GameState.tutorialFlags.educationChosen = true;
            this.step2_GoToWork();
        };
    },

    // STEP 2: Go to Work tab
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

            // Button handler
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

    // STEP 3: Accept a Gig
    step3_AcceptGig() {
        if (GameState.tutorialFlags.acceptedFirstGig) return;

        GameState.tutorialStep = 3;

        // Show premium styled explanation modal
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
                    // BLOCK everything except the gig section
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

            // PREMIUM GIG ACCEPTANCE
            const welcomeMsg = `
                <div style="text-align: center; margin-bottom: 20px;">
                    <div style="font-size: 4rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px rgba(250, 204, 21, 0.4)); animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);">⚡</div>
                    <h3 style="color: #facc15; margin: 0; font-size: 1.5rem; text-shadow: 0 0 10px rgba(250, 204, 21, 0.3);">¡Trabajo Aceptado!</h3>
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
                    TutorialSystem.lockScroll(); // Lock scroll
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

    // STEP 5: Degree completed
    onDegreeCompleted(degreeName) {
        if (GameState.tutorialFlags.completedFirstDegree) return;

        GameState.tutorialStep = 5;
        GameState.tutorialFlags.completedFirstDegree = true;

        // PREMIUM CELEBRATION MODAL
        const themeColor = '#4ade80'; // Green/Success (Match text) or Indigo? Plan said Indigo but text uses Green. Let's stick to Green for "Enhorabuena"/Success match.
        // Actually plan said "Premium Indigo Theme (Academic)". Let's switch to Indigo #818cf8 to match "Course Completed".
        // Wait, the user specifically mentioned "ENHORABUENA" and the Green checks. I'll use Green (#4ade80) to match the "Success" vibe of the original request's description "✅".

        // UPDATED DECISION: Use Indigo (#818cf8) for consistency with "Course Completed" (Step 4/5 boundary), 
        // BUT keep the success/checks vibe.

        const finalTheme = '#818cf8'; // Indigo
        const icon = '🎓';

        let successMsg = `
        <div style="text-align: center; margin-bottom: 20px;">
            <div style="font-size: 4rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px ${finalTheme}66); animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);">${icon}</div>
            <h3 style="color: ${finalTheme}; margin: 0; font-size: 1.6rem; text-shadow: 0 0 10px ${finalTheme}4d; font-weight: 800; letter-spacing: 1px;">${t('tutorial_well_done')}</h3>
        </div>

        <div style="background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.6)); border: 1px solid ${finalTheme}4d; border-radius: 16px; padding: 25px; text-align: center; margin-bottom: 25px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
            <div style="font-size: 0.85rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px;">${t('tutorial_education_complete')}</div>
            <div style="font-size: 1.6rem; font-weight: 800; color: #f8fafc; margin-bottom: 15px;">${getCourseTranslation(degreeName)}</div>
            
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

    // STEP 6: Accept Real Job
    step6_AcceptRealJob() {
        GameState.tutorialStep = 6;

        // Show explanation modal with visual style restored + blocking behavior
        showGameAlert(
            t('tutorial_jobs_unlocked_msg'),
            'success',
            `🎉 ${t('tutorial_jobs_unlocked')}`,
            () => {
                // BLOCK everything except the market section
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

    // STEP 7: Explain Job System
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

    // STEP 8: Force Housing (Mom kicks you out)
    step8_ForceHousing() {
        console.log('DEBUG: step8_ForceHousing Triggered');
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

            // BLOCK NAVIGATION, NEXT TURN, AND USER PROFILE
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
                        sofaBtn, // Pass element directly if possible, or selector string
                        'Opción de Emergencia',
                        'Es cutre, pero es barato. ¡Alquila el sofá de tu amigo por ahora!',
                        'Vale',
                        null
                    );
                } else {
                    // Fallback if button not found
                    this.showTooltip(
                        '#housing-options',
                        'Busca Casa',
                        'Selecciona "Sofá de un amigo" para no dormir en la calle.',
                        'Ok',
                        null
                    );
                }
            }, 600);
        };
    },

    // STEP 9: Independence Celebration & Summary Tour
    step9_Independence() {
        GameState.tutorialStep = 9;
        GameState.tutorialState.forceHousing = false; // Release lock
        GameState.tutorialFlags.independent = true;
        this.removeHighlights();
        this.hideTooltip();

        // UNBLOCK NAVIGATION, NEXT TURN, AND USER PROFILE
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

        // 1. Congratulate Modal with Premium Visuals
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

    // CONTEXTUAL TUTORIALS ROUTER
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

    // 1. Company Summary Tutorial
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
                        'Salud Financiera',
                        'Lo vital es que tus <strong>Ventas</strong> superen a tus <strong>Gastos Totales</strong>. <br><br>Si gastas más de lo que ingresas, quemarás tu caja y quebrarás.',
                        'Siguiente',
                        () => {
                            this.removeHighlights();
                            this.hideTooltip();

                            // STEP 2: News (Novedades) - NEW STEP
                            setTimeout(() => {
                                const newsCard = document.getElementById('comp-summary-news');
                                if (newsCard) {
                                    this.addHighlight(newsCard);
                                    newsCard.scrollIntoView({ behavior: 'auto', block: 'center' });

                                    this.showTooltip(
                                        newsCard,
                                        'Novedades',
                                        'Mantente al día. <br><br>Aquí verás <strong>quejas de empleados</strong>. <br><br>Será tu señal para <strong>contratar más personal</strong> o <strong>subirles el sueldo</strong>.',
                                        'Siguiente',
                                        () => {
                                            this.removeHighlights();
                                            this.hideTooltip();

                                            // STEP 3: General Status
                                            setTimeout(() => {
                                                const statusCard = document.getElementById('comp-status-card');
                                                if (statusCard) {
                                                    this.addHighlight(statusCard);
                                                    statusCard.scrollIntoView({ behavior: 'auto', block: 'center' });

                                                    this.showTooltip(
                                                        statusCard,
                                                        'Estado General',
                                                        'Aquí controlas tu <strong>Reputación</strong> y la capacidad de atender clientes.<br><br>Una buena reputación atrae más ventas, pero necesitas capacidad para atenderlas.',
                                                        'Ir a Finanzas',
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
                                    // Fallback if news card not found, go directly to status card
                                    // STEP 2: General Status (original STEP 2)
                                    setTimeout(() => {
                                        const statusCard = document.getElementById('comp-status-card');
                                        if (statusCard) {
                                            this.addHighlight(statusCard);
                                            statusCard.scrollIntoView({ behavior: 'auto', block: 'center' });

                                            this.showTooltip(
                                                statusCard,
                                                'Estado General',
                                                'Aquí controlas tu <strong>Reputación</strong> y la capacidad de atender clientes.<br><br>Una buena reputación atrae más ventas, pero necesitas capacidad para atenderlas.',
                                                'Ir a Finanzas',
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
                    // Should not happen if comp-summary-tab exists
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

    // 2. Company Personnel Tutorial
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
                    'Hacer Crecer el Equipo',
                    'Contratar empleados aumenta tu capacidad. <br><br>¡Elige bien! Cada empleado cuesta un salario mensual.<br><br><strong style="color: #ef4444;">IMPORTANTE: NO CONTRATES MÁS EMPLEADOS HASTA QUE SUBA LA DEMANDA O PERDERÁS DINERO</strong>',
                    'Entendido',
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

    // 3. Company Product Tutorial
    tutorial_CompanyProduct() {
        if (GameState.tutorialFlags.seenCompanyProduct) return;

        this.injectStyles();
        this.showOverlay();

        let attempts = 0;
        const check = setInterval(() => {
            attempts++;
            // NEW ROBUST TARGETING (Stable ID)
            const target = document.getElementById('comp-product-dev-card');

            if (target) {
                clearInterval(check);
                GameState.tutorialFlags.seenCompanyProduct = true;
                PersistenceModule.saveGame();
                this.lockScroll();

                // STEP 1: Product Development (I+D)
                this.addHighlight(target);
                target.scrollIntoView({ behavior: 'auto', block: 'center' });

                this.showTooltip(
                    target,
                    '1. Desarrollo de Producto',
                    '¡La calidad es clave! <br><br>Invierte en <strong>I+D</strong> para subir de nivel. A mayor nivel, más satisfechos estarán tus clientes.',
                    'Siguiente',
                    () => {
                        this.removeHighlights();
                        this.hideTooltip();

                        // STEP 2: Pricing Strategy
                        setTimeout(() => {
                            const pricing = document.getElementById('comp-pricing-card');
                            if (pricing) {
                                this.addHighlight(pricing);
                                pricing.scrollIntoView({ behavior: 'auto', block: 'center' });

                                this.showTooltip(
                                    pricing,
                                    '2. Estrategia de Precio',
                                    'El precio debe ser justo. <br><br>Si cobras más de lo que tu reputación permite, <strong>perderás ventas</strong>. Busca el equilibrio.',
                                    'Siguiente',
                                    () => {
                                        this.removeHighlights();
                                        this.hideTooltip();

                                        // STEP 3: Reputation Analysis
                                        setTimeout(() => {
                                            const rep = document.getElementById('comp-reputation-card');
                                            if (rep) {
                                                this.addHighlight(rep);
                                                rep.scrollIntoView({ behavior: 'auto', block: 'center' });

                                                this.showTooltip(
                                                    rep,
                                                    '3. Tu Reputación',
                                                    'Aquí ves si tus clientes están felices o enfadados.<br><br>Mantén la ✅ <strong>Calidad Real</strong> por encima de la <strong>Exigencia</strong>.',
                                                    'Siguiente',
                                                    () => {
                                                        this.removeHighlights();
                                                        this.hideTooltip();

                                                        // STEP 4: Providers
                                                        setTimeout(() => {
                                                            const prov = document.getElementById('comp-providers-section');
                                                            if (prov) {
                                                                this.addHighlight(prov);
                                                                prov.scrollIntoView({ behavior: 'auto', block: 'center' });

                                                                this.showTooltip(
                                                                    prov,
                                                                    '4. Proveedores',
                                                                    'Tus ingredientes importan. <br><br>Mejores proveedores suben la calidad, pero aumentan tus costes. ¡Tú decides!',
                                                                    'Entendido',
                                                                    () => {
                                                                        this.removeHighlights();
                                                                        this.hideOverlay();
                                                                        this.hideTooltip();
                                                                        this.unlockScroll();
                                                                    }
                                                                );
                                                            } else {
                                                                this.hideOverlay(); // Exit if missing
                                                            }
                                                        }, 500);
                                                    }
                                                );
                                            } else {
                                                this.hideOverlay(); // Exit if missing
                                            }
                                        }, 500);
                                    }
                                );
                            } else {
                                this.hideOverlay(); // Exit if missing
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

    // 4. Company Marketing Tutorial
    tutorial_CompanyMarketing() {
        if (GameState.tutorialFlags.seenCompanyMarketing) return;
        GameState.tutorialFlags.seenCompanyMarketing = true;
        PersistenceModule.saveGame();

        this.injectStyles();
        this.showOverlay();

        setTimeout(() => {
            // Find campaign buttons. They are usually inside a grid in comp-marketing-tab
            const marketingTab = document.getElementById('comp-marketing-tab');
            const campaigns = marketingTab ? marketingTab.querySelectorAll('button') : [];

            if (campaigns.length > 0) {
                // Highlight the first campaign button or the container
                const target = campaigns[0].parentElement; // The grid/container
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

    // 5. Company Finance Tutorial
    tutorial_CompanyFinance() {
        if (GameState.tutorialFlags.seenCompanyFinance) return;

        this.injectStyles();
        this.showOverlay();

        let attempts = 0;
        const check = setInterval(() => {
            attempts++;
            // New Robust ID Targeting
            const target = document.getElementById('comp-finance-movements-card');

            if (target) {
                clearInterval(check);
                GameState.tutorialFlags.seenCompanyFinance = true;
                PersistenceModule.saveGame();
                this.lockScroll();

                // STEP 1: Cash Movements
                this.addHighlight(target);
                target.scrollIntoView({ behavior: 'auto', block: 'center' });

                this.showTooltip(
                    target,
                    '1. Movimientos de Caja',
                    'Aquí mueves dinero entre tu empresa y tu bolsillo. <br><br>Puedes <strong>inyectar capital</strong> si falta liquidez o <strong>retirar beneficios</strong> cuando sobren.',
                    'Siguiente',
                    () => {
                        this.removeHighlights();
                        this.hideTooltip();

                        // STEP 2: CEO Salary
                        setTimeout(() => {
                            const salary = document.getElementById('comp-finance-salary-card');
                            if (salary) {
                                this.addHighlight(salary);
                                salary.scrollIntoView({ behavior: 'auto', block: 'center' });

                                this.showTooltip(
                                    salary,
                                    '2. Tu Salario',
                                    'Ponte un sueldo de <strong>1500€</strong> para cubrir tus gastos personales sin desangrar la empresa al principio.',
                                    'Siguiente',
                                    () => {
                                        this.removeHighlights();
                                        this.hideTooltip();

                                        // STEP 3: Danger Zone (Exit)
                                        setTimeout(() => {
                                            const danger = document.getElementById('comp-finance-danger-card');
                                            if (danger) {
                                                this.addHighlight(danger);
                                                danger.scrollIntoView({ behavior: 'auto', block: 'center' });

                                                this.showTooltip(
                                                    danger,
                                                    '3. Zona de Peligro',
                                                    '¿Te has cansado de esta empresa? <br><br>Aquí puedes <strong>VENDERLA (EXIT)</strong> y llevarte el dinero líquido a tu cuenta personal.',
                                                    'Entendido',
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

    // 4b. Company Marketing Tutorial V2 (Robust Fix)
    tutorial_CompanyMarketing_V2() {
        if (GameState.tutorialFlags.seenCompanyMarketing) return;

        this.injectStyles();
        this.showOverlay();

        let attempts = 0;
        const check = setInterval(() => {
            attempts++;
            // New Robust ID Targeting
            const target = document.getElementById('comp-marketing-infra-card');

            if (target) {
                clearInterval(check);
                GameState.tutorialFlags.seenCompanyMarketing = true;
                PersistenceModule.saveGame();

                // Lock scroll
                this.lockScroll();

                // STEP 1: Infrastructure
                this.addHighlight(target);
                target.scrollIntoView({ behavior: 'auto', block: 'center' });

                this.showTooltip(
                    target,
                    '1. Infraestructura',
                    'Invierte en tu equipo de marketing. <br><br>Mayor nivel = <strong>Más eficacia</strong> en tus campañas (más clientes por euro invertido).',
                    'Siguiente',
                    () => {
                        this.removeHighlights();
                        this.hideTooltip();

                        // STEP 2: Channels
                        setTimeout(() => {
                            const channels = document.getElementById('comp-marketing-channels-section');
                            if (channels) {
                                this.addHighlight(channels);
                                channels.scrollIntoView({ behavior: 'auto', block: 'center' });

                                this.showTooltip(
                                    channels,
                                    '2. Canales',
                                    '¿Dónde están tus clientes? <br><br>Cada canal tiene un coste y un impacto diferente. ¡Combínalos para maximizar tu alcance!',
                                    'Siguiente',
                                    () => {
                                        this.removeHighlights();
                                        this.hideTooltip();

                                        // STEP 3: Analysis
                                        setTimeout(() => {
                                            const analysis = document.getElementById('comp-marketing-analysis-card');
                                            if (analysis) {
                                                this.addHighlight(analysis);
                                                analysis.scrollIntoView({ behavior: 'auto', block: 'center' });

                                                this.showTooltip(
                                                    analysis,
                                                    '3. Análisis de Demanda',
                                                    'Aquí ves de dónde vienen tus clientes.<br><br>Tu crecimiento depende de tu Tráfico, Marketing, Reputación y el factor Orgánico (boca a boca).',
                                                    'Entendido',
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
    // Helper to continue the sequence (split for readability)
    continueToMonthlyFlow() {
        this.showOverlay();
        this.lockScroll();
        setTimeout(() => {
            // 1. Net Worth (Total Wealth)
            const netWorth = document.querySelector('.metric-card.net-worth');
            if (netWorth) {
                this.addHighlight('.metric-card.net-worth');
                netWorth.scrollIntoView({ behavior: 'auto', block: 'center' });
            }

            this.showTooltip(
                '.metric-card.net-worth',
                `🏛️ ${t('net_worth')}`,
                t('tutorial_net_worth_msg'),
                t('next'),
                () => {
                    this.removeHighlights();
                    this.hideTooltip();

                    // 2. Cash (Liquidity)
                    setTimeout(() => {
                        const cash = document.querySelector('.metric-card.cash');
                        if (cash) {
                            this.addHighlight('.metric-card.cash');
                            cash.scrollIntoView({ behavior: 'auto', block: 'center' });
                        }

                        this.showTooltip(
                            '.metric-card.cash',
                            `💵 ${t('cash')}`,
                            t('tutorial_cash_msg'),
                            t('next'),
                            () => {
                                this.removeHighlights();
                                this.hideTooltip();

                                // 3. Monthly Flow
                                setTimeout(() => {
                                    const mFlow = document.querySelector('.metric-card.monthly-flow');
                                    if (mFlow) {
                                        this.addHighlight('.metric-card.monthly-flow');
                                        mFlow.scrollIntoView({ behavior: 'auto', block: 'center' });
                                    }

                                    this.showTooltip(
                                        '.metric-card.monthly-flow',
                                        `📉 ${t('monthly_flow')}`,
                                        t('tutorial_flow_msg'),
                                        t('understood'),
                                        () => {
                                            this.removeHighlights();
                                            this.hideTooltip();
                                            this.hideOverlay(); // Remove blocking
                                            this.unlockScroll();

                                            // Final message
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

    // STOCK MARKET UNLOCK TUTORIAL (Triggered when netWorth >= 25000 for first time)
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

                    // Ensure no lingering overlay from previous tutorial steps
                    TutorialSystem.hideOverlay();
                    TutorialSystem.removeHighlights();

                    // Start Stock Tutorial with simple sequential modals
                    setTimeout(() => {
                        // Step 1: Chart explanation
                        showGameAlert(
                            t('tutorial_stock_step1'),
                            'info',
                            `📈 ${t('tutorial_stock')} (1/3)`,
                            () => {
                                // Step 2: Stock List
                                setTimeout(() => {
                                    showGameAlert(
                                        t('tutorial_stock_step2'),
                                        'info',
                                        `📈 ${t('tutorial_stock')} (2/3)`,
                                        () => {
                                            // Step 3: Buy/Sell
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

    // BANK UNLOCK TUTORIAL (Triggered when Year 3, Month 6)
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

                    // Ensure no lingering overlay
                    TutorialSystem.hideOverlay();
                    TutorialSystem.removeHighlights();

                    // Start Bank Tutorial with sequential modals
                    setTimeout(() => {
                        // Step 1: Bank intro
                        showGameAlert(
                            t('tutorial_bank_step1'),
                            'info',
                            `🏦 ${t('tutorial_bank')} (1/3)`,
                            () => {
                                // Step 2: Credit limit
                                setTimeout(() => {
                                    showGameAlert(
                                        t('tutorial_bank_step2'),
                                        'info',
                                        `🏦 ${t('tutorial_bank')} (2/3)`,
                                        () => {
                                            // Step 3: Encourage real estate
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

    // Check if tutorial should start
    checkStart() {
        if (GameState.tutorialFlags.tutorialComplete && GameState.tutorialStep !== 8) return;
        if (GameState.tutorialStep === 0 && !GameState.tutorialFlags.educationChosen) {
            this.step1_ChooseEducation();
        }
    }
};

/*******************************************************
 * UI
 *******************************************************/
const formatCurrency = (amount, decimals = 2) => {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(amount);
};
const formatPercent = (val) => (val * 100).toFixed(2) + '%';

/**
 * Styled replacement for native alert(). Shows a premium modal instead.
 * @param {string} message - Message to display (supports HTML)
 * @param {string} type - 'info', 'success', 'warning', 'error' (default: 'info')
 * @param {string} title - Optional title (auto-generated if not provided)
 * @param {Function} callback - Optional callback
 */
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
            title: 'Aviso',
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

    // Remove existing alert modal if any
    const existing = document.querySelector('.game-alert-overlay');
    if (existing) existing.remove();

    // Create premium modal
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
            Entendido
        </button>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Button handlers
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

    // Close on overlay click (Prevent for error/critical alerts or forced blocking)
    overlay.onclick = (e) => {
        if (!blocking && type !== 'error' && e.target === overlay) {
            overlay.style.animation = 'fadeIn 0.15s ease-out reverse';
            setTimeout(() => overlay.remove(), 150);
        }
    };

    // Close on Escape key (Prevent for error/critical alerts or forced blocking)
    const escHandler = (e) => {
        if (!blocking && type !== 'error' && e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
}

/**
 * Styled replacement for native confirm(). Shows a premium modal with Yes/No buttons.
 * Returns a Promise that resolves to true (confirmed) or false (cancelled).
 * @param {string} message - Message to display (supports HTML and \n for line breaks)
 * @param {string} title - Optional title
 * @param {string} confirmText - Text for confirm button (default: 'Confirmar')
 * @param {string} cancelText - Text for cancel button (default: 'Cancelar')
 * @returns {Promise<boolean>}
 */
function showGameConfirm(message, title = '¿Confirmar?', confirmText = 'Confirmar', cancelText = 'Cancelar') {
    return new Promise((resolve) => {
        // Remove existing confirm modal if any
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

        // Button handlers with hover effects
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

        document.getElementById('date-display').textContent = `Mes: ${GameState.month} | Año: ${GameState.year}`;
        const pName = document.getElementById('header-player-name');
        if (pName) {
            pName.textContent = GameState.playerName || 'Jugador';
        }
        const pNameDesktop = document.getElementById('header-player-name-desktop');
        if (pNameDesktop) {
            pNameDesktop.textContent = GameState.playerName || 'Jugador';
        }
    },

    // --- MODALS ---
    showModal(title, content, actions = [], isHTML = false) {
        // Remove existing
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
            // Default close
            const btn = document.createElement('button');
            btn.textContent = 'Cerrar';
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
            { text: 'Cancelar', style: 'secondary', fn: null },
            { text: 'Confirmar', style: 'primary', fn: onConfirm }
        ]);
    },
    updateDashboard() {
        const nw = updateNetWorth();

        // DATA PREP
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
            if (l.type === 'Hipotecario') reMortgage += l.remainingBalance;
        });
        let reEquity = reValue - reMortgage;

        let rentIncome = GameState.inventory.realEstate.reduce((acc, p) => acc + p.monthlyRent, 0);
        let holdingIncome = (GameState.ownedCompanies || []).reduce((acc, c) => acc + (c.profitLastMonth !== undefined ? c.profitLastMonth : (c.baselineProfit || 0)), 0);
        // Also add active company profit if receiving salary/dividends or just raw profit?
        // Request says "beneficio mes", usually implies net profit of the company.
        if (GameState.company) {
            // holdingIncome += (GameState.company.profitLastMonth || 0); 
            // FIX: User requested to NOT count company profit in personal flow, only salary.
            // Salary is already in GameState.salary.
        }

        let loanPayments = 0;
        GameState.loans.forEach(l => { loanPayments += l.monthlyPayment; });

        const totalIncome = GameState.salary + rentIncome + holdingIncome;
        const totalExpenses = GameState.expenses + loanPayments;
        const monthlyFlow = totalIncome - totalExpenses;

        let companyCount = (GameState.company ? 1 : 0) + (GameState.ownedCompanies ? GameState.ownedCompanies.length : 0);
        // holdingIncome is already calculated above as sum of profits

        // DOM UPDATE
        // DOM UPDATE
        const container = document.getElementById('dashboard-view');
        if (!container) return;

        // Clear existing to rebuild
        container.innerHTML = `
        <div class="dashboard-container">
            <div class="section-header">
                <h2>${t('dashboard_title')}</h2>
                <span style="color:#94a3b8; font-size:0.9rem;">${t('age')}: ${GameState.age} ${t('years')} | ${t('month')}: ${GameState.month}</span>
            </div>

            <!-- KPI ROW - Premium Design -->
            <div class="summary-kpi-row" style="display:flex; flex-wrap:wrap; gap:15px; margin-bottom:25px;">
                <div class="metric-card net-worth" style="flex:1.5; min-width: 200px; background: linear-gradient(145deg, rgba(250, 204, 21, 0.1), rgba(251, 191, 36, 0.05)); border: 1px solid rgba(250, 204, 21, 0.3); border-radius: 16px; padding: 20px; text-align: center;">
                    <div style="font-size: 2.5rem; margin-bottom: 8px; filter: drop-shadow(0 0 15px rgba(250, 204, 21, 0.4));">👑</div>
                    <span style="display:block; color:#94a3b8; font-size:0.7rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom:8px;">${t('net_worth')}</span>
                    <span style="font-size:1.8rem; font-weight:800; color:#facc15; text-shadow: 0 0 20px rgba(250, 204, 21, 0.3);">${formatCurrency(nw)}</span>
                </div>
                <div class="metric-card cash" style="flex:1.5; min-width: 200px; background: linear-gradient(145deg, rgba(34, 197, 94, 0.1), rgba(74, 222, 128, 0.05)); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 16px; padding: 20px; text-align: center;">
                    <div style="font-size: 2.5rem; margin-bottom: 8px; filter: drop-shadow(0 0 15px rgba(34, 197, 94, 0.4));">💵</div>
                    <span style="display:block; color:#94a3b8; font-size:0.7rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom:8px;">${t('cash_box')}</span>
                    <span style="font-size:1.8rem; font-weight:800; color:#4ade80; text-shadow: 0 0 20px rgba(34, 197, 94, 0.3);">${formatCurrency(cash)}</span>
                </div>
                <div class="metric-card monthly-flow" style="flex:1; min-width: 160px; background: linear-gradient(145deg, ${monthlyFlow >= 0 ? 'rgba(74, 222, 128, 0.1), rgba(34, 197, 94, 0.05)' : 'rgba(248, 113, 113, 0.1), rgba(239, 68, 68, 0.05)'}); border: 1px solid ${monthlyFlow >= 0 ? 'rgba(74, 222, 128, 0.3)' : 'rgba(248, 113, 113, 0.3)'}; border-radius: 16px; padding: 20px; text-align: center;">
                    <div style="font-size: 2.5rem; margin-bottom: 8px; filter: drop-shadow(0 0 15px ${monthlyFlow >= 0 ? 'rgba(74, 222, 128, 0.4)' : 'rgba(248, 113, 113, 0.4)'});">${monthlyFlow >= 0 ? '📈' : '📉'}</div>
                    <span style="display:block; color:#94a3b8; font-size:0.7rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom:8px;">${t('monthly_flow')}</span>
                    <span style="font-size:1.5rem; font-weight:800; color:${monthlyFlow >= 0 ? '#4ade80' : '#f87171'}; text-shadow: 0 0 15px ${monthlyFlow >= 0 ? 'rgba(74, 222, 128, 0.3)' : 'rgba(248, 113, 113, 0.3)'};">${monthlyFlow >= 0 ? '+' : ''}${formatCurrency(monthlyFlow)}</span>
                    <div style="margin-top: 10px; font-size: 0.75rem; color: #64748b;">
                        <span style="color: #4ade80;">▲ ${formatCurrency(totalIncome)}</span> · 
                        <span style="color: #f87171;">▼ ${formatCurrency(totalExpenses)}</span>
                    </div>
                </div>
            </div>

            <!-- ASSET BREAKDOWN - Premium Cards -->
            <div class="dashboard-grid">
                <div class="dashboard-card" style="background: linear-gradient(145deg, #1e293b, #0f172a); border: 1px solid #334155; border-radius: 16px; padding: 20px;">

                    <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #334155; margin-bottom:20px; padding-bottom:15px;">
                        <h3 style="margin:0; color:#cbd5e1; font-size:1.1rem; display: flex; align-items: center; gap: 10px;">
                            <span style="font-size: 1.3rem;">📈</span> ${t('financial_history')}
                        </h3>
                        <div style="display:flex; gap:5px; background: #0f172a; padding: 4px; border-radius: 8px;">
                            <button class="btn-filter ${UI.chartTimeframe === 6 ? 'active' : ''}" onclick="UI.chartTimeframe=6; UI.updateDashboard()" style="padding: 6px 12px; border: none; border-radius: 6px; cursor: pointer; font-size: 0.8rem; font-weight: 600; ${UI.chartTimeframe === 6 ? 'background: linear-gradient(135deg, #38bdf8, #0ea5e9); color: white;' : 'background: transparent; color: #94a3b8;'}">${t('chart_timeframe_6m')}</button>
                            <button class="btn-filter ${UI.chartTimeframe === 24 ? 'active' : ''}" onclick="UI.chartTimeframe=24; UI.updateDashboard()" style="padding: 6px 12px; border: none; border-radius: 6px; cursor: pointer; font-size: 0.8rem; font-weight: 600; ${UI.chartTimeframe === 24 ? 'background: linear-gradient(135deg, #38bdf8, #0ea5e9); color: white;' : 'background: transparent; color: #94a3b8;'}">${t('chart_timeframe_2y')}</button>
                            <button class="btn-filter ${UI.chartTimeframe === 999 ? 'active' : ''}" onclick="UI.chartTimeframe=999; UI.updateDashboard()" style="padding: 6px 12px; border: none; border-radius: 6px; cursor: pointer; font-size: 0.8rem; font-weight: 600; ${UI.chartTimeframe === 999 ? 'background: linear-gradient(135deg, #38bdf8, #0ea5e9); color: white;' : 'background: transparent; color: #94a3b8;'}">${t('chart_timeframe_max')}</button>
                        </div>
                    </div>
                    <div style="height:300px; width:100%;">
                        <canvas id="net-worth-chart"></canvas>
                    </div>
                    <!-- Custom Chart Legend (Interactive) -->
                    <div style="display: flex; justify-content: center; gap: 20px; margin-top: 15px; padding-top: 15px; border-top: 1px solid #334155;">
                        <div onclick="UI.toggleChartDataset('netWorth')" style="display: flex; align-items: center; gap: 8px; cursor: pointer; opacity: ${UI.chartVisibleDatasets.netWorth ? '1' : '0.4'}; transition: opacity 0.2s;">
                            <div style="width: 12px; height: 12px; background: #facc15; border-radius: 50%; box-shadow: 0 0 8px rgba(250, 204, 21, 0.5);"></div>
                            <span style="color: #facc15; font-size: 0.85rem; font-weight: 600; text-decoration: ${UI.chartVisibleDatasets.netWorth ? 'none' : 'line-through'};">${t('chart_legend_networth')}</span>
                        </div>
                        <div onclick="UI.toggleChartDataset('cash')" style="display: flex; align-items: center; gap: 8px; cursor: pointer; opacity: ${UI.chartVisibleDatasets.cash ? '1' : '0.4'}; transition: opacity 0.2s;">
                            <div style="width: 12px; height: 3px; background: #4ade80; border-radius: 2px; box-shadow: 0 0 8px rgba(74, 222, 128, 0.5);"></div>
                            <span style="color: #4ade80; font-size: 0.85rem; font-weight: 600; text-decoration: ${UI.chartVisibleDatasets.cash ? 'none' : 'line-through'};">${t('chart_legend_cash')}</span>
                        </div>
                        <div onclick="UI.toggleChartDataset('debt')" style="display: flex; align-items: center; gap: 8px; cursor: pointer; opacity: ${UI.chartVisibleDatasets.debt ? '1' : '0.4'}; transition: opacity 0.2s;">
                            <div style="width: 12px; height: 3px; background: #f87171; border-radius: 2px; box-shadow: 0 0 8px rgba(248, 113, 113, 0.5);"></div>
                            <span style="color: #f87171; font-size: 0.85rem; font-weight: 600; text-decoration: ${UI.chartVisibleDatasets.debt ? 'none' : 'line-through'};">${t('chart_legend_debt')}</span>
                        </div>
                    </div>
                </div>

                <div class="dashboard-card" style="background: linear-gradient(145deg, #1e293b, #0f172a); border: 1px solid #334155; border-radius: 16px; padding: 20px;">
                    <h3 style="margin-top:0; color:#cbd5e1; font-size:1.1rem; margin-bottom:20px; border-bottom:1px solid #334155; padding-bottom:15px; display: flex; align-items: center; gap: 10px;">
                        <span style="font-size: 1.3rem;">📊</span> ${t('asset_breakdown')}
                    </h3>
                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px; margin-bottom:20px;">
                        <div style="background: linear-gradient(145deg, rgba(74, 222, 128, 0.08), transparent); padding: 15px; border-radius: 12px; border: 1px solid rgba(74, 222, 128, 0.2);">
                            <div style="font-size: 1.5rem; margin-bottom: 5px;">💵</div>
                            <div style="font-size:0.7rem; color:#94a3b8; text-transform: uppercase; letter-spacing: 0.5px;">${t('chart_legend_cash')}</div>
                            <div style="font-size:1.2rem; font-weight:800; color:#4ade80;">${formatCurrency(cash)}</div>
                        </div>
                        <div style="background: linear-gradient(145deg, rgba(56, 189, 248, 0.08), transparent); padding: 15px; border-radius: 12px; border: 1px solid rgba(56, 189, 248, 0.2);">
                            <div style="font-size: 1.5rem; margin-bottom: 5px;">📈</div>
                            <div style="font-size:0.7rem; color:#94a3b8; text-transform: uppercase; letter-spacing: 0.5px;">${t('stocks')}</div>
                            <div style="font-size:1.2rem; font-weight:800; color:#38bdf8;">${formatCurrency(stocksVal)}</div>
                        </div>
                        <div style="background: linear-gradient(145deg, rgba(168, 85, 247, 0.08), transparent); padding: 15px; border-radius: 12px; border: 1px solid rgba(168, 85, 247, 0.2);">
                            <div style="font-size: 1.5rem; margin-bottom: 5px;">🏠</div>
                            <div style="font-size:0.7rem; color:#94a3b8; text-transform: uppercase; letter-spacing: 0.5px;">${t('nav_real_estate')}</div>
                            <div style="font-size:1.2rem; font-weight:800; color:#a855f7;">${formatCurrency(reEquity)}</div>
                        </div>
                        <div style="background: linear-gradient(145deg, rgba(251, 146, 60, 0.08), transparent); padding: 15px; border-radius: 12px; border: 1px solid rgba(251, 146, 60, 0.2);">
                            <div style="font-size: 1.5rem; margin-bottom: 5px;">🏢</div>
                            <div style="font-size:0.7rem; color:#94a3b8; text-transform: uppercase; letter-spacing: 0.5px;">${t('company_title')}</div>
                            <div style="font-size:1.2rem; font-weight:800; color:#fb923c;">${companyCount}</div>
                        </div>
                    </div>
                    <div style="border-top:1px solid #334155; padding-top:15px; background: linear-gradient(145deg, rgba(34, 197, 94, 0.05), transparent); margin: -5px -20px -20px -20px; padding: 15px 20px; border-radius: 0 0 16px 16px;">
                        <div style="display: flex; align-items: center; justify-content: space-between;">
                            <div>
                                <div style="font-size:0.7rem; color:#94a3b8; text-transform: uppercase; letter-spacing: 0.5px;">💰 Beneficio Empresas</div>
                                <div style="font-size:1.1rem; font-weight:800; color:${holdingIncome >= 0 ? '#4ade80' : '#f87171'}">${holdingIncome >= 0 ? '+' : ''}${formatCurrency(holdingIncome)}/mes</div>
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

        // DATA
        const stocks = StockMarket.stocks;
        const portfolio = GameState.inventory.stocks;

        // CALCS
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

        // NEW: Get Limits
        const limits = GameBalance.getLimits();
        const limitDisp = limits.stockCap === Infinity ? '∞' : formatCurrency(limits.stockCap);
        const limitPct = limits.stockCap === Infinity ? 0 : Math.min(100, (portValue / limits.stockCap) * 100);
        const isLimitReached = limits.stockCap !== Infinity && portValue >= limits.stockCap;

        // RENDER
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

                        <!-- MARKET HERO - Premium Design -->
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
                                        <button onclick="UI.openStockModal(StockMarket.getStock('${p.symbol}'))" style="background:#dc2626; color:white; border:none; padding:6px 12px; border-radius:4px; cursor:pointer; font-size:0.85rem; font-weight:600;">VENDER</button>
                                    </div>
                                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; font-size:0.85rem;">
                                        <div>
                                            <div style="color:#94a3b8; font-size:0.75rem;">Cantidad</div>
                                            <div style="color:white; font-weight:600;">${p.quantity}</div>
                                        </div>
                                        <div>
                                            <div style="color:#94a3b8; font-size:0.75rem;">Precio Medio</div>
                                            <div style="color:white; font-weight:600;">${formatCurrency(p.avgPrice)}</div>
                                        </div>
                                        <div>
                                            <div style="color:#94a3b8; font-size:0.75rem;">Valor Actual</div>
                                            <div style="color:white; font-weight:600;">${formatCurrency(val)}</div>
                                        </div>
                                        <div>
                                            <div style="color:#94a3b8; font-size:0.75rem;">Ganancia/Pérdida</div>
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

        // EVENTS
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

        // NEW MOBILE-FIRST LAYOUT
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


                        <!-- 1. HEADER (Fixed) - Premium Design -->
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
                                    Rendimiento: <span id="chart-roi-display" style="color: white; font-weight: bold;">--</span>
                                </div>
                                <div style="height:180px; width:100%; padding: 10px;">
                                    <canvas id="stock-modal-chart"></canvas>
                                </div>
                            </div>

                            <!-- Timeframe Selectors -->
                            <div class="timeframe-segmented" style="display:flex; background:#0f172a; padding:5px; border-radius:10px; margin-bottom:15px; border: 1px solid #334155;">
                                <button class="btn-seg" data-tf="6" onclick="UI.changeTimeframe(6)" style="flex:1; background:transparent; border:none; color:#94a3b8; padding:10px; border-radius:8px; font-weight: 600; font-size: 0.85rem;">6 Meses</button>
                                <button class="btn-seg active" data-tf="24" onclick="UI.changeTimeframe(24)" style="flex:1; background: linear-gradient(135deg, #38bdf8, #0ea5e9); border:none; color:white; padding:10px; border-radius:8px; font-weight: 700; font-size: 0.85rem;">2 Años</button>
                                <button class="btn-seg" data-tf="999" onclick="UI.changeTimeframe(999)" style="flex:1; background:transparent; border:none; color:#94a3b8; padding:10px; border-radius:8px; font-weight: 600; font-size: 0.85rem;">Todo</button>
                            </div>


                        </div>

                        <!-- 3. FOOTER (Fixed Actions) - Premium Buttons -->
                        <div class="ops-footer" style="flex:0 0 auto; border-top:1px solid #334155; padding-top:15px; margin-top:10px;">
                            
                            <!-- Compact Portfolio Stats -->
                            <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:0.85rem; color:#cbd5e1; background:rgba(15, 23, 42, 0.5); padding:8px 12px; border-radius:8px; border:1px solid #334155;">
                                <div>
                                    <span style="color:#94a3b8;">En Cartera:</span> 
                                    <strong style="color:#38bdf8;">${owned}</strong>
                                </div>
                                <div>
                                    <span style="color:#94a3b8;">Valor:</span> 
                                    <strong style="color:#facc15;">${formatCurrency(owned * stock.price)}</strong>
                                </div>
                            </div>

                            <div style="margin-bottom:12px;">
                                <input type="number" id="stock-action-qty" placeholder="Cantidad de Acciones" 
                                    style="width:100%; padding:14px; background: linear-gradient(145deg, #1e293b, #0f172a); border:1px solid #475569; border-radius:10px; color:white; font-size:1.1rem; text-align:center; font-weight: 600;">
                            </div>
                            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
                                <button id="btn-modal-buy" class="btn-action" style="background: linear-gradient(135deg, #22c55e, #16a34a); color:white; border:none; padding:14px; border-radius:10px; font-weight:700; font-size:1rem; text-transform: uppercase; letter-spacing: 0.5px; cursor: pointer; transition: all 0.2s;">COMPRAR</button>
                                <button id="btn-modal-sell" class="btn-action" style="background: linear-gradient(135deg, #ef4444, #dc2626); color:white; border:none; padding:14px; border-radius:10px; font-weight:700; font-size:1rem; text-transform: uppercase; letter-spacing: 0.5px; cursor: pointer; transition: all 0.2s;">VENDER</button>
                            </div>
                        </div>

                    </div>
                    `;


        // Overwrite the default modal buttons logic by passing empty array
        // We handle buttons manually inside the HTML
        // CRITICAL: We replace \n with space because UI.showModal naïvely replaces \n with <br>, breaking HTML tags.
        this.showModal(' ', msg.replace(/\n/g, ' '), [], true);

        // Attach Handlers
        setTimeout(() => {
            // Title fix (hack to remove default header if showModal adds one)
            const modalTitle = document.querySelector('#modal-content h2');
            if (modalTitle) modalTitle.style.display = 'none'; // Hide default title

            // MOBILE FIX: Add wrapper class for full-screen handling
            const modalContent = document.getElementById('modal-content');
            if (modalContent) modalContent.classList.add('stock-modal-wrapper');

            // Close button handler
            document.getElementById('btn-close-stock-modal').onclick = (e) => {
                const overlay = e.target.closest('.custom-modal-overlay');
                if (overlay) overlay.remove();
            };

            document.getElementById('btn-modal-buy').onclick = (e) => {
                const qty = parseInt(document.getElementById('stock-action-qty').value);
                if (!qty || qty <= 0) return showGameAlert('Cantidad inválida', 'warning');
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
                if (!qty || qty <= 0) return showGameAlert('Cantidad inválida', 'warning');
                if (owned < qty) return showGameAlert('No tienes suficientes acciones', 'warning');
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

        // DATA
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
            .filter(l => !l.type.includes('Hipotecario'))
            .reduce((sum, l) => sum + l.remainingBalance, 0);

        const remainingLimit = Math.max(0, limit - currentDebtForLimit);

        // RENDER
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
                                    <span style="font-size: 1.5rem;">🏦</span> Solicitar Financiación
                                </h3>
                                
                                <div class="loan-input-group">
                                    <label>Cantidad a solicitar (€)</label>
                                    <input type="number" id="loan-amount-input" class="loan-input" placeholder="Ej. 50000" min="1000" step="1000">
                                </div>
                                <div class="loan-input-group">
                                    <label>Plazo: <span id="loan-years-val" style="color:#facc15; font-weight:bold;">2 años</span></label>
                                    <input type="range" id="loan-years-input" min="1" max="5" value="2" style="width:100%; accent-color:#facc15; height: 8px;">
                                </div>

                                <div class="loan-summary">
                                    <div style="display:flex; justify-content:space-between; margin-bottom:12px; align-items: center;">
                                        <span style="color: #94a3b8; font-size: 0.9rem;">🔴 Tipo de Interés</span>
                                        <span style="color:#f87171; font-weight:700; font-size: 1.1rem;">12.0% TAE</span>
                                    </div>
                                    <div style="display:flex; justify-content:space-between; font-size:1.2rem; border-top:1px solid #334155; padding-top:12px; margin-top:10px; align-items: center;">
                                        <span style="color: #94a3b8;">💰 Cuota Mensual</span>
                                        <span id="loan-monthly-preview" style="color:#facc15; font-weight:800; font-size: 1.4rem;">0,00 €</span>
                                    </div>
                                </div>

                                <button id="btn-request-loan-dynamic" class="btn-action-primary" style="background: linear-gradient(135deg, #facc15, #eab308); color:#0f172a; margin-top:25px; width: 100%; padding: 14px; font-size: 1rem; border-radius: 12px; font-weight: 700;">🚀 Solicitar Préstamo</button>
                            </div>

                            <!-- RIGHT: ACTIVE LOANS -->
                            <div>
                                <h3 style="margin-top:0; color:#94a3b8; margin-bottom:20px; display: flex; align-items: center; gap: 10px;">
                                    <span style="font-size: 1.3rem;">📋</span> Préstamos Activos (${loans.length})
                                </h3>
                                <div id="active-loans-wrapper">
                                    ${loans.length === 0 ?
                `<div style="background: linear-gradient(145deg, rgba(74, 222, 128, 0.05), #0f172a); border:1px solid rgba(74, 222, 128, 0.2); padding:30px; border-radius:16px; text-align:center;">
                                        <div style="font-size: 3rem; margin-bottom: 15px; filter: drop-shadow(0 0 10px rgba(74, 222, 128, 0.3));">🎉</div>
                                        <p style="color:#4ade80; font-weight: 700; font-size: 1.1rem; margin: 0;">¡Sin deudas!</p>
                                        <p style="color:#94a3b8; font-size: 0.9rem; margin-top: 8px;">No tienes préstamos activos.</p>
                                    </div>` :
                loans.map(loan => {
                    const progress = ((loan.termMonths - loan.remainingMonths) / loan.termMonths) * 100;
                    const loanIcon = loan.type.includes('Hipotecario') ? '🏠' : '💳';
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
                                                    <div><span style="color:#94a3b8;">Cuota:</span> <span style="color: #facc15; font-weight: 600;">${formatCurrency(loan.monthlyPayment)}</span></div>
                                                    <div><span style="color:#94a3b8;">Restan:</span> <span style="font-weight: 600;">${loan.remainingMonths} meses</span></div>
                                                </div>
                                                <div class="loan-progress">
                                                    <div class="loan-bar" style="width:${progress}%"></div>
                                                </div>
                                                <div style="display: flex; gap: 10px; margin-top: 12px;">
                                                    <button class="btn-pay-loan" data-id="${loan.id}" style="flex: 1; background: linear-gradient(135deg, #ef4444, #dc2626); color:white; border:none; border-radius:8px; padding:10px; cursor:pointer; font-size:0.85rem; font-weight: 700;">Liquidar</button>
                                                    <button class="btn-pay-partial" data-id="${loan.id}" style="flex: 1; background: linear-gradient(135deg, #3b82f6, #2563eb); color:white; border:none; border-radius:8px; padding:10px; cursor:pointer; font-size:0.85rem; font-weight: 700;">Amortizar</button>
                                                </div>
                                                <div style="font-size:0.75rem; color:#64748b; margin-top:10px; text-align: center;">Interés: ${(loan.interestRate * 100).toFixed(2)}% anual</div>
                                            </div>
                                            `;
                }).join('')
            }
                                </div>
                            </div>
                        </div>
                    </div>
                `;


        // EVENTS
        const amountIn = document.getElementById('loan-amount-input');
        const yearsIn = document.getElementById('loan-years-input');
        const yearsVal = document.getElementById('loan-years-val');
        const monthlyPrev = document.getElementById('loan-monthly-preview');
        const btnReq = document.getElementById('btn-request-loan-dynamic');

        const updateCalc = () => {
            const amount = parseFloat(amountIn.value) || 0;
            const years = parseInt(yearsIn.value);
            yearsVal.textContent = `${years} años`;
            if (amount > 0) {
                // Formula copy from Bank.takeLoan logic for preview
                const r = 0.12 / 12;
                const n = years * 12;
                const pmt = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
                monthlyPrev.textContent = formatCurrency(pmt);
            } else {
                monthlyPrev.textContent = "0,00 €";
            }
        };

        amountIn.addEventListener('input', updateCalc);
        yearsIn.addEventListener('input', updateCalc);

        btnReq.addEventListener('click', () => {
            const amount = parseFloat(amountIn.value);
            const years = parseInt(yearsIn.value);
            if (!amount || amount <= 0) return UI.showModal('Error', 'Introduce una cantidad válida.', [{ text: 'Cerrar', style: 'secondary', fn: null }]);

            const res = BankModule.takeLoan(amount, years);
            if (res.success) {
                UI.showModal('Solicitud Aprobada', res.message, [{ text: 'Excelente', style: 'success', fn: null }]);
                UI.updateHeader();
                UI.updateDashboard(); // Reflow cash
                UI.updateBank(BankModule);
            } else {
                UI.showModal('Solicitud Denegada', res.message, [{ text: 'Entendido', style: 'danger', fn: null }]);
            }
        });

        container.querySelectorAll('.btn-pay-loan').forEach(btn => {
            btn.onclick = (e) => {
                const id = parseInt(e.target.dataset.id); // Parse ID!
                const res = BankModule.payLoanTotally(id);

                if (res.success) {
                    // PREMIUM DEBT FREE MESSAGE
                    const themeColor = '#10b981'; // Emerald
                    const icon = '💸';

                    let freeMsg = `
                        <div style="text-align: center; margin-bottom: 20px;">
                            <div style="font-size: 4rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px ${themeColor}66); animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);">${icon}</div>
                            <h3 style="color: ${themeColor}; margin: 0; font-size: 1.6rem; text-shadow: 0 0 10px ${themeColor}4d; font-weight: 800; letter-spacing: 1px;">¡LIBRE DE DEUDAS!</h3>
                        </div>

                        <div style="background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.6)); border: 1px solid ${themeColor}4d; border-radius: 16px; padding: 25px; text-align: center; margin-bottom: 25px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                            <div style="font-size: 0.85rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px;">Préstamo Liquidado</div>
                            <div style="font-size: 1.6rem; font-weight: 800; color: #f8fafc; margin-bottom: 15px;">100% Pagado</div>
                            
                            <div style="display: inline-block; background: ${themeColor}26; border: 1px solid ${themeColor}4d; padding: 10px 20px; border-radius: 30px;">
                                <span style="color: ${themeColor}; font-weight: 700; font-size: 1.1rem;">Libertad +1</span>
                            </div>
                        </div>

                        <p style="text-align: center; color: #cbd5e1; font-size: 1rem; line-height: 1.6; margin: 0; padding: 0 10px;">
                            Has liquidado totalmente este préstamo. Una carga menos en tu camino a la riqueza.
                        </p>
                    `;

                    UI.showModal(' ', freeMsg, [{ text: '¡Excelente!', style: 'success', fn: null }], true);
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
                                <p style="margin-bottom:10px;">Introduce la cantidad a amortizar:</p>
                                <input type="number" id="amortize-input-${loanId}" placeholder="Ej: 5000" style="width:100%; padding:10px; border-radius:4px; border:1px solid #334155; background:#1e293b; color:white;">
                            `;

                UI.showModal('Amortizar Préstamo', modalContent, [
                    {
                        text: 'Confirmar Pago',
                        style: 'primary',
                        fn: () => {
                            const input = document.getElementById(`amortize-input-${loanId}`);
                            if (!input) return;
                            const val = parseInt(input.value);

                            if (isNaN(val) || val <= 0) {
                                // Small delay to show error after modal closes, or just alert? 
                                // Alert is safer here to not break flow if modal closes. 
                                // Actually re-opening modal is better but complex.
                                showGameAlert('Cantidad inválida.', 'warning');
                                return;
                            }

                            const res = BankModule.payLoanPartial(loanId, val);
                            if (res.success) {
                                // PREMIUM AMORTIZATION MESSAGE
                                const themeColor = '#34d399'; // Emerald 400
                                const icon = '📉';

                                let amortMsg = `
                                    <div style="text-align: center; margin-bottom: 20px;">
                                        <div style="font-size: 4rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px ${themeColor}66); animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);">${icon}</div>
                                        <h3 style="color: ${themeColor}; margin: 0; font-size: 1.6rem; text-shadow: 0 0 10px ${themeColor}4d; font-weight: 800; letter-spacing: 1px;">AMORTIZACIÓN</h3>
                                    </div>

                                    <div style="background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.6)); border: 1px solid ${themeColor}4d; border-radius: 16px; padding: 25px; text-align: center; margin-bottom: 25px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                                        <div style="font-size: 0.85rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px;">Capital Reducido</div>
                                        <div style="font-size: 1.6rem; font-weight: 800; color: #f8fafc; margin-bottom: 15px;">-${formatCurrency(val)}</div>
                                        
                                        <div style="display: inline-block; background: ${themeColor}26; border: 1px solid ${themeColor}4d; padding: 10px 20px; border-radius: 30px;">
                                            <span style="color: ${themeColor}; font-weight: 700; font-size: 1.1rem;">Intereses ⬇️</span>
                                        </div>
                                    </div>

                                    <p style="text-align: center; color: #cbd5e1; font-size: 1rem; line-height: 1.6; margin: 0; padding: 0 10px;">
                                        Has reducido tu deuda principal. Tus cuotas mensuales bajarán.
                                    </p>
                                `;
                                UI.showModal(' ', amortMsg, [{ text: 'Genial', style: 'success', fn: null }], true);
                                UI.updateBank(BankModule);
                                UI.updateHeader();
                                UI.updateDashboard();
                            } else {
                                UI.showModal('Error', res.message, [{ text: 'Cerrar', style: 'secondary', fn: null }]);
                            }
                        }
                    },
                    { text: 'Cancelar', style: 'secondary', fn: null }
                ]);
            };
        });
    },
    updateRealEstate(REModule) {
        const container = document.getElementById('real-estate-view');
        if (!container) return;

        // DATA
        const properties = REModule.availableProperties;
        const owned = GameState.inventory.realEstate;

        // Stats for Hero
        let totalVal = 0;
        let totalRent = 0;
        let totalEquity = 0;
        let totalMortgagePayment = 0;

        owned.forEach(p => {
            totalVal += p.price;
            totalRent += p.monthlyRent;
        });

        // Calculate Equity and Mortgage Payments
        let mortgageDebt = 0;
        GameState.loans.forEach(l => {
            if (l.type.includes('Hipotecario')) {
                mortgageDebt += l.remainingBalance;
                totalMortgagePayment += l.monthlyPayment;
            }
        });
        totalEquity = totalVal - mortgageDebt;

        // RENDER
        container.innerHTML = `
                    <div class="dashboard-container">
                        <div class="section-header">
                            <h2>Bienes Inmobiliarios</h2>
                            <span style="color:#94a3b8; font-size:0.9rem;">Propiedades: ${owned.length}</span>
                        </div>

                        <!-- LIMIT ALERT Real Estate -->
                        ${(() => {
                const limits = GameBalance.getLimits();
                const limitDisp = limits.reCap === Infinity ? '∞' : limits.reCap;
                const limitPct = limits.reCap === Infinity ? 0 : Math.min(100, (owned.length / limits.reCap) * 100);
                const isLimitReached = limits.reCap !== Infinity && owned.length >= limits.reCap;

                return `
                            <div style="margin-bottom: 20px; background: #0f172a; border: 1px solid #334155; border-radius: 12px; padding: 15px;">
                                <div style="display:flex; justify-content:space-between; margin-bottom: 8px;">
                                    <span style="color:#94a3b8; font-size:0.85rem;">Límite de Propiedades (Según Vivienda)</span>
                                    <span style="color:${isLimitReached ? '#f87171' : '#cbd5e1'}; font-weight:700; font-size:0.9rem;">
                                        ${owned.length} / ${limitDisp}
                                    </span>
                                </div>
                                <div style="background:#1e293b; height:8px; border-radius:4px; overflow:hidden;">
                                    <div style="width:${limitPct}%; height:100%; background:${isLimitReached ? '#f87171' : '#a855f7'}; transition: width 0.3s;"></div>
                                </div>
                                ${isLimitReached ? '<div style="color:#f87171; font-size:0.8rem; margin-top:5px;">⚠️ Has alcanzado tu límite de propiedades. Mejora tu vivienda para expandir tu imperio.</div>' : ''}
                            </div>
                            `;
            })()}

                        <!-- HERO STATS - Premium Design -->
                        <div class="re-stats-container" style="display:flex; flex-wrap:wrap; gap:15px; margin-bottom:25px;">
                            <div class="re-stat-card" style="flex:2; min-width: 200px; background: linear-gradient(145deg, rgba(250, 204, 21, 0.1), rgba(251, 191, 36, 0.05)); border: 1px solid rgba(250, 204, 21, 0.3); border-radius: 16px; padding: 20px; text-align: center; position: relative; overflow: hidden;">
                                <div style="font-size: 2rem; margin-bottom: 8px; filter: drop-shadow(0 0 10px rgba(250, 204, 21, 0.4));">🏛️</div>
                                <span style="display:block; color:#94a3b8; font-size:0.75rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom:8px;">Patrimonio Neto</span>
                                <span style="font-size:1.6rem; font-weight:800; color:#facc15; text-shadow: 0 0 20px rgba(250, 204, 21, 0.3);">${formatCurrency(totalEquity)}</span>
                            </div>
                            <div class="re-stat-card" style="flex:1; min-width: 140px; background: linear-gradient(145deg, rgba(74, 222, 128, 0.1), rgba(34, 197, 94, 0.05)); border: 1px solid rgba(74, 222, 128, 0.3); border-radius: 16px; padding: 20px; text-align: center; position: relative; overflow: hidden;">
                                <div style="font-size: 2rem; margin-bottom: 8px; filter: drop-shadow(0 0 10px rgba(74, 222, 128, 0.4));">💰</div>
                                <span style="display:block; color:#94a3b8; font-size:0.75rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom:8px;">Rentas / mes</span>
                                <span style="font-size:1.3rem; font-weight:800; color:#4ade80; text-shadow: 0 0 15px rgba(74, 222, 128, 0.3);">+${formatCurrency(totalRent)}</span>
                            </div>
                            <div class="re-stat-card" style="flex:1; min-width: 140px; background: linear-gradient(145deg, rgba(248, 113, 113, 0.1), rgba(239, 68, 68, 0.05)); border: 1px solid rgba(248, 113, 113, 0.3); border-radius: 16px; padding: 20px; text-align: center; position: relative; overflow: hidden;">
                                <div style="font-size: 2rem; margin-bottom: 8px; filter: drop-shadow(0 0 10px rgba(248, 113, 113, 0.4));">🏦</div>
                                <span style="display:block; color:#94a3b8; font-size:0.75rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom:8px;">Hipotecas / mes</span>
                                <span style="font-size:1.3rem; font-weight:800; color:#f87171; text-shadow: 0 0 15px rgba(248, 113, 113, 0.3);">-${formatCurrency(totalMortgagePayment)}</span>
                            </div>
                        </div>

                        <!-- MARKET -->
                        <div class="job-section-spacer">
                            <h3 style="color:#cbd5e1; margin-bottom:20px;">🏙️ Mercado Inmobiliario</h3>
                            <div class="market-grid">
                                ${properties.map(prop => {
                const pricePerM2 = prop.price / prop.sizeM2;
                const isGoodDeal = pricePerM2 < prop.zoneAvgPrice;
                const dealText = isGoodDeal ? 'Chollo' : 'Sobreprecio';
                const dealClass = isGoodDeal ? 'good-deal' : 'bad-deal';
                const roi = (prop.monthlyRent * 12) / prop.price;

                return `
                                    <div class="property-card-expert">
                                        <div class="prop-img" style="display:flex; align-items:center; justify-content:center; background:#1e293b; font-size:4rem;">
                                            ${prop.icon || '🏠'}
                                            <span class="deal-badge ${dealClass}">${dealText}</span>
                                        </div>
                                        <div class="prop-content">
                                            <h4 style="margin:0 0 5px 0; color:#fff;">${prop.name}</h4>
                                            <p style="color:#94a3b8; font-size:0.85rem; margin-bottom:10px;">
                                                ${prop.sizeM2}m² | Zona: ${formatCurrency(prop.zoneAvgPrice)}/m²
                                            </p>
                                            <div class="prop-financials">
                                                <div>
                                                    <span class="label">Precio</span>
                                                    <span class="value" style="color:#facc15">${formatCurrency(prop.price)}</span>
                                                </div>
                                                <div>
                                                    <span class="label">Alquiler</span>
                                                    <span class="value" style="color:#4ade80">+${formatCurrency(prop.monthlyRent)}/mes</span>
                                                </div>
                                                <div>
                                                    <span class="label">Entrada (20%)</span>
                                                    <span class="value">${formatCurrency(prop.price * prop.downPaymentPct)}</span>
                                                </div>
                                                <div>
                                                    <span class="label">Rentab.</span>
                                                    <span class="value">${((prop.monthlyRent * 12 / prop.price) * 100).toFixed(1)}%</span>
                                                </div>
                                            </div>
                                            <div style="margin-top:15px; display:flex; gap:10px;">
                                                <button class="btn-buy-prop-dynamic btn-action-primary" data-id="${prop.id}" data-mortgage="true">Comprar (Hipoteca)</button>
                                                <button class="btn-buy-prop-dynamic btn-action-primary" data-id="${prop.id}" data-mortgage="false" style="background:#475569; border:1px solid #94a3b8;">Contado</button>
                                            </div>
                                        </div>
                                    </div>
                                    `;
            }).join('')}
                            </div>
                        </div>

                        <!-- OWNED -->
                        <div class="dashboard-card">
                            <h3 style="margin-top:0; color:#cbd5e1; margin-bottom:15px; border-bottom:1px solid #334155; padding-bottom:10px;">🔑 Mis Propiedades</h3>
                             ${owned.length === 0 ? '<p style="color:#64748b;">No tienes propiedades en cartera.</p>' :
                '<div style="display:grid; gap:10px;">' +
                owned.map(prop => {
                    const purchasePrice = prop.purchasePrice || prop.price; // Fallback
                    const diff = prop.price - purchasePrice;
                    const pct = ((diff / purchasePrice) * 100).toFixed(2);
                    const color = diff >= 0 ? '#4ade80' : '#f87171';
                    const sign = diff >= 0 ? '+' : '';

                    const mortgage = GameState.loans.find(l => l.id === prop.mortgageId);
                    const debtHtml = mortgage
                        ? `<div>Deudas: <span style="color:#f87171">-${formatCurrency(mortgage.monthlyPayment)}/mes</span></div>`
                        : '';

                    return `
                                    <div style="background:#0f172a; padding:15px; border-radius:8px; display:flex; justify-content:space-between; align-items:center;">
                                        <div>
                                            <strong>${prop.name}</strong>
                                            <div style="font-size:0.85rem; color:#94a3b8; margin-top:5px;">
                                                <div>Compra: ${formatCurrency(purchasePrice)} | Actual: ${formatCurrency(prop.price)}</div>
                                                <div style="color:${color}; font-weight:bold;">Revalorización: ${sign}${pct}%</div>
                                                <div>Rentas: <span style="color:#4ade80">+${formatCurrency(prop.monthlyRent)}/mes</span></div>
                                                ${debtHtml}
                                            </div>
                                        </div>
                                        <button class="btn-sell-prop-dynamic" data-id="${prop.id}" style="background:#ef4444; color:white; border:none; padding:5px 15px; border-radius:4px; cursor:pointer;">Vender</button>
                                    </div>
                                `;
                }).join('') +
                '</div>'
            }
                        </div>
                    </div>
                `;

        // BIND EVENTS
        container.querySelectorAll('.btn-buy-prop-dynamic').forEach(btn => {
            btn.onclick = (e) => {
                const id = parseInt(e.target.dataset.id);
                const prop = REModule.availableProperties.find(p => p.id === id);
                if (!prop) return;

                const useMortgage = e.target.dataset.mortgage === 'true';

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
                            <h3 style="color:#facc15; margin:0 0 5px 0;">Configurar Hipoteca</h3>
                            <p style="color:#cbd5e1; font-size:1rem; margin-bottom:20px;">${prop.name}</p>

                            <div style="background:rgba(15, 23, 42, 0.6); border-radius:12px; padding:20px; text-align:left; border:1px solid #334155;">
                                <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                                    <span style="color:#94a3b8;">Valor Propiedad:</span>
                                    <span style="color:#e2e8f0; font-weight:700;">${formatCurrency(prop.price)}</span>
                                </div>
                                <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                                    <span style="color:#94a3b8;">Entrada (20%):</span>
                                    <span style="color:#ef4444; font-weight:700;">- ${formatCurrency(downPayment)}</span>
                                </div>
                                <div style="border-top:1px dashed #475569; margin:10px 0;"></div>
                               <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                                    <span style="color:#f97316; font-weight:600;">PRÉSTAMO:</span>
                                    <span style="color:#f97316; font-weight:800; font-size:1.1rem;">${formatCurrency(loanAmount)}</span>
                                </div>
                                <div style="display:flex; justify-content:space-between; font-size:0.85rem;">
                                   <span style="color:#94a3b8;">Interés Anual:</span>
                                   <span style="color:#fff;">${(rateAnnual * 100).toFixed(2)}%</span>
                                </div>
                            </div>
                            
                            <p style="margin-top:20px; font-size:0.9rem; color:#94a3b8; margin-bottom:10px;">Selecciona el plazo de amortización:</p>
                            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap:10px;">
                                <div id="mortgage-10y" class="mortgage-card" style="background:rgba(30, 41, 59, 0.8); border:1px solid #334155; border-radius:10px; padding:15px; cursor:pointer; transition:all 0.2s; text-align:center;">
                                    <div style="font-size:0.9rem; color:#94a3b8; margin-bottom:5px;">10 Años</div>
                                    <div style="font-size:1.1rem; color:#facc15; font-weight:700;">${formatCurrency(calcPmt(10))}/mes</div>
                                </div>
                                <div id="mortgage-20y" class="mortgage-card" style="background:rgba(30, 41, 59, 0.8); border:1px solid #334155; border-radius:10px; padding:15px; cursor:pointer; transition:all 0.2s; text-align:center;">
                                 <div style="font-size:0.9rem; color:#94a3b8; margin-bottom:5px;">20 Años</div>
                                    <div style="font-size:1.1rem; color:#facc15; font-weight:700;">${formatCurrency(calcPmt(20))}/mes</div>
                                </div>
                                <div id="mortgage-30y" class="mortgage-card" style="background:rgba(30, 41, 59, 0.8); border:1px solid #334155; border-radius:10px; padding:15px; cursor:pointer; transition:all 0.2s; text-align:center;">
                                     <div style="font-size:0.9rem; color:#94a3b8; margin-bottom:5px;">30 Años</div>
                                    <div style="font-size:1.1rem; color:#facc15; font-weight:700;">${formatCurrency(calcPmt(30))}/mes</div>
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

                    const overlay = UI.showModal('Configurar Hipoteca', msg, [
                        { text: 'Cancelar', style: 'secondary', fn: null }
                    ]);

                    // Attach events manually since we use custom HTML buttons
                    if (overlay) {
                        overlay.querySelector('#mortgage-10y').onclick = () => { buy(id, true, 10); overlay.remove(); };
                        overlay.querySelector('#mortgage-20y').onclick = () => { buy(id, true, 20); overlay.remove(); };
                        overlay.querySelector('#mortgage-30y').onclick = () => { buy(id, true, 30); overlay.remove(); };
                    }

                } else {
                    // Cash Buy
                    UI.showModal('Compra al Contado', `
                        <div style="text-align:center;">
                            <div style="font-size:3rem; margin-bottom:10px;">💎</div>
                            <h3 style="color:#fff; margin:0 0 5px 0;">${prop.name}</h3>
                            <p style="color:#94a3b8; font-size:0.9rem; margin-bottom:20px;">Adquisición de propiedad libre de cargas.</p>

                            <div style="background:linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.05)); border:1px solid rgba(16, 185, 129, 0.3); border-radius:12px; padding:20px; margin-bottom:20px;">
                                <div style="font-size:0.85rem; color:#6ee7b7; text-transform:uppercase; margin-bottom:5px;">PRECIO TOTAL</div>
                                <div style="font-size:2rem; font-weight:800; color:#fff; text-shadow:0 0 15px rgba(16, 185, 129, 0.5);">${formatCurrency(prop.price)}</div>
                            </div>

                            <div style="display:flex; justify-content:space-between; padding:10px 20px; background:rgba(15, 23, 42, 0.5); border-radius:8px;">
                                 <span style="color:#94a3b8;">Tu saldo actual:</span>
                                 <span style="color:#cbd5e1;">${formatCurrency(GameState.cash)}</span>
                            </div>
                             <div style="display:flex; justify-content:space-between; padding:10px 20px; background:rgba(30, 41, 59, 0.5); border-radius:8px; margin-top:5px;">
                                 <span style="color:#94a3b8;">Saldo tras comprar:</span>
                                 <span style="color:${(GameState.cash - prop.price) >= 0 ? '#4ade80' : '#f87171'}; font-weight:700;">${formatCurrency(GameState.cash - prop.price)}</span>
                            </div>
                        </div>
                    `, [
                        { text: 'Cancelar', style: 'secondary', fn: null },
                        { text: 'COMPRAR AL CONTADO', style: 'success', fn: () => buy(id, false, 0) }
                    ], true);
                }

                // Helper execution
                const buy = (propId, mortgage, term) => {
                    const res = REModule.buyProperty(propId, mortgage, term);
                    if (res.success) {
                        const purchasedProp = GameState.inventory.realEstate.find(p => p.id === propId);
                        UI.showModal('¡LLAVES EN MANO!', `
                            <div style="text-align:center;">
                                <div style="font-size:4rem; margin-bottom:10px; animation: bounceIn 0.8s;">🔑</div>
                                <h3 style="color:#facc15; font-size:1.5rem; margin:0 0 10px 0; text-shadow:0 0 10px rgba(250, 204, 21, 0.3);">¡PROPIEDAD ADQUIRIDA!</h3>
                                <div style="background:rgba(15, 23, 42, 0.6); border:1px solid #facc15; border-radius:12px; padding:20px; margin-bottom:20px;">
                                    <p style="color:#cbd5e1; font-size:1.1rem; margin-bottom:5px;">Has comprado:</p>
                                    <div style="font-size:1.4rem; font-weight:800; color:#fff;">${purchasedProp ? purchasedProp.name : 'Nueva Propiedad'}</div>
                                </div>
                                <p style="color:#94a3b8; font-size:0.9rem;">Esta propiedad ya forma parte de tu patrimonio. <br>¡Empieza a generar ingresos!</p>
                            </div>
                        `, [{ text: '¡Excelente!', style: 'success', fn: null }], true);

                        UI.updateHeader();
                        UI.updateDashboard();
                        UI.updateBank(Bank);
                        UI.updateRealEstate(REModule);
                    } else {
                        UI.showModal('Error', res.message, [{ text: 'Cerrar', style: 'secondary', fn: null }]);
                    }
                };
            };
        });

        container.querySelectorAll('.btn-sell-prop-dynamic').forEach(btn => {
            btn.onclick = (e) => {
                const id = parseInt(e.target.dataset.id);
                const prop = GameState.inventory.realEstate.find(p => p.id === id);
                // Calculate details for modal
                let outstandingMortgage = 0;
                if (prop.mortgageId) {
                    const loan = GameState.loans.find(l => l.id === prop.mortgageId);
                    if (loan) outstandingMortgage = loan.remainingBalance;
                }
                const netProceeds = prop.price - outstandingMortgage;

                UI.showModal('Vender Propiedad', `
                    <div style="text-align:center;">
                        <div style="font-size:3rem; margin-bottom:10px;">🏷️</div>
                        <h3 style="color:#fff; margin:0 0 5px 0;">${prop.name}</h3>
                        <p style="color:#94a3b8; font-size:0.9rem; margin-bottom:20px;">¿Confirmas la venta de esta propiedad?</p>

                        <div style="background:rgba(15, 23, 42, 0.6); border-radius:12px; padding:20px; text-align:left; border:1px solid #334155;">
                            <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                                <span style="color:#94a3b8;">Precio de Mercado:</span>
                                <span style="color:#e2e8f0; font-weight:700;">${formatCurrency(prop.price)}</span>
                            </div>
                            ${outstandingMortgage > 0 ? `
                            <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                                <span style="color:#f87171;">Cancelación Hipoteca:</span>
                                <span style="color:#f87171; font-weight:700;">- ${formatCurrency(outstandingMortgage)}</span>
                            </div>
                            <div style="border-top:1px dashed #475569; margin:10px 0;"></div>
                            ` : ''}
                            <div style="display:flex; justify-content:space-between; align-items:center;">
                                <span style="color:#4ade80; font-weight:600;">NETO A RECIBIR:</span>
                                <span style="color:#4ade80; font-weight:800; font-size:1.2rem;">${formatCurrency(netProceeds)}</span>
                            </div>
                        </div>
                    </div>
                `, [
                    { text: 'Cancelar', style: 'secondary', fn: null },
                    {
                        text: 'VENDER AHORA',
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

        // Inputs & Display
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

        // Helper: Update Summary Sidebar
        const updateSummary = () => {
            summaryCash.textContent = formatCurrency(GameState.cash);

            let setupCost = 0;
            let rentCost = 0;

            if (state.typeId) {
                const type = CompanyModule.businessTypes[state.typeId];
                setupCost = type.cost;

                // Calculate Rent if Location Selected
                if (state.locId) {
                    const loc = CompanyModule.locations[state.locId];
                    rentCost = type.baseRent * loc.rentMult;
                }
            }

            summarySetup.textContent = formatCurrency(setupCost);
            summaryRent.textContent = rentCost > 0 ? `${formatCurrency(rentCost)}/mes` : '---';

            // Total Requirement for FOUNDING is Setup Cost + (Optional: First Month Rent?)
            // Let's assume you need Setup + 1 Month Rent to start safely.
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

        // RENDER STEP 1: BUSINESS TYPES
        typeGrid.innerHTML = '';

        // Count existing cafes
        const cafeCount = (GameState.ownedCompanies || []).filter(c => c.typeId === 'cafe').length;

        for (const [key, val] of Object.entries(CompanyModule.businessTypes)) {
            const volatility = val.volatility || 0.1;
            const riskTag = volatility > 0.3 ? '<span class="biz-tag tag-high-risk">Alto Riesgo</span>' : '<span class="biz-tag tag-low-risk">Estable</span>';
            const icon = val.icon || '🏢';

            // Check Lock Condition (Existing logic for cafe count)
            const isLocked = (key !== 'cafe' && cafeCount < 2);

            // Check Funds Condition
            const canAfford = GameState.cash >= val.cost;
            const isComingSoon = (key !== 'cafe');
            const isDisabled = isLocked || !canAfford || isComingSoon;

            const card = document.createElement('div');
            // Add 'locked' class if any blocking condition is met
            card.className = `biz-model-card ${isDisabled ? 'locked' : ''}`;

            if (isComingSoon) {
                card.innerHTML = `
                            <div style="text-align: center;">
                                <div style="font-size: 2.5rem; margin-bottom: 10px; filter: grayscale(1); opacity:0.6;">${val.icon}</div>
                                <div style="font-size: 1.1rem; font-weight: 700; color: #64748b; margin-bottom: 8px;">${val.name}</div>
                                <span style="display: inline-block; background: #334155; color: #94a3b8; padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 600;">En Desarrollo</span>
                            </div>
                            <div style="margin-top: 15px; padding: 12px; border-radius: 10px; border: 1px dashed #475569; text-align: center;">
                                <div style="font-size: 0.9rem; color: #fbbf24; font-weight:600;">🚧 Próximamente...</div>
                            </div>
                        `;

            } else if (isLocked) {
                // ... Existing Locked Logic ...
                card.innerHTML = `
                            <div style="text-align: center;">
                                <div style="font-size: 2.5rem; margin-bottom: 10px; filter: grayscale(1);">🔒</div>
                                <div style="font-size: 1.1rem; font-weight: 700; color: #64748b; margin-bottom: 8px;">${val.name}</div>
                                <span style="display: inline-block; background: #334155; color: #64748b; padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 600;">Bloqueado</span>
                            </div>
                            <div style="margin-top: 15px; padding: 12px; background: rgba(248, 113, 113, 0.1); border-radius: 10px; border: 1px solid rgba(248, 113, 113, 0.2); text-align: center;">
                                <div style="font-size: 0.85rem; color: #f87171;">⚠️ Requiere 2 Cafeterías</div>
                                <div style="font-size: 0.8rem; color: #94a3b8; margin-top: 4px;">Tienes: <strong style="color: #fbbf24;">${cafeCount}</strong></div>
                            </div>
                        `;

            } else if (!canAfford) {
                // INSUFFICIENT FUNDS STATE
                card.innerHTML = `
                            <div style="text-align: center;">
                                <div style="font-size: 2.5rem; margin-bottom: 10px; opacity: 0.5;">${icon}</div>
                                <div style="font-size: 1.1rem; font-weight: 700; color: #64748b; margin-bottom: 8px;">${val.name}</div>
                                <span style="display: inline-block; background: rgba(239, 68, 68, 0.1); color: #ef4444; padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 600; border: 1px solid rgba(239, 68, 68, 0.2);">Fondos Insuficientes</span>
                            </div>
                            <div style="margin-top: 15px; padding: 12px; background: rgba(15, 23, 42, 0.3); border-radius: 10px; border: 1px dashed #475569; text-align: center;">
                                <div style="font-size: 0.85rem; color: #94a3b8;">Coste de Inversión</div>
                                <div style="font-size: 1.1rem; font-weight: 800; color: #ef4444; margin-top: 4px;">${formatCurrency(val.cost)}</div>
                                <div style="font-size: 0.8rem; color: #64748b; margin-top: 2px;">Tienes: <span style="${GameState.cash < val.cost ? 'color:#ef4444' : 'color:#4ade80'}">${formatCurrency(GameState.cash)}</span></div>
                            </div>
                        `;

            } else {
                // Premium unlocked card
                const riskColor = volatility > 0.3 ? '#f87171' : '#4ade80';
                const riskBg = volatility > 0.3 ? 'rgba(248, 113, 113, 0.1)' : 'rgba(74, 222, 128, 0.1)';
                const riskBorder = volatility > 0.3 ? 'rgba(248, 113, 113, 0.3)' : 'rgba(74, 222, 128, 0.3)';
                const riskText = volatility > 0.3 ? '⚡ Alto Riesgo' : '✓ Estable';

                // Styles now handled by CSS .biz-model-card
                card.innerHTML = `
                            <div style="text-align: center; margin-bottom: 15px;">
                                <div style="font-size: 3rem; margin-bottom: 10px; filter: drop-shadow(0 0 10px rgba(251, 191, 36, 0.3));">${icon}</div>
                                <div style="font-size: 1.2rem; font-weight: 800; color: #fff; margin-bottom: 8px;">${val.name}</div>
                                <span style="display: inline-block; background: ${riskBg}; color: ${riskColor}; padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 600; border: 1px solid ${riskBorder};">${riskText}</span>
                            </div>
                            <div style="display: grid; gap: 8px;">
                                <div style="display: flex; justify-content: space-between; padding: 8px; background: rgba(251, 191, 36, 0.05); border-radius: 8px;">
                                    <span style="color: #94a3b8; font-size: 0.85rem;">💰 Inversión</span>
                                    <span style="color: #fbbf24; font-weight: 700;">${formatCurrency(val.cost)}</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; padding: 8px; background: rgba(248, 113, 113, 0.05); border-radius: 8px;">
                                    <span style="color: #94a3b8; font-size: 0.85rem;">🏠 Alquiler</span>
                                    <span style="color: #f87171; font-weight: 700;">${formatCurrency(val.baseRent)}/mes</span>
                                </div>
                                <div style="display: flex; justify-content: space-between; padding: 8px; background: rgba(74, 222, 128, 0.05); border-radius: 8px;">
                                    <span style="color: #94a3b8; font-size: 0.85rem;">📈 Demanda</span>
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

        // Helper to render locations (needs to run when entering Step 2 to catch updated state)
        const renderLocations = () => {
            locGrid.innerHTML = '';

            // Count total businesses
            const totalBusinesses = (GameState.company ? 1 : 0) + (GameState.ownedCompanies ? GameState.ownedCompanies.length : 0);
            const premiumLocationsUnlocked = totalBusinesses >= 2;

            for (const [key, val] of Object.entries(CompanyModule.locations)) {
                const trafficPct = Math.min(100, val.trafficMult * 80);

                // PRE-CALCULATE DYNAMIC PRICE IF TYPE SELECTED
                let priceDisplay = `x${val.rentMult}`;

                if (state.typeId) {
                    const base = CompanyModule.businessTypes[state.typeId].baseRent;
                    const final = base * val.rentMult;
                    priceDisplay = formatCurrency(final) + '/mes';
                }

                // Custom Requirement Logic
                let isLocked = false;
                let lockReason = '';

                // 1. Check if Premium Location
                const isPremium = (key === 'downtown' || key === 'business_district');

                if (isPremium) {
                    // If Cafe, use specific progression: Suburbs -> Downtown -> Business
                    if (state.typeId === 'cafe') {
                        const hasAutoOuter = (GameState.ownedCompanies || []).some(c => c.typeId === 'cafe' && c.locationId === 'suburbs');
                        const hasAutoDowntown = (GameState.ownedCompanies || []).some(c => c.typeId === 'cafe' && c.locationId === 'downtown');

                        if (key === 'downtown') {
                            if (!hasAutoOuter) {
                                isLocked = true;
                                lockReason = 'Req: 1 Cafetería Automatizada en Afueras';
                            }
                        } else if (key === 'business_district') {
                            if (!hasAutoDowntown) {
                                isLocked = true;
                                lockReason = 'Req: 1 Cafetería Automatizada en Centro';
                            }
                        }
                    } else {
                        // GENERIC FALLBACK (Old Logic)
                        if (!premiumLocationsUnlocked) {
                            isLocked = true;
                            lockReason = 'Req: 2+ Negocios Activos';
                        }
                    }
                }

                const card = document.createElement('div');
                card.className = 'loc-tier-card';
                if (isLocked) card.classList.add('locked');
                if (state.locId === key) card.classList.add('selected');

                // Get location icon based on key
                const getLocIcon = (locKey) => {
                    const icons = { 'suburbs': '🏡', 'residential': '🏘️', 'commercial': '🏪', 'downtown': '🌆', 'business_district': '🏙️' };
                    return icons[locKey] || '📍';
                };
                const locIcon = getLocIcon(key);
                const trafficColor = val.trafficMult >= 1.5 ? '#4ade80' : val.trafficMult >= 1.0 ? '#fbbf24' : '#f87171';

                card.innerHTML = `
                        <div style="text-align: center; margin-bottom: 15px;">
                            <div style="font-size: 2.5rem; margin-bottom: 10px; filter: ${isLocked ? 'grayscale(1)' : 'drop-shadow(0 0 10px rgba(56, 189, 248, 0.3))'};">${isLocked ? '🔒' : locIcon}</div>
                            <div style="font-size: 1.1rem; font-weight: 800; color: ${isLocked ? '#64748b' : '#fff'}; margin-bottom: 5px;">${val.name}</div>
                            ${isLocked ?
                        `<span style="display: inline-block; background: rgba(251, 191, 36, 0.1); color: #fbbf24; padding: 4px 10px; border-radius: 20px; font-size: 0.7rem; font-weight: 600; border: 1px solid rgba(251, 191, 36, 0.3);">🔒 ${lockReason}</span>` :
                        '<p style="color: #94a3b8; font-size: 0.8rem; margin: 0;">Ideal para negocios de volumen</p>'
                    }
                        </div>
                        <div style="margin-top: auto;">
                            <div style="margin-bottom: 10px;">
                                <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: #94a3b8; margin-bottom: 4px;">
                                    <span>Tráfico</span>
                                    <span>${val.trafficMult}x</span>
                                </div>
                                <div style="background: #0f172a; border-radius: 6px; height: 8px; overflow: hidden;">
                                    <div style="width: ${trafficPct}%; height: 100%; background: linear-gradient(90deg, ${trafficColor}, ${trafficColor}99); border-radius: 6px;"></div>
                                </div>
                            </div>
                            <div style="display: flex; justify-content: space-between; padding: 10px; background: rgba(248, 113, 113, 0.05); border-radius: 8px; margin-top: 5px;">
                                <span style="color: #94a3b8; font-size: 0.85rem;">🏠 Alquiler</span>
                                <span class="loc-price-tag" data-mult="${val.rentMult}" style="color: #f87171; font-weight: 700;">${priceDisplay}</span>
                            </div>
                        </div>
                    `;

                card.onclick = () => {
                    if (isLocked) {
                        UI.showModal(
                            '🔒 Ubicación Premium Bloqueada',
                            `<div style="text-align:center;">
                                    <p style="margin-bottom:15px;">Las ubicaciones <strong>${val.name}</strong> están reservadas para empresarios experimentados.</p>
                                    <div style="background:rgba(251, 191, 36, 0.1); border:1px solid #fbbf24; border-radius:8px; padding:15px; margin:15px 0;">
                                        <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                                            <span>Requisito:</span>
                                            <strong style="color:#fbbf24;">${lockReason.replace('Req:', '')}</strong>
                                        </div>
                                    </div>
                                    <p style="color:#94a3b8; font-size:0.9rem; margin-top:15px;">
                                        💡 Funda y automatiza tu primera empresa para desbloquear ubicaciones premium.
                                    </p>
                                </div>`,
                            [{ text: 'Entendido', style: 'secondary', fn: null }],
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

        // Initial render (Step 1 or 2 depending on currentStep)
        if (currentStep === 2) renderLocations();

        // NAVIGATION LOGIC
        const showStep = (step) => {
            currentStep = step;
            // Get Steps by ID
            const step1Container = document.getElementById('wizard-step-1');
            const step2Container = document.getElementById('wizard-step-2');

            // Get Progress Indicators
            const badge2 = document.getElementById('wiz-step-dot-2');
            const label2 = document.getElementById('wiz-step-label-2');
            const line2 = document.getElementById('wiz-step-bar-2');

            if (step === 1) {
                step1Container.style.display = 'block';
                step2Container.style.display = 'none';

                // Progress Update
                line2.style.width = '0%';
                badge2.classList.remove('active');
                badge2.classList.add('inactive');
                label2.classList.remove('active');
                label2.classList.add('inactive');

                btnBack.style.display = 'none';
                btnNext.textContent = 'Siguiente ➡️';
                btnNext.onclick = goNext;

                // Mobile buttons
                btnBackMobile.style.display = 'none';
                btnNextMobile.textContent = 'Siguiente ➡️';
                btnNextMobile.onclick = goNext;
            } else if (step === 2) {
                step1Container.style.display = 'none';
                step2Container.style.display = 'block';

                // Progress Update
                line2.style.width = '100%';
                badge2.classList.remove('inactive');
                badge2.classList.add('active');
                label2.classList.remove('inactive');
                label2.classList.add('active');

                btnBack.style.display = 'block';
                btnNext.textContent = '🌵 Fundar Empresa';
                btnNext.onclick = finishWizard;

                // Mobile buttons      
                btnBackMobile.style.display = 'block';
                btnNextMobile.textContent = '🌵 Fundar Empresa';
                btnNextMobile.onclick = finishWizard;

                // UPDATE DYNAMIC RENT ON CARDS WHEN ENTERING STEP 2
                // We re-render to ensure lock logic (which depends on typeId) is updated
                renderLocations();
            }
        };


        const goNext = () => {
            state.name = nameInput.value;
            if (!state.name) return showGameAlert('Por favor, indica un nombre para tu empresa.', 'warning');
            if (!state.typeId) return showGameAlert('Debes seleccionar un modelo de negocio.', 'warning');
            showStep(2);
        };

        btnBack.onclick = () => showStep(1);

        // CONNECT MOBILE BUTTONS TO SAME LOGIC
        const btnBackMobile = document.getElementById('btn-wiz-back-mobile');
        const btnNextMobile = document.getElementById('btn-wiz-next-mobile');

        btnBackMobile.onclick = () => showStep(1);
        btnNextMobile.onclick = goNext; // Will be reassigned in showStep(2)

        const finishWizard = () => {
            if (!state.locId) return showGameAlert('Selecciona una ubicación para tu sede.', 'warning');

            // Execute Creation
            const res = CompanyModule.createCompany(state.name, state.typeId, state.locId);

            if (res.success) {
                modal.style.display = 'none';
                UI.showModal('¡EMPRESA FUNDADA!', `
                    <div style="text-align:center;">
                        <div style="font-size:4rem; margin-bottom:10px; animation: bounceIn 0.8s;">🏢</div>
                        <h3 style="color:#facc15; font-size:1.6rem; margin:0 0 5px 0; text-shadow:0 0 10px rgba(250, 204, 21, 0.4);">¡Enhorabuena!</h3>
                        <p style="color:#cbd5e1; font-size:1.1rem; margin-bottom:20px;">Has fundado <strong style="color:#fff;">${state.name}</strong></p>
                        
                        <div style="text-align:left; background:rgba(15, 23, 42, 0.6); border:1px solid #334155; border-radius:12px; padding:20px;">
                            <p style="color:#94a3b8; font-size:0.9rem; margin-bottom:15px; text-transform:uppercase; letter-spacing:1px; font-weight:700;">Panel de Control:</p>
                            
                            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px;">
                                <div style="display:flex; align-items:center;">
                                    <span style="font-size:1.5rem; margin-right:10px;">📊</span>
                                    <div>
                                        <div style="color:#e2e8f0; font-weight:700; font-size:0.95rem;">Resumen</div>
                                        <div style="color:#64748b; font-size:0.8rem;">Visión general</div>
                                    </div>
                                </div>
                                <div style="display:flex; align-items:center;">
                                    <span style="font-size:1.5rem; margin-right:10px;">👥</span>
                                    <div>
                                        <div style="color:#e2e8f0; font-weight:700; font-size:0.95rem;">Personal</div>
                                        <div style="color:#64748b; font-size:0.8rem;">Equipo y RRHH</div>
                                    </div>
                                </div>
                                <div style="display:flex; align-items:center;">
                                    <span style="font-size:1.5rem; margin-right:10px;">📦</span>
                                    <div>
                                        <div style="color:#e2e8f0; font-weight:700; font-size:0.95rem;">Producto</div>
                                        <div style="color:#64748b; font-size:0.8rem;">Control de Calidad</div>
                                    </div>
                                </div>
                                <div style="display:flex; align-items:center;">
                                    <span style="font-size:1.5rem; margin-right:10px;">📣</span>
                                    <div>
                                        <div style="color:#e2e8f0; font-weight:700; font-size:0.95rem;">Marketing</div>
                                        <div style="color:#64748b; font-size:0.8rem;">Campañas Publicidad</div>
                                    </div>
                                </div>
                                <div style="display:flex; align-items:center; grid-column: span 2;">
                                    <span style="font-size:1.5rem; margin-right:10px;">💰</span>
                                    <div>
                                        <div style="color:#e2e8f0; font-weight:700; font-size:0.95rem;">Finanzas</div>
                                        <div style="color:#64748b; font-size:0.8rem;">Salario CEO</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p style="color:#94a3b8; font-size:0.9rem; margin-top:20px;">Tu aventura empresarial comienza ahora.</p>
                    </div>
                `, [{
                    text: '🚀 Ir al Panel de Control',
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

        // INITIALIZE
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
        // Logic moved here or kept in event listener?
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
        console.log('DEBUG: showView called with', targetView);

        // LOCKED VIEW CHECKS
        if (targetView === 'lifestyle' && !GameState.expensesUnlocked) {
            showGameAlert('🔒 Gastos bloqueados: Aún vives con tus padres.', 'warning');
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

    // TUTORIAL MODULE
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
                    <h3>Aún no eres independiente</h3>
                    <p>Esta pestaña se desbloqueará cuando te mudes de casa de tus padres.</p>
                </div>
            `;
            return;
        }

        const current = GameState.lifestyle;
        let totalCost = LifestyleModule.calculateTotal();

        // HERO - Premium Design
        const heroHTML = `
            <div class="lifestyle-hero" style="background: linear-gradient(145deg, rgba(236, 72, 153, 0.15), rgba(219, 39, 119, 0.05)); border: 1px solid rgba(236, 72, 153, 0.3); border-radius: 20px; padding: 25px; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #ec4899, #db2777);"></div>
                <div style="display: flex; align-items: center; gap: 20px;">
                    <div style="font-size: 3.5rem; filter: drop-shadow(0 0 15px rgba(236, 72, 153, 0.5));">💸</div>
                    <div style="flex: 1;">
                        <span style="display: inline-block; background: linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(219, 39, 119, 0.1)); color: #ec4899; padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 700; border: 1px solid rgba(236, 72, 153, 0.3); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">Estilo de Vida</span>
                        <p style="margin: 0 0 5px 0; font-size: 0.85rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px;">Gastos Mensuales</p>
                        <h2 style="margin: 0 0 12px 0; font-size: 1.6rem; color: #ec4899; font-weight: 800;">${formatCurrency(totalCost)}</h2>
                        <p style="color: #94a3b8; margin: 0; font-size: 0.9rem;">💡 Mejora tu nivel de vida con los botones de upgrade.</p>
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

        // CATEGORIES with upgrade buttons
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
                if (nextItem.deposit) upfrontInfo = `+ Fianza: ${formatCurrency(nextItem.deposit)}`;
                else if (nextItem.purchaseCost) upfrontInfo = `+ Compra: ${formatCurrency(nextItem.purchaseCost)}`;
            }

            // Premium button styles - 3D style with pink/violet colors
            const btnStyle = `width: 100%; padding: 12px 20px; background: linear-gradient(135deg, #ec4899, #db2777); color: white; border: none; border-radius: 12px; font-weight: 800; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 6px 0 #9d174d, 0 10px 20px rgba(236, 72, 153, 0.4); transform: translateY(-2px); transition: all 0.15s;${isTutorialForce ? ' animation: pulse 1.5s infinite;' : ''}`;

            // Locked overlay
            const lockOverlay = isCategoryLocked ? `
                <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(15, 23, 42, 0.9); border-radius: 16px; display: flex; flex-direction: column; justify-content: center; align-items: center; z-index: 5;">
                    <span style="font-size: 2rem; margin-bottom: 8px;">🔒</span>
                    <span style="color: #94a3b8; font-weight: 600;">Primero elige vivienda</span>
                </div>
            ` : '';

            return `
                <div class="lifestyle-category-card" style="background: linear-gradient(145deg, #1e293b, #0f172a); border: 1px solid ${isTutorialForce ? '#facc15' : '#334155'}; border-radius: 16px; padding: 20px; margin-bottom: 15px; position: relative;">
                    ${lockOverlay}
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                        <h3 style="color: #cbd5e1; margin: 0; display: flex; align-items: center; gap: 10px; font-size: 1rem;">
                            <span style="font-size: 1.3rem;">${getCatIcon(catKey)}</span> ${cat.label}
                        </h3>
                        <span style="background: rgba(236, 72, 153, 0.15); color: #ec4899; padding: 4px 10px; border-radius: 12px; font-size: 0.7rem; font-weight: 700; border: 1px solid rgba(236, 72, 153, 0.3);">Nivel ${levelNum}/${maxLevel}</span>
                    </div>
                    
                    <div style="background: rgba(15, 23, 42, 0.5); border: 1px solid #475569; border-radius: 12px; padding: 15px; margin-bottom: 12px;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <span style="font-size: 2rem;">${getItemIcon(currentItem.id)}</span>
                                <div>
                                    <h4 style="margin: 0 0 4px 0; color: #f8fafc; font-weight: 700;">${currentItem.name}</h4>
                                    <p style="margin: 0; color: #94a3b8; font-size: 0.85rem;">${currentItem.desc}</p>
                                </div>
                            </div>
                            <div style="text-align: right;">
                                <span style="font-size: 1.2rem; color: #ec4899; font-weight: 800;">${formatCurrency(currentItem.cost)}</span>
                                <span style="display: block; color: #64748b; font-size: 0.75rem;">/mes</span>
                            </div>
                        </div>
                    </div>
                    
                    ${nextItem && !isCategoryLocked ? `
                        <button class="btn-upgrade-lifestyle ${isTutorialForce ? 'tutorial-highlight' : ''}" data-cat="${catKey}" data-next-id="${nextItem.id}" style="${btnStyle}">
                            <span style="display: flex; align-items: center; gap: 8px;">
                                <span style="font-size: 1.1rem;">⬆️</span>
                                <span>Mejorar nivel ${levelNum}</span>
                            </span>
                            <span style="text-align: right; font-size: 0.75rem; font-weight: 600;">
                                ${nextItem.name}<br>
                                <span style="opacity: 0.85;">${formatCurrency(nextItem.cost)}/mes ${upfrontInfo}</span>
                            </span>
                        </button>
                    ` : (!isCategoryLocked ? `
                        <div style="text-align: center; padding: 14px; background: linear-gradient(135deg, rgba(74, 222, 128, 0.15), rgba(34, 197, 94, 0.05)); border: 2px solid rgba(74, 222, 128, 0.3); border-radius: 14px;">
                            <span style="color: #4ade80; font-weight: 800;">🏆 ¡NIVEL MÁXIMO!</span>
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

        // EVENTS
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
                let upfrontLabel = item.deposit ? `Fianza: ${formatCurrency(item.deposit)}` : (item.purchaseCost ? `Compra: ${formatCurrency(item.purchaseCost)}` : '');
                const costMsg = upfront > 0 ? `\n\n❗ Requiere PAGO INICIAL: ${formatCurrency(upfront)} (${upfrontLabel})` : '';

                const performUpdate = () => {
                    const res = LifestyleModule.setOption(catKey, nextId);
                    if (res.success) {
                        if (GameState.tutorialState.forceHousing && nextId === 'sofa') {
                            GameState.tutorialState.forceHousing = false;
                            GameState.expensesUnlocked = true;
                        } else {
                            if (res.message) UI.showToast('¡Nivel Mejorado!', res.message, 'success');
                        }
                        UI.updateLifestyle(LifestyleModule);
                        UI.updateHeader();
                        UI.updateDashboard();
                        UI.playCoinSound();
                    } else {
                        UI.showToast('Error', res.message, 'error');
                    }
                };

                if (GameState.tutorialState.forceHousing && nextId === 'sofa') {
                    performUpdate();
                } else {
                    const currentId = GameState.lifestyle[catKey];
                    const currentItem = cat.items.find(i => i.id === currentId) || cat.items[0];

                    UI.showModal('Mejorar Nivel de Vida', `
                        <div style="text-align:center;">
                            <div style="font-size:3rem; margin-bottom:10px;">✨</div>
                            <h3 style="color:#fbbf24; margin:0 0 5px 0;">${cat.label}</h3>
                            <p style="color:#94a3b8; font-size:0.9rem; margin-bottom:20px;">¿Deseas mejorar tu calidad de vida?</p>

                            <div style="background:rgba(15, 23, 42, 0.5); border-radius:12px; padding:15px; margin-bottom:20px; border:1px solid #334155;">
                                <!-- Comparison -->
                                <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:15px; padding-bottom:15px; border-bottom:1px solid #334155;">
                                    <div style="text-align:left; width:45%;">
                                        <div style="font-size:0.75rem; color:#64748b; margin-bottom:4px;">ACTUAL</div>
                                        <div style="font-weight:700; color:#cbd5e1; font-size:0.9rem;">${currentItem.name}</div>
                                        <div style="color:#94a3b8; font-size:0.8rem;">${formatCurrency(currentItem.cost)}/mes</div>
                                    </div>
                                    <div style="color:#fbbf24; font-size:1.2rem;">➔</div>
                                    <div style="text-align:right; width:45%;">
                                        <div style="font-size:0.75rem; color:#fbbf24; margin-bottom:4px;">NUEVO NIVEL</div>
                                        <div style="font-weight:800; color:#fff; font-size:0.95rem;">${item.name}</div>
                                        <div style="color:#4ade80; font-weight:700; font-size:0.85rem;">${formatCurrency(item.cost)}/mes</div>
                                    </div>
                                </div>
                                
                                <!-- Upfront Cost if any -->
                                ${upfront > 0 ? `
                                <div style="background:rgba(239, 68, 68, 0.1); border:1px solid rgba(239, 68, 68, 0.3); border-radius:8px; padding:10px;">
                                    <div style="color:#ef4444; font-weight:700; font-size:0.85rem; margin-bottom:2px;">❗ PAGO INICIAL REQUERIDO</div>
                                    <div style="color:#fff; font-weight:700;">${formatCurrency(upfront)}</div>
                                    <div style="color:#cbd5e1; font-size:0.75rem;">${upfrontLabel}</div>
                                </div>
                                ` : ''}

                                <div style="margin-top:15px; font-size:0.85rem; color:#94a3b8; font-style:italic;">
                                    "${item.desc}"
                                </div>
                            </div>
                        </div>
                    `, [
                        { text: 'Cancelar', style: 'secondary', fn: null },
                        { text: 'MEJORAR', style: 'primary', fn: performUpdate }
                    ], true);
                }
            };
        });
    },

    updateEducation(EduModule) {
        const container = document.getElementById('education-view');
        if (!container) return;

        // DATA
        const courses = EduModule.courses;
        const myEdu = GameState.education;
        const current = GameState.currentCourse;

        // HERO CONTENT
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


        // GRID CONTENT
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

            // Logic Checks (Recalculate or pass down? Recalc for display text)
            let missingReqText = '';
            let hasReq = true;
            if (course.required && course.required.length > 0) {
                const meetsOne = course.required.some(r => myEdu.includes(r));
                if (!meetsOne) {
                    hasReq = false;
                    const reqNames = course.required.map(mid => {
                        const m = courses.find(c => c.id === mid);
                        return m ? m.name : mid;
                    }).join(' o ');
                    missingReqText = `Req: ${reqNames}`;
                }
            }

            // Age Check
            const ageOk = !course.minAge || GameState.age >= course.minAge;
            const ageText = !ageOk ? `Min: ${course.minAge} años` : '';
            const hasFunds = GameState.cash >= (course.cost || 0);

            if (isCompleted) {
                statusBadge = '<span style="background:rgba(245, 158, 11, 0.2); color:#f59e0b; padding:2px 8px; border-radius:4px; font-size:0.8rem; border:1px solid #f59e0b;">Completado</span>';
            } else if (isStudying) {
                statusBadge = '<span style="background:rgba(56, 189, 248, 0.2); color:#38bdf8; padding:2px 8px; border-radius:4px; font-size:0.8rem; border:1px solid #38bdf8;">En Curso</span>';
            } else if (!hasReq) {
                statusBadge = '<span style="background:rgba(239, 68, 68, 0.2); color:#ef4444; padding:2px 8px; border-radius:4px; font-size:0.8rem; border:1px solid #ef4444;">Bloqueado</span>';
            }

            if (!isCompleted && !isStudying) {
                if (!hasReq) {
                    actionBtn = `<button class="btn-apply-small" disabled style="opacity:0.5; cursor:not-allowed;">Bloqueado</button>`;
                } else if (!ageOk) {
                    actionBtn = `<button class="btn-apply-small" disabled style="opacity:0.5; cursor:not-allowed;">Edad insuficiente</button>`;
                } else if (!hasFunds && course.cost > 0) {
                    actionBtn = `<button class="btn-apply-small" disabled style="opacity:0.5; cursor:not-allowed;">Sin Fondos</button>`;
                } else {
                    actionBtn = `<button class="btn-apply-small btn-course-start" data-id="${course.id}">Matricularse</button>`;
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
            summary.textContent = `📚 Ver otras formaciones (${locked.length} bloqueadas)`;
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
        this.showModal(title, msg, [
            { text: 'Cancelar', style: 'secondary', fn: null },
            { text: 'Confirmar', style: 'danger', fn: onConfirm }
        ]);
    },

    getLabel(id) {
        const map = {
            // Career Paths
            'unskilled': 'Sin Titulación',
            'admin_contable': 'Administración y Finanzas',
            'gestor_cobros': 'Gestión de Cobros',
            'admin_inmo': 'Gestión Inmobiliaria',
            'prog_apps': 'Desarrollo de Apps / Web',
            'sys_support': 'Soporte y Sistemas',
            'mobile_dev': 'Desarrollo Móvil',
            'maint_ind': 'Mantenimiento Industrial',
            'clima': 'Climatización y Frío',
            'buildings': 'Mantenimiento de Edificios',
            'analyst_fin': 'Análisis Financiero',
            'consultant': 'Consultoría de Negocio',
            'sales_b2b': 'Ventas B2B',
            'swe': 'Ingeniería de Software',
            'data': 'Data & Analytics',
            'devops': 'Cloud & DevOps',
            'ing_obra': 'Ingeniería de Obra',
            'oficina_tecnica': 'Oficina Técnica',
            'urbz_consult': 'Urbanismo y Consultoría',
            'temporary': 'Trabajo Temporal',
            'dj': 'DJ Profesional',

            // Education IDs
            'bachillerato': 'Bachillerato',
            'fp_medio': 'FP Grado Medio',
            'fp_admin': 'FP Sup. Administración',
            'fp_dam': 'FP Sup. Desarrollo Apps',
            'fp_maint': 'FP Sup. Mantenimiento',
            'grado_ade': 'Grado en ADE',
            'grado_cs': 'Grado en Ing. Informática',
            'grado_civil': 'Grado en Ing. Civil',
            'master_fin': 'Máster en Finanzas',
            'dj_basic': 'Curso DJ Básico SYNC',
            'dj_pioneer': 'Curso DJ Pioneer',
            'dj_vinyl': 'Curso DJ Avanzado Vinilo',
            'dj_pro': 'Master DJ Professional',
            'master_ai': 'Máster en IA',
            'master_ing': 'Máster Ingeniería',
            'bootcamp': 'Bootcamp Programación'
        };
        return map[id] || id; // Fallback to ID if missing
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

                // PREMIUM HEADER
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
                                    <div style="font-size:0.85rem; color:#94a3b8;">${co.typeName} • ${co.locationName}</div>
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

                    div.querySelector('.btn-sell-passive').onclick = () => {
                        const annualProfit = co.baselineProfit * 12;
                        const valuation = annualProfit * 5;

                        UI.showModal('Vender Empresa', `
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
                                        <span style="color:#fbbf24; font-weight:700; text-transform:uppercase; font-size:0.9rem;">VALORACIÓN (x5)</span>
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

                    // Check if has temporary jobs (gigs) - must have both gigs and salary
                    const hasGigs = GameState.currentGigs && GameState.currentGigs.length > 0 && GameState.salary > 0;

                    if (hasGigs) {
                        // Temporary job message
                        goalCard.innerHTML = `
                                <div class="card-header"><span class="badge-secondary">TRABAJO TEMPORAL</span></div>
                                <h3 class="goal-title">Trabajo Temporal</h3>
                                <p style="color:#94a3b8; margin-top:10px;">Esto es un trabajo temporal, no durará mucho.</p>
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
                                <p style="color:#94a3b8; margin:10px 0;">En TRES DEPORTE no hay ascensos, pero puedes pedir aumento cada 2 meses.</p>
                                
                                <div class="progress-section" style="margin-top:15px;">
                                    <div class="progress-label">
                                        <span>Tiempo desde última petición</span>
                                        <span>${monthsSinceLastRequest} / 2 meses</span>
                                    </div>
                                    <div class="edu-bar-bg"><div class="edu-bar-fill" style="width:${Math.min(100, (monthsSinceLastRequest / 2) * 100)}%"></div></div>
                                </div>

                                <button id="btn-raise-tres" class="btn-primary" style="margin-top:15px;" ${canAsk ? '' : 'disabled'}>
                                    ${canAsk ? 'Pedir Aumento' : `Esperar ${monthsRemaining} mes(es)`}
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

                        // LIFESTYLE CHECKS & PREMIUM TAG GENERATION
                        let isLifestyleOk = true;
                        let premiumTagsHTML = '';

                        if (nextJobInPath.req) {
                            const r = nextJobInPath.req;

                            // Helper for Premium Tag
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
                                                ${ok ? 'CUMPLIDO' : 'REQUERIDO'}
                                            </span>
                                            <span style="font-size:0.85rem; font-weight:600; color:#f1f5f9;">
                                                ${label} <span style="color:#94a3b8;">(Nv. ${level + 1})</span>
                                            </span>
                                        </div>
                                    </div>`;
                            };

                            // Housing Check
                            if (r.housing !== undefined) {
                                premiumTagsHTML += createTag('Vivienda', r.housing, GameBalance.getHousingTier(), '🏠', 'housing');
                            }

                            // Vehicle/Transport Check
                            const reqTrans = r.transport !== undefined ? r.transport : r.vehicle;
                            if (reqTrans !== undefined) {
                                premiumTagsHTML += createTag('Transporte', reqTrans, GameBalance.getCombinedTier('transport'), '🚗', 'transport');
                            }

                            // Food Check
                            if (r.food !== undefined) {
                                premiumTagsHTML += createTag('Dieta', r.food, GameBalance.getCombinedTier('food'), '🥗', 'food');
                            }

                            // Clothes Check
                            if (r.clothes !== undefined) {
                                premiumTagsHTML += createTag('Imagen', r.clothes, GameBalance.getCombinedTier('clothes'), '👔', 'clothes');
                            }

                            // Leisure Check
                            if (r.leisure !== undefined) {
                                premiumTagsHTML += createTag('Ocio', r.leisure, GameBalance.getCombinedTier('leisure'), '🎉', 'leisure');
                            }
                        }

                        const nextCard = document.createElement('div');
                        nextCard.className = 'job-promo-card';
                        // Premium Style Override
                        nextCard.style.background = 'linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.95))';
                        nextCard.style.border = '1px solid rgba(148, 163, 184, 0.1)';
                        nextCard.style.borderRadius = '16px';
                        nextCard.style.padding = '20px';
                        nextCard.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.3)';
                        nextCard.style.position = 'relative';
                        nextCard.style.overflow = 'hidden';

                        // Calculate status colors
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
                                
                                <!-- EXPERIENCE BAR PREMIUM -->
                                <div style="margin-bottom:20px; background:rgba(15, 23, 42, 0.6); padding:15px; border-radius:12px; border:1px solid rgba(255,255,255,0.05);">
                                    <div style="display:flex; justify-content:space-between; font-size:0.85rem; color:#cbd5e1; margin-bottom:8px;">
                                        <span style="display:flex; align-items:center; gap:5px;">⏱️ Experiencia</span>
                                        <span style="font-family:monospace; color:${isTimeOk ? '#34d399' : '#94a3b8'}">${Math.floor(currentMonths)} / ${reqMonths} meses</span>
                                    </div>
                                    <div style="height:8px; background:#1e293b; border-radius:4px; overflow:hidden;">
                                        <div style="width:${progress}%; height:100%; background:${isTimeOk ? 'linear-gradient(90deg, #10b981, #34d399)' : '#3b82f6'}; transition:width 0.5s ease; box-shadow:0 0 10px rgba(59, 130, 246, 0.3);"></div>
                                    </div>
                                </div>

                                <!-- REQUIREMENTS GRID -->
                                <div style="margin-bottom:25px;">
                                    <div style="font-size:0.75rem; text-transform:uppercase; color:#64748b; margin-bottom:10px; padding-left:5px;">REQUISITOS DE ACCESO</div>
                                    <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap:10px;">
                                        
                                        <!-- EDUCATION TAG -->
                                        ${nextJobInPath.reqEdu ? `
                                            <div style="background:${isEduOk ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)'}; border:1px solid ${isEduOk ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)'}; border-radius:8px; padding:10px; display:flex; align-items:center; gap:10px;">
                                                <div style="font-size:1.2rem;">${isEduOk ? '🎓' : '📚'}</div>
                                                <div style="display:flex; flex-direction:column;">
                                                    <span style="font-size:0.7rem; color:${isEduOk ? '#34d399' : '#f87171'}">${isEduOk ? 'CUMPLIDO' : 'FALTA TÍTULO'}</span>
                                                    <span style="font-size:0.8rem; font-weight:600; color:#e2e8f0;">${UI.getLabel(nextJobInPath.reqEdu)}</span>
                                                </div>
                                            </div>
                                        ` : ''}

                                        <!-- LIFESTYLE TAGS INJECTED -->
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
                                    ${!isReady ? '🔒 Requisitos Pendientes' : '✨ Solicitar Ascenso'}
                                </button>
                            `;

                        // RE-GENERATE TAGS FOR PREMIUM GRID
                        // We do this via JS after render to keep code clean, or we could refactor the loop above.
                        // Let's refactor the loop above in a separate replacement chunk to generate 'premiumTagsHTML' 
                        // instead of the old span tags.

                        if (canPromote && isEduOk && isLifestyleOk) {
                            nextCard.querySelector('#btn-promote').onclick = () => {
                                const res = JobSys.promote();
                                if (res.success) {
                                    // PREMIUM PROMOTION MESSAGE
                                    const themeColor = '#8b5cf6'; // Violet/Purple
                                    const icon = '🚀';

                                    let promoMsg = `
                                        <div style="text-align: center; margin-bottom: 20px;">
                                            <div style="font-size: 4rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px ${themeColor}66); animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);">${icon}</div>
                                            <h3 style="color: ${themeColor}; margin: 0; font-size: 1.5rem; text-shadow: 0 0 10px ${themeColor}4d;">¡Ascenso Conseguido!</h3>
                                        </div>

                                        <div style="background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.6)); border: 1px solid ${themeColor}4d; border-radius: 16px; padding: 20px; text-align: center; margin-bottom: 20px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                                            <div style="font-size: 0.85rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Nuevo Cargo</div>
                                            <div style="font-size: 1.4rem; font-weight: 700; color: #f8fafc; margin-bottom: 15px;">${GameState.jobTitle}</div>
                                            
                                            <div style="display: inline-block; background: ${themeColor}26; border: 1px solid ${themeColor}4d; padding: 8px 16px; border-radius: 20px;">
                                                <span style="color: ${themeColor}; font-weight: 700; font-size: 1.1rem;">${formatCurrency(GameState.salary)}/mes</span>
                                            </div>
                                        </div>

                                        <p style="text-align: center; color: #cbd5e1; font-size: 0.95rem; line-height: 1.5; margin: 0;">
                                            Tu esfuerzo ha valido la pena. Tienes mayores responsabilidades y un mejor sueldo.
                                        </p>
                                    `;

                                    UI.showModal(' ', promoMsg, [{ text: '🚀 ¡A por ello!', style: 'success', fn: () => UI.updateJob(JobSys) }], true);
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
                    // --- MAX LEVEL CASE OR TRES DEPORTE ---

                    // SPECIAL CASE: TRES DEPORTE
                    if (GameState.jobTitle === 'TRES DEPORTE') {
                        const monthsSinceLastRequest = JobSys.monthsSinceLastRaise || 0;
                        const canAsk = monthsSinceLastRequest >= 2;
                        const monthsRemaining = Math.max(0, 2 - monthsSinceLastRequest);

                        const goalCard = document.createElement('div');
                        goalCard.className = 'dashboard-card goal-card';
                        goalCard.innerHTML = `
                                <div class="card-header"><span class="badge-warning">PEDIR AUMENTO</span></div>
                                <h3 class="goal-title">Solicitar Aumento de Salario</h3>
                                <p style="color:#94a3b8; margin:10px 0;">En TRES DEPORTE no hay ascensos, pero puedes pedir aumento cada 2 meses.</p>
                                
                                <div class="progress-section" style="margin-top:15px;">
                                    <div class="progress-label">
                                        <span>Tiempo desde última petición</span>
                                        <span>${monthsSinceLastRequest.toFixed(1)} / 2 meses</span>
                                    </div>
                                    <div class="progress-track">
                                        <div class="progress-fill" style="width: ${Math.min(100, (monthsSinceLastRequest / 2) * 100)}%"></div>
                                    </div>
                                </div>
                                
                                ${!canAsk ? `<p style="color:#f87171; margin-top:15px; font-size:0.9rem;">⏱️ Podrás pedir aumento en ${monthsRemaining.toFixed(1)} mes(es)</p>` : ''}
                                
                                <button class="btn-promote" ${!canAsk ? 'disabled' : ''} style="margin-top:15px; width:100%; padding:12px; background:${canAsk ? 'var(--success-color)' : '#334155'}; color:white; border:none; border-radius:8px; font-weight:bold; cursor:${canAsk ? 'pointer' : 'not-allowed'};">
                                    ${canAsk ? '💰 Pedir Aumento' : '🔒 Aún no disponible'}
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
                    // NORMAL MAX LEVEL CASE (RAISE SYSTEM)  
                    else {
                        const monthsSince = JobSys.monthsSinceLastRaise || 0;
                        const canRaise = monthsSince >= 12;
                        const waittime = 12 - monthsSince;

                        const raiseCard = document.createElement('div');
                        raiseCard.className = 'job-peak-card';
                        raiseCard.innerHTML = `
                                <div class="job-peak-content">
                                    <h3>👑 Cima Profesional</h3>
                                    <p style="color:#cbd5e1; font-size:0.95rem;">Has alcanzado el máximo nivel.</p>
                                    <div style="margin-top:10px;">
                                        <span class="req-tag ${canRaise ? 'success' : 'fail'}">
                                            ${canRaise ? '✓ Disponible' : '⏳ Cooldown: ' + Math.ceil(waittime) + ' meses'}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <button id="btn-request-raise" class="btn-gold" ${canRaise ? '' : 'disabled'}>
                                        ${canRaise ? 'Solicitar Aumento' : 'Revisión Salarial'}
                                    </button>
                                </div>
                            `;

                        if (canRaise) {
                            raiseCard.querySelector('#btn-request-raise').onclick = () => {
                                const res = JobSys.requestRaise();
                                // PREMIUM BOSS RESPONSE
                                const themeColor = '#f97316'; // Orange
                                const icon = '🗣️';

                                let bossMsg = `
                                    <div style="text-align: center; margin-bottom: 20px;">
                                        <div style="font-size: 3.5rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px ${themeColor}66); animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);">${icon}</div>
                                        <h3 style="color: ${themeColor}; margin: 0; font-size: 1.4rem; text-shadow: 0 0 10px ${themeColor}4d; font-weight: 800; letter-spacing: 1px;">RESPUESTA DEL JEFE</h3>
                                    </div>

                                    <div style="background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.6)); border: 1px solid ${themeColor}4d; border-radius: 16px; padding: 20px; text-align: center; margin-bottom: 20px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); position: relative;">
                                        <div style="font-size: 3rem; position: absolute; top: -20px; left: 10px; opacity: 0.2; color: ${themeColor};">“</div>
                                        <p style="color: #cbd5e1; font-size: 1.1rem; line-height: 1.6; margin: 10px 0; font-style: italic;">
                                            ${res.message.replace(/^Tu jefa dice que\.\.\. /, '')}
                                        </p>
                                        <div style="font-size: 3rem; position: absolute; bottom: -40px; right: 10px; opacity: 0.2; color: ${themeColor};">”</div>
                                    </div>
                                    
                                    <div style="text-align: center; font-size: 0.85rem; color: #94a3b8; margin-top: 15px;">
                                        (Inténtalo de nuevo el próximo año...)
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

                // 3. Job Market (Grid)
                const marketSection = document.createElement('div');
                marketSection.className = 'market-section';
                marketSection.innerHTML = `<h3 class="section-title">🌐 Mercado Laboral</h3>`;

                const marketGrid = document.createElement('div');
                marketGrid.className = 'market-grid';
                marketGrid.id = 'regular-jobs-grid';

                const vacancyList = JobSys.getAllVacancies().filter(vac => vac.reqMonths === 0);

                // Split Gigs vs Regular
                const gigs = vacancyList.filter(v => v.path === 'temporary');
                const regular = vacancyList.filter(v => v.path !== 'temporary');

                // --- SECTION: GIGS ---
                const gigSection = document.createElement('div');
                gigSection.className = 'market-section';
                gigSection.id = 'temp-jobs-section';
                gigSection.style.marginBottom = '40px';
                gigSection.innerHTML = `<h3 class="section-title" style="color:#facc15;">⚡ Trabajo Temporal</h3>`;
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
                            if (res.requiresConfirmation) {
                                UI.showModal('⚠️ Cerrar Empresa',
                                    `<div style="text-align:center;">
                                        <div style="font-size:3rem; margin-bottom:10px;">building</div>
                                        <p style="color:#cbd5e1; margin-bottom:15px;">Al aceptar este empleo, tu empresa actual se cerrará.</p>
                                        <p style="color:#ef4444; font-weight:700;">Esta acción es irreversible.</p>
                                    </div>`,
                                    [
                                        { text: 'Cancelar', style: 'secondary', fn: null },
                                        { text: 'CERRAR Y ACEPTAR', style: 'danger', fn: () => performApply(true) }
                                    ], true
                                );
                                return;
                            }
                            if (res.success) {
                                // PREMIUM GIG WELCOME MESSAGE
                                const themeColor = '#facc15';
                                const icon = '⚡';

                                let gigMsg = `
                                <div style="text-align: center; margin-bottom: 20px;">
                                    <div style="font-size: 4rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px ${themeColor}66); animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);">${icon}</div>
                                    <h3 style="color: ${themeColor}; margin: 0; font-size: 1.6rem; text-shadow: 0 0 10px ${themeColor}4d; font-weight: 800; letter-spacing: 1px;">¡TRABAJO TEMPORAL!</h3>
                                </div>

                                <div style="background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.6)); border: 1px solid ${themeColor}4d; border-radius: 16px; padding: 25px; text-align: center; margin-bottom: 25px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                                    <div style="font-size: 0.85rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px;">Trabajo Temporal</div>
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
                            eduText = vac.reqEdu.map(id => UI.getLabel(id)).join(' o ');
                        } else {
                            eduText = UI.getLabel(vac.reqEdu);
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
                                <button class="btn-apply-small">Aplicar</button>
                            </div>
                        `;


                    card.querySelector('.btn-apply-small').onclick = () => {
                        const performApply = (force = false) => {
                            const res = JobSys.applyToJob(vac.title, force);
                            if (res.requiresConfirmation) {
                                UI.showModal('⚠️ Cerrar Empresa',
                                    `<div style="text-align:center;">
                                        <div style="font-size:3rem; margin-bottom:10px;">building</div>
                                        <p style="color:#cbd5e1; margin-bottom:15px;">Al aceptar este empleo, tu empresa actual se cerrará.</p>
                                        <p style="color:#ef4444; font-weight:700;">Esta acción es irreversible.</p>
                                    </div>`,
                                    [
                                        { text: 'Cancelar', style: 'secondary', fn: null },
                                        { text: 'CERRAR Y ACEPTAR', style: 'danger', fn: () => performApply(true) }
                                    ], true
                                );
                                return;
                            }
                            if (res.success) {
                                const isGig = vac.type === 'gig';
                                // Use Blue/Cyan for Permanent Jobs to be distinct from Green (Success)
                                const themeColor = isGig ? '#facc15' : '#0ea5e9'; // Yellow vs Sky Blue
                                const icon = isGig ? '⚡' : '👔';
                                const title = isGig ? '¡TRABAJO TEMPORAL!' : '¡CONTRATO FIRMADO!';
                                const subTitle = isGig ? 'Trabajo Temporal' : 'Nueva Trayectoria Profesional';

                                // PREMIUM WELCOME MESSAGE
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
                                // PREMIUM REJECTION MESSAGE
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

                // 2. RENDER LOCKED
                if (locked.length > 0) {
                    const details = document.createElement('details');
                    details.style.marginTop = '30px';
                    details.style.marginBottom = '20px';
                    details.style.borderTop = '1px solid #334155';
                    details.style.paddingTop = '20px';

                    const summary = document.createElement('summary');
                    summary.textContent = `📚 Ver otras oportunidades (${locked.length} requieren formación)`;
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
                                eduText = vac.reqEdu.map(id => UI.getLabel(id)).join(' o ');
                            } else {
                                eduText = UI.getLabel(vac.reqEdu);
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
                                    <button class="btn-apply-small" disabled>Falta Título</button>
                                </div>
                            `;
                        lockedGrid.appendChild(card);
                    });


                    details.appendChild(lockedGrid);
                    marketSection.appendChild(details);
                }

                contentContainer.appendChild(marketSection);

                // 4. Entrepreneur Footer - Premium Design
                const enoughNetWorth = GameState.netWorth >= 100000;
                const entrepreneurSection = document.createElement('div');
                entrepreneurSection.className = 'entrepreneur-footer';
                entrepreneurSection.innerHTML = `
                        <div style="background: linear-gradient(145deg, rgba(251, 191, 36, 0.1), rgba(245, 158, 11, 0.05)); border: 1px solid rgba(251, 191, 36, 0.3); border-radius: 20px; padding: 30px; position: relative; overflow: hidden; margin-top: 25px;">
                            <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #fbbf24, #f59e0b);"></div>
                            <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 20px;">
                                <div style="flex: 1; min-width: 200px;">
                                    <div style="font-size: 2.5rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px rgba(251, 191, 36, 0.5));">🚀</div>
                                    <h3 style="margin: 0 0 8px 0; font-size: 1.3rem; color: #fbbf24; font-weight: 800;">¿Listo para dar el gran salto?</h3>
                                    <p style="color: #94a3b8; margin: 0; font-size: 0.9rem;">Deja tu empleo y construye tu propio legado empresarial.</p>
                                    ${!enoughNetWorth ? `<p style="color: #f87171; margin-top: 8px; font-weight: bold; font-size: 0.9rem;">⚠️ Requisito: 100.000€ Patrimonio (Tienes: ${formatCurrency(GameState.netWorth)})</p>` : ''}
                                </div>
                                <button id="btn-found-company" ${!enoughNetWorth ? 'disabled' : ''} style="background: ${enoughNetWorth ? 'linear-gradient(135deg, #fbbf24, #f59e0b)' : '#334155'}; color: ${enoughNetWorth ? '#0f172a' : '#94a3b8'}; border: none; padding: 16px 40px; border-radius: 12px; font-weight: 900; font-size: 1rem; cursor: ${enoughNetWorth ? 'pointer' : 'not-allowed'}; text-transform: uppercase; letter-spacing: 1px; box-shadow: ${enoughNetWorth ? '0 4px 0 #b45309, 0 8px 20px rgba(251, 191, 36, 0.3)' : 'none'}; transition: all 0.15s; opacity: ${enoughNetWorth ? '1' : '0.6'};">
                                    ${enoughNetWorth ? '🏢 FUNDAR EMPRESA' : '🔒 PATRIMONIO INSUFICIENTE'}
                                </button>
                            </div>
                        </div>
                    `;

                if (enoughNetWorth) {
                    entrepreneurSection.querySelector('#btn-found-company').onclick = () => UI.openCompanyWizard();
                } else {
                    entrepreneurSection.querySelector('#btn-found-company').onclick = () => showGameAlert('Necesitas un patrimonio neto de al menos 100.000€ para asumir el riesgo de fundar una empresa.', 'warning', '🔒 Requisito no cumplido');
                }
                contentContainer.appendChild(entrepreneurSection);
            } else {
                // --- COMPANY OWNER MODE ---
                const co = GameState.company;
                const activeTab = jobContainer.dataset.activeTab || 'summary';

                const coDash = document.createElement('div');
                coDash.innerHTML = `
                        <div class="company-dashboard">
                            <!-- Company Hero Header - Premium Design -->
                            <div style="background: linear-gradient(145deg, rgba(251, 191, 36, 0.12), rgba(245, 158, 11, 0.05)); border: 1px solid rgba(251, 191, 36, 0.3); border-radius: 20px; padding: 25px; position: relative; overflow: hidden; margin-bottom: 20px;">
                                <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #fbbf24, #f59e0b);"></div>
                                <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 20px;">
                                    <div style="display: flex; align-items: center; gap: 15px;">
                                        <div style="font-size: 3rem; filter: drop-shadow(0 0 15px rgba(251, 191, 36, 0.5));">${CompanyModule.businessTypes[co.typeId]?.icon || '🏢'}</div>
                                        <div>
                                            <h2 style="margin: 0 0 5px 0; font-size: 1.5rem; color: #fbbf24; font-weight: 800;">${co.name}</h2>
                                            <p style="margin: 0; color: #94a3b8; font-size: 0.9rem;">${co.typeName} • ${co.locationName}</p>
                                        </div>
                                    </div>
                                    <div style="display: flex; gap: 15px; flex-wrap: wrap;">
                                        <div style="background: linear-gradient(145deg, rgba(74, 222, 128, 0.1), transparent); padding: 12px 18px; border-radius: 12px; border: 1px solid rgba(74, 222, 128, 0.3); text-align: center; min-width: 100px;">
                                            <div style="font-size: 0.7rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px;">💵 Caja</div>
                                            <div style="font-size: 1.2rem; font-weight: 800; color: #4ade80;">${formatCurrency(co.cash)}</div>
                                        </div>
                                    <div style="background: linear-gradient(145deg, ${co.profitLastMonth >= 0 ? 'rgba(74, 222, 128, 0.1)' : 'rgba(248, 113, 113, 0.1)'}, transparent); padding: 12px 18px; border-radius: 12px; border: 1px solid ${co.profitLastMonth >= 0 ? 'rgba(74, 222, 128, 0.3)' : 'rgba(248, 113, 113, 0.3)'}; text-align: center; min-width: 100px;">
                                            <div style="font-size: 0.7rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px;">📈 Beneficio</div>
                                            <div style="font-size: 1.2rem; font-weight: 800; color: ${co.profitLastMonth >= 0 ? '#4ade80' : '#f87171'};">${co.profitLastMonth >= 0 ? '+' : ''}${formatCurrency(co.profitLastMonth)}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Company Tabs - Premium Design -->
                            <div style="display: flex; gap: 8px; margin-bottom: 20px; flex-wrap: wrap; background: #1e293b; padding: 8px; border-radius: 12px;">
                                <button class="tab-btn ${activeTab === 'summary' ? 'active' : ''}" data-tab="summary" style="flex: 1; min-width: 60px; padding: 12px 8px; border: none; border-radius: 8px; cursor: pointer; font-weight: 700; font-size: 0.85rem; transition: all 0.2s; ${activeTab === 'summary' ? 'background: linear-gradient(135deg, #fbbf24, #f59e0b); color: #0f172a;' : 'background: transparent; color: #94a3b8;'}">
                                    📊 <span class="desktop-text">Resumen</span>
                                </button>
                                <button class="tab-btn ${activeTab === 'staff' ? 'active' : ''}" data-tab="staff" style="flex: 1; min-width: 60px; padding: 12px 8px; border: none; border-radius: 8px; cursor: pointer; font-weight: 700; font-size: 0.85rem; transition: all 0.2s; ${activeTab === 'staff' ? 'background: linear-gradient(135deg, #fbbf24, #f59e0b); color: #0f172a;' : 'background: transparent; color: #94a3b8;'}">
                                    👥 <span class="desktop-text">Personal</span>
                                </button>
                                <button class="tab-btn ${activeTab === 'product' ? 'active' : ''}" data-tab="product" style="flex: 1; min-width: 60px; padding: 12px 8px; border: none; border-radius: 8px; cursor: pointer; font-weight: 700; font-size: 0.85rem; transition: all 0.2s; ${activeTab === 'product' ? 'background: linear-gradient(135deg, #fbbf24, #f59e0b); color: #0f172a;' : 'background: transparent; color: #94a3b8;'}">
                                    📦 <span class="desktop-text">Producto</span>
                                </button>
                                <button class="tab-btn ${activeTab === 'marketing' ? 'active' : ''}" data-tab="marketing" style="flex: 1; min-width: 60px; padding: 12px 8px; border: none; border-radius: 8px; cursor: pointer; font-weight: 700; font-size: 0.85rem; transition: all 0.2s; ${activeTab === 'marketing' ? 'background: linear-gradient(135deg, #fbbf24, #f59e0b); color: #0f172a;' : 'background: transparent; color: #94a3b8;'}">
                                    📢 <span class="desktop-text">Marketing</span>
                                </button>
                                <button class="tab-btn ${activeTab === 'finance' ? 'active' : ''}" data-tab="finance" style="flex: 1; min-width: 60px; padding: 12px 8px; border: none; border-radius: 8px; cursor: pointer; font-weight: 700; font-size: 0.85rem; transition: all 0.2s; ${activeTab === 'finance' ? 'background: linear-gradient(135deg, #fbbf24, #f59e0b); color: #0f172a;' : 'background: transparent; color: #94a3b8;'}">
                                    💰 <span class="desktop-text">Finanzas</span>
                                </button>
                            </div>

                            <div class="company-tab-content" id="co-tab-content" style="background: linear-gradient(145deg, #1e293b, #0f172a); border: 1px solid #334155; border-radius: 16px; padding: 20px;">
                                <!-- Content injected here -->
                            </div>
                        </div>
                    `;
                contentContainer.appendChild(coDash);


                contentContainer.querySelectorAll('.tab-btn').forEach(btn => {
                    btn.onclick = () => {
                        jobContainer.dataset.activeTab = btn.dataset.tab;
                        UI.updateJob(JobSystem);
                        UI.checkContextualTutorial('company_' + btn.dataset.tab);
                    };
                });




                const tabContent = document.getElementById('co-tab-content');

                // Shared Helpers (Defined here to be available across all tabs)
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
                        showGameAlert(`Precio fijado en ${formatCurrency(val)}. La exigencia de calidad cambiará.`, 'success', '💰 Precio Actualizado');
                        UI.updateJob(JobSystem);
                    }
                };

                if (activeTab === 'summary') {
                    try {
                        let eventsHtml = co.events.map(e => `<li>${e}</li>`).join('');
                        if (!eventsHtml) eventsHtml = '<li style="color:#aaa">Sin novedades este mes.</li>';

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
                                    <!-- Estado General Card -->
                                    <div id="comp-status-card" style="background: linear-gradient(145deg, rgba(74, 222, 128, 0.08), transparent); border: 1px solid rgba(74, 222, 128, 0.2); border-radius: 16px; padding: 20px;">
                                        <h3 style="margin: 0 0 15px 0; color: #4ade80; font-size: 1rem; display: flex; align-items: center; gap: 8px;">
                                            <span style="font-size: 1.3rem;">📊</span> Estado General
                                        </h3>
                                        <div style="display: grid; gap: 10px;">
                                            <div style="display: flex; justify-content: space-between;">
                                                <span style="color: #94a3b8;">⭐ Reputación</span>
                                                <span style="font-weight: 700; color: #fbbf24;">${co.reputation.toFixed(1)}/5.0</span>
                                            </div>
                                            <div style="display: flex; justify-content: space-between;">
                                                <span style="color: #94a3b8;">👥 Clientes/mes</span>
                                                <span style="font-weight: 700; color: #fff;">${co.lastStats ? co.lastStats.customers : 0}</span>
                                            </div>
                                            <div style="display: flex; justify-content: space-between;">
                                                <span style="color: #94a3b8;">📦 Capacidad/mes</span>
                                                <span style="font-weight: 700; color: #fff;">${co.lastStats ? co.lastStats.capacity : 0}</span>
                                            </div>
                                        </div>
                                        <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #334155;">
                                            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                                <span style="color: #94a3b8;">Ingresos</span>
                                                <span style="color: #4ade80; font-weight: 700;">${formatCurrency(co.revenueLastMonth)} ${fmtDiff(revDiff)}</span>
                                            </div>
                                            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                                <span style="color: #94a3b8;">Gastos</span>
                                                <span style="color: #f87171; font-weight: 700;">${formatCurrency(co.expensesLastMonth)}</span>
                                            </div>
                                            <div style="display: flex; justify-content: space-between; font-size: 1.1rem; padding-top: 8px; border-top: 1px dashed #334155;">
                                                <span style="color: #fff; font-weight: 700;">Beneficio</span>
                                                <span style="color: ${co.profitLastMonth >= 0 ? '#4ade80' : '#f87171'}; font-weight: 800;">${co.profitLastMonth >= 0 ? '+' : ''}${formatCurrency(co.profitLastMonth)}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Novedades Card -->
                                    <!-- Novedades Card -->
                                    <div id="comp-summary-news" style="background: linear-gradient(145deg, rgba(56, 189, 248, 0.08), transparent); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 16px; padding: 20px;">
                                        <h3 style="margin: 0 0 15px 0; color: #38bdf8; font-size: 1rem; display: flex; align-items: center; gap: 8px;">
                                            <span style="font-size: 1.3rem;">📢</span> Novedades
                                        </h3>
                                        <ul style="max-height: 150px; overflow-y: auto; padding-left: 20px; color: #cbd5e1; font-size: 0.9rem; line-height: 1.6;">${eventsHtml}</ul>
                                    </div>
                                    
                                    <div id="comp-summary-tab">
                                        <!-- Desglose Financiero Card -->
                                        <div style="background: linear-gradient(145deg, rgba(168, 85, 247, 0.08), transparent); border: 1px solid rgba(168, 85, 247, 0.2); border-radius: 16px; padding: 20px;">
                                            <h3 style="margin: 0 0 15px 0; color: #a855f7; font-size: 1rem; display: flex; align-items: center; gap: 8px;">
                                                <span style="font-size: 1.3rem;">📋</span> Desglose Financiero
                                            </h3>
                                            <table style="width: 100%; font-size: 0.85rem; border-collapse: collapse;">
                                                <tr style="border-bottom: 1px solid #334155;">
                                                    <td style="padding: 6px 0; color: #94a3b8;">💵 Ventas</td>
                                                    <td style="text-align: right; color: #4ade80; font-weight: 700;">+${formatCurrency(income.revenue)}</td>
                                                </tr>
                                                <tr><td style="padding: 6px 0; color: #94a3b8;">📦 COGS</td><td style="text-align: right; color: #f87171;">-${formatCurrency(details.cogs)}</td></tr>
                                                <tr><td style="padding: 6px 0; color: #94a3b8;">👥 Salarios</td><td style="text-align: right; color: #f87171;">-${formatCurrency(details.wages)}</td></tr>
                                                <tr><td style="padding: 6px 0; color: #94a3b8;">🏠 Alquiler</td><td style="text-align: right; color: #f87171;">-${formatCurrency(details.rent)}</td></tr>
                                                <tr><td style="padding: 6px 0; color: #94a3b8;">📢 Marketing</td><td style="text-align: right; color: #f87171;">-${formatCurrency(details.marketing)}</td></tr>
                                                <tr><td style="padding: 6px 0; color: #94a3b8;">🔬 I+D</td><td style="text-align: right; color: #f87171;">-${formatCurrency(details.opex)}</td></tr>
                                                <tr style="border-bottom: 1px solid #334155;"><td style="padding: 6px 0; color: #94a3b8;">👔 Salario CEO</td><td style="text-align: right; color: #f87171;">-${formatCurrency(details.salary)}</td></tr>
                                                <tr style="font-weight: bold;"><td style="padding-top: 10px; color: #fff;">TOTAL GASTOS</td><td style="text-align: right; padding-top: 10px; color: #f87171;">-${formatCurrency(co.expensesLastMonth)}</td></tr>
                                            </table>
                                        </div>
    
                                        <!-- Gráfico Card -->
                                        <div style="background: linear-gradient(145deg, rgba(251, 191, 36, 0.08), transparent); border: 1px solid rgba(251, 191, 36, 0.2); border-radius: 16px; padding: 20px;">
                                            <h3 style="margin: 0 0 15px 0; color: #fbbf24; font-size: 1rem; display: flex; align-items: center; gap: 8px;">
                                                <span style="font-size: 1.3rem;">📈</span> Evolución Financiera
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
                    let upgradeCost = 0;
                    let upgradeText = "Ampliar Negocio";
                    let upgradeDisabled = "";

                    // Get location-based max staff
                    const loc = CompanyModule.locations[co.locationId];
                    const locationMaxStaff = loc?.maxStaff || 15;

                    // Check if at location max
                    if (co.maxStaff >= locationMaxStaff) {
                        upgradeText = `Máximo (${locationMaxStaff})`;
                        upgradeDisabled = "disabled";
                    } else if (co.staff.length < co.maxStaff) {
                        upgradeText = `Ampliar Negocio (Req: Plantilla Completa)`;
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

                    // Check if Expert hiring should be locked (productLevel must be >= 5)
                    const expertLocked = co.productLevel < 5;
                    const expertBtnDisabled = expertLocked ? 'disabled' : '';
                    const expertBtnStyle = expertLocked ? 'opacity:0.5; cursor:not-allowed;' : '';
                    const expertBtnText = expertLocked ? `Experto (1.8k) 🔒 Req: Nv.5` : 'Experto (1.8k)';


                    // RENDER STAFF CARDS
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
                                        <span style="width:60px;">Habilidad</span>
                                        <div class="staff-bar-track">
                                            <div class="staff-bar-fill bar-skill" style="width:${(emp.skill * 100).toFixed(0)}%"></div>
                                        </div>
                                        <span>${(emp.skill * 100).toFixed(0)}%</span>
                                    </div>
                                    <div class="staff-stat-row">
                                        <span style="width:60px;">Moral</span>
                                        <div class="staff-bar-track">
                                            <div class="staff-bar-fill bar-morale ${emp.morale < 0.4 ? 'low' : ''}" style="width:${(emp.morale * 100).toFixed(0)}%"></div>
                                        </div>
                                        <span>${(emp.morale * 100).toFixed(0)}%</span>
                                    </div>

                                    <div class="staff-controls">
                                        <div class="salary-control">
                                            <span style="font-size:0.8rem; color:#94a3b8;">Salario</span>
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
                                                    title="Actualizar salario"
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
                                    >🚪 Despedir</button>
                                </div>
                            `;
                    });


                    tabContent.innerHTML = `
                            <div class="comp-dash-container">
                                <div class="staff-header" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #334155; padding-bottom:15px; flex-wrap: wrap; gap: 10px;">
                                    <h3 style="margin:0;">👥 Plantilla (${co.staff.length} / ${co.maxStaff})</h3>
                                    <div style="display: flex; gap: 10px; align-items: center;">
                                        <button id="btn-upgrade-office" ${upgradeDisabled} style="
                                            display: inline-flex; align-items: center; gap: 8px; padding: 10px 18px; border-radius: 10px; font-weight: 700; font-size: 0.85rem; border: none; cursor: ${upgradeDisabled ? 'not-allowed' : 'pointer'}; transition: all 0.2s;
                                            ${upgradeDisabled ? 'background: #334155; color: #64748b; opacity: 0.6;' : 'background: linear-gradient(135deg, #a855f7, #7c3aed); color: white; box-shadow: 0 4px 15px rgba(168, 85, 247, 0.3);'}
                                        ">
                                            <span style="font-size: 1.1rem;">🏢</span>
                                            ${upgradeText}
                                        </button>
                                        
                                        <!-- PAYROLL AUTOMATION BUTTON -->
                                        ${(() => {
                            const hasAuto = co.upgrades && co.upgrades.autoPayroll;
                            const canBuy = !hasAuto && co.maxStaff > 5 && co.cash >= 25000;
                            const btnStyle = hasAuto
                                ? 'background: linear-gradient(135deg, #10b981, #059669); color: white; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3); pointer-events: none;'
                                : (canBuy ? 'background: linear-gradient(135deg, #6366f1, #4f46e5); color: white; box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);' : 'background: #334155; color: #64748b; opacity: 0.6;');

                            // Ensure user sees price or status
                            let label = hasAuto ? 'RRHH Activo' : `Contratar RRHH (${formatCurrency(25000)})`;
                            let subLabel = '';

                            if (!hasAuto && !canBuy) {
                                if (co.maxStaff <= 5) {
                                    subLabel = 'Req: Negocio Nivel 2+';
                                } else if (co.cash < 25000) {
                                    subLabel = 'Faltan Fondos';
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
                                            <h3 style="margin: 0; color: #38bdf8; font-size: 1.1rem;">Centro de Contratación</h3>
                                            <p style="margin: 4px 0 0 0; color: #64748b; font-size: 0.8rem;">Plantilla: ${co.staff.length} / ${co.maxStaff}</p>
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
                                            <div style="font-weight: 700; color: #fff; margin-bottom: 5px;">Dependiente</div>
                                            <div style="font-size: 0.85rem; color: #94a3b8;">Habilidad: 40%</div>
                                            <div style="
                                                margin-top: 12px;
                                                padding: 8px 15px;
                                                background: linear-gradient(135deg, #38bdf8, #0ea5e9);
                                                color: #0f172a;
                                                border-radius: 8px;
                                                font-weight: 700;
                                                font-size: 0.85rem;
                                            ">Contratar • 1.200€/mes</div>
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
                                            <div style="font-weight: 700; color: ${expertLocked ? '#64748b' : '#a855f7'}; margin-bottom: 5px;">Experto</div>
                                            <div style="font-size: 0.85rem; color: #94a3b8;">Habilidad: 80%</div>
                                            ${expertLocked ?
                            `<div style="margin-top: 12px; padding: 8px 15px; background: #334155; color: #64748b; border-radius: 8px; font-size: 0.75rem;">🔒 Req: Producto Nv.5</div>` :
                            `<div style="margin-top: 12px; padding: 8px 15px; background: linear-gradient(135deg, #a855f7, #7c3aed); color: #fff; border-radius: 8px; font-weight: 700; font-size: 0.85rem;">Contratar • 1.800€/mes</div>`
                        }
                                        </div>
                                    </div>
                                    
                                    ${expertLocked ? '<p style="color:#fbbf24; font-size:0.8rem; margin: 15px 0 0 0; text-align: center;">💡 Mejora tu Producto a Nivel 5 para desbloquear talento experto.</p>' : ''}
                                </div>
                                
                                <h4 style="color:#94a3b8; margin-bottom: 15px; border-bottom: 1px solid #334155; padding-bottom: 10px;">📋 Empleados Actuales</h4>
                                <div class="staff-grid">
                                    ${staffHtml || '<div style="grid-column:1/-1; text-align:center; padding:40px; color:#64748b;">No hay empleados contratados.</div>'}
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
                                UI.showModal(res.success ? '¡Departamento RRHH Contratado!' : 'Error', res.message, [
                                    { text: 'Excelente', style: 'primary', fn: () => UI.updateJob(JobSystem) }
                                ]);
                            }
                        };
                    }

                    window.hireRole = (role, sal) => {
                        // Validate Expert hiring restriction
                        if (role === 'Experto' && GameState.company.productLevel < 5) {
                            const lockMsg = `
                                        <div style="text-align:center;">
                                            <p style="margin-bottom:15px;">No puedes contratar <strong>Empleados Expertos</strong> aún.</p>
                                            <div style="background:rgba(251, 191, 36, 0.1); border:1px solid #fbbf24; border-radius:8px; padding:15px; margin:15px 0;">
                                                <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                                                    <span>Requisito:</span>
                                                    <strong style="color:#fbbf24;">Nivel de Producto 5</strong>
                                                </div>
                                                <div style="display:flex; justify-content:space-between;">
                                                    <span>Nivel Actual:</span>
                                                    <strong style="color:#f87171;">Nivel ${GameState.company.productLevel}</strong>
                                                </div>
                                            </div>
                                            <p style="color:#94a3b8; font-size:0.9rem; margin-top:15px;">
                                                💡 Debes invertir más en <strong>Desarrollo de Producto (I+D)</strong>.
                                            </p>
                                            <p style="color:#94a3b8; font-size:0.9rem;">
                                                Ve a la pestaña <strong style="color:#38bdf8;">"Producto"</strong> y realiza inversiones hasta alcanzar el Nivel 5.
                                            </p>
                                        </div>
                                    `;
                            UI.showModal('🔒 Empleados Expertos Bloqueados', lockMsg, [
                                { text: 'Entendido', style: 'secondary', fn: null }
                            ]);
                            return;
                        }
                        const skill = role === 'Experto' ? 0.8 : 0.4;

                        // Show styled modal for employee name input
                        const nameInputHtml = `
                            <div style="text-align: center;">
                                <div style="font-size: 3rem; margin-bottom: 15px;">👤</div>
                                <p style="color: #94a3b8; margin-bottom: 20px;">
                                    Dale un nombre a tu nuevo <strong style="color: #38bdf8;">${role}</strong>
                                </p>
                                <input 
                                    type="text" 
                                    id="new-employee-name" 
                                    maxlength="10" 
                                    placeholder="Ej: María, Juan..."
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
                                <p style="color: #64748b; font-size: 0.75rem; margin-top: 8px;">Máximo 10 caracteres</p>
                            </div>
                        `;

                        // PREMIUM HIRING MODAL
                        const themeColor = '#06b6d4'; // Cyan
                        const icon = '👥';

                        let hireMsg = `
                            <div style="text-align: center; margin-bottom: 20px;">
                                <div style="font-size: 4rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px ${themeColor}66); animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);">${icon}</div>
                                <h3 style="color: ${themeColor}; margin: 0; font-size: 1.6rem; text-shadow: 0 0 10px ${themeColor}4d; font-weight: 800; letter-spacing: 1px;">¡NUEVO TALENTO!</h3>
                            </div>
                            
                            <div style="margin-bottom: 20px;">
                                ${nameInputHtml}
                            </div>
                            
                            <p style="text-align: center; color: #cbd5e1; font-size: 0.9rem; line-height: 1.5; margin: 0;">
                                Contratar personal aumenta la capacidad de tu negocio.
                            </p>
                        `;

                        UI.showModal(' ', hireMsg, [
                            {
                                text: 'Cancelar',
                                style: 'secondary',
                                fn: null
                            },
                            {
                                text: '¡Contratar!',
                                style: 'primary', // Cyan button style
                                fn: () => {
                                    const nameInput = document.getElementById('new-employee-name');
                                    let empName = (nameInput.value || '').trim().substring(0, 10) || role;

                                    const r = CompanyModule.hireStaff(role, sal, skill, empName);
                                    if (r) {
                                        if (!r.success) {
                                            UI.showModal('❌ Error al Contratar', r.message, [
                                                { text: 'Cerrar', style: 'secondary', fn: null }
                                            ]);
                                        } else {
                                            UI.showToast(`¡${empName} se une al equipo! 🎉`, 'success');
                                        }
                                        UI.updateJob(JobSystem);
                                    }
                                }
                            }
                        ], true);

                        // Focus input after modal renders
                        setTimeout(() => {
                            const inp = document.getElementById('new-employee-name');
                            if (inp) inp.focus();
                        }, 100);
                    };
                    window.fireEmployee = (i) => {
                        if (confirm('¿Despedir empleado? Baja moral del equipo.')) {
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

                        // Validation: Range check
                        if (isNaN(newSalary) || newSalary < 1000 || newSalary > 9000) {
                            UI.showModal(
                                '⚠️ Salario Inválido',
                                'El salario debe estar entre <strong>1.000€</strong> y <strong>9.000€</strong>.',
                                [{
                                    text: 'Entendido', style: 'secondary', fn: () => {
                                        inputEl.value = GameState.company.staff[employeeIndex].salary;
                                    }
                                }]
                            );
                            return;
                        }

                        const employee = GameState.company.staff[employeeIndex];
                        const oldSalary = employee.salary;

                        // Warning: Below required wage
                        if (newSalary < employee.requiredWage) {
                            const warningMsg = `
                                        <div style="text-align:left;">
                                            <p style="margin-bottom:10px;">Estás estableciendo el salario por debajo del mínimo requerido:</p>
                                            <div style="background:rgba(248, 113, 113, 0.1); border-left:3px solid #f87171; padding:10px; margin:10px 0; border-radius:4px;">
                                                <div style="display:flex; justify-content:space-between; margin-bottom:5px;">
                                                    <span>Nuevo salario:</span>
                                                    <strong>${formatCurrency(newSalary)}</strong>
                                                </div>
                                                <div style="display:flex; justify-content:space-between;">
                                                    <span>Mínimo requerido:</span>
                                                    <strong style="color:#f87171;">${formatCurrency(employee.requiredWage)}</strong>
                                                </div>
                                            </div>
                                            <p style="color:#fbbf24; margin-top:10px;">
                                                ⚠️ Esto afectará <strong>negativamente la MORAL</strong> del empleado y reducirá su productividad.
                                            </p>
                                            <p style="margin-top:10px;">¿Continuar de todos modos?</p>
                                        </div>
                                    `;

                            UI.confirmModal('⚠️ Advertencia de Salario Bajo', warningMsg, () => {
                                // User confirmed - proceed with update
                                employee.salary = newSalary;

                                const diff = newSalary - oldSalary;
                                const diffText = diff >= 0 ? `+${formatCurrency(diff)}` : formatCurrency(diff);

                                UI.showModal(
                                    '⚠️ Salario Reducido',
                                    `<div style="text-align:center;">
                                                <p>Salario actualizado a <strong style="color:#f87171;">${formatCurrency(newSalary)}</strong></p>
                                                <p style="color:#94a3b8; font-size:0.9rem;">(${diffText})</p>
                                                <p style="margin-top:15px; color:#fbbf24;">😠 Esto afectará la moral del empleado.</p>
                                            </div>`,
                                    [{
                                        text: 'Entendido', style: 'secondary', fn: () => {
                                            UI.updateJob(JobSystem);
                                            UI.updateHeader();
                                        }
                                    }]
                                );
                            }, () => {
                                // User cancelled - restore old value
                                inputEl.value = oldSalary;
                            });
                            return;
                        }

                        // Update salary (if not below required wage)
                        employee.salary = newSalary;

                        // Feedback message
                        const diff = newSalary - oldSalary;
                        const diffText = diff >= 0 ? `+${formatCurrency(diff)}` : formatCurrency(diff);

                        if (diff > 0) {
                            UI.showModal(
                                '✅ Salario Actualizado',
                                `<div style="text-align:center;">
                                            <p>Nuevo salario: <strong style="color:#4ade80;">${formatCurrency(newSalary)}</strong></p>
                                            <p style="color:#94a3b8; font-size:0.9rem;">(${diffText})</p>
                                            <p style="margin-top:15px; color:#4ade80;">😊 El empleado estará más motivado.</p>
                                        </div>`,
                                [{
                                    text: 'Perfecto', style: 'success', fn: () => {
                                        UI.updateJob(JobSystem);
                                        UI.updateHeader();
                                    }
                                }]
                            );
                        } else if (diff < 0) {
                            UI.showModal(
                                '⚠️ Salario Reducido',
                                `<div style="text-align:center;">
                                            <p>Nuevo salario: <strong style="color:#f87171;">${formatCurrency(newSalary)}</strong></p>
                                            <p style="color:#94a3b8; font-size:0.9rem;">(${diffText})</p>
                                            <p style="margin-top:15px; color:#fbbf24;">😠 Esto afectará la moral del empleado.</p>
                                        </div>`,
                                [{
                                    text: 'Entendido', style: 'secondary', fn: () => {
                                        UI.updateJob(JobSystem);
                                        UI.updateHeader();
                                    }
                                }]
                            );
                        } else {
                            UI.showModal(
                                'ℹ️ Salario Confirmado',
                                `<div style="text-align:center;">
                                            <p>Salario confirmado: <strong>${formatCurrency(newSalary)}</strong></p>
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
                    const qText = qGap >= 0 ? 'La reputación está subiendo' : 'La reputación está bajando';

                    let provOpts = '';
                    for (const [k, v] of Object.entries(CompanyModule.providers)) {
                        const isSel = co.providerId === k;
                        provOpts += `<div class="selection-card ${isSel ? 'selected' : ''}" onclick="setStrat('provider', '${k}')">
                                <strong>${v.name}</strong><br>Coste: x${v.priceMod}<br>Calidad: ${(v.quality * 100).toFixed(0)}%
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
                                            <h3 style="margin: 0 0 8px 0; color: #4ade80; font-size: 1.1rem;">Desarrollo de Producto</h3>
                                            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                                                <span style="color: #fff; font-weight: 800; font-size: 1.5rem;">Nivel ${co.productLevel}</span>
                                                <span style="color: #64748b; font-size: 0.85rem;">/ 10</span>
                                            </div>
                                            <div style="background: #0f172a; border-radius: 8px; height: 10px; overflow: hidden; margin-bottom: 12px;">
                                                <div style="width: ${co.productLevel * 10}%; height: 100%; background: linear-gradient(90deg, #4ade80, #22c55e); border-radius: 8px; transition: width 0.3s;"></div>
                                            </div>
                                            <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">
                                                Cada nivel aumenta la <strong style="color: #4ade80;">calidad base +5%</strong> → Mayor satisfacción.
                                            </p>
                                        </div>
                                        ${(() => {
                            const productCost = co.productLevel * 5000;
                            const canAfford = co.cash >= productCost;
                            const isMaxLevel = co.productLevel >= 10;
                            const needsMoreStaff = co.productLevel >= co.staff.length;
                            const requiredStaff = co.productLevel + 1;

                            if (isMaxLevel) {
                                return `<div style="padding: 14px 28px; border-radius: 12px; background: #334155; color: #64748b; font-weight: 700; text-align: center;">✓ Nivel Máximo</div>`;
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
                                                    <span>🔒 Req: ${requiredStaff} empleados</span>
                                                    <span style="font-size: 0.7rem; color: #fbbf24;">Tienes: ${co.staff.length} 👥</span>
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
                                                    <span style="font-size: 0.7rem; color: #f87171;">Caja: ${formatCurrency(co.cash)}</span>
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
                                            >⬆️ Mejorar (${formatCurrency(productCost)})</button>`;
                        })()}
                                    </div>
                                </div>
                                
                                <div class="strategy-grid">
                                    <div id="comp-pricing-card" class="strat-card">
                                        <h4 class="staff-role-title" style="margin-bottom:15px;">🏷️ Estrategia de Precio</h4>
                                        <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:5px;">Base Mercado: ${formatCurrency(baseTicket)}</p>
                                        <p style="font-size:0.85rem; color:#facc15; margin-bottom:15px;">Equilibrio (Rep. ${co.reputation.toFixed(1)}): <strong>${formatCurrency(equiPrice)}</strong></p>
                                        <div style="display:flex; align-items:center; gap:10px;">
                                            <input type="number" id="price-input" value="${currentPrice}" step="0.5" class="comp-input-sm" style="width:100px; text-align:center;">
                                            <button onclick="updatePrice()" class="btn-sm" style="background:#38bdf8; color:#0f172a; border:none; padding:6px 15px;">Fijar</button>
                                        </div>
                                    </div>
                                    <div id="comp-reputation-card" class="strat-card highlight">
                                        <h4 class="staff-role-title">📊 Análisis de Reputación</h4>
                                        <div class="analysis-box">
                                            <div class="data-row strong">
                                                <span>Calidad Real</span>
                                                <span>${(stats.actualQuality * 100).toFixed(0)}%</span>
                                            </div>
                                            <div class="data-row">
                                                <span>• Base Proveedor</span>
                                                <span>${(curProv.quality * 100).toFixed(0)}%</span>
                                            </div>
                                            <div class="data-row" style="margin-bottom:15px;">
                                                <span>• Bonus I+D (Nvl ${co.productLevel})</span>
                                                <span style="color:#4ade80;">+${((co.productLevel - 1) * 5).toFixed(0)}%</span>
                                            </div>

                                            <div class="data-row strong">
                                                <span>Exigencia (Precio)</span>
                                                <span>${(stats.requiredQuality * 100).toFixed(0)}%</span>
                                            </div>
                                            <div class="data-row">
                                                <span>• Base Mercado</span>
                                                <span>70%</span>
                                            </div>
                                            <div class="data-row">
                                                <span>• Ajuste Precio</span>
                                                <span>${((stats.requiredQuality - 0.70) * 100).toFixed(0)}%</span>
                                            </div>
                                        </div>
                                        <div style="text-align:center; padding-top:15px;">
                                            <p style="margin-bottom:5px; color:#fbbf24;">Reputación Actual: <strong>${co.reputation.toFixed(2)}</strong></p>
                                            <p style="margin-bottom:5px; color:${(stats.targetRep || 0) > co.reputation ? '#4ade80' : '#f87171'}">Proyección de la reputacion: <strong>${stats.targetRep ? stats.targetRep.toFixed(2) : '3.50'}</strong></p>

                                        </div>
                                    </div>
                                </div>
                                
                                <div id="comp-providers-section">
                                    <h3 style="border-bottom:1px solid #334155; padding-bottom:10px; margin: 25px 0 20px 0;">📦 Proveedores (Insumos)</h3>
                                    <div class="options-grid">${provOpts}</div>
                                </div>
                            </div>
                        `;

                    // window.attachProductHandlers(); // Removed (undefined)

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
                                <div style="font-weight: 700; color: ${isSel ? color : '#fff'}; font-size: 0.95rem;">${v.name}</div>
                                <div style="display: flex; flex-direction: column; gap: 4px; font-size: 0.8rem; color: #94a3b8;">
                                    <span>💰 ${v.cost === 0 ? 'Gratis' : formatCurrency(v.cost) + '/mes'}</span>
                                    <span style="color: ${v.impact > 1 ? '#4ade80' : '#64748b'};">📈 Impacto x${v.impact}</span>
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
                                                <h3 style="margin: 0 0 8px 0; color: #fbbf24; font-size: 1.1rem;">Infraestructura de Marketing</h3>
                                                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                                                    <span style="color: #fff; font-weight: 800; font-size: 1.5rem;">Nivel ${co.marketingLevel}</span>
                                                    <span style="color: #64748b; font-size: 0.85rem;">/ 10</span>
                                                </div>
                                                <div style="background: #0f172a; border-radius: 8px; height: 10px; overflow: hidden; margin-bottom: 12px;">
                                                    <div style="width: ${co.marketingLevel * 10}%; height: 100%; background: linear-gradient(90deg, #fbbf24, #f59e0b); border-radius: 8px; transition: width 0.3s;"></div>
                                                </div>
                                                <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">
                                                    Cada nivel aumenta la <strong style="color: #fbbf24;">eficacia +20%</strong> → Más clientes.
                                                </p>
                                            </div>
                                            ${(() => {
                            const mktCost = co.marketingLevel * 5000;
                            const canAfford = co.cash >= mktCost;
                            const isMaxLevel = co.marketingLevel >= 10;
                            const needsMoreStaff = co.marketingLevel >= co.staff.length;
                            const requiredStaff = co.marketingLevel + 1;

                            if (isMaxLevel) {
                                return `<div style="padding: 14px 28px; border-radius: 12px; background: #334155; color: #64748b; font-weight: 700; text-align: center;">✓ Nivel Máximo</div>`;
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
                                                        <span>🔒 Req: ${requiredStaff} empleados</span>
                                                        <span style="font-size: 0.7rem; color: #fbbf24;">Tienes: ${co.staff.length} 👥</span>
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
                                                        <span style="font-size: 0.7rem; color: #f87171;">Caja: ${formatCurrency(co.cash)}</span>
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
                                                >⬆️ Mejorar (${formatCurrency(mktCost)})</button>`;
                        })()}
                                        </div>
                                    </div>
                                    
                                    <div id="comp-marketing-channels-section">
                                        <h3 style="border-bottom:1px solid #334155; padding-bottom:10px; margin-bottom:20px; font-size: 1.1rem;">📡 Canales de Publicidad</h3>
                                        <div class="options-grid" style="margin-bottom:25px; display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 15px;">${mktOpts}</div>
                                    </div>

                                    <div id="comp-marketing-analysis-card" class="strat-card highlight">
                                        <h4 class="staff-role-title" style="color:#38bdf8;">📈 Análisis de Demanda</h4>
                                        <div class="analysis-box" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap:15px;">
                                            <div class="data-row"><span>Base:</span> <strong>${comp.base}</strong></div>
                                            <div class="data-row"><span>Tráfico:</span> <strong>x${comp.traffic.toFixed(2)}</strong></div>
                                            <div class="data-row"><span>Marketing:</span> <strong>x${comp.marketing.toFixed(2)}</strong></div>
                                            <div class="data-row"><span>Reputación:</span> <strong>x${comp.reputation.toFixed(2)}</strong></div>
                                            <div class="data-row"><span>Orgánico:</span> <strong>x${comp.organic.toFixed(2)}</strong></div>
                                            <div class="data-row" style="color:#facc15;"><span>Volatilidad:</span> <strong>x${(comp.volatility || 1).toFixed(2)}</strong></div>
                                            <div style="grid-column: 1 / -1; border-top:1px solid #334155; margin-top:5px; padding-top:10px; text-align:center;">
                                                Total Estimado: <strong style="color:#4ade80; font-size:1.1rem;">${stats.demand || 0} clientes/mes</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                    tabContent.innerHTML = strategyHTML;


                    // Functions moved to shared scope above


                } else if (activeTab === 'finance') {
                    tabContent.innerHTML = `
                        <div style="display: flex; flex-direction: column; gap: 20px;">
                            
                            <!-- Cash Movements Card -->
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
                                        <h3 style="margin: 0; color: #38bdf8; font-size: 1.1rem;">Movimientos de Caja</h3>
                                        <p style="margin: 4px 0 0 0; color: #64748b; font-size: 0.8rem;">Transfiere fondos entre empresa y cuenta personal</p>
                                    </div>
                                </div>
                                
                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                                    <div style="background: rgba(15, 23, 42, 0.5); border-radius: 12px; padding: 15px;">
                                        <label style="display:block; margin-bottom:8px; color:#4ade80; font-weight: 600; font-size:0.9rem;">📤 Retirar a cuenta personal</label>
                                        <div style="display:flex; flex-wrap:wrap; gap:10px;">
                                            <input type="number" id="co-trans-amount" placeholder="Cantidad €" style="
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
                                            ">Retirar</button>
                                        </div>
                                    </div>
                                    <div style="background: rgba(15, 23, 42, 0.5); border-radius: 12px; padding: 15px;">
                                        <label style="display:block; margin-bottom:8px; color:#a855f7; font-weight: 600; font-size:0.9rem;">📥 Inyectar desde cuenta personal</label>
                                        <div style="display:flex; flex-wrap:wrap; gap:10px;">
                                            <input type="number" id="co-dep-amount" placeholder="Cantidad €" style="
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
                                            ">Ingresar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- CEO Salary Card -->
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
                                        <h3 style="margin: 0; color: #fbbf24; font-size: 1.1rem;">Salario del CEO</h3>
                                        <p style="margin: 4px 0 0 0; color: #64748b; font-size: 0.8rem;">Tu sueldo mensual (cubre gastos personales)</p>
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
                                    <span style="color: #64748b;">€ / mes</span>
                                    <button id="btn-set-salary" style="
                                        background: linear-gradient(135deg, #fbbf24, #f59e0b);
                                        color: #0f172a;
                                        border: none;
                                        padding: 12px 25px;
                                        border-radius: 8px;
                                        font-weight: 700;
                                        cursor: pointer;
                                        margin-left: auto;
                                    ">Actualizar</button>
                                </div>
                            </div>
                            
                            <!-- Danger Zone Card -->
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
                                        <h3 style="margin: 0; color: #ef4444; font-size: 1.1rem;">Zona de Peligro</h3>
                                        <p style="margin: 4px 0 0 0; color: #64748b; font-size: 0.8rem;">Acciones irreversibles</p>
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
                                >🏷️ VENDER EMPRESA (EXIT)</button>
                            </div>
                        </div>
            `;

                    document.getElementById('btn-withdraw').onclick = () => {
                        const val = parseInt(document.getElementById('co-trans-amount').value);
                        if (!val || val <= 0) return showGameAlert('Introduce cantidad válida', 'warning');
                        let r = CompanyModule.withdraw(val);
                        if (r) showGameAlert(r.message, r.success ? 'success' : 'error');
                        UI.updateJob(JobSystem);
                        UI.updateHeader();
                    };
                    document.getElementById('btn-deposit').onclick = () => {
                        const val = parseInt(document.getElementById('co-dep-amount').value);
                        if (!val || val <= 0) return showGameAlert('Introduce cantidad válida', 'warning');
                        let r = CompanyModule.deposit(val);
                        if (r) showGameAlert(r.message, r.success ? 'success' : 'error');
                        UI.updateJob(JobSystem);
                        UI.updateHeader();
                    };
                    document.getElementById('btn-set-salary').onclick = () => {
                        const val = parseInt(document.getElementById('co-ceo-salary').value) || 0;
                        co.ceoSalary = val;
                        showGameAlert(`Salario de CEO actualizado a ${formatCurrency(val)}`, 'success', '💼 Salario Actualizado');
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
            console.error('UI Error:', e.message);
        }
    },

    checkStoryEvents() {
        console.log(`DEBUG: Checking Story Events. Year: ${GameState.year}, Month: ${GameState.month}`);

        // EVENT 1: Year 1, Month 4
        if (GameState.year === 1 && GameState.month === 4) {
            GameState.cash += 300;
            // PREMIUM BIRTHDAY MESSAGE
            const themeColor = '#e879f9'; // Fuchsia
            const icon = '🎁';

            let bdayMsg = `
                <div style="text-align: center; margin-bottom: 20px;">
                    <div style="font-size: 4rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px ${themeColor}66); animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);">${icon}</div>
                    <h3 style="color: ${themeColor}; margin: 0; font-size: 1.6rem; text-shadow: 0 0 10px ${themeColor}4d; font-weight: 800; letter-spacing: 1px;">¡FELIZ CUMPLEAÑOS!</h3>
                </div>

                <div style="background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.6)); border: 1px solid ${themeColor}4d; border-radius: 16px; padding: 25px; text-align: center; margin-bottom: 25px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                    <div style="font-size: 0.85rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px;">Regalo Familiar</div>
                    <div style="font-size: 1.6rem; font-weight: 800; color: #f8fafc; margin-bottom: 15px;">+300,00 €</div>
                    
                    <div style="display: inline-block; background: ${themeColor}26; border: 1px solid ${themeColor}4d; padding: 10px 20px; border-radius: 30px;">
                        <span style="color: ${themeColor}; font-weight: 700; font-size: 1.1rem;">Cash Extra</span>
                    </div>
                </div>

                <p style="text-align: center; color: #cbd5e1; font-size: 1rem; line-height: 1.6; margin: 0; padding: 0 10px;">
                    Tu familia te envía un regalo por tu aniversario. ¡Disfrútalo!
                </p>
            `;
            UI.showModal(' ', bdayMsg, [{ text: '🥰 ¡Gracias!', style: 'primary', fn: null }], true);
            UI.playCoinSound();
        }

        // EVENT 2A: Year 2, Month 3 - Silent Unlock
        if (GameState.year === 2 && GameState.month === 3) {
            GameState.expensesUnlocked = true;
            // Notification removed as requested
        }

        // EVENT 2B: Year 2, Month 4 - Kicked out (or later if missed)
        if (!GameState.tutorialState.forceHousing &&
            !GameState.tutorialFlags.momKickedOut && // Prevent re-triggering
            ((GameState.year === 2 && GameState.month >= 4) || GameState.year > 2)) {

            GameState.cash += 300;
            GameState.tutorialFlags.momKickedOut = true; // Mark as done permanently

            UI.playCoinSound();

            // Trigger Tutorial Step 8
            TutorialSystem.step8_ForceHousing();
        }
    }
};

/**
 * Advance the game by one month. This is the main game loop function.
 * Processes all modules, updates finances, checks events, and handles progression.
 * Called when player clicks "Siguiente Mes" button.
 */
function nextTurn() {
    // Tutorial Cleanup for Step 4 (Free Play)
    if (GameState.tutorialStep === 4) {
        TutorialSystem.hideOverlay();
        TutorialSystem.removeHighlights();
        TutorialSystem.unlockScroll();
    }

    StockMarket.nextTurn();
    RealEstate.nextTurn(); // Dynamic prices
    Bank.nextTurn();
    // JobSystem.nextTurn(); // Moved below to ensure salary is paid before expiry
    EducationModule.nextTurn(); // Study progress
    CompanyModule.nextTurn(); // Company Progress

    // Dynamic Expenses
    if (GameState.lifestyle) {
        GameState.expenses = LifestyleModule.calculateTotal();
    }

    const rentIncome = GameState.inventory.realEstate.reduce((acc, p) => acc + p.monthlyRent, 0);
    const netIncome = GameState.salary + rentIncome - GameState.expenses;
    GameState.cash += netIncome;

    // TRACK ANNUAL INCOME FOR TAXES
    if (!GameState.currentYearIncome) {
        GameState.currentYearIncome = { salary: 0, rental: 0, stocks: 0, company: 0 };
    }
    if (!GameState.currentYearExpenses) {
        GameState.currentYearExpenses = 0;
    }

    // DEFENSIVE INIT FOR LIFETIME STATS (for old save games)
    if (!GameState.lifetimeStats) {
        GameState.lifetimeStats = {
            totalIncome: { salary: 0, rental: 0, stocks: 0, company: 0 },
            totalExpenses: { lifestyle: 0, housing: 0, education: 0 },
            totalTaxesPaid: 0
        };
    }

    if (GameState.salary > 0) {
        GameState.currentYearIncome.salary += GameState.salary;
        // LIFETIME TRACKING
        GameState.lifetimeStats.totalIncome.salary += GameState.salary;
    }
    if (rentIncome > 0) {
        GameState.currentYearIncome.rental += rentIncome;
        // LIFETIME TRACKING
        GameState.lifetimeStats.totalIncome.rental += rentIncome;
    }
    // LIFETIME EXPENSE TRACKING
    if (GameState.expenses > 0) {
        GameState.lifetimeStats.totalExpenses.lifestyle += GameState.expenses;
        GameState.currentYearExpenses += GameState.expenses;
    }
    // Stock gains are tracked when selling
    // Company profits are tracked in Company Module.nextTurn

    // PROGRESSIVE COMMUNIST EXPROPRIATION SYSTEM
    let expropriationTriggered = false;
    let expropriationAmount = 0;
    let expropriationPercent = 0;
    let expropriationMessage = '';

    // Tier 4: 6 Million or more - 90% (RECURRING)
    if (GameState.cash >= 6000000) {
        expropriationPercent = 0.90;
        expropriationAmount = Math.floor(GameState.cash * expropriationPercent);
        GameState.cash -= expropriationAmount;
        expropriationTriggered = true;
        expropriationMessage = `¡ATENCIÓN CIUDADANO!<br><br>El Comité Central ha detectado que posees una cantidad <strong>obscena</strong> de capital (${formatCurrency(GameState.cash + expropriationAmount)}).<br><br>En nombre de la <strong>igualdad social</strong>, procedemos a <strong>redistribuir el 90%</strong> (${formatCurrency(expropriationAmount)}) entre... ehh... proyectos del partido.<br><br>🚩 ¡Viva la revolución!`;
    }
    // Tier 3: 3 Million - 70% (ONCE)
    else if (GameState.cash >= 3000000 && !GameState.expropriation3MDone) {
        expropriationPercent = 0.70;
        expropriationAmount = Math.floor(GameState.cash * expropriationPercent);
        GameState.cash -= expropriationAmount;
        GameState.expropriation3MDone = true;
        expropriationTriggered = true;
        expropriationMessage = `Estimado "camarada"...<br><br>Hemos notado que tu cuenta bancaria parece la de un <strong>burgués capitalista</strong>. Esto no puede ser.<br><br>El Estado de Sergio ha aprobado una <strong>"contribución solidaria obligatoria"</strong> del 70% (${formatCurrency(expropriationAmount)}).<br><br>Tranquilo, lo usaremos para... cosas. Importantes. Probablemente.`;
    }
    // Tier 2: 1 Million - 60% (ONCE)
    else if (GameState.cash >= 1000000 && !GameState.expropriation1MDone) {
        expropriationPercent = 0.60;
        expropriationAmount = Math.floor(GameState.cash * expropriationPercent);
        GameState.cash -= expropriationAmount;
        GameState.expropriation1MDone = true;
        expropriationTriggered = true;
        expropriationMessage = `¡Felicidades! Has alcanzado el <strong>millón de euros</strong>.<br><br>Lástima que en el Estado de Sergio eso sea considerado <strong>"riqueza indecente"</strong>.<br><br>Se te aplicará un <strong>"ajuste patrimonial"</strong> del 60% (${formatCurrency(expropriationAmount)}) para financiar... ehh... la nueva estatua de Sergio. Es muy grande.`;
    }
    // Tier 1: 500k - 50% (ONCE)
    else if (GameState.cash >= 500000 && !GameState.expropriation500kDone) {
        expropriationPercent = 0.50;
        expropriationAmount = Math.floor(GameState.cash * expropriationPercent);
        GameState.cash -= expropriationAmount;
        GameState.expropriation500kDone = true;
        expropriationTriggered = true;
        expropriationMessage = `Lamentablemente en el juego de Sergio gobierna el <strong>comunismo</strong>... y piensa que tienes demasiado dinero.<br><br>El estado ha decidido <strong>expropiarte el 50%</strong> de tu dinero (${formatCurrency(expropriationAmount)}) para gastárselo en... bueno, que somos el estado no tenemos que darte explicaciones.`;
    }

    // Show expropriation modal if triggered
    if (expropriationTriggered) {
        setTimeout(() => {
            // PREMIUM EXPROPRIATION MESSAGE
            const themeColor = '#ef4444'; // Red
            const icon = '☭';

            let exproMsg = `
                <div style="text-align: center; margin-bottom: 20px;">
                    <div style="font-size: 4rem; margin-bottom: 10px; filter: drop-shadow(0 0 15px ${themeColor}66); animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);">${icon}</div>
                    <h3 style="color: ${themeColor}; margin: 0; font-size: 1.6rem; text-shadow: 0 0 10px ${themeColor}4d; font-weight: 800; letter-spacing: 1px;">EXPROPIACIÓN ESTATAL</h3>
                </div>

                <div style="background: linear-gradient(145deg, rgba(69, 10, 10, 0.8), rgba(30, 20, 20, 0.9)); border: 1px solid ${themeColor}4d; border-radius: 16px; padding: 25px; text-align: center; margin-bottom: 25px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                    <div style="font-size: 0.85rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px;">Impuesto Revolucionario (50%)</div>
                    <div style="font-size: 1.6rem; font-weight: 800; color: #f87171; margin-bottom: 15px;">-${formatCurrency(expropriationAmount)}</div>
                    
                    <div style="display: inline-block; background: ${themeColor}26; border: 1px solid ${themeColor}4d; padding: 10px 20px; border-radius: 30px;">
                        <span style="color: ${themeColor}; font-weight: 700; font-size: 1.1rem;">"Por el Bien Común"</span>
                    </div>
                </div>

                <p style="text-align: center; color: #cbd5e1; font-size: 1rem; line-height: 1.6; margin: 0; padding: 0 10px;">
                    El Estado ha decidido que tenías demasiado dinero. Se han incautado de la mitad de tu efectivo para financiar infraestructuras... o eso dicen.
                </p>
            `;

            UI.showModal(
                ' ',
                exproMsg,
                [{ text: '😢 Entendido', style: 'danger', fn: null }],
                true
            );
        }, 500);
    }

    JobSystem.nextTurn(); // Run here to handle job expiry AFTER pay

    // TAX SYSTEM
    // Warning in Month 1, Year 4
    if (GameState.year === 4 && GameState.month === 1 && !GameState.taxWarningShown) {
        GameState.taxWarningShown = true;
        setTimeout(() => {
            // PREMIUM TAX WARNING
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

    // Tax Declaration in Month 5 (starting year 4)
    if (GameState.year >= 4 && GameState.month === 5) {
        if (!GameState.previousYearIncome) {
            GameState.previousYearIncome = { salary: 0, rental: 0, stocks: 0, company: 0 };
        }

        const totalIncome =
            GameState.previousYearIncome.salary +
            GameState.previousYearIncome.rental +
            GameState.previousYearIncome.stocks +
            GameState.previousYearIncome.company;

        // DEDUCTION: 75% of Expenses
        const totalExpenses = GameState.previousYearExpenses || 0;
        const deductibleExpenses = Math.floor(totalExpenses * 0.75);
        const taxableBase = Math.max(0, totalIncome - deductibleExpenses);

        // PROGRESSIVE TAX SYSTEM
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
                    <div style="font-size: 0.85rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 2px;">Declaración de la Renta</div>
                </div>
                
                <div style="background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.5)); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 16px; padding: 20px; margin-bottom: 20px;">
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px;">
                        <span style="font-size: 1.3rem;">📊</span>
                        <span style="color: #38bdf8; font-weight: 700; font-size: 1rem;">Ingresos Año ${GameState.year - 1}</span>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                        <div style="background: rgba(15, 23, 42, 0.5); border-radius: 10px; padding: 12px; text-align: center;">
                            <div style="font-size: 1.5rem; margin-bottom: 5px;">💼</div>
                            <div style="font-size: 0.75rem; color: #94a3b8; margin-bottom: 3px;">Salarios</div>
                            <div style="font-size: 1rem; color: #4ade80; font-weight: 700;">${formatCurrency(GameState.previousYearIncome.salary)}</div>
                        </div>
                        <div style="background: rgba(15, 23, 42, 0.5); border-radius: 10px; padding: 12px; text-align: center;">
                            <div style="font-size: 1.5rem; margin-bottom: 5px;">🏠</div>
                            <div style="font-size: 0.75rem; color: #94a3b8; margin-bottom: 3px;">Alquileres</div>
                            <div style="font-size: 1rem; color: #4ade80; font-weight: 700;">${formatCurrency(GameState.previousYearIncome.rental)}</div>
                        </div>
                        <div style="background: rgba(15, 23, 42, 0.5); border-radius: 10px; padding: 12px; text-align: center;">
                            <div style="font-size: 1.5rem; margin-bottom: 5px;">📈</div>
                            <div style="font-size: 0.75rem; color: #94a3b8; margin-bottom: 3px;">Bolsa</div>
                            <div style="font-size: 1rem; color: #4ade80; font-weight: 700;">${formatCurrency(GameState.previousYearIncome.stocks)}</div>
                        </div>
                        <div style="background: rgba(15, 23, 42, 0.5); border-radius: 10px; padding: 12px; text-align: center;">
                            <div style="font-size: 1.5rem; margin-bottom: 5px;">🏢</div>
                            <div style="font-size: 0.75rem; color: #94a3b8; margin-bottom: 3px;">Empresa</div>
                            <div style="font-size: 1rem; color: #4ade80; font-weight: 700;">${formatCurrency(GameState.previousYearIncome.company)}</div>
                        </div>
                    </div>
                </div>
                
                <div style="background: linear-gradient(145deg, rgba(74, 222, 128, 0.1), rgba(34, 197, 94, 0.05)); border: 1px solid rgba(74, 222, 128, 0.3); border-radius: 12px; padding: 15px; margin-bottom: 15px; text-align: center;">
                    <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: #94a3b8; margin-bottom: 5px; padding: 0 20px;">
                        <span>Ingresos Brutos:</span>
                        <span>${formatCurrency(totalIncome)}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: #fbbf24; margin-bottom: 10px; padding: 0 20px;">
                        <span>Gastos Deducibles (75%):</span>
                        <span>-${formatCurrency(deductibleExpenses)}</span>
                    </div>
                    <div style="border-top: 1px solid rgba(255,255,255,0.1); margin: 5px 0;"></div>
                    <div style="font-size: 0.8rem; color: #e2e8f0; margin-bottom: 5px;">Base Imponible</div>
                    <div style="font-size: 1.5rem; color: #4ade80; font-weight: 800; text-shadow: 0 0 15px rgba(74, 222, 128, 0.3);">${formatCurrency(taxableBase)}</div>
                    <div style="font-size: 0.75rem; color: #94a3b8; margin-top: 5px;">Tramo: <span style="color: #facc15; font-weight: 600;">${(taxRate * 100).toFixed(0)}%</span></div>
                </div>
                
                <div style="background: linear-gradient(145deg, rgba(248, 113, 113, 0.15), rgba(239, 68, 68, 0.05)); border: 1px solid rgba(248, 113, 113, 0.4); border-radius: 12px; padding: 15px; text-align: center;">
                    <div style="font-size: 0.8rem; color: #f87171; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 1px;">A Pagar</div>
                    <div style="font-size: 1.8rem; color: #f87171; font-weight: 800; text-shadow: 0 0 20px rgba(248, 113, 113, 0.4);">${formatCurrency(taxAmount)}</div>
                </div>
            `;

            UI.showModal(
                '📋 Renta Año ' + (GameState.year - 1),
                breakdown,
                [{
                    text: '💸 Pagar Impuestos',
                    style: 'danger',
                    fn: () => {
                        // Show blocking confirmation first. Deduction happens AFTER accepting.
                        showGameAlert(
                            `Has pagado ${formatCurrency(taxAmount)} en impuestos.`,
                            'warning',
                            'Pago Realizado',
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

    // MOVED: Check Story Events AFTER advancing time so they trigger on arrival
    UI.checkStoryEvents();

    if (GameState.month > 12) {
        GameState.month = 1;
        GameState.year++;
        GameState.age++; // Birthday!

        // CHECK FOR YEAR 50 ENDGAME
        if (GameState.year > 50) {
            setTimeout(() => showEndgameModal(), 500);
            return; // Stop game progression
        }

        // ASSIGN NEW ANNUAL STOCK TARGETS
        StockMarket.assignAnnualTargets();

        // RESET ANNUAL INCOME TRACKING
        if (!GameState.previousYearIncome) {
            GameState.previousYearIncome = { salary: 0, rental: 0, stocks: 0, company: 0 };
        }
        GameState.previousYearIncome = { ...GameState.currentYearIncome };
        GameState.currentYearIncome = { salary: 0, rental: 0, stocks: 0, company: 0 };

        // RESET ANNUAL EXPENSES TRACKING
        GameState.previousYearExpenses = GameState.currentYearExpenses || 0;
        GameState.currentYearExpenses = 0;
    }



    // Auto-save every 3 months (more frequent to prevent data loss)
    if (GameState.month % 3 === 0) {
        const saveRes = PersistenceModule.saveGame();
        console.log("Auto-Save:", saveRes.message);
    }

    // Regenerate real estate listings every 6 months
    if (GameState.month % 6 === 0) {
        RealEstate.generateListings();
    }

    // History & Chart
    const nw = updateNetWorth();

    // GAMIFICATION: MILESTONE CONFETTI
    const milestones = [5000, 50000, 100000, 500000, 1000000];
    if (!GameState.achievedMilestones) GameState.achievedMilestones = []; // Safety init for old saves

    milestones.forEach(m => {
        if (nw >= m && !GameState.achievedMilestones.includes(m)) {
            GameState.achievedMilestones.push(m);
            UI.triggerConfetti();
            UI.showToast('¡HITO DESBLOQUEADO!', `Has alcanzado tus primeros ${formatCurrency(m)} de Patrimonio.`, 'success');
            // Add a small bonus? No, visual only for now.
        }
    });

    // STOCK MARKET UNLOCK (25K NET WORTH)
    // Initialize for old saves that don't have this property
    if (GameState.stockUnlocked === undefined) {
        GameState.stockUnlocked = false;
    }

    console.log('DEBUG Stock Unlock Check:', { nw, stockUnlocked: GameState.stockUnlocked, shouldTrigger: nw >= 30000 && !GameState.stockUnlocked });

    if (nw >= 30000 && !GameState.stockUnlocked) {
        console.log('DEBUG: Triggering Stock Unlock!');
        GameState.stockUnlocked = true;
        // Trigger celebration and tutorial after a short delay
        setTimeout(() => {
            TutorialSystem.stepStock_Unlock();
        }, 500);
    }

    // BANK UNLOCK (Year 3, Month 6)
    // Initialize for old saves that don't have this property
    if (GameState.bankUnlocked === undefined) {
        GameState.bankUnlocked = false;
    }

    if (!GameState.bankUnlocked && GameState.year >= 3 && GameState.month >= 6) {
        GameState.bankUnlocked = true;
        // Trigger Bank tutorial after a short delay
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

    // Max 24 points to keep it clean? Or scrollable. Canvas resizes fine. 
    // If dragging too long, slice.
    if (GameState.history.netWorth.length > 50) {
        GameState.history.netWorth.shift();
        GameState.history.cash.shift();
        GameState.history.debt.shift();
        GameState.history.assets.shift();
        GameState.history.labels.shift();
    }

    // BANKRUPTCY WARNING SYSTEM
    if (GameState.cash < 0) {
        // Increment consecutive bankruptcy counter
        GameState.consecutiveBankruptcyTurns = (GameState.consecutiveBankruptcyTurns || 0) + 1;

        if (GameState.consecutiveBankruptcyTurns >= 3) {
            // GAME OVER - BANKRUPTCY
            setTimeout(() => {
                showBankruptcyModal();
            }, 100);
            return; // Stop rendering updates behind modal
        }

        // WARNING
        showGameAlert(
            `
            <div style="text-align: center;">
                <div style="font-size: 3rem; margin-bottom: 15px;">💸</div>
                <p style="color: #ef4444; font-weight: 700; font-size: 1.1rem; margin-bottom: 10px;">¡Tu saldo es negativo!</p>
                <p style="color: #cbd5e1; margin-bottom: 15px;">
                    Llevas <strong>${GameState.consecutiveBankruptcyTurns}/3</strong> avisos con deuda.
                    <br>
                    Necesitas liquidez urgentemente. <strong>Vende cosas o se acabará el juego.</strong>
                </p>
                <p style="color: #94a3b8; font-size: 0.9rem; font-style: italic;">
                    "Si llegas a 3 avisos consecutivos, caerás en bancarrota."
                </p>
            </div>
            `,
            'error',
            '⚠️ ¡ALERTA DE QUIEBRA!'
        );
    } else {
        // Reset counter if positive balance
        GameState.consecutiveBankruptcyTurns = 0;
    }

    UI.render();
}





function showBankruptcyModal() {
    const stats = GameState.lifetimeStats;

    // Calculate final stats
    let totalDebt = 0;
    GameState.loans.forEach(l => totalDebt += l.remainingBalance);
    const liquidationValue = GameState.netWorth; // Simplified view

    const summary = `
                <div style="text-align: center; padding: 15px; max-height: 75vh; overflow-y: auto;">
                    <div style="font-size: 3rem; margin-bottom: 10px;">💸☠️</div>
                    <h2 style="color: #ef4444; margin: 0 0 10px 0; font-size: 1.6rem; text-transform: uppercase; letter-spacing: 1px;">¡BANCARROTA!</h2>
                    
                    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 12px; padding: 15px; margin-bottom: 20px;">
                        <p style="color: #fca5a5; margin: 0 0 10px 0; font-size: 1rem; font-weight: 600;">
                            Tus deudas te han consumido.
                        </p>
                        <p style="color: #cbd5e1; margin: 0; font-size: 0.9rem;">
                            Has ignorado las advertencias de liquidez durante 3 meses consecutivos. El banco ha ejecutado el embargo de todos tus bienes.
                        </p>
                    </div>

                    <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid #334155; border-radius: 12px; padding: 15px; margin-bottom: 20px;">
                         <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                            <span style="color: #94a3b8;">Patrimonio Final:</span>
                            <strong style="color: #f87171;">${formatCurrency(liquidationValue)}</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: #94a3b8;">Deuda Total:</span>
                            <strong style="color: #f87171;">-${formatCurrency(totalDebt)}</strong>
                        </div>
                    </div>

                    <p style="color: #94a3b8; font-size: 0.85rem; font-style: italic;">
                        "El mercado no perdona a quien no sabe gestionar su caja."
                    </p>
                    
                    <button onclick="location.reload()" style="
                        background: linear-gradient(135deg, #ef4444, #b91c1c);
                        color: white; border: none; padding: 12px 25px; border-radius: 8px;
                        font-weight: 700; font-size: 1rem; cursor: pointer; margin-top: 15px;
                        box-shadow: 0 4px 6px -1px rgba(239, 68, 68, 0.3);
                        width: 100%;
                    ">
                        Intentarlo de Nuevo
                    </button>
                </div>
    `;

    // Create modal overlay
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

// INIT
try {
    console.log('Juego iniciado (Script Try Block Start)');
    const setupEventListeners = () => {
        // Next Turn Buttons (Header and Dashboard)
        const nextBtns = document.querySelectorAll('#next-turn-btn, #dashboard-next-btn');
        nextBtns.forEach(btn => {
            btn.onclick = () => {
                const prevCash = GameState.cash;
                nextTurn();
                const diff = GameState.cash - prevCash;
                UI.showTurnFeedback(diff);
            };
        });

        // Stock Market
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

        // Loan Slider
        const slider = document.getElementById('loan-years');
        if (slider) {
            slider.oninput = (e) => {
                document.getElementById('loan-years-display').textContent = e.target.value + ' años';
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

        // Modals
        document.querySelectorAll('.close').forEach(btn => {
            btn.onclick = () => {
                btn.closest('.modal').style.display = 'none';
            };
        });

        // Window click to close modals
        window.onclick = (event) => {
            if (event.target.classList.contains('modal')) {
                event.target.style.display = "none";
            }
        };
    };

    const initGame = () => {
        console.log('DEBUG: initGame() CALLED');
        StockMarket.init();
        UI.render();
        setupEventListeners();

        // Sync Bottom Nav
        // Sync Bottom Nav
        document.querySelectorAll('.b-nav-item').forEach(btn => {
            btn.onclick = () => {
                const view = btn.dataset.view;
                console.log('DEBUG: Bottom Nav Clicked', view);

                // LOCK BANK UNTIL UNLOCKED
                if (view === 'bank' && !GameState.bankUnlocked) {
                    UI.showView(view); // Show background
                    showGameAlert(
                        '🔒 Acceso Restringido.<br>Disponible próximamente tras avanzar en el juego.',
                        'warning',
                        null,
                        () => UI.showView('dashboard'),
                        true
                    );
                    return;
                }

                // LOCK STOCK UNTIL UNLOCKED VIA 25K MILESTONE
                if (view === 'market' && !GameState.stockUnlocked) {
                    UI.showView(view); // Show background
                    showGameAlert(
                        '🔒 Acceso Restringido.<br>Necesitas un patrimonio de 30.000€ para operar en Bolsa.',
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

        // Sync Desktop Nav to Bottom Nav
        document.getElementById('main-nav').querySelectorAll('.nav-btn').forEach(btn => {
            const originalClick = btn.onclick; // Preserving if any (though usually handled by event delegation or loop below)
            btn.onclick = () => {
                const view = btn.dataset.view;

                // LOCK BANK UNTIL UNLOCKED
                if (view === 'bank' && !GameState.bankUnlocked) {
                    UI.showView(view); // Show background
                    showGameAlert(
                        '🔒 Acceso Restringido.<br>Disponible próximamente tras avanzar en el juego.',
                        'warning',
                        null,
                        () => UI.showView('dashboard'),
                        true
                    );
                    return;
                }

                // LOCK STOCK UNTIL UNLOCKED VIA 25K MILESTONE
                if (view === 'market' && !GameState.stockUnlocked) {
                    UI.showView(view); // Show background
                    showGameAlert(
                        '🔒 Acceso Restringido.<br>Necesitas un patrimonio de 30.000€ para operar en Bolsa.',
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

        // Hack to force initial job display update and ChartTick
        setTimeout(() => {
            try {
                UI.updateJob(JobSystem);
                UI.updateDashboard();
            } catch (e) {
                console.error('Async Init Error:', e);
            }
        }, 100);
    };

    // STARTUP LOGIC
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
                        <span>📅 Año ${save.year}, Mes ${save.month}</span>
                    </div>
                    ${dateStr ? `<div class="slot-date">⏰ ${dateStr}</div>` : ''}
                    <button class="btn-load-slot" data-key="${save.key}">▶️ Cargar</button>
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
                <h2 class="welcome-title">¡Bienvenido de nuevo!</h2>
                <p class="welcome-subtitle">Selecciona una partida</p>
                <div class="saves-list">${allSaves.map(renderSaveSlot).join('')}</div>
                <button id="btn-new-game-saved" class="btn-new-game">🔄 Nueva Partida</button>
            </div>
        `;

        UI.showModal('Bienvenido de nuevo', msg, [], true);

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

            // Premium styled confirmation modal
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
                    <h2 class="confirm-title">Nueva Partida</h2>
                    <p class="confirm-text">¿Estás seguro de que quieres iniciar una nueva partida?<br>Tu progreso no guardado se perderá.</p>
                    <div class="confirm-buttons">
                        <button id="btn-confirm-cancel" class="btn-confirm-cancel">Cancelar</button>
                        <button id="btn-confirm-action" class="btn-confirm-action">Confirmar</button>
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

    // Function to update welcome screen texts when language changes
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
                            overflow: hidden !important;
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
                        /* MOBILE OPTIMIZATIONS */
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
                        
                        <!-- Language Selector -->
                        <div id="welcome-lang-selector" style="display: flex; justify-content: center; gap: 10px; margin-bottom: 20px;">
                            <button onclick="I18n.setLanguage('es'); setTimeout(function(){ if(window.updateWelcomeScreen) window.updateWelcomeScreen(); }, 50);" class="lang-btn" data-lang="es" title="Español" style="background: rgba(255,255,255,0.1); border: 2px solid rgba(255,255,255,0.3); border-radius: 10px; padding: 8px 15px; cursor: pointer; font-size: 1.5rem; transition: all 0.2s;">🇪🇸</button>
                            <button onclick="I18n.setLanguage('en'); setTimeout(function(){ if(window.updateWelcomeScreen) window.updateWelcomeScreen(); }, 50);" class="lang-btn" data-lang="en" title="English" style="background: rgba(255,255,255,0.1); border: 2px solid rgba(255,255,255,0.3); border-radius: 10px; padding: 8px 15px; cursor: pointer; font-size: 1.5rem; transition: all 0.2s;">🇬🇧</button>
                            <button onclick="I18n.setLanguage('de'); setTimeout(function(){ if(window.updateWelcomeScreen) window.updateWelcomeScreen(); }, 50);" class="lang-btn" data-lang="de" title="Deutsch" style="background: rgba(255,255,255,0.1); border: 2px solid rgba(255,255,255,0.3); border-radius: 10px; padding: 8px 15px; cursor: pointer; font-size: 1.5rem; transition: all 0.2s;">🇩🇪</button>
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

        // Quick fix: Remove the default footer if it exists
        const overlay = document.querySelector('.custom-modal-overlay');
        if (overlay) {
            const footer = overlay.querySelector('.custom-modal-footer, .modal-actions');
            if (footer) footer.style.display = 'none';
        }

        // Attach handler manually since we moved button to body
        document.getElementById('btn-start-game-custom').onclick = () => {
            const name = document.getElementById('start-player-name').value || 'Inversor';
            GameState.playerName = name;

            // Cheat Code / Easter Egg
            if (name === 'SergioGuapo') {
                GameState.cash = 200000;
            }

            // Close modal manually (since we bypass default actions)
            const overlay = document.querySelector('.custom-modal-overlay');
            if (overlay) overlay.remove();

            callback();
            setTimeout(() => UI.startInitialTutorial(), 500);
        };
    }

} catch (e) {
    console.error('Critical Error loading save, resetting:', e);
    // Instead of alerting, just start fresh
    promptNewUser(initGame);
}

