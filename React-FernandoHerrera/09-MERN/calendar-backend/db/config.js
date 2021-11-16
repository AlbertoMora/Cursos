const mongoose = require("mongoose");

const conn = async () => {
    const conn_str = process.env.DB_CONN;

    try {
        await mongoose.connect(conn_str, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log("DB is online");
    } catch (err) {
        console.log(err);
        throw new Error("Error while db init");
    }
};

module.exports = conn;
