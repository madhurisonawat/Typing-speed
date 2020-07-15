let login = document.getElementById('log')
login.addEventListener('click',getInfoOfUsers)

let sign= document.getElementById('regis')
sign.addEventListener('click',storeInfo)

function storeInfo(){

    var email = document.getElementById('email').value
    var pass = document.getElementById('pass').value
 
    var arr=[ email,pass]
    console.log(email,pass)
    console.log('hi')
  
   event.preventDefault()
  
    var data = localStorage.getItem("data")
  
  
    var userdata = JSON.parse(data) || []

    for(var i=0;i<userdata.length;i++){
        if(userdata[i][0]==email){
            alert("already registered")
          return false
        }
    }
    var inputuser = document.querySelectorAll('#exampleModal1>input')
  
        for(var i=0;i<inputuser.length;i++){
            if(inputuser[i].value==""){
                alert("All fields are required")
            return false
            }
   
        }
        userdata.push(arr)

    var str = JSON.stringify(userdata)
    localStorage.setItem("data", str)
   
 
    window.location = "home.html"

}

function getInfoOfUsers(){
    var data = localStorage.getItem("data")
    var userData = JSON.parse(data)
   // console.log(userData)
    event.preventDefault()
 
    var email = document.getElementById('email1').value
    var pass = document.getElementById('pass1').value
    for(var i=0;i<userData.length;i++){
        console.log("no")
        if(email==userData[i][0] && pass==userData[i][1]){
          
            //console.log(data[i][0])
            window.location = "index.html"
    
        }
    }
   
}


