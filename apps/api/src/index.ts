import express, { Request, Response } from 'express';
import { prisma } from '@repo/database';

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) => {
    return res.json({
        message: "Hello, from monorepo's api"
    });
});

app.get("/user", async (req: Request, res: Response) => {
    const users = await prisma.user.findFirst({
        where: {id: 1}
    })
    return res.send(users)
})

app.post("/ping", (req: Request, res: Response) => {
    console.log("Pong")
})

app.listen(PORT, () => {
    console.log(`- local:  http://127.0.0.1:${PORT}`);
});
