import { CartItemProtocol } from "../interfaces/CarItem";

export class Product implements CartItemProtocol {
    constructor(public name : string , public price : number){}
}