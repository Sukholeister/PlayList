



import renderTracks from "./renderTrack.js";

let modalWindow = document.createElement('div');

function uploadTrack() {
    let dataListFromLocalStorage = localStorage.getItem('DataKey');
    let dataList = JSON.parse(dataListFromLocalStorage);
    
    let select = document.querySelector('.selectPlaylists');
    let selectedIndex = select.selectedIndex;
    let selectedOption = select.options[selectedIndex].textContent;

    // Оголошення флагу для відстеження того, чи вже оновлено плейлист
    let playlistUpdated = false;

    for (let i = 0; i < dataList.length; i++) {
        if (dataList[i].title.nameList === selectedOption) {
            let fileInput = document.querySelector('input[type="file"]');
            let file = fileInput.files[0];

            if (file) {
                let obj = {
                    nameTrack: file.name,
                    images: 'img/default.png',
                    fileUrl: URL.createObjectURL(file),
                };

                dataList[i].tracks.push(obj);

                // Оновлення данних в local storage після додавання нового треку
                localStorage.setItem('DataKey', JSON.stringify(dataList));

                // Викликати clearPlaylist та renderTracks тільки якщо плейлист ще не був оновлений
                
                    clearPlaylist();
                    renderTracks();
                
            }
        }
    }
}

function clearPlaylist() {
    let dataListFromLocalStorage = localStorage.getItem('DataKey');
let dataList = JSON.parse(dataListFromLocalStorage);

    for (let i = 0; i < dataList.length; i++) {
        let trackWrapperElement = document.querySelector(`.playlist-${i}`);
        if (trackWrapperElement) {
            trackWrapperElement.innerHTML = ''; // Видаліть вміст контейнера, якщо він існує
        }
    }
}

export default function modalSave() {
    let dataListFromLocalStorage = localStorage.getItem('DataKey');
    let dataList = JSON.parse(dataListFromLocalStorage);

    modalWindow.classList.add('modalSave');
    document.body.append(modalWindow);

    let button = document.createElement('button');
    button.textContent = 'Завантажити';
    button.addEventListener('click', () => {
        uploadTrack();
    });
    modalWindow.append(button);

    let select = document.createElement('select');
    select.classList.add('selectPlaylists');
    modalWindow.append(select);

    function windowSelect() {
        for (let i = 0; i < dataList.length; i++) {
            let option = document.createElement('option');
            option.append(dataList[i].title.nameList);
            select.append(option);
        }
    }

    let input = document.createElement('input');
    input.type = 'file';
    input.accept = 'audio/*';
    input.onchange = onchange;
    modalWindow.append(input);

 

  
    
    windowSelect();
}
