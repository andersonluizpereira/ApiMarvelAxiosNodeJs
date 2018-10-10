import _ from 'lodash'
import api from './api'
import md5 from 'md5'

const apiKey = 'f2aef569ee6f38276c60b9264d1dec2b'
const HashKeys = '0126a49f00e1063a8f441de67dfd56090cb24be6'
var date = new Date()
var ts = date.getTime()
var hash = md5(ts + HashKeys + apiKey)

export default {
    getAllcommics: (params) => {
        return api
            .get('/comics?ts=' + ts + '&apikey=' + apiKey + '&hash=' + hash + '&limit=' + params)
            .then(response => response.data)
            .catch(err => console.error('ERRO!', err))
    },

    getHero: (params) => {
        return api
            .get('/characters?ts=' + ts + '&apikey=' + apiKey + '&hash=' + hash + '&name=' + params)
            .then(response => response.data)
            .catch(err => console.error('ERRO!', err))
    }

}