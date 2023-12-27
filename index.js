const express= require('express');
const app= express();
const cors=require('cors')
const port=5000;

app.use(cors());

const products=require('./Data/products.json')

// app.get('/', (req, res)=>{

//     res.send(products);
// })

app.get('/home', (req, res)=>{

    res.send(products.filter(p=>p.mostSell>200));
})

app.listen(port, ()=>console.log(`App running on port ${port}`))