document.addEventListener("DOMContentLoaded", function() {
    // Kundomdömen i en array
    const testimonials = [
        {
            text: "A wonderful experience! The staff was friendly and accommodating, and the facilities were top-notch.",
            author: "John Doe"
        },
        {
            text: "Absolutely fantastic! I had the best time at Hotel Stockholm. The service was impeccable.",
            author: "Jane Smith"
        },
        {
            text: "I highly recommend Hotel Stockholm to anyone visiting the area. It exceeded all my expectations.",
            author: "David Johnson"
        }
    ];

    // Index till 0
    let currentIndex = 0;

    // Funktion för att uppdatera reviews
    function updateTestimonial() {
        const testimonialText = document.getElementById("testimonial-text");
        const testimonialAuthor = document.getElementById("testimonial-author");

        // Hämta nuvarande review
        const currentTestimonial = testimonials[currentIndex];

        // Uppdatera html med nuvarande review
        testimonialText.textContent = currentTestimonial.text;
        testimonialAuthor.textContent = "-" + currentTestimonial.author;

        // Increment på index eller tillbaka till 0 när funktionen gått igenom allt
        currentIndex = (currentIndex + 1) % testimonials.length;
    }

    // Kallar på updateTestimonial 
    updateTestimonial();

    // Intervall
    setInterval(updateTestimonial, 5000);
});



// Hämtar bookingModal från HTML dokumentet
    var modal = document.getElementById('bookingModal');

// Hämtar knappen
    var buttons = document.querySelectorAll('.button');

// Hämtar <span> elementet som stänger modal
    var span = document.querySelector(".close");

// Loopar igenom alla knappar och lägger till event listener
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
         modal.style.display = "block";
    });
});

// När man clickar på <span> (x) stängs modal
    span.onclick = function() {
        modal.style.display = "none";
};

// När man klickar utanför modal stängs den
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
};

    // Lägg till event listener för formuläret
    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {

    // Förhindra att formuläret skickas
    event.preventDefault();

    // Dölj modal
    modal.style.display = "none";

    // Skapa ett nytt element för meddelandet
    var thankYouMessage = document.createElement('div');
    thankYouMessage.textContent = "Thank you for your booking! A confirmation Email has been sent!";
    thankYouMessage.classList.add('thank-you-message');

    // Skapa en stängningsknapp
    var closeButton = document.createElement('button');
    closeButton.textContent = '×';
    closeButton.classList.add('close-button');
    closeButton.onclick = function() {
        
        
    // Ta bort meddelandet när stängningsknappen klickas
    document.body.removeChild(thankYouMessage);
    };

    // Lägg till stängningsknappen i meddelandet
    thankYouMessage.appendChild(closeButton);

    // Lägg till meddelandet i bodyn
    document.body.appendChild(thankYouMessage);
    });



