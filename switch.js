const color = 'red';
if (color === 'green') {
    console.log('my green friend');
} else if (color === 'yellow') {
    console.log('yellow friend');
} else if (color === 'red') {
    console.log('my red friend');
} else if (color === 'white') {
    console.log('my white friend');
} else {console.log('black friend');
}

// switch holo if else er faster version
switch(color) {
    case 'green':
        console.log('my green friend');
        break;
    case 'yellow':
        console.log('my yellow friend');
        break;
    case 'blue':
        console.log('my blue friend');
        break;
    case 'red':
        console.log('my red friend');
        break;
    case 'white':
        console.log('my white friend');
        break;
    default:
        console.log('black friend');
}