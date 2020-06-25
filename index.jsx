const Koa = require('koa');

const app = new Koa();

app.use(async ctx => {
  ctx.body = render(<HomePage name={ctx.query.name} />);
});

app.listen(3000);
