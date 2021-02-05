var names=[];
function submit(){
    var display_student=[];
    for(var j=1;j<=5;j++){
        var names_stud=document.getElementById("number"+j).value;
        console.log(names_stud);
        names.push(names_stud);
    }
  var len=names.length;
  console.log(len);
    for(var k=0;k<len;k++){
        display_student.push("<h4>"+names[k]+"</h4>");
        console.log(display_student);
    }
    console.log (names);
    document.getElementById("display_numbers_with_commas").innerHTML=display_student;
    var remove_commas=display_student.join(" ");
    console.log(remove_commas);
    document.getElementById("display_numbers_without_commas").innerHTML=remove_commas;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort_asc").style.display="inline-block";
}
function sort(){
    names.sort(function(a,b){return a-b});
    console.log(names);
    var display_student_sort=[];
    var len=names.length;
  console.log(len);
    for(var k=0;k<len;k++){
        display_student_sort.push("<h4>"+names[k]+"</h4>");
        console.log(display_student_sort);
    }
    console.log (names);
    document.getElementById("display_numbers_with_commas").innerHTML=display_student_sort;
    var remove_commas=display_student_sort.join(" ");
    console.log(remove_commas);
    document.getElementById("display_numbers_without_commas").innerHTML=remove_commas;
}