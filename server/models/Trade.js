import mongoose from 'mongoose';

const tradeSchema = new mongoose.Schema({
    pair: String,
    date: Date,
    orderType: String,
    entry: Number,
    lotSize: Number,
    stopLoss: Number,
    takeProfit: Number,
    profitLoss: Number,
    rrRatio: Number,
    
    strategy: String,
    marketCondition: String,
    setupGrade: String,

    emotionBefore: String,
    emotionAfter: String,

    mistakes: String,
    lessons: String,

    screenshotBefore: String,
    screenshotAfter: String,

    result: String,

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});