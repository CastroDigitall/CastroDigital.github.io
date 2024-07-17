document.addEventListener('DOMContentLoaded', function() {
    const artists = [
        {
            "name": "BTS",
            "description": "Grupo surcoreano de K-pop.",
            "image": "images/bts.jpg"
        },
        {
            "name": "BLACKPINK",
            "description": "Grupo femenino surcoreano de K-pop.",
            "image": "images/blackpink.jpg"
        },
        {
            "name": "EXO",
            "description": "Grupo surcoreano-chino de K-pop.",
            "image": "images/exo.jpg"
        },
        {
            "name": "NMIXX",
            "description": "Nuevo grupo femenino surcoreano de K-pop.",
            "image": "images/nmixx.jpg"
        },
        {
            "name": "ITZY",
            "description": "Grupo femenino surcoreano de K-pop.",
            "image": "images/itzy.jpg"
        },
        {
            "name": "TWICE",
            "description": "Grupo femenino surcoreano de K-pop.",
            "image": "images/twice.jpg"
        },
        {
            "name": "Stray Kids",
            "description": "Grupo masculino surcoreano de K-pop.",
            "image": "images/straykids.jpg"
        }
    ];

    const artistList = document.getElementById('artist-list');
    const renderArtists = (artists) => {
        artistList.innerHTML = '';
        artists.forEach(artist => {
            const artistDiv = document.createElement('div');
            artistDiv.classList.add('artist');
            artistDiv.innerHTML = `
                <img src="${artist.image}" alt="${artist.name}">
                <h3>${artist.name}</h3>
                <p>${artist.description}</p>
            `;
            artistList.appendChild(artistDiv);
        });
    };

    renderArtists(artists);

    // Inicializa mostrando la sección de héroe
    showSection('hero');
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}

function showSuggestions() {
    const query = document.getElementById('search').value.toLowerCase();
    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = '';
    if (query) {
        const filteredArtists = artists.filter(artist => artist.name.toLowerCase().includes(query));
        filteredArtists.forEach(artist => {
            const suggestion = document.createElement('div');
            suggestion.classList.add('suggestion');
            suggestion.innerText = artist.name;
            suggestion.onclick = () => {
                document.getElementById('search').value = artist.name;
                searchArtists();
            };
            suggestions.appendChild(suggestion);
        });
    }
}

function searchArtists() {
    const query = document.getElementById('search').value.toLowerCase();
    const filteredArtists = artists.filter(artist => artist.name.toLowerCase().includes(query));
    if (filteredArtists.length > 0) {
        renderArtists(filteredArtists);
        showSection('artistas');
    } else {
        alert('No se encontraron artistas con ese nombre');
    }
}

function renderArtists(artists) {
    const artistList = document.getElementById('artist-list');
    artistList.innerHTML = '';
    artists.forEach(artist => {
        const artistDiv = document.createElement('div');
        artistDiv.classList.add('artist');
        artistDiv.innerHTML = `
            <img src="${artist.image}" alt="${artist.name}">
            <h3>${artist.name}</h3>
            <p>${artist.description}</p>
        `;
        artistList.appendChild(artistDiv);
    });
}


