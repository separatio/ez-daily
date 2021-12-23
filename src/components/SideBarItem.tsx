import Link from 'next/link'
import { ListItem, ListItemIcon, ListItemText } from '@mui/material'

const SideBarItem = ({ href, icon, text }) => {
  return (
    <Link href={href} passHref>
      <ListItem button>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    </Link>
  )
}

export default SideBarItem
