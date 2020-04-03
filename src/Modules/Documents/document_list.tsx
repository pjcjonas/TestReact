import React from "react";
import { DocumentStore } from "./store";
import { inject, observer } from "mobx-react";

interface IDocumentListProps {
    documentStore? : DocumentStore;
}

@inject("documentStore")
@observer
export class DocumentList extends React.Component<IDocumentListProps>{
    componentDidMount() {
        this.props.documentStore.init();
    }

    render () {
        const {documentStore} = this.props;
        return (
            <div>LIST HERE</div>  
        )
    }
}