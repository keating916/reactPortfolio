const express = require('express');
const bodyParser = require('body-parser')
const fetch = require('node-fetch');
const path = require('path');
const app = express();


const apiKey = "FB4FEF0944EFF7500083DCFD8AB8EFDC8B36498212EA1BB34BD5A6531634B791BDFB466C973322B991BBFDBC17AB4061";
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post("/", (req, res) => {
    const myEmail = "keating916@gmail.com";
    const reciever = "keatingdev25@gmail.com";
    console.log(req.body);
    req.body.name = encodeURIComponent(req.body.name);
    req.body.comments = encodeURIComponent(req.body.comments);
    const tail = `&subject=${req.body.name}&from=${myEmail}&replyTo=${myEmail}&to=${reciever}&bodyText=${req.body.email}%0A${req.body.comments}`
    const hostname= "http://smtp.elasticemail.com"
    let path= `/v2/email/send?apikey=${apiKey}${tail}`
    const options = {
      port: 2525, 
      method: 'POST',
      keepalive: false,
    }

    fetch(hostname+path, options)
})



app.listen(process.env.PORT || 8080);
console.log("listening!")