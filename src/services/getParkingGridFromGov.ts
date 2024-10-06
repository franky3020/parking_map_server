
import axios from 'axios';
import ParkingGrid from '../models/ParkingGrid';

export async function getParkingGridFromGov(): Promise<ParkingGrid[]> {

    const response: any = await axios.get('https://datacenter.taichung.gov.tw/swagger/OpenData/791a8a4b-ade6-48cf-b3ed-6c594e58a1f1');

    let responseData = response.data as any[];

    let nowTime = new Date();
    let parkingGridList: ParkingGrid[] = [];

    for (let i = 0; i < responseData.length; i++) {
        let section_id = responseData[i].Section_ID;
        let ps_id = responseData[i].PS_ID;
        let ps_lat = responseData[i].PS_Lat;
        let ps_lng = responseData[i].PS_Lng;
        let ps_type = responseData[i].PS_type;
        let ps_status = responseData[i].status;

        const parkingGrid = new ParkingGrid(
            section_id,
            ps_id,
            ps_lat,
            ps_lng,
            ps_type,
            ps_status,
            nowTime);

        parkingGridList.push(parkingGrid);
    }

    return parkingGridList;
}
