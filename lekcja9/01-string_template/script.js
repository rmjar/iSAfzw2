const cardTemplate = (myRobot) => `
<div class="w-25 px-1 mb-2">
<div class="card">
  <img class="card-img-top" src=${myRobot.avatar}>

  <div class="card-body">
    <h5 class="card-title">${myRobot.name}</h5>

    <p class="card-text">${myRobot.caption}</p>
    <a href="#" class="btn btn-primary ${myRobot.avaliable ? 'enabled' : 'disabled'}">Buy now!</a>
  </div>
</div>
</div>
`;

const container = document.getElementById('container');

const robot = {
  name: 'ESherman',
  caption: 'Lorem ipsum dolor sit amet. Etiam tempus odio et libero aliquam sodales.',
  avatar: 'https://robohash.org/atqueabaliquam.bmp?set=set1',
  avaliable: false
};

dataset.forEach(robot => container.insertAdjacentHTML('beforeend', cardTemplate(robot)));
