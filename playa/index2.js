// pull url from a google spreadsheet
// the spreadsheet info is non private so i don't mind showing the ID .
// all of a sudden stopped working ....?
// ==========================================================
 
  let dynamicPart2 = document.getElementById("dynamicPart2");  
  let url          = "https://docs.google.com/spreadsheets/d/1yoALf1_MGmwyohAwnuFtg3zyjSKxyxwlPwM6VtsQ78E/gviz/tq?tqx=out:json&";
  let region       = "sheet=";
  let tail         = "&gid=0&range=B2";
 // see sheet at:     https://docs.google.com/spreadsheets/d/1yoALf1_MGmwyohAwnuFtg3zyjSKxyxwlPwM6VtsQ78E/edit#gid=0
// ----------------

// ---------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// -----------------
//fetch url from google and http req it.
async function refresh() {
  region += "Data"; //"Burning Man- Deep Hole";
  let gsheet = url + region + tail;
  fetch(gsheet)
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
     
  })
  .then(info2 => {   
  })
  .catch(err => {   
  });
  setTimeout(refresh,1000);  // disabled for testing
};
refresh();
// ==================================


 
