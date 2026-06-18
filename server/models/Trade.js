import mongoose from 'mongoose';

const tradeSchema = new mongoose.Schema({
    pair: { type: String,enum: ["Vol 75", "Vol 75(1s)", "Vol 10", "Vol 10(1s)"], required: true },
    // date: { type: Date, required: true },
    orderType: { type: String,enum: ["LONG", "SHORT"], required: true },
    entry: { type: Number, required: true },
    lotSize: { type: Number, required: true },
    stopLoss: { type: Number, required: true },
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

    result: {type: String, enum: ["WIN", "LOSS", "BREAKEVEN"]},

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

export default mongoose.model('Trade', tradeSchema);