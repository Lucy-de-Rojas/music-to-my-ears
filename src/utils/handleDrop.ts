import {DragEvent} from 'react';


export async function handleDrop(event:DragEvent) {


        const apiLink = "/api/musicToMyEars";


        event.preventDefault()
        event.stopPropagation()

        console.clear()


        // styling:
        let container = (document.querySelector('.Home_container__tlJEC') as HTMLElement);

        container.style.backgroundColor = 'white'
        container.innerHTML = 'dropped!';
        container.style.width = '60%';
        container.style.padding = '3.12em 1.87em'






        // getting data:
        let file = event.dataTransfer.files[0];
        console.log('file: 🟥', file);
        console.log('file: 🟥', file.name);

        if(file.type == 'audio/wav') {
                console.log('it is WAV!')
        }



        // sending to the back:
        const body = new FormData();
        body.append("file", file);

        console.log('body before to back:',body.values());


        // 🟥🟥🟥🟥🟥 FETCH:
        let response = await fetch("/api/musicToMyEars",{
                method:"POST",
                body:body,
        });




}