const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("reset");

openBtn.addEventListener("click", () => {
  envelope.classList.remove("close");
  envelope.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  envelope.classList.remove("open");
  envelope.classList.add("close");
});
