import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req: any, file: any, cb: any) {
    cb(null, "./uploads");
  },
  filename: function (req: any, file: any, cb: any) {
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    cb(null, file.fieldname + "-" + Date.now() + "." + extension);
  },
});

const fileFilterImg = (req: any, file: any, cb: any) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Image uploaded is not of type jpg/jpeg or png"), false);
  }
};

const fileFilterPDF = (req: any, file: any, cb: any) => {
  if (
    file.mimetype === "application/pdf" ||
    file.mimetype === "application/x-download"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Image uploaded is not of type pdf"), false);
  }
};

export let upload = multer({
  storage: storage,
  fileFilter: fileFilterImg,
  limits: { fileSize: 2 * 1024 * 1024 },
});

export let uploadPDF = multer({
  storage: storage,
  fileFilter: fileFilterPDF,
});
