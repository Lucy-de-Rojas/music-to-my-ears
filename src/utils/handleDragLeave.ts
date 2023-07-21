import {DragEvent} from 'react';




export function handleDragLeave(event:DragEvent) {


        event.preventDefault()
        event.stopPropagation()


        let container = (document.querySelector('.Home_container__tlJEC') as HTMLElement);



        // styling:
        container.style.backgroundColor = 'white';
        container.innerHTML = 'exited'
        container.style.width = '60%';
        container.style.padding = '3.12em 1.87em'



        console.log('dragged exited')




}