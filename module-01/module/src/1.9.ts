// type alias
{
    type Name = {
        firstName : string,
        middleName?: string;
        lastName: string; 
    }
    
    type Address = {
        village: string,
        postCode: number;
    }
    
    type User = {
        id: number;
        name : Name;
        constctNumber: number;
        address : Address;
    }


    const userInfo : User = {
        id: 343,
        name: {
            firstName: 'Zahidul',
            middleName: "nai",
            lastName: "Islam"
        },
        constctNumber: +880199999,
        address: {
            village: 'biddyanandakati',
            postCode: 7450,
        }
    }


    // function type alias
    type Add = (num1: number, num2: number) => number;
    const add : Add = (num1,num2) => num1 + num2;

}