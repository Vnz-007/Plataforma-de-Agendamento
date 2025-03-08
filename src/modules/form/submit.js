import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule-new.js";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

// Data atual para formatar o input.
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega a data atual(selectedInput.value) e define a data atual como mín(selectedInput.min).
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
  // Previne o comportamento padrão de carregar a p~´agina.
  event.preventDefault();

  try {
    // Recuperando o nome do cliente.
    const name = clientName.value.trim();
    if (!name) {
      return alert("Informe o nome do cliente!");
    }

    // Recupera o horário selecionado.
    const hourSelected = document.querySelector(".hour-selected");

    // Recupera o horário selwcionado.
    if (!hourSelected) {
      return alert("Selecione a hora.");
    }
    // Recupera somente a hora.
    const [hour] = hourSelected.innerText.split(":");

    // Inserir a hora na data.
    const when = dayjs(selectedDate.value).add(hour, "hour");

    // Gera um ID.
    const id = new Date().getTime();

    await scheduleNew({
      id,
      name,
      when,
    });
  } catch (error) {
    alert("Não foi possível realizar o agrndamento.");
    console.log(error);
  }
};
