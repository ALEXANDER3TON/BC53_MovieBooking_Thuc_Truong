import fetcher from "./fetcher"

export const deleteMovie = async (movieID) => {
    try {
        const response = await fetcher.post(movieID)
    } catch (error) {
        
    }
}