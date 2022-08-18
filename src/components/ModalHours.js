import AccessTimeIcon from "@mui/icons-material/AccessTime"
import Chip from "@mui/material/Chip"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"

export default function ModalHours({
  closeModal,
  seleccionarHorario,
  horarios,
}) {
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
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div>
            <AccessTimeIcon sx={{ color: "#FDC963!important" }} />
            <span style={{ verticalAlign: "top", marginLeft: "10px" }}>
              Elige un horario de entrega
            </span>
          </div>

          {horarios &&
            horarios.map((v, i) => {
              return (
                <div>
                  <Chip
                    label={v}
                    variant="outlined"
                    onClick={() => {
                      seleccionarHorario(i)
                      closeModal()
                    }}
                  />
                </div>
              )
            })}
        </Typography>
      </Box>
    </Modal>
  )
}
