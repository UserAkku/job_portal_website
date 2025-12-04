// backend/utils/datauri.js
import DataUriParser from "datauri/parser.js";
import path from "path";

const getDataUri = (file) => {
  if (!file) {
    throw new Error("getDataUri: file is undefined — multer did not receive any file");
  }
  if (!file.originalname) {
    throw new Error("getDataUri: file.originalname is missing — did the client send multipart/form-data?");
  }
  if (!file.buffer) {
    throw new Error("getDataUri: file.buffer is missing — multer must use memoryStorage()");
  }

  const parser = new DataUriParser();
  const extName = path.extname(file.originalname).toString();
  return parser.format(extName, file.buffer);
};

export default getDataUri;

