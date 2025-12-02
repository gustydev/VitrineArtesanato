CREATE TABLE users (
id SERIAL PRIMARY KEY,
name VARCHAR(100) ,
email VARCHAR(100)
);
CREATE TABLE products (
id SERIAL PRIMARY KEY,
title VARCHAR(100) ,
price DECIMAL(10, 2),
3
image_url TEXT ,
artisan_name VARCHAR(100)
);