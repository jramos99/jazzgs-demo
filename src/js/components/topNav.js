
export const topNav = () => {
	// Aqui definimos las variables
	const 
	d = document,
	headerBtn = d.querySelector('.hamburger'),
	menu = d.querySelector('.top-nav__menu');

	// aqui creamos la funcion que ejecuta el toogle del menu
	headerBtn.addEventListener('click', e =>{
		e.preventDefault();
		headerBtn.classList.toggle('is-active'),
		menu.classList.toggle('is-active');
	});
}
	
	
