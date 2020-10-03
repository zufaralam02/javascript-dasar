var item = prompt('input a food or drink \n exp : water, milk, liquor, soft drink');

switch (item) {
    case 'water':
    case 'milk':
        alert('is healthy');
        break;
    case 'liquor':
    case 'soft drink':
        alert('is not healthy');
        break;
    default:
        alert('not listed in the list');
        break;
}