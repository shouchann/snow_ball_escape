document.getElementById("game_start").style.display = "none"
function check(){
    const input_1 = document.getElementById("input-message");
    const input_value = input_1.value;
    let v_1 = "A";
    if (input_value == v_1){
        document.getElementById("cl_none").style.display = "none";
        document.getElementById("value").innerHTML = "正解！";
        document.getElementById("game_start").style.display = "block"
    }else{
        document.getElementById("value").innerHTML = "不正解...";
      
    }
}

