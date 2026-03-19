import { showSchedules } from "./show.js";
import { fetchScheduleByDay } from "../../services/fetch-schedule-by-day.js";
import { hoursLoad } from "../form/hours-load.js";

const selectedDate = document.getElementById("date");
export async function schedulesDay() {
  const date = selectedDate.value;
  const dailySchedules = await fetchScheduleByDay({ date });
  showSchedules({ dailySchedules });
  hoursLoad({ date });
}