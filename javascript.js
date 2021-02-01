function sendMessage(event)
 {
    event.preventDefault();
    data = event.srcElement;


var name = data.name.value;
var email = data.email.value;
var message = data.email.message;
thankyouheader = document.getElementById("thankyouMessage");

thankyouheader.innerText = "Tack för ditt meddelande " + name + ". Jag återkommer så snart jag kan!"; 
}

document.body.onkeyup = function(e) {
    var code = e.keyCode;
    if(code === 74) { // key code for j
        window.scrollTo(document.body.scrollLeft,
                        document.body.scrollTop + 500);
    }
};

