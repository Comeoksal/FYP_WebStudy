import Fastify from 'fastify'
import cors from '@fastify/cors'
import axios from 'axios'
import iconv from 'iconv-lite';
import { load } from "cheerio";

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

const fetchPopularNews = async () => {
    const response = await axios.get("https://news.naver.com/main/ranking/popularDay.naver", {
        responseType: "arraybuffer", // 중요: raw binary로 받기
    });

    // EUC-KR로 디코딩
    const decoded = iconv.decode(response.data, "EUC-KR");
    const $ = load(decoded);
    const articles = [];

    $(".rankingnews_box a").each((i, el) => {
        const title = $(el).text().trim();
        const url = $(el).attr("href");
        if (title && url) {
            articles.push({
                title,
                url: url.startsWith("http") ? url : `https://news.naver.com${url}`,
            });
        }
    });

    return articles;
};
try {
    await fastify.listen({ port: PORT })
    console.log(`Server Running at ${PORT}`);

    fetchPopularNews().then(console.log);
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}