//String constructor
var sentence = new String("the quick brown fox jumped over the lazy dog");
//String literal
var sentence = "the quick brown fox jumped over the lazy dog";
//split() is a method of the String object. The method takes two optional parameters, the first argument is the seperator i.e. create an array based on the spaces like below
var words = sentence.split(' ');

for (var i = 0; i < words.length; ++i) {
    console.log("word " + i + ": " + words[i]);
}