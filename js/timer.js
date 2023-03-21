import { state } from "./state.js";

const minutesElem = document.querySelector('.time__minutes');
const secondsElem = document.querySelector('.time__seconds');

const showTime = (seconds) => {
minutesElem.textContent = Math.floor(seconds / 60);
secondsElem.textContent = seconds % 60;
}

export const startTimer = () => {
    state.timeLeft -= 1;

    //отоборазить на странице
    showTime(state.timeLeft);

    if (state.timeLeft > 0) {
        setTimeout(startTimer, 1000);
    }

    if (state.timeLeft <= 0) {
        //сигнализировать что время вышло
    }
}