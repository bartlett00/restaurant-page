export default function menu() {
    console.log('menu is exported to index');
    const content = document.querySelector('#content');
    const mainDiv = document.createElement('div');
    mainDiv.classList.toggle('main-container');
    const titleText = document.createElement('div');
    titleText.classList.toggle('title');
    const menuContainer = document.createElement('div');

    const menuItems = { };

    const addMenuItem = (name, price) => {
        menuItems[name] = {
            name: document.createElement('div'),
            price: document.createElement('div')
        }
        console.log(menuItems);
        
        menuItems[name].name.textContent = name;
        menuItems[name].price.textContent = price;
    }

    titleText.textContent = 'Our Menu';

    addMenuItem(
        'Gotham Latte',
        '$3'
    );

    addMenuItem(
        'Dark Night Cold Brew',
        '$2.50'
    );

    addMenuItem(
        `Fred's Signature Croissant`,
        '$2.95'
    );

    const makeMenuCard = (item) => {
        const values = Object.values(item);
        const card = document.createElement('div');
        card.classList.toggle('menu-card');
        values.forEach((element) => card.appendChild(element));
        menuContainer.appendChild(card);
    } 

    mainDiv.appendChild(titleText);
    makeMenuCard(menuItems['Gotham Latte']);
    makeMenuCard(menuItems['Dark Night Cold Brew']);
    makeMenuCard(menuItems[`Fred's Signature Croissant`]);
    mainDiv.appendChild(menuContainer);

    content.appendChild(mainDiv);
}