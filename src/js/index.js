import {tnsSingleMobile, tnsSingleDesktop, tnsSinglePrefooter, tnsSingleCasino} from './components/tns-slider';
import {topNav} from './components/topNav';
import {galery} from './components/galery';
import {accordion} from './components/acordeon';
import {tabs} from './components/tabs';
import {modal} from './components/modal-sign-up';
import initAcc from './components/dropdown';


(()=>{
	topNav();
	tnsSinglePrefooter();
	modal();
	if (document.body.classList.contains('home')) {
		// functions here
		tnsSingleDesktop();
		tnsSingleMobile();	
		galery();
	}else if (document.body.classList.contains('bonos')) {
		// functions here
		accordion();
	}else if (document.body.classList.contains('banca')) {
		// functions here
	
		tabs();
	}else if (document.body.classList.contains('casino')) {
		// functions here
		tnsSingleCasino();
	}else if (document.body.classList.contains('poker')) {
		// functions here
	
	}else if (document.body.classList.contains('reglas-de-deportes')) {
		// functions here
		initAcc();
	}
	else if (document.body.classList.contains('caballos')) {
		// functions here
		tabs();
		modal();
	}
	
})();
