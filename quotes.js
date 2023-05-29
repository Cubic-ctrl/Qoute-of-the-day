var arrayOfQuotes = [ 

  {
    "author":"Benjamin Disraeli",
	"quote":"Everything comes if a man will only wait.",
  "lesson":"Patience."
  },
  {
    "author": "Horace Smith",
	"quote":"Our charity begins at home, mostly ends where it begins.",
  "lesson":"Charity"
  },
  {
    "author" :"Frank Sinatra",
	"quote": "The best revenge is massive success.",
  "lesson":"Revenge"
  },
  {
    "author": "Emerson",
    "quote": "All I have seen teaches m to trust the Creator for what I have not seen.",
    "lesson":"Faith"
  },
  {
    "author" :"Nelson Mandela",
	"quote":"Resentment is like drinking poison and waiting for your enemies to die.",
  "lesson":"Resentment"
  },

  {
    "author":"Prince Philip",
	"quote": "The art of being a good guest is to know when to leave.",
  "lesson":"Guest"
    
  },
  {
    "author": "Elbert Hubbard",
	"quote":"Do not take life too seriously. You will not get out alive.",
  "lesson":"Living"
    
  },
  {
    "author":"William Congreve",
	"quote": "Music hath charms to soothe a savage beast.",
  "lesson":"Music"
    
  },
  {
    "author":"Douglas Jerrold",
	"quote": "It takes all sorts of people to make a world.",
  "lesson":"World"
    
  },
  {
    "author": "Steele",
    "quote": "Reading is to the mind what exercise is to the body",
    "lesson":"Reading"
  }


]

function randomSelector(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}

function generateQuote() { 
  
var randomNumber = randomSelector(arrayOfQuotes.length);

document.getElementById("quoteOutput").innerHTML = '"' + arrayOfQuotes[randomNumber].quote + '"';
  
document.getElementById("authorOutput").innerHTML = "- " + arrayOfQuotes[randomNumber].author;
document.getElementById("lessonOutput").innerHTML = "-" + arrayOfQuotes[randomNumber].lesson;

}  
