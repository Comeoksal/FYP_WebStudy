import Fastify from 'fastify'
import cors from '@fastify/cors'

const fastify = Fastify({
    logger: true
})

fastify.register(cors, {
    origin: 'http://localhost:5173'
})

fastify.get('/', async (req, reply) => {
    return { "hello": "hello" }
})

fastify.post('/api/post', async (req, reply) => {
    try {
        const { requestNumber } = req.body;
        console.log('서버가 받은 값 : ' + requestNumber);
        const result = requestNumber * 5;
        reply.status(200).send({ responseNumber: result });
    } catch (err) {
        console.error(err);
    }
})

const PORT = 5000;

try {
    await fastify.listen({ port: PORT })
    console.log(`Server Running at ${PORT}`);
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}