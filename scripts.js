//Validation rules for contact form
//Code adapted from Miha Cirman, Code brainer, URL: https://www.codebrainer.com/blog/contact-form-in-javascript
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */


window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher]');

    for (let i = 0; i < tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab;

        tab_switcher.addEventListener('click', () => {
            document.querySelector('.tabs .tab.is-active').classList.remove('is-active');
            tab_switcher.parentNode.classList.add('is-active');

            SwitchPage(page_id);
        });
    }
}

function SwitchPage (page_id) {
    console.log(page_id);

    const current_page = document.querySelector('.pages .page.is-active');
    current_page.classList.remove('is-active');

    const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
    next_page.classList.add('is-active');
}







function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



//var navLinks = document.getElementById("navLinks");
//
//function ShowMenu(){
//    navLinks.style.right = "0";
//}
//function HideMenu(){
//    navLinks.style.right = "-200px";
//}


//function myFunction(x) {
//  x.classList.toggle("change");
//}

//function to check validation rules
//function validation(){
//   var name = document.getElementById("name").value;
//   var subject = document.getElementById("subject").value;
//   var phone = document.getElementById("phone").value;
//   var email = document.getElementById("email").value;
//   var message = document.getElementById("message").value;
//   var error_message = document.getElementById("error_message");
//    var text;
//    
//    error_message.style.padding = "10px";
//    
//    //Validation rules
//    if(name.length <5){
//        text = "Please enter a valid name";
//        error_message.innerHTML = text;
//        return false;
//    }
//    if(subject.length < 1){
//        text = "Please enter a valid subject";
//        error_message.innerHTML = text;
//        return false;
//    }      
//    if(phone.lenght < 10){
//        text = "Please enter a valid phone number";
//        error_message.innerHTML = text;
//        return false;
//    }
//    if(email.indexOf("@") == -1 || email.length <6){
//        text = "Please enter a valid email address";
//        error_message.innerHTML = text;
//        return false;
//    }
//    if(message.length <= 100){
//        text = "Please enter more than 25 charachters";
//        error_message.innerHTML = text;
//        return false;
//    }
//    alert("Form submitted successfully!")
//    return true;
//}






//Read more article in homepage
//Code adapted from w3schoold.com, URL: https://www.w3schools.com/howto/howto_js_read_more.asp

//    var i = 0;
//        function read(){
//            if(!i){
//                document.getElementById("more").style.display ="inline";
//                document.getElementById("dots").style.display ="none";
//                document.getElementById("read").innerHTML="Read less";
//                i=1;
//            }
//            else{
//                document.getElementById("more").style.display ="none";
//                document.getElementById("dots").style.display ="inline";
//                document.getElementById("read").innerHTML="Read more";
//                i=0;                        
//            }
//        }