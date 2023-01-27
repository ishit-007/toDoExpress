const express = require('express');
const app = express();
const PORT = 3000;

const taskRoutes=require('./routes/taskRoutes');
app.use(express.json());
app.use(express.urlencoded({extended:false}));    //body parser deprecated

app.use('/',taskRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});





