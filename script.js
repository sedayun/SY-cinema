let currentMovie = "";
let reviews = [];

function showMovie(movie) {

    currentMovie = movie;

    document.getElementById("movie-list").style.display = "none";
    document.getElementById("movie-detail").style.display = "block";

    if (movie == "군체") {

        document.getElementById("detail-title").innerText = "군체";
        document.getElementById("detail-poster").src = "m1.jpg";
        document.getElementById("detail-genre").innerText = "장르 : 공포 / 스릴러";
        document.getElementById("detail-rating").innerText = "평점 : ★ 4.2";
        document.getElementById("detail-story").innerText =
            "서울 도심 초고층 빌딩에서 집단 감염사태가 발생, 건물이 봉쇄된다. 생존자들은 진화하는 감염자들을 피해 옥상으로 향하지만, 새로운 위협이 그들을 기다리고 있다.";
    }

    else if (movie == "프로젝트 헤일메리") {

        document.getElementById("detail-title").innerText = "프로젝트 헤일메리";
        document.getElementById("detail-poster").src = "m2.jpg";
        document.getElementById("detail-genre").innerText = "장르 : SF";
        document.getElementById("detail-rating").innerText = "평점 : ★ 4.9";
        document.getElementById("detail-story").innerText =
            "우주에서 홀로 깨어난 과학교사 '그레이스'. 죽어가는 태양으로부터 지구를 구하기 위한 마지막 미션이 시작된다.";
    }

    else if (movie == "클래식") {

        document.getElementById("detail-title").innerText = "클래식";
        document.getElementById("detail-poster").src = "m3.jpg";
        document.getElementById("detail-genre").innerText = "장르 : 로맨스";
        document.getElementById("detail-rating").innerText = "평점 : ★ 4.6";
        document.getElementById("detail-story").innerText =
            "친구의 편지를 대신 써주다 자신의 감정을 고백하게 된 지혜. 엇갈린 사랑과 오해 속에서 두 세대에 걸쳐 피어나는 아름다운 로맨스.";
    }

    else {

        document.getElementById("detail-title").innerText = "스타워즈 6";
        document.getElementById("detail-poster").src = "m4.jpg";
        document.getElementById("detail-genre").innerText = "장르 : SF";
        document.getElementById("detail-rating").innerText = "평점 : ★ 4.8";
        document.getElementById("detail-story").innerText =
            "루크 스카이워커는 친구 한 솔로를 구하고 은하 제국의 새로운 죽음의 별을 막기 위해 반란 연합과 마지막 결전에 나선다. 스타워즈 오리진널 트릴로지의 마지막 영화";
    }

    displayReviews();
}

function goHome() {

    document.getElementById("movie-list").style.display = "block";
    document.getElementById("movie-detail").style.display = "none";
}

function addReview() {

    let rating = document.getElementById("reviewRating").value;
    let content = document.getElementById("reviewContent").value;

    if (content == "") {

        alert("리뷰 내용을 입력하세요.");
        return;
    }

    reviews.push({
        movie: currentMovie,
        rating: rating,
        content: content
    });

    alert("리뷰가 등록되었습니다.");

    document.getElementById("reviewContent").value = "";

    displayReviews();
}

function displayReviews() {

    let html = "";

    for (let i = 0; i < reviews.length; i++) {

        if (reviews[i].movie == currentMovie) {

            html += `
<div class="review-card">
    <h3>익명</h3>
    <p>${reviews[i].rating}</p>
    <p>${reviews[i].content}</p>
</div>
`;
        }
    }

    document.getElementById("reviewList").innerHTML = html;
}