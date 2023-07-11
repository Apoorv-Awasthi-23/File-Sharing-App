import mongoose from "mongoose";

const DBconnection= async ()=>{
    const DB_URL=`mongodb+srv://Project:FileSharingApp@file-sharing.tdx2htv.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(DB_URL,{useNewUrlParser:true});
        console.log("DataBase connected Successfully");
    } catch (error) {
        console.error("Error while connecting with DataBase:",error.message);
    }
}

export default DBconnection;