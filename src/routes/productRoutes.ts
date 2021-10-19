import {Router} from 'express';
const router = Router();
import { getAllProducts, getOneProduct, createProduct, updateProduct, deleteProduct } from '../controllers/productController';

router.get("/products", getAllProducts);
router.get("/product/:id", getOneProduct);
router.post("/products", createProduct);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

export default router;