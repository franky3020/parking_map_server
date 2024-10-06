import express from 'express';
​import { connectToDatabase } from "./services/database.service"
import { collections } from "./services/database.service";
import { getParkingGridFromGov } from './services/getParkingGridFromGov';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('The server is working!');
});

connectToDatabase()
    .then(async () => {
        app.listen(port, () => {
          if (port === 3000) {
            console.log('true')
          }
          console.log(`server is listening on ${port} !!!`);
        });


        setInterval(async () => {
          try {
            let parkingGridList = await getParkingGridFromGov();

            collections.parkingGridCollection?.insertMany(parkingGridList).then(() =>{
              console.log(`Update at `, new Date());
            });
          } catch (err) {
            console.log(`發生了點錯誤 {err}`, new Date());
          }
        }, 1000 * 60 * 3) // 3 分鐘更新一次

    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
