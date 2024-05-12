const mongo_uri = process.env.MONGO_URI;
const cache = {}

export const connectMongo = async () => {
    if (!mongo_uri) {
        throw new Error('No mongo uri found')
    }
    if (cache.connection) {
        return cache.connection
    }
    if (!cache.promise) {
        cache.promise = mongoose.connect(mongo_uri)
    }

    try {
        cache.connection = await cache.promise
    } catch (err) {
        throw err
    }
    return cache.connection
}

