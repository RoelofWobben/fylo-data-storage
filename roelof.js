// Zoek de range slider 

const slider = document.querySelector('.slider');

// Zoek de tekst waar de waarde in geplaats moet worden. 

const tekst = document.querySelector('.bold');

// zoek de tekst balloon 

const balloon = document.querySelector('.number')

// zoek de width van de slider 

const width = document.querySelector('.storage-bar').clientWidth; 

// zoek de bar 

const bar = document.querySelector('.storageBarFill')

// verander de tekst als de slider bewogen wordt 

slider.addEventListener('input',  () => {
    // Zet de waarde in de tekst
    tekst.innerHTML = `${slider.value} GB `; 
    // Zet de waarde in de balloon 
    balloon.innerHTML = `${(1000 - slider.value).toFixed(1)}`;
    calculateBar();
}); 


const calculateBar = () => {
    const width_bar = (slider.value * width) / 1000;
    bar.style.width = (width_bar / width) * 100 + "%";
  };

// bereken de juiste width voor de lengte en verandert het als het scherm verandert


window.addEventListener('resize', () => {
   calculateBar(); 
}); 


//set the right value on the beginning 

calculateBar();
bar.classList.add("storageBarFill-animation");
setTimeout(() => bar.classList.remove("storageBarFill-animation"), 1000)


 
  










