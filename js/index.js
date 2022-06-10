document.addEventListener('click', e => {
	if (e.target.matches('.gallery-img')) {
		const galleryImgModal = document.querySelector('.gallery-modal');
		galleryImgModal.innerHTML += `
			<div class='gallery-modal-container'>
				<img class='gallery-modal-img' src='${ String(e.target.src).replace('https://estebanzarate.github.io/DWProject-Coder', '..')}'  alt='${e.target.alt}'>
			</div>
		`;
		galleryImgModal.classList.add('img-modal-visible');
		const galleryModalContainer = document.querySelector('.gallery-modal-container');
		const galleryModalImg = document.querySelector('.gallery-modal-img');
		if (galleryModalImg.clientHeight > galleryModalContainer.clientHeight) {
			galleryModalImg.style.height = '100%';
			galleryModalImg.style.width = 'unset';
		}
	}
	if (e.target.matches(['.gallery-modal-container', '.gallery-modal'])) {
		document.querySelector('.gallery-modal-container').remove();
		document.querySelector('.gallery-modal').classList.remove('img-modal-visible');
	}
});