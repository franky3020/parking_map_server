import { ObjectId } from "mongodb";

export default class ParkingGrid {

    parkingGridKey: string;

    constructor(public Section_ID: string,
                public PS_ID: string,
                public PS_Lat: string, // 緯度
                public PS_Lng: string, // 經度
                public PS_type: string,
                public status: string,
                public created_at: Date,
                public _id?: ObjectId) {
                    this.parkingGridKey = Section_ID + "_" + PS_ID;
                }
}

