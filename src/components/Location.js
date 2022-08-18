import LocationOnIcon from "@mui/icons-material/LocationOn"
import { red } from "@mui/material/colors"
import MenuIcon from "@mui/icons-material/Menu"
import "../css/location.css"

export default function Location() {
  return (
    <div className="location">
      <LocationOnIcon sx={{ color: red[300] }} />
      <input
        type="text"
        style={{ width: "100%", border: "none", margin: "0px 10px" }}
        placeholder="Select Location..."
        onClick={() => {
          alert("alerta cualquiera")
        }}
      />
      <MenuIcon />
    </div>
  )
}
