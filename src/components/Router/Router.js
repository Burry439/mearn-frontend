import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { useLanguage } from "contexts/languageContext";
import Home from "components/Home"

const Router = () => {
  const {getPath, getLanguages} = useLanguage();
  const langs = `:lang(${getLanguages().join("|")})`
  return(
  <Switch>
    <Route exact path={`/${langs}/`} component={Home} />
    <Redirect from="*" to={getPath()} />
  </Switch>
)};



export default Router;
