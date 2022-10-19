import './style.css';
import {
  apiurl,
  characters
} from './src/constants';

document.title = 'prework';

async function getCharacters() {
  const response = await fetch(apiurl, {
    method: 'GET',
  });

  var loading = false;

  return response.json();
}

(async () => {
  var loading = true;
  let { results, info } = await getCharacters();

  document.querySelector('.search > input').value = 1;
  document.querySelector('.search > span').innerText = info.pages;

  document.querySelector('.search > input').addEventListener('change', function() {
    fetch(apiurl + '?page=' + this.value)
      .then((res) => res.json())
      .then((res) => {results = res.results});
  });

  function getOnlyAlives() {
    const aliveCharacters = results.filter(res => res.status === 'Alive');

    characters.innerHTML = '';

    for (let index in aliveCharacters) {
      const character = document.createElement('p');
    const numberOfCharacter = document.createElement('span');

    numberOfCharacter.innerText = parseInt(index) + 1;
    const characterName = document.createTextNode(' ' + results[index].name);
    character.prepend(numberOfCharacter, characterName);

    characters.append(character);

    character.addEventListener('click', () => {
      const detailsName = document.createElement('div');
      const detailsGender = document.createElement('div');
      const status = document.createElement('div');
      const detailsSmallImg = document.createElement('img');
      detailsSmallImg.width = '100';
      detailsName.innerText = 'imie: ' + results[index].name;
      detailsGender.innerText = 'płeć: ' + results[index].gender;
      status.innerText = 'status: ' + results[index].status;
      detailsSmallImg.src = results[index].image;
      const details = document.querySelector('.main #details');
      details.innerHTML = '<h1>Szczegóły</h1>';
      details.append(detailsName, detailsGender, status, detailsSmallImg);
      detailsSmallImg.onclick = () => {
        const dialogWindow = document.createElement('dialog');
        const dialogImg = document.createElement('img');
        dialogImg.src = results[index].image;
        dialogImg.width = 300;
        document.body.append(dialogWindow);
        dialogWindow.append(dialogImg);
        dialogWindow.showModal();
        const close = document.createElement('button');
        close.innerText = 'zamknij';
        close.addEventListener('click', () => {
          dialogWindow.close();
        });
        dialogWindow.append(close);
      };
    });
    }

  }

  function deadsOnly() {
    const deadCharacters = results.filter(res => res.status === 'Dead');

    characters.innerHTML = '';

    for (let index in deadCharacters) {
      const character = document.createElement('p');
    const numberOfCharacter = document.createElement('span');

    numberOfCharacter.innerText = parseInt(index) + 1;
    const characterName = document.createTextNode(' ' + results[index].name);
    character.prepend(numberOfCharacter, characterName);

    characters.append(character);

    character.addEventListener('click', () => {
      const detailsName = document.createElement('div');
      const detailsGender = document.createElement('div');
      const status = document.createElement('div');
      const detailsSmallImg = document.createElement('img');
      detailsSmallImg.width = '100';
      detailsName.innerText = 'imie: ' + results[index].name;
      detailsGender.innerText = 'płeć: ' + results[index].gender;
      status.innerText = 'status: ' + results[index].status;
      detailsSmallImg.src = results[index].image;
      const details = document.querySelector('.main #details');
      details.innerHTML = '<h1>Szczegóły</h1>';
      details.append(detailsName, detailsGender, status, detailsSmallImg);
      detailsSmallImg.onclick = () => {
        const dialogWindow = document.createElement('dialog');
        const dialogImg = document.createElement('img');
        dialogImg.src = results[index].image;
        dialogImg.width = 300;
        document.body.append(dialogWindow);
        dialogWindow.append(dialogImg);
        dialogWindow.showModal();
        const close = document.createElement('button');
        close.innerText = 'zamknij';
        close.addEventListener('click', () => {
          dialogWindow.close();
        });
        dialogWindow.append(close);
      };
    });
    }

  }

  function showAllCharacters() {
    characters.innerHTML = '';

    for (let index in results) {
      const character = document.createElement('p');
      const numberOfCharacter = document.createElement('span');
  
      numberOfCharacter.innerText = parseInt(index) + 1;
      const characterName = document.createTextNode(' ' + results[index].name);
      character.prepend(numberOfCharacter, characterName);
  
      characters.append(character);
  
      character.addEventListener('click', () => {
        const detailsName = document.createElement('div');
        const detailsGender = document.createElement('div');
        const status = document.createElement('div');
        const detailsSmallImg = document.createElement('img');
        detailsSmallImg.width = '100';
        detailsName.innerText = 'imie: ' + results[index].name;
        detailsGender.innerText = 'płeć: ' + results[index].gender;
        status.innerText = 'status: ' + results[index].status;
        detailsSmallImg.src = results[index].image;
        const details = document.querySelector('.main #details');
        details.innerHTML = '<h1>Szczegóły</h1>';
        details.append(detailsName, detailsGender, status, detailsSmallImg);
        detailsSmallImg.onclick = () => {
          const dialogWindow = document.createElement('dialog');
          const dialogImg = document.createElement('img');
          dialogImg.src = results[index].image;
          dialogImg.width = 300;
          document.body.append(dialogWindow);
          dialogWindow.append(dialogImg);
          dialogWindow.showModal();
          const close = document.createElement('button');
          close.innerText = 'zamknij';
          close.addEventListener('click', () => {
            dialogWindow.close();
          });
          dialogWindow.append(close);
        };
      });
  }
  }

  alive.addEventListener('click', getOnlyAlives);
  dead.addEventListener('click', deadsOnly);
  all.addEventListener('click', showAllCharacters);

  // adding results to DOM!
  for (let index in results) {
    const character = document.createElement('p');
    const numberOfCharacter = document.createElement('span');

    numberOfCharacter.innerText = parseInt(index) + 1;
    const characterName = document.createTextNode(' ' + results[index].name);
    character.prepend(numberOfCharacter, characterName);

    characters.append(character);

    character.addEventListener('click', () => {
      const detailsName = document.createElement('div');
      const detailsGender = document.createElement('div');
      const status = document.createElement('div');
      const detailsSmallImg = document.createElement('img');
      detailsSmallImg.width = '100';
      detailsName.innerText = 'imie: ' + results[index].name;
      detailsGender.innerText = 'płeć: ' + results[index].gender;
      status.innerText = 'status: ' + results[index].status;
      detailsSmallImg.src = results[index].image;
      const details = document.querySelector('.main #details');
      details.innerHTML = '<h1>Szczegóły</h1>';
      details.append(detailsName, detailsGender, status, detailsSmallImg);
      detailsSmallImg.onclick = () => {
        const dialogWindow = document.createElement('dialog');
        const dialogImg = document.createElement('img');
        dialogImg.src = results[index].image;
        dialogImg.width = 300;
        document.body.append(dialogWindow);
        dialogWindow.append(dialogImg);
        dialogWindow.showModal();
        const close = document.createElement('button');
        close.innerText = 'zamknij';
        close.addEventListener('click', () => {
          dialogWindow.close();
        });
        dialogWindow.append(close);
      };
    });
  }

})();
