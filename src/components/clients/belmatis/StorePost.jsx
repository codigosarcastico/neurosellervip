import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";

import WhatsAppIcon from "@material-ui/icons/WhatsApp";
// import TelegramIcon from "@material-ui/icons/Telegram";
import InstagramIcon from "@material-ui/icons/Instagram";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import ShareIcon from "@material-ui/icons/Share";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import StoreIcon from "@material-ui/icons/Store";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import RoomIcon from "@material-ui/icons/Room";
// import PhoneIcon from "@material-ui/icons/Phone";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import EmailIcon from "@material-ui/icons/Email";
// import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import VerifiedUserRoundedIcon from "@material-ui/icons/VerifiedUserRounded";

import BackgroundImg from "../../../assets/img/banners/BannerBelmatis.jpg";
import AvatarImg from "../../../assets/img/avatars/AvatarBelmatis.jpg";

const useStyles = makeStyles((theme) => ({
  redVip: {
    color: theme.palette.primary.main,
  },
  textSlim: {
    fontWeight: "lighter",
  },
  paper: {
    backgroundImage: `linear-gradient(to bottom, #ff0000bf 00%, #000000 70%),  url(${BackgroundImg})`,
    padding: "2rem",
    height: "100vh",
    maxWidth: "1280px",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundSize: "cover",
    [theme.breakpoints.only("xs")]: {
      padding: "0.5rem",
    },
  },
  paperCard: {
    position: "relative",
  },
  actionsHeader: {
    justifyContent: "space-between",
    position: "absolute",
    width: "100%",
    backgroundColor: "#0000001c",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    backgroundImage: `linear-gradient(to bottom, #ffffff00 30%, #000000 88%),  url(${BackgroundImg})`,
    backgroundSize: "cover",
  },
  avatar: {
    height: "100px",
    width: "100px",
    border: "2px solid #fff",
  },
  listInfo: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    marginTop: "20px",
  },
}));

const StorePost = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Paper className={classes.paper} elevation={3} variant="outlined">
      <Card className={classes.paperCard}>
        <CardActions className={classes.actionsHeader}>
          <IconButton component={Link} to="/">
            <KeyboardBackspaceIcon />
          </IconButton>
          <h3 className={classes.textSlim}>
            NEUROSELLER <b className={classes.redVip}>VIP</b>
          </h3>
          <IconButton>
            <Tooltip title="Belmatis C.A. es VIP FUNDADOR" aria-label="add">
              <VerifiedUserRoundedIcon
                style={{ marginRight: "5px" }}
                size="medium"
              />
            </Tooltip>
          </IconButton>
        </CardActions>

        <CardMedia
          src="#"
          title="Empresa Belmatis C.A"
          className={classes.media}
        />

        <CardActions>
          <Avatar
            alt="Belmatis C.A"
            src={AvatarImg}
            className={classes.avatar}
          />

          <Box>
            <Box display="flex" flexDirection="row" alignItems="center">
              <Tooltip title="Belmatis C.A. es VIP FUNDADOR" aria-label="add">
                <StoreIcon style={{ marginRight: "5px" }} size="medium" />
              </Tooltip>

              <Typography component="h1" variant="h6">
                Belmatis C.A
              </Typography>
            </Box>

            <Box display="flex" flexDirection="row" alignItems="center">
              <GpsFixedIcon
                style={{
                  marginRight: "5px",
                  color: "rgba(255, 255, 255, 0.7)",
                }}
                size="small"
              />
              <Typography
                component="h4"
                variant="caption"
                color="textSecondary"
              >
                Maracaibo, Zulia Venezuela
              </Typography>
            </Box>
          </Box>
        </CardActions>

        <CardActions>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            endIcon={<WhatsAppIcon />}
            href="https://wa.me/584120738023"
          >
            {" "}
            Contactar con la empresa
          </Button>
        </CardActions>
      </Card>

      <CardContent>
        <Typography variant="body1" color="initial" paragraph>
          Somos una empresa de seguridad Venezolana especializada en el area de
          automatismo y control. Contamos con mas de 15 años de experiencia
          protegiendo los hogares, las empresas y el patrimonio de cada uno de
          nuestros clientes. Trabajamos con CCTV, portones electricos, cercos
          electricos y alarmas de seguridad entre otros servicios dedicados al
          serctor electrico
        </Typography>

        <Divider variant="fullWidth" />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <List className={classes.listInfo}>
              <ListSubheader>Información de contacto</ListSubheader>
              <Divider variant="fullWidth" />

              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <RoomIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Ubicacion"
                  secondary="Centro Comercial Gran Bazar, local ML-45"
                />
              </ListItem>

              {/* <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PhoneIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Contacto Local"
                  secondary="+58 12434 224 12"
                />
              </ListItem> */}

              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PhoneAndroidIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Movil" secondary="+58 412 0738023" />
              </ListItem>

              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <EmailIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Email" secondary="belmatis.ca@gmail.com" />
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12} sm={6}>
            <List className={classes.listInfo}>
              <ListSubheader>Redes Sociales</ListSubheader>
              <Divider variant="fullWidth" />

              {/* <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <TelegramIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Canal Telegram" secondary="@CuentaBot" />
              </ListItem> */}

              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <InstagramIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Instagram"
                  secondary="@belmatis"
                />
              </ListItem>
{/* 
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <FacebookIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Facebook"
                  secondary="@UserName Nickname"
                />
              </ListItem> */}
            </List>
          </Grid>
        </Grid>
      </CardContent>
    </Paper>
  );
};

export default StorePost;
