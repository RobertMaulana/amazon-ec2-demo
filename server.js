const express = require('express'),
      app     = express();

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');

app.use('/', (req, res) => {
  res.render('index')
})

app.listen(3000 || process.env.PORT, () => {
  console.log(`Server Runing..!`);
})
