
import buttonOpen  from "./addTrack.js";
import renderTracks from "./renderTrack.js";
import countByNumber from "./countByNumber.js";

let modalWindow = document.createElement('div');

function uploadTrack(dataList) {
    
    let select = document.querySelector('.selectPlaylists');
    let selectedIndex = select.selectedIndex;
    let selectedOption = select.options[selectedIndex].textContent;

    // Оголошення флагу для відстеження того, чи вже оновлено плейлист

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


                console.log(dataList);
                // Оновлення данних в local storage після додавання нового треку
                localStorage.setItem('DataKey', JSON.stringify(dataList));

                // Викликати clearPlaylist та renderTracks тільки якщо плейлист ще не був оновлений
                
                    clearPlaylist();
                    renderTracks();
                    
                
            }
        }
    }
    
}
   


function closeModalWindow () {

    let opasity = document.createElement('div');
    opasity.classList.add('opasity');
    document.body.append(opasity)


    let modalSave = document.querySelector('.modalSave')
    let closeButton = document.createElement('img');
    closeButton.src = 'img/remove.png'
    
    closeButton.classList.add('close-button');
    modalSave.append(closeButton)

    opasity.addEventListener('click', ()=>{

        opasity.classList.remove('active')
        modalSave.classList.remove('active')
    })

    closeButton.addEventListener('click', ()=>{

        modalSave.classList.remove('active')
        opasity.classList.remove('active')
       
    })

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




function windowSelect(select) {

    const dataListFromLocalStorage = localStorage.getItem('DataKey');
    const dataList = JSON.parse(dataListFromLocalStorage);

    console.log(dataList);
    for (let i = 0; i < dataList.length; i++) {
        let option = document.createElement('option');
        
        option.append(dataList[i].title.nameList);
        select.append(option);
    }
}




export default function modalSave(dataList) {
    
    modalWindow.classList.add('modalSave');
    document.body.append(modalWindow);

    let button = document.createElement('button');
    button.textContent = 'Завантажити';
        button.addEventListener('click', () => {
            
            const elementsToRemove = document.querySelectorAll('.all-time-track');
            elementsToRemove.forEach(element => {
                element.remove();
            });

            const opasity = document.querySelector('.opasity')
            const modalSave = document.querySelector('.modalSave')
            
            modalSave.classList.remove('active');
            opasity.classList.remove('active');

            uploadTrack(dataList);
            countByNumber(dataList)
        });
    

    let select = document.createElement('select');
    select.classList.add('selectPlaylists');
    
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = 'audio/*';
    input.onchange = onchange;

    closeModalWindow();
    modalWindow.append(input);
    modalWindow.append(select);
    modalWindow.append(button);
    buttonOpen();
    windowSelect(select);

}
