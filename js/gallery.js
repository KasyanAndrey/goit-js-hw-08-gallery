import galleryItems from "./gallery-items.js";

/* - Создание и рендер разметки по массиву данных и предоставленному шаблону. */

function createImagesCardsMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
        </a>
      </li>
      `;
    })
    .join("");
}

const imagesList = document.querySelector("ul.js-gallery");
const itemsImagesCardsMarkup = createImagesCardsMarkup(galleryItems);

imagesList.insertAdjacentHTML("beforeend", itemsImagesCardsMarkup);

/* - Реализация делегирования на галерее `ul.js-gallery` и получение `url` большого изображения. */

imagesList.addEventListener("click", onImagesListClick);

function onImagesListClick(event) {
  event.preventDefault();

  const isImageSwatchEl = event.target.classList.contains("gallery__image");

  if (!isImageSwatchEl) {
    return;
  }

  const swatchEl = event.target;
  const attributeSwatchEl = swatchEl.dataset.source;

  onСhangeValueAttributeEl(attributeSwatchEl);
  onGalleryOpenLightBox();

  onGalleryCloseLightBox();
}

/* - Открытие модального окна по клику на элементе галереи. is-open */

function onGalleryOpenLightBox() {
  const lightboxEl = document.querySelector(".lightbox");
  lightboxEl.classList.add("is-open");

  return lightboxEl;
}

/* - Подмена значения атрибута `src` элемента `img.lightbox__image`. */

function onСhangeValueAttributeEl(value) {
  const lightboxImageEl = document.querySelector(".lightbox__image");
  lightboxImageEl.src = `${value}`;
}

/* Закрытие модального окна по клику на кнопку `button[data-action="close-lightbox"]`. */

function onGalleryCloseLightBox() {
  const closeBtnEl = document.querySelector(
    '.lightbox button[data-action="close-lightbox"]'
  );

  const closeBtnAction = closeBtnEl.dataset.action;
  console.log(closeBtnAction); //close-lightbox

  return closeBtnAction;
}
