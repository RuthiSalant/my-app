


 export async function showTest(id){
  var response=await fetch(`http://localhost:4000/test/${id}`)     
   var res;
   if (response.ok)
   res=response.json();
else
res=null
  return res;
}
