import { PrismaClient } from "@prisma/client";
import productRouter from "../routes/products.routes";

const prisma = new PrismaClient()

const fetchProducts = async()=>{
    return await prisma.products.findMany()
}

const createProduct = async {data: Omit<Product,"id">){
    return await prisma.product.create({data})
}


export default{
    fetchProducts
}