// type alias and interface

// type and interface use in object
type User1 = {
    name: string;
    age: number,
}

// type RoleTypeUseType = number;

type UserRoleWith1 = User1 & {role: string};

interface User2 {
    name: string;
    age: number;
}

interface UserRole2 extends User2 {
    role: string;
}

const user1 : UserRole2 = {
    name: 'Zahid',
    age: 21,
    role: 'Student'
};


// array define use alias and interface

const rollArray1 : number[] = [1,2,3]

interface RollDefined {
    [index: number] : number;
}

const rollArray2 : RollDefined = [1,2,3]


// use thease for functions

type Add1 = (num1: number , num2: number) => number;

interface Add2 {
    (num1: number,num2: number): number;
}

const add : Add2 = (num1,num2) => {
    return num1 + num2
}
add(1,2)


function (num1,num2){
    return num1 + num2;
}



