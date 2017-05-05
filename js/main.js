const terminal = document.querySelector('.terminal');
const htmlStart = '<span class="highlight">guest@justinline:~$ </span>';


function checkCommand(command) {
	if (command == 'help'){
		terminal.innerHTML += `
		<li class="line">
			<hr>
		</li>		
		<li class="line">
			~* TERMINAL HELP *~
			<br/><br/>
			<span class="highlight">cv</span> [Prints current CV to screen]
			<br/><br/>
			<span class="highlight">contact</span> [Prints current Contact details to screen]
		</li>
		<li class="line">
			<br/>
		</li>
		`;
	} else if (command == 'cv'){
		terminal.innerHTML += `
		<li class="line">
			<hr>
		</li>		
		<li class="line">
			<span class="highlight">~* JUSTIN FOCUS'S TERMINAL CV *~</span>:
			<br/><br/>
			<span class="highlight">Education</span><br/>
			University of the West of England [Fashion & Communication] BA (Hons)<br/><br/>
			King Edwards VI College, Stourbridge [Human Biology, Chemistry, Computing, Psychology] A-Levels
			<br/><br/>
			<span class="highlight">Employment</span><br/>
			StudioXAG [Senior Technical Designer]<br/><br/>
			Elemental Design [Technical Designer]<br/><br/>
			TRO for Google [Chromebook Specialist]<br/><br/>
		</li>
		<li class="line">
			<br/>
		</li>
		`;
	} else if (command == 'contact'){
		terminal.innerHTML += `
		<li class="line">
			<hr>
		</li>		
		<li class="line">
			<span class="highlight">~* CONTACT ME *~</span>:
			<br/><br/>
			<span class="highlight">Email:</span><br/>
			<a href="mailto:iamjustinfocus@gmail.com">iamjustinfocus@gmail.com</a>
			<br/><br/>
			<span class="highlight">Phone:</span><br/>
			(+44) 7479338238
		</li>
		<li class="line">
			<br/>
		</li>
		`;
	}
}


function typeLetter(e) {
	let active = document.querySelector('.active');
	let writeArea = document.querySelector('.write');
	if (event.key.length === 1 && (e.key <= 'z' && e.key >= 'a') || e.key === ' ') {
		writeArea.innerHTML += e.key;
	} else if (event.key.length === 1 && (e.key <= 'Z' && e.key >= 'A')) {
		writeArea.innerHTML += String.fromCharCode(e.key.charCodeAt(0) + 32);
	} else if(e.key === 'Enter'){
		active.innerHTML = `
		${htmlStart}${writeArea.innerText}
		`;
		active.className = 'line';
		checkCommand(writeArea.innerText);
		terminal.innerHTML += `
		<li class="active">${htmlStart}<span class="write"></span><span class="blinking-cursor">_</span></li>`;

	} else {
		return 1;
	}


}



window.addEventListener('keydown', typeLetter);
