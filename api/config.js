module.exports = {
  PRODUCTION: process.env.NODE_ENV === "production",
  AUTH_TOKEN: process.env.AUTH_TOKEN || "Bearer something",
  VAR_WWW: process.env.VAR_WWW || ".var/www"
}
