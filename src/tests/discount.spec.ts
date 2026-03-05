import { Discount ,NoDiscount , TenPercentDiscount , FiftyPercentDiscount , TwentyPercentDiscount } from "../classes/Discount";

const createSut = (className : new () => Discount) : Discount =>{
    return new className()
}

describe("Testing Discount entities",()=>{
    afterEach(()=>jest.clearAllMocks())

    it("Should have no discount",()=>{
        const value = 10.99
        const sut = createSut(NoDiscount);
        expect(sut.calculate(value)).toBeCloseTo(value)
    })

    it("Should must to apply ten percent discount",()=>{
        const value = 10.99
        const valueWithDiscount = value - value * 0.1
        const sut = createSut(TenPercentDiscount);
        expect(sut.calculate(value)).toBeCloseTo(valueWithDiscount)
    })
    it("Should must to apply twenty percent discount",()=>{
         const value = 10.99
        const valueWithDiscount = value - value * 0.2
        const sut = createSut(TwentyPercentDiscount);
        expect(sut.calculate(value)).toBeCloseTo(valueWithDiscount)
    })
    it("Should must to apply fifty percent discount",()=>{
        const value = 10.99
        const valueWithDiscount = value - value * 0.5
        const sut = createSut(FiftyPercentDiscount);
        expect(sut.calculate(value)).toBeCloseTo(valueWithDiscount)
    })
})