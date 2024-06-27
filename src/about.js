export default function about() {
    console.log('about is exported to index');
    const content = document.querySelector('#content');
    const mainDiv = document.createElement('div');
    mainDiv.classList.toggle('main-container');
    const titleText = document.createElement('div');
    titleText.classList.toggle('title');
    const aboutUsInfo = document.createElement('div');
    aboutUsInfo.classList.toggle('about-us-info');

    const contacts = document.createElement('div');
    contacts.classList.toggle('contacts')
    const c1Container = document.createElement('div');
    c1Container.classList.toggle('contact-card');
    const c2Container = document.createElement('div');
    c2Container.classList.toggle('contact-card');

    let contactOne = {
        name: document.createElement('div'),
        title: document.createElement('div'),
        email: document.createElement('div')
    };

    let contactTwo = {
        name: document.createElement('div'),
        title: document.createElement('div'),
        email: document.createElement('div')
    };

    titleText.textContent = 'About Us';
    aboutUsInfo.textContent = 'We are a duo from Gotham who set out to share our love for coffee with the rest of the city. We source our ingredients from only the best local businesses!';
    mainDiv.appendChild(titleText);
    mainDiv.appendChild(aboutUsInfo);

    contactOne.name.textContent = 'Bryce Laine'
    contactOne.title.textContent = 'Co-owner'
    contactOne.email.textContent = 'b-man@laine-corp.com'

    contactTwo.name.textContent = 'Fred Butler';
    contactTwo.title.textContent = 'Co-owner';
    contactTwo.email.textContent = 'his-butler@laine-corp.com';

    const generateContact = (contact, container) => {
        let values = Object.values(contact);
        values.forEach((element) => container.appendChild(element));
    }

    generateContact(contactOne, c1Container);
    generateContact(contactTwo, c2Container);
    contacts.appendChild(c1Container);
    contacts.appendChild(c2Container);
    mainDiv.appendChild(contacts);
    content.appendChild(mainDiv);
}