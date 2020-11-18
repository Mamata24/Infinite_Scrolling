window.addEventListener('scroll', function () {
    loadImages(25)
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        loadImages(25);
    }
})
let count = 0;
let root = document.getElementById("root");
const throttle = (fn, delay) => {
    let last = 0;
    return (...args) => {
        const now = new Date().getTime();
        if (now - last > delay) {
            last = now;
            return fn(...args);
        }
    };
};

async function loadImages(num) {
    for (let i = 0; i < num; i++) {
        count += 1;
        let div = document.createElement("div");
        div.classList.add("box");
        div.textContent = `Masai Student ${count}`;
        root.append(div);
    }
}
