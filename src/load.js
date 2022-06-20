var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

var book = getUrlParameter('book');
//var path_ans = "ans"+book+".js";

//import {ans_arr} from path_ans;

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#book_id').innerHTML = 'Зошит '+book;
    //document.querySelector('#book_pdf').innerHTML = '<iframe src="src/'+book+'.pdf#view=FitH&scrollbar=0&toolbar=0&statusbar=0&messages=0&navpanes=0" frameborder=0 allowfullscreen  width=100% height=700px></iframe>';
    document.querySelector('#book_pdf').innerHTML = '<embed src="src/'+book+'.pdf#view=FitH&scrollbar=0&toolbar=0&statusbar=0&messages=0&navpanes=0" frameborder=0 allowfullscreen  width=100% height=700px type="application/pdf">';
    return false;
});