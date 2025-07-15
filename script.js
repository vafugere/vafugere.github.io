const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
  const gitIcon = $("#git_icon");
  gitIcon.addEventListener('mouseenter', function () {
    this.setAttribute('src', 'images/icons/git_hover.png');
  });
  gitIcon.addEventListener('mouseleave', function () {
    this.setAttribute('src', 'images/icons/git.png');
  });

  const emailIcon = $("#email_icon");
  emailIcon.addEventListener('mouseenter', function () {
    this.setAttribute('src', 'images/icons/email_hover.png');
  });
  emailIcon.addEventListener('mouseleave', function () {
    this.setAttribute('src', 'images/icons/email.png');
  });

  const galleries = document.querySelectorAll('.gallery');

  const imageSets = [
    ['images/gallery/y1.png', 'images/gallery/y2.png'],
    ['images/gallery/sampleform1.png', 'images/gallery/sampleform2.png'],
    ['images/gallery/practicum1.png', 'images/gallery/practicum2.png', 'images/gallery/practicum3.png']
  ];

  galleries.forEach((gallery, i) => {
    let index = 0;
    const images = imageSets[i];
    const img = gallery.querySelector('img');
    const leftArrow = gallery.querySelector('.arrow.left');
    const rightArrow = gallery.querySelector('.arrow.right');

    leftArrow.addEventListener('click', () => {
      index = (index - 1 + images.length) % images.length;
      img.src = images[index];
    });

    rightArrow.addEventListener('click', () => {
      index = (index + 1) % images.length;
      img.src = images[index];
    });
  });
});


