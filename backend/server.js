const express = require("express");
const { getAge } = require("./controllers/age");
const { getGender } = require("./controllers/gender");
const { getNationality } = require("./controllers/nationality");
const { getRandomUser } = require("./controllers/user");

const app = express();
const PORT = 5000;

app.listen(5000, () => {
  console.log(`Server started on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send("Hello World");
})

app.get('/user', async (req, res) => {
  try {
    const name = await getRandomUser();
    res.send(name);
  } catch (e) {
    res.send('Server Error 501')
  }
})

app.get('/verifyAge', async (req, res) => {
  try {
    const age = await getAge(req.query.name);
    res.send(age);
  } catch (e) {
    console.log(e);
    res.send('Server Error 502')
  }
})

app.get('/verifyGender', async (req, res) => {
  try {
    const gender = await getGender(req.query.name);
    res.send(gender);
  } catch (e) {
    console.log(e);
    res.send('Server Error 503')
  }
})

app.get('/verifyNationality', async (req, res) => {
  try {
    const nationality = await getNationality(req.query.name);
    res.send(nationality);
  } catch (e) {
    console.log(e);
    res.send('Server Error 503')
  }
})