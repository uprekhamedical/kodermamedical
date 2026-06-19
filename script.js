// ===========================
// Dark Mode Toggle
// ===========================

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML = "☀️";
    }else{
        themeBtn.innerHTML = "🌙";
    }

});


// ===========================
// Animated Counter
// ===========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const increment = target / 100;

        if(count < target){

            counter.innerText =
            Math.ceil(count + increment);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target;

        }

    };

    updateCounter();

});


// ===========================
// Testimonial Slider
// ===========================

const testimonials = [

"Excellent laboratory services and professional staff.",

"Fast reports and very helpful healthcare guidance.",

"Highly recommended for blood testing and diagnostics.",

"Reliable pharmacy support and quality patient care."

];

let testimonialIndex = 0;

const testimonialText =
document.getElementById("testimonial-text");

function changeTestimonial(){

    testimonialIndex++;

    if(testimonialIndex >= testimonials.length){

        testimonialIndex = 0;

    }

    testimonialText.innerText =
    testimonials[testimonialIndex];

}

setInterval(changeTestimonial,3000);


// ===========================
// Scroll Reveal Animation
// ===========================

const revealElements =
document.querySelectorAll(
".card, .stat, .about-preview, .testimonial-box"
);

window.addEventListener("scroll", () => {

    revealElements.forEach(element => {

        const position =
        element.getBoundingClientRect().top;

        const screenHeight =
        window.innerHeight;

        if(position < screenHeight - 100){

            element.style.opacity = "1";

            element.style.transform =
            "translateY(0px)";

        }

    });

});


// ===========================
// Initial Styles
// ===========================

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
    "translateY(50px)";

    element.style.transition =
    "all 0.8s ease";

});


// ===========================
// Back To Top Button
// ===========================

const topButton =
document.createElement("button");

topButton.innerHTML = "⬆";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.padding = "12px 18px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topButton.style.display = "block";

    }else{

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


// ===========================
// Welcome Message
// ===========================

window.addEventListener("load", () => {

    console.log(
    "Welcome to Uprekha LabCare & Pharmacy Solutions"
    );

});
// Contact Form Validation

const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value;

const email = document.getElementById("email").value;

const message = document.getElementById("message").value;

if(name === "" || email === "" || message === ""){

alert("Please fill all fields");

return;

}

alert("Message Sent Successfully!");

contactForm.reset();

});

}