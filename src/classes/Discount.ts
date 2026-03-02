export abstract class Discount{
    protected readonly discount : number = 0;
    public calculate(value: number): number {
        return value - value * this.discount; 
    }
}

export class FiftyPercentDiscount extends Discount{
    discount : number = 0.5;
}
export class TenPercentDiscount extends Discount{
    discount : number = 0.1;
}
export class TwentyPercentDiscount extends Discount{
    discount : number = 0.2;
}

export class NoDiscount extends Discount{}