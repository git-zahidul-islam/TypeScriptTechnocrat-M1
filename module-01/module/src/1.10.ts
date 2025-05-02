// union and interseption type 

{
    // union type 

    type FrontendDeveloper = 'FBD' | 'GD';
    type FUllStackDeveloper = 'FRD' | 'ExpertD';
    type OtherWork = 'Other';

    type Designation = FrontendDeveloper | FUllStackDeveloper | OtherWork;

    type User = {
        name: string,
        designation: Designation;
        age: number;
    }

    const user1 : User = {
        name: 'Zahid',
        designation: "ExpertD",
        age: 21, 
    }


    //  intersection

    type BanglaTeach = {
        skill: string[];
        designation1: string;
    }

    type EnglishTeach = {
        skill: string[];
        designation2: string;
    }

    type Teacher = BanglaTeach & EnglishTeach;

    const teacherOne : Teacher = {
        skill: ['soft skill', 'better understand'],
        designation1: 'Bangla',
        designation2: 'English',
    }



}