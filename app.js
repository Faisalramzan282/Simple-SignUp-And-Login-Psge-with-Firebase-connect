function press(){
    let input1=document.getElementById("Email");
    let input2=document.getElementById("PASS");
   console.log(input1.value);
   console.log(input2.value);
  

   //import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


firebase.auth().createUserWithEmailAndPassword(input1.value,input2.value)
  .then((result) => {
    // Signed in 
    const user = result.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  })
   input1.value="";
   input2.value="";

}


function login(){
    let loginmail=document.getElementById("Email-login");
    let loginPass=document.getElementById("PASS-login");
   console.log(loginmail.value);
   console.log(loginPass.value);

   firebase.auth().signInWithEmailAndPassword(loginmail.value,loginPass.value)
  .then((result) => {
    // Signed in 
    const user = result.user;
    console.log("LOgin Successfully")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Something went wrong")
  })
  loginmail.value="";
  loginPass.value="";
   
}