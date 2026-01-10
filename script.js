let input = document.querySelector('.input');
let btn = document.querySelector('.send');
let list = document.querySelector('.list');
let darkLight = document.querySelector('.lightDark');
let body = document.body;
let quit = document.querySelector('.quit');
let eMaktab = document.querySelector('.eMaktab');

//------------------- LOCAL STORAGE
let notes = JSON.parse(localStorage.getItem("notes")) || [];
let theme = localStorage.getItem("theme") || ("light");

//-------------------- Theme
if (theme === "dark") {
    body.classList.add("dark-mode");
    darkLight.textContent = "☀️";
} else {
    darkLight.textContent = "🌕";
}

darkLight.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    darkLight.classList.toggle('dark-darkLight');

    if (body.classList.contains('dark-mode')) {
        darkLight.textContent = '☀️';
        localStorage.setItem("theme", "dark");
    } else {
        darkLight.textContent = '🌕';
        localStorage.setItem("theme", "light");
    }
});

//--------------------СОХРАНЕНИЕ
function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

//-------------------- EDIT NOTE
function editNote(index) {
    renderNotes();
    let li = list.children[index];
    let p = li.querySelector("p");

    let inputEdit = document.createElement('input');
    inputEdit.value = notes[index];
    inputEdit.classList.add('inputEdit');

    let submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'save';
    submit.classList.add('submitEdit');

    p.textContent = '';
    li.appendChild(inputEdit);
    li.appendChild(submit);

    submit.addEventListener('click', () => {
        notes[index] = inputEdit.value;
        saveNotes();
        renderNotes();
    });
}

//-------------------- render 
function renderNotes() {
    list.innerHTML = "";

    notes.forEach((text, index) => {
        let li = document.createElement('li');
        li.classList.add('note');

        let p = document.createElement('p');
        p.textContent = text + ' 🐟';
        li.appendChild(p);

        let editDelete = document.createElement('div');
        editDelete.classList.add('editDelete');
        li.appendChild(editDelete);

        // ✏️ EDIT
        let edit = document.createElement('span');
        edit.textContent = '🖊️';
        edit.classList.add('edit');
        editDelete.appendChild(edit);

        edit.addEventListener('click', () => editNote(index));
        p.addEventListener('dblclick', () => editNote(index));

        // 🗑️ DELETE
        let delt = document.createElement('span');
        delt.textContent = '🗑️';
        delt.classList.add('delt');
        editDelete.appendChild(delt);

        delt.addEventListener('click', () => {
            notes.splice(index, 1);
            saveNotes();
            renderNotes();
        });

        list.appendChild(li);
    });
}

//--------------------------------- ADD TEXT beast
btn.addEventListener('click', () => {
    if (input.value.trim() === '') {
        alert('Что-то напиши животное!');
        return;
    }

    notes.push(input.value);
    saveNotes();
    renderNotes();
    input.value = "";
});

renderNotes();

//--------------------------------- quit and eMaktab
quit.addEventListener('click', () => {
    window.close();
});

eMaktab.addEventListener('click', () => {
    window.open('https://emaktab.uz/', '_blank');
});

//--------------------------------- sound
const sound = document.getElementById("clickSound");
let soundBtn = document.querySelector(".sound");

if (sound && soundBtn) {
    soundBtn.addEventListener("click", () => {
        sound.currentTime = 0;
        sound.play();
    });
}

//--------------------------------- clock
const clock = document.querySelector(".clock");

if (clock) {
    const time = document.createElement("div");
    time.classList.add("time");
    clock.appendChild(time);

    function updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const mins = String(now.getMinutes()).padStart(2, "0");
        const secs = String(now.getSeconds()).padStart(2, "0");
        time.textContent = `${hours}:${mins}:${secs}`;
    }

    updateTime();
    setInterval(updateTime, 1000);
}
