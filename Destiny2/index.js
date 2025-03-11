let url       = "https://www.bungie.net/Platform/Settings";
let dyn       = document.getElementById("dynamicPart");  
async function refresh() {  
    // fetch(url)
    // .then(res  => res.json())
    // .then(data => {
    //     let c = data.Response.systems.Destiny2;
    //     let msg = c.enabled ? "The game is UP!" : "The game is Down!";       
    //     dyn.innerText = "STATUS: " + msg;
    // })  
    // .catch(err => {   
    // });
     dyn.innerText = "STATUS: "
    setTimeout(refresh,30000);  // 30 sec
};
refresh();
