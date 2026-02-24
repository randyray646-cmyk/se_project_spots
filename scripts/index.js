const initialCards = [
  {
    name: "Golden Gate Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg"
  },
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"
  }
];

const editProfileBtn = document.querySelector('.profile__edit-button');
const editProfileModal = document.querySelector('#edit-profile-modal');
const editProfileCloseBtn = editProfileModal.querySelector('.modal__close-button');

const newPostBtn = document.querySelector('.profile__add-button');
const newPostModal = document.querySelector('#new-post-modal');
const newPostCloseBtn = newPostModal.querySelector('.modal__close-button');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const editProfileForm = editProfileModal.querySelector('.modal__form');
const editProfileNameInput = editProfileModal.querySelector('#profile-name-input');
const editProfileDescriptionInput = editProfileModal.querySelector('#profile-description-input');

const newPostForm = newPostModal.querySelector('.modal__form');
const newPostCaptionInput = newPostModal.querySelector('#card-caption-input');
const newPostLinkInput = newPostModal.querySelector('#card-image-input');
const newPostSubmitButton = newPostModal.querySelector('.modal__submit-button');

const previewModal = document.querySelector("#preview-modal");
const previewImage = previewModal.querySelector(".modal__preview-image");
const previewCaption = previewModal.querySelector(".modal__caption");
const previewCloseButton = previewModal.querySelector(".modal__close-button");

const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");


function getCardElement(data) {
  const cardElement = cardTemplate.content
  .querySelector(".card")
  .cloneNode(true);

  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  const cardLikedButton = cardElement.querySelector(".card__like-button");
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");

  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;

  cardLikedButton.addEventListener('click',() => {
    cardLikedButton.classList.toggle("card__like-button_active");
  });

  cardDeleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImage.addEventListener('click', function() {
  openPreviewModal({ name: data.name, link: data.link });
});

  return cardElement;
}

function updateProfileInfo() {
  profileName.textContent = editProfileNameInput.value;
  profileDescription.textContent = editProfileDescriptionInput.value;
}

function openModal(modal) {
  modal.classList.add("modal_is-opened");
  document.addEventListener("keydown", handleEscClose);
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
  document.removeEventListener("keydown", handleEscClose);
}

function openPreviewModal(cardData) {
  const previewImage = previewModal.querySelector('.modal__preview-image');
  const previewCaption = previewModal.querySelector('.modal__caption');

  previewImage.src = cardData.link;
  previewImage.alt = cardData.name;
  previewCaption.textContent = cardData.name;

  openModal(previewModal);
}

const modalList = document.querySelectorAll(".modal");

modalList.forEach((modal) => {
  modal.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("modal")) {
      closeModal(modal);
    }
  });
});

const handleEscClose = (evt) => {
  if (evt.key === "Escape") {
    evt.preventDefault();
    evt.stopPropagation();

    const openedModal = document.querySelector(".modal_is-opened");
    if (openedModal) {
      closeModal(openedModal);
    }
  }
};


editProfileBtn.addEventListener('click', function() {
    editProfileNameInput.value = profileName.textContent;
    editProfileDescriptionInput.value = profileDescription.textContent;
    resetValidation(editProfileForm, Array.from(editProfileForm.querySelectorAll(".modal__input")), editProfileForm.querySelector(".modal__submit-button"), settings);
    openModal(editProfileModal);
});

editProfileCloseBtn.addEventListener('click', function() {
    closeModal(editProfileModal);
});


newPostBtn.addEventListener('click', function() {
    openModal(newPostModal);
});

newPostCloseBtn.addEventListener('click', function() {
    closeModal(newPostModal);
});

previewCloseButton.addEventListener("click", () => {
  closeModal(previewModal);
});


function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  updateProfileInfo();
  closeModal(editProfileModal);
}

editProfileForm.addEventListener('submit', handleProfileFormSubmit);

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  const caption = newPostCaptionInput.value.trim();
  const link = newPostLinkInput.value.trim();

  if (!caption || !link) {
    return;
  }

  const cardData = { name: caption, link: link };
  const cardElement = getCardElement(cardData);
  cardsList.prepend(cardElement);
  newPostForm.reset();
  disableSubmitButton(newPostSubmitButton,settings);
  resetValidation(newPostForm, [newPostCaptionInput, newPostLinkInput], newPostSubmitButton, settings)

  closeModal(newPostModal);
}

newPostForm.addEventListener('submit', handleAddCardSubmit);

initialCards.forEach(function(item) {
  const cardElement = getCardElement(item);
  cardsList.append(cardElement);
});
