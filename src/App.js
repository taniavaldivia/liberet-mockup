import React, { useState, useEffect } from "react"
import axios from "axios"
import Location from "./components/Location"
import Menu from "./components/Menu"
import Calendar from "./components/Calendar"
import Dishes from "./components/Dishes"
import IconTabs from "./components/IconTabs"

import "./App.css"

function App() {
  const [selectedDate, setSelectedDate] = useState()
  const [service, setService] = useState("Beef")
  const [meals, setMeals] = useState([])
  const days = [
    {
      num: 28,
      day: "Dom",
    },
    {
      num: 29,
      day: "Lun",
    },
    {
      num: 30,
      day: "Mar",
    },
    {
      num: 31,
      day: "Mie",
    },
  ]

  const selectDate = (date) => {
    setSelectedDate(date)
  }

  const selectService = (servicio) => {
    setService(servicio)
  }

  const fetchDishes = async () => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${service}`
    )
    setMeals(response.data.meals)
  }

  useEffect(() => {
    fetchDishes()
  }, [service])

  return (
    <div>
      <Location />
      <Calendar days={days} selected={selectedDate} selectDate={selectDate} />
      <Menu service={service} selectService={selectService} />
      <Dishes meals={meals} />
      <IconTabs />
    </div>
  )
}

export default App
