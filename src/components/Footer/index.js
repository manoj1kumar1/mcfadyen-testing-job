import React from 'react'
import { Grid, Typography } from '@mui/material'

function index() {
    return (
        <Grid container spacing={2} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Grid item xs={12} sm={12} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Typography variant='body1'>A NOTE FROM THE EDITOR</Typography>
            </Grid>
            <Grid item xs={12} sm={4} >
                <Typography variant='subtitle1'>The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky.</Typography>
            </Grid>
            <Grid item xs={12} sm={12} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Typography variant='body1'> By MINNA SHIM, Fashion Editor</Typography>
            </Grid>
        </Grid>
    )
}

export default index