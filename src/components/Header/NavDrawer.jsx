import { Box, Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

export default function NavDrawer({navLinks}){
    return(
        <Box sx={{backgroundColor:'#312783'}}>
            <nav>
                <List>
                    {navLinks.map((item)=>(
                        <>
                            <ListItem key={item.title}>
                                <ListItemButton component='a' href={item.path}>
                                    <ListItemText sx={{color: '#ffffff'}}>{item.title}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <Divider/>
                        </>
                    ))}
                </List>
            </nav>
        </Box>
    )
}