export const handleSuccessResponse = (
  metaData = null,
  message = 'Lấy dữ liệu thành công',
  statusCode = 200,
  docs = 'https://production-cyber.com/api',
) => {
  return {
    status: `success`,
    message, //object literal
    statusCode,
    docs,
    metaData,
  };
};

export const handleErrorResponse = (
  message = 'Internal Server Error',
  statusCode = 500,
  stack = null,
) => {
  return {
    message,
    statusCode,
    stack,
  };
};
