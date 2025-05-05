{
    // type assertion

    let anything : any;

    anything = "Next label nnn"
    anything = 222;

    (anything as Number)


    let myNumber : any; 
    myNumber = 12121;
    (myNumber as number)

    const KgToGram = (value: string | number | undefined ) => {
        if(typeof value === "string"){
            const convertValue = parseFloat(value)*1000;
            return `the converted Number is:: ${convertValue}`;
        }
        if(typeof value === "number"){
            return value*1000
        }
    };

    const retult1 = KgToGram(1000) as number;
    const retult2 = KgToGram("1000") as string;

}