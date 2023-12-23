import { createPerformarce,performersArray } from "./components/Performance.js";



document.addEventListener('DOMContentLoaded', function() {
   let dataList = [
    {
        id: '50-cent',
        title: {
            images:'img/img1.png',
            nameList: 'Hip-Hop Hits',
            timeAllTracks: 790,
            performers:'Snoop Dog'
        },

        tracks: [ 
            {
            performer: 'Eminem',
            nameTrack: 'Rap God',
            images: 'img/eminem.jpg',
            fileUrl: 'musik/eminem-RapGod.mp3',
            
            },
    
            {
            performer: '50 Cent',
            nameTrack: 'Candy Shop',
            images: 'img/50cent.jpg',
            fileUrl: 'musik/50centCandy.mp3',            
            
            },
            {
                performer: '50 Cent',
                nameTrack: 'Candy Shop',
                images: 'img/50cent.jpg',
                fileUrl: 'musik/50centCandy.mp3',            
                
                },
                {
                    performer: '50 Cent',
                    nameTrack: 'Candy Shop',
                    images: 'img/50cent.jpg',
                    fileUrl: 'musik/50centCandy.mp3',            
                    
                    },
                    
      
        ]
    },
    {
        id: 'snoop-dog',
        title: {
            images:'img/img1.png',
            nameList: 'Jass hits',
            timeAllTracks: 790,
            performers:'Snoop Dog'
        },

        tracks: [ 
            {
            performer: 'vasik',
            nameTrack: 'Rap God',
            images: 'img/eminem.jpg',
            fileUrl: 'musik/eminem-RapGod.mp3',
            
            },
    
            {
            performer: ' vasik',
            nameTrack: 'Candy Shop',
            images: 'img/50cent.jpg',
            fileUrl: 'musik/50centCandy.mp3',            
            
            }
         
      
        ]
    }
]

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
        descrTitleWrapper.classList.add('deskr-title')  
        titleElement.append(descrTitleWrapper)

        /// Створення назви плейлиста 
        let playListNameElement = document.createElement('div')
        playListNameElement.classList.add('name-playlist')
        playListNameElement.append(inputTitle.nameList)
        descrTitleWrapper.append(playListNameElement)

        
            let trackWrapperElement = document.createElement('div')
       
            trackWrapperElement.classList.add(`playlist-${index}`)
        
       
        wrapperElement.append(trackWrapperElement)
        
        // Створення обгортки для плейлистів 
      
        
     
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
        
        countByNumber(descrTitleWrapper)

        
    }

    function renderTracks (track, index) {
        
            let trackWrapperElement  = document.querySelector(`.playlist-${index}`)

            console.log(trackWrapperElement);
  
            /// Обгортка  трекa 
          let wrapperTracks = document.createElement('div');
            wrapperTracks.classList.add('wrapperTracks')
            trackWrapperElement.append(wrapperTracks) /// переписати
    
            /// cтворення блока для картинки 
          let playListImg = document.createElement('img');
              playListImg.src = track.images
              playListImg.classList.add('playlist-img')
              wrapperTracks.append(playListImg)
    
            /// створення обгортки для назви  трека та звукової дорожки 
          let wrapperDeskrAndVolume = document.createElement('div')
              wrapperDeskrAndVolume.classList.add('wrapperDeskrAndVolume')
              wrapperTracks.append(wrapperDeskrAndVolume)
            /// назва треків 
          let nameTrack = document.createElement('div')
              nameTrack.append(track.performer + " " + track.nameTrack)
              wrapperDeskrAndVolume.append(nameTrack)
    
            /// створення аудіо дорожки 
          let audioElement =  document.createElement('audio');
            audioElement.controls = true;
            audioElement.src = track.fileUrl; 
            audioElement.classList.add("styled-audio-player");
            wrapperDeskrAndVolume.append(audioElement)

  
      }

      


    
        let resultTime = 0;
        var trackInMinutes = 0;
        var trackInSeconds = 0;
    
        function allTimeMusik(track){
            var audio = new Audio(track);
                audio.addEventListener('loadeddata', ()=>{
                    var trackDurationInSeconds = audio.duration;
                    resultTime += trackDurationInSeconds
    
                    trackInMinutes = resultTime / 60;
                    trackInMinutes = Math.floor(trackInMinutes)
                    trackInSeconds = Math.floor(trackDurationInSeconds % 60);
                })
       
        }
    
   
        function countByNumber (descrTitleWrapper) {
    
            let result = 0;
                for( let i = 0; i<dataList.length; i++){
                    result =  dataList[i].tracks.length
                }
    
            setTimeout(function() {
    
                let allTimeTrackElement = document.createElement('div')
                allTimeTrackElement.classList.add('all-time-track')
                allTimeTrackElement.append(result + ' tracks, ' +' '+ trackInMinutes + 'm ' + trackInSeconds + 's' );
                descrTitleWrapper.append(allTimeTrackElement)
            }, 1000); 
        }
    



  ///RANDER плейлиста
  for (let i=0;  i < dataList.length; i++){
    renderPlaylistTitle(dataList[i].title, i)
   
    for(let j = 0; j<dataList[i].tracks.length; j++) {
        allTimeMusik(dataList[i].tracks[j].fileUrl);
        renderTracks(dataList[i].tracks[j], i );
        
    }
    
}

});
