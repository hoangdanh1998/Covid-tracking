import express from 'express';
import routeConfig from './module/index';
import cors from 'cors';

const app = express();
app.use(cors());
routeConfig(app);

app.listen(process.env.PORT || 8080, () =>
  console.log('Server running at port 8080')
);
