export default function renderTracks (track, index) {
        
    let trackWrapperElement  = document.querySelector(`.playlist-${index}`)
   

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

    let spanElement = document.createElement('span')
        spanElement.classList.add('span-track')


  let nameTrack = document.createElement('div')
 
      nameTrack.append(track.performer + " - " )
      spanElement.append(track.nameTrack )
      nameTrack.append(spanElement)
      wrapperDeskrAndVolume.append(nameTrack)

    /// створення аудіо дорожки 
  let audioElement =  document.createElement('audio');
    audioElement.controls = true;
    audioElement.src = track.fileUrl; 
    audioElement.classList.add("styled-audio-player");
    wrapperDeskrAndVolume.append(audioElement)



}