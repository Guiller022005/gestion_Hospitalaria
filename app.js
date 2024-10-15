const {join} = require("path");
const express = require("express");
const doctorRouter = require('./api/router/doctorRouter');
const pacienteRouter = require('./api/router/pacienteRouter');
const hospitalRouter = require('./api/router/hospitalRouter');
const cuentaRouter = require('./api/router/cuentaRouter');
const avisoRouter = require('./api/router/avisoRouter');
const especialidadRouter = require('./api/router/especialidadRouter');
const personalRouter = require('./api/router/personalRouter');

const app = express();

// Configuramos el path para los archivos estáticos
app.use('/css', express.static(join(process.env.EXPRESS_STATIC, 'css')));
app.use('/js', express.static(join(process.env.EXPRESS_STATIC, 'js')));
app.use('/storage', express.static(join(process.env.EXPRESS_STATIC, 'storage')));

// Configuramos las rutas
app.use("/doctor", doctorRouter);
app.use("/paciente", pacienteRouter);
app.use("/hospital", hospitalRouter);
app.use("/cuenta", cuentaRouter);
app.use("/aviso", avisoRouter);
app.use("/especialidad", especialidadRouter);
app.use("/personal", personalRouter);

app.get('/hospital', (req, res) => {
    res.sendFile(join(__dirname, 'client', 'index.html'));
});

app.get('/Add_Doctor', (req, res) => {
    res.sendFile(join(__dirname, 'client', 'views', 'add_Doctor.html'));
});

app.get('/centro', (req, res) => {
    res.sendFile(join(__dirname, 'client', 'views', 'centro.html'));
});

// Capturamos rutas no encontradas (404)
app.use((req, res) => {
    res.status(404).json({ message: "El API que deseas solicitar no está disponible" });
});
const config = {
    host: process.env.EXPRESS_HOST,
    port: process.env.EXPRESS_PORT,
}

app.listen(config, () => {
    console.log(`http://${config.host}:${config.port}`);
})

