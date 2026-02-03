const initialCards = [
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

initialCards.forEach(function(card) {
  console.log(card.name);
});

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

const editNewPostForm = newPostModal.querySelector('.modal__form');
const editNewPostCaptionInput = newPostModal.querySelector('#card-caption-input');
const editNewPostLinkInput = newPostModal.querySelector('#card-image-input');

function updateProfileInfo() {
  profileName.textContent = editProfileNameInput.value;
  profileDescription.textContent = editProfileDescriptionInput.value;
}

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener('submit', function(event) {
    event.preventDefault();
    profileName.textContent = editProfileNameInput.value;
    profileDescription.textContent = editProfileDescriptionInput.value;
    closeModal(editProfileModal);
});

editProfileBtn.addEventListener('click', function() {
    editProfileNameInput.value = profileName.textContent;
    editProfileDescriptionInput.value = profileDescription.textContent;
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

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  updateProfileInfo();
  closeModal(editProfileModal);

  console.log('Profile form submitted');
}

editProfileForm.addEventListener('submit', handleProfileFormSubmit);

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  console.log(editNewPostCaptionInput.value);
  console.log(editNewPostLinkInput.value);
  closeModal(newPostModal);
}

editNewPostForm.addEventListener('submit', handleAddCardSubmit);