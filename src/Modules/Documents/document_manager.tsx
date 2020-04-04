import React from "react";
import { DocumentStore } from "./store";
import { inject, observer } from "mobx-react";
import { HeaderBar } from "../Components/HeaderBar";
import { Spacer } from "../Components/Spacer";
import styled from 'styled-components';
import { DocumentList } from './document_list';
import loader from '../../Assets/loader.svg';
import { DocumentUploadForm } from './document_upload_form';

interface IDocumentProps {
    documentStore? : DocumentStore;
}

const ModuleWrapper = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 1024px;
`;

@inject("documentStore")
@observer
export class DocumentApp extends React.Component<IDocumentProps>{
    componentDidMount() {
        this.props.documentStore.init();
    }

    render () {
        const {documentStore} = this.props;
        return (
            <ModuleWrapper>
                <HeaderBar header="Welcome to the docs" />
                <Spacer />
                <DocumentUploadForm />
                <Spacer />
                {documentStore.documents.length == 0 && <div className="align-content-center"><img src={loader} /></div>}
                {documentStore.documents.length > 0 && <DocumentList document_list={documentStore.documents}/>}
            </ModuleWrapper>    
        )
    }
}