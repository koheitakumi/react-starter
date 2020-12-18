import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { defaultTheme } from "./libs/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import Test from "./pages/test";
import Layout from "./components/base/Layout";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/test" component={Test} />
            <Redirect path="*" to="/test" />
          </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
