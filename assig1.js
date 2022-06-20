
function First(param){
    console.log(typeof param);
    return "Hiii " + param()
  }
   
    function Second(){
     return "How are you"
    }

   const answer= First(Second)
   console.log(answer)