import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(SimpleLightbox);

const containerGalleryItems = document.querySelector('.gallery');
const markupGalleryItems = galleryItems.map(
  ({ preview, original, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
          width="200"
          height="200"
        />
      </a>
    </li>
  `
);

containerGalleryItems.insertAdjacentHTML('beforeend', markupGalleryItems.join(''));
containerGalleryItems.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault(); // Забороняємо перенаправлення посилання
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }

    const instance = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    
  }
  );

  
}