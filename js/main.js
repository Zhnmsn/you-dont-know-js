"use strict"


const advert = document.querySelector('.ads');
advert.remove();

const items = document.querySelectorAll('.item');
items[3].after(items[0]);

const itemThree = document.querySelector('.item_three .props__list');
const itemFive = document.querySelector('.item_five .props__list');
const cloneFive = itemFive.cloneNode(true);
const cloneThree = itemThree.cloneNode(true);
itemThree.replaceWith(cloneFive);
itemFive.replaceWith(cloneThree)

const itemsTwo = document.querySelector('.item_two .props__list');
const itemSix= document.querySelectorAll('.item_six .props__item_two');
itemsTwo.after(itemSix[0], itemSix[1]);

const itemTwo = document.querySelectorAll(' .item_two .props__item')
const itemFour = document.querySelectorAll(' .item_four .props__item')
itemFour[2].after(itemTwo[3]);

