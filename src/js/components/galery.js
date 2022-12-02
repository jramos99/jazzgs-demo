export const galery = ()=>{
	const 
	d = document,
	video = d.getElementById('video-galery'),
	galeryItem = d.querySelectorAll('.gallery-image');
	

	for (let i = 0; i < galeryItem.length; i++) {
		galeryItem[i].addEventListener('click', e =>{
			const newVideo = galeryItem[i].children[0].children[0].getAttribute('value');
			e.preventDefault();
			video.setAttribute('src', newVideo)
		})
	}
	

}
