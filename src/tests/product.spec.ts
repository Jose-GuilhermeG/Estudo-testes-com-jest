import { Product } from "../classes/product";

const createSut = (name : string , price : number) : Product =>{
    return new Product(
        name,
        price
    )
}

describe("Testing product entitie",()=>{
    afterEach(()=>jest.clearAllMocks())

    it("Should has correct atributes values",()=>{
        const productName = "Camisa";
        const productPrice = 50;
        const sut = createSut(
            productName,
            productPrice
        );

        expect(sut).toHaveProperty("name",productName)
        expect(sut).toHaveProperty("price",productPrice)
    })
})