"use strict"

const list = document.createElement('ul');
list.classList.add('list');


const fillTheList = () => {
    const userString = prompt('Введите что то');

    if(userString === null || userString === 'exit') {
        return list;
    }

    if(userString === 'clear') {
        return list.innerHTML = '';
    }

    if(userString === 'del') {
        return list.lastChild.remove();
    }
    
    if (userString.length > 0) {
        const item = document.createElement('li');
        item.append(userString);
        list.append(item);
        document.body.insertAdjacentElement('beforebegin', list);
    }
    
    return fillTheList();
}

fillTheList();




