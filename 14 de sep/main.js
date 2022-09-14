const onSubmit = () => {

const age = Number( document.getElementById("age").value)
let height = Number( document.getElementById("height").value)
let allowed = Boolean( document.getElementById("allowed").value) 

   
   
    if (age >=18) {
    document.write("si puede ingresar")
    
    
   } else if (age >=16 && age < 18 && height >=1.70){
       document.write("si puede ingresar")

   } else if(age==15  && allowed ==true){
    document.write("si puede ingresar")
   } else {
    document.write("no puede ingresar")
   }
    
   
    
 }
