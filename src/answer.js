var point = 0;
var mark12 = 0;
var mark100200 = 0;
var ans_arr = ans_arr[book]

//Функція перевірки тестів
    
function checkTest(object, answer) {
    const num = ans_arr[answer]-1;
    if (document.getElementsByName(object)[num].checked == true) {
        document.getElementsByName(object)[ans_arr[answer]-1].setAttribute("class", "green");
        point++;
    } else {
        document.getElementsByName(object)[ans_arr[answer]-1].checked = true;
        document.getElementsByName(object)[ans_arr[answer]-1].setAttribute("class", "red");
    } 
}


//Функція перетворення відповіді 19-20 в масив з 7 елементів
function convertNumToArray(enterNum) {
    var chars = [];
    var charBegin = [];
    var charEnd = [];

    if (enterNum.toString().indexOf('.') != null) {
        chars = enterNum.toString().split('.');
        charBegin = chars[0].toString().split('');
        if (typeof(chars[1]) == 'undefined') {
            charEnd = [''];
        } else {
            charEnd = chars[1].toString().split('');
        }
    } else {
        charBegin = enterNum.toString().split('');
    }
    //Додаємо елементи на початок масиву
    while (charBegin.length < 4) {
        charBegin.unshift('');
    }
    //Додаємо елементи до кінця масиву
    while (charEnd.length < 3) {
        charEnd.push('');
    }
    chars = charBegin.concat(charEnd);    
    return chars;
}

//Перевірка двох масивів
function compare(a1, a2) {
    return a1.length == a2.length && a1.every((v,i)=>v === a2[i])
}

//Функція перевірки завдань 19-20
function checkNumeric(theObject1, theObject2, theObject3, theObject4, theObject5, theObject6, theObject7, answer) {
    var answerUserArray = [];
    var answerTrueArray = [];
    
    //Правильна відповідь -> масив
    answerTrueArray = convertNumToArray(answer);
    
    //Введена відповідь -> масив
    answerUserArray = [document.getElementById(theObject1).value.toString(), document.getElementById(theObject2).value.toString(), document.getElementById(theObject3).value.toString(), document.getElementById(theObject4).value.toString(), document.getElementById(theObject5).value.toString(), document.getElementById(theObject6).value.toString(), document.getElementById(theObject7).value.toString()];

    
    
    if (compare(answerUserArray, answerTrueArray) == true) {
        point += 2;        
        document.getElementById(theObject1).setAttribute("class", "textgreen");
        document.getElementById(theObject2).setAttribute("class", "textgreen");
        document.getElementById(theObject3).setAttribute("class", "textgreen");
        document.getElementById(theObject4).setAttribute("class", "textgreen");
        document.getElementById(theObject5).setAttribute("class", "textgreen");
        document.getElementById(theObject6).setAttribute("class", "textgreen");
        document.getElementById(theObject7).setAttribute("class", "textgreen");
    } else {
        document.getElementById(theObject1).setAttribute("class", "textred");
        document.getElementById(theObject1).value = answerTrueArray[0];
        document.getElementById(theObject2).setAttribute("class", "textred");
        document.getElementById(theObject2).value = answerTrueArray[1];
        document.getElementById(theObject3).setAttribute("class", "textred");
        document.getElementById(theObject3).value = answerTrueArray[2];
        document.getElementById(theObject4).setAttribute("class", "textred");
        document.getElementById(theObject4).value = answerTrueArray[3];
        document.getElementById(theObject5).setAttribute("class", "textred");
        document.getElementById(theObject5).value = answerTrueArray[4];
        document.getElementById(theObject6).setAttribute("class", "textred");
        document.getElementById(theObject6).value = answerTrueArray[5];
        document.getElementById(theObject7).setAttribute("class", "textred");
        document.getElementById(theObject7).value = answerTrueArray[6];
    }
}


//Блокуємо форму
function readonlyForm() {
    var inputs, index;
    inputs = document.getElementsByTagName('input');
    for (index = 0; index < inputs.length; ++index) {
        inputs[index].disabled = true;
    }

}


document.addEventListener('DOMContentLoaded', function() {

    //By default, submit button is dissabled
    //document.querySelector('#submit').disabled = true;

    document.querySelector('form').onsubmit = () => {

                      
        //Перевірка тестів 1-14
        checkTest('z1', 'ans-1');
        checkTest('z2', 'ans-2');
        checkTest('z3', 'ans-3');
        checkTest('z4', 'ans-4');
        checkTest('z5', 'ans-5');
        checkTest('z6', 'ans-6');
        checkTest('z7', 'ans-7');
        checkTest('z8', 'ans-8');
        checkTest('z9', 'ans-9');
        checkTest('z10', 'ans-10');
        checkTest('z11', 'ans-11');
        checkTest('z12', 'ans-12');
        checkTest('z13', 'ans-13');
        checkTest('z14', 'ans-14');
        
        //Перевірка відповідностей 15-18
        checkTest('z15-1', 'ans-15-1');
        checkTest('z15-2', 'ans-15-2');
        checkTest('z15-3', 'ans-15-3');
        
        checkTest('z16-1', 'ans-16-1');
        checkTest('z16-2', 'ans-16-2');
        checkTest('z16-3', 'ans-16-3');
        
        checkTest('z17-1', 'ans-17-1');
        checkTest('z17-2', 'ans-17-2');
        checkTest('z17-3', 'ans-17-3');
        
        checkTest('z18-1', 'ans-18-1');
        checkTest('z18-2', 'ans-18-2');
        checkTest('z18-3', 'ans-18-3');

        //Перевірка числових значень
        checkNumeric('z19-1', 'z19-2', 'z19-3', 'z19-4', 'z19-5', 'z19-6', 'z19-7', ans_arr['ans-19']);
        checkNumeric('z20-1', 'z20-2', 'z20-3', 'z20-4', 'z20-5', 'z20-6', 'z20-7', ans_arr['ans-20']);
    
        //point = Math.round(100*(1+point/30));

    
          
        //Значення за 12-бальною шкалою
        //if (point >= 100 && point <= 105) mark12 = 1;
        //if (point >= 106 && point <= 110) mark12 = 2;
        //if (point >= 111 && point <= 115) mark12 = 3;
        //if (point >= 116 && point <= 125) mark12 = 4;
        //if (point >= 126 && point <= 135) mark12 = 5;
        //if (point >= 136 && point <= 145) mark12 = 6;
        //if (point >= 146 && point <= 152) mark12 = 7;
        //if (point >= 153 && point <= 162) mark12 = 8;
        //if (point >= 163 && point <= 172) mark12 = 9;
        //if (point >= 173 && point <= 182) mark12 = 10;
        //if (point >= 183 && point <= 192) mark12 = 11;
        //if (point >= 193 && point <= 200) mark12 = 12;

        //Значення за шкалою 100-200
        if (point == 0) mark100200 = 0;
        if (point == 1) mark100200 = 100;
        if (point == 2) mark100200 = 110;
        if (point == 3) mark100200 = 118;
        if (point == 4) mark100200 = 125;
        if (point == 5) mark100200 = 128;
        if (point == 6) mark100200 = 131;
        if (point == 7) mark100200 = 134;
        if (point == 8) mark100200 = 136;
        if (point == 9) mark100200 = 138;
        if (point == 10) mark100200 = 140;
        if (point == 11) mark100200 = 142;
        if (point == 12) mark100200 = 144;
        if (point == 13) mark100200 = 146;
        if (point == 14) mark100200 = 148;
        if (point == 15) mark100200 = 149;
        if (point == 16) mark100200 = 150;
        if (point == 17) mark100200 = 151;
        if (point == 18) mark100200 = 152;
        if (point == 19) mark100200 = 154;
        if (point == 20) mark100200 = 156;
        if (point == 21) mark100200 = 159;
        if (point == 22) mark100200 = 162;
        if (point == 23) mark100200 = 165;
        if (point == 24) mark100200 = 168;
        if (point == 25) mark100200 = 172;
        if (point == 26) mark100200 = 176;
        if (point == 27) mark100200 = 180;
        if (point == 28) mark100200 = 185;
        if (point == 29) mark100200 = 192;
        if (point == 30) mark100200 = 200;
    

        document.querySelector('#submit').setAttribute("class", "none");

        document.querySelector('#answertext').innerHTML = '<p>Тестовий бал: '+point+'</p><p>Бал за шкалою 100-200: '+mark100200+'</p>';
        
        
        readonlyForm();
        


        // Stop form from submiting

        return false;


    }

});
  
  

