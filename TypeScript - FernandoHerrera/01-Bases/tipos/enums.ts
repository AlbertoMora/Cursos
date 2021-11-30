(() => {
    //Objetivo de las enums es tener un rango de valores prefijados
    enum AudioLevel {
        min = 1,
        medium = 5,
        max = 10,
    }

    let currentAudio: AudioLevel = AudioLevel.max;

    console.log(currentAudio);
    console.log(AudioLevel);
})();
