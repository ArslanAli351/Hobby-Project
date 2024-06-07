
let style=document.querySelectorAll(".styleEl")
let divEl=document.querySelectorAll(".data");
let butEl=document.querySelectorAll("button");
let ulEl=document.getElementsByClassName("Quize-1");
let divElw=document.querySelectorAll("select")[0];
let h1=document.querySelectorAll("h1");
let h5 =document.querySelectorAll("h5")
let h4 =document.querySelectorAll("h4")
let div =document.querySelectorAll("#persentage")
let h3 =document.querySelectorAll("h3")
let h2 =document.querySelectorAll("h2")
let h6 =document.querySelectorAll("h6")
function sub() {
  style.className=""
   const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  if (!email || !password) {
  h6[0].innerHTML=('Please enter both email and password.');
  setTimeout(function() {
    h6[0].innerHTML = "";
    }, 2000);
    
  return;
  }
  if (email.includes('@') && password.length >= 4) {
  console.log('Valid input!');
  } else {
    h6[0].innerHTML +=('Invalid input! Please check your email and password.');
    setTimeout(function() {
      h6[0].innerHTML = "";
      }, 2000);
      
  }
  element()
  }
  function element(){
  divEl[0].innerHTML=`<div class="select" id="hide"><h1 class="head">Select the Quize</h1><h3 onclick="quation()" ><input type="radio" name="select"/> HTML</h3>
<h3 onclick="quationCSS()" ><input type="radio" name="select"/>CSS </h3>
<h3 onclick="quationjS()"><input type="radio" name="select"/>JAVASCRIPT </h3></div>
`
h3[0].innerHTML=""
h4[0].innerHTML=""
h5[0].innerHTML=""
h3[0].className=""
h5[0].className=""
h4[0].className=""
div[0].innerHTML=""
div[0].className=""
}
function quation(){
  divEl[0].innerHTML=""
ulEl[0].innerHTML=`<div class="center"><h1>HTML Quiz</h1><h4>Question:1</h4></div><div class="style"><h2>HTML line Break  .....?</h2>
<li onclick="uncoracta()"><input type="radio" name="select"/> ul</li>
<li onclick="uncoracta()"><input type="radio" name="select"/>h2</li>
<li onclick="submit()"><input type="radio" name="select"/> br</li>
<button id="hde" onclick="quation2()">Next</button></div>`
}
function quation2(){
    ulEl[0].innerHTML=`<div class="center"><h1>HTML Quiz</h1><h4>Question:2</h4></div>
    <div class="style"><h2>Who is the father of HTML?</h2><li onclick="submit()"><input type="radio" name="select"/>Tim Berners-Lee </li>
    <li onclick="uncoracta()"><input type="radio" name="select"/> Brendan Eich</li>
    <li onclick="uncoracta()"><input type="radio" name="select"/>Sergey Brin </li>
      <button class="but" onclick="quation()">previous</button>
      <button onclick="quation3()">Next</button>`
 }
function quation3(){
  ulEl[0].innerHTML=`<div class="center"><h1>HTML Quiz</h1><h4>Question:3</h4></div>
  <div class="style"><h2>HTML stands for ___</h2><li onclick="uncoracta()"><input type="radio" name="select"/> HyperText Machine Language
  </li>
  <li onclick="submit()"><input type="radio" name="select"/> HyperText Marking Language</li>
  <li onclick="uncoracta()"><input type="radio" name="select"/>HyperText Markup Language </li>
  <button class="but" onclick="quation2()">previous</button>
  <button onclick=" quation4()">Next</button>`
}

function quation4(){
  ulEl[0].innerHTML=`<div class="center"><h1>HTML Quiz</h1><h4>Question:4</h4></div>
  <div class="style"><h2> Which is used to read an HTML page and render it?</h2>
<li onclick="submit()"><input type="radio" name="select"/> Web browser </li> 
  <li onclick="uncoracta()"><input type="radio" name="select"/>Web network </li>
  <li onclick="uncoracta()"><input type="radio" name="select"/> Web server</li>
  <button class="but" onclick=" quation3()">previous</button>
  <button onclick=" quation5()">Next</button>`
}

function quation5(){
  ulEl[0].innerHTML=`<div class="center"><h1>HTML Quiz</h1><h4>Question:5</h4></div>
  <div class="style"><h2>Which tag is used for inserting the largest heading in HTML? </h2>
<li onclick="uncoracta()"><input type="radio" name="select"/>heading </li> 
  <li onclick="submit()"><input type="radio" name="select"/> h1 </li>
  <li onclick="uncoracta()"><input type="radio" name="select"/> head </li>
  <button class="but" onclick=" quation4()">previous</button>
  <button onclick=" quation6()">Next</button>`
}

function quation6(){
  ulEl[0].innerHTML=`<div class="center"><h1>HTML Quiz</h1><h4>Question:6</h4></div>
  <div class="style"><h2>Every HTML element may have an ___ attribute specified. </h2>
<li onclick="uncoracta()"><input type="radio" name="select"/>itemtype </li> 
  <li onclick="submit()"><input type="radio" name="select"/> itemscope </li>
  <li onclick="uncoracta()"><input type="radio" name="select"/>None of the above </li>
  <button class="but" onclick="quation5()">previous</button>
  <button onclick="quation7()">Next</button>`
}
function quation7(){
  ulEl[0].innerHTML=`<div class="center"><h1>HTML Quiz</h1><h4>Question:7</h4></div>
  <div class="style"><h2> The default attribute value of "target" is ___ in HTML. </h2>
<li onclick="submit()"><input type="radio" name="select"/> _self </li> 
  <li onclick="uncoracta()"><input type="radio" name="select"/>_top </li>
  <li onclick="uncoracta()"><input type="radio" name="select"/> _blank </li>
  <button class="but" onclick="quation6()">previous</button>
  <button onclick="quation8()">Next</button>`
}
function quation8(){
  ulEl[0].innerHTML=
  `<div class="center"><h1>HTML Quiz</h1><h4>Question:8</h4></div>
    <div class="style"><h2>HTML links can be styled using ___.</h2>
  <li onclick="uncoracta()"><input type="radio" name="select"/>PHP </li> 
    <li onclick="uncoracta()"><input type="radio" name="select"/>JavaScript </li>
    <li onclick="submit()"><input type="radio" name="select"/>CSS </li>
    <button class="but" onclick="quation7()">previous</button>
    <button onclick="quation9()">Next</button>`
}
function quation9(){
  ulEl[0].innerHTML=
  `<div class="center"><h1>HTML Quiz</h1><h4>Question:9</h4></div>
    <div class="style"><h2>Which is largest Heading tag in HTML ? </h2>
  <li onclick="submit()"><input type="radio" name="select"/> H1</li> 
    <li onclick="uncoracta()"><input type="radio" name="select"/>H2 and H6 </li>
    <li onclick="uncoracta()"><input type="radio" name="select"/>H3</li>
    <button class="but" onclick="quation8()">previous</button>
    <button onclick="quation10()">Next</button>`
}
function quation10(){
  ulEl[0].innerHTML=`<div ><div class="center"><h1>HTML Quiz</h1><h4>Question:10</h4></div>
  <div class="style"><h2> Which tag is used to divide the HTML document into the paragraphs ? </h2>
<li onclick="uncoracta()"><input type="radio" name="select"/> paragraph </li> 
  <li onclick="uncoracta()"><input type="radio" name="select"/>pg </li>
  <li onclick="submit()"><input type="radio" name="select"/>p </li>
  <button class="but" onclick="quation9()">previous</button>
  <button onclick="coracta(); uncort(); moretag(); ">Submit</button> </div>`
}
let numArray=[]
function submit(){
 let array=0
if(array===0){
  numArray.push(-0)
}
let i = 0;
while (i <numArray.length) {
      i++;
}
return i
}

function coracta(){
let arry=submit()-1
h5[0].innerHTML =arry+" Correct"
h5[0].className=" coracta"
let per=arry/10*100+"%"
h5[0].innerHTML +=
  h3[0].className=" Result"
h3[0].innerHTML=per
h2[0].innerHTML=""

}
let numAry=[]
function uncoracta(){
  let array=0
  if(array===0){
    numAry.push(-0)
  }
  let i = 0;
  while (i <numAry.length) {
  i++;
  }
  return i
}
function uncort(){
  let num=uncoracta()-1
  h4[0].className=" uncoracta"
  h4[0].innerHTML +=num+" Uncorrect"
}
function moretag(){
  ulEl[0].innerHTML=""
  div[0].innerHTML=` <button onclick="element()">Try again</button>`
  div[0].className=" persentage"
  }


function quationCSS(){
  divEl[0].innerHTML=""
ulEl[0].innerHTML=`<div class="center"><h1>CSS Quiz</h1><h4>Question:1</h4></div><div class="style"><h2> CSS stands for ______</h2>
<li onclick="uncoractaCSS()"><input type="radio" name="select"/>  Color Style Sheets</li>
<li onclick="uncoractaCSS()"><input type="radio" name="select"/>Cascade Style Sheet</li>
<li onclick="submit()"><input type="radio" name="select"/> Cascading Style Sheets</li>
<button id="hde" onclick="quationCSS2()">Next</button></div>`
}
function quationCSS2(){
    ulEl[0].innerHTML=`<div class="center"><h1>CSS Quiz</h1><h4>Question:2</h4></div>
    <div class="style"><h2>Which tag is used to embed CSS in HTML document?</h2><li onclick="submit()"><input type="radio" name="select"/>style</li>
    <li onclick="uncoractaCSS()"><input type="radio" name="select"/>  !DOCTYPE html</li>
    <li onclick="uncoractaCSS()"><input type="radio" name="select"/>script </li>
      <button class="but" onclick="quationCSS()">previous</button>
      <button onclick="quationCSS3()">Next</button>`
 }
function quationCSS3(){
  ulEl[0].innerHTML=`<div class="center"><h1>CSS Quiz</h1><h4>Question:3</h4></div>
  <div class="style"><h2>Which HTML attribute is used to define inline styles ?</h2><li onclick="uncoractaCSS()"><input type="radio" name="select"/> HyperText Machine Language
  </li>
  <li onclick="submit()"><input type="radio" name="select"/> style</li>
  <li onclick="uncoractaCSS()"><input type="radio" name="select"/>class </li>
  <button class="but" onclick="quationCSS2()">previous</button>
  <button onclick="quationCSS4()">Next</button>`

}

function quationCSS4(){
  ulEl[0].innerHTML=`<div class="center"><h1>CSS Quiz</h1><h4>Question:4</h4></div>
  <div class="style"><h2> Which value of cursor shows it as an arrow ?</h2>
<li onclick="submit()"><input type="radio" name="select"/>default</li> 
  <li onclick="uncoractaCSS()"><input type="radio" name="select"/>pointer</li>
  <li onclick="uncoractaCSS()"><input type="radio" name="select"/>crosshair</li>
  <button class="but" onclick=" quationCSS3()">previous</button>
  <button onclick=" quationCSS5()">Next</button>`
}

function quationCSS5(){
  ulEl[0].innerHTML=`<div class="center"><h1>CSS Quiz</h1><h4>Question:5</h4></div>
  <div class="style"><h2>Which of the style sheet is also known as Embedded Style Sheet ?</h2>
<li onclick="uncoractaCSS()"><input type="radio" name="select"/>External Style Sheet </li> 
  <li onclick="submit()"><input type="radio" name="select"/>Document Style Sheet: </li>
  <li onclick="uncoractaCSS()"><input type="radio" name="select"/>None of the above</li>
  <button class="but" onclick=" quationCSS4()">previous</button>
  <button onclick=" quationCSS6()">Next</button>`
}

function quationCSS6(){
  ulEl[0].innerHTML=`<div class="center"><h1>CSS Quiz</h1><h4>Question:6</h4></div>
  <div class="style"><h2>Which is the superior styles of html ?
  </h2>
<li onclick="uncoractaCSS()"><input type="radio" name="select"/>frame </li> 
  <li onclick="submit()"><input type="radio" name="select"/> CSS </li>
  <li onclick="uncoractaCSS()"><input type="radio" name="select"/>iframe </li>
  <button class="but" onclick="quationCSS5()">previous</button>
  <button onclick="quationCSS7()">Next</button>`
}
function quationCSS7(){
  ulEl[0].innerHTML=`<div class="center"><h1>CSS Quiz</h1><h4>Question:7</h4></div>
  <div class="style"><h2>CSS color change </h2>
<li onclick="submit()"><input type="radio" name="select"/>color:</li> 
  <li onclick="uncoractaCSS()"><input type="radio" name="select"/>color=</li>
  <li onclick="uncoractaCSS()"><input type="radio" name="select"/>color;()</li>
  <button class="but" onclick="quationCSS6()">previous</button>
  <button onclick="quationCSS8()">Next</button>`
}
function quationCSS8(){
  ulEl[0].innerHTML=
  `<div class="center"><h1>CSS Quiz</h1><h4>Question:8</h4></div>
    <div class="style"><h2> Which property changes the color of top border ?</h2>
  <li onclick="uncoractaCSS()"><input type="radio" name="select"/>:border-right-color </li> 
    <li onclick="uncoractaCSS()"><input type="radio" name="select"/>:border-bottom-color </li>
    <li onclick="submit()"><input type="radio" name="select"/>:border-top-color </li>
    <button class="but" onclick="quationCSS7()">previous</button>
    <button onclick="quationCSS9()">Next</button>`
}
function quationCSS9(){
  ulEl[0].innerHTML=
  `<div class="center"><h1>CSS Quiz</h1><h4>Question:9</h4></div>
    <div class="style"><h2>Which property is used to increase or decrease the size of a font ? </h2>
  <li onclick="submit()"><input type="radio" name="select"/> font-size</li> 
    <li onclick="uncoractaCSS()"><input type="radio" name="select"/>font-weight </li>
    <li onclick="uncoractaCSS()"><input type="radio" name="select"/>font</li>
    <button class="but" onclick="quationCSS8()">previous</button>
    <button onclick="quationCSS10()">Next</button>`
}
function quationCSS10(){
  ulEl[0].innerHTML=`<div ><div class="center"><h1>CSS Quiz</h1><h4>Question:10</h4></div>
  <div class="style"><h2>Which property is used to set the width of an image border ? </h2>
<li onclick="uncoractaCSS()"><input type="radio" name="select"/>img-width </li> 
  <li onclick="uncoractaCSS()"><input type="radio" name="select"/>width-of-border </li>
  <li onclick="submit()"><input type="radio" name="select"/>border</li>
  <button class="but" onclick="quationCSS9()">previous</button>
  <button onclick="coractaCSS(); uncortCSS(); moretagCSS(); ">Submit</button> </div>`
}
let numArrayCSS=[]
function submit(){
 let array=0
if(array===0){
  numArrayCSS.push(-0)
}
let i = 0;
while (i <numArrayCSS.length) {
      i++;
}
return i
}

function coractaCSS(){
let arryCSS=submit()-1
h5[0].innerHTML =arryCSS+" Correct"
h5[0].className=" coracta"
let per=arryCSS/10*100+"%"
   h3[0].className=" Result"
h3[0].innerHTML=per


}
let numAryCSS=[]
function uncoractaCSS(){
  let array=0
  if(array===0){
    numAryCSS.push(-0)
  }
  let i = 0;
  while (i <numAryCSS.length) {
  i++;
  }
  return i
}
function uncortCSS(){
  let num=uncoractaCSS()-1
  h4[0].className=" uncoracta"
  h4[0].innerHTML +=num+" Uncorrect"
}
function moretagCSS(){
  ulEl[0].innerHTML=""
  div[0].innerHTML=` <button onclick="element()">Try again</button>`
  div[0].className=" persentage"
  }

  function quationjS(){
    divEl[0].innerHTML=""
  ulEl[0].innerHTML=`<div class="center"><h1>Javascript Quiz</h1><h4>Question:1</h4></div><div class="style"><h2> Javascript is a _____ language.</h2>
  <li onclick="uncoractajS()"><input type="radio" name="select"/>  Programming</li>
  <li onclick="uncoractajS()"><input type="radio" name="select"/>Application</li>
  <li onclick="submitjS()"><input type="radio" name="select"/>Scripting</li>
  <button id="hde" onclick="quationjS2()">Next</button></div>`
  }
 
  function quationjS2(){
      ulEl[0].innerHTML=`<div class="center"><h1>Javascript Quiz</h1><h4>Question:2</h4></div>
      <div class="style"><h2> JavaScript is a _____ Side Scripting Language.</h2><li onclick="submit()"><input type="radio" name="select"/>Browser </li>
      <li onclick="uncoractajS()"><input type="radio" name="select"/>Server</li>
      <li onclick="uncoractajS()"><input type="radio" name="select"/>ISP </li>
        <button class="but" onclick="quationjS()">previous</button>
        <button onclick="quationjS3()">Next</button>`
   }
  function quationjS3(){
    ulEl[0].innerHTML=`<div class="center"><h1>Javascript Quiz</h1><h4>Question:3</h4></div>
    <div class="style"><h2> JavaScript code is written inside file having extension</h2><li onclick="uncoractajS()"><input type="radio" name="select"/>.javascript
    </li>
    <li onclick="submitjS()"><input type="radio" name="select"/>.js</li>
    <li onclick="uncoractajS()"><input type="radio" name="select"/>.jsc </li>
    <button class="but" onclick="quation2jS()">previous</button>
    <button onclick=" quationjS4()">Next</button>`
  
  }
  
  function quationjS4(){
    ulEl[0].innerHTML=`<div class="center"><h1>Javascript Quiz</h1><h4>Question:4</h4></div>
    <div class="style"><h2> Local Browser used for validations on the Web Pages uses</h2>
  <li onclick="submitjS()"><input type="radio" name="select"/>JS </li> 
    <li onclick="uncoractajS()"><input type="radio"name="select"/> HTML </li>
    <li onclick="uncoractajS()"><input type="radio"name="select"/> CSS</li>
    <button class="but" onclick=" quation3jS()">previous</button>
    <button onclick=" quationjS5()">Next</button>`
  }
  
  function quationjS5(){
    ulEl[0].innerHTML=`<div class="center"><h1>Javascript Quiz</h1><h4>Question:5</h4></div>
    <div class="style"><h2>JavaScript code can be called by using </h2>
  <li onclick="uncoractajS()"><input type="radio" name="select"/>Preprocessor</li> 
    <li onclick="submitjS()"><input type="radio" name="select"/> Function / Method </li>
    <li onclick="uncoractajS()"><input type="radio" name="select"/> None of the abovehead </li>
    <button class="but" onclick=" quationjS4()">previous</button>
    <button onclick=" quationjS6()">Next</button>`
  }
  
  function quationjS6(){
    ulEl[0].innerHTML=`<div class="center"><h1>Javascript Quiz</h1><h4>Question:6</h4></div>
    <div class="style"><h2>Which of the following is not javascript data types? </h2>
  <li onclick="uncoractajS()"><input type="radio" name="select"/>Undefined type </li> 
    <li onclick="submitjS()"><input type="radio" name="select"/> All of the above </li>
    <li onclick="uncoractajS()"><input type="radio" name="select"/>Null type </li>
    <button class="but" onclick="quationjS5()">previous</button>
    <button onclick="quationjS7()">Next</button>`
  }
  function quationjS7(){
    ulEl[0].innerHTML=`<div class="center"><h1>Javascript Quiz</h1><h4>Question:7</h4></div>
    <div class="style"><h2>What do you mean by the word "JavaScript"? </h2>
  <li onclick="submitjS()"><input type="radio" name="select"/>  JavaScript is a scripting language used to make the website interactive </li> 
    <li onclick="uncoractajS()"><input type="radio" name="select"/>JavaScript is a compiled language used to make the website interactive </li>
    <li onclick="uncoractajS()"><input type="radio" name="select"/>JavaScript is an assembly language used to make the website interactive </li>
    <button class="but" onclick="quationjS6()">previous</button>
    <button onclick="quationjS8()">Next</button>`
  }
  function quationjS8(){
    ulEl[0].innerHTML=
    `<div class="center"><h1>Javascript Quiz</h1><h4>Question:8</h4></div>
      <div class="style"><h2> Arrays in JavaScript are defined by which of the following statements?.</h2>
    <li onclick="uncoractajS()"><input type="radio" name="select"/>It is an ordered list of objects </li> 
      <li onclick="uncoractajS()"><input type="radio" name="select"/>It is an ordered list of string </li>
      <li onclick="submitjS()"><input type="radio" name="select"/>It is an ordered list of values </li>
      <button class="but" onclick="quationjS7()">previous</button>
      <button onclick="quationjS9()">Next</button>`
  }
  function quationjS9(){
    ulEl[0].innerHTML=
    `<div class="center"><h1>Javascript Quiz</h1><h4>Question:9</h4></div>
      <div class="style"><h2> Which of the following purpose, JavaScript is designed for ? </h2>
    <li onclick="submitjS()"><input type="radio" name="select"/>To add interactivity to HTML Pages.</li> 
      <li onclick="uncoractajS()"><input type="radio" name="select"/>To Perform Server Side Scripting Opertion </li>
      <li onclick="uncoractajS()"><input type="radio" name="select"/>To Style HTML Pages</li>
      <button class="but" onclick="quationjS8()">previous</button>
      <button onclick="quationjS10()">Next</button>`
  }
  function quationjS10(){
    ulEl[0].innerHTML=`<div ><div class="center"><h1>Javascript Quiz</h1><h4>Question:10</h4></div>
    <div class="style"><h2> JavaScript Code can be called by using ____________ </h2>
  <li onclick="uncoractajS()"><input type="radio" name="select"/> RMI </li> 
    <li onclick="uncoractajS()"><input type="radio" name="select"/>Triggering Event </li>
    <li onclick="submitjS()"><input type="radio" name="select"/>Function/Method </li>
    <button class="but" onclick="quationjS9()">previous</button>
    <button onclick="coractajS(); uncortjS(); moretagjS(); ">Submit</button> </div>`
  }
  let numArrayjS=[]
  function submitjS(){
   let arrayjS=0
  if(arrayjS===0){
    numArrayjS.push(-0)
  }
  let i = 0;
  while (i <numArrayjS.length) {
        i++;
  }
  return i
  }
  
  function coractajS(){
  let arryjS=submitjS()-1
  h5[0].innerHTML =arryjS+" Correct"
  h5[0].className=" coracta"
  let perjS=arryjS/10*100+"%"
  h5[0].innerHTML +=
    h3[0].className=" Result"
  h3[0].innerHTML=perjS
   
  }
  let numAryjS=[]
  function uncoractajS(){
    let arrayjS=0
    if(arrayjS===0){
      numAryjS.push(-0)
    }
    let i = 0;
    while (i <numAryjS.length) {
    i++;
    }
    return i
  }
  function uncortjS(){
    let num=uncoractajS()-1
    h4[0].className=" uncoracta"
    h4[0].innerHTML +=num+" Uncorrect"
  }
  function moretagjS(){
    ulEl[0].innerHTML=""
    div[0].innerHTML=` <button onclick="element()">Try again</button>`
    div[0].className=" persentage"
    }








            
        

















