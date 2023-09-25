// Fetch

APP_URL = 'https://api.github.com/users/tezz94820';

const getData = async () => {
    try {
        const data = await fetch(APP_URL); // how fetch works is like fetch will return a response object which again have another promise in it.  
        const jsonValue = await data.json(); //because it contains another promise so first we resolved it and then converted it to json and stored in jsonValue;
        console.log(jsonValue.id);
    } catch (error) {
        console.log(error.message);
    }
}

getData();

// here first data is resolved and then jsonValue is resolved.