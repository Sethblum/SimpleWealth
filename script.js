window.onload = function() {
    document.getElementById("play").style.display = "flex";
};

var answers = new Array();

function collect(answer){
    //question $ option $ next_q $ prompt
    var answer = answer.split("$");
    var question = answer[0];
    var option = answer[1];
    var next = answer[2];
    if (next == "about"){
        $('.sb-1').addClass('active');
        setTimeout(function(){
            $('.sb-2').addClass('active');
        },700);
        setTimeout(function(){
            $('.sb-3').addClass('active');
        },1400);
    }
    answers.push(question + " chose- " +option+ next);
    console.log(answers);
    document.getElementById(question).style.display = "none";
    document.getElementById(next).style.display = "flex";
}
