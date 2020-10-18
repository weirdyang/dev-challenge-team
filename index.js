const appData = {
    'people' : [
        {
            'name': 'Bill Mahoney',
            'job' : 'Product Owner',
            'image': './photo1.png'
        },
        {
            'name': 'Saba Cabrera',
            'job' : 'Art Director',
            'image': './photo2.png'
        },
        {
            'name': 'Shae Le',
            'job' : 'Tech Lead',
            'image': './photo3.png'
        },
        {
            'name': 'Skylah Lu',
            'job' : 'UX Designer',
            'image': './photo4.png'
        },
        {
            'name': 'Griff Richards',
            'job' : 'Developer',
            'image': './photo5.png'
        },
        {
            'name': 'Stan John',
            'job' : 'Developer',
            'image': './photo6.png'
        }
    ]
}

const makeCard = function (person) {
    let card = document.createElement("div");
    card.classList.add('column', 'is-half-mobile', 'is-one-third-tablet', 'is-one-third-desktop');
    card.innerHTML = `
  <div class="columns is-multiline is-centered">
    <div class="column">
      <div class="columns is-mobile is-gapless">
        <div class="column has-text-centered">
          <!-- Add content or other tiles -->
          <article>
            <figure class="image image-tag">
              <img src="${person.image}">
            </figure>
            <p class="name-tag">${person.name}</p>
          </article>
        </div>
        <div class="column is-1">
          <div class="job-tag">
            <p>${person.job}</p>
          </div>
        </div>
      </div>
    </div>
  </div>`
  return card;
}
