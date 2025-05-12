document.addEventListener('DOMContentLoaded', () => {
  fetch('myprojects.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('cards-container');

      data.forEach((project, index) => {
        const card = document.createElement('div');
        card.classList.add('card');


        const img = document.createElement('img');
        img.src = project.image;
        img.alt = `${project.title} preview`;
        card.appendChild(img);

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-text');

        const title = document.createElement('h3');
        title.textContent = project.title;
        cardContent.appendChild(title);

        const desc = document.createElement('p');
        desc.textContent = project.description;
        cardContent.appendChild(desc);

        const tech = document.createElement('p');
        tech.innerHTML = `<strong>Technologies used:</strong> ${project.technologies.join(', ')}`;
        cardContent.appendChild(tech);

        const linksContainer = document.createElement('div');
        linksContainer.classList.add('card-links');

        const githubLink = document.createElement('a');
        githubLink.href = project.githubLink;
        githubLink.target = '_blank';
        githubLink.title = 'GitHub';
        githubLink.innerHTML = `<img src="imagini/icons8-github-24.png" alt="GitHub">`;
        linksContainer.appendChild(githubLink);

        const liveLink = document.createElement('a');
        liveLink.href = project.liveLink;
        liveLink.target = '_blank';
        liveLink.title = 'Live Demo';
        liveLink.innerHTML = `<img src="imagini/icons8-link-24.png" alt="Live Demo">`;
        linksContainer.appendChild(liveLink);

        cardContent.appendChild(linksContainer);

        card.appendChild(cardContent);

        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error fetching projects:', error);
    });
});
