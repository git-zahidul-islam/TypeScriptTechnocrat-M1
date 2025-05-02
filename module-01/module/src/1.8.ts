// object deasturacting

    const userInfo = {
        id: 343,
        name: {
            firstName: 'Zahidul',
            middleName: "nai",
            lastName: "Islam"
        },
        constctNumber: +880199999,
        address: {
            village: 'biddyanandakati',
            postCode: 7450,
        }
    }

    const {constctNumber, name : {firstName,lastName}} = userInfo;


    // array deasturing
    const userArray = ["korim","kobir","aaa","bb","cc","dd",2334];
    const [,,first,...withoutFirst3] = userArray;
    console.log("first",first );
    console.log("last",withoutFirst3);





// array deasturcting
