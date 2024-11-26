<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>숫자 야구</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
<script type="text/javascript" src="./js/numbaseball.js"></script>
<link rel="stylesheet" href="./css/list2.css" />
<link href="https://fonts.googleapis.com/css2?family=Poor+Story&display=swap" rel="stylesheet">
</head>
<body>
	<!-- 헤더 영역 -->
	<div class="header" style="display: flex; align-items: center; justify-content: space-around; width: 100%; font-family: 'Nanum Gothic', sans-serif;">
		<img class="logo" alt="logo" src="./images/tag_logo1.png" onclick="location.href='index'" style="max-height: 80px;">
		
		<div style="display: flex; justify-content: center; flex-grow: 1;">
			<button type="button" class="btn btn-outline-dark" style="width: 25%;" onclick="location.href='index'"><i class="bi bi-house"> Index</i></button>
			<button type="button" class="btn btn-outline-dark" style="width: 25%;" onclick="location.href='list'"><i class="bi bi-list">Trend</i></button>
			<button type="button" class="btn btn-outline-dark" style="width: 25%;" onclick="location.href='list2'"><i class="bi bi-joystick"> Games</i></button>
		</div>
		
		<div id="searchbox" style="display: none;">
			<form id="search" action="search" method="post">
				<div style="display: flex;">
					<input type="text" class="form-control" style="width: 10rem;" name="searchval" maxlength="10" placeholder="Search">
					<button type="submit"
						style="-webkit-backdrop-filter: invert(100%);
						backdrop-filter: invert(100%);"
						class="btn btn-outline-light">Search</button>
				</div>
			</form>
		</div>
		<div style="width: 7.5rem;">
			<button type="button" class="btn btn-outline-dark" onclick="showsearchbox()"><i class="bi bi-search"></i></button>
			<button type="button" class="btn btn-outline-dark" onclick="showloginbox()"><i class="bi bi-person"></i></button>
		</div>
	</div>
	<div class="mt-3 container text-center" style="font-family: 'Poor Story', sans-serif;">
		<h3><b>숫자 야구 <i class="bi bi-dribbble" style="color: green;"></i></b></h3>
		<br />
		<p>숫자만 일치하면 ball, 숫자와 자리까지 일치하면 strike!</p>
		<p>랜덤한 숫자를 맞춰보세요! 기회는 단 10번입니다.</p>
		<div id="levelContainer">
            <input type="text" id="levelInput" placeholder="3 ~ 9 사이의 레벨을 숫자로 입력하세요" style="width: 20%"/>
            <button id="levelBtn" class="btn btn-primary btn-sm">레벨 입력</button>
        </div>
		<br/><div id="gameContainer" class="container text-center algin-middle" style="display: none;">
			<div>
	            <input type="text" id="userInput" placeholder="level 자리 숫자를 입력하세요" maxlength=level style="width: 13%;">
	            <button id="guessBtn" class="btn btn-danger btn-sm">Guess</button>
			</div>           
     	</div>
        <br/><div id="result" style="color: red;"></div><br/>
        <div id="history"></div>
        <button id="retryBtn" class="btn btn-dark btn-sm" style="display:none;">다시하기</button>
    </div><br/>
</body>
</html>







