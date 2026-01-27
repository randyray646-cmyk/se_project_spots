const editProfileBtn = document.querySelector('.profile__edit-button');
const editProfileModal = document.querySelector('#edit-profile-modal');
const editProfileCloseBtn = editProfileModal.querySelector('.modal__close-button');

const newPostBtn = document.querySelector('.profile__add-button');
const newPostModal = document.querySelector('#new-post-modal');
const newPostCloseBtn = newPostModal.querySelector('.modal__close-button');

const profileName = document.querySelector('.profile__name');
const profileDesription = document.querySelector('.profile__description');

const editProfileForm = editProfileModal.querySelector('.modal__form');
const editProfileNameInput = editProfileModal.querySelector('#profile-name-input');
const editProfileDescriptionInput = editProfileModal.querySelector('#profile-description-input');

const editNewPostForm = newPostModal.querySelector('.modal__form');
const editNewPostCaptionInput = newPostModal.querySelector('#card-caption-input');
const editNewPostLinkInput = newPostModal.querySelector('#card-image-input');

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener('submit', function(event) {
    event.preventDefault();
    profileName.textContent = editProfileNameInput.value;
    profileDesription.textContent = editProfileDescriptionInput.value;
    closeModal(editProfileModal);
});

editProfileBtn.addEventListener('click', function() {
    editProfileNameInput.value = profileName.textContent;
    editProfileDescriptionInput.value = profileDesription.textContent;
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

  profileName.textContent = editProfileNameInput.value;
  profileDesription.textContent = editProfileDescriptionInput.value;
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