import './Popup.css'

//--Создаем на чистом JS, ибо нужно обратиться к document
export default function Popup(title, buttons) {  
    let html = "<h1>"+title+"</h1>"; 
    //--create overlay
    const overlay = document.createElement('div');
    overlay.classList.add("overlay");
    document.body.insertBefore(overlay, document.getElementById("root"));

    //--create popup
    const popup = document.createElement('div');
    popup.classList.add("popup");

    buttons.forEach((value)=>{
        html=html+`<button style=${(value.style ? value.style : 'null')} onClick=${value.handler}>${value.caption}</button>`;
    });


    popup.innerHTML = html;
    document.body.insertBefore(popup, document.getElementById("root"));

    //--events for close popup
    overlay.addEventListener('click',()=>closePopup());
    popup.querySelectorAll('button').forEach(element => {
        element.addEventListener('click',()=>closePopup());
    });



    //--function for close popup
    function closePopup() {
        document.body.removeChild(popup);
        document.body.removeChild(overlay);
    }
}

