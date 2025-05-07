import Fastify from 'fastify';
import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client'; // ✅ 올바른 import
import fastifyFormbody from '@fastify/formbody';

const fastify = Fastify({
    logger: true
});
// ✅ 반드시 가장 먼저 등록
await fastify.register(cors, {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'OPTIONS'], // 프리플라이트 허용
    credentials: true // (옵션) 인증 필요 시 사용
});
// ✅ JSON body parsing 추가
fastify.register(fastifyFormbody);
const prisma = new PrismaClient(); // ✅ 클라이언트 생성

fastify.get('/', async (req, reply) => {
    return { "hello": "hello" };
});

fastify.post('/api/post', async (req, reply) => {
    try {
        const { requestNumber } = req.body;
        console.log('서버가 받은 값 : ' + requestNumber);
        const result = requestNumber * 5;
        reply.status(200).send({ responseNumber: result });
    } catch (err) {
        console.error(err);
        reply.status(500).send({ error: '서버 오류' });
    }
});

fastify.post('/api/bank', async (req, reply) => {
    try {
        const { name, money, who } = req.body;

        const newDad = await prisma.dad.create({
            data: { name, money, who }
        });

        reply.send({
            ...newDad,
            id: newDad.id.toString() // BigInt 문제 방지
        });
    } catch (err) {
        console.error("🔥 Prisma 오류:", err); // 여기서 err 전체 확인 중요!
        reply.status(500).send({ error: 'DB 저장 실패', details: err.message });
    }
});

const PORT = 5000;

try {
    await fastify.listen({ port: PORT });
    console.log(`Server Running at ${PORT}`);
} catch (err) {
    fastify.log.error(err);
    process.exit(1);
}