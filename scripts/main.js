

g_sfbMaxCharacterPortaits = 16;
g_sfbMaxBodyTypes = 2;
g_sfbMaxBodyWalkStyles = 2;
g_sfbMaxBodySkinTones = 8;

g_sfbBackgrounds = {
	"Chef" : {
		"description" : "While the undefined masses scarfed down Chunks by the shipload, you catered to those with a more... discerning palate. In your kitchen, countless alien species became true culinary masterpieces.",
		"skills" : [
			"Gastronomy",
			"Dueling",
			"Wellness"
		],
	},
	"Cyberneticist" : {
		"description" : "Robots? Mere toys. Neuroamps? Good for parlor tricks. The Colony War may have made implants and upgrades available to veterans, but you once saw a greater future. Humans and machines, as one.",
		"skills" : [
			"Medicine",
			"Robotics",
			"Lasers"
		],
	},
	"Cyber Runner" : {
		"description" : "From Neon to New Atlantis, the megacorps stand as monuments to power, prestige and profit. You've worked both for and against them, on the inside and out, often sacrificing conscience for credits.",
		"skills" : [
			"Pistol Certification",
			"Security",
			"Persuasion"
		],
	},
	"Combat Medic" : {
		"description" : "Leave it to human beings to fight over something as infinite as outer space. That's where you come in. You've never been afraid to take on the enemy... but you'd much rather take care of your friends.",
		"skills" : [
			"Pistol Certification",
			"Medicine",
			"Weight Lifting"
		],
	},
	"Diplomat" : {
		"description" : "The wars are over. Peace no reigns the Settled Systems. But only because there are those quietly fighting to keep it. Because of you, agreements were signed, words were heeded... lives were spared.",
		"skills" : [
			"Persuasion",
			"Diplomacy",
			"Bargaining"
		],
	},
};

g_sfbSkills = {
		"Gastronomy" : {
			"description" : "You can craft speciality food and drinks, and research additional recipes at a Research Lab.",
			"image" : "/images/skills/gastronomy.png",
		},
		"Dueling" : {
			"description" : "Melee weapons do 10% more damage.",
			"image" : "/images/skills/dueling.png",
		},
		"Wellness" : {
			"description" : "Gain 30 points in maximum health.",
			"image" : "/images/skills/wellness.png",
		},
		"Medicine" : {
			"description" : "Med Packs heal 10% more.",
			"image" : "/images/skills/medicine.png",
		},
		"Robotics" : {
			"description" : "You deal 105 more damage to Robots and Turrets.",
			"image" : "/images/skills/robotics.png",
		},
		"Lasers" : {
			"description" : "Laser weapons do 10% more damage.",
			"image" : "/images/skills/lasers.png",
		},
		"Pistol Certification" : {
			"description" : "Pistols do 10% more damage.",
			"image" : "/images/skills/pistol_certification.png",
		},
		"Security" : {
			"description" : "You can attempt to hack Advanced locks and bank two auto attempts.",
			"image" : "/images/skills/security.png",
		},
		"Persuasion" : {
			"description" : "Gain an increased chance of success in speech challenges.",
			"image" : "/images/skills/persuasion.png",
		},
		"Weight Lifting" : {
			"description" : "Increase total carrying capacity by 10 kilograms.",
			"image" : "/images/skills/weight_lifting.png",
		},
		"Diplomacy" : {
			"description" : "You can force a target NPC at or below your level to stop fighting for a while.",
			"image" : "/images/skills/diplomacy.png",
		},
		"Bargaining" : {
			"description" : "Buy items for 5% less and sell them for 10% more.",
			"image" : "/images/skills/bargaining.png",
		},
};


g_sfbTraits = {
		"Alien DNA": {
			"description": "Trait description is currently unknown.",
			"image": "/images/traits/missing.png",
			"exclude" : [ ],
		},
		"Empath": {
			"description": "Trait description is currently unknown.",
			"image": "/images/traits/missing.png",
			"exclude" : [ ],
		},
		"Extrovert": {
			"description": "Trait description is currently unknown.",
			"image": "/images/traits/missing.png",
			"exclude" : [ ],
		},
		"Freestar Collective Settler": {
			"description": "Trait description is currently unknown.",
			"image": "/images/traits/missing.png",
			"exclude" : [ ],
		},
		"Introvert": {
			"description": "You really need your alone time. You have more endurance when adventuring alone, but less when adventuring with other human companions. (Can't be combined with Extrovert).",
			"image": "/images/traits/introvert.png",
			"exclude" : [ "Extrovert" ],
		},
		"Kid Stuff": {
			"description": "Your parents are alive and well, and you can visit them at their home. But 10% of all the money you earn is deducted automatically and sent to them.",
			"image": "/images/traits/missing.png",
			"exclude" : [ ],
		},
		"Neon Street Rat": {
			"description": "You grew up on the mean streets of Neon. You gain access to special dialogue options, and better rewards from some missions on Neon. Crime bounty by other factions is greatly increased. (Can't be combined with any other faction allegiance trait.)",
			"image": "/images/traits/missing.png",
			"exclude" : [ "United Colonies Native", "Freestar Collective Settler" ],
		},
		"Raised Enlightened": {
			"description": "You grew up as a member of the Enlightened. You gain a significant discount at the organization store, but lose access to Sanctum Universum store. (Can't be combined with any other religion trait.)",
			"image": "/images/traits/missing.png",
			"exclude" : [ "Raised Universal", "Serpent's Embrace" ],
		},
		"Raised Universal": {
			"description": "You grew up as a member of the Sanctum Universum. You gain a significant discount at the church store, but lose access to the Enlightened store. (Can't be combined with any other religion trait.)",
			"image": "/images/traits/missing.png",
			"exclude" : [ "Raised Enlightened", "Serpent's Embrace" ],
		},
		"Serpent's Embrace": {
			"description": "You grew up worshipping the Great Serpent. Grav jumping provides a temporary boost to health and endurance, but health and endurance are lowered if you don't continue jumping regularily... like an addiction. (Can't be combined with any other religion trait.)",
			"image": "/images/traits/missing.png",
			"exclude" : [ "Raised Enlightened", "Raised Universal" ],
		},
		"Spaced": {
			"description": "Your body has become acclimated to space. Health and endurance are increased when in space, but decreased whhen on the surface. (Can't be combined with Terra Firma.)",
			"image": "/images/traits/missing.png",
			"exclude" : [ "Terr Firma" ],
		},
		"Starter Home": {
			"description": "You own a small house on a peaceful little moon, but it comes with a 50,000 credit mortgage with GalBank.",
			"image": "/images/traits/starter_home.png",
			"exclude" : [ ],
		},
		"Taskmaster": {
			"description": "Trait description is currently unknown.",
			"image": "/images/traits/missing.png",
			"exclude" : [ ],
		},
		"Terra Firma": {
			"description": "Trait description is currently unknown.",
			"image": "/images/traits/missing.png",
			"exclude" : [ "Spaced" ],
		},
		"United Colonies Native": {
			"description": "Trait description is currently unknown.",
			"image": "/images/traits/missing.png",
			"exclude" : [ ],
		},
		"Unwanted Hero": {
			"description": "Trait description is currently unknown.",
			"image": "/images/traits/missing.png",
			"exclude" : [ ],
		},
};


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


function sfbChangeCharacterPortrait(characterIndex)
{
	$("#sfbPersonalRecordNumber").text(characterIndex);
	
	var src = "/images/portraits/char" + characterIndex + ".png";
	
	$("#sfbCharacterPortrait").attr("src", src).on('error', function() {
		$("#sfbCharacterPortrait").attr("src", "/images/portraits/missing.png");
	});
	
	$("#sfbCharacterPortrait1").attr("src", src).on('error', function() {
		$("#sfbCharacterPortrait1").attr("src", "/images/portraits/missing.png");
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


function sfbChangeBackground(background)
{
	var title = $("#sfbBackgroundTitle");
	var text = $("#sfbBackgroundText");
	var skills = $("#sfbBackgroundSkills .sfbBackgroundSkillPanel");
	var backgroundData = g_sfbBackgrounds[background];
	
	title.text(background);
	
	if (backgroundData == null)
	{
		sfbChangeBackgroundError(background);
		return;
	}
	
	text.text(backgroundData.description);
	
	sfbChangeBackgroundSkill($(skills[0]), backgroundData.skills[0]);
	sfbChangeBackgroundSkill($(skills[1]), backgroundData.skills[1]);
	sfbChangeBackgroundSkill($(skills[2]), backgroundData.skills[2]);
}


function sfbChangeBackgroundSkill(element, skillName)
{
	var skillData = g_sfbSkills[skillName];
	
	if (skillData == null)
	{
		sfbChangeBackgroundSkillError(element, skillName);
		return;
	}
	
	var image = element.children("img");
	var subtitle = element.children(".sfbBackgroundSkillSubTitle");
	var description = element.children(".sfbBackgroundSkillText");
	
	image.attr("src", skillData.image);
	subtitle.text(skillName);
	description.text(skillData.description);
}


function sfbChangeBackgroundSkillError(element, skillName)
{
	var image = element.children("img");
	var subtitle = element.children(".sfbBackgroundSkillSubTitle");
	var description = element.children(".sfbBackgroundSkillText");
	
	image.attr("src", "/images/skills/missing.png");
	subtitle.text(skillName);
	description.text("Skill description is not currently available.");
}


function sfbChangeBackgroundError(background)
{
	var text = $("#sfbBackgroundText");
	var skills = $("#sfbBackgroundSkills .sfbBackgroundSkillPanel");
	
	text.text("Background information is currently unavailable.");
	
	sfbChangeBackgroundSkill($(skills[0]), "Unknown");
	sfbChangeBackgroundSkill($(skills[1]), "Unknown");
	sfbChangeBackgroundSkill($(skills[2]), "Unknown");
}


function sfbOnBackgroundListClick(e)
{
	var $this = $(this);
	var background = $this.text();
	
	sfbChangeBackground(background);
	
	$(".sfbBackgroundListSelected").removeClass("sfbBackgroundListSelected");
	$this.addClass("sfbBackgroundListSelected");
}


function sfbOnTraitListClick(e)
{
	var $this = $(this);
	var trait = $this.text();
	
	sfbChangeShownTrait(trait);
	
	$(".sfbTraitListSelected").removeClass("sfbTraitListSelected");
	$this.addClass("sfbTraitListSelected");
}


function sfbChangeShownTrait(trait)
{
	var traitData = g_sfbTraits[trait];
	
	if (traitData == null)
	{
		sfbChangeShownTraitError(trait)
		return;
	}
	
	var title = $("#sfbTraitTitle");
	var text = $("#sfbTraitText");
	
	title.text(trait);
	text.text(traitData.description);
}


function sfbChangeShownTraitError(trait)
{
	var title = $("#sfbTraitTitle");
	var text = $("#sfbTraitText");
	
	title.text(trait);
	text.text("Trait description is currently not available!");
}


function sfbOnTraitListDblClick(e)
{
	var $this = $(this);
	var trait = $this.text();
	
	if ($this.hasClass("sfbTraitListChoosen")) return;
	if ($this.hasClass("sfbTraitListExcluded")) return;
	
	sfbAddTrait(trait);
}


function sfbIsTraitExcluded(trait)
{
	var returnResult = false;
	
	$(".sfbTraitListExcluded").each(function() {
		var excludedTrait = $(this).text();
		if (excludedTrait == trait) returnResult = true;
	});
	
	return returnResult;
}


function sfbAddTrait(trait)
{
	var usedCount = $(".sfbTraitUsedOptional").length;
	var traitData = g_sfbTraits[trait];
	if (traitData == null) return true;
	
	if (usedCount <= 0) return false;
	if (sfbIsTraitExcluded(trait)) return false;
	
	var nextAvailableSlot = $(".sfbTraitUsedOptional").first();
	
	nextAvailableSlot.removeClass("sfbTraitUsedOptional");
	nextAvailableSlot.children("img").attr("src", traitData.image).show();
	nextAvailableSlot.children(".sfbTraitUsedText").text(trait);
	
	sfbUpdateTraitCount();
	sfbUpdateTraitsChoosen();
	
	return true;
}


function sfbOnTraitChoosenDblClick(e)
{
	var $this = $(this);
	
	if ($this.hasClass("sfbTraitUsedOptional")) return;
	
	$this.addClass("sfbTraitUsedOptional");
	$this.children("img").hide();
	$this.children(".sfbTraitUsedText").text("{OPTIONAL}");
	
	sfbUpdateTraitCount();
	sfbUpdateTraitsChoosen();
}


function sfbUpdateTraitsChoosen()
{
	$(".sfbTraitListChoosen").removeClass("sfbTraitListChoosen");
	$(".sfbTraitListExcluded").removeClass("sfbTraitListExcluded");
	
	$(".sfbTraitUsedRow").each(function() {
		var $this = $(this);
		if ($this.hasClass("sfbTraitUsedOptional")) return;
		
		var trait = $this.children(".sfbTraitUsedText").text();
		sfbUpdateChoosenTraitList(trait);
	});
}


function sfbUpdateChoosenTraitList(trait)
{
	var traitData = g_sfbTraits[trait];
	if (traitData == null) return;
	
	sfbAddTraitListClass(trait, "sfbTraitListChoosen");
	
	traitData.exclude.forEach( (excludeName) => {
		sfbAddTraitListClass(excludeName, "sfbTraitListExcluded");
	});
}


function sfbAddTraitListClass(traitName, className)
{
	$("#sfbTraitList li").each(function() {
		var $this = $(this);
		var text = $this.text();
		if (text == traitName && !$this.hasClass(className)) $this.addClass(className);
	});
}


function sfbUpdateTraitCount()
{
	var traitCount = 3 - $(".sfbTraitUsedOptional").length;
	var traitText = "TRAITS: " + traitCount + "/3";
	
	$("#sfbTraitsButton").text(traitText);
	$("#sfbTraitUsedTitle").text(traitText);
}


function sfbOnBodyDialMouseMove(e)
{
	if (e.buttons != 1) return;
	
	var image = $("#sfbBodyDialImage");
	var marker = $("#sfbBodyDialMarker");
	var parent = marker.offsetParent();
	
	var xPos = e.pageX - parent.offset().left;
	var yPos = e.pageY - parent.offset().top;
	
	var centerX = image.width()/2 + image.offset().left - 5;
	var centerY = image.height()/2 + image.offset().top + 20;
	
	var diffX = Math.abs(e.pageX - centerX);
	var diffY = Math.abs(e.pageY - centerY);
	
	var radius = Math.sqrt(diffX*diffX + diffY*diffY);
	
	//console.log(radius, diffX, diffY, centerX, centerY, xPos, yPos);
	
	if (radius > 80) return;
	
	xPos -= marker.width()/2;
	yPos -= marker.height()/2;
	
	marker.css("left", xPos);
	marker.css("top", yPos);
}


function sfbUpdatePortraitSizes()
{
	var width = $("#sfbMainRoot").width();
	var height = $("#sfbMainRoot").height();
	
	var portrait1 = $("#sfbCharacterPortrait");
	var leftPanel1 = $("#sfbMainId .sfbLeftPanel");
	var width1 = width - leftPanel1.width();
	
	var totalWidth1 = portrait1.width() + leftPanel1.width();
	
	if (width < 700)
	{
		var newHeight = (width - 500) / (700 - 500) * 100;
		if (newHeight < 25) newHeight = 25;
		if (newHeight > 50) newHeight = 50;
		
		$("#sfbCharacterPortrait1").css("height", "" + newHeight + "%");
		
		$("#sfbCharacterPortrait").parent().hide();
		$("#sfbCharacterPortrait1").show();
	}
	else if (width < 1150)
	{
		var newHeight = (width - 500) / (1150 - 500) * 100;
		if (newHeight < 25) newHeight = 25;
		if (newHeight > 100) newHeight = 100;
		
		portrait1.css("height", "" + newHeight + "%");
		$("#sfbFacePortrait1").css("height", "" + newHeight + "%");
		
		$("#sfbCharacterPortrait").parent().show();
		$("#sfbCharacterPortrait1").hide();
	}
	else 
	{
		$("#sfbCharacterPortrait").parent().show();
		$("#sfbCharacterPortrait1").hide();
		portrait1.css("height", "100%");
	}
	
	if (width < 1150)
	{
		var newHeight = (width - 500) / (1150 - 500) * 100;
		if (newHeight < 25) newHeight = 25;
		if (newHeight > 100) newHeight = 100;
		
		$("#sfbFacePortrait").css("height", "" + newHeight + "%");
		$("#sfbBackgroundPortrait").css("height", "" + newHeight + "%");
		$("#sfbTraitPortrait").css("height", "" + newHeight + "%");
	}
	else 
	{
		$("#sfbFacePortrait").css("height", "100%");
		$("#sfbBackgroundPortrait").css("height", "100%");
		$("#sfbTraitPortrait").css("height", "100%");
	}
	
}

function sfbOnWindowResize(e)
{
	sfbUpdatePortraitSizes();
}


function sfbInitializeControls()
{
	
	window.g_sfbPersonnelRecordCtrl = new CSfbValueControl("sfbPersonnelRecord", sfbChangeCharacterPortrait);
	
	window.g_sfbBodyTypeCtrl = new CSfbValueControl("sfbBodyType");
	window.g_sfbBodyWalkStyleCtrl = new CSfbValueControl("sfbBodyWalkStyle");
	window.g_sfbBodySkinToneCtrl = new CSfbValueControl("sfbBodySkinTone");
	
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
	
	$("#sfbBackgroundList li").click(sfbOnBackgroundListClick);
	$("#sfbTraitList li").click(sfbOnTraitListClick);
	$("#sfbTraitList li").dblclick(sfbOnTraitListDblClick);
	$("#sfbButtonRoot .sfbButton").click(sfbOnTabButtonClick);
	$(".sfbTraitUsedRow").dblclick(sfbOnTraitChoosenDblClick);
	$("#sfbBodyDialImage").on("mousemove mousedown", sfbOnBodyDialMouseMove);
	$( window ).resize(sfbOnWindowResize);
	
	sfbUpdatePortraitSizes();
}


$(function() {
	sfbOnDocumentReady();
});

