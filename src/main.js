import RESTClient from '@umany-global/rest-client-js';


export default class CauseService {

    #client;

    constructor ( config ) {

        config.baseUrl = config.baseUrl ?? 'https://causes.api.umany.global';

        this.#client = new RESTClient( config );
    }


    list ( params = {} ) {

        return this.#client.get({
            path: '/causes',
            query: params,
        });

    }

}