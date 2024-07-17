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

    // Inicializa mostrando la sección de héroe
    showSection('hero');
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}
