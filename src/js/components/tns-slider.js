const tnsSingleMobile = ()=> {
	const slider = tns({ 
		container           : '#tnsSingleMobile',
		items               : 1, 
		slideBy             : 1,
		speed               : 1000,
		mode                : 'gallery',
		autoplay			: true,
		autoplayButton      : "#customize-toggle1",
		mouseDrag           : true,
		controlsText: [ 
			'<i class="fas fa-chevron-left"></i>',
			'<i class="fas fa-chevron-right"></i>'
			]
		}); 
};

const tnsSingleDesktop = ()=> {
	const slider = tns({ 
		container           : '#tnsSingleDesktop',
		items               : 1, 
		slideBy             : 1,
		speed               : 1000,
		mode                : 'gallery',
		autoplay			: true,
		autoplayButton      : "#customize-toggle2",
		mouseDrag           : true,
		controlsText: [ 
			'<i class="fas fa-chevron-left"></i>',
			'<i class="fas fa-chevron-right"></i>'
			]
		}); 
};

const tnsSinglePrefooter = ()=> {
	const slider = tns({ 
		container           : '#tnsSinglePrefooter',
		items               : 1,
		slideBy             : 1,
		speed               : 300,
		autoplay			: true,
		mode                : 'gallery',
		mouseDrag           : true,
		controls			: false,
		nav					:false,
		autoplayButton      : "#customize-toggle3",
		responsive: {
            320: {
                items: 2,
            },
            480: {
                items: 4,
            },
            640: {
                items: 4,
            },
            800: {
                items: 4,
            },
            960: {
                items: 4,
            },
            1120: {
                items: 4,
            },
            1280: {
                items: 4,
            },
        }
		}); 
};

const tnsSingleCasino = ()=> {
	const slider = tns({ 
		container           : '#tnsSingleCasino',
		items               : 1, 
		slideBy             : 1,
		speed               : 100,
		mode                : 'gallery',
		autoplay			: true,
		mouseDrag           : true,
		autoplayButton      : "#customize-toggle4",
		nav					: false,
		controlsText: [ 
			'<i class="fas fa-chevron-left"></i>',
			'<i class="fas fa-chevron-right"></i>'
			],
		responsive: {
				320: {
					items: 1,
				},
				480: {
					items: 3,
				},
				640: {
					items: 3,
				},
				800: {
					items: 4,
				},
				960: {
					items: 4,
				},
				1120: {
					items: 5,
				},
				1280: {
					items: 5,
				},
			}
		}); 
};

export{
	tnsSingleMobile,
	tnsSingleDesktop,
	tnsSinglePrefooter,
	tnsSingleCasino
}
