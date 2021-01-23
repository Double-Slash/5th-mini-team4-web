import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Assessment from "./components/Assessment/Assessment";
import Category from "./components/Category/Category";
import Navigation from "./pages/Navigation";
import Header from "./pages/Header";
import CreateAssessment from "./pages/EditAssess/CreateAssessment";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Join from "./pages/Join/Join";
import FindPassword from "./pages/FindPassword/FindPassword";
import Analysis from "./pages/Analysis/Analysis";
import document from "./components/DocumentPage/Document";
import RespondentsList from "./components/SendAssessment/RespondentsList";

function App() {
  return (
    <>
      <Header></Header>
      <HashRouter>
        <Navigation></Navigation>
        <Route path="/" exact={true} component={document}></Route>
        <Route path="/login" exact={true} component={Login} />
        <Route path="/join" exact={true} component={Join} />
        <Route path="/category" exact={true} component={Category}></Route>

        <Route
          path="/createassessment"
          exact={true}
          component={CreateAssessment}
        />
        <Route
          path="/sendassessment"
          exact={true}
          component={RespondentsList}
        />
        <Route path="/main" exact={true} component={Main} />
      </HashRouter>
    </>
  );
}

export default App;
