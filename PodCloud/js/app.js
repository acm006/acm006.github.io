var feedURL;
var savedFeeds = [];

function loadSavedFeeds () {
	if(localStorage.savedFeeds != null){
		savedFeedsPlaceholder = JSON.parse(localStorage.savedFeeds);
		for (i=0; i<savedFeedsPlaceholder.length; i++) {
			savedFeeds.push(savedFeedsPlaceholder[i]);
		}
		if (savedFeeds.length != 0) {
			for (i=0; i<savedFeeds.length; i++) {	 		
				feedURL = savedFeeds[i];	
				loadFeed();
			}
		}
	}
}

function loadFeed (){
	$("#feedDiv").rss(feedURL,{
		layoutTemplate: '<ul id="feedEntries">{entries}</ul>',
		entryTemplate: '<p id={url}><a href=#>{title}</a></p>'
	});
}


function addNewPodcast () {
	updateFeedURL();
	loadFeed();	
	updateArray();
	$("#newURL").val("");
}

function updateArray(){
	savedFeeds.push(feedURL);
}

function updateFeedURL(){
	feedURL = $("#newURL").val();
}

function updateSavedState(){
	localStorage.savedFeeds = JSON.stringify(savedFeeds);
}

function loadVolume(){
	$("#volumeIndicator").html("Volume: "+	$("#currentPodcast")[0].volume);
}

function loadAudioTag(){
		$("#currentPodcast").attr("src",feedURL);
	}

function enableAudioTag (){
		$("#currentPodcast")[0].volume = 0.5;
		$("#currentPodcast")[0].load();
		$("#currentPodcast")[0].play();
		$("#playbackControl").removeClass("glyphicon-info-sign");
		$("#controls").html("");
		$("#playbackControl").addClass("glyphicon-pause");
		loadVolume();	
}

function pausePlayback () {
	$("#currentPodcast")[0].pause();
	$("#playbackControl").removeClass("glyphicon-pause");
	$("#playbackControl").addClass("glyphicon-play");
}

function resumePlayback () {
	$("#currentPodcast")[0].play();
	$("#playbackControl").removeClass("glyphicon-play");
	$("#playbackControl").addClass("glyphicon-pause");
}


$(document).ready(function () {
	loadSavedFeeds();
	
	$("#feedDiv").on('click', 'p', function () {
		feedURL = $(this).attr('id');		
		loadAudioTag();
		enableAudioTag();
	});
	
	$("#playbackControl").click(function(){
		if($("#playbackControl").hasClass("glyphicon-pause")){
			pausePlayback();
		}
		else{
			resumePlayback();
		}
	});
	
	$("#volUp").click(function(){
		if($("#currentPodcast")[0].volume < .99){
			$("#currentPodcast")[0].volume = $("#currentPodcast")[0].volume + 0.1;
			loadVolume();
		}
	});
	
	$("#volDown").click(function(){
		if($("#currentPodcast")[0].volume > 0.01){
			$("#currentPodcast")[0].volume = $("#currentPodcast")[0].volume - 0.1;
			loadVolume();
		}
	});
	
	$("#addFeedButton").click(function(){
		addNewPodcast();
		updateSavedState();
	});
	
	
})