import express from 'express';

const app = express();

app.listen(process.env.PORT || 8080, () =>
  console.log('Server running at port 8080')
);
