const mongoose = require('mongoose');
const app = require('./app');

const port = 4004;

const URI = 'mongodb://localhost:27017/conecta';

mongoose.connect(URI, (err, res) => {
    if (err) {
        console.log('El error es: ${err}');
    } else {
        console.log('Conexion exitosa!!');
        app.listen(port, () => {
            console.log('Puerto: ${port}')
        });
    }
});