```javascript
let count = 0;

function calculateDday(date){
    const today = new Date();
    const target = new Date(date);

    today.setHours(0,0,0,0);
    target.setHours(0,0,0,0);

    const diff =
        Math.ceil((target - today)/(1000*60*60*24));

    return diff >= 0 ? "D-" + diff : "D+" + Math.abs(diff);
}

function addSchedule(){

    const type =
        document.getElementById("examType").value;

    const name =
        document.getElementById("subjectName").value;

    const date =
        document.getElementById("examDate").value;

    if(name === "" || date === ""){
        alert("모든 항목을 입력하세요.");
        return;
    }

    const item = document.createElement("div");
    item.className = "schedule-item";
    item.draggable = true;

    item.innerHTML =
        `<strong>${name}</strong><br>
        ${type}<br>
        ${calculateDday(date)}`;

    item.id = "item" + count++;

    item.addEventListener("dragstart", function(e){
        e.dataTransfer.setData("text", item.innerHTML);
    });

    document.getElementById("scheduleList")
        .appendChild(item);

    document.getElementById("subjectName").value = "";
    document.getElementById("examDate").value = "";
}

function createCalendar(){

    const calendar =
        document.getElementById("calendar");

    const today = new Date();

    for(let i=0;i<30;i++){

        const date = new Date(today);
        date.setDate(today.getDate()+i);

        const day = document.createElement("div");
        day.className = "day";

        day.innerHTML =
            `<div class="day-title">
            ${date.getMonth()+1}/${date.getDate()}
            </div>`;

        day.addEventListener("dragover", function(e){
            e.preventDefault();
        });

        day.addEventListener("drop", function(e){

            e.preventDefault();

            const data =
                e.dataTransfer.getData("text");

            const tag =
                document.createElement("div");

            tag.className = "tag";
            tag.innerHTML = data;

            tag.onclick = function(){
                tag.remove();
            };

            day.appendChild(tag);
        });

        calendar.appendChild(day);
    }
}

createCalendar();
```
