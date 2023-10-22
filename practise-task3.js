// no1.
var signal = 'green';
if (signal === 'green') {
    console.log('you can go');    
} else if (signal === 'yellow') {
    console.log('proceed with caution');
} else if (signal === 'red') {
    console.log('stop! its dangerous');
} else {
    console.log('invalid signal');
}

// no2.
var signal2 = 'green';
switch(signal) {
    case 'green':
        console.log('you can go');
        break;
    case 'yellow':
        console.log('proceed with caution');
        break;
    case 'red':
        console.log('stop! its dangerous');
        break;
    default:
        console.log('invalid signal');

}