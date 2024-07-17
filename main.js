document.addEventListener('DOMContentLoaded', function() {
    const artists = [
        {
            "name": "BTS",
            "description": "Grupo surcoreano de K-pop.",
            "image": "images/bts.jpg",
            "page": "artistas/bts.html"
        },
        {
            "name": "BLACKPINK",
            "description": "Grupo femenino surcoreano de K-pop.",
            "image": "images/blackpink.jpg",
            "page": "artistas/blackpink.html"
        },
        {
            "name": "EXO",
            "description": "Grupo surcoreano-chino de K-pop.",
            "image": "images/exo.jpg",
            "page": "artistas/exo.html"
        },
        {
            "name": "NMIXX",
            "description": "Nuevo grupo femenino surcoreano de K-pop.",
            "image": "images/nmixx.jpg",
            "page": "artistas/nmixx.html"
        },
        {
            "name": "ITZY",
            "description": "Grupo femenino surcoreano de K-pop.",
            "image": "images/itzy.jpg",
            "page": "artistas/itzy.html"
        },
        {
            "name": "TWICE",
            "description": "Grupo femenino surcoreano de K-pop.",
            "image": "images/twice.jpg",
            "page": "artistas/twice.html"
        },
        {
            "name": "Stray Kids",
            "description": "Grupo masculino surcoreano de K-pop.",
            "image": "images/straykids.jpg",
            "page": "artistas/straykids.html"
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
                <a href="${artist.page}">Ver más</a>
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
        window.location.href = filteredArtists[0].page;
    } else {
        alert('No se encontraron artistas con ese nombre');
    }
}

