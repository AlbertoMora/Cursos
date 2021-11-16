const apiKey = "lDoaOc7v0U38IFpQnRIkdYH3yIv63b8b";

export const getImage = async () => {
    try {
        const res = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await res.json();
        const { url } = data.images.original;

        return url;
    } catch (err) {
        return "No existe";
    }
};

getImage();
