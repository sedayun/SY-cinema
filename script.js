```javascript
function createCalendar(){

    const calendar =
        document.getElementById("calendar");

    const today = new Date();

    for(let i=0;i<30;i++){

        const date = new Date(today);
        date.setDate(today.getDate()+i);

        const day = document.createElement("div");
        day.className = "day";

        // 오늘 날짜인 경우
        let titleStyle = "";
        let titleText = `${date.getMonth()+1}/${date.getDate()}`;

        if(i === 0){
            titleStyle = "color:red; font-weight:bold;";
            titleText = `오늘 (${date.getMonth()+1}/${date.getDate()})`;
        }

        day.innerHTML =
            `<div class="day-title" style="${titleStyle}">
                ${titleText}
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
