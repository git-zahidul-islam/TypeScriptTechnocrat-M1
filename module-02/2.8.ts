{
    // Asynchronous typescript

    // -- Promise create
    const createPromise = () : Promise<string> =>{
        return new Promise<string>((resolve,reject) =>{
            const data : string = "something"
            if(data){
                resolve(data);
            }else{
                reject('No Data available');
            }
        })
    };

    // calling data
    const showData = async () : Promise<string> => {
        const data : string = await createPromise();
        console.log("data is::", data);
        return data;
    }

    showData()


    type Todo = {
        userID: number;
        id: number;
        title: string;
        body: string;
    };

    const getTodo = async () : Promise<Todo> => {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const result = await data.json();
        console.log("object",result);
        return result;
    };

    getTodo();

}