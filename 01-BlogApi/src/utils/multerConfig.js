import multer from 'multer';
import path from 'path';

//set storage engine
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

//initialize upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
}).single("image");

//check file type
const checkFileType = (file, cb) => {
  //allowed extensions
  const filetypes = /jpeg|jpg|png|gif/;
  //check extension
  const extname = filetypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  //check mimetype
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
};

export default upload;
