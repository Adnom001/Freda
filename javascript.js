const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
       signUp = document.querySelector(".signup-link"),
       login = document.querySelector(".login-link"),
      
    //JS CODE TO SHOW/HIDE PASSWORD AND CHANGE ICON 
      pwShowHide.forEach(eyeIcon =>{
          eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";
                    
                    pwShowHide.forEach(icon =>{
                     icon.classList.replace("uil-eye-slash", "uil-eye")
                    })
                }else{
                    pwField.type = "password":
                    
                    
                     pwShowHide.forEach(icon =>{
                    icon.classList.replace("uil-eye", "uil-eye-slash")
                    })
                }
            })  
          })
      })


// JAVASCRIPT CODE TO APPEAR SIGNUP AND LOGIN FORM/
signUp.addEventListener("click", ( )=>{
    container.classList.add("active");
})
login.addEventListener("click", ( )=>{
    container.classList.remove("active");
})
















