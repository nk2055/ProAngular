export class TempConverter {
    static convertFtoC(temp: number): string {
        return ((parseFloat(temp.toPrecision(2)) - 32) / 1.8).toFixed(1);
    }

    // this method can either accept a number or string param
    static convertFtoCMulti(temp: number | string): string {
        let value: number = (<number>temp).toPrecision ? <number>temp : parseFloat(<string>temp);
        // let value: number = (temp as number).toPrecision ? temp as number : parseFloat(<string>temp);    // same line as above

        return ((parseFloat(value.toPrecision(2)) - 32) / 1.8).toFixed(1);
    }

    // this method can accept any type of param
    static convertFtoCAny(temp: any): string {
        let value: number;
        if ((temp as number).toPrecision) {
            value = temp;
        } else if ((temp as string).indexOf) {
            value = parseFloat(<string>temp);
        } else {
            value = 0;
        }
        return TempConverter.performCalculation(value).toFixed(1);
    }

    // using access modifier "private"
    private static performCalculation(value: number): number {
        return (parseFloat(value.toPrecision(2)) - 32) / 1.8;
    }
}
