$(document).ready(function(){
    var i=0;
    $(".cuadro").click(function(){
        if(i===0){
        $(this).html("X");
        i++;
        }
        else{
         $(this).html("O");  
         i--;
        }
    });

    $(".b1").click(function(){
        $(".cuadro").html("");
        i=0;
    });
});