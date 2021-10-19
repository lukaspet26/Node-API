CREATE DATABASE shopdb;

\l

\c shopdb;

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    description VARCHAR(200),
    price VARCHAR(100)
    image VARCHAR(100)
);

INSERT INTO products(name, description, price) VALUES("TEST", "TEST1", "100", "https://picsum.photos/200/300");

select * from products;