function countletters() {
    var x = document.getElementById("message").value;
    var y = x.length;
    console.log(x.length);
    demo(x.length);

}
function demo(length) {
    document.getElementById("demo").innerHTML = length;

}
function countwords(){
     x = document.getElementById("message").value;
     y = x.split(" ");
     document.getElementById("demo").innerHTML = y.length;
    console.log(y);
}
let countSpaces = function() {
    let string = document.getElementById('message').value;
    let length = (string.split( ' ' ).length-1);
    document.getElementById('demo').innerHTML = length;
  };
  
  
  let countNewline = function() {
    let string = document.getElementById('message').value;
    let lines = string.split(/\r\n|\r|\n/ );
    document.getElementById('demo').innerHTML = lines.length;
  };
  
  
  
  let countVowels = function() {
    let string = document.getElementById('message').value;
    let lines = Array.from(string).filter(letter => 'aeiouAEIOU'.includes(letter)).length;
    document.getElementById('demo').innerHTML = lines;
  };
  
  
  let countConsonants = function() {
    let string = document.getElementById('message').value;
    let lines = Array.from(string).filter(letter => 'bcdfghjklmnpqrstvwxyz'.includes(letter)).length;
    document.getElementById('demo').innerHTML = lines;
  };
  
  
  let sortWords = function() {
    let string = document.getElementById('message').value;
    let lines = string.split(/\s+/);
    

    let one = 0;
    let two = 0;
    let three = 0;
    let four = 0;
    let five = 0;
    let six = 0;
    let seven = 0;
    let eight = 0;
    let nine = 0;
    let ten= 0;
    let eleven = 0;
    let twelve = 0;

    for (var i=0; i < lines.length; i++) {
        var len = lines[i].length;
        if (len == 1){
            one++
        } else if (len == 2){
            two++

        } else if (len == 3){
            three++

        } else if (len == 4){
            four++

        } else if (len == 5){
            five++

        } else if (len == 6){
            six++

        } else if (len == 7){
            seven++

        } else if (len = 8){
            eight++

        } else if (len == 9){
            nine++

        } else if (len == 10){
            ten++

        } else if (len == 11){
            eleven++

        } else if (len == 12){
            twelve++

        }
    }
    
   var result = ` "1 letter words are : ${one}",\n "2 letter words are : ${two}", \n "3 letter words are : ${three}", \n "4 letter words are : ${four}", \n "5 letter words are : ${five}", \n "6 letter words are : ${six}", \n "7 letter words are : ${seven}", \n "8 letter words are : ${eight}",  \n "9 letter words are : ${nine}",  \n "10 letter words are : ${ten}",  \n "11 letter words are : ${eleven}",  \n "12 letter words are : ${twelve }"`
   document.getElementById("demo").innerHTML = result;


    console.log("1 letter words are : " + one);
    console.log ("2 letter words are : " + two);
    console.log ("3 letter words are : " + three);   
    console.log ("4 letter words are : " + four);
    console.log ("5 letter words are : " +  five);
    console.log ("6 letter words are : " +  six);
    console.log ("7 letter words are : " + seven);
    console.log ("8 letter words are : " + eight);
    console.log ("9 letter words are : " + nine);
    console.log ("10 letter words are : " + ten);
    console.log ("11 letter words are : " + eleven);
    console.log ("12 letter words are : " + twelve);

  };
  
  
  let capitalize = function() {
    let string = document.getElementById('message').value;
    let lines = string.toUpperCase()
  //   let lines = string.charAt(0).toUpperCase() + string.slice(0);
    document.getElementById('demo').innerHTML = lines;
  };
  
  
  let smallLetter = function() {
    let string = document.getElementById('message').value;
    let lines = string.toLowerCase();
    //   let lines = string.charAt(0).toLowerCase() + string.slice(0);
    document.getElementById('demo').innerHTML = lines;
  };
  let titleCase = function()  {
    let string = document.getElementById('message').value;
    let newStr = string.split(' ').map(w => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(' ');
    document.getElementById('demo').innerHTML = newStr;
    console.log(newStr);
  };

