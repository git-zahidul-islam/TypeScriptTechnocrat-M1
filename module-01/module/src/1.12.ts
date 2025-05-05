    // unknown typeof

    // const getSpeedInMeterPerSecond = (value: unknown) => {
    //     if(typeof value === "number") {
    //       const convertedSpeed = (value * 1000) / 3600;
    //       console.log(The speed is ${convertedSpeed} ms^-1);
    //     } 
        
        
    //   else if (typeof value === "string") {
    //       const [result, unit] = value.split(" ");
    //       const convertedSpeed = (parseFloat(result) * 1000) / 3600;
    //       console.log(The speed is ${convertedSpeed} ms^-1);
    //     }
    //     else{
    //       console.log("wrong input");
    //     }
    //   }
  
{
    const getSpeedInMeterPerSecond = (value : unknown) => {
        if(typeof value === "number"){
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }else if(typeof value === "string"){
            if(value.length === 0){
                console.log("not give any character");
            }else{
                const [ result, speedName ] = value.split(" ");
                const convertedSpeed = (parseFloat(result) * 1000) / 3600;
                console.log("sss", convertedSpeed);
            }
        }else{
            console.log("Wrong input");
        }
    }

    getSpeedInMeterPerSecond('123 kpm')

}