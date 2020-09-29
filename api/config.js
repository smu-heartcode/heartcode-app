module.exports = {
  PRODUCTION: process.env.NODE_ENV === "production",
  AUTH_TOKEN: process.env.AUTH_TOKEN || "Bearer something",
  ADMIN_TOKEN: process.env.ADMIN_TOKEN || "Bearer admin",
  VAR_WWW: process.env.VAR_WWW || ".var/www",
  DATABASE_URL: process.env.DATABASE_URL || "postgres://heartcode-app:eye-gas-ewe-put-something-secure-hear@localhost:35432/heartcode-app"
}
