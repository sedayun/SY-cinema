let count = 0;

function calculateDday(date){

    const today = new Date();
    const target = new Date(date);

    today.setHours(0,0,0,0);
    target.setHours(0,0,0,0);

    const diff =
        Math.ceil(
            (target - today) /
            (1000*60*60*24)
        );

    return diff >= 0
        ? "D-" + diff
        : "D+" + Math.abs(diff);
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

    const item =
        document.createElement("div");

    const today =
        new Date();

    const examDate =
        new Date(date);

    today.setHours(0,0,0,0);
    examDate.setHours(0,0,0,0);

    if(today.getTime() === examDate.getTime()){
        item.className =
            "schedule-item today-subject";
    }
    else{
        item.className =
            "schedule-item";
    }

    item.draggable = true;

    item.innerHTML =
        `<strong>${name}</strong><br>
        ${type}<br>
        ${calculateDday(date)}`;

    item.id =
        "item" + count++;

    item.addEventListener(
        "dragstart",
        function(e){

            e.dataTransfer.setData(
                "text/plain",
                item.innerHTML
            );

        }
    );

    document
        .getElementById("scheduleList")
        .appendChild(item);

    document
        .getElementById("subjectName")
        .value = "";

    document
        .getElementById("examDate")
        .value = "";
}

function createCalendar(){

    const calendar =
        document.getElementById("calendar");

    calendar.innerHTML = "";

    const year =
        new Date().getFullYear();

    const month =
        parseInt(
            document.getElementById("monthSelect").value
        );

    const days =
        new Date(
            year,
            month + 1,
            0
        ).getDate();

    for(let i=1;i<=days;i++){

        const day =
            document.createElement("div");

        day.className =
            "day";

        day.innerHTML =
            `<div class="day-title">
                ${month+1}/${i}
            </div>`;

        day.addEventListener(
            "dragover",
            function(e){
                e.preventDefault();
            }
        );

        day.addEventListener(
            "drop",
            function(e){

                e.preventDefault();

                const data =
                    e.dataTransfer.getData(
                        "text/plain"
                    );

                const tag =
                    document.createElement("div");

                tag.className =
                    "tag";

                tag.innerHTML =
                    data;

                tag.onclick =
                    function(){

                        if(confirm("삭제하시겠습니까?")){
                            tag.remove();
                        }

                    };

                day.appendChild(tag);

            }
        );

        calendar.appendChild(day);
    }
}

window.onload = function(){

    document
        .getElementById("monthSelect")
        .value =
        new Date().getMonth();

    createCalendar();

};
