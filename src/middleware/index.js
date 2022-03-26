const headers = require('../config/headers')
const httpStatus = require('../config/httpStatus')

function middleware(req, res, body, handlers) {
  req.body = body

  res.status = (httpStatusCode) => {
    res.writeHead(httpStatusCode, headers)
    return res
  }

  res.json = (obj) => {
    res.write(JSON.stringify(obj))
    res.end()
  }

  res.sendStatus = (httpStatusCode) => {
    res.status(httpStatusCode).end()
  }

  try {
    handlers(req, res)
  } catch (e) {
    res.status(httpStatus.BAD_REQUEST).json({ status: 'false', message: e })
  }
}

module.exports = middleware
