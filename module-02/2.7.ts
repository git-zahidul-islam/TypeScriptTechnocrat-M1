{
    // generic constraint with keyof operetor

    type Vehicles = {
        bike: string;
        car: string;
        flat: string;
        helecopter: string;
    }

    type UserConstraint1 = "Bike" | "Car" | "flat" | "helecopter";

    type UserConstraint2 = keyof Vehicles;

    const person1 : UserConstraint1 = "Bike"
    const person2 : UserConstraint2 = "helecopter"

    interface User {
        name: string;
        age: number;
        address: string;
    }

    const user : User = {
        name: "Mr. X",
        age: 25,
        address: 'Keshabpur'
    }

    const getUservalue = <T,X extends keyof T>(obj: T,key: X) => {
        return obj[key];
    }

    const peopel1 = getUservalue(user,'age');

    interface Car {
        model: string;
        price: number;
        used: boolean;
    }

    const car : Car = {
        model: 'Toyata XP_222',
        price: 420222,
        used: true,
    }

    const getCarValue = <T,S extends keyof T>(obj:T,key:S) => {
        return obj[key];
    }

    const textgetCar = getCarValue(car,'used');
    console.log("lll",textgetCar);

}