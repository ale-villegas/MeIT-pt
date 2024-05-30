
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'rgb(49, 49, 49);' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Movies
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
        <Link to="/" style={{color: "white"}}> <Button color="inherit">Home</Button></Link> 
          <Link to="/wishlist" style={{color: "white"}}><Button color="inherit">Wishlist</Button></Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
