import express, { Application} from 'express';
import cors from "cors";
import chalk from "chalk";
import morgan from 'morgan';
import helmet from 'helmet';
import productRoutes from "./routes/productRoutes";
import 'dotenv/config'

export const app: Application = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(productRoutes);

app.listen(process.env.PORT);
console.log(chalk.green.inverse("Server beží na porte 3000"));