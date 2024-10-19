// Accordion functionality - only one section open at a time
const accordionHeaders = document.querySelectorAll('.accordion-header');
accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const openContent = document.querySelector('.accordion-content.show');
    const content = header.nextElementSibling;

    if (openContent && openContent !== content) {
      openContent.classList.remove('show');
      openContent.style.display = 'none';
    }

    content.style.display = content.style.display === 'block' ? 'none' : 'block';
    content.classList.toggle('show');
  });
});

// Modal functionality with 'Esc' key handling
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

// Close modal with 'X' or 'Esc'
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

window.onkeydown = function(event) {
  if (event.key === 'Escape') {
    modal.style.display = "none";
  }
}

// Volume Slider functionality with transition effect
const volumeSlider = document.getElementById('volume');
const volumeValue = document.getElementById('volumeValue');

volumeSlider.oninput = function() {
  volumeValue.innerText = this.value;
}

volumeSlider.addEventListener('input', function () {
  volumeValue.style.transition = '0.2s ease';
  volumeValue.style.transform = 'scale(1.1)';
});

volumeSlider.addEventListener('mouseup', function () {
  volumeValue.style.transform = 'scale(1)';
});
