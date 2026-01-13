import express from 'express';
import { readSensorFile, writeSensorFile } from './utils/sensorFile.js';


//express
const app = express();
// habilitando o json
app.use(express.json())
//porta do servidor
const PORT = 3030;


/*lista de sensores
const sensores = [ 
    {id: "SNN-001", localizacao: "Norte Inferior"} ,
    {id: "SNN-002", localizacao: "Norte Superior"} ,
    {id: "SNN-003", localizacao: "Sul Quadrante 2"} 
] */


app.get('/api/v1/status', (req, res)=> {
    res.status(200).json({message: "servidor Operante!"})
});


//rota de sensores
app.get('/api/v1/sensores', async (req, res) =>{
    const sensores = await readSensorFile()
    res.status(200).json({ sensores })
});

app.post('/api/v1/sensores', async (req, res)=> {

    try {
        const {id, localizacao, temp} = req.body;
        if (!id ){
            throw new Error ("ID obrigatório")
        }
        
        //montar o objeto
        const sensor = {id, localizacao, temp}

        // pegar a lista de sensores
        const sensores = await readSensorFile();

        // verificar se o sensor já está salvo
        sensores.push(sensor);
        await writeSensorFile(sensores);

        res.status(201).json({status: "success", data: sensor})

    } catch (error) {
        res.status(500).json({status: "fail", message: "Error interno no servidor"})
    }
})

app.put('/api/v1/sensores', async (req, res)=> {
    //id e dados do sensor atualizado
    const {id} = req.params;
    const {localizacao, temp} = req.body

    try {
        const sensores = await readSensorFile();
        // se o sensor estiver na lista, retorna o index da sua lista, se não estiver retorna -1
        const findSensorId = sensores.findIndex(sensor => sensor.id == id);
        if (findSensorId=== -1){
            throw new Error ("sensor não está salvo na lista!")
        }
        const sensorUpdate = {id, localizacao, temp};
        sensores[findSensorId] = {...sensores[findSensorId], ...sensorUpdate};

        await writeSensorFile(sensores);
        res.status(200).json({message: "success", data: sensorUpdate})

    } catch (error) {
        res.status(500).json({status: "fail", message: "Error interno no servidor"})
        
    }

})
//
app.delete('/api/v1/sensores/:id', async (req, res) => {
    try {
        const { id } = req.params;
        // ler arquivo
        const sensores = await readSensorFile();

        // encontrar índice do sensor
        const findSensorId = sensores.findIndex(sensor => sensor.id === id);

        if (findSensorId === -1) {
            return res.status(404).json({
                status: "fail",
                message: "Sensor não encontrado"
            });
        }

        // remover sensor
        const sensorRemovido = sensores.splice(findSensorId, 1);

        // salvar arquivo atualizado
        await writeSensorFile(sensores);

        res.status(200).json({
            status: "success",
            data: sensorRemovido[0]
        });

    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: "Erro interno no servidor"
        });
    }
});


//criar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`);
})
