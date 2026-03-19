import dayjs from "../../libs/dayjs.js";
import { newSchedule } from "../../services/new-schedule.js";
import { schedulesDay } from "../schedules/load.js";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");
const today = dayjs(new Date()).format("YYYY-MM-DD");

selectedDate.value = today;
selectedDate.min = today;

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    const name = clientName.value.trim();
    if(!name){
      return alert("Por favor, insira o nome.");
    }
    const hourSelected = document.querySelector(".hour-selected");

    if(!hourSelected){
      return alert("Por favor, selecione um horário.");
    }

    const [hour] = hourSelected.textContent.split(":");

    const when = dayjs(selectedDate.value).add(hour, "hour");

    const id = new Date().getTime().toString();

    await newSchedule({ id, name, when });
    await schedulesDay();

    clientName.value = "";
    
  } catch(error) {
    alert("Não foi possível realizar o agendamento.")
    console.log(error);
  }
});