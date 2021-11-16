const apiKey = "lDoaOc7v0U38IFpQnRIkdYH3yIv63b8b";

const httpCall = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

httpCall
    .then((res) => res.json())
    .then(({ data }) => {
        const { url } = data.images.original;

        const img = document.createElement("img");
        img.src = url;
        document.body.append(img);
    })
    .catch((err) => {
        console.error(err);
    });
