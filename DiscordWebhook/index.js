let disc      = "https://discord.com/api/webhooks/1149704323857657976/7jUG3nOop-1zIIs7GxKiQ_BxVyBPsrIzqX9CeUjYA29TaQYeTL_5rt78H7CMECt5UzXx";
let txtbox    = document.getElementById("content");
async function send() {  
    let  msg = txtbox.value;
    let data = { 
      username: "Git-io D2 status",
      content: "Status: TEST\n" + msg
    };    
    fetch(disc, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(data); 
      txtbox.innerText = "";
    })
    .catch(error => {
      console.error('Error:', error); 
    });
} // end send
