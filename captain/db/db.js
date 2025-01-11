const mongoose=require('mongoose');

function connect()
{
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Captain service connected to MongoDB'))
    .catch(err => console.error('Database connection error:', err));
}

module.exports=connect;