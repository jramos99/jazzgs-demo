export function modal (){
	const d = document,
	open = d.querySelectorAll('.btn-modal'),
	close = d.getElementById('close'),
	modal = d.getElementById('modal-container');

	for (let i = 0; i < open.length; i++) {
		open[i].addEventListener('click',()=>{
			modal.classList.add('active');
		});
	}

	close.addEventListener('click', ()=>{
		modal.classList.remove('active');
	})
}
