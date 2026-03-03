import { Persistency } from "../classes/persistency";

describe("Testing Persistency",()=>{
    afterEach(()=>{
        jest.clearAllMocks();
    })

    it("Should return undefined",()=>{
        // system under test
        const sut = new Persistency();
        const returned = sut.saveOrder();
        expect(returned).toBeUndefined();
    })

    it("Should call console.log once" , ()=>{
        const sut = new Persistency();
        const consoleSpy = jest.spyOn(console , 'log');
        sut.saveOrder()
        expect(consoleSpy).toHaveBeenCalledTimes(1);
    })

    it("Should call console.log with 'Pedido salvo com sucesso'",()=>{
        const sut = new Persistency();
        const consoleSpy = jest.spyOn(console , 'log');
        sut.saveOrder();
        expect(consoleSpy).toHaveBeenCalledWith("Pedido salvo com sucesso");
    })
})