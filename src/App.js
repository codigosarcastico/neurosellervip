import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

import { ThemeProvider, responsiveFontSizes } from "@material-ui/core/styles";
import ThemeConfig from "./themeConfig";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Home from "./components/views/Home.jsx";
import StorePostBelmatis from "./components/clients/belmatis/StorePost.jsx";
import StorePostMilic from "./components/clients/milicremositos/StorePost.jsx";

let theme = responsiveFontSizes(ThemeConfig);

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
           
          <Route path="/" exact>
            <Helmet>
              <title>Neuroseller VIP &reg; 2020</title>
              <meta
                name="description"
                content="La primera red social de ventas efectivas"
              />
            </Helmet>
            <Home />
          </Route>

          <Route path="/belmatis">
            <Helmet>
              <title>Belmatis C.A. - Neuroseller VIP &reg; 2020</title>
              <meta
                name="description"
                content="Belmatis C.A, todo en automatismo y seguridad"
              />
            </Helmet>
            <StorePostBelmatis />
          </Route>
          <Route path="/milicremositos">
            <Helmet>
              <title>Milicremotitos - Neuroseller VIP &reg; 2020</title>
              <meta
                name="description"
                content="Los mejores helados cremosos en Venezuela, 100% naturales"
              />
            </Helmet>
            <StorePostMilic />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
