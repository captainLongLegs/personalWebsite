//No funciona el efecto


document.addEventListener('DOMContentLoaded', function() {
    // Typewriter effect function
    function typewriterEffect(element, text, speed = 100) { 
        let i = 0;
        element.innerHTML = '';
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    document.querySelectorAll('.accordion-button').forEach(button => {
        button.addEventListener('show.bs.collapse', () => { 
            const targetID = button.getAttribute('data-bs-target');

            const targetElement = document.querySelector(targetID);

            const text = targetElement.querySelector('.accordion-body').textContent;

            targetElement.querySelector('.accordion-body').textContent = '';

            typewriterEffect(targetElement.querySelector('.accordion-body'), text);
        });
    });
});


