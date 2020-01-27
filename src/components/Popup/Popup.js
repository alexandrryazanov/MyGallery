import React from 'react'
import ReactDOM from 'react-dom'
import './Popup.css'

export default function Popup(props) {
    return (
        ReactDOM.createPortal(
            <>
            <div className='overlay' onClick={()=>props.visible(false)}/>
            <div className='popup'>
                <h1>{props.title}</h1>

                {props.buttons.map((button,index)=>
                    <button
                        key={index}
                        style={(button.style ? button.style : null)}
                        onClick={()=>anyButtonClick(button)}
                    >
                        {button.caption}
                    </button>
                )}
            </div>
            </>,
            document.getElementById('root')
        )
    )

    function anyButtonClick(button) {
        props.visible(false);
        if(button.handler!==undefined) button.handler();
    }
}

