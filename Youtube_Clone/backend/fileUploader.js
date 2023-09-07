import multer from 'multer'
import path from 'path'
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Public/Files')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-_-" + Date.now() + path.extname(file.originalname))
    }
})

const uploader = multer({
    storage: storage
})

export default uploader