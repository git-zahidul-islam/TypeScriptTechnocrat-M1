{
    // condition 

    type ShaKah = {
        car: string;
        bike: string;
        ship: string;        
    };

    type CheckVahiales<T> = T extends keyof ShaKah ? true : false;

    type HasPlan = CheckVahiales<'car'>;
}