import React, { useState } from "react"
import Chip from "@mui/material/Chip"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import RestaurantIcon from "@mui/icons-material/Restaurant"
import PlusOneIcon from "@mui/icons-material/PlusOne"
import ModalHours from "./ModalHours"
import ModalService from "./ModalService"

export default function Menu({ service, selectService }) {
  const [openModal, setOpenModal] = useState(null)
  const [horario, setHorario] = useState(0)

  const openModalHours = () => setOpenModal("hours")
  const openModalService = () => setOpenModal("service")
  const closeModal = () => setOpenModal(null)
  const seleccionarHorario = (horario) => {
    setHorario(horario)
  }

  const horarios = ["11:00 am - 12:00 pm", "1:00 - 2:00 pm", "2:00 - 3:00 pm"]

  return (
    <div style={{ backgroundColor: "#f1f1f1", display: "flex" }}>
      <Chip
        icon={<AccessTimeIcon sx={{ color: "#FCAB3F!important" }} />}
        size="small"
        label={horarios[horario]}
        sx={{
          margin: "10px",
          backgroundColor: "white",
          flex: "auto",
        }}
        onClick={() => {
          openModalHours()
        }}
      />
      <Chip
        icon={<RestaurantIcon sx={{ color: "#FCAB3F!important" }} />}
        size="small"
        label={service}
        sx={{
          margin: "10px",
          backgroundColor: "white",
          flex: "auto",
        }}
        onClick={() => {
          openModalService()
        }}
      />
      <Chip
        icon={<PlusOneIcon sx={{ color: "#FCAB3F!important" }} />}
        size="small"
        label="Platillos"
        sx={{
          margin: "10px",
          backgroundColor: "white",
          flex: "auto",
        }}
        onClick={() => {
          alert("alerta cualquiera")
        }}
      />

      {openModal === "hours" && (
        <ModalHours
          closeModal={closeModal}
          seleccionarHorario={seleccionarHorario}
          horarios={horarios}
        />
      )}
      {openModal === "service" && (
        <ModalService
          closeModal={closeModal}
          seleccionarService={selectService}
        />
      )}
    </div>
  )
}
