const Coffee = require('../model/coffee.js');
const getCoffee = async (req,res)=>{
    try{
        console.log("API working");
        let {limit} = req.query;
        limit = parseInt(limit);
        let data; 
        if(limit){
            data =await Coffee.find().sort({createdAt:-1}).limit(limit);
        }
        else{
            data = await Coffee.find().sort({createdAt:-1});
        }
        console.log("this "+data);
        res.status(200).send(data);
    }
    catch(err){
        console.log(err);
        res.status(400).send("Error");
    }
}
const addCoffee = async(req,res)=>{
    try{
        let data = req.body;
        console.log(data);
        let ans = await Coffee.insertMany(data);
        res.status(200).send(ans);
    }
    catch(err){
        console.log(err);
        res.status(400).send("Error");
    }
}
const getbyId = async (req,res)=>{
    try{
        let {id} = req.params;
        if(!id){
            res.status(400).send("ID is required");
        }
        let data = await Coffee.findById(id);
        res.status(200).send(data);
    }catch(err){
        console.log(err);
        res.status(400).send("Error");
    }
}
module.exports = {getCoffee,addCoffee,getbyId};