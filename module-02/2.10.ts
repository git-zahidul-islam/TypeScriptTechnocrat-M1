{
    // map 

    const arrayOfMap : number[] = [1,2,3];

    const arrayOfString : string[] = arrayOfMap.map((number) => number.toString());
    console.log("ssss", arrayOfString);

    // number to string use mapping

    type AreaNumber = {
        height: number;
        width: number;
    };

    type Height = AreaNumber['height'] // loockup type defined
    
    type AreaString<T> = {
        [Key in keyof T ] : T[Key]; 
    }

    const user1 : AreaString<{height: string;width: number}> ={
        height: '333',
        width: 1223,
    } 

}