import { action, observable, computed } from "mobx";
import { services } from './services';

interface IDocument {
    DocumentId: number,
    DocumentFileName: string,
    AzureFileReference: string,
    Category: string,
    LastReviewed: string
}

export class DocumentStore {
    
    @observable 
    public documents: IDocument[] = [];

    @action
    public getDocuments = ():void => {
        services.retrieveDocuments().then((response) => {
            console.log("THEN: getDocuments: ", response);
            this.documents = response;
        }).catch((err) => {
            console.log("CATCH: getDocuments: ", err);
        });
    }

    async init () {
        this.getDocuments();
    }
}