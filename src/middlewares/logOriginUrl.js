
const logOriginUrl = (request, response, next) => {
    console.log(`Адрес, на который пришел запрос: ${request.url}`);
    next();
  };
  
  module.exports = logOriginUrl;
