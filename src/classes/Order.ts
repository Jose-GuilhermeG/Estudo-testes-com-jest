import { CustomerOrder } from "../interfaces/Customer";
import { OrderStatus } from "../interfaces/OrderStatus";
import { MessagingProtocol } from "../interfaces/Messaging";
import { ShoppingCartProtocol } from "../interfaces/ShoppingCart";
import { PersistencyProtocol } from "../interfaces/persistency";


export class Order {
    private _orderStatus : OrderStatus = 'open';
    private shoppingCart : ShoppingCartProtocol;
    private messaging : MessagingProtocol;
    private persistency : PersistencyProtocol;
    private readonly customer : CustomerOrder;

    constructor(shoppingCart : ShoppingCartProtocol , messaging : MessagingProtocol , persistency : PersistencyProtocol , customer : CustomerOrder){
        this.shoppingCart = shoppingCart;
        this.messaging = messaging
        this.persistency = persistency;
        this.customer = customer
    }

    public get orderStatus() : OrderStatus {
        return this._orderStatus
    }

     public checkout() : void {
        if(this.shoppingCart.isEmpty()){ 
        console.log("Seu carrinho esta vazio")
        return;
        }
        this._orderStatus = 'closed';
        this.messaging.sendMessage("Seu pedido foi recebido");
        this.persistency.saveOrder();
        this.shoppingCart.clear();
        console.log(`O cliente é: ${this.customer.getName()} , ${this.customer.getIDN()}`)
    }

}