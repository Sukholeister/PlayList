import { dataList } from "./data.js";
import renderTracks from "./renderTrack.js";
let modalWindow = document.createElement('div');

export default function modalSave (text) {

   modalWindow.classList.add('modalSave')
   document.body.append(modalWindow)

   let button = document.createElement('button')
   button.textContent = 'Завантажити'
   modalWindow.append(button)

}



let select = document.createElement('select');
select.classList.add('selectPlaylists')
    modalWindow.append(select)

function windowSelect() {
    for (let i = 0; i < dataList.length; i++) {
        let option = document.createElement('option')
        option.append(dataList[i].title.nameList)
        select.append(option)
    }
}

    let input = document.createElement('input')
        input.type = 'file';
        input.accept = "audio/*"
        input.onchange = onchange
        modalWindow.append(input)

    function onchange () {
       let select =  document.getElementsByClassName('selectPlaylists')[0]
       var selectedIndex = select.selectedIndex;
       var selectedOption = select.options[selectedIndex].textContent;
       


        for (let i = 0; i < dataList.length; i++){
        
            if (dataList[i].title.nameList == selectedOption){
                let obj = {
                    performer: 'proverka',
                    nameTrack: 'Rap God',
                    images: 'img/eminem.jpg',
                    fileUrl: 'musik/eminem-RapGod.mp3',
                    }
                let audio = document.createElement('audio')
                audio.controls = true;
                audio.src = 'Ссилка на трек який загружений через інпут'
                dataList[i].tracks.push(obj)
                //перерендрити сторінку
             
                console.log(dataList[i].tracks);
                renderTracks()
            }

        }
    }

    windowSelect()

