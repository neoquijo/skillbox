import * as jsonServer from 'json-server';
import express from 'express';
import * as path from 'path'
import cors from 'cors';
import { IPosts } from 'src/Shared/API/Interfaces';
const router = jsonServer.router('db.json');



const port = 3001
const app = express();
app.use(cors({ origin: '*' }))

app.get('/ids', (req: express.Request, res: express.Response) => {
    const data = router.db.get('posts') as Array<IPosts>
    const titles = data.map((item: IPosts) => ({ title: item.title, link: item.shortlink }));
    res.json(titles);
});

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'src/', 'index.html'));
});

app.use(router)



app.listen(port, () => console.log('App started on ' + port + ' port'))