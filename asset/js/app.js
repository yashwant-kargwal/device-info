// Access Button 
let getData = document.querySelector("#getData");

function gettingData(){

    // Browser name
    let brName = document.querySelector("#brName");
    brName.innerText = navigator.userAgent;

    // Platform, Language, Online/Offline
    document.querySelector("#pltForm").innerText = navigator.platform;
    document.querySelector("#lang").innerText = navigator.language;
    document.querySelector("#status").innerText = navigator.onLine ? "Online" : "Offline";

    // Screen all widths and heights
    document.querySelector("#scWi").innerText = `${screen.width} px`;
    document.querySelector("#scHe").innerText = `${screen.height} px`;
    document.querySelector("#avWi").innerText = `${screen.availWidth} px`;
    document.querySelector("#avHe").innerText = `${screen.availHeight} px`;
    document.querySelector("#wiWi").innerText = `${window.innerWidth} px`;
    document.querySelector("#wiHe").innerText = `${window.innerHeight} px`;


    // User Device with if else 
    let userAgent = navigator.userAgent.toLowerCase();
    let userDevice;

    if (userAgent.includes("mobile")) {
        userDevice = "Mobile device";
    } else if (userAgent.includes("tablet")) {
        userDevice = "Tablet device";
    } else {
        userDevice = "Desktop device";
    }
    document.querySelector("#device").innerText = `${userDevice}`;
    
    
    // User Device Mode
    let darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.querySelector("#mode").innerText = `${darkMode}`;
    
    // Calculate User Screen FPS
    let fps = [];
    let startTime = performance.now();
    function checkRefreshRate() {
        fps.push(1000 / (performance.now() - startTime));
        startTime = performance.now();
        if (fps.length > 100) {
            let refreshRate = Math.round(fps.reduce((a, b) => a + b) / fps.length);
            document.querySelector("#Monitor").innerText = `${refreshRate} Hz`;
        } else {
            requestAnimationFrame(checkRefreshRate);
        }
    }
    checkRefreshRate();
}

getData.addEventListener("click", gettingData);