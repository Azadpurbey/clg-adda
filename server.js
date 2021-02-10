import express from 'express'


const app=express();








app.get('/',(req,res)=>{
    res.send('Hello world backend server');
})



const PORT=5000;

app.listen(PORT,()=>console.log(`server is running at ${PORT}`));