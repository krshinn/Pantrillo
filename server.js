const express = require('express')
const app = express()  //create new express app
const port = 5005;  //using designated port number on front end to access back end
// run server on specific port(5001), and the front end/index on port(3000), when ready to merge and run them together - consolidate with Canon

const {MongoClient} = require('mongodb')  //create a new mongoDB client
const url = "mongodb+srv://krshinn:pickspicks@cluster0.oam60.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const client = new MongoClient(url)


app.use(express.static('build'))  //allows you to pass json data from front end to back end
app.use(express.urlencoded({extended:true})) //allows you to access req.body


const cors = require ('cors')
// cors is a pkg that lets you make request across different urls/different machines -- makes port 3000 talk with server.js port 5001

app.use(cors())

app.use(express.urlencoded({extended:true})) //allows you to access req.body

// deleted _dirname and will get back to it, running thru API on line 16 currently

// start of login/sign up code
app.post('/users', (req,res) => {

  let user = {
	email: req.body.email,
	password: req.body.password,
  } //establish credentials as user obj

  async function insertUser() {
	  await client.connect()
	  const collection = client.db('test_db').collection('users')
	  await collection.insertOne(user)
	  await client.close()
    }
    console.log(user)
    insertUser()
    res.redirect("/welcome")
  })
//function to verify log-in data

app.post('/login', (req,res) => {

  let user = {
	email: req.body.email,
	password: req.body.password,
  } //establish credentials as user obj

  async function verifyUser() {

    await client.connect()
    const collection = client.db('test_db').collection('users')
    let findUser = await collection.findOne(user)
    await client.close()
    console.log(user)
	  if (findUser !== null) {
	    res.redirect("/welcome")
	  } else {
	    res.redirect("/")
	  }
  }
    console.log(user)
  verifyUser()
})
// log in/sign up end here

//function to verify log-in data
app.get('/api', (req,res) => {

  let ingredients = req.query.ingredients.split(',') //variable to search by


  async function postRecipe() {
  await client.connect()
  const collection = client.db('test_db').collection('test_recipe')

  let findIngredients = await collection.find(
  { searchedIngredients: { $all: ingredients } } ).toArray()

  await client.close()
	if (findIngredients !== null) {
	  console.log(findIngredients)
	  res.send(findIngredients)
	} else {
	  console.log('error')
	  res.sendStatus(400)
	}
  }
  postRecipe()
})


  app.get('*', (req,res)=> {
  res.sendFile(__dirname + "/build/index.html")
})


app.listen(port)