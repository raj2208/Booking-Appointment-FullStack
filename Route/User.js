const express=require('express')

const router=express.Router();

const userController=require('../Controller/userController')

router.post('/create-Product',userController.addAppoitment)

router.get('/get-all-appointment',userController.getAllAppointment)

router.delete('/delete/:id',userController.delete);

router.put('/update/:id',userController.update)



module.exports=router;