import { Router } from 'express';
import * as covidController from './covid.controller';
const routers = new Router();
routers.get('/', covidController.getAllCovidCountry);
export default routers;
