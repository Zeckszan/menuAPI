const app=require('express')();
const PORT=8080;

app.get('/',(req,res)=>{
	res.send('hello')

});

app.get('/api/foodDesc',(req,res)=>{
	res.status(200).send({
		chicken:'Chicken is a major worldwide source of meat and eggs for human consumption.',
		chinese:'Chinese food, rich and colorful, has diversified color, aromatic flavor, and excellent taste as its main features.',
		vegetable:'Vegetables have a more mild or savory taste and are usually eaten as part of a side dish or main course.',
		panner:'Paneer has a mild, milky flavour and a dense crumbly texture that goes beautifully well with strong spicy flavours.'
	})

});

const port=process.env.PORT||8000;
app.listen(8000,()=>console.log('Listening on port '))