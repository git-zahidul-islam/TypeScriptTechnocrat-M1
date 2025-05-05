{
    // generics type
    type GeneicsArray<T> = Array<T>;


    const number : GeneicsArray<number> = [1,2,3];
    
    const mentors : GeneicsArray<string> = ['Mr. X', 'Mr. Y', 'Mr. Z'];

    const booleanValue : GeneicsArray<boolean> = [true,false,true]

    const user : GeneicsArray<{name: string, age: number}> = [
        {
            name: 'zahid',
            age: 12
        },
        {
            name: 'sss',
            age: 21
        },
    ]


    // gegerics tuple 

    type GenericsTuyple<X,Y> = [X,Y];
    const manush : GenericsTuyple<string,string> = ["Mr. X", "Mr. Y"];
    const anotherMan : GenericsTuyple<string,{name: string,age: number}> = ["123",{name: "zahid",age: 12}] 

    type UserIdTupal<X,Y> = [X,Y]
    const userid : UserIdTupal<number,string> = [123, 'zahid'] 


    // generic array
    type TextGenericArray<T> = Array<T>;

    type ObjGene<T> = {
        name: string,
        user: T,
    }

    const arr : TextGenericArray<number> = [12,23]

    const newMan : ObjGene<{age: number,sal: number}> = {
       name: 'zahid',
       user: {
        age: 12,
        sal: 122,
       }
    }


    

}
