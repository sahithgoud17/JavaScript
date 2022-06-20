


function getData(uId,callback) {

   setTimeout(() =>{
   console.log("Fetched the data!");
       email = "skc@gmail.com";
       callback();
    } , 2000);

   
   }


    var email='';
    console.log("start");
   getData("skc",getDetails)

   function getDetails(){
       
       console.log("Email id of the user id is: "+email)

       console.log("end");
   }
