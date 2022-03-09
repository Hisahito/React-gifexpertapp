



export const getGifs = async(categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria) }&limit=10&api_key=yL63o52MmMvj0R8VAgkrh44rq24ZXqQV`
    const resp = await fetch( url ); 
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            tittle: img.tittle,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}
