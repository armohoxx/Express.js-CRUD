const express = require('express');
const router = express.Router();
const callBlockingController = require('../controller/callBlockingController')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'files/')
    },
    filename: (req, file, cb) => {
        cb(null, 'file-' + Date.now() + '.' +
        file.originalname.split('.')[file.originalname.split('.').length-1])}
})
const upload = multer({ storage: storage })

/* GET users listing. */
router.post('/', callBlockingController.create);
router.get('/', callBlockingController.index);
router.get('/:id', callBlockingController.show);
router.patch('/:id', callBlockingController.update);
router.delete('/:id', callBlockingController.destroy);
router.post('/upload', upload.single('fileupload'), callBlockingController.upload);
router.post('/delete', callBlockingController.deleteFile);

module.exports = router;
