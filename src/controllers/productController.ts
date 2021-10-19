import { Request, Response } from 'express';
import { pool } from "../db/connection";
import { QueryResult } from 'pg';

export const getAllProducts = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query("SELECT * FROM products");
        return res.status(200).json(response.rows);
    } catch(e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
}


export const getOneProduct = async(req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const response: QueryResult = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
    return res.json(response.rows); 
}

export const createProduct = async (req: Request, res: Response) => {
    const { name, description, price, image } = req.body;
    const response = await pool.query('INSERT INTO users (name, description, price, image) VALUES ($1, $2, $3, $4)', [name, description, price, image]);
    res.json({
        message: 'Product added',
        body: {
            user: { name, description, price, image }
        }
    })
};

export const updateProduct = async(req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { name, description, price, image } = req.body;

    const response = await pool.query('UPDATE products SET name = $1, description = $2, price = $3, WHERE id = $4, WHERE image = $5 ', [
        name,
        description,
        price,
        id,
        image
    ]);
    res.json('Product Updated Successfully');
}

export const deleteProduct = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM products where id = $1', [
        id
    ]);
    res.json(`Product ${id} deleted Successfully`);
};