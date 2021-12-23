import Link from 'next/link'
import {
  Box,
  IconButton,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

const DrawerListItem = () => {
  return <Link href="/daily" passHref>
    <ListItem button>
      <ListItemIcon>
        <PlayArrowIcon
          sx={{
            color: 'white',
          }}
        />
      </ListItemIcon>
      <ListItemText primary="Start Daily" />
    </ListItem>
  </Link>
}

export default DrawerListItem
