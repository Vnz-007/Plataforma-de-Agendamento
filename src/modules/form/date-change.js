import { schedulesDay } from "../schedules/load.js";

// elecionar o input de Data
const selectedDate = document.getElementById("date");

// Recarrega a lista (li) de horários quando o input de data mudar.
selectedDate.onchange = () => schedulesDay();
