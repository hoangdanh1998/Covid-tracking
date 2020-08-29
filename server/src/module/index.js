import covidRouter from './covid/covid.route';
export default (app) => {
  app.use('/covid', covidRouter);
};
