window.addEventListener('load', () => {
	const sounds = document.querySelectorAll('.sound');
	const pads = document.querySelectorAll('.pads div');
	const visual = document.querySelector('.visual');
	const colors = [
		"#60d394",
		"#d36060",
		"#c060d3",
		"#d3d160",
		"#6860d3",
		"#60d394"
	]

console.log(sounds);

	//lets get going with the sound
	pads.forEach( (pad, index) =>{
		pad.addEventListener('click', function(){
			sounds[index].currentTime= 0;
			sounds[index].play();
			createBubbles(index);
		});
	});

// create a fucntion that make  bubbles

	const createBubbles = (index) =>{
		const bubble= document.createElement("div");
		visual.appendChild(bubble);
		bubble.style.backgroundColor = colors[index];
		bubble.style.animation = "jump 1s ease";
		bubble.addEventListener('animationend', function(){
			visual.removeChild(this);
		});
	};
});

