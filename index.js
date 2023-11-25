let currentInput = '0';
var firstNum = '';
var operator;

function updateScreen(res){
    $('.numbers__text__display').text(res);
}

function inputNumber(number) {
    if (currentInput === '0' && number !== '.') {
      currentInput = number;
    } else {
      currentInput += number;
    }
    updateScreen(currentInput);
}

function inputOperator(sign) {
    firstNum = currentInput;
    operator = sign;
    currentInput = '';  
    updateScreen(currentInput);
}

function calculateResult() {
    const secondNum = currentInput;
    try {
        const result = eval(`${firstNum} ${operator} ${secondNum}`); /*Eval used to convert string and evalute js code*/
        currentInput = result.toString();
        updateScreen(result);
    } catch (error) {
        $('.numbers__text__display').text('Error');
    }
}
function deleteNum(){
    currentInput = currentInput.slice(0,-1);
    if(currentInput ===  '')
    {
        currentInput = '0';
    }
    updateScreen(currentInput);
}
function resetAll()
{
    currentInput = '0';
    firstNum = '';
    operator = '';
    updateScreen(currentInput);
}


$(document).ready(function(){

    $('.btn__numbers').on('click', function() {
        var value = $(this).val();
        inputNumber(value);
    });

    $('.delete__btn').on('click',function(){
        deleteNum();
    });

    $('.btn__reset').on('click', function() {
        resetAll();
    });

    $(".operation__btn").on('click',function(){
        operator = $(this).val();
        inputOperator(operator);
    });

    $(".btn__equal").on('click',function(){
        calculateResult();
    });

    //The area of the toggle switch div is calculated and the ball inside it transforms as the use clicks inside the toggle for theme selection

    $(".toggle__switch").on("mousedown",function(e){
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        if(x > 3.00 && x < 15.00) 
        {
            $(".main__container").css({
                'background-color' : 'var(--Very_dark_desaturated_blue_main_background)'  
            });
            $('.calc__head').css({
                'color' : 'var(--White)'
            });
            $(".theme__text").css({
                'color' : 'var(--White)'
            });
            $(".nums__theme").css({
                'color' : 'var(--White)'
            });
            $('.toggle__switch').css({
                'background-color': 'var(--Very_dark_desaturated_blue_toggle_background_keypad_background)'
            });
            $('.ball').css({
                'transition': 'transform 0.3s ease',
                'transform': `translate(0)`, // Adjust for ball size
                'background-color' : 'var(--Red_key_background_toggle)'
            });
            $(".screen__display").css({
                'background-color' : 'var(--Very_dark_desaturated_blue_screen_background)'
            });
            $(".numbers__text__display").css({
                'color': 'var(--White)'
            });
            $(".button__grid__container").css({
                'background-color': 'var(--Very_dark_desaturated_blue_toggle_background_keypad_background)'
            });
            $(".btn__numbers").css({
                'color': 'var(--Veryvdark_grayish_blue)',
                'background-color': 'var(--Light_grayish_orange_key_background)',
                'box-shadow': '0px 5px 5px var(--Grayish_orange_key_shadow)'
            });
            $(".operation__btn").css({
                'background-color': 'var(--Light_grayish_orange_key_background)',
                'box-shadow': '0px 5px 5px var(--Grayish_orange_key_shadow)',
                'color': 'var(--Veryvdark_grayish_blue)'
            });
            $(".delete__btn").css({
                'color': 'var(--White)',
                'background-color': 'var(--Desaturated_dark_blue_key_background)',
                'box-shadow' : '0px 5px 5px var(--Desaturated_dark_blue_key_shadow)'
            });
            $(".btn__reset").css({
                'background-color': 'var(--Desaturated_dark_blue_key_background)',
                'box-shadow': '0px 5px 5px var(--Desaturated_dark_blue_key_shadow)',
                'color': 'var(--White)'
            });
            $(".btn__equal").css({
                'color': 'var(--White)',
                'background-color': 'var(--Red_key_background_toggle)',
                'box-shadow': '0px 5px 5px var(--Dark_red_key_shadow)'
            });

        }else if (x > 15 && x < 34)
        {
            
            $(".main__container").css({
                'background-color' : 'var(--Light_gray_main_background)'  
            });
            $('.calc__head').css({
                'color' : 'var(--Very_dark_grayish_yellow)'
            });
            $(".theme__text").css({
                'color': 'var(--Very_dark_grayish_yellow)'          
            });
            $(".nums__theme").css({
                'color' : 'var(--Very_dark_grayish_yellow)'
            });
            $('.toggle__switch').css({
                'background-color': 'var(--Grayish_red_toggle_background_keypad_background)'
            });
            $('.ball').css({
                'transition': 'transform 0.3s ease',
                'transform': `translate(120%)`, // Adjust for ball size
                'background-color' : '--Orange_key_background_toggle'
            });
            $(".screen__display").css({
                'background-color' : 'var(--Very_light_gray_screen_background)'
            });
            $(".numbers__text__display").css({
                'color': 'var(--Very_dark_grayish_yellow)'
            });
            $(".button__grid__container").css({
                'background-color': 'var(--Grayish_red_toggle_background_keypad_background)'
            });
            $(".btn__numbers").css({
                'color': 'var(--Very_dark_grayish_yellow)',
                'background-color': 'var(--Light_grayish_yellow_key_background)',
                'box-shadow': '0px 5px 5px var(--Dark_grayish_orange_key_shadow)'
            });
            $(".operation__btn").css({
                'color': 'var(--Very_dark_grayish_yellow)',
                'background-color': 'var(--Light_grayish_yellow_key_background)',
                'box-shadow': '0px 5px 5px var(--Dark_grayish_orange_key_shadow)'
            });
            $(".delete__btn").css({
                'color': 'var(--White_text)',
                'background-color': 'var(--Dark_moderate_cyan_key_background)',
                'box-shadow' : '0px 5px 5px var(--Very_dark_cyan_key_shadow)'
            });
            $(".btn__reset").css({
                'background-color': 'var(--Dark_moderate_cyan_key_background)',
                'box-shadow': '0px 5px 5px var(--Very_dark_cyan_key_shadow)',
                'color': 'var(--White_text)'
            });
            $(".btn__equal").css({
                'color': 'var(--White_text)',
                'background-color': 'var(--Orange_key_background_toggle)',
                'box-shadow': '0px 5px 5px var(--Dark_orange_key_shadow)'
            });
        }else if (x > 34){
            
            $('.ball').css({
                'transition': 'transform 0.3s ease',
                'transform': `translate(280%)`, // Adjust for ball size
                'background-color' : 'var(--Pure_cyan_key_background_toggle)'
            });
            $('.main__container').css({
                'background-color' : 'var(--Very_dark_violet_main_background)'
            });
            $('.calc__head').css({
                'color' : 'var(--Light_yellow)'
            });
            $('.nums__theme').css({
                'color' : 'var(--Light_yellow)'
            });
            $('.theme__text').css({
                'color' : 'var(--Light_yellow)'
            });
            $('.toggle__switch').css({
                'background-color' : 'var(--Very_dark_violet_toggle_background_keypad_background_screen_background)'
            });
            $('.screen__display').css({
                'background-color' : 'var(--Very_dark_violet_toggle_background_keypad_background_screen_background)'
            });
            $('.numbers__text__display').css({
                'color' : 'var(--Light_yellow)'
            });
            $('.button__grid__container').css({
                'background-color' : 'var(--Very_dark_violet_toggle_background_keypad_background_screen_background)'
            });
            $('.btn__numbers').css({
                'color': 'var(--Light_yellow)',
                'background-color': 'var(--Very_dark_violet_key_background)',
                'box-shadow': '0px 5px 5px var(--Dark_magenta_key_shadow)'
            });
            $('.delete__btn').css({
                'color': 'var(--White_text)',
                'background-color': 'var(--Dark_violet_key_background)',
                'box-shadow': '0px 5px 5px var(--Vivid_magenta_key_shadow)'
            });
            $('.btn__reset').css({
                'color': 'var(--White_text)',
                'background-color': 'var(--Dark_violet_key_background)',
                'box-shadow': '0px 5px 5px var(--Vivid_magenta_key_shadow)'
            });
            $('.operation__btn').css({
                'color': 'var(--Light_yellow)',
                'background-color': 'var(--Very_dark_violet_key_background)',
                'box-shadow': '0px 5px 5px var(--Dark_magenta_key_shadow)'
            });
            $('.btn__equal').css({
                'color': 'var(--Very_dark_blue)',
                'background-color': 'var(--Pure_cyan_key_background_toggle)',
                'box-shadow': '0px 5px 5px var(--Soft_cyan_key_shadow)'
            });
             
        }
    });
    $(document).on('keypress', function(event) {
        const key = event.key;
    
        if (/[0-9]/.test(key)) {
          inputNumber(key);
        } else if (key === '+' || key === '-' || key === '*' || key === '/') {
          inputOperator(key);
        } else if (key === 'Enter') {
          calculateResult();
        }
    });

    $(document).on('keydown', function(event) {
        if (event.which === 8) {
            deleteNum();
        }
        if(event.which == 46)
        {
            resetAll();
        }
    });


    

});