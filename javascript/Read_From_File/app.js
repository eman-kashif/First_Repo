fetch('data.txt').then((response) => {
    return response.text()
}).then((data) => {
    const myData = JSON.parse(data);
    
    
    console.log(myData[1].name);
    console.log(myData[1].age);
    console.log(myData[1].city);
}).catch((error) => {
    console.error ("failed to get data: ", error);
})