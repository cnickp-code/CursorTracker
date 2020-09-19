import config from '../config';

const CatApiService = {
    getCat() {
        return fetch(`${config.CAT_API_ENDPOINT}`)
                .then(res => {
                    return (!res.ok)
                            ? res.json().then(e => Promise.reject(e))
                            : res.json()
                })
    }
}

export default CatApiService;