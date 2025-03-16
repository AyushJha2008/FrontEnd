const endDate = new Date("17 march, 2025 00:00:00").getTime();
const startDate = new Date().getTime();

let x = setInterval(function updateTimer() {
    const now = new Date().getTime();
    const distanceCovered = now - startDate;
    const distancePending = endDate - now;

    // calculate days min hour and sec;
    // 1 day = 24*60*60*1000
    const oneDayInMillis = (24*60*60*1000);
    const oneHourInMillis = (60*60*1000);
    const oneMinuteInMillis = (60*1000);
    const oneSecInMillis = (1000);

    const days = Math.floor(distancePending/(oneDayInMillis));
    const hrs = Math.floor((distancePending%(oneDayInMillis))/(oneHourInMillis));
    const min = Math.floor((distancePending%(oneHourInMillis))/(oneMinuteInMillis));
    const sec = Math.floor((distancePending%(oneMinuteInMillis))/(oneSecInMillis))

    //populate in ui
    // ("html id") = (js id)
    document.getElementById("days").innerHTML = days;
    document.getElementById("hour").innerHTML = hrs;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;

    const totalDistance = endDate - startDate;
    const percentageDistance = (distanceCovered/totalDistance)*100;

    //set width for progress bar
    document.getElementById("prog-bar").style.width = percentageDistance + "%";

    if(distancePending <= 0){
        if (distancePending <= 0) {
            clearInterval(x);
            
            // Hide countdown and progress bar
            document.querySelector(".container").style.display = "none";
            document.getElementById("prog-bar").style.width = "100%";
        
            // Show the birthday card
            document.querySelector(".birthday-card").style.display = "block";
        }
    }
}
, 1000)




document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.birthday-card');
    const cardFront = document.getElementById('card-front');
    const celebrationButton = document.getElementById('celebration-button');
    const balloonsContainer = document.getElementById('balloons');
    const para = document.getElementById('para');
    
    // Open card 
    cardFront.addEventListener('click', function() {
        card.classList.add('open');
        
        // balloons after card is opened
        setTimeout(() => {
            balloonsContainer.style.visibility = 'visible';
        }, 500);
    });
    
    // balloons
    function createBalloons() {
        const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c'];
        
        // left side balloons
        for (let i = 0; i < 8; i++) {
            const balloon = document.createElement('div');
            balloon.classList.add('balloon', 'balloon-left');
            balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            balloon.style.left = Math.random() * 15 + '%';
            balloon.style.top = (i * 12) + '%';
            balloon.style.animationDelay = Math.random() * 5 + 's';
            balloonsContainer.appendChild(balloon);
        }
        
        // right side balloons
        for (let i = 0; i < 8; i++) {
            const balloon = document.createElement('div');
            balloon.classList.add('balloon', 'balloon-right');
            balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            balloon.style.right = Math.random() * 15 + '%';
            balloon.style.top = (i * 12) + '%';
            balloon.style.animationDelay = Math.random() * 5 + 's';
            balloonsContainer.appendChild(balloon);
        }
    }
    
    createBalloons();
    
    // Create confetti function
    function createConfetti() {
        const confettiColors = ['#B2FFFF', '#7FFF00', '#FF0800', '#FF00FF', '#99FFFF', '#FE28A2', '#B2FFFF','#7FFF00' , '#FF0800', '#FFFF00', '#FE28A2', '#99FFFF', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722'];
        
        for (let i = 0; i < 150; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            
            // Randomize confetti properties
            const color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
            const size = Math.random() * 8 + 6;
            const left = Math.random() * 100;
            const duration = Math.random() * 3 + 3;
            const delay = Math.random() * 2;
            
            // Set styles
            confetti.style.backgroundColor = color;
            confetti.style.width = size + 'px';
            confetti.style.height = size + 'px';
            confetti.style.left = left + '%';
            confetti.style.top = '-20px';
            confetti.style.opacity = '1';
            confetti.style.position = 'absolute';
            confetti.style.animation = `fall ${duration}s linear ${delay}s forwards`;
            document.body.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                confetti.remove();
            }, (duration + delay) * 1000);
        }
    }
    
    // Celebration button 
    celebrationButton.addEventListener('click', function() {
        createConfetti();
        
        // birthday message
        const birthdayMessage = document.createElement('div');
        birthdayMessage.style.position = 'absolute';
        birthdayMessage.style.top = '50%';
        birthdayMessage.style.left = '50%';
        birthdayMessage.style.transform = 'translate(-50%, -50%)';
        birthdayMessage.style.fontSize = '3rem';
        birthdayMessage.style.fontFamily = '\'Dancing Script\', cursive';
        birthdayMessage.style.color = 'red';
        birthdayMessage
        birthdayMessage.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
        birthdayMessage.style.zIndex = '999';
        birthdayMessage.style.textAlign = 'center';
        birthdayMessage.innerHTML = 'Happy 23rd<br>Birthday Bhaiji!';
        birthdayMessage.style.opacity = '0';
        birthdayMessage.style.transition = 'opacity 1s ease-in-out';
        document.body.appendChild(birthdayMessage);
        
        setTimeout(() => {
            birthdayMessage.style.opacity = '1';
            para.style.opacity = '0'
        }, 100);
        
        setTimeout(() => {
            birthdayMessage.style.opacity = '0';
        }, 3000);
        
        setTimeout(() => {
            birthdayMessage.remove();
            para.style.opacity = '1'
        }, 4000);
    });
});