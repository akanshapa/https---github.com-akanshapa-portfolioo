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

    const contactForm = document.querySelector('#contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        fetch('/submit-form', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Thank you for your message. I will get back to you soon!');
                this.reset();
            } else {
                alert('There was an error sending your message. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error sending your message. Please try again.');
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



document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Collect the form data
    const formData = new FormData(this);

    // Send the data using Fetch API
    fetch('submit_form.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('form-response').innerText = data;
        // Optionally, clear the form
        document.getElementById('contactForm').reset();
    })
    .catch(error => {
        document.getElementById('form-response').innerText = 'Oops! There was an error sending your message.';
        console.error('Error:', error);
    });
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
  
   
// <div class="container1">
//     <div class="div-202" id="contact-trigger">
//         <img loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c1edda30f939c7b522a2e403800e9c4fb2a95bb38ac635cfc3a63a58180a965?apiKey=481104fb3273411f96eb0e50cbbfb041&"
//             class="img-54" alt="Chat Icon" />
//         <div class="div-203">Let's Talk?</div>
//     </div>
// </div>

// <div id="contact-modal" class="modal">
//     <div class="modal-content">
//         <span class="close-button">&times;</span>
//         <form id="contact-form" method="post">
//             <label for="name">Name:</label>
//             <input type="text" id="name" name="name" required>

//             <label for="phone">Phone:</label>
//             <input type="tel" id="phone" name="phone" required>

//             <label for="message">Message:</label>
//             <textarea id="message" name="message" required></textarea>

//             <button type="submit">Submit</button>
//         </form>
//     </div>
// </div>


document.addEventListener("DOMContentLoaded", function() {
    const roles = [
        "A Web Developer",
        "A Tech Enthusiast"
    ];
    let roleIndex = 0;
    const rolesElement = document.getElementById("roles");

    function changeRole() {
        roleIndex = (roleIndex + 1) % roles.length; // Move to the next role
        rolesElement.style.opacity = 0; // Fade out
        setTimeout(() => {
            rolesElement.innerHTML = `<i>${roles[roleIndex]}</i>`; // Update to the new role
            rolesElement.style.opacity = 1; // Fade in
        }, 500); // Delay for fade out
    }
    setInterval(changeRole, 3000); // Change role every 3 seconds
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
        document.getElementById('videoContainer').style.display = 'block'; // Show the video container
        document.getElementById('overlay').style.display = 'block'; // Show overlay
        document.querySelector('.div-96 img.img').style.display = 'none'; // Hide the thumbnail
        document.querySelector('.div-99').style.display = 'none'; // Hide the play button and text
    }

    // Close video and overlay when clicking on overlay
    document.getElementById('overlay').addEventListener('click', function() {
        document.getElementById('videoContainer').style.display = 'none'; // Hide the video container
        document.getElementById('overlay').style.display = 'none'; // Hide overlay
        document.querySelector('.div-96 img.img').style.display = 'block'; // Show the thumbnail
        document.querySelector('.div-99').style.display = 'flex'; // Show the play button and text
    });
   