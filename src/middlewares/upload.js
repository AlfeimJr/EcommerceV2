const multer = require('multer');
const {v4: gerarNomeAleatorio} = require('uuid');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, path.resolve('public', 'uploads'));
    },
    filename: function (req, file, cb){
        const extensao = file.originalname.split('.').pop();
        const nomeArquivo = `${gerarNomeAleatorio()}.${extensao}`;
        //const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, nomeArquivo);
    },
});

const uploads = multer({ storage: storage});

module.exports = uploads;