// Dependencies
const express = require('express')
const path = require('path')
const app = express()
const bodyParser  = require('body-parser')
const port = process.env.PORT || 5000
const fs = require('fs')
const mongoose = require('mongoose')

// Models
const Calendrier = require('./models/calendrier')
const Classement = require('./models/classement')
const Joueurs = require('./models/joueur')

// Server
app.listen(port, () => console.log(`Listening on port ${port}`))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'client/build')))

// API
mongoose.Promise = global.Promise

const url = 'mongodb+srv://Razza:CaptainElan2696@cluster0-c4fum.mongodb.net/elans?retryWrites=true&w=majority'

async function main() {
  const client = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

  try {
    await client
    console.log('Connection established to MongoDB !')
  } catch (err) {
    console.dir(err)
  }
}

main().catch(console.dir)

// START API

//---->>>> GET CALENDRIER <<<<----
app.get('/calendrierbdd', async (req, res) => {
  const calendrier = await Calendrier.find()
  const sortCalendrier = calendrier.sort((a,b) => a.timestamp > b.timestamp)
  return res.json(sortCalendrier)
})

//---->>>> GET CLASSEMENT <<<<----
app.get('/classementbdd', async (req, res) => {
  const classement = await Classement.find()
  const sortClassement = classement.sort((a,b) => a.points > b.points)
  return res.json(sortClassement)
})

//---->>>> GET JOUEURS <<<<----
app.get('/joueurs', async (req, res) => {
  const joueurs = await Joueurs.find()
  return res.json(joueurs)
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})
