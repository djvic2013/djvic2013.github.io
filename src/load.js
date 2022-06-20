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


const book = getUrlParameter('book');
//var path_ans = "ans"+book+".js";

//import {ans_arr} from path_ans;

document.addEventListener('DOMContentLoaded', function() {

    window.addEventListener("resize", function() {
        const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var screen_width = '';
        if (width > 1200) {
            screen_width = '1200';
        } else {
            screen_width = '100%';
        }
        document.querySelector('#book_pdf').innerHTML = '<iframe id="iframe_pdf" src="src/'+book+'.pdf#view=FitH&scrollbar=0&toolbar=0&statusbar=0&messages=0&navpanes=0" frameborder=0 allowfullscreen  width='+screen_width+' height=700px></iframe>';
    });

    window.addEventListener("load", function() {
        const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var screen_width = '';
        if (width > 1200) {
            screen_width = '1200';
        } else {
            screen_width = '100%';
        }
        document.querySelector('#book_pdf').innerHTML = '<iframe id="iframe_pdf" src="src/'+book+'.pdf#view=FitH&scrollbar=0&toolbar=0&statusbar=0&messages=0&navpanes=0" frameborder=0 allowfullscreen  width='+screen_width+' height=700px></iframe>';
    });

    
    
    document.querySelector('#book_id').innerHTML = 'Зошит '+book;
    //document.querySelector('#book_pdf').innerHTML = '<iframe id="iframe_pdf" src="src/'+book+'.pdf#view=FitH&scrollbar=0&toolbar=0&statusbar=0&messages=0&navpanes=0" frameborder=0 allowfullscreen  width='+screen_width+' height=700px></iframe>';
    //document.querySelector('#book_pdf').innerHTML = '<embed src="src/'+book+'.pdf#view=FitH&scrollbar=0&toolbar=0&statusbar=0&messages=0&navpanes=0&scrollbar=0" border=0 wmode="transparent"  width=1200 height=700px type="application/pdf" x-gbp-uri="">';

    return false;
});