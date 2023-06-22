//code to identify valid input feild using regular expression

// function nme(data) {
//     let reg = /^(?!\s)(?!.*\s{2})\w[a-zA-Z]{3,}(?:\s\w[a-zA-Z]{3,})?\b$/;

//     if (reg.test(data)) {
//         document.querySelector("#lbl").innerHTML = "correct";
//         document.querySelector("#lbl").style.color = "yellow"

//     } else if (data.length <= 0) {
//         document.querySelector("#lbl").innerHTML = "please enter your name";
//         document.querySelector("#lbl").style.color = "red"


//     } else if (!(reg.test(data))) {
//         document.querySelector("#lbl").innerHTML = "please enter correct name";
//         document.querySelector("#lbl").style.color = "red"
//     }


// }

function conversion() {
    let store = document.getElementById("fullname").value;
    // console.log(a);
    if (store.length > 9) {
        // console.log("length exceeded");
        let spli = store.split(" ")
            // console.log(spli);
            // document.getElementById("grab").innerHTML = "length is exceded";
        if (spli.length == 2 && spli[0].length >= 4 && spli[1].length >= 4) {
            document.getElementById('grab').innerHTML = "you have enter correct name";
            document.getElementById('grab').style.color = "yellow";
        } else {
            document.getElementById('grab').innerHTML = "invalid format";
            document.getElementById('grab').style.color = "red";
        }

    } else {
        document.getElementById('grab').innerHTML = "enter a correct name";
        document.getElementById('grab').style.color = "white";;
    }
}



function mail(maildata) {
    let regg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regg.test(maildata)) {
        document.querySelector("#mle").innerHTML = " you have enter correct email id";
        document.querySelector("#mle").style.color = "yellow"

    } else if (maildata.length <= 0) {
        document.querySelector("#mle").innerHTML = "please enter your email id";
        document.querySelector("#mle").style.color = "black"


    } else if (!(regg.test(maildata))) {
        document.querySelector("#mle").innerHTML = "please enter correct name";
        document.querySelector("#mle").style.color = "red"
    }




}


function pancard(pandata) {
    let reggg = /^([A-Z]{5})(\d{4})([A-Z]{1})$/;
    if (reggg.test(pandata)) {
        document.querySelector("#pann").innerHTML = " you have enter correct PAN  Number";
        document.querySelector("#pann").style.color = " yellow"

    } else if (pandata.length <= 0) {
        document.querySelector("#pann").innerHTML = "please enter your PAN  Number";
        document.querySelector("#pann").style.color = "black"


    } else if (!(reggg.test(pandata))) {
        document.querySelector("#pann").innerHTML = "please enter correct PAN  Number";
        document.querySelector("#pann").style.color = "red"
    }




}

function loanamt(loandata) {
    let amount = /^\d{1,9}$/;

    if (amount.test(loandata)) {
        document.querySelector("#amt").innerHTML = " you have enter correct Amount";
        document.querySelector("#amt").style.color = "yellow"

    } else if (loandata.length <= 0) {
        document.querySelector("#amt").innerHTML = "please Enter Amount";
        document.querySelector("#amt").style.color = "black"


    } else if (!(amount.test(loandata))) {
        document.querySelector("#amt").innerHTML = " enter correct Amount";
        document.querySelector("#amt").style.color = "red"
    }



}


// pass the value to submit page
function getTxt() {
    var txtValue = document.getElementById("fullname").value;
    localStorage.setItem("passValue", txtValue);


    var txtValue2 = document.getElementById("email").value;
    localStorage.setItem("passValuee", txtValue2);




}


// number to words conversion

function inWords(num) {
    // 1st place is empty for zero we have not print anything
    var a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];

    // we have to process two zeroes
    var b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if ((num = num.toString()).length > 9) return 'overlimit';

    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    console.log(n);
    // if n is empty return it simply
    if (!n) return;

    // otherwise we have declare a varible str with a enmpty string
    var str = '';
    // split the no.in crore lakh thousand and hundred
    // 1st two digit which is present in n[1] in the second element in the array n
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
    return str;
}

document.getElementById('number').oninput = function() {
    document.getElementById('words').innerHTML = inWords(document.getElementById('number').value);
    document.getElementById("words").style.color = "white";
};