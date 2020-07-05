import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import { buildSchema } from 'graphql';
import 'dotenv/config.js';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';
import { PORT, URL } from './config/config';

const app: express.Application = express();

mongoose
	.connect(URL, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('DB connected'))
	.catch((err: any) => console.error(err));

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

const schema = buildSchema(`
	type Hello {
		_id: ID
	}
`);
app.use(
	'/graphql',
	graphqlHTTP({
		schema: schema,
		rootValue: '',
		graphiql: process.env.NODE_ENV === 'development',
	})
);

app.listen(PORT, () => {
	console.log(`Server is up and running on PORT ${PORT}`);
});
