console.log('Starting app');

setTimeout(() => {
	console.log('Inside of callback');
}, 2000);

setTimeout(() => {
	console.log('Second timeout works.');
}, 0);

console.log('Finishing up');
//order of execution
//console without setTimeout
//timeout 0
//timeout 2000