

g_sfbMaxCharacterPortaits = 16;
g_sfbMaxBodyTypes = 2;
g_sfbMaxBodyWalkStyles = 2;
g_sfbMaxBodySkinTones = 8;


function sfbChangeMainTab(tabId)
{
	if (tabId == null || tabId == "") return false;
	
	var newTab = $("#sfbMain" + tabId);
	if (newTab.length == 0) return false;
	
	$("#sfbButtonRoot .sfbButtonSelected").removeClass("sfbButtonSelected");
	$("#sfbButtonRoot .sfbButton[tabid='" + tabId + "']").addClass("sfbButtonSelected");
	
	$(".sfbMainTab").hide();
	newTab.show();
	
	return true;
}


function sfbOnTabButtonClick()
{
	var $this = $(this);
	var tabId = $this.attr("tabid");
	
	sfbChangeMainTab(tabId);
}


function sfbOnPortraitDnaMoveRight()
{
	var marker = $("#sfbPersonalRecordDNAMarker");
	var markerPos = marker.position().left;
	var dnaBarWidth = $("#sfbPersonalRecordDNA").width();
	
	var markerLeftOffset = 25;
	var numCharacterPortraits = g_sfbMaxCharacterPortaits;
	
	var characterIndex = Math.round((markerPos - markerLeftOffset) / dnaBarWidth * (numCharacterPortraits));
	
	if (characterIndex >= numCharacterPortraits - 1) return false;
	++characterIndex;
	
	var newMarkerPos = dnaBarWidth / (numCharacterPortraits) * characterIndex + markerLeftOffset;
	
	marker.css('left', newMarkerPos);
	
	sfbChangeCharacterPortrait(characterIndex + 1);
}


function sfbOnPortraitDnaMoveLeft()
{
	var marker = $("#sfbPersonalRecordDNAMarker");
	var markerPos = marker.position().left;
	var dnaBarWidth = $("#sfbPersonalRecordDNA").width();
	
	var markerLeftOffset = 25;
	var numCharacterPortraits = g_sfbMaxCharacterPortaits;
	
	var characterIndex = Math.round((markerPos - markerLeftOffset) / dnaBarWidth * (numCharacterPortraits));
	
	if (characterIndex <= 0) return false;
	--characterIndex;
	
	var newMarkerPos = dnaBarWidth / (numCharacterPortraits) * characterIndex + markerLeftOffset;
	
	marker.css('left', newMarkerPos);
	
	sfbChangeCharacterPortrait(characterIndex + 1);
}


function sfbOnBodySkinToneMoveLeft()
{
	var marker = $("#sfbBodySkinToneDNAMarker");
	var markerPos = marker.position().left;
	var dnaBarWidth = $("#sfbBodySkinToneDNA").width();
	
	var markerLeftOffset = 40;
	var maxIndex = g_sfbMaxBodySkinTones;
	
	var index = Math.round((markerPos - markerLeftOffset) / dnaBarWidth * (maxIndex));
	
	if (index <= 0) return false;
	--index;
	
	var newMarkerPos = dnaBarWidth / (maxIndex) * index + markerLeftOffset;
	
	marker.css('left', newMarkerPos);
	
	$("#sfbBodySkinToneNumber").text(index + 1);
}


function sfbOnBodySkinToneMoveRight()
{
	var marker = $("#sfbBodySkinToneDNAMarker");
	var markerPos = marker.position().left;
	var dnaBarWidth = $("#sfbBodySkinToneDNA").width();
	
	var markerLeftOffset = 40;
	var maxIndex = g_sfbMaxBodySkinTones;
	
	var index = Math.round((markerPos - markerLeftOffset) / dnaBarWidth * (maxIndex));
	
	if (index >= maxIndex - 1) return false;
	++index;
	
	var newMarkerPos = dnaBarWidth / (maxIndex) * index + markerLeftOffset;
	
	marker.css('left', newMarkerPos);
	
	$("#sfbBodySkinToneNumber").text(index + 1);
}


function sfbOnBodyTypeMoveLeft() 
{
	var element = $("#sfbBodyTypeValue");
	var value = parseInt(element.text());
	
	if (value <= 1) return false;
	--value;
	
	element.text(value);
}


function sfbOnBodyTypeMoveRight() 
{
	var element = $("#sfbBodyTypeValue");
	var value = parseInt(element.text());
	
	if (value >= g_sfbMaxBodyTypes) return false;
	++value;
	
	element.text(value);
}


function sfbOnBodyWalkStyleMoveLeft() 
{
	var element = $("#sfbBodyWalkStyleValue");
	var value = parseInt(element.text());
	
	if (value <= 1) return false;
	--value;
	
	element.text(value);
}


function sfbOnBodyWalkStyleMoveRight() 
{
	var element = $("#sfbBodyWalkStyleValue");
	var value = parseInt(element.text());
	
	if (value >= g_sfbMaxBodyWalkStyles) return false;
	++value;
	
	element.text(value);
}


function sfbChangeCharacterPortrait(characterIndex)
{
	$("#sfbPersonalRecordNumber").text(characterIndex);
	
	var src = "/images/portraits/char" + characterIndex + ".png";
	
	$("#sfbCharacterPortrait").attr("src", src).on('error', function() {
		$("#sfbCharacterPortrait").attr("src", "/images/portraits/missing.png");
	});
	
	$("#sfbFacePortrait").attr("src", src).on('error', function() {
		$("#sfbFacePortrait").attr("src", "/images/portraits/missing.png");
	});
}


function sfbSetRandomEmployeeId()
{
	var div = $("#sfbEmployeeNumber");
	
	var prefix = Math.floor(10000000 + Math.random() * 90000000).toString()
	var suffix = Math.random().toString(36).substring(2,6).toUpperCase();
	var employeeId = prefix + "-" + suffix;
	
	div.text(employeeId);
	
	return employeeId;
}


function sfbInitializeControls()
{
	window.g_sfbFaceSkinToneCtrl = new CSfbValueControl("sfbFaceSkinTone");
	window.g_sfbFaceHeadShapesCtrl = new CSfbValueControl("sfbFaceHeadShapes");
	window.g_sfbFaceHairCtrl = new CSfbValueControl("sfbFaceHair");
	window.g_sfbFaceHairColorCtrl = new CSfbValueControl("sfbFaceHairColor");
	window.g_sfbFaceEyesCtrl = new CSfbValueControl("sfbFaceEyes");
}


function sfbOnDocumentReady()
{
	sfbInitializeControls();
	
	sfbSetRandomEmployeeId();
	
	$("#sfbButtonRoot .sfbButton").click(sfbOnTabButtonClick);
	
	$("#sfbPersonalRecordMoveLeft").click(sfbOnPortraitDnaMoveLeft);
	$("#sfbPersonalRecordMoveRight").click(sfbOnPortraitDnaMoveRight);
	
	$("#sfbBodyTypeMoveLeft").click(sfbOnBodyTypeMoveLeft);
	$("#sfbBodyTypeMoveRight").click(sfbOnBodyTypeMoveRight);
	$("#sfbBodyWalkStyleMoveLeft").click(sfbOnBodyWalkStyleMoveLeft);
	$("#sfbBodyWalkStyleMoveRight").click(sfbOnBodyWalkStyleMoveRight);
	$("#sfbBodySkinToneMoveLeft").click(sfbOnBodySkinToneMoveLeft);
	$("#sfbBodySkinToneMoveRight").click(sfbOnBodySkinToneMoveRight);
}


$(function() {
	sfbOnDocumentReady();
});

