// pull url from a google spreadsheet
// the spreadsheet info is non private so i don't mind showing the ID .
// the repl all of a sudden stopped working ....?


// ==========================================================

  let tm           = document.getElementById("s1");
  let dynamicPart2 = document.getElementById("dynamicPart2");  
  let url = "https://docs.google.com/spreadsheets/d/1yoALf1_MGmwyohAwnuFtg3zyjSKxyxwlPwM6VtsQ78E/gviz/tq?tqx=out:json&sheet=Data&gid=0&range=B2";


// https://docs.google.com/spreadsheets/d/1yoALf1_MGmwyohAwnuFtg3zyjSKxyxwlPwM6VtsQ78E/edit#gid=0
// https://docs.google.com/spreadsheets/d/1yoALf1_MGmwyohAwnuFtg3zyjSKxyxwlPwM6VtsQ78E/edit?usp=sharing
// ----------------
let time = function() {   
     let tstamp = new Date()
      .toLocaleString( 'en-US', {
         timeZone: 'America/Los_Angeles',
         hour12: true
      }); 
      return tstamp;   
};
// -----------------

//fetch url from google and http req it.

async function refresh() {
  
  fetch(url)
  .then(res  => res.text())
  .then(data => {
     data = data.substr(47).slice(0,-2);   
     return data;
  })
  .then(info => {       
       let info2 = info;
       info = JSON.parse(info);      
       let slurl = info.table.rows[0].c[0].v;     
       let tmp = slurl.replace("{people=","");
       tmp = tmp.replace("}","");
       tmp = tmp.replaceAll("," , "<br>");      
       dynamicPart2.innerHTML = "ON PLAYA: <br><br>"  + tmp;  
       let currtime = time();
       tm.innerHTML = currtime;
  })
  .then(info2 => {   
  })
  .catch(err => {   
  });
  setTimeout(refresh,10000);  // disabled for testing
};

 refresh();

// ==================================


 
