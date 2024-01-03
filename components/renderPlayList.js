let dataListFromLocalStorage = localStorage.getItem('DataKey');
let dataList = JSON.parse(dataListFromLocalStorage);

import { performersArray } from "./Performance.js";

let mainWrapperPlaylist = document.querySelector('.main-wrapper-playlist')

   export default function renderPlaylistTitle (){
        for (let i=0;  i < dataList.length; i++){
        
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
        titleImgElement.src = dataList[i].title.images
        titleElement.append(titleImgElement)

        ///Створення обгортки блока з Описов
        let descrTitleWrapper = document.createElement('div')
        descrTitleWrapper.classList.add(`deskr-title-${i}`)  
        titleElement.append(descrTitleWrapper)

        /// Створення назви плейлиста 
        let playListNameElement = document.createElement('div')
        playListNameElement.classList.add('name-playlist')
        playListNameElement.append(dataList[i].title.nameList)
        descrTitleWrapper.append(playListNameElement)

        
        let trackWrapperElement = document.createElement('div')
        trackWrapperElement.classList.add(`playlist-${i}`)
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
    }
