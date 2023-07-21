import {DragEvent} from 'react';





export function handleDragOver(event:DragEvent) {


        event.preventDefault()
        event.stopPropagation()



        // styling:
        let container = (document.querySelector('.Home_container__tlJEC') as HTMLElement);

        container.style.backgroundColor = 'red';

        container.innerHTML = 'entered';
        container.style.width = '70%';
        container.style.padding = '5.12em 1.87em'





        console.log('drag entereded!');
}