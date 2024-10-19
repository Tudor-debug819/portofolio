document.addEventListener('DOMContentLoaded', () => {
    fetch('myprojects.json')
      .then(response => response.json())
      .then(data => {
        const cardsContainer = document.getElementById('cards-container');
  
        data.forEach(project => {
          const card = document.createElement('div');
          card.classList.add('card');
  
          const img = document.createElement('img');
          img.src = project.image;
          img.width = 200;
          img.height = 200;
          card.appendChild(img);
  
          const cardContent = document.createElement('div');
          cardContent.classList.add('card-content');
  
          const title = document.createElement('h3');
          title.textContent = project.title;
          cardContent.appendChild(title);
  
          const description = document.createElement('p');
          description.textContent = project.description;
          cardContent.appendChild(description);
  
          const techParagraph = document.createElement('p');
          techParagraph.innerHTML = `Technologies used: <strong>${project.technologies.join(
            ', '
          )}</strong>`;
          cardContent.appendChild(techParagraph);
  
          card.appendChild(cardContent);
  
          const githubLink = document.createElement('a');
          githubLink.href = project.githubLink;
          githubLink.target = '_blank';
          githubLink.innerHTML = '<img src="imagini/icons8-github-24.png" />';
          card.appendChild(githubLink);
  
          const liveLink = document.createElement('a');
          liveLink.href = project.liveLink;
          liveLink.target = '_blank';
          liveLink.innerHTML = '<img src="imagini/icons8-link-24.png"/>';
          card.appendChild(liveLink);
  
          cardsContainer.appendChild(card);
        });
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  });
  