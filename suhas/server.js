const express = require('express');

require(`dotenv`).config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT;

const shatrajeet = {
	name: 'Suhas',
	hometown: 'Fatepur',
	degree: 'B.Tech',
	email: 'suhas@gmail.com',
};

const allProducts = [
	{
		id: 'p1',
		name: 'Laptop',
		price: '3000',
		quantity: '20',
	},
	{
		id: 'p2',
		name: 'Mobile',
		price: '1000',
		quantity: '30',
	},
	{
		id: 'p3',
		name: 'TV',
		price: '5000',
		quantity: '10',
	},
];

app.get('/me', (req, res) => {
	res.status(200).json({
		status: 'success',
		message: 'Data fetched successfully',
		data: suhas,
	});
});

const getallProducts = (req, res) => {
	res.status(200).json({
		status: 'success',
		message: 'Data fetched successfully',
		data: allProducts,
	});
};

const createProduct = (req, res) => {
	const product = req.body;

	let a = allProducts.push(product);
	console.log(a);
	console.log(allProducts);

	res.status(201).json({
		status: 'success',
		message: 'Product created successfully',
		data: product,
	});
};

const getProductbyID = (req, res) => {
	const { id } = req.params;
	if (req.params.id >= allProducts.length) {
		res.status(404).json({
			status: 'error',
			message: 'Product not found',
		});
		return;
	} else {
		const product = allProducts[id];
		res.status(200).json({
			status: 'success',
			message: 'Data fetched successfully',
			data: product,
		});
	}
};

const updateProduct = (req, res) => {
	const { id } = req.params;

	if (req.params.id >= allProducts.length) {
		res.status(404).json({
			status: 'error',
			message: 'Product not found',
		});
		return;
	}
	const newProduct = req.body;

	allProducts[id] = newProduct;
	console.log(allProducts);

	res.status(200).json({
		status: 'success',
		message: 'Data edited successfully',
		data: allProducts[id],
	});
};

const deleteProduct = (req, res) => {
	const { id } = req.params;

	if (req.params.id >= allProducts.length) {
		res.status(404).json({
			status: 'error',
			message: 'Product not found',
		});
		return;
	}

	allProducts.splice(id, 1);
	console.log(allProducts);

	res.status(204).json({
		status: 'success',
		message: 'Data deleted successfully',
	});
};

//Routes

app.route('/products').get(getallProducts).post(createProduct);
app.route('/products/:id').get(getProductbyID).put(updateProduct).delete(deleteProduct);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});