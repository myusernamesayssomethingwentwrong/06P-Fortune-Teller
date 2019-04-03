
    // 1. Extract the text from the inputs
    $("button").click(function(){
    var name = $(".name").val();
});    
    // 2. Use the input text to build the fortune to display.
$("button").click(function(){
    var myAnswer = name;
    $(".answer").text(myAnswer);
    
    // 3. Clear the old text from the inputs.
    $(".something").val("");
});