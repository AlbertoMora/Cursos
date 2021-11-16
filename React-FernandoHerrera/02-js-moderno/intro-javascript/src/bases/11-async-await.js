const apiKey = "lDoaOc7v0U38IFpQnRIkdYH3yIv63b8b";

const getImage = async () => {
    try {
        const res = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await res.json();
        const { url } = data.images.original;

        const img = document.createElement("img");
        img.src = url;
        document.body.append(img);
    } catch (err) {
        //manejo del error
        console.error(err);
    }
};

getImage();
