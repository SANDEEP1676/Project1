let btn = document.querrySelector('#new-quote'); 
let person1 = document.querrySelector('.person');
let quote1 = document.querrySelector('.quotes');

const quotes = [{
   quote:`"In the game of cricket, a hero is a person who respects the game and does not corrupt the game. The one who doesn't or corrupts the game, they are the villain. They should be punished, and they have been punished in the past."`
    ,person : `-Virat Kohli`
},
{quote:`"Self-Belief and hard work will always earn you sucess."`
,person : `-Virat Kohli`
},
{quote:`"A fit body gives you confidence. And there's nothing more impressive than a great attitude, which you can wear on your sleeve. But you'll have to remember the difference between being rude and being confident."`
,person : `-Virat Kohli`
},
{quote:`"In cricket, my superhero is Sachin Tendulkar. He has always been my hero and will continue to remain so. Apart from him and outside cricket, my mother has remained my inspiration. Whatever difficult time I had faced, she was always there for me. She has given me all the strength. She maintained her composure and supported me in tough times."`
,person : `-Virat Kohli`
},
{quote:`"In cricket, my superhero is Sachin Tendulkar. He has always been my hero and will continue to remain so. Apart from him and outside cricket, my mother has remained my inspiration. Whatever difficult time I had faced, she was always there for me. She has given me all the strength. She maintained her composure and supported me in tough times."`
,person : `-Virat Kohli`
},
];

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote1.innerText = quotes[3].quote;
    person1.innerText = quotes[3].person;
})