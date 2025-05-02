// Object , Optional and Literal Types

const user : {
    readonly company: "Programming Hero"; // type letaral
    firstName: string;
    middleName?: string;  // optional type
    lastName: string;
    age: number,
} = {
    company: "Programming Hero",
    firstName: "Zahidul",
    lastName: "Islam",
    age: 25,
}

type address = {
    village: string;
    dis: string;
    postCode: number;
}

type userInfo = {
    name: string;
    age: number;
    address: address;
}

const goodUser : userInfo = {
    name: 'zahid',
    age: 21,
    address: {
        village: "Biddya",
        dis: "Jashore",
        postCode: 7450,
    }
}

// object method