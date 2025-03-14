// GitHub pages only support static websites/content, PHP doesn't work on GitHub pages and GitHub doesn't allow POST requests

let disc      = "https://discord.com/api/webhooks/1149704323857657976/7jUG3nOop-1zIIs7GxKiQ_BxVyBPsrIzqX9CeUjYA29TaQYeTL_5rt78H7CMECt5UzXx";
let disc2     = "https://spicy-ghost-94.webhook.cool";
let txtbox    = document.getElementById("content");
let chk       = document.getElementById("check");
async function send() {  
     let  msg = txtbox.value;
     chk.innerText = "MSG: " + msg;
     txtbox.innerText = "";

    // ==========================
  /*
    let data = { 
      username: "Git-io D2 status",
      content: "Status: TEST\n" + msg
    };    
    fetch(disc2, {
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
  */
// ==============================
} // end send
