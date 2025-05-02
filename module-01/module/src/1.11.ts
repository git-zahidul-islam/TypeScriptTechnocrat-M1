{
    // ternary operator || optonal chaining || nullish coalesing

    const age : number = 18;

    // if(age >= 18){
    //     console.log("adult");
    // }else{
    //     console.log("not adult");
    // }

    const ageCal = age >= 18 ? console.log("adult") : console.log("not adult");

    // nullish coalesing 
    // for null | undefined ----> decision making 

    const isAuthencation = '';

    const result = isAuthencation ?? "Guest";
    console.log({result});



}