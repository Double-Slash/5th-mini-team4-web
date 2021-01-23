import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Category from "./components/Category/Category";
import Navigation from "./pages/Navigation";
import Header from "./pages/Header";
import CreateAssessment from "./pages/EditAssess/CreateAssessment";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Join from "./pages/Join/Join";
import document from "./components/DocumentPage/Document";
import Response from "./pages/Respond/RespondAssessment";
import RespondentsList from "./components/SendAssessment/RespondentsList";

function App() {
  return (
    <>
      <Header />
      <HashRouter>
        <Navigation/>
        <Route path="/" exact={true} component={document}/>
        <Route path="/login" exact={true} component={Login} />
        <Route path="/join" exact={true} component={Join} />
        <Route path="/category" exact={true} component={Category}/>
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
        <Route path="/response" exact={true} component={Response} />
      </HashRouter>
    </>
  );
}

export default App;
