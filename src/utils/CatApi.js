export class CatApi {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    _checkResult(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    getCatList = (count) => {
        return fetch(`${this._url}/images/search?limit=15&_page=${count}`, {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': '727b362f-5c6c-4d73-968d-40d05811e067'
            }
        })
            .then(this._checkResult)
    }

    getSavedCat = () => {
        return fetch(`${this._url}/favourites`, {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': '727b362f-5c6c-4d73-968d-40d05811e067'
            }
        })
            .then(this._checkResult)
    }

    saveCat = (catId) => {
        return fetch(`${this._url}/favourites`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': '727b362f-5c6c-4d73-968d-40d05811e067'
            },
            body: JSON.stringify({
                image_id: catId
            })
        })
            .then(this._checkResult)
    }

    deleteCat = (catId) => {
        return fetch(`${this._url}/favourites/${catId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': '727b362f-5c6c-4d73-968d-40d05811e067'
            }
        })
            .then(this._checkResult)
    }


}

const catApi = new CatApi({
    url: 'https://api.thecatapi.com/v1',
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': '727b362f-5c6c-4d73-968d-40d05811e067'
    },
})

export default catApi