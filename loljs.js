function sigFarvel(){
 var fornavn= document.test.fornavn.value;
 var efternavn= document.test.efternavn.value;
 document.getElementById("kommentar2").innerHTML="Hej "+fornavn+" "+efternavn;
}
function slet(){
 document.test.fornavn.value=null
 document.test.efternavn.value=null
 document.test.kommentar.value=null
}