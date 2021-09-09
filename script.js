// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO4QJkyT9LS5kIl1Ho_9ixZK9NcODZdiA",
  authDomain: "pkgtihub.firebaseapp.com",
  projectId: "pkgtihub",
  storageBucket: "pkgtihub.appspot.com",
  messagingSenderId: "1006897343179",
  appId: "1:1006897343179:web:97d439dab55746407c494e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();

function accLoginAcc() {
  Swal.fire({
    title: 'Log In',
    html: `<input type="email" id="acc-email" class="swal2-input" placeholder="E-Mail">
    <input type="password" id="acc-password" class="swal2-input" placeholder="Password">`,
    confirmButtonText: 'Log In',
    allowOutsideClick: true,
    focusConfirm: false,
    preConfirm: () => {
      const email = Swal.getPopup().querySelector('#acc-email').value
      const password = Swal.getPopup().querySelector('#acc-password').value
      return { email: email, password: password }
    }
  }).then((result) => {
    loginToAcc();
  })
}
function loginToAcc() {
  const email = Swal.getPopup().querySelector('#acc-email').value
  const password = Swal.getPopup().querySelector('#acc-password').value

  const promise = auth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // SUCCESS
    //setTimeout(() => { location.reload(); }, 2250);
    Swal.fire(
      'Success!',
      'Logged In as <b>'+email+'</b>.',
      'success',
    );
  })
  // ERROR
  .catch((error) => {
    Swal.fire(
      'Error!',
      error.message,
      'error',
    )
  });
}
function accLogOut() {
  auth.signOut();
  Swal.fire(
    'Success!',
    'Logged Out successfully.',
    'success',
  );
  //setTimeout(() => { location.reload(); }, 1750);
}
window.ghc = document.getElementById("gh-credentials");
window.ghc1 = document.getElementById("gh-cr-email");
window.ghc2 = document.getElementById("gh-cr-password");
window.ghc3 = document.getElementById("gh-cr-ggl");
auth.onAuthStateChanged(function(user) {
  if(user) {
    // hide on login
    document.getElementById("fb-login").style.display = "none";
    // show on login
    document.getElementById("fb-ghapp").style.display = "block";
    document.getElementById("fb-logout").style.display = "block";
    document.getElementById("fb-ghweb").style.display = "block";
    window.ghc.style.display = "block";
    window.ghc1.innerHTML = "chuj ci do dupy lol";
    window.ghc1.setAttribute("onclick", "pkgemrvl()")
    window.ghc2.innerHTML = "mechanikzaq1@WSX";
    // <hr>
    document.getElementById("fb-hr1").style.display = "block";
    document.getElementById("fb-hr2").style.display = "block";
  }else {
    // hide on logout
    document.getElementById("fb-ghapp").style.display = "none";
    document.getElementById("fb-logout").style.display = "none";
    document.getElementById("fb-ghweb").style.display = "none";
    window.ghc.style.display = "none";
    window.ghc1.innerHTML = "";
    window.ghc1.setAttribute("onclick", "")
    window.ghc2.innerHTML = "";
    window.ghc3.innerHTML = "";
    // show on logout
    document.getElementById("fb-login").style.display = "block";
    // <hr>
    document.getElementById("fb-hr1").style.display = "block";
    document.getElementById("fb-hr2").style.display = "block";
  }
});
function pkgemrvl() {
  window.ghc3.innerHTML = "tihub.github@gmail.com";
}
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
  // TODO
  const url = "plugins";
  history.pushState({}, null, url);
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
function vscplug8() {
  if (window.visit10) {
    window.open("https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag");
  } else {
    window.open("https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag");
    const bar = document.getElementById("vscplug-8");
    const barv = bar.value;
    bar.value = "✔️ " + barv;
    bar.classList.add("bg-success", "text-white");
    window.visit10 = true;
  }
}




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