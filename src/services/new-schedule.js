import { apiConfig } from "./api-config.js";

export async function newSchedule({ id, name, when }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when }),
    });
    alert("Agendamento criado com sucesso!");
  } catch (error) {
    console.log(error);
    alert("Ocorreu um erro ao criar o agendamento. Tente novamente.");
  }
}