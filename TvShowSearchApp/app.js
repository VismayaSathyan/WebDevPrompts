const form = document.querySelector('#searchForm');
const input = document.querySelector('input');

form.addEventListener('submit', async function(e){
    e.preventDefault();
    const showName = form.elements.query.value;
    const config = {params:{q: showName} }
   const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
   //console.log(res.data[0].show.image.medium);
   makeImages(res.data);
   form.elements.query.value= "";
})

const makeImages = (shows) => {
for(let results of shows) {
    if(results.show.image){
        const img = document.createElement('IMG');
        img.src = results.show.image.medium;
        document.body.append(img);
    }
}
}