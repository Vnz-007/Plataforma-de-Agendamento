const periods = document.querySelectorAll(".period");

// Gera evento click para cada lista (li = manhã, tarde e noite).
periods.forEach((periods) => {
  periods.addEventListener("click", (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // Obtém a li pai do elemento clicado.
      const item = event.target.cosest("li");
      const { id } = item.dataset;

      if (id) {
        const isConfirm = confirm(
          "Você realmente deseja cancelar o agendamento?"
        );

        if (isConfirm) {
          console.log("REMOVER!");
        }
      }
    }
  });
});
