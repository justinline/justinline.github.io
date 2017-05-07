const terminal = document.querySelector('.terminal');
const htmlStart = '<span class="highlight">guest@justinline:~$ </span>';
const inpFocus = document.querySelector('input');

function checkCommand(command) {
	if (command == 'help'){
		terminal.innerHTML += `
		<li class="line">
		<br/>
		</li>		
		<li class="line">
			<span class="title">~* TERMINAL COMMANDS *~</span>
			<br/><br/>
			<span class="highlight">justin</span> <br/>
			<small>--> Prints Personal Details</small>
			<br/><br/>
			<span class="highlight">cv</span> <br/>
			<small>--> Prints current CV to screen</small>
			<br/><br/>
			<span class="highlight">contact</span> <br/> 
			<small>--> Prints current Contact details to screen</small>
			<br/><br/>
			<span class="highlight">skills</span> <br/>
			<small>--> Prints Skills and Knowledge</small>
			<br/><br/>
			<span class="highlight">clear</span> <br/>
			<small>--> Clears Terminal</small>
			<br/><br/>
		</li>
		<li class="line">
			<br/>
		</li>
		`;
	} else if (command == 'justin'){
		terminal.innerHTML += `
		<li class="line">
		<br/>
		</li>		
		<li class="line">
			<span class="title">~* WHO IS HE? *~</span>
			<br/><br/>
			<img src="../images/portrait.jpg" alt="Justin Focus" className="src"/>			
			<br/><br/>
			<span class="highlight">Justin Focus</span> <br/>
			<small>Age: 27 | Current Occupation: Technical Designer</small>
			<br/><br/>
			<span class="highlight">Nationality</span> <br/>
			<small>British/European</small>
			<br/><br/>			
			<span class="highlight">Location</span> <br/> 
			<small>London</small>
			<br/><br/>
			<span class="highlight">Summary</span> <br/>
			<small>Currently, I am looking to move into a development focused career: to push my
self-development, fuel my desire to learn and hopefully work on projects that have
a great social impact. One thing I enjoy more than working on a project is seeing
people using whatever it is I have built.</small>
			<br/><br/>
			<span class="highlight">Employ Me?</span> <br/>
			<small><a href="mailto:iamjustinfocus@gmail.com">iamjustinfocus@gmail.com</a></small>
			<br/><br/>
		</li>
		<li class="line">
			<br/>
		</li>
		`;
	} else if (command == 'skills'){
		terminal.innerHTML += `
		<li class="line">
			<br/>
		</li>		
		<li class="line">
			<span class="title">~* SKILLS AND KNOWLEDGE *~</span>
			<br/><br/>
			<span class="highlight">Languages</span><br/>
			Python, Javascript, HTML, CSS <br/>
			<small>Frameworks: Django, DjangoREST, React, Angular, Bootstrap </small><br/><br/>
			<span class="highlight">Utilities</span><br/>
			Preprocessors (SASS), Git, Terminal, Linux, BASH<br/><br/>
			<span class="highlight">Data</span><br/>
			mySQL, postreSQL, sqlite, JSON<br/>

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
			<span class="title">~* EMPLOYMENT AND EDUCATIION *~</span>
			<br/><br/>
			<a href="../assets/justinline-cv.pdf" download>DOWNLOAD PDF HERE</a><br/><br/>
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
			<span class="title">~* CONTACT ME *~</span>
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

function init(){
	terminal.innerHTML = `
		<li class="line">JUSTINLINE | CV</li>
		<li class="line">loading environment...</li>
		<li class="line">JLN bash, version 1.0.0(1)-release (x86_64-pc-linux-gnu)</li>			
		<li class="line"><span class="warning">May not function correctly on smartphones.</span></li>
		<li class="line">type 'help' for further information</li>			
		<li class="active"><span class="highlight">guest@justinline:~$</span> <span class="write"></span><span class="blinking-cursor">_</span></li>
		`;
	return;
}

function clear(){
	terminal.innerHTML = `
		<li class="active"><span class="highlight">guest@justinline:~$</span> <span class="write"></span><span class="blinking-cursor">_</span></li>
		`;
	return;
}

function typeLetter(e) {
	// console.log(e.key);
	let active = document.querySelector('.active');
	let writeArea = document.querySelector('.write');
	// if (event.key.length === 1 && (e.key <= 'z' && e.key >= 'a') || e.key === ' ') {
	// 	inpFocus.value += e.key;
	// } else if (event.key.length === 1 && (e.key <= 'Z' && e.key >= 'A')) {
	// 	writeArea.innerHTML += String.fromCharCode(e.key.charCodeAt(0) + 32);
	if(e.key === 'Enter'){
		inpFocus.value = '';
		inpFocus.placeholder = '';
		active.innerHTML = `
		${htmlStart}${writeArea.innerText}
		`;
		active.className = 'line';
		checkCommand(writeArea.innerText);
		window.scrollTo(0,document.body.scrollHeight);
	} else {
		writeArea.innerHTML = inpFocus.value.toLowerCase();
		focusKey();
		
	}


}

function focusKey(){
	inpFocus.focus();
}

init();
window.addEventListener('keyup', typeLetter);
window.addEventListener('click', focusKey);