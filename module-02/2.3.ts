{
    // generics type
    `✅ What Are Generics?
     > Generics in TypeScript let you write reusable, type-safe code that works with different types without losing the benefits of  type checking.

    ✅ Type-safe
    ✅ Reusable
    ✅ Autocomplete works
    
    ✅ Where Are Generics Used?
    >Functions
    >Classes
    >Interfaces
    >React components (e.g., useState<T>())
    >Utility types

    >>> TypeScript-এ Generic হলো এমন একটি ফিচার যা দিয়ে আপনি reusable এবং টাইপ-সেফ কোড লিখতে পারেন, যেটা বিভিন্ন টাইপের ডেটার সঙ্গে কাজ করতে পারে।
    `
    
    type GeneicsArray<T> = Array<T>;
    const number : GeneicsArray<number> = [1,2,3];
    
    const mentors : GeneicsArray<string> = ['Mr. X', 'Mr. Y', 'Mr. Z'];

    const booleanValue : GeneicsArray<boolean> = [true,false,true]

    interface User {
        name: string;
        age: number;
    }

    const user : GeneicsArray<User> = [
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
