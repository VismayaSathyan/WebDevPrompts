//  const getStarWarsPerson = async (id) => {
//     try{
//     const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//     console.log(res.data);
//     }
//     catch(e) {
//         console.log("ERROR!!!!", e);
//     }
// };

// getStarWarsPerson(1);
// getStarWarsPerson(2);

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
    const jokeText = await getDadJokes();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}
const getDadJokes = async () =>{
    try{
    const config = {headers : {Accept: 'application/json'}};
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;
    }
   catch(e){
       return "NO JOKES AVAILABLE! SORRY :( ";
   }
}
button.addEventListener('click', addNewJoke);