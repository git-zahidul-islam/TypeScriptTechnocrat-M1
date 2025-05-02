
{
    // normal function
    function add(num1: number,num2: number): number{
        return num1 + num2
    }
    
    // arrow function
    const substraction = (num1 : number,num2 : number) : number => num1 - num2;
    
    // object method
    
    const poorUser = {
        name: 'zahid',
        balance : 0,
        addBalance(balance: number):number{
            return this.balance + balance;
        }
    }
    
    const arr : number[] = [1,2,3];
    
    const newArr : number[] = arr.map((elem : number) : number => elem * elem);

}