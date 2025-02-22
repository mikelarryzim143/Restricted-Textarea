function countCharacters(){
    const textarea= document.getElementById("textarea");
    
    const charCount=textarea.value.length;
    document.getElementById("charCounts").innerText=charCount + " /250";
    if (parseInt(charCount)==250){
        document.getElementById("content").className=
        document.getElementById("content").className.replace("", " invalid ");
        document.getElementById("textarea").className=
        document.getElementById("textarea").className.replace("", " invalidd ")
    }

}