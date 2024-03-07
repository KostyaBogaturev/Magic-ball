document.addEventListener("DOMContentLoaded", () => {
    const answers = [
        "Yes, definitely",
        "No, certainly not",
        "Ask again later",
        "It is uncertain",
        "Yes",
        "No",
        "It appears so",
        "The stars say no"
    ];
    const animationTimeMs = 1000;
    const animationClass = "animated";
    const magicBallId = "magicBall"

    const animate = () => {

        const magicBall = document.getElementById(magicBallId);

        magicBall.classList.add(animationClass);

        setTimeout(() => { magicBall.classList.remove(animationClass); }, animationTimeMs);
    }

    const setAnswerText = (text) => {
        document.getElementById("answer").innerText = text;
    }


    const askMagicBall = () => {
        setAnswerText("");

        const answer = answers[Math.floor(Math.random() * answers.length)];
        const magicBall = document.getElementById(magicBallId);
        const answerWindow = document.getElementById("answerWindow");
        const eightClass = "ball-textbox-eight";
        const triangleClass = "ball-textbox-with-answer";

        answerWindow.classList.remove(triangleClass);
        answerWindow.classList.add(eightClass);

        magicBall.classList.add(animationClass);

        setTimeout(() => {
            magicBall.classList.remove(animationClass);
            answerWindow.classList.remove(eightClass);
            answerWindow.classList.add(triangleClass);
        }, animationTimeMs);

        setTimeout(()=>{
            setAnswerText(answer)
        }, animationTimeMs + 100)
    }

    const magicBallDiv = document.getElementById(magicBallId);
    magicBallDiv.addEventListener('click', askMagicBall);
});
