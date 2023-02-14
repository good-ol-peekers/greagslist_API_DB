import { dbContext } from "../db/DbContext";


class HousesService {
  async  getHouses(){
        const houses = await dbContext.Houses.find()
        return houses
    }
    async createHouse(houseData) {
      const house = await dbContext.Houses.create(houseData)
      return house
    }
}

export const housesService = new HousesService()