import React, { Component } from "react"
import Container from "./Container";
import Header from "./Header";
import Main from "./Main";
import Wrapper from "./Wrapper";
import School from "./School";
import Personal from "./Personal";
import Redesign from "./Redesign";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./Footer";

class PageContainer extends Component {
    state = {
        result: [],
        search: ""
      };
    render(){

        return(
            <>
            <Router>
            <Header/>
            <br/>
            <br/>
            <br/>
            <Container>
            <Wrapper>
                <Route exact path="/" component={Main} />
                <Route exact path="/school" component={School} />
                <Route exact path="/personal" component={Personal} />
                <Route exact path="/redesign" component={Redesign} />
            </Wrapper>
            <Footer/>
            </Container>
            </Router>
            
            </>
        )
    }
}

export default PageContainer;