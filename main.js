        // Blow candles effect
        function blowCandles() {
            const cake = document.querySelector('.cake-container');
            cake.innerHTML = '🎂';
            cake.style.transform = 'scale(1.2)';
            setTimeout(() => {
                cake.innerHTML = '🧁';
                cake.style.transform = 'scale(1)';
            }, 1000);
            setTimeout(() => {
                cake.innerHTML = '🎂';
            }, 2000);
        }

        // Create floating elements
        function createFloatingElement() {
            const element = document.createElement('div');
            element.className = 'floating-element';
            
            const isHeart = Math.random() > 0.5;
            if (isHeart) {
                element.innerHTML = '❤️';
                element.classList.add('heart');
            } else {
                const balloons = ['🎈', '🎆', '✨', '🌟'];
                element.innerHTML = balloons[Math.floor(Math.random() * balloons.length)];
                element.classList.add('balloon');
            }
              element.style.left = Math.random() * 100 + 'vw';
            element.style.top = Math.random() * 100 + 'vh';
            element.style.animationDelay = Math.random() * 2 + 's';
            element.style.animationDuration = (Math.random() * 10 + 10) + 's';
            
            document.body.appendChild(element);
            
            setTimeout(() => {
                element.remove();
            }, 15000);
        }

        // Generate floating elements continuously
        setInterval(createFloatingElement, 800);

        // Initial burst of elements
        for (let i = 0; i < 10; i++) {
            setTimeout(createFloatingElement, i * 200);
        }

        // Auto-play music with user interaction
        document.addEventListener('click', () => {
            if (music.paused && isPlaying) {
                music.play().catch(e => console.log('Autoplay prevented'));
            }
        }, { once: true });