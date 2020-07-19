// Router module
const { Router } = require('express');
const router = Router();

// routes
router.get('/', (req, res)=> {
 res.json('Datas')
});

router.post('/register', (req, res) => {
    res.json({"reuslt": 'new user add'});
});

// exportar
module.exports = router;
