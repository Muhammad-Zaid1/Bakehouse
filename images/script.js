document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const areaSelector = document.getElementById("areaSelector");
  const confirmButton = document.getElementById("confirmButton");

  // Check if the area is already selected
  const selectedArea = localStorage.getItem("selectedArea");
  if (!selectedArea) {
      popup.style.display = "block";
  }

  // Enable Confirm button when an area is selected
  areaSelector.addEventListener("change", () => {
      confirmButton.disabled = !areaSelector.value;
  });

  // Save selected area and hide popup on Confirm
  confirmButton.addEventListener("click", () => {
      const area = areaSelector.value;
      localStorage.setItem("selectedArea", area);
      popup.style.display = "none";
  });
});