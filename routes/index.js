const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  console.log("needs parameters")
  res.status(404).end();
});

module.exports = router;