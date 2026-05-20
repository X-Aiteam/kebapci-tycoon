const GameEngine = {
    isRunning: false,
    lastTime: 0,
    
    init() {
        requestAnimationFrame(this.update.bind(this));
    },

    update(timestamp) {
        if(!this.isRunning) return;
        let deltaTime = timestamp - this.lastTime;
        this.lastTime = timestamp;

        // Oyunun fizik ve mantık hesaplamaları burada yapılır
        Game.logic(deltaTime);
        Game.render();

        requestAnimationFrame(this.update.bind(this));
    }
};
