import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

const {parsed: config} = dotenv.config()

export const checkAuthenticated = (req, res, next) => {
	var token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, config.SECRET, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    next()
  });
}
