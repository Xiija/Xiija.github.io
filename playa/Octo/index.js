// pull url from a google spreadsheet
// the spreadsheet info is non private so i don't mind showing the ID .
//
// ==========================================================
 // https://docs.google.com/spreadsheets/d/1ZAQBA-5DYboW2OEwCC8hX2LEO1J4P7-8BXeH-c-05KU/edit?gid=0#gid=0
  let url         = "https://docs.google.com/spreadsheets/d/1ZAQBA-5DYboW2OEwCC8hX2LEO1J4P7-8BXeH-c-05KU/gviz/tq?tqx=out:json&"; // 2026 octo regions 
  let tail         = "sheet=Regions&range=B13"; // "sheet=TEST&range=A1";   // 
 // see sheet at:    https://docs.google.com/spreadsheets/d/1ZAQBA-5DYboW2OEwCC8hX2LEO1J4P7-8BXeH-c-05KU/edit?gid=0#gid=0
// ----------------
window.addEventListener('beforeunload', function(event) {
//  event.preventDefault();
  event.returnValue = ''; // Chrome requires returnValue to be set
   window.scrollTo(0, 0);
});

window.addEventListener('load', function() {
  window.scrollTo(0, 0);
});  
window.addEventListener('scroll', function() { 
  localStorage.setItem('scrollPosition', window.scrollY);
});

//fetch url from google and http req it.
async function refresh() {     
      let gsheet = url  + tail;
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
           tmp = tmp.replaceAll("," , "<br>");   
          document.getElementById("main").innerHTML = tmp;     

           let text = "No avatars in the region!"; 
           document.designMode = "on";
           var sel = window.getSelection();
           sel.collapse(document.body, 0);
           
           while (window.find(text)) {
             document.execCommand("foreColor", false, "#d6d6c2");    
             sel.collapseToEnd();
           }
           document.designMode = "off";
           if (localStorage.getItem('scrollPosition')) {
            window.scrollTo(0, localStorage.getItem('scrollPosition'));          
          }
      })     
      .catch(err => {   
      });
  setTimeout(refresh,15000); 
};
 // UN COMMENT TO USE ------------------------------------------------
refresh();  // IN USE
 // UN COMMENT TO USE ------------------------------------------------
// ==================================
function tm(){
   let tstamp = new Date()
  .toLocaleString( 'en-US', {
     timeZone: 'America/Los_Angeles',
     hour12: true
  }); 
  document.getElementById("e1").innerText = tstamp;
   setTimeout(tm,1000);
}
// tm(); // UN COMMENT TO USE ------------------------------------------------
 

 
