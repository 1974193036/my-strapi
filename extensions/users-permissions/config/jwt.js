console.log(process.env.JWT_SECRET)
module.exports = {
  jwtSecret: process.env.JWT_SECRET || '834df5f3-d014-4dbe-ae9b-408e0ab99a1c'
};