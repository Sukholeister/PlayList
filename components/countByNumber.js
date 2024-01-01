let dataListFromLocalStorage = localStorage.getItem('DataKey');
    let dataList = JSON.parse(dataListFromLocalStorage);
    
export default function countByNumber () {

    for (let i=0;  i < dataList.length; i++){
            let result = 0;
            let counterNumber = document.querySelector(`.deskr-title-${i}`)

                    result = dataList[i].tracks.length      
                    
                    let allTimeTrackElement = document.createElement('div')
                    allTimeTrackElement.classList.add('all-time-track')
                    allTimeTrackElement.append(result + ' tracks');
                    counterNumber.append(allTimeTrackElement)
        }
    }