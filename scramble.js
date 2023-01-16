//declaring the arrays 
const words = ["hippopotamus",
"butterflies",
"puppies",
"orangutan",
"buffalo",
"penguin",
"Microsoft",
"Wndows 10",
"Ms Dos",
"Minecraft",
"Bedrock",
"Asus",
"Logitech",
"MC Pocket Edition",
];
                
function randomWord(array) {
    var num = Math.floor((Math.random() * array.length) + 1);
    return num in array ? array[num] :  array[0];
 }
 
 function addText(text){
    var existingText = document.getElementById('text1').innerHTML = text;
    return existingText;
 }
 
 
 function scramble(word) {
   const scrambledArray = [];
   console.log(word);
   word = word.split('');
   while(word.length > 0) {
     var maxIndex = word.length;
     var randomIndex = Math.floor(Math.random()*maxIndex);
     scrambledArray.push(word[randomIndex])
     word.splice(randomIndex, 1)
   }
   return scrambledArray.join('');
 }
 
 function check() {
   var answer = document.getElementById('input0').value;
   if(answer == word) {
     alert("Correct answer.");
     newWord();
   } else {
     alert("Incorrect answer. Try again!");
   }
   console.log("checking");
 }
 
 
 function newWord() {
   word = randomWord(words);
   var scrambled = scramble(word);
   addText(scrambled); 
   document.getElementById('input0').value = '';
 }
 
 
 
  
 let word = randomWord(words);
 const mixed = scramble(word);
 const jumbled = addText(mixed);
 
 const button  = document.getElementById("button0");
 button.addEventListener("click", check);