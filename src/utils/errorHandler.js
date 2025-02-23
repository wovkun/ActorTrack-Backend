const handleInternalServerError = (
  res,
  err,
  message = 'Server Error',
  statusCode = 500
) => {
  console.error(err);
  res.status(statusCode).json({ message, error: err });
};

module.exports = handleInternalServerError;
