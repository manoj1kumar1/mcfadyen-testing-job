import { useEffect } from 'react'; 
import { Outlet} from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, useMediaQuery } from '@mui/material';

// project imports 
import Header from '../components/Header';
import Footer from "../components/Footer";

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'));
    // Handle left drawer
    //const leftDrawerOpened = useSelector((state) => state.customization.opened); 
    
    useEffect(() => {
        //dispatch({ type: SET_MENU, opened: !matchDownMd });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [matchDownMd]);
    return (
        <Box sx={{flex:1, display: 'flex', flexDirection:'column' }}> 
            {/* header */}
            <Header />
            {/* main content */}
            <Box sx={{flex:1, my:2}}>
                <Outlet />
            </Box>
            <Footer />
        </Box>
    );
};

export default MainLayout;
