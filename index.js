// importing the express
const express = require('express');

// called the function by factory method

const app = express();

// importing the packages from the tour.js file 
const packages = require('./data.tour');

// using home route to get the welcome message
app.get('/',(req,res)=>{
    res.send("Hi there !!! Welcome 🙏")
});

// getting the particular destination according to the route
app.get("/packages",(req,res)=>{
    if(!des){
        res.json(packages);
    }
    const result = packages.filter(
        item => item.destination.toLocaleLowerCase() == des.toLocaleLowerCase()
    );
    res.json(result);
})

// getting the result according to the route 
// i.e. id ke according uske corresponding output milegi
app.get("/packages/:id",(req,res)=>{
    const id = Number(req.params.id);
    const onePack = packages.find(
        item=>item.id==id
    );
    res.json(onePack);
})

// this will run the server in the PORT - 5000
app.listen(5000,()=>{
    console.log("Server is running on port 5000")
})