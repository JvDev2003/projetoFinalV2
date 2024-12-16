const args = new URLSearchParams(window.location.search);

const nome = args.get("nome");
const ra = args.get("ra");

console.log(nome, ra);

window.addEventListener("load", function () {
  document.getElementById("nomeExib").textContent = nome
    ? nome
    : "Not provided";
  document.getElementById("raExib").textContent = ra ? ra : "Not provided";
  document.getElementById("nome").value = nome ? nome : "Not provided";
  document.getElementById("ra").value = ra ? ra : "Not provided";
});
