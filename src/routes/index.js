// Router module
const { Router } = require('express');
const router = Router();

// routes
router.get('/', (req, res)=> {
 res.send('demo api');
});

// export
module.exports = router;
