import './styles.css';
import articlesListItemsTemplate from './picturesTemplate.hbs';
import apiService from './js/apiService';


const refs={
    searchForm: document.querySelector('#search-form'),
    gallery: document.querySelector('#gallery'),
    loadMoreBtn: document.querySelector('button[data-action="load-more"]')
}

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
refs.loadMoreBtn.addEventListener('click', loadMoreBtnHandler);

function searchFormSubmitHandler(e){
    e.preventDefault();

    const form = e.currentTarget;
    const inputValue = form.elements.query.value;

    clearImages();
    apiService.resetPage();
    apiService.searchQuery = inputValue;
    apiService.fetchArticles().then(hits=>{
        const markup = buildListItemsMarkup(hits);
        insertListItems(markup);
    });
}
function loadMoreBtnHandler(e){
    apiService.fetchArticles().then(hits=>{
        const markup = buildListItemsMarkup(hits);
        insertListItems(markup);
    });
    
    https://learn.javascript.ru/metrics-window

    window.scrollTo({
        top: document.documentElement.scrollHeight,
        left: 0,
        behavior: 'smooth',
      });

  //вариант рабочий, адаптивный, но кустарный: Нагуглила на форумах 
//     let i = 500;
//    setInterval(function() {
//     window.scrollTo(0, i);
//     i += 500;
//    },20)
}

function insertListItems(items){
    refs.gallery.insertAdjacentHTML('beforeend', items);
}

function buildListItemsMarkup(items){
    return articlesListItemsTemplate(items);
}

function clearImages(){
    refs.gallery.innerHTML = '';
}