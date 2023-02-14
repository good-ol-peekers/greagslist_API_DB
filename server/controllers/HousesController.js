import { Error } from "mongoose";
import BaseController from "../utils/BaseController";

export class HousesController extends BaseController {
    constructor(){
        super('api/houses')
        this.router
        .get('', this.getHouses)
    }

async getHouses(req, res, next){
    try {
        const houses = await housesService.getHouses()
        res.send(houses)
    } catch (error) {
        next(Error)
    }
}


}