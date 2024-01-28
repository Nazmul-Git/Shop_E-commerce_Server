const express= require('express');
const app= express();
const cors=require('cors')
const port=process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

const products=require('./Data/products.json')
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()

// app.get('/', (req,res)=>{
//     res.send(products);
// })

// nazmulhasan16021998
// TwxOcRlqKEtIiCY6

console.log(process.env.DB_USER)
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.u4virq8.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    fetch()



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


app.get('/home', (req, res)=>{

    const sort=products.filter(p=>p.mostSell>300);
    res.send(sort);
})

app.get('/products', (req, res)=>{
    res.send(products);
})
app.get('/products/:id', (req, res)=>{
    const params=parseInt(req.params.id);
    console.log(params)
    const pId=products.find(p=>parseInt(p._id)==params);
    console.log(pId)
    res.send(pId);
})
app.listen(port, ()=>console.log(`App running on port ${port}`))