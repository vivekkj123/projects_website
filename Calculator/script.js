function buttonclick(val){

    document.getElementById("scrn").value=document.getElementById("scrn").value+val;
}
function cleardisplay(){
    document.getElementById("scrn").value=""
}
function equalClick(){
    var text=document.getElementById("scrn").value
    var result=eval(text)
    document.getElementById("scrn").value=result
}