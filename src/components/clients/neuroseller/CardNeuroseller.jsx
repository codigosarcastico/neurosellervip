import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import GpsFixedIcon from "@material-ui/icons/GpsFixed"; 

import Poster from "../../../assets/img/posters/poster-milic.jpg";
import AvatarCorporate from "../../../assets/img/AvatarCorporate.jpg";

import { makeStyles } from "@material-ui/core";

import  {Link}  from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mediaPoster: {
    height: "180px",
    paddingTop: "148.25%", // 16:9
  },
  footer: {
    justifyContent: "space-between",
  },
}));

const CardNeuroseller = (theme) => {
  const classes = useStyles();
  return (
    <Card>
      <CardActionArea component={Link} to="/neuroseller">
        <CardHeader
          avatar={<Avatar aria-label="recipe" src={AvatarCorporate}>N</Avatar>}
          action={
            <IconButton aria-label="settings" color="primary">
              <VerifiedUserIcon />
            </IconButton>
          }
          title="Neuroseller"
        />
        <CardMedia
          title="Poster Neuroseller"
          image={Poster}
          className={classes.mediaPoster}
        />

        <CardContent> 
          <Typography variant="body2" color="initial" gutterBottom >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores architecto deleniti obcaecati pariatur, ea illum.
          </Typography>
        </CardContent>

          <Divider variant="middle" />
        <CardActions className={classes.footer}>
          <Button size="small" startIcon={<GpsFixedIcon />}>
            Maracaibo, Zulia. Venezuela
          </Button> 
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default CardNeuroseller;
