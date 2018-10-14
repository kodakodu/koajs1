const koa = require('koa');
const router = require('koa-router');
const app = module.exports = new koa();

app.use(async function(ctx) {
    ctx.body = 'Hello World';
  });
  
  if (!module.parent) app.listen(3000);

// var r= router();
// r.get('/hello', getMessage)

// function *getMessage(){
//     this.body = "Hello world!";
// }

// app.use(r.routes());


// app.listen(3000, function(){
//     console.log('Server running on https://localhost:3000')
// });