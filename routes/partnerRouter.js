const express = require('express');
const partnerRouter = express.Router();

partnerRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res) => {
    res.end('Will send all partners to you');
  })
  .post((req, res) => {
    res.end(
      `Will add the partner ${req.body.name} with description ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation no supported on /partners');
  })
  .delete((req, res) => {
    res.end('Deleting all partners');
  });

partnerRouter
  .route('/:partnerId')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res) => {
    res.end(`Will send info for partner ${req.params.partnerId}`);
  })
  .post((req, res) => {
    res.end(
      `Will add partner.. id: ${req.params.partnerId}, name: ${req.body.name}, description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation no supported on /partners');
  })
  .delete((req, res) => {
    res.end(`Deleting partner ${req.params.partnerId}`);
  });

module.exports = partnerRouter;
