// UI VAR
const loader = document.querySelector(".loader"),
  label = document.querySelector(".custom-file");

window.url = null;

// Reads image file and set it as label background
document.getElementById("js-file").onchange = function() {
  var file = this.files[0];
  var reader = new FileReader();
  var url;
  reader.addEventListener(
    "load",
    function() {
      window.url = reader.result;
      label.style.background = `url(${window.url}) center / contain no-repeat`;
    },
    false
  );
  if (file) {
    reader.readAsDataURL(file);
  }
};

document.getElementById("js-form").onsubmit = function(e) {
  loader.classList.remove("d-none");
  e.preventDefault();
  // HTML and CSS template
  const data = {
    html: `<body class="" style="height: 800px; width: 1366px;" >
  <h3 class="church"><img src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1606294385/res000001_pzntdr.png" alt="covenant christian center" class="church-logo"><span class="church-text">covenantcenter</span></h3>
  <!--INTRO-->
  <div class="main-header">
    <div class="main-text">
      <h1 class="meats relative">meats
        <img src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1606294466/Sizzle_uvnjs5.png" class="sizzle absolute" alt="Sizzle">
      </h1>
      <h1 class="greet relative"><span class="and absolute">&</span><span class="g-reet"><span class="g">g</span><span class="relative reet">reet
          <span class="absolute first">...first of all, introduction</span>
        </span>
        </span>
      </h1>
      <div class="date">
        <h3 class="date-text">SUN NOV, 22ND</h3>
      </div>
    </div>
    <div class="main-img">
      <div class="circle-1 relative">
        <div class="circle-2 absolute"></div>
        <div class="main-circle absolute"></div>
      </div>
      <p>I am ${document.getElementById("js-text").value}</p>
      <p>I will be attending #M&G</p>
    </div>
  </div>
  <div class="register">
    <p>Register at:</p>
    <a href="https://meats-and-greets.vercel.app/">
      <p>https://meats-and-greets.vercel.app/</p>
    </a>
  </div>
  <div class="credit">
    <div class="social">
      <img src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1606294491/Social_media_mzbdlx.png" class="social-media" alt="Social media">
    </div>
    <div class="wifis">
      <img src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1606294545/wifi_tvkxk6.png" class="wifi" alt="WIFI">
      <img src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1606294358/download_pudxgc.png" class="ntel" alt="NTEL">
    </div>
    <h3>#M&G</h3>
    <h3 class=""><img src="https://res.cloudinary.com/dexg5uy3d/image/upload/v1606294519/Vector_Smart_Object_Double_Click_to_Edit_bgklgf.png" class="arrow" alt="Chevron"><span class="time">4PM</span></h3>
  </div>
</body>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: url("https://res.cloudinary.com/dexg5uy3d/image/upload/v1606294290/mng_BG_cvjdud.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 30px 0;
  color: #fff;
}
a {
  color: #fff;
  text-decoration: none;
}
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.church-logo {
  width: 50px;
  height: 50px;
}
.church {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
}
.church-text {
  margin-left: 3px;
  font-family: Aster;
  font-size: 20px;
  font-weight: 500;
}
.main-header {
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
}
.main-text h1 {
  font-size: 90px;
}
.main-text {
  padding-left: 40px;
  padding-right: 70px;
  align-self: flex-end;
}
.sizzle {
  height: 60px;
  top: -27px;
  right: 18px;
}
.greet {
  margin-top: -54px;
}
.reet {
  display: inline-block;
}
.first {
  display: inline-block;
  font-size: 13px;
  font-weight: regular;
  width: 100%;
  left: 6px;
  bottom: 0px;
  font-family: Arial;
}
.and {
  top: 2px;
  left: 13px;
}
.and,
.meats {
  font-family: "Century Gothic";
}
.g,
.reet {
  font-family: "Century Gothic";
}
.g-reet {
  margin-left: 61px;
}
.date {
  margin-top: 30px;
  font-family: "Arial rounded MT";
  font-size: 20px;
  border-top: 6px solid #fff;
  display: inline-block;
  padding-top: 5px;
}
.main-img {
  padding-left: 70px;
  padding-top: 70px;
  padding-right: 40px;
}
.circle-1 {
  width: 250px;
  height: 125px;
  border-radius: 50%;
  background-color: #fff;
  border-radius: 0 0 500px 500px;
  padding: 10px;
  margin-bottom: 10px;
}
.circle-2 {
  width: 225px;
  height: 120px;
  border-radius: 0 0 500px 500px;
  background: url("https://res.cloudinary.com/dexg5uy3d/image/upload/v1606294290/mng_BG_cvjdud.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  top: -5px;
  left: 12.5px;
}
.main-circle {
  width: 210px;
  height: 210px;
  border-radius: 50%;
  background: url(${window.url});
  background-repeat: no-repeat;
  background-size: cover;
  top: -100px;
  left: 20px;
}
.main-img p,
.register p,
.register a {
  text-align: center;
  font-size: 20px;
  font-family: "Century Gothic";
  font-weight: 600;
}
.register {
  left: 0;
  margin-bottom: 40px;
  width: 100%;
}
.credit {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  left: 0;
  font-family: "Century Gothic";
  width: 100%;
}
.social-media {
  width: 250px;
  height: 70px;
}
.wifi,
.ntel {
  display: inline;
}
.wifi,
.ntel {
  width: 50px;
  height: 50px;
}
.arrow {
  height: 30px;
}
.time {
  padding: 0 15px;
  font-size: 20px;
}
.credit h3 {
  font-size: 24px;
}
`,
    google_fonts: "Century Gothic"
  };
  const username = "b32f809e-b1e2-434d-90b0-a94f787c8636";
  const password = "0df51205-2867-49c7-a5c6-b6e1b06b483c";
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa(username + ":" + password)
    }
  };
  // Converts html and css to image
  fetch("https://hcti.io/v1/image", options)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res.status);
      }
    })
    .then(data => {
      // Image URL is available here
      console.log(data.url);
      if (document.querySelector(".download"))
        document.querySelector(".download").remove();
      document.querySelector(".loader").remove;
      var link = `
      <a href=${data.url} download='rccg.jpg' class='btn btn-primary btn-lg text-center' target='_blank'>DOWNLOAD</a>
      `;
      document.querySelector(".button").innerHTML = link;
    })
    .catch(err => console.error(err));
};
