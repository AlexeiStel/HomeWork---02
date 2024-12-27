import changeVolume from "./changeVolume";
export default function playAudio(className, bgimage, pauseIcon) {
    document.querySelector(className).addEventListener("click", function (ev) {
        var target = ev.target;
        ev.stopPropagation();
        stopAudio();
        document.body.addEventListener("click", function (e) {
            var ev_target = e.target;
            if (!ev_target.classList.contains("main") && !ev_target.classList.contains("volume")) {
                stopAudio();
            }
        });
        if (!target.classList.contains("sound")) {
            var audio = document.getElementById(target.classList[0]);
            audio.play();
            changeVolume(className);
            if (target.tagName === "IMG") {
                var img = target;
                img.src = pauseIcon;
                img.classList.add("sound");
                img.closest(".main").classList.add("sound");
            }
            else {
                var svg = target.querySelector(".svg");
                svg.src = pauseIcon;
                svg.classList.add("sound");
                target.classList.add("sound");
            }
        }
        else {
            stopAudio();
            if (target.tagName === "IMG" && target.classList.contains("sound")) {
                var img = target;
                img.src = target.id;
                img.classList.remove("sound");
                img.closest(".main").classList.remove("sound");
            }
            else {
                var svg = target.querySelector(".svg");
                svg.src = svg.id;
                target.classList.remove("sound");
                svg.classList.remove("sound");
            }
        }
        document.body.style.backgroundImage = "url(".concat(bgimage, ")");
    });
}
function stopAudio() {
    var audios = document.querySelectorAll("audio");
    audios.forEach(function (audio) {
        audio.pause();
        audio.currentTime = 0;
    });
    document.querySelectorAll(".svg").forEach(function (svg) {
        var starget = svg;
        starget.src = svg.id;
    });
}
