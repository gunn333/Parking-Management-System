const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(
            `Database Connected: ${connect.connection.host}, ${connect.connection.name}`
        );
    } catch (err) {
        console.error("Database connection failed:", err);
        process.exit(1); // Exit with failure
    }
};

module.exports = connectDb;
