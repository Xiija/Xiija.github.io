/* fork of: https://codepen.io/t3h2mas/pen/EKYOWO/
*/

var tog;
var speed = 40;
var ChaarSet ;
var rainColor = "#0F0"; 
var drawer;
var c = document.getElementById("c");
var ctx = c.getContext("2d");
//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

var kanji = "丐丑丒专且丕世〓丘丙业乂乃乄久乆乇么义乊之乌乍乎丛东丝丞丟丠両丢丣两严並丧丩个丫丬中丮丯亰亱亲儾￯";
var chinese = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";  
var burmese = "ကခဂဃငစဆဇဈဉညဋဌဍဎဒဓနပဖဗယရလဟဠအဢဣဤဥဦဧဨဩဪါာိီုူေဲဳဴဵံ့း္်ျြွှဿ၀၁၂၃၄၅၆၇၈၉၊။၌၍၎၏ၐၑၒၓၔၕၖၗၘၙၚၛၜၝၞၟၠၡၢၣၤၥၦၧၨၩၪၫၬၭၮၯၰၱၲၳၴၵၶၷၸၹၺၻၼၽၾၿႀႁႂႃႄႅႆႇႈႉႊႋႌႍႎႏ";
var mtrx1 = "zʎxʍʌnʇsɹbdouɯlʞɾıɥƃ ɟǝpɔqɐбвгдежзийклмнопрстуфхцшщъыьэюяѐёђѓєѕіїјљњћќѝў1234567890";
var mtrx2 = "♦▀▄█▌▐░▒▬♦◊◘◙◦☼♠♣▣▤▥▦▩◘◙LÞxÔ@ŽŒà@žÞ1234567890,L¦Ò:Œ1234567890~°Ü";
var mtrx3 = "♦▀▄█▌▐░▒▬♦◊◘◙◦☼♠♣▣▤▥▦▩◘◙1234567890甼甽甾甿畀畁畂畃畄畅畆畇畈畉1234567890ɯlʞɾıɥƃ ɟǝpɔqɐбвгдежзийклмнопрပဖဗယ1234567890ရလဟဠအဢဣဤဥဦဧဨဩ1234567890乄久乆乇么义乊之乌乍乎丛东丝丞丟1234567890Œà@žÞ1234567890,L¦Ò:";
//converting the string into an array of single characters
kanji = kanji.split("");
chinese = chinese.split("");
burmese = burmese.split("");
mtrx1 = mtrx1.split("");
mtrx2 = mtrx2.split("");
mtrx3 = mtrx3.split("");
var test;
var CharSet = "kj"; 
var font_size = 10; 
var columns = c.width / font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for (var x = 0; x < columns; x++)
{  drops[x] = 1; }

//drawing the characters
function draw() 
{
  //Black BG for the canvas
  //translucent BG to show trail
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, c.width, c.height);

  ctx.fillStyle = rainColor; //green text
  ctx.font = font_size + "px arial";
  //looping over drops 
  for (var i = 0; i < drops.length; i++)
  {
    
    // send to get rand character
    test = chars(); 
    
    if( Math.random() > 0.255) // .255, .555, .755
      { ctx.fillText( test , i * font_size, drops[i] * font_size  );
      }
    else // skip sometimes to get blank spaces in the codefall
      { ctx.fillText( test , i * font_size, (drops[i] * font_size) + Math.floor(Math.random() * 21) );      
      } 
    //sending the drop back to the top randomly after it has crossed the screen
    //adding a randomness to the reset to make the drops scattered on the Y axis
    if (drops[i] * font_size > c.height && Math.random() > 0.975)
      drops[i] = 0;
    drops[i]++
  }
}

/* --------------------------------- */

$(document).ready(function()
{  $('.centered').hide();  
   timer();
 // var easter_egg = new Konami(wakeUp); 
});

function timer()
{ drawer = setInterval(draw, speed );
  /*  drawer = setInterval(draw, speed + Math.floor(Math.random() * speed) );  */
}

function reset() 
{  clearInterval(drawer); 
   ctx.clearRect(0, 0, c.width, c.height);   
   timer();
};

function recolor()
{ rainColor = "#"+("000"+(Math.random()*(1<<24)|0).toString(16)).substr(-6); 
  reset(); 
}

function speedy()
{  //speed = Math.floor( Math.random()*51) + Math.floor( Math.random()*31);
   speed += 20;
   if(speed > 80)
   { speed = 20;      
   } 
   reset();
} 

function reload()
{  window.location.reload(false);    
}

// ===========================================================================
// Called by DRAW function 
function chars()
{   var text2use;
    if( CharSet == "kj" )
    {  text2use = kanji[Math.floor(Math.random() * kanji.length)];   
    }
    else if (CharSet == "ch")
    {  text2use = chinese[Math.floor(Math.random() * chinese.length)];
    }
    else if (CharSet == "bm")
    {  text2use = burmese[Math.floor(Math.random() * chinese.length)];
    }
    else if (CharSet == "mtrx1")
    {  text2use = mtrx1[Math.floor(Math.random() * chinese.length)];
    }
    else if (CharSet == "mtrx2")
    {  text2use = mtrx2[Math.floor(Math.random() * chinese.length)];
    }
    else if (CharSet == "mtrx3")
    {  text2use = mtrx3[Math.floor(Math.random() * chinese.length)];
    }
    return text2use;
}



//=========================================================\\

var count = 0;

function togText() // step thru text choices
{ 
  switch (count) 
  {
    case 0:
        CharSet = "ch";
        break;
    case 1:
        CharSet = "bm";
        break;
    case 2:
       CharSet = "mtrx1";
        break;
    case 3:
       CharSet = "mtrx2";
        break;
    case 4:
       CharSet = "mtrx3"; 
        break;  
    case 5:
       CharSet = "kj";
        break;
    } 
  ++count;
  if(count > 5){count = 0;} // 6 character sets,  indexed 0 to 5
  reset();
}

 function wakeUp() // leftover? unused? ...seems to display on run error
{
    clearInterval(drawer);
    $('#c').remove()   
    $('.centered').show(1000);    
};

/* ---------------------------------- */

function myFunction() // Options button
{ document.getElementById("myDropdown").classList.toggle("show");
}

function linkit() //can do with html?
{ window.open("https://codepen.io/Xiija/#");   
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e)
{
    if (!e.target.matches('.dropbtn')) 
    {  var myDropdown = document.getElementById("myDropdown");
       if (myDropdown.classList.contains('show')) 
       {  myDropdown.classList.remove('show');
       }
    }
}

// stop dropdown from closing after a click ...so user can keep changing speed etc
document.getElementById("myDropdown").addEventListener("click", function(e) 
{  e.stopPropagation();   
}); 

// NOTE: STILL need to toggle "options" button .. can click and NOT choose.. stays green "hover" bkg
$(".dropdown").hover(
    function(event)
    { // The mouse has entered the element, can reference the element via 'this'
      // console.log(" mouse IN");
    },
    function (event)
    {  // The mouse has left the element, can reference the element via 'this'
       // console.log(" mouse OUT");
      if (myDropdown.classList.contains('show')) 
       {  myDropdown.classList.remove('show');
       }
    }
 );