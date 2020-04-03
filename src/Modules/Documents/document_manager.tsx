import React from "react";
import { DocumentStore } from "./store";
import { inject, observer } from "mobx-react";

export interface IDocumentProps {
    documentStore? : DocumentStore;
}

@inject("documentStore")
@observer
export class DocumentApp extends React.Component<IDocumentProps>{
    componentDidMount() {
        this.props.documentStore.init();
    }

    render () {
        const {documentStore} = this.props;
        return (
            <div>
                {documentStore.documents.map((document, i) => (
                    <div key={i+1}>{document.Category}</div>
                ))}
            </div>
        )
    }
}