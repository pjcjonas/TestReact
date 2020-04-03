import React from "react";
import { Provider } from "mobx-react";
import Router from "react-router/lib/Router";
import Route from "react-router/lib/Route";
import browserHistory from "react-router/lib/browserHistory";
import { DocumentApp } from "./Modules/Documents";

export const Routes = ({stores}) => (
    <Provider {...stores}>
        <Router history={browserHistory}>
            <Route path="docs" component={() => <DocumentApp />} />
        </Router>
    </Provider>
);
