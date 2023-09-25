
APP_URL_5 = 'http://localhost:3000/time5';
APP_URL_10 = 'http://localhost:3000/time10';

const getData = async () => {
    try {

        // const data2 = await fetch(APP_URL_10); 
        // const jsonValue2 = await data2.json();
        // console.log(jsonValue2);

        // const data1 = await fetch(APP_URL_5); 
        // const jsonValue1 = await data1.json();
        // console.log(jsonValue1);
        await Promise.all([fetch(APP_URL_5).then(res => res.json()), fetch(APP_URL_10).then(res => res.json())]).then((values)=>{
            console.log(values)
        })

    } catch (error) {
        console.log(error.message);
    }
}


getData();