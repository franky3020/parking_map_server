// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import Game from "../models/game";


// Global Config
// export const gamesRouter = express.Router();

// gamesRouter.use(express.json());

// // POST
// gamesRouter.post("/", async (req: Request, res: Response) => {
//     try {
//         const newGame = req.body as Game;
//         const result = await collections.games!.insertOne(newGame);

//         result
//             ? res.status(201).send(`Successfully created a new game with id ${result.insertedId}`)
//             : res.status(500).send("Failed to create a new game.");
//     } catch (error: any) {
//         console.error(error);
//         res.status(400).send(error.message);
//     }
// });
