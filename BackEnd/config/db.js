const mongoose  = require('mongoose');
const bcrypt = require('bcryptjs');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000, // Lower the timeout for initial connection
        });
        console.log("MongoDB connected successfully");
    } catch (e) {
        console.error("Unable to connect to Database: " + e.message);
        process.exit(1);
    }
};   

const UserSchema = new mongoose.Schema({

    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
});

UserSchema.pre('save',async function (next){
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password , salt);
});

UserSchema.methods.matchpassword = async function (enteredPassword){
    console.log(this.password);
    return await bcrypt.compare(enteredPassword , this.password);
};

const User = mongoose.model('User', UserSchema);

module.exports = {User,connectDB}; 