describe('Primitive values' , ()=>{
    it('should test jest assertions', () => {
        const number : number = 10;

        expect(number).toBe(10);
        expect(number).toEqual(10);
        expect(number).not.toBeFalsy()
        expect(number).toBeTruthy()

        expect(number).toBeGreaterThan(9)
        expect(number).toBeLessThan(11)
        expect(number).not.toBeNull()
    });
});

describe("Objects tests",()=>{
    it("should test jest assertions",()=>{
        const person = { name : 'joão' , age : 30 };
        const anhoterPerson = {...person};

        expect(person).toEqual(anhoterPerson);
        expect(person).toHaveProperty('age' , 30)
        expect(person).not.toHaveProperty('lastname')

        expect(person.name).toBe('joão')
    })
})