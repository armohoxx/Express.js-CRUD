const models = require("../models/index");

function upload(req, res) {
  try {
    res.status(200).json({
    message: "Upload successfully" 
  })
  } catch (error) {
    res.status(400).json({
      message: error
    })
  }
}

function deleteFile(req, res) {
  try {
    console.log("test")
    const fs = require('fs');
    const filePath = 'files/' + req.body.filename; 
    fs.unlinkSync(filePath);

    res.status(200).json({
    message: "Delete file successfully" 
  })
  } catch (error) {
    res.status(400).json({
      message: "Someting went worng"
    })
  }
}

function create(req, res) {
  const createPhone = {
    phonenumber: req.body.phonenumber,
    owner: req.body.owner,
    status: req.body.status
  }

  models.phone.create(createPhone).then(result => {
    res.status(201).json({
      message: "Phone created successfully",
      phone: result
    });
  }).catch(error => {
    res.status(400).json({
      message: "Something went wrong",
      error: error
    })
  });
}

function index(req, res) {
  models.phone.findAll().then(result => {
    res.status(200).json(result);
  }).catch(error => {
    res.status(400).json({
      message: "Something went worng"
    })
  });
}

function show(req, res){
  const id = req.params.id; 
  
  models.phone.findByPk(id).then(result => {
    res.status(200).json(result);
  }).catch(error => {
    res.status(400).json({
      message: "Something went wrong"
    })
  });
}

function update(req, res) {
  const id = req.params.id;
  const updatePhone = {
    phonenumber: req.body.phonenumber,
    owner: req.body.owner,
    status: req.body.status
  }

  models.phone.update(updatePhone, {where: {id:id}}).then(result => {
    res.status(200).json({
      message: "Phone updated successfully",
      phone: updatePhone
    });
  }).catch(error => {
    res.status(400).json({
      message: "Something went wrong",
      error: error
    })
  });
}

function destroy(req, res) {
  const id = req.params.id;

  models.phone.destroy({where: {id:id}}).then(result => {
    res.status(200).json({
      message: "Phone deleted successfully",
    });
  }).catch(error => {
    res.status(400).json({
      message: "Something went wrong",
      error: error
    })
  });
}

module.exports = {
  create: create,
  index: index,
  show: show,
  update: update,
  destroy: destroy,
  upload: upload,
  deleteFile: deleteFile
}