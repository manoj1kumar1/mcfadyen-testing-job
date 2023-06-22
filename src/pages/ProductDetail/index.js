import React, { useEffect, useState } from "react"
import { Box, Grid, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SimpleImageSlider from "react-simple-image-slider";

import LeftSideBar from "./LeftSidebar";
import RightSideBar from "./RightSideBar";

import { productImages, responsiveImages } from "../../dummy-data";
import useWindowDimensions from "../../utils/useWindowDimensions";

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
}

const ProductDetail = () => {
    const { width } = useWindowDimensions();
    const [leftSidebarWidth, setLeftSidebarWidth] = useState(undefined);
    const [rightSidebarWidth, setRightSidebarWidth] = useState(undefined);
    const [heartIconRightPos, setHeartIconRightPos] = useState(50);
    const [sidebarTop, setSidebarTop] = useState(undefined);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        const leftSidebarEl = document.querySelector('.leftSidebar').getBoundingClientRect();
        const rightSidebarEl = document.querySelector('.rightSidebar').getBoundingClientRect();
        setLeftSidebarWidth(leftSidebarEl.width);
        setRightSidebarWidth(rightSidebarEl.width);
        setSidebarTop(leftSidebarEl.top);
    }, []);

    const isSticky = (e) => {
        if(matches) return; 
        const leftSidebarEl = document.querySelector('.leftSidebar');
        const rightSidebarEl = document.querySelector('.rightSidebar');
        const heartIconEl = document.querySelector('.heartIcon');
        const contentBodyEl = document.querySelector('.contentBody').getBoundingClientRect();
        
        const scrollTop = window.scrollY;
        if ((scrollTop + window.innerHeight+100) >= document.documentElement.offsetHeight) {
            setHeartIconRightPos(50);
            heartIconEl.classList.remove('is-sticky');
            leftSidebarEl.classList.remove('is-sticky');
            rightSidebarEl.classList.remove('is-sticky');
        } else {
            setHeartIconRightPos(contentBodyEl.left+50);
            heartIconEl.classList.add('is-sticky');
            leftSidebarEl.classList.add('is-sticky');
            rightSidebarEl.classList.add('is-sticky');
        }
    }

    useEffect(() => {
        if (!sidebarTop) return;
        window.addEventListener('scroll', isSticky);
        return () => {
          window.removeEventListener('scroll', isSticky);
        };
    }, [sidebarTop]);
    
    return (
        <Grid sx={{ p: 2 }} container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} sm={3.5} sx={{ display: { xs: "none", sm: "flex" } }}>
                <Box className="leftSidebar" sx={{width:leftSidebarWidth}}>
                    <LeftSideBar />
                </Box>
            </Grid>
            <Grid item xs={12} sm={5}>
                <Box className="contentBody" sx={{position: 'relative'}}>
                    <Box className="heartIcon" sx={{ position: 'absolute', right: heartIconRightPos, top:0, zIndex: 100}}>
                        <IconButton aria-label="heart" size="small">
                            <FavoriteBorderOutlinedIcon />
                        </IconButton>
                    </Box>

                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <SimpleImageSlider
                            width={width}
                            height={600}
                            images={responsiveImages}
                            showBullets={true}
                            showNavs={true}
                        />
                    </Box>

                    <Box sx={{justifyContent:'center', display: { xs: "none", md: "flex" }, position: 'relative' }}> 
                        <ImageList
                            variant="quilted"
                            cols={1}
                            rowHeight='auto'
                        >
                            {productImages.map((item) => (
                                <ImageListItem sx={{alignItems:'center'}} key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                                    <img
                                        {...srcset(item.img, 121, item.rows, item.cols)}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sm={3.5}>
                <Box className="rightSidebar" sx={{width:rightSidebarWidth}}>
                    <RightSideBar />
                </Box>
            </Grid>
            <Grid item xs={12} sm={12}>
                <Box sx={{ display: 'flex', mt: 2, mb: 2, alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant='subtitle' sx={{ textDecorationLine: 'underline', }}>Jonathan Simkhai</Typography>
                    <Typography variant='subtitle' sx={{ ml: 2, textDecorationLine: 'underline', }}>Blazers</Typography>
                    <Typography variant='subtitle' sx={{ ml: 2, textDecorationLine: 'underline', }}>Viscose</Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default ProductDetail;