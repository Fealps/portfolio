import React, { useState } from "react";
import "./Lang.css";


export default function Lang() {

    const defaultLang = localStorage.getItem('lang')  
    
    function LangEvent(){
        if(defaultLang == 'pt-br'){
            localStorage.setItem('lang', 'en')
            window.location.reload();
        }else{
            localStorage.setItem('lang', 'pt-br')
            window.location.reload();
        }
    };

    
    return (
        <button onClick={LangEvent} id="langButton">
            <i class="fas fa-globe" aria-hidden="true">
            </i>
        </button>
    );
    
}
