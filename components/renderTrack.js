
 export default function renderTracks () {

  const dataListFromLocalStorage = localStorage.getItem('DataKey');
  const dataList = JSON.parse(dataListFromLocalStorage);

  for (let i=0;  i < dataList.length; i++){
    for(let j = 0; j<dataList[i].tracks.length; j++) {
        
      let trackWrapperElement  = document.querySelector(`.playlist-${i}`)
      
        /// Обгортка  трекa 
      let wrapperTracks = document.createElement('div');
        wrapperTracks.classList.add('wrapperTracks')
        trackWrapperElement.append(wrapperTracks) /// переписати

        /// cтворення блока для картинки 
      let playListImg = document.createElement('img');
          playListImg.src = dataList[i].tracks[j].images
          playListImg.classList.add('playlist-img')
          wrapperTracks.append(playListImg)

        /// створення обгортки для назви  трека та звукової дорожки 
      let wrapperDeskrAndVolume = document.createElement('div')
          wrapperDeskrAndVolume.classList.add('wrapperDeskrAndVolume')
          wrapperTracks.append(wrapperDeskrAndVolume)
        /// назва треків 

        let spanElement = document.createElement('span')
            spanElement.classList.add('span-track')


      let nameTrack = document.createElement('div')
    
          nameTrack.append(dataList[i].tracks[j].performer + " - " )
          spanElement.append(dataList[i].tracks[j].nameTrack )
          nameTrack.append(spanElement)
          wrapperDeskrAndVolume.append(nameTrack)

        /// створення аудіо дорожки 
      let audioElement =  document.createElement('audio');
        audioElement.controls = true;
        audioElement.src = dataList[i].tracks[j].fileUrl; 
        audioElement.classList.add("styled-audio-player");
        wrapperDeskrAndVolume.append(audioElement)

      }
        
    }

}