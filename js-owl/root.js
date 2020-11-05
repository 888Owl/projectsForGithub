const main = document.getElementById("root");

main.style.width = "100vw";
main.style.height = "100vh";
main.style.backgroundColor = "black";

let head = document.createElement("DIV");

head.style.width = "100px";
head.style.height = "125px";
head.style.backgroundColor = "#785027";
head.style.position = "absolute";
head.style.zIndex = 5;
head.style.borderRadius = "50%";
head.style.left = "300px";
head.style.top = "50px";
head.style.border = "1px black solid";
main.append(head);

let leftEar = document.createElement("DIV");

leftEar.style.width = "25px";
leftEar.style.height = "25px";
leftEar.style.backgroundImage =
  "linear-gradient(315deg, #785027, #785027, #785027, white 95%)";
leftEar.style.position = "absolute";
leftEar.style.left = "300px";
leftEar.style.top = "50px";
leftEar.style.zIndex = 6;
leftEar.style.borderRadius = "0% 50% 0% 50%";
main.append(leftEar);

let rightEar = document.createElement("DIV");

rightEar.style.width = "25px";
rightEar.style.height = "25px";
rightEar.style.backgroundImage =
  "linear-gradient(45deg, #785027, #785027, #785027, white 95%)";
rightEar.style.position = "absolute";
rightEar.style.left = "375px";
rightEar.style.top = "50px";
rightEar.style.zIndex = 6;
rightEar.style.borderRadius = "50% 0% 50% 0%";
main.append(rightEar);

let beak = document.createElement("DIV");

beak.style.width = "25px";
beak.style.height = "15px";
beak.style.backgroundImage = "linear-gradient(45deg, #785027, black)";
beak.style.position = "absolute";
beak.style.zIndex = 7;
beak.style.left = "340px";
beak.style.top = "105px";
beak.style.borderRadius = "50% 0% 50% 50%";
beak.style.transform = "rotate(45deg)";
main.append(beak);

let leftEye = document.createElement("DIV");

leftEye.style.width = "20px";
leftEye.style.height = "30px";
leftEye.style.backgroundColor = "white";
leftEye.style.backgroundImage = "radial-gradient(red, white)";
leftEye.style.zIndex = 7;
leftEye.style.position = "absolute";
leftEye.style.top = "75px";
leftEye.style.left = "320px";
leftEye.style.borderRadius = "50%";

main.append(leftEye);

let rightEye = document.createElement("DIV");

rightEye.style.width = "20px";
rightEye.style.height = "30px";
rightEye.style.backgroundColor = "white";
rightEye.style.backgroundImage = "radial-gradient(red, white)";
rightEye.style.zIndex = 6;
rightEye.style.position = "absolute";
rightEye.style.top = "75px";
rightEye.style.left = "360px";
rightEye.style.borderRadius = "50%";

main.append(rightEye);

let leftWing = document.createElement("DIV");

leftWing.style.width = "125px";
leftWing.style.height = "50px";
leftWing.style.backgroundColor = "#785027";
leftWing.style.top = "100px";
leftWing.style.left = "200px";
leftWing.style.position = "absolute";
leftWing.style.borderRadius = "0% 0% 0% 100%";
leftWing.style.transform = "rotate(0deg)";
leftWing.className = "flapper";
main.append(leftWing);

let rightWing = document.createElement("DIV");

rightWing.style.width = "125px";
rightWing.style.height = "50px";
rightWing.style.backgroundColor = "#785027";
rightWing.style.top = "100px";
rightWing.style.left = "375px";
rightWing.style.position = "absolute";
rightWing.style.borderRadius = "0% 0% 100% 0%";
rightWing.className = "flopper";
main.append(rightWing);

let moon = document.createElement("DIV");

moon.style.width = "300px";
moon.style.height = "300px";
moon.style.backgroundImage = "radial-gradient(white, yellow)";
moon.style.borderRadius = "100%";
moon.style.position = "absolute";
moon.style.top = "-100px";
moon.style.right = "-100px";

main.append(moon);

let treeBase1 = document.createElement("DIV");

treeBase1.style.width = "100px";
treeBase1.style.height = "150px";
treeBase1.style.backgroundColor = "#9f6934";
treeBase1.style.position = "absolute";
treeBase1.style.left = "50px";
treeBase1.style.bottom = 0;

main.append(treeBase1);

let treeBranches1 = document.createElement("DIV");

treeBranches1.style.width = "0";
treeBranches1.style.height = "0";
treeBranches1.style.zIndex = 3;
treeBranches1.style.position = "absolute";
treeBranches1.style.left = "-5px";
treeBranches1.style.bottom = "110px";
treeBranches1.style.borderLeft = "110px solid transparent";
treeBranches1.style.borderRight = "110px solid transparent";
treeBranches1.style.borderBottom = "110px solid #216543";

main.append(treeBranches1);

let treeBranches2 = document.createElement("DIV");

treeBranches2.style.width = "0";
treeBranches2.style.height = "0";
treeBranches2.style.zIndex = 3;
treeBranches2.style.position = "absolute";
treeBranches2.style.left = "-5px";
treeBranches2.style.bottom = "160px";
treeBranches2.style.borderLeft = "110px solid transparent";
treeBranches2.style.borderRight = "110px solid transparent";
treeBranches2.style.borderBottom = "110px solid #216543";

main.append(treeBranches2);

let treeBranches3 = document.createElement("DIV");

treeBranches3.style.width = "0";
treeBranches3.style.height = "0";
treeBranches3.style.zIndex = 3;
treeBranches3.style.position = "absolute";
treeBranches3.style.left = "-5px";
treeBranches3.style.bottom = "210px";
treeBranches3.style.borderLeft = "110px solid transparent";
treeBranches3.style.borderRight = "110px solid transparent";
treeBranches3.style.borderBottom = "110px solid #216543";

main.append(treeBranches3);

let bottomGrass = document.createElement("DIV");

bottomGrass.style.width = "100vw";
bottomGrass.style.height = "15px";
bottomGrass.style.position = "absolute";
bottomGrass.style.bottom = 0;
bottomGrass.style.backgroundImage = "linear-gradient(#349f69,#57c88f, #216543)";

main.append(bottomGrass);
