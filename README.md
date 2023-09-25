# YouTube_Clone_Simple_App

Used ReactJS,NodeJS,Sequilize, and MySQL
cd frontend / cd backend
1- npm install (in both frontend and backend folder)
2- npm start [for frontend]
3+ nodemon [for backend]
also provide a .env file to read the MySQL DataBase 

You need to provide a .env file with following parametes
Please install the MySQL Oracle and create a database named as "yt_clone" then in .env file provide the following in backend folder
DATABASE = yt_clone
DATABASE_HOST = localhost
DATABASE_USER = root
DATABASE_PASS = your_mysql_password
JWT_SECRET_KEY = any_type_of_random_string_will_work_as_secret_key
EXPIRES_IN = 90d
