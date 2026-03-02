import { ShoppingCart } from "./classes/shoppingCart";
import { Order } from "./classes/Order";
import { Messaging } from "./classes/messaging";
import { Persistency } from "./classes/persistency";
import { Product } from "./classes/product";
import { FiftyPercentDiscount } from "./classes/Discount";
import { IndividualCustomer } from "./classes/cutomers";

const shoppingCart = new ShoppingCart(new FiftyPercentDiscount());
const messaging = new Messaging()
const persistency = new Persistency()
const individualCustomer = new IndividualCustomer("Luiz","otavio",'000.000.000-00')
const order = new Order(shoppingCart , messaging , persistency , individualCustomer);

shoppingCart.addItem(
    new Product('Camisa' , 49.9)
)
shoppingCart.addItem(
    new Product('Calça' , 59.9)
)
shoppingCart.addItem(
    new Product('Lapis' , 2.9)
)

console.log(shoppingCart.items)
console.log(shoppingCart.total())
console.log(shoppingCart.totalWithDiscount(0.5))
console.log(order.orderStatus)
order.checkout()