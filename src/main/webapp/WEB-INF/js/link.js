function clip() {
	var url = ''
	var textarea = document.createElement('textarea')
	document.body.appendChild(textarea)
	url = document.location.href
	console.log(url)
	textarea.value = url
	textarea.select()
	document.execCommand('copy')
	document.body.removeChild(textarea)
	alert('URL이 복사되었습니다.')
}

function shareMessage() {
	if (!Kakao.isInitialized()) {
	    Kakao.init('c2868f26a91a5c604651779d3d809ca0');
	}
	console.log(Kakao.isInitialized());
	
	// 현재 링크
	var currentURL = window.location.href;
	console.log("currentURL: " + currentURL);
	
	// 제품 타이틀
	var productTitleElement = document.getElementById('title').textContent;
	var productTitle = productTitleElement ? productTitleElement : '';
	console.log("productTitleElement: " + productTitleElement);
	console.log("productTitle: " + productTitle);
	
	// 제품 설명
	var productSummaryElement = document.getElementById('tag').textContent;
    var productSummary = productSummaryElement ? productSummaryElement : '';
	console.log("productSummaryElement: " + productSummaryElement);
	console.log("productSummary: " + productSummary);
        
    // 제품 이미지
    var productImageElement = document.querySelector('.carousel-item img').getAttribute('src');
	var productImageUrl = '';
	if (productImageElement === './images/60.png') {
        productImageUrl = 'https://ifh.cc/g/2P4dOC.jpg';
    } else if (productImageElement === './images/59.png') {
        productImageUrl = 'https://ifh.cc/g/JSaoxR.png';
    } else if (productImageElement === './images/58.png') {
        productImageUrl = 'https://ifh.cc/g/fh2YPv.png';
    } else if (productImageElement === './images/57.png') {
        productImageUrl = 'https://ifh.cc/g/LPHMYk.png';
    }
	console.log("productImageElement: " + productImageElement);
	console.log("productImageUrl: " + productImageUrl);

	var likeElement = document.getElementById('like').textContent;
	var productLike = likeElement ? Number(likeElement) : 0;
	console.log("likeElement: " + likeElement);
	console.log("productLike: " + productLike);
	
	var commentElement = document.getElementById('comment').textContent;
	var productComment = commentElement ? Number(commentElement) : 0;
	console.log("commentElement: " + commentElement);
	console.log("productComment: " + productComment);
	
    Kakao.Share.createDefaultButton({
    container: '#kakaotalk-sharing-btn',
    objectType: 'feed',
    content: {
      title: productTitle,
      description: productSummary,
      imageUrl: productImageUrl,
      link: {
        mobileWebUrl: currentURL,
        webUrl: currentURL,
      },
    },
    social: {
      likeCount: productLike,
      commentCount: productComment,
    },
    buttons: [
      {
        title: '웹으로 보기',
        link: {
          mobileWebUrl: currentURL,
          webUrl: currentURL,
        },
      },
    ],
    });
}

function like() {
	alert('로그인 후 이용해주세요.');
}

function likeon(button) {
	// 새로고침 방지
	event.preventDefault();
	
	const cnum = button.dataset.cnum;
    const lcnum = button.dataset.lcnum;
    const usernum = button.dataset.usernum;
    const tnum = button.dataset.tnum;
    let clikeflag = button.dataset.clikeflag;
	console.log("cnum: " + cnum + ", lcnum: " + lcnum + ", usernum: " + usernum + ", tnum: " + tnum + ", clikeflag: " + clikeflag);

	clikeflag = clikeflag === 0 ? 1 : 0;

	const url = `clike?cnum=${cnum}&lcnum=${lcnum}&usernum=${usernum}&tnum=${tnum}&clikeflag=${clikeflag}`;
	console.log("Reporting with URL:", url);
	
	fetch(url)
        .then(response => response.text())
        .then(data => {
            console.log('Response:', data);
            // 좋아요 상태 업데이트
            button.dataset.clikeflag = clikeflag;
            updateLikeButton(button, clikeflag);
        })
        .catch(error => console.error('Error:', error));
}

function updateLikeButton(button, clikeflag) {
    const heartIcon = button.querySelector('.like-icon');  // 아이콘 (하트)
    
    if (clikeflag == 1) {
        heartIcon.classList.remove('bi-heart');   // 비어있는 하트 제거
        heartIcon.classList.add('bi-heart-fill'); // 채워진 하트 추가
    } else {
        heartIcon.classList.remove('bi-heart-fill'); // 채워진 하트 제거
        heartIcon.classList.add('bi-heart');         // 비어있는 하트 추가
    }
}

function morebtn() {
	let last = $('#last').val()
	last = parseInt(last)
	console.log(last)
	let morecount = $('#morecount').val()
	morecount = parseInt(morecount)
	console.log(morecount)
	for (i=morecount; i<morecount+5; i++) {
		$('.trc').eq(i).css('display', 'block');
		console.log(i)
		if (i >= last - 6) {
			$('#morediv').css('display', 'none');
		}
	}
	
	morecount = parseInt(morecount) + 5
	$('#morecount').val(morecount)
}

$(function() {
	var middlePoint = ($(document).height() - $(window).height()) / 2;
    $(window).scroll(function() {
        if ($(this).scrollTop() > middlePoint) {
            $('#toTop').fadeIn();            
        } else {
            $('#toTop').fadeOut();
        }
    });
    
    $("#toTop").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 100);
        return false;
    });
    
    $(window).scroll(function() {
        if ($(this).scrollTop() < middlePoint) {
            $('#toDown').fadeIn();            
        } else {
            $('#toDown').fadeOut();
        }
    });
    
    $("#toDown").click(function() {
        $('html, body').animate({
            scrollTop : document.body.scrollHeight
        }, 100);
        return false;
    });
});


