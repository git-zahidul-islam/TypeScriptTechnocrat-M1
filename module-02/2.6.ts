
{
    // Constraints 
    `✅ Constraint হলো:
    > Generic টাইপ ব্যবহার করার সময় আমরা বলে দিতে পারি — "এই টাইপটা অবশ্যই কিছু শর্ত পূরণ করতে হবে"।`

    // for use Constraints use extends and tell what must use 
    const addCourseToStudent = <T extends {id: number,name: string, email: string}>(student: T) => {
        const courcse = "Next Lavel Web Development";

        // console.log("constraint", student);

        return {
            ...student,
            courcse,
        };
    }

    const student2 = addCourseToStudent({
        name: 'zahid',
        id: 1,
        email: 'x@gmail.com',
        test: 'sss'
    })

    const student3 = addCourseToStudent({
        name: 'Z',
        id: 2,
        email: 'a@gmail.com',
        em: 'sss'
    })

    console.log("first fun", student3);

}