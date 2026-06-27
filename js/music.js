/* ============================================
   PROJECT NEBULA
   music.js
============================================ */

class MusicManager {

    constructor() {

        this.intro = new Audio("assets/music/intro.mp3");
        this.memories = new Audio("assets/music/memories.mp3");

        this.intro.loop = true;
        this.memories.loop = true;

        this.intro.volume = 0;
        this.memories.volume = 0;

        this.fadeInterval = null;

    }

    playIntro() {

        this.intro.currentTime = 0;
        this.intro.play();

        this.fadeIn(this.intro, 1);

    }

    playMemories() {

        this.memories.currentTime = 0;
        this.memories.play();

        this.fadeIn(this.memories, 1);

    }

    crossFadeToMemories(duration = 4000) {

        this.memories.volume = 0;

        this.memories.play();

        const steps = 40;

        const stepTime = duration / steps;

        let current = 0;

        clearInterval(this.fadeInterval);

        this.fadeInterval = setInterval(() => {

            current++;

            this.intro.volume =
                Math.max(0, 1 - current / steps);

            this.memories.volume =
                Math.min(1, current / steps);

            if (current >= steps) {

                clearInterval(this.fadeInterval);

                this.intro.pause();

                this.intro.currentTime = 0;

                this.memories.volume = 1;

            }

        }, stepTime);

    }

    fadeOutAll(duration = 3000) {

        const steps = 30;

        const stepTime = duration / steps;

        let current = 0;

        clearInterval(this.fadeInterval);

        this.fadeInterval = setInterval(() => {

            current++;

            const volume = 1 - current / steps;

            this.intro.volume =
                Math.max(0, volume);

            this.memories.volume =
                Math.max(0, volume);

            if (current >= steps) {

                clearInterval(this.fadeInterval);

                this.intro.pause();
                this.memories.pause();

            }

        }, stepTime);

    }

    fadeIn(audio, targetVolume = 1, duration = 2500) {

        audio.volume = 0;

        const steps = 25;

        const stepTime = duration / steps;

        let current = 0;

        const interval = setInterval(() => {

            current++;

            audio.volume =
                Math.min(targetVolume, current / steps);

            if (current >= steps) {

                clearInterval(interval);

            }

        }, stepTime);

    }

    pause() {

        this.intro.pause();

        this.memories.pause();

    }

}

const music = new MusicManager();