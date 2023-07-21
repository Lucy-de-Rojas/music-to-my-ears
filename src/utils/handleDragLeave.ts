import {DragEvent} from 'react';




export function handleDragLeave(event:DragEvent) {


        event.preventDefault()
        event.stopPropagation()


        let container = (document.querySelector('.Home_container__tlJEC') as HTMLElement);



        // styling:
        container.style.backgroundColor = '#111420';
        container.innerHTML = 'Drag File'


        console.log('dragged exited')




}