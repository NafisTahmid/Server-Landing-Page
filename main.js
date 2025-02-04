fetch("ip_address.json")
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data)
    let tableBody = document.querySelector("tbody");
    
    let output="";
    for (let ip of data) {
        console.log(ip.serial)
        if(ip.status == "Inactive") {
            output += `
            <tr>
                <td>${ip.serial}</td>
                <td>${ip.address}</td>
                <td style="text-transform:uppercase">${ip.type}</td>
                <td style="color:red;">${ip.status}</td>
            </tr>
            `
        } else {
            output += `
            <tr>
                <td>${ip.serial}</td>
                <td>${ip.address}</td>
                <td style="text-transform:uppercase">${ip.type}</td>
                <td style="color:green;">${ip.status}</td>
            </tr>
            `
        }
       
        
    }
    tableBody.innerHTML = output;
})

function getTime() {
    let d = new Date();
    let n = d.toLocaleTimeString();
    const currentTime = document.getElementById("current-time");
    currentTime.innerText = `Current Time: ${n}`
}

setInterval(getTime, 1000);

function restartServer() {
    window.alert("Are you sure you want to restart the server?")
}