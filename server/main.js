import Fastify from 'fastify'

const fastify = Fastify({
    logger: true
})

fastify.get('/', async (req, reply) => {
    return { hello: 'worlds' }
})

const PORT = 4000;
try {
    await fastify.listen({ port: PORT })
    console.log(`Server Running at ${PORT}`);
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}