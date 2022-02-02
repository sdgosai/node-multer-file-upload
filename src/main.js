// set max limit and only jpg and png uploads are allowed *

const express = require("express");
const multer = require('multer');

const main = express();

const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb)
        {
            cb(null, "uploads")
        },
        filename:function(req,file,cb) 
        {
            cb(null, file.fieldname + "-" + Date.now() + ".jpg")
        }
    })
}).single("user_file");

main.post("/upload", upload, (req, res) => {
    res.send("file upload")
})


const port = process.env.PORT || 700;

main.get("/", async (req, res) => {
    res.send("Hello, Welcome in my Book website :)");
})

main.listen(port, () => {
    console.log(`connect this port successfully, no:- ${port}. `);
});