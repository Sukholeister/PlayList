import { createPerformarce,performersArray } from "./components/Performance.js";
import countByNumber from './components/countByNumber.js'
import modalSave from "./components/modalSave.js";
import renderTracks from "./components/renderTrack.js";
import { dataList } from "./components/data.js";

document.addEventListener('DOMContentLoaded', function() {

for( let i = 0; i<dataList.length; i++){
    for(let j = 0; j < dataList[i].tracks.length; j++){
        createPerformarce(dataList[i].tracks[j].performer)
    }
}

let mainWrapperPlaylist = document.querySelector('.main-wrapper-playlist')


    function renderPlaylistTitle (inputTitle, index){
        //Cтворення загального блока обгортки на title та Playlist
        let wrapperElement = document.createElement('div');
        
        wrapperElement.classList.add(`wrapper-title-element`)
        mainWrapperPlaylist.append(wrapperElement)
        

        /// створення блока обгортки title яка буде включати img та Descr
        let titleElement = document.createElement('div')
        titleElement.classList.add('track-now')
        wrapperElement.append(titleElement);

        /// cтворення Блока з фотографією  та розміжуємо його в попередній блок titleElement
        let titleImgElement = document.createElement('img')
        titleImgElement.src = inputTitle.images
        titleElement.append(titleImgElement)

        ///Створення обгортки блока з Описов
        let descrTitleWrapper = document.createElement('div')
        descrTitleWrapper.classList.add(`deskr-title-${index}`)  
        titleElement.append(descrTitleWrapper)

        /// Створення назви плейлиста 
        let playListNameElement = document.createElement('div')
        playListNameElement.classList.add('name-playlist')
        playListNameElement.append(inputTitle.nameList)
        descrTitleWrapper.append(playListNameElement)

        
        let trackWrapperElement = document.createElement('div')
        trackWrapperElement.classList.add(`playlist-${index}`)
        trackWrapperElement.classList.add(`overflow`)

        wrapperElement.append(trackWrapperElement)
        
     
        // Обмеження кількості виконавців до максимально трьох
        let limitedPerformers = performersArray.slice(0, 3);

        // Додавання "and Others", якщо кількість виконавців більше 3
        if (performersArray.length > 3) {
            limitedPerformers.push('<span class="others">and others</span>');
        }

        // Створення текстового рядка із комами між іменами виконавців
        let performersText = limitedPerformers.join(', ');

        // Створення нового елементу div для імен виконавців
        let performersElement = document.createElement('div');
        performersElement.classList.add("performer-list");
        performersElement.innerHTML = performersText;
        descrTitleWrapper.append(performersElement)
    }





 
      for (let i=0;  i < dataList.length; i++){
        
      
           let audio =  document.querySelector('audio');
        
      }


      

      



  ///RANDER плейлиста
  for (let i=0;  i < dataList.length; i++){
    renderPlaylistTitle(dataList[i].title, i)
    countByNumber(i, dataList)
    for(let j = 0; j<dataList[i].tracks.length; j++) {
       
        renderTracks(dataList[i].tracks[j], i );
        
    }
    
}
modalSave();
});


