var names=[];
function submit(){
    var names1=document.getElementById("s1").value;
    var names2=document.getElementById("s2").value;
    var names3=document.getElementById("s3").value;
    var names4=document.getElementById("s4").value;
    names.push(names1);
    names.push(names2);
    names.push(names3);
    names.push(names4);
    document.getElementById("display_name").innerHTML=names;
    document.getElementById("sort").style.display="inline-block";
    document.getElementById("submit").style.display="none";
}
function sorting(){
    names.sort();
    document.getElementById("display_name").innerHTML=names;
}