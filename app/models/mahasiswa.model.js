const mongoose = require('mongoose');

const MahasiswaSchema = mongoose.Schema({
    nim : String,
    nama : String,
    alamat : String,
    jk : String,
},{
    timestamps : true
});

module.exports = mongoose.model('Mahasiswa', MahasiswaSchema);