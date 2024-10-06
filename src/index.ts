import express from 'express';
​import { connectToDatabase } from "./services/database.service"
import { gamesRouter } from "./routes/games.router";
import Game from './models/game';
import { collections } from "./services/database.service";

const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('The server is working!');
});


connectToDatabase()
    .then(() => {
        app.use("/games", gamesRouter);

        app.listen(port, () => {
          if (port === 3000) {
            console.log('true')
          }
          console.log(`server is listening on ${port} !!!`);
        });

        const newGame = new Game("1", 1, "good");
        collections.games!.insertOne(newGame).then(() =>{
          console.log(`Good`);
        });


    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
