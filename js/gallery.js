import galleryItems from "./gallery-items.js";

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

const itemsImagesCardsMarkup = createImagesCardsMarkup(galleryItems);

const imagesList = document.querySelector("ul.js-gallery");
imagesList.insertAdjacentHTML("beforeend", itemsImagesCardsMarkup);
imagesList.addEventListener("click", onImagesListClick);

const lightboxEl = document.querySelector(".lightbox");
const lightboxImageEl = document.querySelector(".lightbox__image");

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
}

const onGalleryOpenLightBox = () => {
  lightboxEl.classList.add("is-open");
};

const onСhangeValueAttributeEl = (value) => {
  lightboxImageEl.src = `${value}`;
};

const closeBtnEl = document.querySelector(
  'button[data-action="close-lightbox"]'
);
closeBtnEl.addEventListener("click", onCloseBtnClick);

function onCloseBtnClick(event) {
  onGalleryCloseLightBox();
  onCleasValueAttributeEl();
}

const onGalleryCloseLightBox = () => {
  lightboxEl.classList.remove("is-open");
};

const onCleasValueAttributeEl = () => {
  lightboxImageEl.src = "";
};
