// pull url from a google spreadsheet
// the spreadsheet info is non private so i don't mind showing the ID .
//
// ==========================================================
 

  let url2         = "https://docs.google.com/spreadsheets/d/1Q6lT1r9Dq55z3H_DQS32-Th1Ws8Lf6NhibvfEzf4fs8/gviz/tq?tqx=out:json&";
  let url          = "https://docs.google.com/spreadsheets/d/1yoALf1_MGmwyohAwnuFtg3zyjSKxyxwlPwM6VtsQ78E/gviz/tq?tqx=out:json&"; 
  let tail         = "sheet=Regions&range=B13";
 // see sheet at:     https://docs.google.com/spreadsheets/d/1yoALf1_MGmwyohAwnuFtg3zyjSKxyxwlPwM6VtsQ78E/edit#gid=0
// ----------------
  


//fetch url from google and http req it.
async function refresh() {  
      region =  "sheet=Regions";
      let gsheet = url2  + tail;
      await fetch(gsheet)
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
           tmp = tmp.replaceAll("," , "\n");   
          document.getElementById("0").innerHTML = tmp;     
      })     
      .catch(err => {   
      });
  setTimeout(refresh,10000);  // disabled for testing
};
refresh();
// ==================================


 
