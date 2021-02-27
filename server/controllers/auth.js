import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

const { parsed: config } = dotenv.config()

export default {
  login: function (req, res) {
		var token = jwt.sign(config.SECRET, config.SECRET)
		res.status(200).send({ token });
  },
}
