import axios from "axios";

export default class GetMovies {
    static async getAll(url, typeNumber, limit, curPage) {
        try {
            const response = await axios.get(url, {
                params: { // тут мы прописываем все возможные параметры, которые существуют в api и которые мы подгружаем на 4 строке
                    typeNumber: typeNumber,
                    limit: limit,
                    page: curPage
                },
                headers: {
                    'X-API-KEY': 'GF1AKFK-QDQMK5V-N6ANZEM-MFJE27E', // Алексей
                    // 'X-API-KEY': '3J11JSE-62ZMZVE-M13CAMT-NSMAJXV', // Павел
                    'Content-Type': 'application/jsonp',
                    "Access-Control-Allow-Origin": "*"
                }
            })
            return response.data
        } catch (error) {
            console.log(error);
        }
    }

    static async getMovie(name) {
        try {
            const res = await axios.get('https://api.kinopoisk.dev/v1.3/movie', {
                headers: {
                    'X-API-KEY': 'GF1AKFK-QDQMK5V-N6ANZEM-MFJE27E', // Алексей
                    // 'X-API-KEY': '3J11JSE-62ZMZVE-M13CAMT-NSMAJXV', // Павел
                    'Content-Type': 'application/jsonp',
                    "Access-Control-Allow-Origin": "*"
                },
                params: {
                    limit: 10,
                    name,
                },
            });
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
}