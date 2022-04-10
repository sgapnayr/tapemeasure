
const rulerDesc = document.querySelector('#ruler-desc');

function getRulerSize() {
    rulerDesc.textContent = "This screen width is " + window.innerWidth + " pixels";
}
getRulerSize();
window.onresize = getRulerSize;