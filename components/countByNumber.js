let resultTime = 0;
var trackInMinutes = 0;
var trackInSeconds = 0;

export function allTimeMusik(track){
    var audio = new Audio(track);
        audio.addEventListener('loadeddata', ()=>{
            var trackDurationInSeconds = audio.duration;
            resultTime += trackDurationInSeconds

            trackInMinutes = resultTime / 60;
            trackInMinutes = Math.floor(trackInMinutes)
            trackInSeconds = Math.floor(trackDurationInSeconds % 60);
        })

}


export function countByNumber (descrTitleWrapper) {

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