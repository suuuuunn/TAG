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


