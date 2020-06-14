    //quotes listed as objects in quoteArr with properties of quote and author
    var quoteArr = [
        {quote: "My fault, my failure, is not in the passions I have, but in my lack of control of them.", author: "Jack Kerouac"},
        {quote: "Some people feel the rain. Others just get wet", author: "Bob Marley"},
        {quote: "The successful warrior is the average man, with laser-like focus.", author: "Bruce Lee"},
        {quote: "By failing to prepare, you are preparing to fail. ", author: "Benjamin Franklin"},
        {quote: "I think, therefore I am.", author: "René Descartes"},
        {quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius"},
        {quote: "It does not matter how slowly you go as long as you do not stop.", author: "Steve Jobs"},
        {quote: "It does not matter how slowly you go as long as you do not stop.", author: "Elon Musk"},
        {quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddah"},
        {quote: "Everything that irritates us about others can lead us to an understanding of ourselves.", author: "Carl Jung"},
        {quote: "Accept the terrible responsibility of life with eyes wide open.", author: "Jordan Peterson"},
        {quote: "Genius might be the ability to say a profound thing in a simple way.", author: "Charles Bukowski"},
        {quote: "When the power of love overcomes the love of power the world will know peace.", author: "Jimi Hendrix"},
        {quote: "Do not fear mistakes. There are none.", author: "Miles Davis"},
        {quote: "I've failed over and over and over again in my life and that is why I succeed.", author: "Michael Jordan"},
        {quote: "The secret of getting ahead is getting started.", author: "Mark Twain"},
        {quote: "Time you enjoy wasting, was not wasted.", author: "John Lennon"},
        {quote: "Anger and intolerance are the enemies of correct understanding.", author: "Mahatma Gandhi"},
        {quote: "You want your customers to value your service.", author: "Jeff Bezos"},
        {quote: "It's the repetition of affirmations that leads to belief. And once that belief becomes a deep conviction, things begin to happen.", author: "Muhammad Ali"},
        {quote: "If you do not change direction, you may end up where you are heading.", author: "Lao Tzu"}
    ]
// create DOM variables
var quote = document.querySelector("#quote");
var author = document.querySelector("#author");
var generateBtn = document.querySelector("#generateBtn");

//generate quote function
function generateQuote(){
        //randomly pick quote from array
        displayQuote=quoteArr[Math.floor(Math.random()*quoteArr.length)]
        console.log(displayQuote);
};
//write quote to html doc
function writeQuote(){
    generateQuote();
    var quoteText = displayQuote.quote;
    var authorText = displayQuote.author;
    quote.textContent = quoteText;
    author.textContent = authorText;
}
//add event listener to generate button
generateBtn.addEventListener("click", writeQuote);
