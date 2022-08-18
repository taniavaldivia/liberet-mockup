import { useState, useEffect } from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Dish from "./Dish"

export default function Dishes({ meals }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "#f1f1f1",
      }}
    >
      <Grid container spacing={2} style={{ margin: "10px" }}>
        {meals.map((meal, i) => {
          return (
            <Grid item xs={6} sm={4} md={3} lg={2} key={i}>
              <Dish meal={meal} />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
