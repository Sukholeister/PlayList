
import { createPerformarce } from "./components/Performance.js";
import countByNumber from './components/countByNumber.js'
import modalSave from "./components/modalSave.js";
import renderPlaylistTitle from "./components/renderPlayList.js";
import { dataList } from "./components/data.js";
import renderTracks from "./components/renderTrack.js";
document.addEventListener('DOMContentLoaded', function() {

for( let i = 0; i<dataList.length; i++){
    for(let j = 0; j < dataList[i].tracks.length; j++){
        createPerformarce(dataList[i].tracks[j].performer)
    }
}

      for (let i=0;  i < dataList.length; i++){
        
      
           let audio =  document.querySelector('audio');
        
      };


      
  renderPlaylistTitle()
  renderTracks();
  for (let i=0;  i < dataList.length; i++){
    countByNumber(i, dataList)
    
}
modalSave();
});


