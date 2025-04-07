import Fastify from 'fastify'

const fastify = Fastify({
    logger: true
})

fastify.get('/', async (req, reply) => {
    return { "hello": "hello" }
})

fastify.get('/sieon', async (req, reply) => {
    return { helqwqwm: 'worsdfnidsfgdgsfgsdggddf' }
})

const PORT = 5000;

try {
    await fastify.listen({ port: PORT })
    console.log(`Server Running at ${PORT}`);
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}