let ikhan = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

let no = "Référence dossier ou CIN n'existe pas!!";

i = 1000;
while (i <= 9999) {
  console.log(i);

  let inputBox = document.querySelectorAll("input.form-control")[5];
  inputBox.value = i;
  inputBox.dispatchEvent(new Event("input"));
  document.querySelector("button.btn.btn-outline-success").click();
  await ikhan(2000);
  res = document.getElementById("swal2-content")?.textContent;
  document.querySelector("button.swal2-confirm.swal2-styled").click();
  await ikhan(500);
  if (res == no) {
    i++;
    continue;
  }
  break;
}
