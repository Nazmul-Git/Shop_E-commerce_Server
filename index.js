const express= require('express');
const app= express();
const cors=require('cors')
const port=5000;

app.use(cors());

const products=require('./Data/products.json')

// app.get('/', (req,res)=>{
//     res.send(products);
// })

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