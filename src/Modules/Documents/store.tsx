import { action, observable } from "mobx";
import { services } from './services';
import { FormState, FieldState } from "formstate";
import { isRequired, isValidDate, minLength } from '../Utils/validators';
import { format } from 'date-fns';

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

    @observable public selectedFile: any;

    @observable newDocumentFormState = new FormState({
        file: new FieldState("").validators(isRequired, minLength(1)),
        category: new FieldState("").validators(isRequired, minLength(1)),
        lastReviewed: new FieldState("").validators(isRequired, isValidDate)
    });

    @observable newDocument = null;

    @action public getDocuments = ():void => {
        this.documents = [];
        services.retrieveDocuments().then((response) => {
            this.documents = response;
        }).catch((err) => {
            console.log("CATCH: getDocuments: ", err);
        });
    }

    @action async handleFormSubmit(e: any) {
        e.preventDefault();

        const validationState = await this.newDocumentFormState.validate();
        if (validationState.hasError) {
            return;
        }
        
        const formData = new FormData();
        formData.append("file", this.selectedFile, this.newDocumentFormState.$.file.value);
        formData.append("Category", this.newDocumentFormState.$.category.value);
        formData.append("LastReviewed", this.newDocumentFormState.$.lastReviewed.value);
        
        services.uploadDocument(formData).then((response) => {
            if (parseInt(response)) {
                this.getDocuments();
            }
        }).catch((err) => {
            console.log("CATCH: uploadDocument: ", err);
        });
    }

    handleFileSelect(e: any) {
        this.selectedFile = e.target.files[0] || null;
        this.newDocumentFormState.$.file.value = e.target.files[0].name || '';
    }

    fileType(fileName: string):string {
        const splitString = fileName.split('.');
        return splitString[splitString.length-1] || "N/A";
    }

    async init () {
        this.getDocuments();
        const date = new Date();
        this.newDocumentFormState.$.category.reset();
        this.newDocumentFormState.$.file.reset();
        this.newDocumentFormState.$.lastReviewed.reset();
    }
}