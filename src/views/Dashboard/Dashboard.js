import React from "react";
import { Box } from "@material-ui/core";
import { PageBody, PageHeader } from "../../components";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const percentage = 66;



const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 16 }} color="red" gutterBottom>
        Placements exams history
      </Typography>

      <Typography variant="h5" component="div" color={"blue"} style={{ width: 100, height: 100 }}>

        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </Typography>
    </CardContent>

    <CardActions>
      <p variant="contained" style={{ color: "purple" }}>Total Students attempted</p>

      <p variant="outlined" style={{ color: "purple" }}>Total Students cleared</p>
    </CardActions>
    <CardActions>
      <Button variant="contained" sx={{ backgroundColor: "green", width: 100, borderRadius: 5, ml: 5, mr: "40px" }}>1</Button>

      <Button variant="contained" sx={{ backgroundColor: "green", width: 100, borderRadius: 5 }}>1</Button>
    </CardActions>
    <CardActions>
      <p variant="contained" style={{ color: "purple", marginLeft: "40px", marginRight: "120px" }}>Call ahead</p>

      <p variant="outlined" style={{ color: "purple" }}>Bill</p>
    </CardActions>
    <CardActions>
      <Button variant="contained" sx={{ backgroundColor: "purple", borderRadius: 5, ml: 5, mr: "100px" }}>JBK</Button>

      <Button variant="contained" sx={{ backgroundColor: "purple", borderRadius: 5 }}>1</Button>
    </CardActions>
  </React.Fragment >
);



const Dashboard = () => {
  return (
    <React.Fragment>
      <PageBody style={{ display: "flex" }}>
        <Box
          flexGrow='1'
          width='100%'
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >

          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid
              container
              direction="row"
              display="flex"
              justifyContent="center"
              alignItems="flex-start"
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              sx={{ pb: 20 }}
            >
              <Grid item xs="auto" >
                <Card sx={{ minWidth: 275, backgroundColor: "#FA5B39", }}>
                  <CardContent>

                    <Typography variant="h5" component="div">
                      Students
                    </Typography>
                    <Typography sx={{ mt: 3, mb: -1, fontWeight: 20 }} variant="h5" color="text.secondary">
                      <strong>26</strong>
                    </Typography>

                  </CardContent>

                </Card>
              </Grid>
              <Grid item xs="auto">
                <Card sx={{ minWidth: 275, backgroundColor: "#3977FA" }}>
                  <CardContent>

                    <Typography variant="h5" component="div">
                      Departments
                    </Typography>
                    <Typography sx={{ mt: 3, mb: -1 }} variant="h5" color="text.secondary">
                      <strong>5</strong>
                    </Typography>

                  </CardContent>

                </Card>
              </Grid>
              <Grid item xs="auto">
                <Card sx={{ minWidth: 275, backgroundColor: "green" }}>
                  <CardContent>

                    <Typography variant="h5" component="div">
                      Placements
                    </Typography>
                    <Typography sx={{ mt: 3, mb: -1 }} variant="h5" color="text.secondary">
                      <strong>0</strong>
                    </Typography>
                  </CardContent>

                </Card>
              </Grid>

            </Grid>

            <Grid item xs={10}>
              <h3 style={{ color: "green" }}> Upcoming placement opportunities</h3>

            </Grid>
            <Grid item xs={2} sx={{ mb: 5, }}><Button sx={{ backgroundColor: "orange", borderRadius: 10 }} variant="extended">
              Share
            </Button></Grid>
            <Grid
              container
              direction="row"
              display="flex"
              justifyContent="center"
              alignItems="flex-start"
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs="auto">

                <Card sx={{ width: 500, minWidth: 275, backgroundColor: 'transparent' }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 14, }} color="text.secondary" gutterBottom>
                      Placement tests
                    </Typography>

                    <Typography variant="body2">
                      No placement tests.

                    </Typography>
                  </CardContent>

                </Card>
              </Grid>
              <Grid item xs="auto">

                <Card sx={{ width: 500, minWidth: 275, backgroundColor: 'transparent', mb: 5 }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Pre assesments
                    </Typography>


                    <Typography variant="body2">
                      No pre assesments tests.
                    </Typography>
                  </CardContent>

                </Card>

              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              display="flex"
              justifyContent="center"
              alignItems="flex-start"
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs="auto">

                <Card variant="outlined">{card}</Card>
              </Grid>
              <Grid item xs="auto">

                <Card variant="outlined">{card}</Card>

              </Grid>
            </Grid>
          </Grid>
        </Box>

      </PageBody>
    </React.Fragment >
  );
};

export default Dashboard;
