import RESTClient from '@umany-global/rest-client-js';


export default class CauseService {

    #client;

    constructor ( config ) {

        config.baseUrl = config.baseUrl ?? 'https://api.umany.global/causes';

        this.#client = new RESTClient( config );
    }


    find ( params = {} ) {

        return this.#client.get({
            path: '/',
            query: params,
        });

    }

}