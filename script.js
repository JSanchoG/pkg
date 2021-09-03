function ide() {
    document.getElementById("ide-span").style.display = "inline-block";
    document.getElementById("ide-a").style.cursor = "default";
}
function idedwnl1() {
    if (window.visit1) {
        window.open("https://code.visualstudio.com/download");
    }else {
        window.open("https://code.visualstudio.com/download");
        const bar = document.getElementById("idedwnl-1");
        const barv = bar.value;
        bar.value = "✔️ " + barv;
        bar.classList.add("bg-success", "text-white");
        window.visit1 = true;
    }
}
function idedwnl2() {
    if (window.visit2) {
        window.open("https://notepad-plus-plus.org/downloads/");
    }else {
        window.open("https://notepad-plus-plus.org/downloads/");
        const bar = document.getElementById("idedwnl-2");
        const barv = bar.value;
        bar.value = "✔️ " + barv;
        bar.classList.add("bg-success", "text-white");
        window.visit2 = true;
    }
}