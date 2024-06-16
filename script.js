let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
const formSubmit = document.querySelector('form');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}


/*=====================================================jhvhjvhvj==============================*/

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
let menuIcon1 = document.querySelector('#menu-icon');
let navbar1 = document.querySelector('.navbar');

window.addEventListener('scroll',  () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
            });
            let targetNavLink = document.querySelector('header nav a[href*="' + id + '"]');
            if (targetNavLink) {
                targetNavLink.classList.add('active');
            } else {
                console.error('Matching nav link not found for section with ID: ' + id);
            }
        }
    });

    /*============================================= sticky navbar ==========================================*/

    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*=====================================remove toggle icon and navbar=============================*/

    menuIcon1.classList.remove('fa-xmark');
    navbar1.classList.remove('active');
});

/*===========scroll reveal ===================================================*/

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .service-container, .skill-box, .achievement-card', {origin: 'bottom'});
ScrollReveal().reveal('.about-text p', {origin: 'right'});



//.....................................ContctForm................................................
function sendEmail(){
    Email.send({
       SecureToken: " 439662de-b693-4684-88c2-36549a0d2f9d",
        To : '22bc0049@gmil.com',
        From : document.getElementById("cemail").value,
        Subject : "This is the subject",
        Body : "Name: " + document.getElementById("cname").value
            + "<br> Email: " + document.getElementById("cemail").value
            +"<br Phone no: " + document.getElementById("cnumber").value
            + "<br> Messge: " + document.getElementById("cmessage").value
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      }
    );
}

formSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();

    //reset();
    return false;
})