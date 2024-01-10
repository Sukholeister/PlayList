
export let dataList = [
    {
        
        title: {
            id:  crypto.randomUUID(),
            images:'img/img1.png',
            nameList: 'Hip-Hop Hits',
            performers:'Snoop Dog'
        },

        tracks: [ 
            {
            id:  crypto.randomUUID(),
            performer: 'Eminem',
            nameTrack: 'Rap God',
            images: 'img/eminem.jpg',
            fileUrl: 'musik/eminem-RapGod.mp3',
            
            },
    
            {
            id:  crypto.randomUUID(),
            performer: '50 Cent',
            nameTrack: 'Candy Shop',
            images: 'img/50cent.jpg',
            fileUrl: 'musik/50centCandy.mp3',            
            
            },
            {   
                id:  crypto.randomUUID(),
                performer: '50 Cent',
                nameTrack: 'Candy Shop',
                images: 'img/50cent.jpg',
                fileUrl: 'musik/50centCandy.mp3',            
                
            },
            {       
                    id:  crypto.randomUUID(),
                    performer: '50 Cent',
                    nameTrack: 'Candy Shop',
                    images: 'img/50cent.jpg',
                    fileUrl: 'musik/50centCandy.mp3',            
                    
            },
                    
      
        ]
    },
    {
        title: {
            id:  crypto.randomUUID(),
            images:'img/img1.png',
            nameList: 'elctro hits',
            timeAllTracks: 790,
            performers:'Snoop Dog'
        },

        tracks: [ 
            {
            id:  crypto.randomUUID(),
            performer: 'vasik',
            nameTrack: 'Rap God',
            images: 'img/eminem.jpg',
            fileUrl: 'musik/eminem-RapGod.mp3',
            
            },
    
            {
            id:  crypto.randomUUID(),
            performer: ' vasik',
            nameTrack: 'Candy Shop',
            images: 'img/50cent.jpg',
            fileUrl: 'musik/50centCandy.mp3',            
            
            }
         
      
        ]
    },
    {
        title: {
            id:  crypto.randomUUID(),
            images:'img/img1.png',
            nameList: 'POP hits',
            timeAllTracks: 790,
            performers:'Snoop Dog'
        },

        tracks: [ 
            {
                id:  crypto.randomUUID(),
            performer: 'vasik',
            nameTrack: 'Rap God',
            images: 'img/eminem.jpg',
            fileUrl: 'musik/eminem-RapGod.mp3',
            
            },
    
            {
            id:  crypto.randomUUID(),
            performer: ' vasik',
            nameTrack: 'Candy Shop',
            images: 'img/50cent.jpg',
            fileUrl: 'musik/50centCandy.mp3',            
            
            }
         
      
        ]
    },
    {
        title: {
            id:  crypto.randomUUID(),
            images:'img/img1.png',
            nameList: 'Jass hits',
            timeAllTracks: 790,
            performers:'Snoop Dog'
        },

        tracks: [ 
            {
                id:  crypto.randomUUID(),
            performer: 'SnoopDogg',
            nameTrack: 'Rap God',
            images: 'img/eminem.jpg',
            fileUrl: 'musik/eminem-RapGod.mp3',
            
            },
    
            {
            id:  crypto.randomUUID(),
            performer: ' vasik',
            nameTrack: 'Candy Shop',
            images: 'img/50cent.jpg',
            fileUrl: 'musik/50centCandy.mp3',            
            
            }
         
      
        ]
    }
];


let dataListLocal = JSON.stringify(dataList);
if(!dataListLocal){
    localStorage.setItem('DataKey', dataListLocal);
}


dataList[0].tracks.map(item => console.log(item.id))


