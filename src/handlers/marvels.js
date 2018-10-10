import moment from 'moment'
import vtex from '../marvelapi'

export default {
    getCommics: function(request, reply) {
        return reply(vtex.marvels.getAllcommics(request.params.limit))
    },
    getHero: function(request, reply) {
        return reply(vtex.marvels.getHero(request.params.name))
    }
}