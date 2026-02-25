const uploadButton = document.getElementById("uploadButton");
const fileInput = document.getElementById("fileInput");
const fileName = document.getElementById("fileName");

uploadButton?.addEventListener("click", () => {
  fileInput?.click();
});

fileInput?.addEventListener("change", () => {
  const selected = fileInput.files?.[0];
  fileName.textContent = selected ? `Selected: ${selected.name}` : "No file selected";
});
