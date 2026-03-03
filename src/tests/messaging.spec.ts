import { Messaging } from "../classes/messaging";

const createSut = ()=> new Messaging()

describe("Testing messaging",()=>{
    afterEach(()=>{
        jest.clearAllMocks()
    })

    it("Should retund undefined",()=>{
        const sut = createSut();
        const returned = sut.sendMessage("Test");
        expect(returned).toBeUndefined()
    })

    it("Should call console.log once",()=>{
        const sut = createSut();
        const consoleSpy = jest.spyOn(console,'log');
        sut.sendMessage("test");
        expect(consoleSpy).toHaveBeenCalledTimes(1);
    })

    it("Should send correct message" , ()=>{
        const sut = createSut();
        const consoleSpy = jest.spyOn(console , 'log');
        const message = "test de mensagem"
        const expectMessage = "mensagem enviada: " + message
        sut.sendMessage(message)
        expect(consoleSpy).toHaveBeenCalledWith(expectMessage)
    })
})