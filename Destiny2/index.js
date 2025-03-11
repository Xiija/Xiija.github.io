let url       = "https://www.bungie.net/Platform/Settings";
async function refresh() {  
    fetch(url)
    .then(res  => res.json())
    .then(data => {
        let c = data.Response.systems.Destiny2;
        let msg = c.enabled ? "The game is UP!" : "The game is Down!";
        console.log("Env:\n", c);
        res.status(200).send("<body>Destiny Status: " + msg + "</body>");
    })  
    .catch(err => {   
    });
    setTimeout(refresh,30000);  // 30 sec
};
refresh();
