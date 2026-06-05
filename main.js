// =========================
// زر ابدأ التعلم
// =========================

let learnBtn = document.getElementById("learnBtn");

learnBtn.onclick = function () {

    alert("مرحباً بك في موقع WebLearn 🚀");

};


// =========================
// تغيير لون الخلفية
// =========================

let signupBtn = document.querySelector(".signup");

signupBtn.onclick = function () {

    document.body.style.background = "#dfe9ff";

};


// =========================
// تأثير على كروت الدورات
// =========================

let cards = document.querySelectorAll(".card");

cards.forEach(function(card){

    card.onmouseover = function(){

        card.style.transform = "scale(1.05)";
        card.style.transition = "0.3s";

    };

    card.onmouseout = function(){

        card.style.transform = "scale(1)";

    };

});


// =========================
// رسالة عند الضغط على الدورة
// =========================

let courseButtons = document.querySelectorAll(".card button");

courseButtons.forEach(function(button){

    button.onclick = function(){

        alert("تم فتح الدورة التعليمية 🎉");

    };

});


// =========================
// Scroll ناعم للقائمة
// =========================

let navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link){

    link.onclick = function(e){

        e.preventDefault();

        let sectionId = link.getAttribute("href");

        if(sectionId !== "#"){

            document.querySelector(sectionId).scrollIntoView({
                behavior: "smooth"
            });

        }

    };

});


// =========================
// تغيير لون الهيدر عند النزول
// =========================

window.onscroll = function(){

    let header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.background = "#2f5eff";
        header.style.transition = "0.3s";

    } else {

        header.style.background = "white";

    }

};