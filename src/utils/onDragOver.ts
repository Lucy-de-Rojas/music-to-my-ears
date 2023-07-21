import {DragEvent} from 'react';





export function handleDragOver(event:DragEvent) {


        event.preventDefault()
        event.stopPropagation()



        // styling:
        let container = (document.querySelector('.Home_container__tlJEC') as HTMLElement);

        container.style.backgroundColor = '#222633';
        container.innerHTML = 'Drop file now';


        console.log('drag entereded!');
}