import { CartItemProtocol } from "../interfaces/CarItem";
import { ShoppingCartProtocol } from "../interfaces/ShoppingCart";
import { Discount } from "./Discount";

export class ShoppingCart implements ShoppingCartProtocol {
    private readonly _items:  Array<CartItemProtocol> = [];

    constructor(
        private readonly discount : Discount
    ){}

    public addItem(item : CartItemProtocol) : void{
        this._items.push(item);
    }

    public removeItem(index : number) : void {
        this._items.splice(index , 1);
    }

    public get items() : Readonly<Array<CartItemProtocol>>{
        return this._items
    }

    public total() : number {
        return Number(this._items.reduce((total , currentItem )=>total + currentItem.price , 0).toFixed(2))
    }

    public isEmpty() : boolean{
        return this._items.length == 0
    }
    
    public clear() : void{
        console.log("carrinho limpo")
        this._items.length = 0
    }

    public totalWithDiscount(discount : number) : number {
        return this.discount.calculate(discount);
    }

}
