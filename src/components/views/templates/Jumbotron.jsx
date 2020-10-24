import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FotoFondo from "../../../assets/img/redmoon.jpg";
import AvatarCorporate from "../../../assets/img/AvatarCorporate.jpg";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Avatar,
} from "@material-ui/core";

import { WhatsApp } from "@material-ui/icons";

import theme from "../../../themeConfig";

const useStyle = makeStyles((theme) => ({
  margen: theme.mixins.toolbar,
  jumbotron: {
    display: "flex",
    backgroundImage: `linear-gradient(to bottom, #ab2222bf 20%, #000000bd 80%),  url(${FotoFondo})`,
    // backgroundImage: `linear-gradient(to right, #8500ffa6, #000000b5),  url(${FotoFondo})`,
    backgroundSize: "cover",
    [theme.breakpoints.only("xs")]: {
      minHeight: "250px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      minHeight: "50vh",
    },
    [theme.breakpoints.up("md")]: {
      minHeight: "480px",
    },
  },
  flexContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "80%",
    margin: "auto",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "100%",
    },
  },
  AvatarHome: {
    width: "200px",
    height: "200px",
    margin: "20px auto",
    boxShadow: "0 5px 10px #0000008f",
    [theme.breakpoints.down("xs")]: {
      width: "120px",
      height: "120px",
    },
    [theme.breakpoints.only("sm")]: {
      width: "180px",
      height: "180px",
    },
  },
}));

const Jumbotron = (props) => {
  const classes = useStyle();
  return (
    <React.Fragment>
      <div className={classes.margen}></div>
      <Container maxWidth="lg">
        <Box p={1} my={2} mx={1}>
          <Card className={classes.jumbotron}>
            <CardContent className={classes.flexContent}>
              <Avatar
                alt="Neuroseller VIP"
                src={AvatarCorporate}
                className={classes.AvatarHome}
              />
              <Typography
                component="h1"
                variant="h4"
                color="initial"
                align="center"
                paragraph
              >
                Únete a la primera red social de ventas efectivas
              </Typography>

              <Typography
                variant="body1"
                color="initial"
                align="center"
                paragraph
              >
                Gracias por visitarnos, te invitamos a formar parte de nuestros
                primeros pasos como red social. Crea tu publicacion ahora y
                promociona tu negocio con el estilo profesional que ofrece
                Neuroseller VIP, cada aporte ahora te hace un VIP fundador con
                beneficios unicos por el periodo de un año.
              </Typography>

              <Button
                variant="contained"
                style={theme.palette.whatsapp}
                size="large"
                startIcon={<WhatsApp />}
                href="https://wa.me/584146877921?text=Quiero%20crear%20mi%20publicacion%20en%20Neuroseller%20VIP"
              >
                Publicar ahora via Whatsapp
              </Button>

              <Typography
                variant="caption"
                color="initial"
                align="center"
                paragraph
              >
                El registro en la app se encuentra limitado a 50 usuarios
                certificados
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Jumbotron;
