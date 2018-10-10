import marvels from './marvels'
export default {
    default: {
        get: function(request, reply) {
            return reply('Welcome!')
        }
    },
    marvels: marvels
}