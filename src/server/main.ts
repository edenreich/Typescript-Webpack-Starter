
import Koa from 'koa';
import serve from 'koa-static';
import router from './routes';

const app: Koa = new Koa();

const port: number = 3000;

app.use(serve('public'));
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port);

console.log(`App is listening on port ${port}`);
