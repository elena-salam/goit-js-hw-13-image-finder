const baseUrl = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';

export default{
    page:1,
    query: '',
    fetchArticles(){
        const requestParam = `&q=${this.query}&page=${this.page}`;
        const commonInfo = '&per_page=12&key=18108257-442a69c668d0345c031d8f80c';
        
        this.page +=1;
        return fetch(baseUrl + requestParam + commonInfo)
        .then(response=>response.json())
        .then(parsedResponse =>{
            this.incrementPage();
            return parsedResponse.hits;
        });   
    },
    get searchQuery(){
        return this.query;
    },
    set searchQuery(string){
        this.query = string;
    },
    incrementPage(){
        this.page +=1;
    },
    resetPage(){
        this.page=1;
    }
};