function google_pdf(book, screen_width) {

    if (book==1) {return '<iframe src="https://drive.google.com/file/d/1QswY6ppQNa00688c0Y0oQJH1lRxIJuxE/preview" width="'+screen_width+'" height="480" allow="autoplay" style="background-color: #7e8392;"></iframe>'}
    if (book==2) {return '<iframe src="https://drive.google.com/file/d/1LJzDasqjjFKRiFp3f13ztjrBJesJsEON/preview" width="'+screen_width+'" height="480" allow="autoplay" style="background-color: #7e8392;"></iframe>'}
    if (book==3) {return '<iframe src="https://drive.google.com/file/d/1Ga809q7pcfGAdgEIdegIGFD5hM_MOKck/preview" width="'+screen_width+'" height="480" allow="autoplay" style="background-color: #7e8392;"></iframe>'}
    if (book==4) {return '<iframe src="https://drive.google.com/file/d/1jzg0TM_-Sap4cHJ9cLsvf6v0Og340Ten/preview" width="'+screen_width+'" height="480" allow="autoplay" style="background-color: #7e8392;"></iframe>'}
    if (book==5) {return '<iframe src="https://drive.google.com/file/d/1Mo2TqFBaq5aa3Va1EAzumsJbfHSW2CtM/preview" width="'+screen_width+'" height="480" allow="autoplay" style="background-color: #7e8392;"></iframe>'}
    if (book==6) {return '<iframe src="https://drive.google.com/file/d/1FKYk4mJ2GimieKGmQeC1sw4E6FrZT6_2/preview" width="'+screen_width+'" height="480" allow="autoplay" style="background-color: #7e8392;"></iframe>'}
    if (book==7) {return '<iframe src="https://drive.google.com/file/d/1Zk7xA874F26_o-LDfJXY75IX0Jmgsdzu/preview" width="'+screen_width+'" height="480" allow="autoplay" style="background-color: #7e8392;"></iframe>'}
    if (book==8) {return '<iframe src="https://drive.google.com/file/d/1kJke0sTjM3fz85GP5xJCD-SvOPQBPsk7/preview" width="'+screen_width+'" height="480" allow="autoplay" style="background-color: #7e8392;"></iframe>'}
    if (book==9) {return '<iframe src="https://drive.google.com/file/d/1k9W3FVpnSTAh0IhIlsyFkESO1LD38lVw/preview" width="'+screen_width+'" height="480" allow="autoplay" style="background-color: #7e8392;"></iframe>'}
    if (book==10) {return '<iframe src="https://drive.google.com/file/d/1RFxtZqatY2UabiqeuOLPIBwGuHUzED2c/preview" width="'+screen_width+'" height="480" allow="autoplay" style="background-color: #7e8392;"></iframe>'}
    if (book==11) {return '<iframe src="https://drive.google.com/file/d/1cMuWBmqnujCY9_vv-PcQ2Ijq7Zj_wBI0/preview" width="'+screen_width+'" height="480" allow="autoplay" style="background-color: #7e8392;"></iframe>'}
    if (book==12) {return '<iframe src="https://drive.google.com/file/d/1o98KRxjuqM9bFIrnipaOlRooLjJVFw1-/preview" width="'+screen_width+'" height="480" allow="autoplay" style="background-color: #7e8392;"></iframe>'}
    
}

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

document.addEventListener('DOMContentLoaded', function() {

    window.addEventListener("resize", function() {
        const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var screen_width = '';
        if (width > 1200) {
            screen_width = '1200';
        } else {
            screen_width = '100%';
        }
        if (navigator.appVersion.indexOf("Win") != -1) {
            document.querySelector('#book_pdf').innerHTML = '<iframe id="iframe_pdf" src="src/'+book+'.pdf#view=FitH&scrollbar=0&toolbar=0&statusbar=0&messages=0&navpanes=0" frameborder=0 allowfullscreen  width='+screen_width+' height=700px></iframe>';
        } else {
            document.querySelector('#book_pdf').innerHTML = google_pdf(book, screen_width);
        }
        
    });

    window.addEventListener("load", function() {
        const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var screen_width = '';
        if (width > 1200) {
            screen_width = '1200';
        } else {
            screen_width = '100%';
        }
        if (navigator.appVersion.indexOf("Win") != -1) {
            document.querySelector('#book_pdf').innerHTML = '<iframe id="iframe_pdf" src="src/'+book+'.pdf#view=FitH&scrollbar=0&toolbar=0&statusbar=0&messages=0&navpanes=0" frameborder=0 allowfullscreen  width='+screen_width+' height=700px></iframe>';
        }  else {
            document.querySelector('#book_pdf').innerHTML = google_pdf(book, screen_width);
        }
        
    });
    
    
    document.querySelector('#book_id').innerHTML = 'Зошит '+book;

    return false;
});