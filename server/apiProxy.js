import express from 'express';
import * as wordpressApi from './lib/wordpressApi';

const apiRouter = express.Router();

apiRouter.get('/posts', (req, res) => {
  console.log('api');
  wordpressApi
    .getPosts()
    .then(({ data }) => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
    });
});

apiRouter.get('/tracks', (req, res) => {
  wordpressApi
    .getTracks()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
    });
});

apiRouter.get('/partners', (req, res) => {
  wordpressApi
    .getPartners(req.query.year)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
    });
});

export default apiRouter;
