import * as React from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import GridViewIcon from "@mui/icons-material/GridView"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"

export default function IconTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
      <Tab icon={<ShoppingCartIcon />} aria-label="Cart" />
      <Tab icon={<GridViewIcon />} aria-label="favorite" />
      <Tab icon={<AccountCircleIcon />} aria-label="person" />
    </Tabs>
  )
}
