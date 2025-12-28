
// Typewriter effect
        const message = `🎉Happy Birthday to Someone Very Special in my life!❤️
Today marks another beautiful year of your amazing journey through life. Each year that passes brings new adventures, wonderful memories, and countless reasons to celebrate the incredible person you are.
You bring so much joy, laughter, and happiness.Happy Birthday! 🎂🎉💕
please be my side always, no matter i am right or wrong! Promise Me🤞
                                     "LOVE YOU 💕😍"`;

        let i = 0;
        const typewriter = document.getElementById('typewriter');
        const cursor = document.getElementById('cursor');
        
        function typeWriter() {
            if (i < message.length) {
                if (message.charAt(i) === '\n') {
                    typewriter.innerHTML += '<br>';
                } else {
                    typewriter.innerHTML += message.charAt(i);
                }
                i++;
                setTimeout(typeWriter, 50);
            } else {
                cursor.style.display = 'none';
            }
        }

        // Start typewriter effect after a short delay
        setTimeout(typeWriter, 1000);

        // Create falling hearts
        function createFallingHeart() {
            const heart = document.createElement('div');
            heart.className = 'falling-hearts';
            heart.innerHTML = ['❤️', '💕', '💖', '💝', '🌹'][Math.floor(Math.random() * 5)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
            heart.style.fontSize = (Math.random() * 1 + 1.5) + 'rem';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 8000);
        }

        // Create falling hearts continuously
        setInterval(createFallingHeart, 500);

        // Create decorative hearts around the message box
        function createHeartDecoration() {
            const decoration = document.createElement('div');
            decoration.className = 'heart-decoration';
            decoration.innerHTML = '💕';
            decoration.style.left = Math.random() * 100 + '%';
            decoration.style.top = Math.random() * 100 + '%';
            decoration.style.animationDelay = Math.random() * 2 + 's';
            
            document.body.appendChild(decoration);
            
            setTimeout(() => {
                decoration.remove();
            }, 4000);
        }

        // Create heart decorations
        setInterval(createHeartDecoration, 2000);

        // Initial burst of hearts
        for (let i = 0; i < 5; i++) {
            setTimeout(createFallingHeart, i * 200);
        }