const express = require('express');
const router = express.Router();

router.get('/', function (req,res,next) {
  console.log("hola ruta raíz");
  let obj = {
    title: "HomePage"
  };
  res.render('index', obj);
});

module.exports = router ;
