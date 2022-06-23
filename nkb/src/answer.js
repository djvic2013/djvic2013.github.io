var point = 0;
var mark12 = 0;
var mark100200 = 0;
var ans_arr = ans_arr[1]

//Функція перевірки тестів
    
function checkTest(object, answer) {
    const num = ans_arr[answer]-1;
    if (document.getElementsByName(object)[num].checked == true) {
        document.getElementsByName(object)[ans_arr[answer]-1].setAttribute("class", "green");
        point++;
    } else {
        //Правильна віповідь зеленим; де є помилка - червоним правильний.
        //document.getElementsByName(object)[ans_arr[answer]-1].checked = true;
        //document.getElementsByName(object)[ans_arr[answer]-1].setAttribute("class", "red");

        //Правильна віповідь зеленим, неправильна - червоним. 
        //document.getElementsByName(object)[num].checked != true;
        //document.getElementsByName(object)[num].setAttribute("class", "red");

        //document.getElementsByName(object)[ans_arr[answer]-1].setAttribute("class", "red")
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

    document.querySelector('form').onsubmit = () => {
                     
        //Перевірка тестів 1-15
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
        checkTest('z15', 'ans-15');
        
        //Перевірка відповідностей 16-20
        checkTest('z16-1', 'ans-16-1');
        checkTest('z16-2', 'ans-16-2');
        checkTest('z16-3', 'ans-16-3');
        checkTest('z16-4', 'ans-16-4');
        
        checkTest('z17-1', 'ans-17-1');
        checkTest('z17-2', 'ans-17-2');
        checkTest('z17-3', 'ans-17-3');
        checkTest('z17-4', 'ans-17-4');
        
        checkTest('z18-1', 'ans-18-1');
        checkTest('z18-2', 'ans-18-2');
        checkTest('z18-3', 'ans-18-3');
        checkTest('z18-4', 'ans-18-4');
        
        checkTest('z19-1', 'ans-19-1');
        checkTest('z19-2', 'ans-19-2');
        checkTest('z19-3', 'ans-19-3');
        checkTest('z19-4', 'ans-19-4');
        
        checkTest('z20-1', 'ans-20-1');
        checkTest('z20-2', 'ans-20-2');
        checkTest('z20-3', 'ans-20-3');
        checkTest('z20-4', 'ans-20-4');
        
        document.querySelector('#submit').setAttribute("class", "none");

        document.querySelector('#answertext').innerHTML = '<p>Набрано балів: '+point+' з 35.</p>';
        
        
        readonlyForm();      
        


        // Stop form from submiting

        return false;


    }

});
  
  

