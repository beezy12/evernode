'use strict';


const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('server running');
});


app.listen(port, () => {
     console.log(`evernode server running on port: ${port}`);
});
