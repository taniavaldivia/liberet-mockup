import { useState, useEffect } from "react"
import axios from "axios"
import RestaurantIcon from "@mui/icons-material/Restaurant"
import Chip from "@mui/material/Chip"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"

export default function ModalService({ closeModal, seleccionarService }) {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    )
    setServices(response.data.categories)
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
  }

  return (
    <Modal
      open={true}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <RestaurantIcon />
        <p>Elige un Servicio</p>
        <div style={{ overflowY: "scroll", maxHeight: "200px" }}>
          {services.map((v, i) => {
            return (
              <div>
                <Chip
                  key={i}
                  label={v.strCategory}
                  variant="outlined"
                  onClick={() => {
                    seleccionarService(v.strCategory)
                    closeModal()
                  }}
                />
              </div>
            )
          })}
        </div>
      </Box>
    </Modal>
  )
}
