import express from 'express';
​import { connectToDatabase } from "./services/database.service"
import { collections } from "./services/database.service";
import ParkingGrid from './models/ParkingGrid';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('The server is working!');
});

// https://datacenter.taichung.gov.tw/swagger/OpenData/791a8a4b-ade6-48cf-b3ed-6c594e58a1f1

connectToDatabase()
    .then(() => {
        app.listen(port, () => {
          if (port === 3000) {
            console.log('true')
          }
          console.log(`server is listening on ${port} !!!`);
        });

        const parkingGrid = new ParkingGrid("0434703",
                                            "00100",
                                            "24.1425629",
                                            "120.679611",
                                            "0",
                                            "1",
                                          new Date());


        collections.parkingGridCollection!.insertOne(parkingGrid).then(() =>{
          console.log(`Good`);
        });

    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
