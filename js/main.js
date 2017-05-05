const terminal = document.querySelector('.terminal');
const htmlStart = '<span class="highlight">guest@justinline:~$ </span>';


function checkCommand(command) {
	if (command == 'help'){
		terminal.innerHTML += `
		<li class="line">
		<br/>
		</li>		
		<li class="line">
			<span class="title">~* TERMINAL HELP *~</span>
			<br/><br/>
			<span class="highlight">cv</span> <br/>
			<small>--> [Prints current CV to screen]</small>
			<br/><br/>
			<span class="highlight">contact</span> <br/> 
			<small>--> [Prints current Contact details to screen]</small>
			<br/><br/>
			<span class="highlight">clear</span> <br/>
			<small>--> Clears Terminal</small>
			<br/><br/>
		</li>
		<li class="line">
			<br/>
		</li>
		`;
	} else if (command == 'cv'){
		terminal.innerHTML += `
		<li class="line">
			<br/>
		</li>		
		<li class="line">
			<span class="title">~* JUSTIN FOCUS'S TERMINAL CV *~</span>:
			<br/><br/>
			<span class="highlight">Education</span><br/>
			University of the West of England <br/>
			<small>--> BA (Hons) [Fashion & Communication] </small><br/><br/>
			King Edwards VI College, Stourbridge <br/>
			<small>--> A-Levels [Human Biology, Chemistry, Computing, Psychology] </small>
			<br/><br/>
			<span class="highlight">Employment</span><br/>
			StudioXAG [Senior Technical Designer]<br/>
			<small>--> CAD Drawings and Problem solving for spatial and retail design and manufacture. Managing Junior Designers. IT Support.</small><br/><br/>
			Elemental Design [Technical Designer]<br/><br/>
			TRO for Google [Chromebook Specialist]<br/>
			<small>--> Educating Retailers and consumers about the benefits of ChromeOS and Android.</small><br/><br/>
		</li>
		<li class="line">
			<br/>
		</li>
		`;
	} else if (command == 'contact'){
		terminal.innerHTML += `
		<li class="line">
			<br/>
		</li>		
		<li class="line">
			<span class="title">~* CONTACT ME *~</span>:
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
	} else if (command == 'clear'){
		clear();
		return;
	}
	terminal.innerHTML += `
		<li class="active">${htmlStart}<span class="write"></span><span class="blinking-cursor">_</span></li>`;

}

function clear(){
	terminal.innerHTML = `
		<li class="line">JUSTINLINE | CV</li>
		<li class="line">loading environment...</li>
		<li class="line">JLN bash, version 1.0.0(1)-release (x86_64-pc-linux-gnu)</li>			
		<li class="line">type 'help' for further information</li>			
		<li class="active"><span class="highlight">guest@justinline:~$</span> <span class="write"></span><span class="blinking-cursor">_</span></li>
		`;
	return;
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
		
	} else {
		return 1;
	}


}



window.addEventListener('keydown', typeLetter);
