const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        const DB_URI = process.env.DB_URI;
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB is connect');
    } catch(err) {
        console.log(err);
    }
};

// const dbConnect = () => {
//     const DB_URI = process.env.DB_URI
//     mongoose.connect(DB_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }, (err, res) => {
//         if (!err) {
//             console.log('**** CONEXION CORRECTA ****')
//         } else {
//             console.log('***** ERROR DE CONEXION ****')
//         }
//     })
// }

module.exports = dbConnect;