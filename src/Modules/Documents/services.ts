import {Constants} from "../../Constants";

export const asyncRequest = async (
    endpoint: string,
    requestBody: any,
    method?: "post" | "get",
    isFormData = false
) => handleResponse(await asyncApiRequest(endpoint, requestBody, method, isFormData));

export async function handleResponse(response: Response) {
    if (response.status === 400 || response.status === 409) {
        throw await response.json();
    }

    if (!response.ok) {
        console.log("FALSE: handleResponse: ", response);
        throw Error(response.statusText);
    }
    return await response.json();
}

export async function asyncApiRequest(
    endpoint: string,
    requestBody: any,
    method?: "post" | "get",
    isFormData = false
){
    const request: RequestInit = {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        body: isFormData ? requestBody : JSON.stringify(requestBody)
    }
    return await fetch(endpoint, request);
}

export const services = {
    retrieveDocuments: async (requestBody?: any) => await asyncRequest(Constants.API_GET_DOCUMENTS, requestBody, "get")
};