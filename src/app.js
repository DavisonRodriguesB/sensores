import express from 'express';
import indexRouter from './routes/indexRoutes.js';
// Express
const app = express();

// Habilitando json;
app.use(express.json())
const PORT = 3030;

// Chamar as rotas localhost:3030/api/v1
app.use("/api/v1",indexRouter)

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`);
})