// ASSIGNING ALL CLICKABLE DIV TAG TO A VAL
const _0 = document.querySelector(".num_zero"); 
const _1 = document.querySelector(".num_one"); 
const _2 = document.querySelector(".num_two"); 
const _3 = document.querySelector(".num_three"); 
const _4 = document.querySelector(".num_four"); 
const _5 = document.querySelector(".num_five"); 
const _6 = document.querySelector(".num_six"); 
const _7 = document.querySelector(".num_seven"); 
const _8 = document.querySelector(".num_eight");
// ASSIGNING ALL DIV OR TXT TAG TO A VAL
let identify = document.querySelector('.identify');
let who_win = document.querySelector('.who_win');
let restart_btn = document.querySelector('#restart_btn');
let play_again = document.querySelector('#play_again');
let pop_up_container = document.querySelector('.pop_up_container');
// FOR DISPLAYING THE SCORE OF EACH PLAYER
let x_score = document.querySelector('.x_score');
let o_score = document.querySelector('.o_score');
// INCREMENTING PLAYER X SCORE
let x = 0;
function increment_x() {
    x_score.innerText = ++x;
}
// INCREMENTING PLAYER O SCORE
let o = 0;
function increment_o() {
    o_score.innerText = ++o;
}
// MAKING A INCREMENT FUNTION FOR A ODD & EVEN NUM
let v = 0;
function increment_count() {
    v = ++v;
}
// THIS FUNCTION ENABLE U TO KNOW WHO WON OR LOSS
setInterval(function(){
    //
    if(_0.innerText != "" && _1.innerText != "" && _2.innerText != "" && _3.innerText != "" && _4.innerText != "" && _5.innerText != "" && _6.innerText != "" && _7.innerText != "" && _8.innerText != ""){
        who_win.innerText = "Nobody Won";
        pop_up_container.style.display = "flex";
    }
});
// HADILLING WHO WON THE GAME
setInterval(function(){
    // FOR X WINING
    if(_0.innerText == "x" && _1.innerText == "x" && _2.innerText == "x" || 
       _3.innerText == "x" && _4.innerText == "x" && _5.innerText == "x" ||
       _6.innerText == "x" && _7.innerText == "x" && _8.innerText == "x"){
        who_win.innerText = "Player X Won";
        show_pop_up_conn();
    }
    else if(_0.innerText == "x" && _3.innerText == "x" && _6.innerText == "x" || 
            _1.innerText == "x" && _4.innerText == "x" && _7.innerText == "x" ||
            _2.innerText == "x" && _5.innerText == "x" && _8.innerText == "x"){
        who_win.innerText = "Player X Won";
        show_pop_up_conn();
    }
    else if(_0.innerText == "x" && _4.innerText == "x" && _8.innerText == "x" || 
            _2.innerText == "x" && _4.innerText == "x" && _6.innerText == "x"){
        who_win.innerText = "Player X Won";
        show_pop_up_conn();
    }
    // FOR O WINING
    else if(_0.innerText == "o" && _1.innerText == "o" && _2.innerText == "o" || 
            _3.innerText == "o" && _4.innerText == "o" && _5.innerText == "o" ||
            _6.innerText == "o" && _7.innerText == "o" && _8.innerText == "o"){
        who_win.innerText = "Player O Won";
        show_pop_up_conn();
    }
    else if(_0.innerText == "o" && _3.innerText == "o" && _6.innerText == "o" || 
            _1.innerText == "o" && _4.innerText == "o" && _7.innerText == "o" ||
            _2.innerText == "o" && _5.innerText == "o" && _8.innerText == "o"){
        who_win.innerText = "Player O Won";
        show_pop_up_conn();
    }
    else if(_0.innerText == "o" && _4.innerText == "o" && _8.innerText == "o" || 
            _2.innerText == "o" && _4.innerText == "o" && _6.innerText == "o"){
        who_win.innerText = "Player O Won";
        show_pop_up_conn();
    }
});
//
function show_pop_up_conn(){
    pop_up_container.style.display = "flex";
}
// THIS FUNCTION CLEAR ALL DIV TXT
function reset_game(){
    _0.innerText = "";
    _1.innerText = "";
    _2.innerText = "";
    _3.innerText = "";
    _4.innerText = "";
    _5.innerText = "";
    _6.innerText = "";
    _7.innerText = "";
    _8.innerText = "";
}
// START GAME AGAIN WHEN THIS BTN IS CLICK
play_again.onclick = ()=>{
    reset_game();
    pop_up_container.style.display = "none";
    if (who_win.innerText == "Player X Won") {
        increment_x()
    }
    else if(who_win.innerText == "Player O Won"){
        increment_o()
    }
}
// START GAME AGAIN WHEN THIS BTN IS CLICK
restart_btn.onclick = ()=>{
    reset_game();
}
// ENABILING A ONCLICK EVENT FOR EACH DIV
let num = document.querySelectorAll('.num');
for (var i = 0; i < num.length; i++) {
    num[i].onclick = function(){
        if(this.innerText != ''){
            alert("You Can't Play There");
        }
        else if(v % 2 === 0) {
            this.innerText = 'x';
            increment_count();
            identify.innerText = "o";
        }
        else{
            this.innerText = 'o';
            increment_count();
            identify.innerText = "x";
        }
    }
}