
// Create sparkles around the heart
        function createSparkle() {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkles';
            sparkle.innerHTML = ['✨', '⭐', '🌟', '💫'][Math.floor(Math.random() * 4)];
            
            const heartContainer = document.querySelector('.heart-container');
            const rect = heartContainer.getBoundingClientRect();
            
            sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
            sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
            sparkle.style.animationDelay = Math.random() * 2 + 's';
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 4000);
        }

        // Create floating hearts
        function createFloatingHeart() {
            const heart = document.createElement('div');
            heart.className = 'floating-hearts';
            heart.innerHTML = ['💕', '❤️', '💖', '💝', '💗'][Math.floor(Math.random() * 5)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
            heart.style.animationDelay = Math.random() * 2 + 's';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 6000);
        }

        // Heart burst effect when clicked
        function createHeartBurst() {
            const mainHeart = document.getElementById('mainHeart');
            mainHeart.style.animation = 'heartExplosion 0.6s ease';
            
            // Create burst of hearts
            for (let i = 0; i < 12; i++) {
                setTimeout(() => {
                    const burstHeart = document.createElement('div');
                    burstHeart.innerHTML = '💖';
                    burstHeart.style.position = 'absolute';
                    burstHeart.style.left = '50%';
                    burstHeart.style.top = '50%';
                    burstHeart.style.fontSize = '2rem';
                    burstHeart.style.color = '#ff1744';
                    burstHeart.style.pointerEvents = 'none';
                    burstHeart.style.zIndex = '20';
                    
                    const angle = (i / 12) * 2 * Math.PI;
                    const distance = 200;
                    const endX = Math.cos(angle) * distance;
                    const endY = Math.sin(angle) * distance;
                    
                    burstHeart.style.animation = `
                        burstOut 2s ease-out forwards
                    `;
                    
                    document.body.appendChild(burstHeart);
                    
                    setTimeout(() => {
                        burstHeart.remove();
                    }, 2000);
                }, i * 50);
            }
        }

        // Add burst animation to CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes burstOut {
                0% {
                    transform: translate(-50%, -50%) scale(1) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translate(calc(-50% + ${Math.random() * 400 - 200}px), calc(-50% + ${Math.random() * 400 - 200}px)) scale(0.5) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Generate sparkles and floating hearts continuously
        setInterval(createSparkle, 800);
        setInterval(createFloatingHeart, 1200);

        // Initial burst
        for (let i = 0; i < 8; i++) {
            setTimeout(createSparkle, i * 200);
            setTimeout(createFloatingHeart, i * 300);
        }

        // Random heart size variations
        setInterval(() => {
            const mainHeart = document.getElementById('mainHeart');
            const scale = 0.9 + Math.random() * 0.2;
            mainHeart.style.transform = `scale(${scale})`;
        }, 3000);