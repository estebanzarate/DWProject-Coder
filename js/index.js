document.addEventListener('click', e => {
	if (e.target.matches('.gallery-img')) {
		const galleryImgModal = document.querySelector('.gallery-img-modal');
		galleryImgModal.innerHTML += `
			<div class='img-modal-container'>
				<img src='${ String(e.target.src).replace('https://estebanzarate.github.io/DWProject-Coder', '..') }'  alt='${e.target.alt}'>
			</div>
		`;
		galleryImgModal.classList.add('img-modal-visible');
	}
	if (e.target.matches('.gallery-img-modal')) {
		document.querySelector('.img-modal-container').remove();
		document.querySelector('.gallery-img-modal').classList.remove('img-modal-visible');
	}
});