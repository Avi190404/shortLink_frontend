import jwt from "jsonwebtoken";

const userConfig = (token) => {
    if(!token) return 'SIgnIn first!'

    const secretKey = import.meta.env.VITE_JWT_SECRET
    const decoded = jwt.decode(token, secretKey);
  return decoded;
}

export default userConfig