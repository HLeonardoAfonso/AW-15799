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
