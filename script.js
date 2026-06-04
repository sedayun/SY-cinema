let count = 0;

// D-Day 계산
function calculateDday(date){
    const today = new Date();
    const target = new Date(date);

    today.setHours(0,0,0,0);
    target.setHours(0,0,0,0);

    const diff = Math.ceil(
        (target - today) / (1000 * 60 * 60 * 24)
    );

    return diff >= 0
        ? "D-" + diff
        : "D+" + Math.abs(diff);
}

// 일정 추가
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

    // 드래그 시작
    item.addEventListener("dragstart", function(e){
        e.dataTransfer.setData(
            "text/plain",
            item.innerHTML
        );
    });

    document
        .getElementById("scheduleList")
        .appendChild(item);

    document.getElementById("subjectName").value = "";
    document.getElementById("examDate").value = "";
}

// 달력 생성
function createCalendar(){

    const calendar =
        document.getElementById("calendar");

    const today = new Date();

    for(let i=0;i<30;i++){

        const date = new Date(today);
        date.setDate(today.getDate()+i);

        const day = document.createElement("div");
        day.className = "day";

        let titleStyle = "";
        let titleText =
            `${date.getMonth()+1}/${date.getDate()}`;

        // 오늘 날짜 강조
        if(i === 0){
            titleStyle =
                "color:red;font-weight:bold;";
            titleText =
                `오늘 (${date.getMonth()+1}/${date.getDate()})`;

            day.style.border =
                "3px solid red";
            day.style.backgroundColor =
                "#ffe5e5";
        }

        day.innerHTML =
            `<div class="day-title"
            style="${titleStyle}">
            ${titleText}
            </div>`;

        // 드래그 허용
        day.addEventListener("dragover", function(e){
            e.preventDefault();
        });

        // 드롭
        day.addEventListener("drop", function(e){

            e.preventDefault();

            const data =
                e.dataTransfer.getData("text/plain");

            const tag =
                document.createElement("div");

            tag.className = "tag";
            tag.innerHTML = data;

            // 클릭 시 삭제
            tag.addEventListener("click", function(){
                if(confirm("일정을 삭제하시겠습니까?")){
                    tag.remove();
                }
            });

            day.appendChild(tag);
        });

        calendar.appendChild(day);
    }
}

// 실행
createCalendar();
