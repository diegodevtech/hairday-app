import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";

export async function fetchScheduleByDay({ date }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    const dailySchedules = data.filter((schedule) => 
      dayjs(date).isSame(schedule.when, "day")
    )
    return dailySchedules;
  } catch (error) {
    console.log(error);
    alert("Ocorreu um erro ao buscar os agendamentos. Tente novamente.");
  }
}