 // Add sparkles randomly
        function createSparkle() {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.innerHTML = '✨';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 3000);
        }

        // Create sparkles continuously
        setInterval(createSparkle, 1000);

        // Add hover sound effect simulation
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.filter = 'brightness(1.1)';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.filter = 'brightness(1)';
            });
        });

        // Add click effect
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', () => {
                item.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    item.style.transform = '';
                }, 150);
            });
        });