    const mahasiswa = require('../controllers/mahasiswa.controller.js');
    const {check, validationResult} = require('express-validator/check');

module.exports = (app) => {

    app.post('/mahasiswas', [
        check('nim').not().isEmpty().trim().escape(),
        check('nama').not().isEmpty().trim().escape(),
        check('alamat').not().isEmpty().trim().escape(),
        check('jk').not().isEmpty().trim().escape()    
    ], (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array()})
        }

        return mahasiswa.create(req, res);
    });
    
    app.get('/mahasiswas', mahasiswa.findAll);

    app.get('/mahasiswas/:mahasiswaId',mahasiswa.findOne);

    app.put('/mahasiswas/:mahasiswaId', [
        check('nim').not().isEmpty().trim().escape(),
        check('nama').not().isEmpty().trim().escape(),
        check('alamat').not().isEmpty().trim().escape(),
        check('jk').not().isEmpty().trim().escape()    
    ], (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array()})
        }

        return mahasiswa.update(req, res)
    });

    app.delete('/mahasiswas/:mahasiswaId', mahasiswa.delete);

}