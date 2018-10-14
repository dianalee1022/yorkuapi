'use strict';


var mongoose = require('mongoose'),
Scholarship = mongoose.model('Scholarships');

exports.list_all_scholarships = function(req, res) {
    Scholarship.find({}, function(err, scholarship) {
        if (err)
            res.send(err);
        res.json(scholarship);
    });
};

exports.list_all_grad = function(req, res) {
    Scholarship.find({scholarship_type: 'grad'}, function(err, scholarship) {
        if (err)
            res.send(err);
        res.json(scholarship);
    });
};

exports.list_all_undergrad = function(req, res) {
    Scholarship.find({scholarship_type:'undergraduate'}, function(err, scholarship) {
        if (err)
            res.send(err);
        res.json(scholarship);
    });
};

exports.list_undergrad = function(req, res) {
  var sub = req.params;
  if (sub.faculty == 'all' && sub.field == 'all' && sub.timing == 'all')
    list_all_scholarships();
  else if (sub.faculty == 'all' && sub.field == 'all')
    Scholarship.find({timing:req.params.timing}, function(err, scholarship) {
    if(err)
      res.send(err);
    res.json(scholarship);
  });
};


/*
exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {


  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
}; */
