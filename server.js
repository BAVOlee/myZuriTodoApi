const express=require('express');

//Initialise express
const app=express();

require('dotenv').config();
const mongoose=require('mongoose');
const routes = require('./routes/taskRoutes');
const connectDB = require('./dbConnect');


// Connect To db
connectDB();

// A basic express route
app.get('/', (req, res) => {
	res.send("Welcome to My todoAPI task");
})


// Initialise express middleware
app.use(express.json());
app.use(express.urlencoded({extended:false})) ;   // handles form submission

//Todo API
app.use('/', routes);

//PORT
const port = process.env.PORT || PORT;

// Test DB Connection
mongoose.connection.once('open',()=>{
    console.log('Connected successfully to MongoDB');
    app.listen(port,()=>console.log(`Server is running on  port:${port}`));
})


