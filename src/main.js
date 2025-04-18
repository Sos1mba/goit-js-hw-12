import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const searchInput = form.querySelector('input[name="search-text"]');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = searchInput.value.trim();
  if (!query) {
    iziToast.warning({
      title: "Sorry, there are no images matching your search query. Please, try again!",
      titleColor: "#FAFAFB",
      backgroundColor: '#B51B1B',
    messageColor: '#EF4040',
    iconUrl: './img/Group.svg',
    iconColor: '#ffffff',
    position: 'topRight',
    timeout: 5000,
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);
    if (data.hits.length === 0) {
      iziToast.info({
        title: 'No Results',
        message: 'No images found for your search.',
        titleColor: "#FAFAFB",
        backgroundColor: '#B51B1B',
      messageColor: '#EF4040',
      iconColor: '#ffffff',
      position: 'topRight',
      timeout: 5000,
      });
    } else {
      createGallery(data.hits);
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong!',
      titleColor: "#FAFAFB",
      backgroundColor: '#B51B1B',
     messageColor: '#EF4040',
    iconColor: '#ffffff',
     position: 'topRight',
     timeout: 5000,
    });
  } finally {
    hideLoader();
  }
});