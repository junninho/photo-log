import * as React from "react"
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Container } from "@material-ui/core"
import './Header.css'
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import { Link } from "react-router-dom";

const navLinks = [
  { title: `Home`, path: `/`, id: 0 },
  { title: `upload`, path: `/upload`, id: 1 },
  { title: `Log`, path: `/log`, id: 2 },
  { title: `Gallery`, path: `/gallery`, id: 3 },
];

export default class Header extends React.Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Container maxWidth="md" className="navbarDisplayFlex">
            <IconButton edge="start" color="inherit" aria-label="home" href="/">
              <CameraAltOutlinedIcon fontSize="large" />
            </IconButton>
            <List component="nav" aria-labelledby="main navigation" className="navDisplayFlex">
              {navLinks.map(({ title, path, id }) => (
              <Link key={id} to={path} className='linkText'>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </Link>
              ))}
            </List>
          </Container>
        </Toolbar>
      </AppBar>
    )
  }
} 