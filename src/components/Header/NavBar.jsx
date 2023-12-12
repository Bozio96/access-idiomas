import { useState } from "react"
import { AppBar, Box, Button, Drawer, IconButton, Toolbar } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu";
import NavDrawer from "./NavDrawer";

export default function NavBar(){
    const navLinks = [
        {
            title: 'Exámenes Internacionales',
            path: '#examenesInternacionales'
        },
        {
            title: 'Cursos de Inglés',
            path: '#cursosDeIngles'
        },
        {
            title: 'Coworking',
            path: '#coworking'
        },
        {
            title: 'Sobre Nosotros',
            path: '#sobreNosotros'
        },
        {
            title: 'Contactanos',
            path: '#contactanos'
        },
    ]

    const [side, setSide] = useState(false)
    
    return (
        <>
            <AppBar position="sticky">
                <Toolbar sx={{justifyContent:'space-between'}}>
                    <IconButton sx={{display: {xs:'flex', sm:'none'}}} onClick={()=>setSide(true)}>
                        <MenuIcon/>
                    </IconButton>
                    <a href="/"><img className="logoHeader" src="https://res.cloudinary.com/dnfil5isx/image/upload/v1701394180/difinitvo_Mesa_de_trabajo_1_copia_1_xqskph.svg" alt="logoAccess"/></a>
                    <Box className='navLinks' sx={{display: {xs:'none', sm:'flex'}}}>
                    {navLinks.map((item)=> (
                        <Button
                            color="inherit"
                            key={item.title}
                            component='a'
                            href={item.path}
                        >
                            {item.title}
                        </Button>
                    ))}
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer sx={{display: {xs:'flex', sm:'none'}}} open={side} anchor='left' onClose={()=> setSide(false)}>
                <NavDrawer navLinks={navLinks}/>
            </Drawer>
        </>
    )
}