const { join } = requireç("path");
const express = require("express");
const doctorRouter = require('./api/router/doctorRouter');
const pacienteRouter = require('./api/router/pacienteRouter');
const hospitalRouter = require('./api/router/hospitalRouter');
const cuentaRouter = require('./api/router/cuentaRouter');
const avisoRouter = require('./api/router/avisoRouter');


const app = express();

app.use('/css', express.static(join(process.env.EXPRESS_STATIC, 'css')));
app.use('/js', express.static(join(process.env.EXPRESS_STATIC, 'js')));
app.use('/storage', express.static(join(process.env.EXPRESS_STATIC, 'storage')));


app.use("/doctor", doctorRouter);
app.use("/paciente", pacienteRouter);
app.use("/hospital", hospitalRouter);
app.use("/cuenta", cuentaRouter);
app.use("/aviso", avisoRouter);

app.use((req, res) => {
    res.status(404).json({ message: "El api que deseas solicitar no esta disponible"})
})

const config = {
    host: process.env.EXPRESS_HOST,
    port: process.env.EXPRESS_PORT,
}

app.listen(config, () => {
    console.log(`http://${config.host}:${config.port}`);
})