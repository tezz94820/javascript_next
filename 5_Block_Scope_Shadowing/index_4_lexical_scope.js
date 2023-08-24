const a = 100;
{
    const a = 200;
    {
        const a = 300;
        console.log(a); // 300 
    }
}

// lexiacal scope chain is followed here . for every scope there will be another memory storage block created.
