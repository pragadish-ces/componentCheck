/* eslint-disable quote-props */
class Api {
    static token = '';
    
    static headersWithOutSession() {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'dataType': 'json',
            'Authorization': this.token
        };
    }


    static get(route, headers) {
        return this.xhr(route, null, 'GET', headers || this.headersWithOutSession());
    }

    static post(route, params) {
        return this.xhr(route, params, 'POST', this.headersWithOutSession());
    }

    static xhr(url, params, verb, headers) {
        const options = Object.assign({ method: verb }, params ?
            { body: JSON.stringify(params) } : null);
        options.headers = headers;
        // eslint-disable-next-line no-undef
        return fetch(url, options)
            .then((response) => response.json())
            .then((data) => data).catch((error) => {
                throw error;
            });
    }

}
export default Api;
