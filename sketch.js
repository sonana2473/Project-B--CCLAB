let imgMars;
let imgSaturn;
let imgEarth;
// let imgVenus;
let imgMercury;
let imgJupiter;
let imgUranus;
let imgNeptune;
let imgFinal;
let earthAngle = 0;
let numberOfImages = 8;
let cA1, cA2, cA3, cA4, cA5;
let c1, c2, c3, c4, c5;
let myFont;
let sel;

function preload() {
  for (let i = 0; i < numberOfImages; i++) {
    imgFinal = loadImage("assets/empty.png");
    imgMars = loadImage(
      "https://uploads-ssl.webflow.com/5a621bf894d1cf000155a6d3/5d00f3bcec96461bc92c5472_opmbuilder_opm_mars_colour_celestia_20190612143601.png"
    );
    imgSaturn = loadImage(
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1912b050-3675-4394-a3d1-d0b4cb43ae0a/ddeq42t-e150d2ad-e6cb-46e6-9a4e-a908d9a170bb.png/v1/fill/w_1280,h_640,q_80,strp/saturn_texture_map__fictional_rework__by_magentameteorite_ddeq42t-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6IlwvZlwvMTkxMmIwNTAtMzY3NS00Mzk0LWEzZDEtZDBiNGNiNDNhZTBhXC9kZGVxNDJ0LWUxNTBkMmFkLWU2Y2ItNDZlNi05YTRlLWE5MDhkOWExNzBiYi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LGF7FBdknIVE7_swXfEFe__n-IF6D2IXNWk4fjPE8Oo"
    );
    imgEarth = loadImage(
      "https://as2.ftcdn.net/v2/jpg/02/24/14/81/1000_F_224148194_xrGaLP6RZbCL7B3vOMYYr2dVrcg95RFt.jpg"
    );
    // imgVenus = loadImage(
    //   "https://pixelz.cc/wp-content/uploads/2018/08/venus-cloud-texture-triple-monitor-wallpaper.jpg"
    // );
    imgMercury = loadImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Solarsystemscope_texture_2k_mercury.jpg/640px-Solarsystemscope_texture_2k_mercury.jpg"
    );
    imgJupiter = loadImage(
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/58d3c051-62a0-4471-818b-b9b92759d6b6/db6is8m-065c1dbf-d125-4729-a015-f79553c16bf9.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU4ZDNjMDUxLTYyYTAtNDQ3MS04MThiLWI5YjkyNzU5ZDZiNlwvZGI2aXM4bS0wNjVjMWRiZi1kMTI1LTQ3MjktYTAxNS1mNzk1NTNjMTZiZjkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.SNbFKk_oSqXR_g0K2OquQKU33PDgktgkNc40-6Pjhqo"
    );
    imgUranus = loadImage(
      "https://static.vecteezy.com/system/resources/thumbnails/001/998/851/small/abstract-background-of-uranus-surface-free-vector.jpg"
    );
    imgNeptune = loadImage(
      "https://upload.wikimedia.org/wikipedia/commons/1/1e/Solarsystemscope_texture_2k_neptune.jpg"
    );
  }
  myFont = loadFont("assets/myFonts.ttf");
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();

  sel = createSelect();
  sel.position(30, 40);
  sel.option("Select a Planet");
  sel.option("Mars");
  sel.option("Saturn");
  sel.option("Earth");
  // sel.option("Venus");
  sel.option("Mercury");
  sel.option("Jupiter");
  sel.option("Uranus");
  sel.option("Neptune");
  sel.changed(mySelectEvent);
}

function mySelectEvent() {
  let item = sel.value();

  if (item === "Mars") {
    for (let i = 0; i < numberOfImages; i++) {
      imgFinal = imgMars;
    }
    cA1 = color("#8C513B");
    cA2 = color("#593325");
    cA3 = color("#D98566");
    cA4 = color("#A65644");
    cA5 = color("#D4936A");

    c1 = "#8C513B";
    c2 = "#593325";
    c3 = "#D98566";
    c4 = "#A65644";
    c5 = "#D4936A";
  }
  if (item === "Saturn") {
    for (let i = 0; i < numberOfImages; i++) {
      imgFinal = imgSaturn;
    }
    cA1 = color("#F2CD88");
    cA2 = color("#D9B779");
    cA3 = color("#736A58");
    cA4 = color("#BF9F78");
    cA5 = color("#454136");

    c1 = "#F2CD88";
    c2 = "#D9B779";
    c3 = "#736A58";
    c4 = "#BF9F78";
    c5 = "#454136";
  }
  if (item === "Earth") {
    for (let i = 0; i < numberOfImages; i++) {
      imgFinal = imgEarth;
    }
    cA1 = color("#162D73");
    cA2 = color("#162759");
    cA3 = color("#43733C");
    cA4 = color("#D9AF32");
    cA5 = color("#79653C");

    c1 = "#162D73";
    c2 = "#162759";
    c3 = "#43733C";
    c4 = "#D9AF32";
    c5 = "#79653C";
  }
  // if (item === "Venus") {
  //   for (let i = 0; i < numberOfImages; i++) {
  //     imgFinal = imgVenus;
  //   }
  //   cA1 = color("#F2BC57");
  //   cA2 = color("#D98E32");
  //   cA3 = color("#A65A17");
  //   cA4 = color("#8C3E11");
  //   cA5 = color("#4A2908");

  //   c1 = "#F2BC57";
  //   c2 = "#D98E32";
  //   c3 = "#A65A17";
  //   c4 = "#8C3E11";
  //   c5 = "#4A2908";
  // }
  if (item === "Mercury") {
    for (let i = 0; i < numberOfImages; i++) {
      imgFinal = imgMercury;
    }
    cA1 = color("#D9D9D9");
    cA2 = color("#A6A6A6");
    cA3 = color("#737373");
    cA4 = color("#595959");
    cA5 = color("#868686");

    c1 = "#D9D9D9";
    c2 = "#A6A6A6";
    c3 = "#737373";
    c4 = "#595959";
    c5 = "#868686";
  }
  if (item === "Jupiter") {
    for (let i = 0; i < numberOfImages; i++) {
      imgFinal = imgJupiter;
    }
    cA1 = color("#735E45");
    cA2 = color("#D98841");
    cA3 = color("#D9B29C");
    cA4 = color("#A64C44");
    cA5 = color("#C7C4B1");

    c1 = "#735E45";
    c2 = "#D98841";
    c3 = "#D9B29C";
    c4 = "#A64C44";
    c5 = "#C7C4B1";
  }
  if (item === "Uranus") {
    for (let i = 0; i < numberOfImages; i++) {
      imgFinal = imgUranus;
    }
    cA1 = color("#537073");
    cA2 = color("#95BBBF");
    cA3 = color("#ADD4D9");
    cA4 = color("#CEF2EF");
    cA5 = color("#B5DBDE");

    c1 = "#537073";
    c2 = "#95BBBF";
    c3 = "#ADD4D9";
    c4 = "#CEF2EF";
    c5 = "#B5DBDE";
  }
  if (item === "Neptune") {
    for (let i = 0; i < numberOfImages; i++) {
      imgFinal = imgNeptune;
    }
    cA1 = color("#3345A6");
    cA2 = color("#222A59");
    cA3 = color("#446FF2");
    cA4 = color("#4981F2");
    cA5 = color("#3241A3");

    c1 = "#3345A6";
    c2 = "#222A59";
    c3 = "#446FF2";
    c4 = "#4981F2";
    c5 = "#3241A3";
  }
}

function draw() {
  textFont(myFont);
  background(40);

  push();
  translate(0, 0);
  texture(imgFinal);
  if (focused) {
    rotateY(earthAngle);
  }
  earthAngle += 0.01;
  sphere(100);
  pop();

  if (c1 === "#8C513B") {
    cA1 = color("#8C513B");
    cA2 = color("#593325");
    cA3 = color("#D98566");
    cA4 = color("#A65644");
    cA5 = color("#D4936A");

    text("hehhe", 1000, 500);
    fill(cA1);
    rect(width / 2 - 60, 0, 50, 50);
    fill(200);
    text(c1, width / 2 - 120, 30);

    fill(cA2);
    rect(width / 2 - 60, 60, 50, 50);
    fill(200);
    text(c2, width / 2 - 120, 90);

    fill(cA3);
    rect(width / 2 - 60, 120, 50, 50);
    fill(200);
    text(c3, width / 2 - 120, 150);

    fill(cA4);
    rect(width / 2 - 60, 180, 50, 50);
    fill(200);
    text(c4, width / 2 - 120, 210);

    fill(cA5);
    rect(width / 2 - 60, 240, 50, 50);
    fill(200);
    text(c5, width / 2 - 120, 270);
  }
  if (c1 === "#F2CD88") {
    cA1 = color("#F2CD88");
    cA2 = color("#D9B779");
    cA3 = color("#736A58");
    cA4 = color("#A65644");
    cA5 = color("#D4936A");

    text("hehhe", 1000, 500);
    fill(cA1);
    rect(width / 2 - 60, 0, 50, 50);
    fill(200);
    text(c1, width / 2 - 120, 30);

    fill(cA2);
    rect(width / 2 - 60, 60, 50, 50);
    fill(200);
    text(c2, width / 2 - 120, 90);

    fill(cA3);
    rect(width / 2 - 60, 120, 50, 50);
    fill(200);
    text(c3, width / 2 - 120, 150);

    fill(cA4);
    rect(width / 2 - 60, 180, 50, 50);
    fill(200);
    text(c4, width / 2 - 120, 210);

    fill(cA5);
    rect(width / 2 - 60, 240, 50, 50);
    fill(200);
    text(c5, width / 2 - 120, 270);
  }

  if (c1 === "#162D73") {
    cA1 = color("#162D73");
    cA2 = color("#162759");
    cA3 = color("#43733C");
    cA4 = color("#D9AF32");
    cA5 = color("#79653C");

    text("hehhe", 1000, 500);
    fill(cA1);
    rect(width / 2 - 60, 0, 50, 50);
    fill(200);
    text(c1, width / 2 - 120, 30);

    fill(cA2);
    rect(width / 2 - 60, 60, 50, 50);
    fill(200);
    text(c2, width / 2 - 120, 90);

    fill(cA3);
    rect(width / 2 - 60, 120, 50, 50);
    fill(200);
    text(c3, width / 2 - 120, 150);

    fill(cA4);
    rect(width / 2 - 60, 180, 50, 50);
    fill(200);
    text(c4, width / 2 - 120, 210);

    fill(cA5);
    rect(width / 2 - 60, 240, 50, 50);
    fill(200);
    text(c5, width / 2 - 120, 270);
  }

  if (c1 === "#F2BC57") {
    cA1 = color("#F2BC57");
    cA2 = color("#D98E32");
    cA3 = color("#A65A17");
    cA4 = color("#8C3E11");
    cA5 = color("#4A2908");

    text("hehhe", 1000, 500);
    fill(cA1);
    rect(width / 2 - 60, 0, 50, 50);
    fill(200);
    text(c1, width / 2 - 120, 30);

    fill(cA2);
    rect(width / 2 - 60, 60, 50, 50);
    fill(200);
    text(c2, width / 2 - 120, 90);

    fill(cA3);
    rect(width / 2 - 60, 120, 50, 50);
    fill(200);
    text(c3, width / 2 - 120, 150);

    fill(cA4);
    rect(width / 2 - 60, 180, 50, 50);
    fill(200);
    text(c4, width / 2 - 120, 210);

    fill(cA5);
    rect(width / 2 - 60, 240, 50, 50);
    fill(200);
    text(c5, width / 2 - 120, 270);
  }

  if (c1 === "#D9D9D9") {
    cA1 = color("#D9D9D9");
    cA2 = color("#A6A6A6");
    cA3 = color("#737373");
    cA4 = color("#595959");
    cA5 = color("#868686");

    text("hehhe", 1000, 500);
    fill(cA1);
    rect(width / 2 - 60, 0, 50, 50);
    fill(200);
    text(c1, width / 2 - 120, 30);

    fill(cA2);
    rect(width / 2 - 60, 60, 50, 50);
    fill(200);
    text(c2, width / 2 - 120, 90);

    fill(cA3);
    rect(width / 2 - 60, 120, 50, 50);
    fill(200);
    text(c3, width / 2 - 120, 150);

    fill(cA4);
    rect(width / 2 - 60, 180, 50, 50);
    fill(200);
    text(c4, width / 2 - 120, 210);

    fill(cA5);
    rect(width / 2 - 60, 240, 50, 50);
    fill(200);
    text(c5, width / 2 - 120, 270);
  }

  if (c1 === "#735E45") {
    cA1 = color("#735E45");
    cA2 = color("#D98841");
    cA3 = color("#D9B29C");
    cA4 = color("#A64C44");
    cA5 = color("#C7C4B1");

    text("hehhe", 1000, 500);
    fill(cA1);
    rect(width / 2 - 60, 0, 50, 50);
    fill(200);
    text(c1, width / 2 - 120, 30);

    fill(cA2);
    rect(width / 2 - 60, 60, 50, 50);
    fill(200);
    text(c2, width / 2 - 120, 90);

    fill(cA3);
    rect(width / 2 - 60, 120, 50, 50);
    fill(200);
    text(c3, width / 2 - 120, 150);

    fill(cA4);
    rect(width / 2 - 60, 180, 50, 50);
    fill(200);
    text(c4, width / 2 - 120, 210);

    fill(cA5);
    rect(width / 2 - 60, 240, 50, 50);
    fill(200);
    text(c5, width / 2 - 120, 270);
  }

  if (c1 === "#537073") {
    cA1 = color("#537073");
    cA2 = color("#95BBBF");
    cA3 = color("#ADD4D9");
    cA4 = color("#CEF2EF");
    cA5 = color("#B5DBDE");

    text("hehhe", 1000, 500);
    fill(cA1);
    rect(width / 2 - 60, 0, 50, 50);
    fill(200);
    text(c1, width / 2 - 120, 30);

    fill(cA2);
    rect(width / 2 - 60, 60, 50, 50);
    fill(200);
    text(c2, width / 2 - 120, 90);

    fill(cA3);
    rect(width / 2 - 60, 120, 50, 50);
    fill(200);
    text(c3, width / 2 - 120, 150);

    fill(cA4);
    rect(width / 2 - 60, 180, 50, 50);
    fill(200);
    text(c4, width / 2 - 120, 210);

    fill(cA5);
    rect(width / 2 - 60, 240, 50, 50);
    fill(200);
    text(c5, width / 2 - 120, 270);
  }

  if (c1 === "#3345A6") {
    cA1 = color("#3345A6");
    cA2 = color("#222A59");
    cA3 = color("#446FF2");
    cA4 = color("#4981F2");
    cA5 = color("#3241A3");

    text("hehhe", 1000, 500);
    fill(cA1);
    rect(width / 2 - 60, 0, 50, 50);
    fill(200);
    text(c1, width / 2 - 120, 30);

    fill(cA2);
    rect(width / 2 - 60, 60, 50, 50);
    fill(200);
    text(c2, width / 2 - 120, 90);

    fill(cA3);
    rect(width / 2 - 60, 120, 50, 50);
    fill(200);
    text(c3, width / 2 - 120, 150);

    fill(cA4);
    rect(width / 2 - 60, 180, 50, 50);
    fill(200);
    text(c4, width / 2 - 120, 210);

    fill(cA5);
    rect(width / 2 - 60, 240, 50, 50);
    fill(200);
    text(c5, width / 2 - 120, 270);
  }
}
