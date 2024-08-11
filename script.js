document.addEventListener('DOMContentLoaded', () => {
    const quoteText = document.querySelector('.quote-text');
    const quoteAuthor = document.querySelector('.quote-author');

    setTimeout(() => {
        quoteText.style.opacity = 1;
    }, 500);

    setTimeout(() => {
        quoteAuthor.style.opacity = 1;
    }, 1000);
});


const roles = ["A Web Developer", "A Problem Solver", "Software Developer","A UI/ UX Designer","Frontend Developer"];
let index = 0;
const rolesElement = document.querySelector("#roles i");
function changeRole() {
    rolesElement.classList.add("fade-out"); // Start fading out
    setTimeout(() => {
        rolesElement.textContent = roles[index];
        rolesElement.classList.remove("fade-out");
        rolesElement.classList.add("fade-in"); // Fade in new text
        index = (index + 1) % roles.length;
    }, 500); // Wait for fade-out to complete (same as CSS transition time)
}
setInterval(changeRole, 3000); // Change every 3 seconds

document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.div-8 div');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const section = this.textContent.toLowerCase();
            document.querySelector(`#${section}`).scrollIntoView({behavior: 'smooth'});
        });
    });

    const socialButtons = document.querySelectorAll('.div-14 img');
    socialButtons.forEach(button => {
        button.addEventListener('click', function() {
            const socialMedia = this.alt.toLowerCase();
            window.open(`https://www.${socialMedia}.com/akkshi`, '_blank');
        });
    });

    const talkButton = document.querySelector('.div-27');
    talkButton.addEventListener('click', function() {
        document.querySelector('#contact-form').scrollIntoView({behavior: 'smooth'});
    });

    const cvButton = document.querySelector('.div-29');
    cvButton.addEventListener('click', function() {
        window.open('path/to/cv.pdf', '_blank');
    });

    const filterButtons = document.querySelectorAll('.div-103 div');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.textContent.toLowerCase();
            document.querySelectorAll('.project-item').forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    const seeMoreButton = document.querySelector('.div-143');
    let projectsShown = 6;
    seeMoreButton.addEventListener('click', function() {
        const hiddenProjects = document.querySelectorAll('.project-item:nth-child(n + ' + (projectsShown + 1) + ')');
        hiddenProjects.forEach((project, index) => {
            if (index < 3) {
                project.style.display = 'block';
            }
        });
        projectsShown += 3;
        if (projectsShown >= document.querySelectorAll('.project-item').length) {
            this.style.display = 'none';
        }
    });

    const testimonialDots = document.querySelectorAll('.div-172 div');
    const testimonials = document.querySelectorAll('.testimonial');
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            testimonials.forEach(t => t.classList.remove('active'));
            testimonials[index].classList.add('active');
            testimonialDots.forEach(d => d.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const faqToggles = document.querySelectorAll('.div-184 > div');
    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

   
    const footerSocialLinks = document.querySelectorAll('.div-204 > div, .div-217');
    footerSocialLinks.forEach(link => {
        link.addEventListener('click', function() {
            const socialMedia = this.querySelector('div').textContent.toLowerCase();
            window.open(`https://www.${socialMedia}.com/akkshi`, '_blank');
        });
    });
});

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-form', (req, res) => {
    const { name, phone, message } = req.body;

    // Process the data, e.g., save to a database or send an email

    res.status(200).send('Message received');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});



  
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.div-103 div');
    const projectItems = document.querySelectorAll('.project-item');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', function () {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        this.classList.add('active');
  
        const filter = this.getAttribute('data-filter');
  
        // Show/Hide projects based on the filter
        projectItems.forEach(item => {
          if (filter === 'all') {
            item.style.display = 'flex'; // Show all items
          } else {
            const category = item.getAttribute('data-category');
            if (category === filter) {
              item.style.display = 'flex'; // Show matching items
            } else {
              item.style.display = 'none'; // Hide non-matching items
            }
          }
        });
      });
    });
  });
  


document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("contact-modal");
    var trigger = document.getElementById("contact-trigger");
    var closeButton = document.querySelector(".close-button");

    function toggleModal() {
        modal.style.display = (modal.style.display === "block") ? "none" : "block";
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);





    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var phone = document.getElementById("phone").value;
        var message = document.getElementById("message").value;

        // Implement the logic to send form data to your server or email
        console.log("Form submitted:", { name, phone, message });
        alert("Thank you for your message!");

        // Close the modal after submission
        toggleModal();
    });
});
  function openPDF() {
    window.open('certificates.pdf', '_blank');}

    function playVideo() {
        document.getElementById('overlay').style.display = 'flex';
    }
    

    function openForm() {
        document.getElementById("contact-form").classList.add("show");
    }
    
    function closeForm() {
        document.getElementById("contact-form").classList.remove("show");
    }
    
    document.getElementById("contact-form-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
    
        // Display the confirmation message
        document.getElementById("confirmation-message").style.display = "block";
    
        // Simulate form submission (you should remove this in production)
        setTimeout(function() {
            document.getElementById("contact-form-form").submit(); // Submit the form
        }, 1000); // Delay form submission to show the confirmation message
    });
    
    
    
