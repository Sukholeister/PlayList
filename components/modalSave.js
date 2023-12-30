import { dataList } from "./data.js";
import renderTracks from "./renderTrack.js";

let modalWindow = document.createElement('div');

export default function modalSave(text) {
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

    function clearPlaylist() {
        for (let i = 0; i < dataList.length; i++) {
            let trackWrapperElement = document.querySelector(`.playlist-${i}`);
    
            // Перевірте, чи елемент існує перед видаленням
         
                trackWrapperElement.innerHTML = ''; // Видаліть вміст контейнера
            
        }
    }

    function uploadTrack() {
        let select = document.querySelector('.selectPlaylists');
        let selectedIndex = select.selectedIndex;
        let selectedOption = select.options[selectedIndex].textContent;

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
                    clearPlaylist()
                    renderTracks();
                }
            }
        }
    }

   

    windowSelect();
}