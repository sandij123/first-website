/* Fungsi mengubah gambar */

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "gambar.jpg");
  } else {
    myImage.setAttribute("src", "gambar2.jpg");
  }
};
/*====================================================================== */

let myButton = document.querySelector("button");
let myHeading = document.querySelector(".teks");

myButton.onclick = () => {
    setUserName();
  };
  

  function setUserName() {
    const myName = prompt("Please enter your name.");
    if (myName.trim() === "") {
      setUserName();
    }else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Halo  ${myName} Selamat Datang di Web Pertamaku`;
    }
  }
  

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Halo  ${storedName} Selamat Datang di Web Pertamaku`;
  }
  
 