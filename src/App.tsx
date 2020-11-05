import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import palette from "./libs/theme/palette";
import typography from "./libs/theme/typography";
import overrides from "./libs/theme/overrides";
import CssBaseline from "@material-ui/core/CssBaseline";
import Test from "./pages/test";
import Layout from "./components/base/Layout";

function App() {
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette,
        typography,
        overrides,
        zIndex: {
          appBar: 1200,
          drawer: 1100,
        },
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
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
