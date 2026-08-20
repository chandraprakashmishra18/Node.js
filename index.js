// importing the express
const express = require('express');

// called the function by factory method

const app = express();
const port = 3000;


// importing the packages from the tour.js file 
// const packages = require('./data/tour');

// using home route to get the welcome message
// app.get('/',(req,res)=>{
//     res.send("Hi there !!! Welcome 🙏")
// });

// getting the particular destination according to the route
// app.get("/packages",(req,res)=>{
//     if(!des){
//         res.json(packages);
//     }
//     const result = packages.filter(
//         item => item.destination.toLocaleLowerCase() == des.toLocaleLowerCase()
//     );
//     res.json(result);
// })

// // getting the result according to the route 
// // i.e. id ke according uske corresponding output milegi
// app.get("/packages/:id",(req,res)=>{
//     const id = Number(req.params.id);
//     const onePack = packages.find(
//         item=>item.id==id
//     );
//     res.json(onePack);
// })

// // this will run the server in the PORT - 5000
// app.listen(5000,()=>{
//     console.log("Server is running on port 5000")
// })
//  Q console. log should print req. object refr to official doc

// app.get('/',(req,res)=>{
//     res.send("Hello good morning🙏")
// });
// // for post recall
// app.post("/submit",(req, res)=>{
//     res.send("This is the post method")
// });

// app.listen(3000,()=>{
//     console.log("sever is running")
// })

// 17-08 to get the particular destination]
// app.get("/packages",(req,res)=>{
//     const des = req.query.des;
//     if(!des){
//         res.json(packages);
//     }
//     const result = packages.filter(
//         (item) => item.destination.toLowerCase() == des.toLowerCase()
//     );
//     res.json(result);
// })


// app.listen(3000,()=>{
//     console.log("sever is running")
// })
// ===========================================20-08-2026==========================================
const tourRouter = require('./router/tourRouter');

app.use('/packages', tourRouter);
// here packages is the home route and tourRouter is the router which we have created in the router
//  folder

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);
