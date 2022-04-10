
const rulerDesc = document.querySelector('#ruler-desc');

function reportWindowSize() {
    rulerDesc.textContent = "The screen width is " + window.innerWidth + " pixels"
}
reportWindowSize();
window.onresize = reportWindowSize;

