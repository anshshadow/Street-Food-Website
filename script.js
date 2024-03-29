const formValidation=()=>{
    let x = document.forms["myForm"]
    var regEmail=/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/
    var regMobile=/^(\+\d{1,3}[- ]?)?\d{10}$/
    if (!(regEmail.test(x[1].value))){
        alert("Enter Valid Email Address!!!")
    }
    else if(!(regMobile.test(x[2].value))){
        alert("Enter Valid Mobile Number!!!")
    }
    else if(x[3].value<=0){
        alert("Enter Valid Quantity!!!")
    }else{
        alert("Order Placed Successfully")
    }
}