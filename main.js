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
            `;
            artistDiv.addEventListener('click', () => {
                window.location.href = artist.page;
            });
            artistList.appendChild(artistDiv);
        });
    };

    renderArtists(artists);

    const searchInput = document.getElementById('search');
    const suggestions = document.getElementById('suggestions');

    const showSuggestions = () => {
        suggestions.innerHTML = '';
        const input = searchInput.value.toLowerCase();
        const filteredArtists = artists.filter(artist => artist.name.toLowerCase().includes(input));
        filteredArtists.forEach(artist => {
            const suggestion = document.createElement('div');
            suggestion.classList.add('suggestion');
            suggestion.textContent = artist.name;
            suggestion.addEventListener('click', () => {
                searchInput.value = artist.name;
                suggestions.innerHTML = '';
                window.location.href = artist.page;
            });
            suggestions.appendChild(suggestion);
        });
    };

    const searchArtists = () => {
        const input = searchInput.value.toLowerCase();
        const artist = artists.find(artist => artist.name.toLowerCase() === input);
        if (artist) {
            window.location.href = artist.page;
        }
    };

    window.showSection = (sectionId) => {
        const sections = document.querySelectorAll('.content');
        sections.forEach(section => {
            section.style.display = 'none';
        });
        const sectionToShow = document.getElementById(sectionId);
        sectionToShow.style.display = 'block';
    };

    // Mostrar la sección 'Artistas' por defecto al cargar la página
    showSection('artistas');
});

