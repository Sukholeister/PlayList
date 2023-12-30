export default function countByNumber (index, dataList) {
    let result = 0;
    let counterNumber = document.querySelector(`.deskr-title-${index}`)

            result = dataList[index].tracks.length      
               
            let allTimeTrackElement = document.createElement('div')
            allTimeTrackElement.classList.add('all-time-track')
            allTimeTrackElement.append(result + ' tracks');
            counterNumber.append(allTimeTrackElement)
}