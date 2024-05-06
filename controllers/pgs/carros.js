const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

//Testa a ligação
exports.testConnection = async (req, res) => {
    try {
        await prisma.$connect();
        res.send('Ligação bem-sucedida com o PostgreSQL!');
    } catch (error) {
        res.send('Erro ao conectar ao PostgreSQL:', error);
    } finally {
        await prisma.$disconnect();
    }
}

//devolve todos os carros
exports.getAll = async (req, res) => {
    try {
        const response = await prisma.carros.findMany();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//devolve o carro com o id
exports.getById = async (req, res) => {
    const id = req.params.id*1;
    try {
        const response = await prisma.carros.findUnique({
            where: {
                id: id,
            },
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

//criar um carro
exports.create = async (req, res) => {
    const { Marca, Detalhes, Foto } = req.body;
    try {
        const carro = await prisma.carros.create({
            data: {
                Marca: Marca,
                Detalhes: Detalhes,
                Foto: Foto,
            }
        })
        res.status(201).json(carro)
    } catch (error) {
        res.status(400).json({ msg: error.message})
    }
}

//atualizar um carro
exports.update = async (req, res) => {
    const { id, Marca, Detalhes, Foto } = req.body;
    try {
        const carro = await prisma.carros.update({
            where: {
                id: id*1,
            },
            data: {
                Marca: Marca,
                Detalhes: Detalhes,
                Foto: Foto,
            },
        })
        res.status(200).json(carro)
    } catch (error) {
        res.status(400).json({ msg: error.message})
    }
}

//apagar o carro com id passado
exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        await prisma.Carros.delete({
            where: {
                id: id*1,
            },
        })
        res.status(200).send("ok")
    } catch (error) {
        res.status(400).json({ msg: error.message})
    }
}