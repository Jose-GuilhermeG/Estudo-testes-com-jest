import { CartItemProtocol } from "./CarItem";

export interface ShoppingCartProtocol{
        addItem(item : CartItemProtocol) : void;
        removeItem(index : number) : void ;
        get items() : Readonly<Array<CartItemProtocol>>;
        total() : number ;
        isEmpty() : boolean;
        clear() : void;
        totalWithDiscount(discount : number) : number ;
}