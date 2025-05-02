// spread and rest operator

{
    // spread operator
    const person1 : string[] = ['Zahid','asad','tohid'];
    const person2 : string[] = ['Saide','shohide', 'azarul'];

    person1.push('X. man')
    person1.push(...person2)

    const mentor1 : string[] = ['zahi','kk'];
    const mentor2 : string[] = ['ll','yy'];

    const mentors : string[] = [...mentor1,...mentor2];


    // rest operator
    function calledFriend(...friends: string[]){
        friends.forEach((ele: string) => console.log(`hi friends: ${ele}`))
    };

    calledFriend('ds','ss','sdsf');

}