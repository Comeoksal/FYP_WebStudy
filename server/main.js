import Fastify from 'fastify'

const fastify = Fastify({
    logger: true
})

fastify.get('/', async (req, reply) => {
    return { hello: 'worlds' }
})

<<<<<<< HEAD
fastify.get('/sieon', async (req, reply) => {
    return { helqwqwm: 'worsdfnidsfgdgsfgsdggddf' }
})

const PORT = 5000;

=======
const PORT = 4000;
>>>>>>> 71e5aae625107c9d26a64a43d5ad2b4aa6ead5fc
try {
    await fastify.listen({ port: PORT })
    console.log(`Server Running at ${PORT}`);
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}