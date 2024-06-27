export default function home() {
    console.log('home is exported to index');
    let content = document.getElementById('content');
    let mainDiv = document.createElement('div');
    mainDiv.classList.toggle('main-container');
    let mainText = document.createElement('div');
    mainText.classList.toggle('title');
    let subText = document.createElement('div');
    subText.classList.toggle('sub-text');
    let caption = document.createElement('div');
    caption.classList.toggle('caption');
   
    mainText.textContent = 'Dark Night Cafe';
    subText.textContent = `Gotham's finest 24-hour cafe`;
    caption.textContent = 'for the early-birds or night-owls(or bats) alike!';
    
    const titleBox = document.createElement('div');
    titleBox.classList.toggle('title-box');
        
    titleBox.appendChild(mainText);
    titleBox.appendChild(subText);
    titleBox.appendChild(caption);
    mainDiv.appendChild(titleBox);

    const hoursDiv = document.createElement('div');
    hoursDiv.classList.toggle('home-box');
    const hoursTitle = document.createElement('div');
    hoursTitle.classList.toggle('subtitle');
    hoursTitle.textContent = 'Hours';
    const hoursContent = document.createElement('div');
    hoursContent.classList.toggle('sub-text');
    hoursContent.textContent = 'Always Open! (Bryce is out during the night)';
    
    hoursDiv.appendChild(hoursTitle);
    hoursDiv.appendChild(hoursContent);
    mainDiv.appendChild(hoursDiv);

    const locationDiv = document.createElement('div');
    locationDiv.classList.toggle('home-box');
    const locationTitle = document.createElement('div');
    locationTitle.classList.toggle('subtitle');
    locationTitle.textContent = 'Address';
    const locationText = document.createElement('div');
    locationText.classList.toggle('sub-text');
    locationText.textContent = '12th Street, Gotham';

    locationDiv.appendChild(locationTitle);
    locationDiv.appendChild(locationText);
    mainDiv.appendChild(locationDiv);



    content.appendChild(mainDiv);
}

