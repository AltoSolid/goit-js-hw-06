const CATEGORY_TEXT = 'Category: ';
const ELEMENTS_TEXT = 'Elements: '; 

const ul = document.getElementById("categories");
const catogoriesAmount = ul.querySelectorAll("li.item > h2").length;

const animalsTitle = document.querySelector("h2.animal-heading").textContent;
const productsTitle = document.querySelector("h2.product-heading").textContent;
const technologiesTitle = document.querySelector("h2.technology-heading").textContent;

const animalsItemsUl = document.querySelector("h2.animal-heading + ul");
const animalsItemsLength = animalsItemsUl.querySelectorAll("li").length;
const productsItemsUl = document.querySelector("h2.product-heading + ul");
const productsItemsLength = productsItemsUl.querySelectorAll("li").length;
const techItemsUl = document.querySelector("h2.technology-heading + ul");
const techItemsLength = techItemsUl.querySelectorAll("li").length;

const finaleTemplate = 
`
    Number of categories: ${catogoriesAmount}

    ${CATEGORY_TEXT} ${animalsTitle}
    ${ELEMENTS_TEXT} ${animalsItemsLength}

    ${CATEGORY_TEXT} ${productsTitle}
    ${ELEMENTS_TEXT} ${productsItemsLength}

    ${CATEGORY_TEXT} ${technologiesTitle}
    ${ELEMENTS_TEXT} ${techItemsLength}
`;

console.log(finaleTemplate);