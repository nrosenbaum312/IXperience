const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
   ]   


const description = document.getElementById("description");
const guess = document.getElementById("guess");
const submitbtn = document.getElementById("submit");
const hintbtn = document.getElementById("hintbtn");
const output = document.getElementById('output');
const hint = document.getElementById("hint");

const randomNum = Math.round(Math.random()*10)
console.log(randomNum)
const movie = movies[randomNum];
console.log(movie);
description.innerHTML = movie.explanation;

const elem = document.createElement('div');
elem.classList.add('alert');
output.innerHTML = '';

console.log(guess);

submitbtn.addEventListener("click", (e) => {
    
    
    if(guess.value == movie.title){
        elem.classList.add('alert-success');
        elem.innerHTML = "correct it was " +  movie.title;
    } else{
        elem.classList.add('alert-danger');
        elem.innerHTML = 'no it was not ' + guess.value;
    }


    output.appendChild(elem);
});

console.log(hintbtn);
console.log(movie.hint)

hintbtn.addEventListener("click", (e) => {
    hint.innerHTML = movie.hint;
})