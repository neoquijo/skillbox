export class APIRequest {
    protected baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }






    async getPostsTitle() {
        const response = await this.makeRequest('/ids');
        if (response) {
            return response
        }

    }

    async getPost(id: string) {
        const response = await this.makeRequest('/posts/' + id)
        if (response) {
            return response
        }
    }



    async makeRequest(endpoint: string) {
        const url = this.baseUrl + endpoint;
        const headers = {
            'Content-Type': 'application/json',

        };

        let options: RequestInit = {
            method: "GET",
            headers,

        };
        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error('Request failed');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return null;
        }
    }
}