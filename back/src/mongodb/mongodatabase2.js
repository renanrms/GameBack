const MongoClient = require('mongodb').MongoClient

const {collection} = require('./mongo.js')


const url = 'mongodb://127.0.0.1:27017'

const dbName = 'outroNome' 
let db 
const {ObjectId} = require('mongodb')
MongoClient.connect(url, { useUnifiedTopology: true}, (err,client) => {
  if (err) return console.log(err)
  db = client.db(dbName) 
  console.log('MangoDB: ' +  url)
  console.log('DataBase: ' +  dbName)
  
})

app.listen(3000, function() {
    console.log('server ok')
})

app.set('view engine', 'ejs')

app.get('/', (req,res) =>{
  res.render('index.ejs')
})

app.post('/register', (req,res) => {

  id = req.body['Id'].toString()
  if (/^[A-F0-9]+$/i.test(id)==false)
  {
    console.log('esse numero não é valido')
  } 
  else {
  if (id.search("-")==0) // tira o menos
  {
    id = id.substring(1,id.length)
  }
  if (id.length < 24)
  {
    while(id.length!=24)
    {
      id = '0' + id 
    }
  }
  else if (id.length > 24) {
    id = id.substring(id.length-24,id.length)
  }//tem que ter 24 hexadecimais

  //verificar se o ID é usado


  register = {'_id':ObjectId(id)} // add todos os outros elementos tirando o primeiro a entrada (se o id é o primeiro)
  novo = {}
  for (cont = 1;cont < Object.keys(req.body).length;cont++)
  {
    novo[Object.keys(req.body)[cont]] = req.body[Object.keys(req.body)[cont]]
    register = {
      ...register,
      ...novo
    }
  }

  a = new collection(db,'players')
  a.insertOne(register)
  console.log(register)
}
  res.render('show.ejs')

  
})



app.get('/listar', (req,res) => {
 db.collection('players').find().toArray()
   .then(
   results => {
     console.log(results)
   })
  res.render('show.ejs')
})

app.post('/buscar', (req,res) => {

  //db.players.findOne({"name":'55'})

  id = req.body['Id'].toString()
  if (id.length < 24)
  {
    while(id.length!=24)
    {
      id = '0' + id 
    }
  }
  else if (id.length > 24) {
    id = id.substring(id.length-24,id.length)
  }//tem que ter 24 hexadecimais
  achou = false
  db.collection('players').find().toArray()
  .then(
  results => {
    for (cont=0;cont<results.length;cont++){
      if (results[cont]['_id'].toString() == id){
        achou = true
        console.log(results[cont])
      }
    }
    if (achou == false)
    {
      console.log('Não existe usuário com esse Id')
    }
   
  })

  
  res.render('show.ejs')
 })

app.post('/alterar', (req,res) => {
  alterar = {}
  modificador = {}

  alterar[req.body['Akey'].toString()]=req.body['Aconteudo']
  modificador[req.body['Mkey'].toString()]=req.body['Mconteudo']

  console.log(alterar)
  console.log(modificador)

  res.render('show.ejs')


  db.collection('players').updateOne(alterar, { $set : modificador })//pega o primeiro  ID e altera
  //db.collection('players').update(alterar, { $set : modificador })//pega todos os que encontra alterar e altera

})

app.post('/apagar', (req,res) => {
  
  console.log(req.body)

  remover = {}
  remover[req.body['key'].toString()]=req.body['conteudo']
  console.log(remover)
  db.collection('players').deleteOne(remover)
 
  res.render('show.ejs')
})