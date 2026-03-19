import { apiConfig } from './api-config.js';

export async function cancelSchedule({ id }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: 'DELETE',
    });
    alert("Agendamento cancelado com sucesso.");
  } catch (error) {
    console.log(error);
    alert("Algo deu errado com o cancelamento do agendamento. Por favor, tente novamente.");
  }
}