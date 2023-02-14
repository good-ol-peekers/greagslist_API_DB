import { Error } from "mongoose";
import { housesService } from "../services/HousesService";
import BaseController from "../utils/BaseController";

export class HousesController extends BaseController {
    constructor(){
        super('api/houses')
        this.router
        .get('', this.getHouses)
        .post('', this.createHouse)
    }

async getHouses(req, res, next){
    try {
        const houses = await housesService.getHouses()
        res.send(houses)
    } catch (error) {
        next(Error)
    }
}

async createHouse(req, res, next){
    try {   
        const houseData = req.body
      const house = await housesService.createHouse(houseData)
      res.send(house)
    } catch (error) {
        next(error)
    }
}

}