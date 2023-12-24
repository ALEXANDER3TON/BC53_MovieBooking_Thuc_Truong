import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Container>
      <Box>
        <Grid>
          <Grid item>
            <Typography>FAQ</Typography>
            <Typography>Brand Guidelines</Typography>
            <Typography>Thỏa thuận sử dụng</Typography>
            <Typography>Chính sách bảo mật</Typography>
          </Grid>
          <Grid item>
              <Typography>Đối Tác</Typography>
              <Box>
                
              </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Footer;
