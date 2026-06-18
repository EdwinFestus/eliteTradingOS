const Trade = require('../models/Trade');

// Create a new trade
const createTrade = async (req, res) => {
    try {
        const trade = new Trade(req.body);

        res.status(201).json({
            success: true,
            data: trade,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
    
};

// Get all trades
const getTrades = async (req, res) => {
    try {
        const trades = await Trade.find().populate('user', 'username email');
        res.status(200).json({
            success: true,
            data: trades,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
};


// Get a trade by ID
const getTradeById = async (req, res) => {
    try { 
        const trade = await Trade.findById(req.params.id).populate('user', 'username email');
        if (!trade) {
            return res.status(404).json({
                success: false,
                error: 'Trade not found',
            });
        }
        res.status(200).json({
            success: true,
            data: trade,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};


// Update a trade

const updateTrade = async (req, res) => {
    try {
        const trade = await Trade.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!trade) {
            return res.status(404).json({
                success: false,
                error: 'Trade not found',
            });
        }
        res.status(200).json({
            success: true,
            data: trade,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

// Delete a trade
const deleteTrade = async (req, res) => {
    try {
        const trade = await Trade.findByIdAndDelete(req.params.id);
        if (!trade) {
            return res.status(404).json({
                success: false,
                error: 'Trade not found',
            });
        }
        res.status(200).json({
            success: true,
            data: trade,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};


module.exports = {
    createTrade,
    getTrades,
    getTrade,
    updateTrade,
    deleteTrade
};