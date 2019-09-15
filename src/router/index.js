import React, {Component} from 'react';
import {Switch,Route,Redirect} from "react-router-dom";
import Index from "../view/index"
import About from "../view/about"
import Book from "../view/book"
import Details from "../view/details"
import User from "../view/user"

class RouterIndex extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path={"/"} render={()=>(
                        <Redirect to={"index/all"}/>
                    )}
                    />
                    <Route exact path={"/index"} render={()=>(
                        <Redirect to={"index/all"}/>
                    )}
                    />
                    <Route path={"/index/:id"} component={Index}  />

                    <Route path={"/book"} component={Book} />
                    <Route path={"/detalis"} component={Details} />
                    <Route path={"/user"} component={User} />
                    <Route path={"/about"} component={About} />
                </Switch>
            </div>
        );
    }
}

export default RouterIndex;