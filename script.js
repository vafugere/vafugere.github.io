document.addEventListener("DOMContentLoaded", () => {
    // arrow scroll
    const container = document.querySelector(".nav-container");
    const leftArrow = document.querySelector(".arrow-left");
    const rightArrow = document.querySelector(".arrow-right");

    let scrollInterval;

    function startScroll(direction) {
        stopScroll();
        scrollInterval = setInterval(() => {
            container.scrollLeft += direction * 5;
        }, 16);
    }

    function stopScroll() {
        clearInterval(scrollInterval);
    }

    leftArrow.addEventListener("mouseenter", () => startScroll(-1));
    rightArrow.addEventListener("mouseenter", () => startScroll(1));

    leftArrow.addEventListener("mouseleave", stopScroll);
    rightArrow.addEventListener("mouseleave", stopScroll);

    
    // tooltip
    document.querySelectorAll('.has-tooltip').forEach(link => {
      let tip;

      link.addEventListener('mouseenter', () => {
        tip = document.createElement('div');
        tip.className = 'tooltip';       
        tip.textContent = link.dataset.tooltip;
        document.body.appendChild(tip);

        const rect = link.getBoundingClientRect();
        tip.style.left = (rect.left + rect.width/2) + 'px';
        tip.style.top  = (rect.bottom + 35) + 'px';

        requestAnimationFrame(() => {
          tip.classList.add('visible');
        });
      });

      link.addEventListener('mouseleave', () => {
        if (!tip) {
          return;
        }

        tip.remove();
        tip = null;
      });
    });

});