# Hair Day App

Web app for managing haircut appointments by date and time, with a local mock API.

## Overview

Hair Day is a scheduling interface where you can:

- Choose a date
- See available time slots (09:00 to 21:00)
- Create new appointments
- View appointments grouped by period (morning, afternoon, night)
- Cancel existing appointments

The interface updates dynamically based on the selected day and existing bookings.

## Tech Stack

- JavaScript (ES Modules)
- Webpack + Webpack Dev Server
- Babel
- Day.js (date handling with `pt-br` locale)
- JSON Server (mock REST API)
- HTML + CSS

## Project Structure

```text
.
|-- index.html
|-- server.json
|-- webpack.config.js
`-- src
    |-- main.js
    |-- assets/
    |-- libs/
    |   `-- dayjs.js
    |-- modules/
    |   |-- page-load.js
    |   |-- form/
    |   |   |-- date-change.js
    |   |   |-- hours-click.js
    |   |   |-- hours-load.js
    |   |   `-- submit.js
    |   `-- schedules/
    |       |-- cancel.js
    |       |-- load.js
    |       `-- show.js
    |-- services/
    |   |-- api-config.js
    |   |-- cancel-schedule.js
    |   |-- fetch-schedule-by-day.js
    |   `-- new-schedule.js
    |-- styles/
    `-- utils/
        `-- opening-hours.js
```

## How It Works

1. On page load, the app fetches appointments for the current day.
2. The selected date can be changed to load appointments for another day.
3. Available hours are recalculated from:
   - Opening hours (`09:00` to `21:00`)
   - Already-booked hours
   - Past times (for the current date)
4. Submitting the form sends a `POST` request to create a new schedule.
5. Clicking the cancel icon sends a `DELETE` request and refreshes the list.

## API

The app uses JSON Server on:

- `http://localhost:3333`

Resource in `server.json`:

- `schedules`

Example schedule object:

```json
{
  "id": "1773944716035",
  "name": "Diego",
  "when": "2026-03-19T21:00:00.000Z"
}
```

## Running the Project

### Prerequisites

- Node.js 18+ (recommended)
- npm

### 1. Install dependencies

```bash
npm install
```

### 2. Start the API server (Terminal 1)

```bash
npm run server
```

Expected result:

- JSON Server running at `http://localhost:3333`

### 3. Start the web app (Terminal 2)

```bash
npm run dev
```

Expected result:

- Webpack dev server running at `http://localhost:3000`
- Browser opens automatically

## Available Scripts

- `npm run server`: starts JSON Server on port `3333`
- `npm run dev`: starts webpack dev server on port `3000`
- `npm run build`: creates production bundle in `dist/`

## Notes

- Keep both processes running while developing (`server` + `dev`).
- API base URL is configured in `src/services/api-config.js`.
- App locale for dates is set to `pt-br`.

## Author

- Diego Cunha
