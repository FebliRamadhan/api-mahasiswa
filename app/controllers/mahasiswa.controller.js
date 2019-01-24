const Mahasiswa =  require('../models/mahasiswa.model.js');

exports.create = async(req, res) => {
    
    try {
        let nim = await Mahasiswa.findOne({nim: req.body.nim});
        
        if (nim) {
            return res.status(400).json({
                message: 'Nim is available'
            });
        }

        const mahasiswa = new Mahasiswa({
            nim : req.body.nim,
            nama : req.body.nama,
            alamat : req.body.alamat,
            jk : req.body.jk,
        });
      
      let response = await mahasiswa.save()
      res.send(response)
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occured while creating data mahasiswa."
        });
    }
    
};

exports.findAll = async(req, res) => {
    try {
        let response = await Mahasiswa.find()
        res.send(response)
    } catch (err) {
        res.status(500).send({
            message: err.message || "Something error while retrieving data mahasiswa"
        });
    }
};

exports.findOne = async(req, res) => {
    try {
        let response = await Mahasiswa.findById(req.params.mahasiswaId)
        res.send(response)
    } catch (err) {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Mahasiswa not found with id = "+ req.params.mahasiswaId
            });
        }
        return res.status(500).send({
            message: "Error find mahasiswa with id "+ req.params.mahasiswaId
        });
    }    
};

exports.update = async(req,res) => {
    try {
        let response = await Mahasiswa.findByIdAndUpdate(req.params.mahasiswaId, {
            nim: req.body.nim,
            nama: req.body.nama,
            alamat: req.body.alamat,
            jk: req.body.jk,
        }, {new: true}) ;

        res.send(response)

    } catch (err) {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Mahasiswa not found with id" + req.params.mahasiswaId
            });
        }
        return res.status(500).send({
            message: "Error updating mahasiswa with id"+ req.params.mahasiswaId
        });
    }
}

exports.delete = async(req, res) => {
    try {
        let response = await Mahasiswa.findByIdAndRemove(req.params.mahasiswaId)
        if (response) {
            res.send({
                message: "Mahasiswa with id"+req.params.mahasiswaId+" has been deleted."
            });
        }
    } catch (err) {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Mahasiswa not found with id" + req.params.mahasiswaId
            });
        }
        return res.status(500).send({
            message: "Error updating mahasiswa with id"+ req.params.mahasiswaId
        });
    }
}