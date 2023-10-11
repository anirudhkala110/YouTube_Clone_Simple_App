import mongoose from ('mongoose')
// Import required modules
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { Sequelize, DataTypes } from 'sequelize';
import sequelizeMongoose  from 'sequelize-mongoose';
// Initialize Express app
// const app = express();
// app.use(cors({
//     // ... cors configuration
// }));
// app.use(cookieParser());
const mongodbUri = 'mongodb+srv://anirudhkala110:Akala@12345@atlascluster.4d6nup2.mongodb.net/yt_clone?retryWrites=true&w=majority';
// Load environment variables
// dotenv.config();
mongoose.connect(mongodbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Set up Sequelize and define UserModel
// const sequelize = new Sequelize({
//     dialect: 'mysql',
//     host: process.env.DATABASE_HOST,
//     database: process.env.DATABASE,
//     username: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASS,
//     logging: false,//This will pause the regular Message on executing the frontend so that backend doesn't get too much busy 
//     /* 
//     Executing (default): SELECT `id`,
//      `userId`, `title`, `description`,
//       `file`, `postedby`, `createdAt`,
//        `updatedAt` FROM `posts` 
//         AS `posts`;
//     This is the messege that is showing every render from the front end and it is too much annoying when you use the useEffect for the re-rendering
//         */
// });

const MongooseAdapter = sequelizeMongoose(mongoose);

const sequelize = new Sequelize({
  dialect: 'mssql',  // The dialect is set to a placeholder (it doesn't matter in this case)
  define: {
    // Sequelize configurations if needed
  },
});

const UserModel = sequelize.define('UserModel', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true
    },
    file: {
        type: DataTypes.STRING,
        allowNull: true
    },
})
sequelize.sync({ force: true }) // This will create the table if it doesn't exist and if exists then delete the old one and then create
    .then(() => {
        console.log('\nUser Tables synchronized\n');
    })
    .catch(error => {
        console.error('\nError synchronizing tables:', error, "\n\n");
    });
export default UserModel
