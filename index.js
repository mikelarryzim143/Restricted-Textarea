function countCharacters(){
    const textarea= document.getElementById("textarea");
    const cont=document.getElementsById("content");
    const charCount=textarea.value.length;
    document.getElementById("charCounts").innerText=charCount + "/250";

}