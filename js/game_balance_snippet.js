
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

    getLimits() {
        const tier = this.getHousingTier();

        // 1. STOCK MARKET CAP
        // Exponential Curve: Base 10k -> Unlimited
        const stockCaps = [
            10000,      // Tier 0 (Parents)
            15000,      // Tier 1 (Sofa)
            25000,      // Tier 2 (Pension)
            40000,      // Tier 3 (Hab Interior)
            60000,      // Tier 4 (Hab Shared)
            90000,      // Tier 5 (Hab Suite)
            150000,     // Tier 6 (Basement)
            250000,     // Tier 7 (Studio)
            500000,     // Tier 8 (Apt Out)
            1000000,    // Tier 9 (Apt Center)
            2500000,    // Tier 10 (Loft)
            5000000,    // Tier 11 (Penthouse)
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
