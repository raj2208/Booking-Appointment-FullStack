let form=document.querySelector("form");

form.addEventListner('submit',(event)=>{
        let userName=event.target.userName.value;
        let email=event.target.email.value;
        let phoneNumber=event.target.phoneNumber.value;
        console.log(userName,email,phoneNumber)
})


function addtoDB(userDetails){
    axios.post("http://localhost:4000/User/create-Product",userDetails
    ).then((res)=>{
        addtoList(userDetails)
    }).catch((res)=>{
    })
}