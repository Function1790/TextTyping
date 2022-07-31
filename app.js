const target = document.getElementById("change");
const text = "티스토리 안녕!";

target.innerText = "";

function sleep(t) {
    return new Promise(resolve => setTimeout(resolve, t));
}

(async function () {
    while (true) {
        for (var i = 0; i < text.length; i++) {
            target.innerText = text.slice(0, i + 1);
            await sleep(200);
        }
        await sleep(1000);
        for (var i = text.length - 1; i >= 0; i--) {
            target.innerText = text.slice(0, i);
            await sleep(100);
        }
        await sleep(1000);
    }
})();
