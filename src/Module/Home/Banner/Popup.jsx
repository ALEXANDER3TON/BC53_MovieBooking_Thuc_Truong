import { Box } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const Popup = ({maPhim}) => {
    console.log('maPhim', maPhim)
    const {data:movieInfo = {}} = useQuery({
        queryKey: ["MOVIE_INFO", maPhim],
        queryFn: (() => getMovieDetailsAPI(maPhim))
    })
    console.log('movieInfo', movieInfo)
  return (
    <Box sx={{
        position:"fixed",
        background: "rgba(0,0,0,0.6)",
        top:0,
        left:0,
        right:0,
        bottom:0,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }} >
        <Box sx={{
            background: "white",
            width:270,
            padding:"21px 9px",
            borderRadius:"9px"
        }}>
            <iframe src={movieInfo.trailer} frameborder="0"></iframe>
        </Box>
    </Box>
  )
}

export default Popup