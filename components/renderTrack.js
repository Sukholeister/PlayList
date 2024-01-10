
 export default function renderTracks () {

  const dataListFromLocalStorage = localStorage.getItem('DataKey');
  const dataList = JSON.parse(dataListFromLocalStorage);

  for (let i = 0; i < dataList.length; i++) {
          let trackWrapperElement = document.querySelector(`.playlist-${i}`);
          if (!trackWrapperElement) {
              // Якщо елемент не існує, можна створити його або пропустити цю ітерацію
              console.error(`Елемент .playlist-${i} не знайдено на сторінці.`);
              continue;
          }

          let wrapperTracks = document.createElement('div');
          wrapperTracks.classList.add('wrapperTracks');
          trackWrapperElement.append(wrapperTracks);

      for (let j = 0; j < dataList[i].tracks.length; j++) {
          let trackWrapperElement = document.querySelector(`.playlist-${i}`);
          
          let wrapperTracks = document.createElement('div');
          wrapperTracks.classList.add('wrapperTracks');
          trackWrapperElement.append(wrapperTracks);

          let playListImg = document.createElement('img');
          playListImg.src = dataList[i].tracks[j].images;
          playListImg.classList.add('playlist-img');
          wrapperTracks.append(playListImg);

          let wrapperDeskrAndVolume = document.createElement('div');
          wrapperDeskrAndVolume.classList.add('wrapperDeskrAndVolume');
          wrapperTracks.append(wrapperDeskrAndVolume);

          let spanElement = document.createElement('span');
          spanElement.classList.add('span-track');

          let nameTrack = document.createElement('div');
          nameTrack.append(dataList[i].tracks[j].performer + " - ");
          spanElement.append(dataList[i].tracks[j].nameTrack);
          nameTrack.append(spanElement);
          wrapperDeskrAndVolume.append(nameTrack);

          let audioElement = document.createElement('audio');
          audioElement.controls = true;
          audioElement.src = dataList[i].tracks[j].fileUrl; 
          audioElement.classList.add("styled-audio-player");
          wrapperDeskrAndVolume.append(audioElement);

          let buttonDelete = document.createElement('img');
          buttonDelete.src = 'img/remove.png';
          buttonDelete.classList.add('button-delete');
          buttonDelete.id = dataList[i].tracks[j].id;
          wrapperTracks.append(buttonDelete);
      }
  }
}

// Виклик функції для рендерінгу треків з localStorage
renderTracks();
