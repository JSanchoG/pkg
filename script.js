function ide() {
  document.getElementById("ide-span").style.display = "inline-block";
  document.getElementById("ide-a").style.cursor = "default";
}
function kitespan() {
  const kitespan = document.getElementById("kite-span");
  //kitespan.classList.remove("h5");
  kitespan.style.cursor = "default";
  kitespan.innerHTML = "(Silnik programistyczny wspomagany sztuczną inteligencją uzupełniający kod)";
}
function idedwnl1() {
  if (window.visit1) {
    window.open("https://code.visualstudio.com/download");
  } else {
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
  } else {
    window.open("https://notepad-plus-plus.org/downloads/");
    const bar = document.getElementById("idedwnl-2");
    const barv = bar.value;
    bar.value = "✔️ " + barv;
    bar.classList.add("bg-success", "text-white");
    window.visit2 = true;
  }
}
function vscplugins() {
  document.getElementById("vsc-pl-a").style.cursor = "default";
  document.getElementById("vsc-plugins").style.display = "block";
}
function vscplug1() {
  if (window.visit3) {
    window.open("https://www.kite.com/integrations/vs-code/");
  } else {
    window.open("https://www.kite.com/integrations/vs-code/");
    const bar = document.getElementById("vscplug-1");
    const barv = bar.value;
    bar.value = "✔️ " + barv;
    bar.classList.add("bg-success", "text-white");
    window.visit3 = true;
  }
}
function vscplug2() {
  if (window.visit4) {
    window.open(
      "https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag"
    );
  } else {
    window.open(
      "https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag"
    );
    const bar = document.getElementById("vscplug-2");
    const barv = bar.value;
    bar.value = "✔️ " + barv;
    bar.classList.add("bg-success", "text-white");
    window.visit4 = true;
  }
}
function vscplug6() {
  if (window.visit5) {
    window.open("https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer");
  } else {
    window.open("https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer");
    const bar = document.getElementById("vscplug-6");
    const barv = bar.value;
    bar.value = "✔️ " + barv;
    bar.classList.add("bg-success", "text-white");
    window.visit5 = true;
  }
}
function vscplug4() {
  if (window.visit6) {
    window.open("https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer");
  } else {
    window.open("https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer");
    const bar = document.getElementById("vscplug-4");
    const barv = bar.value;
    bar.value = "✔️ " + barv;
    bar.classList.add("bg-success", "text-white");
    window.visit6 = true;
  }
}
function vscplug5() {
  if (window.visit7) {
    window.open("https://marketplace.visualstudio.com/items?itemName=kiteco.kite");
  } else {
    window.open("https://marketplace.visualstudio.com/items?itemName=kiteco.kite");
    const bar = document.getElementById("vscplug-5");
    const barv = bar.value;
    bar.value = "✔️ " + barv;
    bar.classList.add("bg-success", "text-white");
    window.visit7 = true;
  }
}
function vscplug3() {
  if (window.visit8) {
    window.open("https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme");
  } else {
    window.open("https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme");
    const bar = document.getElementById("vscplug-3");
    const barv = bar.value;
    bar.value = "✔️ " + barv;
    bar.classList.add("bg-success", "text-white");
    window.visit8 = true;
  }
}
function vscplug7() {
  if (window.visit9) {
    window.open("https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode");
  } else {
    window.open("https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode");
    const bar = document.getElementById("vscplug-7");
    const barv = bar.value;
    bar.value = "✔️ " + barv;
    bar.classList.add("bg-success", "text-white");
    window.visit9 = true;
  }
}
// NOW 10




/*


function vscplug() {
  if (window.visit) {
    window.open("");
  } else {
    window.open("");
    const bar = document.getElementById("vscplug-");
    const barv = bar.value;
    bar.value = "✔️ " + barv;
    bar.classList.add("bg-success", "text-white");
    window.visit = true;
  }
}


*/