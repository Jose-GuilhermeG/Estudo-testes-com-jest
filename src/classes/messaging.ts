import { MessagingProtocol } from "../interfaces/Messaging";

export class Messaging implements MessagingProtocol{
    public sendMessage(msg : string) : void {
        console.log(`mensagem enviada: ${msg}`)
    }
}