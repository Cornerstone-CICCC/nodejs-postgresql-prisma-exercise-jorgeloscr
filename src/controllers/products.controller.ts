import { Request, Response } from "express";
import productModel from "../model/product.model";

const getAllProducts = async (req:Request, res: Response)=>{
    try{
        const products= await productModel.fetchProducts()
        res.status(200).json(products)
    }catch(err){
        res.send(500).json({error: "Not able to get Products"})
    }
    }


    export default{
        getAllProducts
    }