import mongoose from "mongoose";

const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL, {
        dbName: "HMS",

    }).then(()=> {
        console.log("Connected to database")
    }).catch((err) => {
        console.log(`Some error: ${err}`)
    })
}

export default dbConnection