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

function searchArtists() {
    const query = document.getElementById('search').value.toLowerCase();
    const artistList = document.getElementById('artist-list');
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
        }
    ];

    const filteredArtists = artists.filter(artist => artist.name.toLowerCase().includes(query));
    renderArtists(filteredArtists);
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

