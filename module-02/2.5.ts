{
    // generic functon Array
    const createArrayWIthGeneric = <T>(param:T): T[] => {
        return [param];
    }
    type User = {
        name: string;
        age: number;
    };

    const numberGeneric = createArrayWIthGeneric<number>(12);
    const stringGenericFun = createArrayWIthGeneric<string>('ssss');
    const objectWithGeneric = createArrayWIthGeneric<User>({name: 'zahid',age: 25})

    // generic function with Tuple-----
    const createGenericWithTuple = <T,P>(param1:T,param2:P): [T,P] => {
        return [param1,param2];
    }
    

    const numberGeneric2 = createGenericWithTuple<number,string>(12,'zahid');
    const stringGenericFun2 = createGenericWithTuple<string,{name: string}>('ssss',{name: 'zahid'});

}