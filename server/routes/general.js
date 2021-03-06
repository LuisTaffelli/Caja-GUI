const router = require("express").Router();
const { Product, Sales } = require("../db.js");




router.get('/', async (req, res)=>{
	try {
		const data = await Product.findAll()
		res.status(200).json({'data':data})
	}catch(e){
		console.log(e)
		res.status(400).send('error with the request')
	}
})

router.post('/products', async (req, res)=>{
	try{
		const {
			name,
			stock,
			stocktype,
			unitprice
		} = req.body
		console.log(name, stock, stocktype, unitprice)
		const new_product = await Product.findOrCreate({
			where:{
				name
			},
			defaults: {
				stock,
				stocktype,
				unitprice
			}
			
			
		})
		res.status(200).send({msg:'success', data: new_product})
	}catch(e){
		console.log(e)
		res.status(400).send('error with the request')
	}
})

router.put('/productsale', async (req,res)=>{
	try{
		const {
			stock,
			id
		} = req.body

		const updated_product = await Product.findOne({where: {id:id}})
		updated_product.stock = stock
		await updated_product.save()
		res.status(200).send('update succeded')

	}catch(e){
		console.log(e)
		res.status(400).send('Error')
	}
})


router.delete('/products', async (req,res)=>{
	try{
		const {id} = req.body
		const product_delete = await Product.findOne({where: {id:id}})
		await product_delete.destroy()
		res.status(200).send('Erase completed')
	}catch(e){
		console.log(e)
		res.status(500).send('error')
	}
})


router.put('/products', async (req,res)=>{
	try{
		const {
			name,
			stock,
			stocktype,
			unitprice,
			id
		} = req.body

		const updated_product = await Product.findOne({where: {id:id}})
		updated_product.name = name
		updated_product.unitprice = unitprice
		updated_product.stock = stock
		updated_product.stocktype = stocktype
		await updated_product.save()
		res.status(200).send('update succeded')

	}catch(e){
		console.log(e)
		res.status(400).send('Error')
	}
})


router.get('/test', (req, res) => res.status(200).send('success!'));



module.exports =	router
