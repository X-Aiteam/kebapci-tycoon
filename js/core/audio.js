const AudioManager = {
    sounds: {
        click: new Audio('assets/click.mp3'),
        bgm: new Audio('assets/bgm.mp3')
    },
    play(id) {
        if(this.sounds[id]) {
            this.sounds[id].currentTime = 0;
            this.sounds[id].play().catch(e => console.log("Ses çalınamadı (etkileşim gerekli)."));
        }
    }
};
