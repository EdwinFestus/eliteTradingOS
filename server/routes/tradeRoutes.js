import express from "express";
const router = express.Router();

import {
    createTrade,
    getTrades,
    getTrade,
    updateTrade,
    deleteTrade
} from '../controllers/tradeController.js';


router.post("/", createTrade);
router.get("/", getTrades);
router.get("/:id", getTrade);
router.put("/:id", updateTrade);
router.delete("/:id", deleteTrade);

export default router;