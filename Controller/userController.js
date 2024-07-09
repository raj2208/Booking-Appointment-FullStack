const User=require('../Model/User')

exports.addAppoitment=(req,res)=>{
    User.create(req.body).then((result)=>{
        res.json(result)
    })
}
exports.getAllAppointment=(req,res)=>{
    User.findAll().then(users => {
        res.json(users);
  })
  .catch(err => {
    console.error('Error fetching users:', err);
  });
}
exports.delete=(req,res)=>{
  let id=req.params.id;
    User.destroy({
        where: {
          id: id
        }
      })
      .then(numDeleted => {
        if (numDeleted === 1) {
          res.json('Record deleted successfully.');
        } else {
          res.json('Record not found or not deleted.');
        }
      })
      .catch(err => {
        console.error('Error deleting record:', err);
      });
}
exports.update=(req,res)=>{
  User.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(numUpdated =>{
      res.json(User.findByPk(req.params.id))
  })
  .catch(err => {
    console.error('Error updating record:', err);
  });
}