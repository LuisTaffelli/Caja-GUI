const router = require("express").Router();
const { Products, Sales } = require("../db.js");



router.get('/', async (req, res)=>{
	try{
		const data = await Sales.findAll()

		res.status(200).send(data)
	}catch(e){
		console.log(e)
		res.status(400).send('Error with the request')
	}
})


router.post('/', async (req, res)=>{
	try{
		console.log(req.body)
		res.send('Success')
	}catch(e){
		console.log(e)
		res.status(400).send('Error with the request')
	}
})



module.exports = router