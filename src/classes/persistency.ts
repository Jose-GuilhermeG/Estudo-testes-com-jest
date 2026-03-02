import { PersistencyProtocol } from "../interfaces/persistency";

export class Persistency implements PersistencyProtocol{
    public saveOrder():void{
        console.log("Pedido salvo com sucesso")
    }
}