// Middleware untuk autentikasi
function isAuthenticated(req, res, next) {
  if (req.session.user) {
    return next();
  }
  res.redirect("/login");
}

// Middleware untuk otorisasi admin
function isAdmin(req, res, next) {
  if (req.session.user && req.session.user.role === "admin") {
    return next();
  }
  res.status(403).send("Forbidden: You do not have access to this resource");
}

module.exports = { isAuthenticated, isAdmin };
