	var $facingRight = true;
	var $left = 320;
	var $minleft = 0;
	var $right = 480;
	var $maxright  = 800;

$(document).ready(function () {
	
	setSprites();

	$(document).keydown(function (key) {
		switch (parseInt(key.which, 10)) {
			case 65:   //a-press-->walk left
				walkLeft();
				break;
			case 83:   //s-press-->crouch
				crouch();
				break;
			case 87:   //w-press-->jump
				jump();
				break;
			case 68:   //d-press-->walk right
				walkRight();				
				break;
			default:
				break;
        }
    })
    
	.keyup(function (key) {
		switch (parseInt(key.which, 10)) {
			case 65:   //a-press-->walk left
				stopWalkLeft();
				break;
			case 83:     //s-press-->crouch
				unCrouch();
				break;
			case 87:   //w-press-->jump
				landJump();
				break;
			case 68:    //d-press-->walk right
				stopWalkRight();
				break;
			default:
				break;
        }
    });
});

function setSprites () {
	$('#walkright').hide();	
	$('#jumpleft').hide();
	$('#jumpright').hide();
	$('#crouchleft').hide();
	$('#crouchright').hide();
	$('#walkleft').hide();
	$('#standleft').hide();
}

function walkLeft () {
if ($left > $minleft) {
		$('#walkleft').show();
		$('#standleft').hide();
		$('#standright').hide();
		$('.sprite').animate({left: "-=20px"}, 'fast');
		$facingRight = false;
		$right -= 20;
		$left -=20;
	}
}

function stopWalkLeft() {
	$('#standleft').show();
	$('#walkleft').hide();
}

function walkRight(){
	if ($right < $maxright) {
		$('#walkright').show();
		$('#standleft').hide();
		$('#standright').hide();
		$('.sprite').animate({left: "+=20px"}, 'fast');
		$facingRight = true;
		$right += 20;
		$left +=20;
	}
}

function stopWalkRight() {
	$('#standright').show();
	$('#walkright').hide();
}

function crouch (){
	$('#standleft').hide();
	$('#standright').hide();
	
	if ($facingRight) {
		$('#crouchright').show();
	} else {
		$('#crouchleft').show();
	}
}

function unCrouch () {
	if ($facingRight) {
		$('#standright').show();
	} else {
		$('#standleft').show();
	}
	$('#crouchleft').hide();
	$('#crouchright').hide();
}

function jump () {
	$('#standleft').hide();
	$('#standright').hide();
	if ($facingRight) {
		$('#jumpright').show();
	} else {
		$('#jumpleft').show();
	}
	$('.sprite').animate({top: '-=100px'}, 'fast');
	$('.sprite').animate({top: '+=100px'}, 'fast');
}

function landJump () {
	if ($facingRight) {
		$('#standright').show();
	} else {
		$('#standleft').show();
	}
	$('#jumpleft').hide();
	$('#jumpright').hide();
}