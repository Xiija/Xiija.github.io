let disc      = "https://discord.com/api/webhooks/1149704323857657976/7jUG3nOop-1zIIs7GxKiQ_BxVyBPsrIzqX9CeUjYA29TaQYeTL_5rt78H7CMECt5UzXx";
let url       = "https://www.bungie.net/Platform/Settings";
let dyn       = document.getElementById("dynamicPart");  
let tog       = 0;
async function refresh() {  
    fetch(url)
    .then(res  => res.json())
    .then(data => {
        let c = data.Response.systems.Destiny2;
        let msg = c.enabled ? "The game is UP!" : "The game is Down!";       
        dyn.innerText = "STATUS: " + msg;
          
        if( !c.enabled && tog === 0 ) {
                const data = { 
                  status: 'down'
                };
                
                fetch(disc, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json' 
                  },
                  body: JSON.stringify(data); 
                })
                .catch(error => {
                  console.error('Error:', error); 
                });
                tog = 1;
        }
        if( c.enabled && tog === 1 ) {
                const data = { 
                  status: 'up'
                };
                
                fetch(disc, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json' 
                  },
                  body: JSON.stringify(data); 
                })
                .catch(error => {
                  console.error('Error:', error); 
                });
                tog = 0;
        }
    })  
    .catch(err => {   
    });  
    setTimeout(refresh,30000);  // 30 sec
};
refresh();
