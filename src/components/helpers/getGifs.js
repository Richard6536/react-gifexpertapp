
    export const getGifs = async(category) => {

        console.log(category);

        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=5&api_key=nZy6UI9XQ6X0IhIH7PS0sjI22RXzCBnd`;
        const resp = await fetch( url );
        const {data} = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });
 
        return gifs;
    }