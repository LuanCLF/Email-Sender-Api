import server from './server';

const port = process.env.PORT || 3500;

server.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
