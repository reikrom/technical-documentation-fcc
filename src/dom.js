const rootElement = document.documentElement;

function scrollToTop() {
	rootElement.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}
const topBtn = document.querySelector(".back-to-top");

window.onscroll = function hideTopButton() {
	if (rootElement.scrollTop > 360) {
		topBtn.classList.remove("back-to-top--hidden");
	} else {
		topBtn.classList.add("back-to-top--hidden");
	}
};

topBtn.addEventListener("click", scrollToTop);
