import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const RightSideBar = ({position}) => {
    
    return (
        <Grid container spacing={2} sx={{position}}>
            <Grid item xs={12} sm={10}>
                <Box>
                    <Typography variant='h4'>JONATHAN SIMKHAI</Typography>
                    <Typography variant='subtitle'>Lurex Linen Viscose Jacket in Conchiglia</Typography>
                </Box>
                <Typography variant='body1'>$225</Typography>
                <Box sx={{ mt: 2 }}>
                    <Typography variant='subtitle1'>Color Conchiglia</Typography>
                    <Box sx={{ display: 'flex', mt: 1 }}>
                        <Box sx={{ width: 53, height: 64, border: 1, borderColor: 'lightGray' }}>
                            <img src={require('../../../assets/images/image3.png')} alt='img' style={{ width: 50, height: 60 }} />
                        </Box>
                        <Box sx={{ ml: 1, width: 53, height: 64, border: 1, borderColor: 'lightGray' }}>
                            <img src={require('../../../assets/images/image2.png')} alt='img' style={{ width: 50, height: 60 }} />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', mt: 2, alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant='subtitle'>Size L</Typography>
                    <Typography variant='subtitle' sx={{ textDecorationLine: 'underline', }}>Size Guide</Typography>
                </Box>
                <Box sx={{ display: 'flex', mt: 2, alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Button sx={{ ml: 1, width: 80, height: 30, border: 1, borderRadius: 100, borderColor: 'lightGray', }} variant="outlined">XS</Button>
                    <Button sx={{ ml: 1, width: 80, height: 30, border: 1, borderRadius: 100, borderColor: 'lightGray', }} variant="outlined">S</Button>
                    <Button sx={{ ml: 1, width: 80, height: 30, border: 1, borderRadius: 100, borderColor: 'lightGray', }} variant="outlined">M</Button>
                    <Button sx={{ ml: 1, width: 80, height: 30, border: 1, borderRadius: 100, borderColor: 'lightGray', }} variant="outlined">L</Button>
                    <Button sx={{ ml: 1, width: 80, height: 30, border: 1, borderRadius: 100, borderColor: 'lightGray', }} variant="outlined">XXL</Button>
                </Box>
            </Grid>
            <Grid item xs={12} sm={10}>
                <Button sx={{ width: '100%', borderRadius: 20, mt: 1 }} variant="contained" endIcon={<ArrowRightAltIcon />}>
                    Add to Bag
                </Button>
            </Grid>
            <Grid item xs={12} sm={10}>
                <Typography variant='subtitle'>Get 4 interest-free payments of $196.25 with Klarna LEARN MORE</Typography>
                <Typography variant='body2' sx={{ mt: 2 }}>Speak to a Personal Stylist CHAT NOW</Typography>
            </Grid>
        </Grid>
    )
}

RightSideBar.defaultProps = {
    position: 'relative',
}

export default RightSideBar