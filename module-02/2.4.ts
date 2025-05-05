{
    // generics interface
    interface Device {
        name: string,
        model: string,
    }

    interface Developer<T,S=null> {
        name: string;
        age: number;
        device: Device;
        SmartWatch: T,
        Bike?: S,
    }

    interface PoorSmartWacth {
        name: string;
        price: number;
    }

    interface RichDeveloper extends PoorSmartWacth {
        feature: {
            heartCheck: boolean;
            sleepmood:  boolean;
        }
    }

    const Developer1 : Developer<PoorSmartWacth> = {
        name: 'MR. X',
        age: 21,
        device: {
            name: 'Asus',
            model: 'XR-22'
        },
        SmartWatch: {
            name: 'Casio',
            price: 116,
        }
    }

    const Developer2 : Developer<RichDeveloper,{name: string, price: number}> = {
        name: 'MR. Y',
        age: 21,
        device: {
            name: 'HP',
            model: 'XR-722'
        },
        SmartWatch: {
            name: 'Apple',
            price: 190000,
            feature: {
               heartCheck: true,
               sleepmood: true,
            }
        },
        Bike: {name: 'Yahama',price: 230000}
    }

}