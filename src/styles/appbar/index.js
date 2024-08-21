import { Box, Typography, List, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import "@fontsource/montez";

// Container
export const AppbarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
  backgroundColor: '#ffffff', 
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
  width: '100vw',
  marginLeft: 'calc(-50vw + 50%)', 
  marginRight: 'calc(-50vw + 50%)',
  [theme.breakpoints.down('sm')]: {
    padding: "4px 16px", // Increase padding for smaller screens
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: "space-between", // Adjust alignment on medium and up screens
  },
}));

// Header
export const AppbarHeader = styled(Typography)(({ theme }) => ({
  padding: '4px',
  flexGrow: 1,
  fontSize: '3em',
  fontFamily: '"Montez", "cursive"',
  color: '#ff4081',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)', 
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5em', // Smaller font size on small screens
    textAlign: "center", // Center align text on small screens
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '4.5em', // Larger font size on medium and up screens
  },
}));

// List
export const MyList = styled(List)(({ theme, type }) => ({
  display: type === 'row' ? 'flex' : 'block',
  flexGrow: 4,
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: "row", 
    gap: '8px', 
  },
  [theme.breakpoints.up('md')]: {
    flexDirection: type === 'row' ? 'row' : 'block', 
    gap: '15px', 
  },
}));

// Action Icons Container Mobile
export const ActionIconsContainerMobile = styled(Box)(({ theme }) => ({
  display: "flex",
  background: '#f5f5f5', 
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  alignItems: "center",
  zIndex: 99,
  borderTop: `1px solid #e0e0e0`,
  padding: '8px 16px', 
  boxShadow: '0px -2px 5px rgba(0, 0, 0, 0.1)', 
  [theme.breakpoints.up('md')]: {
    display: 'none', // Hide mobile action icons on medium and up screens
  },
}));

// Action Icons Container Desktop
export const ActionIconsContainerDesktop = styled(Box)(({ theme }) => ({
  display: 'none', // Hide desktop action icons on smaller screens
  flexGrow: 0,
  background: '#fafafa', 
  padding: '8px',
  borderRadius: '4px', 
  [theme.breakpoints.up('md')]: {
    display: 'flex', // Show desktop action icons on medium and up screens
  },
}));

// Drawer Close Button
export const DrawerCloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: 10,
  left: "250px",
  zIndex: 1999,
  backgroundColor: '#ffffff', 
  borderRadius: '50%', 
  padding: '8px', 
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', 
  '&:hover': {
    backgroundColor: '#f1f1f1', 
  },
  [theme.breakpoints.down('sm')]: {
    left: "200px", // Adjust left position on smaller screens
  },
  [theme.breakpoints.up('md')]: {
    left: "250px", // Adjust left position on medium and up screens
  },
}));