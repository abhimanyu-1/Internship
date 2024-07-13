
var s1 = [];
function love1() {
    
    let dro = document.getElementById('cat-drop');
    let im = document.getElementById('cat-like-icon');
    let heartSrc = '../ajax/heart.png';
    let likeSrc = '../ajax/like.png';

    if (im.src.includes('heart')) {

        if (!s1.includes(dro.value)) {
            im.src = likeSrc;
            s1.push(dro.value);
        }
    } else {
        im.src = heartSrc;
        s1.pop();
    }
}

let dro1 = document.getElementById('cat-drop');
dro1.addEventListener('change', love1); 





function getRandomUrl() {
    let urls = [
        'https://api.thedogapi.com/v1/images/search',
        'https://api.thecatapi.com/v1/images/search'
    ];
    return urls[Math.floor(Math.random() * urls.length)];
}

function slide() {
    let rand = getRandomUrl();

    var xhr = new XMLHttpRequest();
    xhr.open("GET", rand);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let data = JSON.parse(xhr.responseText);
            let slide = document.getElementById('slide-show');
            slide.innerHTML = `<img src="${data[0].url}" alt="Animal Image">`;
        }
    };
    xhr.send();
}

slide();
setInterval(slide, 5000);




function getDogImage(imageId, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.thedogapi.com/v1/images/${imageId}`);
    xhr.onreadystatechange = function() {
        if (xhr.status == 200 && xhr.readyState == 4) {
            let imageData = JSON.parse(xhr.responseText);
            callback(imageData.url);
        }
    }
    xhr.send();
}

function getDogBreeds() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.thedogapi.com/v1/breeds");
    xhr.onreadystatechange = function() {
        if (xhr.status == 200 && xhr.readyState == 4) {
            let data = JSON.parse(xhr.responseText);
            let drp = document.getElementById('dog-drop');
            //drp.innerHTML = ""; 
            for (let i = 0; i < data.length; i++) {
                let breed = data[i];
                let option = document.createElement('option');
                option.value = breed.id;
                option.textContent = breed.name;
                drp.appendChild(option);
            }
            drp.onchange = function(){
                console.log(drp.value)
                let key = data[drp.value-1]
                let ref = key.reference_image_id;
                getDogImage(ref, function(imageUrl) {
                    let dogImage = document.getElementById('dog-image');
                    dogImage.src = imageUrl;
                })
                document.getElementById('doide').innerHTML = `<h3>${key.name.toUpperCase()}</h3><p>${key.temperament}</p>`;
            }
        }
    }
    xhr.send();
}


// Function to fetch a random dog image and breed description
function getDogImageAndBreed() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.thedogapi.com/v1/images/search");
    xhr.onreadystatechange = function() {
        if (xhr.status == 200 && xhr.readyState == 4) {
            let data = JSON.parse(xhr.responseText);
            let imageUrl = data[0].url;
            document.getElementById('dog-image').src = imageUrl;

            
            var xhrBreed = new XMLHttpRequest();
            xhrBreed.open("GET", "https://api.thecatapi.com/v1/breeds");
            xhrBreed.onreadystatechange = function() {
                if (xhrBreed.status == 200 && xhrBreed.readyState == 4) {
                    let breeds = JSON.parse(xhrBreed.responseText);
                    const randomBreed = breeds[Math.floor(Math.random() * breeds.length)];
                    document.getElementById('doide').innerHTML = `<h3>${randomBreed.name.toUpperCase()}</h3><p>${randomBreed.temperament}</p>`;
                }
            };
            xhrBreed.send();
        }
    };
    xhr.send();
}

function searchDog() {
    let dogName = document.getElementById('d-search').value.toLowerCase();
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.thedogapi.com/v1/breeds");
    xhr.onreadystatechange = function() {
        if (xhr.status == 200 && xhr.readyState == 4) {

            let breeds = JSON.parse(xhr.responseText);
            let breed = breeds.find(b => b.name.toLowerCase() === dogName);
            if (breed) {
                let dogDisplay = document.getElementById('doide');
                dogDisplay.innerHTML = `<h3>${breed.name.toUpperCase()}</h3><p>${breed.temperament}</p>`;

                if (breed.reference_image_id) {
                    getDogImage(breed.reference_image_id, function(imageUrl) {
                        let dogImage = document.getElementById('dog-image');
                        dogImage.src = imageUrl;
                    });
                } else {
                    dogDisplay.innerHTML += '<p>No image available for this breed.</p>';
                }
            } else {
                alert('Dog breed not found!');
            }
        }
    }
    xhr.send();
}

let dogPage = 0;

function loadMoreDogs() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.thedogapi.com/v1/images/search?limit=20&page=${dogPage}`);
    xhr.onreadystatechange = function() {
        if (xhr.status == 200 && xhr.readyState == 4) {
            let data = JSON.parse(xhr.responseText);
            let container = document.getElementById('dog-images');

            data.forEach(item => {
                let imgDiv = document.createElement('div');
                imgDiv.classList.add('d-image');
                let img = document.createElement('img');
                img.src = item.url;
                imgDiv.appendChild(img);
                container.appendChild(imgDiv);
            });

            dogPage++;
        }
    }
    xhr.send();
}

//------------------------------------------------------------------------------------------

function getCatImage(imageId, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.thecatapi.com/v1/images/${imageId}`);
    xhr.onreadystatechange = function() {
        if (xhr.status == 200 && xhr.readyState == 4) {
            let imageData = JSON.parse(xhr.responseText);
            callback(imageData.url);
        }
    }
    xhr.send();
}

function getCatBreeds() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.thecatapi.com/v1/breeds");
    xhr.onreadystatechange = function() {
        if (xhr.status == 200 && xhr.readyState == 4) {
            let data = JSON.parse(xhr.responseText);
            let drp = document.getElementById('cat-drop');

            for (let i = 0; i < data.length; i++) {
                let breed = data[i];
                let option = document.createElement('option'); 
                option.textContent = breed.name;
                drp.appendChild(option);
            }
            drp.onchange = function(){
                let selectedIndex = drp.selectedIndex;
                let selectedBreed = data[selectedIndex-1];
                let ref = selectedBreed.reference_image_id;

                getCatImage(ref, function(imageUrl) {
                    let catImage = document.getElementById('cat-img');
                    catImage.src = imageUrl;
                });
                console.log(selectedBreed.name)
                document.getElementById('catdis').innerHTML = `<h3>${selectedBreed.name.toUpperCase()}</h3><p>${selectedBreed.temperament}</p>`;
            }
        }
    }
    xhr.send();
}



function getCatRandom() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.thecatapi.com/v1/images/search");
    xhr.onreadystatechange = function() {
        if (xhr.status == 200 && xhr.readyState == 4) {
            let data = JSON.parse(xhr.responseText);
            let imageUrl = data[0].url;
            document.getElementById('cat-img').src = imageUrl;

            var xhrBreed = new XMLHttpRequest();
            xhrBreed.open("GET", "https://api.thecatapi.com/v1/breeds");
            xhrBreed.onreadystatechange = function() {
                if (xhrBreed.status == 200 && xhrBreed.readyState == 4) {
                    let breeds = JSON.parse(xhrBreed.responseText);
                    const randomBreed = breeds[Math.floor(Math.random() * breeds.length)];
                    document.getElementById('catdis').innerHTML = `<h3>${randomBreed.name.toUpperCase()}</h3><p>${randomBreed.description}</p>`;
                }
            };
            xhrBreed.send(); 
        }
    };
    xhr.send();
}


function searchCat() {
    let catName = document.getElementById('c-search').value.toLowerCase();
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.thecatapi.com/v1/breeds");
    xhr.onreadystatechange = function() {
        if (xhr.status == 200 && xhr.readyState == 4) {
            let breeds = JSON.parse(xhr.responseText);
            let breed = breeds.find(b => b.name.toLowerCase() === catName);
            if (breed) {
                let catDisplay = document.getElementById('catdis');
                catDisplay.innerHTML = `<h3>${breed.name.toUpperCase()}</h3><p>${breed.description}</p>`;

                if (breed.reference_image_id) {
                    getCatImage(breed.reference_image_id, function(imageUrl) {
                        let catImage = document.getElementById('cat-img');
                        catImage.src = imageUrl;
                    });
                } else {
                    catDisplay.innerHTML += '<p>No image available for this breed.</p>';
                    document.getElementById('cat-img').style.display = 'none';
                }
            } else {
                alert('Cat breed not found!');
            }
        }
    }
    xhr.send();
}


let catPage = 0;
function loadMoreCats() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.thecatapi.com/v1/images/search?limit=20&page=${catPage}`);
    xhr.onreadystatechange = function() {
        if (xhr.status == 200 && xhr.readyState == 4) {
            let data = JSON.parse(xhr.responseText);
            let container = document.getElementById('cat-images');

            data.forEach(item => {
                let imgDiv = document.createElement('div');
                imgDiv.classList.add('c-image');
                let img = document.createElement('img');
                img.src = item.url;
                imgDiv.appendChild(img);
                container.appendChild(imgDiv);
            });

            catPage++;
        }
    }
    xhr.send();
}

// For cats

let clikedBreeds = [];

function toggleLove() {
    let dro = document.getElementById('cat-drop');
    let im = document.getElementById('cat-like-icon');
    let selectedBreed = dro.value;
    let heartSrc = '../ajax/heart.png';
    let likeSrc = '../ajax/like.png';

    if (selectedBreed !== 'select a breed') {
        if (clikedBreeds.includes(selectedBreed)) {
            // Remove from liked breeds
            clikedBreeds = clikedBreeds.filter(breed => breed !== selectedBreed);
            im.src = likeSrc;
        } else {
            // Add to liked breeds
            clikedBreeds.push(selectedBreed);
            im.src = heartSrc;
        }
    }
}
function cupdateLikeIcon() {
    let dro = document.getElementById('cat-drop');
    let im = document.getElementById('cat-like-icon');
    let selectedBreed = dro.value;
    let heartSrc = '../ajax/heart.png';
    let likeSrc = '../ajax/like.png';

    if (clikedBreeds.includes(selectedBreed)) {
        im.src = heartSrc;
    } else {
        im.src = likeSrc;
    }
}
document.getElementById('cat-drop').addEventListener('change', cupdateLikeIcon);




// For dogs
let likedBreeds = [];

function toggleLove() {
    let dro = document.getElementById('dog-drop');
    let im = document.getElementById('dog-like-icon');
    let selectedBreed = dro.value;
    let heartSrc = '../ajax/heart.png';
    let likeSrc = '../ajax/like.png';

    if (selectedBreed !== 'select a breed') {
        if (likedBreeds.includes(selectedBreed)) {
            // Remove from liked breeds
            likedBreeds = likedBreeds.filter(breed => breed !== selectedBreed);
            im.src = likeSrc;
        } else {
            // Add to liked breeds
            likedBreeds.push(selectedBreed);
            im.src = heartSrc;
        }
    }
}

function updateLikeIcon() {
    let dro = document.getElementById('dog-drop');
    let im = document.getElementById('dog-like-icon');
    let selectedBreed = dro.value;
    let heartSrc = '../ajax/heart.png';
    let likeSrc = '../ajax/like.png';

    if (likedBreeds.includes(selectedBreed)) {
        im.src = heartSrc;
    } else {
        im.src = likeSrc;
    }
}

document.getElementById('dog-drop').addEventListener('change', updateLikeIcon);
