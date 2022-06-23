import someName from "count_data.json";
const word = data.name;
console.log(word); // output 'testing'


document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('form').onsubmit = () => {
                             
        document.querySelector('#website-counter').innerHTML = '<p>Відвідувач: '+point+'</p>';
               


        // Stop form from submiting

        return false;


    }

});
  
  

