import Link from 'next/link'
import { ListItem, ListItemIcon, ListItemText } from '@mui/material'

const SideBarItem = ({ href, icon, text }: SideBarItemProps) => {
  return (
    <Link href={href} passHref>
      <ListItem button>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    </Link>
  )
}

interface SideBarItemProps {
  href: string
  icon: JSX.Element
  text: string
}

export default SideBarItem
