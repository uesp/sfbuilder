

class CSfbValueControl
{
	value = 0;
	maxValue = 0;
	minValue = 0;
	element = null;
	elementId = null;
	useDna = false;
	
	titleElement = null;
	rootElement = null;
	leftButton = null;
	rightButton = null;
	textElement = null;
	dnaElement = null;
	markerElement = null;
	
	constructor(elementId)
	{
		this.elementId = elementId;
		this.element = $("#" + elementId);
		
		this.minValue = this.element.attr("minvalue") || 0;
		this.maxValue = this.element.attr("maxvalue") || 0;
		this.useDna = !!(this.element.attr("dna") || false);
		
		if (this.value < this.minValue) this.value = this.minValue;
		
		this.createChildElements();
	}
	
	
	/*
 * 		<div class="sfbBodySubTitle">BODY TYPE</div>
		<div class="sfbBodyType">
			<div id="sfbBodyTypeMoveLeft">&lt;</div>
			<div id="sfbBodyTypeValue">1</div>
			<div id="sfbBodyTypeMoveRight">&gt;</div>
		</div>
	 */
	createChildElements() 
	{
		if (this.useDna) return this.createChildElementsDna();
		
		var label = this.element.attr("label") || "";
		
		this.titleElement = $("<div />").addClass("sfbValueControlTitle").text(label);
		this.textElement = $("<div />").addClass("sfbValueControlText").text(this.value);
		this.leftButton = $("<div />").addClass("sfbValueControlButton").html("&lt;").click( () => { this.onLeftButtonClicked(); } );
		this.rightButton = $("<div />").addClass("sfbValueControlButton").html("&gt;").click( () => { this.onRightButtonClicked(); } );
		
		this.rootElement = $("<div />").addClass("sfbValueControlRoot");
		
		this.rootElement.append(this.leftButton, this.textElement, this.rightButton);
		this.element.append(this.titleElement, this.rootElement);
	}
	
	
	/*
	 *  <div id="sfbBodySkinToneNumber">1</div>
		<div class="sfbBodySubTitle">SKIN TONE</div>
		<div class="sfbBodySkinTone">
			<div id="sfbBodySkinToneMoveLeft">&lt;</div>
			<div id="sfbBodySkinToneDNA"><img src="/images/skintones.png"  draggable="false"></div>
			<div id="sfbBodySkinToneDNAMarker"></div>
			<div id="sfbBodySkinToneMoveRight">&gt;</div>
		</div>
	 */	
	createChildElementsDna()
	{
		var label = this.element.attr("label") || "";
		
		this.titleElement = $("<div />").addClass("sfbValueControlTitle").text(label);
		this.textElement = $("<div />").addClass("sfbValueControlDnaText").text(this.value);
		this.dnaElement = $("<img />").addClass("sfbValueControlDnaImage").attr("src", "/images/dna_light.png").attr("draggable", "false");
		this.dnaElement.click( (e) => { this.onDnaImageClicked(e); } );
		this.dnaElement.on("mousemove", (e) => { this.onDnaImageMouseMove(e); } );
		this.markerElement = $("<div />").addClass("sfbValueControlDnaMarker");
		this.leftButton = $("<div />").addClass("sfbValueControlButton").html("&lt;").click( () => { this.onLeftButtonClicked(); } );
		this.rightButton = $("<div />").addClass("sfbValueControlButton").html("&gt;").click( () => { this.onRightButtonClicked(); } );
		
		this.rootElement = $("<div />").addClass("sfbValueControlRoot");
		
		this.rootElement.append(this.leftButton, this.dnaElement, this.markerElement, this.rightButton);
		this.element.append(this.textElement, this.titleElement, this.rootElement);
	}
	
	
	onLeftButtonClicked()
	{
		if (this.value <= this.minValue) return false;
		
		--this.value;
		this.textElement.text(this.value);
		
		if (this.useDna) this.updateDnaMarker();
		return true;
	}
	
	
	onRightButtonClicked()
	{
		if (this.value >= this.maxValue) return false;
		
		++this.value;
		this.textElement.text(this.value);
		
		if (this.useDna) this.updateDnaMarker();
		return true;
	}
	
	
	onDnaImageMouseMove(e)
	{
		if (e.buttons == 1) this.onDnaImageClicked(e);
	}
	
	
	onDnaImageClicked(e)
	{
		var elm = this.dnaElement;
		var xPos = e.pageX - elm.offset().left;
		var yPos = e.pageY - elm.offset().top;
		
		console.log(xPos, yPos);
		
		var dnaWidth = this.dnaElement.width();
		var offset = this.dnaElement.offset().left - this.rootElement.offset().left;
		var newOffset = xPos + offset;
		var range = this.maxValue - this.minValue;
		
		this.markerElement.css("left", newOffset);
		
		if (range <= 0) return;
		
		var newValue = Math.round(xPos / dnaWidth * range);
		
		if (newValue <= this.minValue) newValue = this.minValue;
		if (newValue >= this.maxValue) newValue = this.maxValue;
		
		this.value = newValue;
		this.textElement.text(this.value);
	}
	
	
	updateDnaMarker()
	{
		var offset = this.dnaElement.offset().left - this.rootElement.offset().left;
		var dnaWidth = this.dnaElement.width();
		var range = this.maxValue - this.minValue;
		
		if (range <= 0) return;
		
		var newOffset = dnaWidth * (this.value - this.minValue) / range + offset;
		
		this.markerElement.css("left", newOffset);
	}
	
}