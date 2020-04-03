import { action, observable } from "mobx";
import { services } from './services';

export interface IDocument {
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
            this.documents = response;
        }).catch((err) => {
            console.log("CATCH: getDocuments: ", err);
        });
    }

    fileType(fileName: string):string {
        const splitString = fileName.split('.');
        return splitString[splitString.length-1] || "N/A";
    }

    async init () {
        this.getDocuments();
    }
}