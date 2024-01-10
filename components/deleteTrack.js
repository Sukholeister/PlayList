import renderTracks from "./renderTrack.js";
let targetId = 0;
const dataListFromLocalStorage = localStorage.getItem('DataKey');
const dataListLocal = JSON.parse(dataListFromLocalStorage);
  
export default function deleteTrack() {
    let buttonDelete = document.querySelectorAll('.button-delete');
    
    buttonDelete.forEach((item) => {
        item.addEventListener('click', () => {
            targetId = item.id;
            console.log(targetId);
            removeTrackById(targetId);
            
        });
    });
}

// Функція для видалення трека з масиву та оновлення localStorage
function removeTrackById(targetId) {
    if (!targetId) return; // перевірка на валідність id

    if (dataListLocal) {
        for (let i = 0; i < dataListLocal.length; i++) {
            const currentTitle = dataListLocal[i].title;
            const currentTracks = dataListLocal[i].tracks;

            // Видаляємо трек з масиву tracks, використовуючи filter
            dataListLocal[i].tracks = currentTracks.filter(track => track.id !== targetId);

            // Перевіряємо, чи поточний title.title має те ж саме id, як і заданий targetId
            if (currentTitle.id === targetId) {
                // Якщо так, то видаляємо поточний title.title
                dataListLocal.splice(i, 1);
                break;
            }
        }

        // Оновлюємо localStorage
        localStorage.setItem('DataKey', JSON.stringify(dataListLocal));

      
    }
}
