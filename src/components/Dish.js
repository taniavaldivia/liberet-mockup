import { useState, useEffect } from "react"
import Paper from "@mui/material/Paper"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import axios from "axios"
import "../css/dish.css"

export default function Dish({ meal }) {
  const [strArea, setStrArea] = useState("")
  const [strTag, setStrTag] = useState(null)

  useEffect(() => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
      )
      .then(({ data }) => {
        setStrArea(data.meals[0].strArea)

        if (data.meals[0].strTags) {
          setStrTag(data.meals[0].strTags.split(",")[0])
        }
      })
  }, [meal])

  return (
    <Paper elevation={3} style={{ borderRadius: "10px" }}>
      <div style={{ position: "relative" }}>
        <img className="mealpic" src={meal.strMealThumb} alt="Meal picture" />
        {strTag && <p className="foodtype">{strTag}</p>}
        <p className="country">{strArea}</p>
        <p className="mealname">{meal.strMeal}</p>
      </div>
      <div className="price">
        <AccessTimeIcon sx={{ color: "#FDC963!important" }} />
        <span style={{ fontWeight: "bold" }}>
          {new Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: "MXN",
          }).format(meal.idMeal)}
        </span>
      </div>
    </Paper>
  )
}
