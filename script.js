let input = document.querySelector('.input');
let btn = document.querySelector('.send');
let note = document.querySelector('.note');
let list = document.querySelector('.list');
let darkLight = document.querySelector('.lightDark');
let body = document.body
let quit = document.querySelector('.quit');
let eMaktab = document.querySelector('.eMaktab');


btn.addEventListener('click', () => {
    if (input.value.trim() === '') {
        alert('Что-то напиши животное!');
        return;
    }

    let li = document.createElement('li');
    li.classList.add('note');
    // li.textContent = input.value + ' 🐟';
    list.appendChild(li);

    let p = document.createElement('p');
    p.textContent = input.value + ' 🐟';
    li.appendChild(p);

    let editDelete = document.createElement('div');
    editDelete.classList.add('editDelete');
    li.appendChild(editDelete);

    let edit = document.createElement('span');
    edit.textContent = '🖊️';
    editDelete.appendChild(edit);
    edit.classList.add('edit');

    edit.addEventListener('click', () => {
        let inputEdit = document.createElement('input');
        inputEdit.value = p.textContent;
        inputEdit.classList.add('inputEdit');
        inputEdit.placeholder = 'Что тебе не нравится ?';
        li.appendChild(inputEdit);
        p.textContent = '';
        let submit = document.createElement('input');
        submit.type = 'submit';
        submit.value = 'save';
        submit.classList.add('submitEdit');
        li.appendChild(submit);
        submit.addEventListener('click', () => {
            p.textContent = inputEdit.value + '🐟';
            li.removeChild(inputEdit);
            li.removeChild(submit);
        });
        // p.textContent = prompt('Что тебе не нравится ?') + ' 🐟';
    });

        p.addEventListener('dblclick', () => {
        let inputEdit = document.createElement('input');
        inputEdit.value = p.textContent;
        inputEdit.classList.add('inputEdit');
        inputEdit.placeholder = 'Что тебе не нравится ?';
        li.appendChild(inputEdit);
        p.textContent = '';
        let submit = document.createElement('input');
        submit.type = 'submit';
        submit.value = 'save';
        submit.classList.add('submitEdit');
        li.appendChild(submit);
        submit.addEventListener('click', () => {
            p.textContent = inputEdit.value + '🐟';
            li.removeChild(inputEdit);
            li.removeChild(submit);
        });
    });

    let delt = document.createElement('span');
    delt.classList.add('delete');
    delt.textContent = '🗑️';
    delt.classList.add('delt');
    editDelete.appendChild(delt);

    delt.addEventListener('click', () => {
        list.removeChild(li);
    });

    // input.value = ''
    // if (input.value === '') {
    //     alert('Что-то напиши животное!');
    // }

    input.value = "";
})



darkLight.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    controlist2.classList.toggle('controlist2');
    darkLight.classList.toggle('dark-darkLight');
    if (body.classList.contains('dark-mode')) {
        darkLight.textContent = '☀️';
    } else {
        darkLight.textContent = '🌕';
    }
})

quit.addEventListener('click', () => {
    window.close();
})

eMaktab.addEventListener('click', () => {
    window.open('https://emaktab.uz/', '_blank');
})

// GPT
// ----------------------------------------
const sound = document.getElementById("clickSound");

document.querySelector(".sound").addEventListener("click", () => {
  sound.currentTime = 0; // чтобы можно было нажимать быстро
  sound.play();
});
// ----------------------------------------