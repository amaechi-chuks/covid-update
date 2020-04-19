
const fetchCountry = async() =>{
await fetch('https://restcountries.eu/rest/v2/all')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
     data.map(item =>{
         let me = item.flag.split('/').splice(4);
         let k = me + ''
         let p = k.split('').slice(0, 3).join('').toUpperCase();
         if(p === item.alpha3Code){
         return item.flag
         }else{
             console.log('Keep Pushing')
         }
     })
  });
}
export default fetchCountry;