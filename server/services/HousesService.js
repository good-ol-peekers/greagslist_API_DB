import { dbContext } from "../db/DbContext";


export class HousesService {
  async  getHouses(){
        const houses = await dbContext.Houses.find()
        return houses
    }
}