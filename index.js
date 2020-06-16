const Nightmare = require('nightmare');
const START = "https://drivetest.ca/";
const nightmare = new Nightmare({ 
	show: false,
	waitTimeout: 5000,
	gotoTimeout: 5000
});

console.log(START);
console.log("Checking for status...");
console.log("");
check();
pause();

async function check() {
	try {
		await nightmare
			.goto(START)
			.wait('.overview-intro')
			.evaluate(() => {
				let ret = 'No closure messages detected';

				$('.overview-intro p').each((j,p) => {
					if ($(p).text().includes('DriveTest locations are closed')) {
						ret = $(p).text();
		  				return;
	  			    }
				});

		        return ret.replace(/\n+/g,'\n').trim();
		    })
		    .end()
		    .then(res => {
		    	console.log(res);
		    });
	} catch (e) {
		console.log(`Error - ${e}`);
	}
}

async function pause() {
	const readline = require('readline');
	const rL = readline.createInterface({input: process.stdin,output: process.stdout});
	await new Promise((res,rej) => rL.question('',a => res(rL.close())));
}