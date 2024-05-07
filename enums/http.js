const HttpStatus = Object.freeze({
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
});

const HttpResponseMessage = Object.freeze({
 SUCCESS: 'success',
 CREATED: 'created',
  BAD_REQUEST: 'bad request',
  UNAUTHORIZED: 'unauthorized',
  FORBIDDEN: 'forbidden',
  NOT_FOUND: 'not found',
  SERVER_ERROR: 'internal server error',
});

module.exports = { HttpStatus, HttpResponseMessage };