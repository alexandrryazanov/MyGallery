const startPhotos = [
    {
        url: "http://img03.carclub.ru/files/gallery/devushki_taipei_intl_auto_show_2020/orig/devushki_taipei_intl_auto_show_2020_1.jpg",
        albums: ['All']
    },
    {
        url: "http://img03.carclub.ru/files/gallery/devushki_taipei_intl_auto_show_2020/orig/devushki_taipei_intl_auto_show_2020_2.jpg",
        albums: ['All','Camera']
    },
    {
        url: "http://img03.carclub.ru/files/gallery/devushki_taipei_intl_auto_show_2020/orig/devushki_taipei_intl_auto_show_2020_3.jpg",
        albums: ['All']
    },
    {
        url: "http://img03.carclub.ru/files/gallery/devushki_taipei_intl_auto_show_2020/orig/devushki_taipei_intl_auto_show_2020_4.jpg",
        albums: ['All','Camera']
    },
    {
        url: "http://img03.carclub.ru/files/gallery/devushki_taipei_intl_auto_show_2020/orig/devushki_taipei_intl_auto_show_2020_5.jpg",
        albums: ['All','Camera']
    },
    {
        url: "http://img03.carclub.ru/files/gallery/devushki_taipei_intl_auto_show_2020/orig/devushki_taipei_intl_auto_show_2020_6.jpg",
        albums: ['All','Camera']
    },
    {
        url: "http://img03.carclub.ru/files/gallery/devushki_taipei_intl_auto_show_2020/orig/devushki_taipei_intl_auto_show_2020_7.jpg",
        albums: ['All', 'Screenshots']
    },
    {
        url: "http://img03.carclub.ru/files/gallery/devushki_taipei_intl_auto_show_2020/orig/devushki_taipei_intl_auto_show_2020_8.jpg",
        albums: ['All','Camera']
    },
    {
        url: "http://img03.carclub.ru/files/gallery/devushki_taipei_intl_auto_show_2020/orig/devushki_taipei_intl_auto_show_2020_9.jpg",
        albums: ['All','Camera']
    },
    {
        url: "http://img03.carclub.ru/files/gallery/devushki_taipei_intl_auto_show_2020/orig/devushki_taipei_intl_auto_show_2020_10.jpg",
        albums: ['All']
    },
    {
        url: "http://img03.carclub.ru/files/gallery/devushki_taipei_intl_auto_show_2020/orig/devushki_taipei_intl_auto_show_2020_11.jpg",
        albums: ['All','Camera']
    },
    {
        url: "http://img03.carclub.ru/files/gallery/devushki_taipei_intl_auto_show_2020/orig/devushki_taipei_intl_auto_show_2020_12.jpg",
        albums: ['All']
    },
    {
        url: "http://img03.carclub.ru/files/gallery/devushki_taipei_intl_auto_show_2020/orig/devushki_taipei_intl_auto_show_2020_13.jpg",
        albums: ['All']
    },
    {
        url: "http://img03.carclub.ru/files/gallery/devushki_taipei_intl_auto_show_2020/orig/devushki_taipei_intl_auto_show_2020_14.jpg",
        albums: ['All']
    },
    {
        url: "http://img03.carclub.ru/files/gallery/devushki_taipei_intl_auto_show_2020/orig/devushki_taipei_intl_auto_show_2020_15.jpg",
        albums: ['All']
    },
    {
        url: "http://img03.carclub.ru/files/gallery/devushki_taipei_intl_auto_show_2020/orig/devushki_taipei_intl_auto_show_2020_16.jpg",
        albums: ['All']
    },
    {
        url: "http://img03.carclub.ru/files/gallery/devushki_taipei_intl_auto_show_2020/orig/devushki_taipei_intl_auto_show_2020_17.jpg",
        albums: ['All','Screenshots']
    },
    {
        url: "http://img03.carclub.ru/files/gallery/devushki_taipei_intl_auto_show_2020/orig/devushki_taipei_intl_auto_show_2020_18.jpg",
        albums: ['All','Screenshots']
    },
    {
        url: "http://img03.carclub.ru/files/gallery/devushki_taipei_intl_auto_show_2020/orig/devushki_taipei_intl_auto_show_2020_19.jpg",
        albums: ['All']
    },
    {
        url: "http://img03.carclub.ru/files/gallery/devushki_taipei_intl_auto_show_2020/orig/devushki_taipei_intl_auto_show_2020_20.jpg",
        albums: ['All']
    },
   ]

const albums = [
    {name: 'All'},
    {name: 'Camera'},
    {name: 'Video'},
    {name: 'Screenshots'}
]


function photosFromAlbum(albumName, photoArray) {
    console.log("новый массив");
    console.log(photoArray);
    if(photoArray===undefined) photoArray=startPhotos;
    if(albumName==='') return photoArray;
    return photoArray.filter(value=>value.albums.includes(albumName));
}

export { photosFromAlbum, albums }