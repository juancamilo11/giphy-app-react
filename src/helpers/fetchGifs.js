
const fetchGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=A8xMXqzieIHmtO3BjGLAtf1daSSDAv8K`;
    const response = await fetch(url);
    const {data} = await response.json();

    const gifs = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url
        }
    });

    return gifs;
}

export default fetchGifs;