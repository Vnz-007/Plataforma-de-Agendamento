export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available");

  hours.forEach((available) => {
    available.addEventListener("click", (selected) => {
      // Remove a class hour-selected de todas as li's não selecionadas.
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected");
      });

      //   Add a class na li clicada.
      selected.target.classList.add("hour-selected");
    });
  });
}
