const express = require('express');
const app = express();  
const DB = require('./Config/DataBase.connect.js');
const PORT = 8000;
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
DB("test1");
const userAuthLoginApi = require('./Routes/Routes.Auth.User')
app.get('/', (req, res) => {
    res.send('<h1>Server is Up!!<hr/></h1>');
});
app.use('/api/user/auth/',userAuthLoginApi);

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});