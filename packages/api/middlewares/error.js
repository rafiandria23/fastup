'use strict';

exports.handleError = (err, _, res, ___) => {
  res.status(500).send(err);
};
