// Zoek de range slider 

const slider = document.querySelector('.slider');

// Zoek de tekst waar de waarde in geplaats moet worden. 

const tekst = document.querySelector('.bold');

// zoek de tekst balloon 

const balloon = document.querySelector('.number')

// zoek de width van de slider 

const width = document.querySelector('.storage-bar').clientWidth; 

// verander de tekst als de slider bewogen wordt 

slider.addEventListener('input',  () => {
    // Zet de waarde in de tekst
    tekst.innerHTML = `${slider.value} GB `; 
    // Zet de waarde in de balloon 
    balloon.innerHTML = `${slider.value}`;
    // aanpassen rode balk 
    const width_bar = (slider.value * width) / 1000;
    document.querySelector('.storageBarFill').style.width = width_bar + 'px';
})

// bereken de juiste width voor de lengte en verandert het als het scherm verandert

/*
window.addEventListener('resize', () => {
    const width_bar = (slider.value * width) / 1000;
    document.querySelector('.storageBarFill').style.width = width_bar + 'px';
}); 
*/ 













