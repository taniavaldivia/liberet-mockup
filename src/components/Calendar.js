import "../css/calendar.css"

export default function Calendar({ days, selected, selectDate }) {
  return (
    <div style={{ display: "flex" }}>
      {days &&
        days.map((day, i) => {
          return (
            <div
              className="calendar"
              key={i}
              onClick={() => {
                selectDate(day.num)
              }}
            >
              <div>{day.day}</div>
              <div className={selected === day.num ? "selecteddate" : ""}>
                {day.num}
              </div>
            </div>
          )
        })}
    </div>
  )
}
