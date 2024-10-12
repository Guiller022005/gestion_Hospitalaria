const { join } = require("path");
const express = require("express");
const doctorRouter = require('./api/router/doctorRouter');
const pacienteRouter = require('./api/router/pacienteRouter');
const hospitalRouter = require('./api/router/hospitalRouter');
const cuentaRouter = require('./api/router/cuentaRouter');
const avisoRouter = require('./api/router/avisoRouter');

const app = express();

// Serving static files
app.use('/css', express.static(join(process.env.EXPRESS_STATIC, 'css')));
app.use('/js', express.static(join(process.env.EXPRESS_STATIC, 'js')));
app.use('/storage', express.static(join(process.env.EXPRESS_STATIC, 'storage')));

// Setting up routes
app.use("/doctor", doctorRouter);
app.use("/paciente", pacienteRouter);
app.use("/hospital", hospitalRouter);
app.use("/cuenta", cuentaRouter);
app.use("/aviso", avisoRouter);

// Handling 404
app.use((req, res) => {
    res.status(404).json({ message: "El api que deseas solicitar no está disponible" });
});

const config = {
    host: process.env.EXPRESS_HOST,
    port: Number(process.env.EXPRESS_PORT),  // Convert port to a number
};

app.listen(config.port, config.host, () => {
    console.log(`http://${config.host}:${config.port}`);
});