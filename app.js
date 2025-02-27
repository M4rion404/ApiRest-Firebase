const express = require("express");
const app = express();
const taskRouters = require("./routes/taskRoutes");

app.use(express.json());
app.use("/apiV1/task", taskRouters);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
});
