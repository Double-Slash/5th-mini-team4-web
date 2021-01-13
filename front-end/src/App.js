import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Home from './pages/Home/Home'
import Assessment from './components/Assessment/Assessment';
import Category from './components/Category/Category';
import Navigation from './pages/Navigation';
import Header from './pages/Header';
import CreateAssessment from'./pages/EditAssess/CreateAssessment';
import Main from './pages/Main/Main'
import Login from './pages/Login/Login'
import Join from './pages/Join/Join'
import FindPassword from './pages/FindPassword/FindPassword'
import Analysis from './pages/Analysis/Analysis';

function App() {
  return (
    <>
    <Header></Header>
    <HashRouter>
      {/* Navigation은 개발 완료시 삭제예정 개발시 페이지 참고용 */}
      <Navigation></Navigation>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path='/login' exact={true} component={Login} />
      <Route path='/join' exact={true} component={Join} />
      <Route path='/findpassword' exact={true} component={FindPassword} />
      <Route path="/category" exact={true} component={Category}></Route>
      <Route path="/assessment" exact={true} component={Assessment}></Route>
      <Route path="/createassessment" exact={true} component={CreateAssessment} />
      <Route path="/analysis" exact={true} component={Analysis} />
      <Route path="/main" exact={true} component={Main} />
    </HashRouter>
    </>
  );
}

export default App;
