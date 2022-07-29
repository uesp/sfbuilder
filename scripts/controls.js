

class CSfbValueControl
{
	value = 0;
	maxValue = 0;
	minValue = 0;
	element = null;
	elementId = null;
	useDna = false;
	onValueChangedCallback = null;
	
	titleElement = null;
	rootElement = null;
	leftButton = null;
	rightButton = null;
	textElement = null;
	dnaElement = null;
	markerElement = null;
	
	constructor(elementId, onValueChangedCallback)
	{
		this.elementId = elementId;
		this.element = $("#" + elementId);
		
		this.minValue = this.element.attr("minvalue") || 0;
		this.maxValue = this.element.attr("maxvalue") || 0;
		this.useDna = !!(parseInt(this.element.attr("dna")) || false);
		
		if (this.value < this.minValue) this.value = this.minValue;
		
		this.onValueChangedCallback = onValueChangedCallback;
		
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
		
		this.element.on("mousedown",  () => { this.onMouseDownRoot(); } )
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
		this.dnaElement = $("<div />").addClass("sfbValueControlDnaImage");
		this.dnaElement.on("mousemove tapmove", (e, touch) => { this.onDnaImageMouseMove(e, touch); } );
		this.dnaElement.on("mousedown", (e, touch) => { this.onDnaImageMouseMove(e, touch); } );
		this.markerElement = $("<div />").addClass("sfbValueControlDnaMarker");
		this.leftButton = $("<div />").addClass("sfbValueControlButton").html("&lt;").click( () => { this.onLeftButtonClicked(); } );
		this.rightButton = $("<div />").addClass("sfbValueControlButton").html("&gt;").click( () => { this.onRightButtonClicked(); } );
		
		this.rootElement = $("<div />").addClass("sfbValueControlRoot");
		
		this.rootElement.append(this.leftButton, this.dnaElement, this.markerElement, this.rightButton);
		this.element.append(this.textElement, this.titleElement, this.rootElement);
		
		this.element.on("mousedown",  () => { this.onMouseDownRoot(); } )
	}
	
	
	onMouseDownRoot()
	{
		$(".sfbValueControlSelected").removeClass("sfbValueControlSelected");
		this.element.addClass("sfbValueControlSelected");
	}
	
	
	onLeftButtonClicked()
	{
		if (this.value <= this.minValue) return false;
		
		--this.value;
		this.textElement.text(this.value);
		
		if (this.useDna) this.updateDnaMarker();
		
		if (this.onValueChangedCallback) this.onValueChangedCallback(this.value);
		
		return true;
	}
	
	
	onRightButtonClicked()
	{
		if (this.value >= this.maxValue) return false;
		
		++this.value;
		this.textElement.text(this.value);
		
		if (this.useDna) this.updateDnaMarker();
		
		if (this.onValueChangedCallback) this.onValueChangedCallback(this.value);
		
		return true;
	}
	
	
	onDnaImageMouseMove(e, touch)
	{
		if (e.buttons == 1 || e.type == "tapmove") this.onDnaImageClicked(e, touch);
	}
	
	
	onDnaImageClicked(e, touch)
	{
		if ($.isTouchCapable())
		{
			if (touch == null) return;
			
			if (e.type == "tapmove")
			{
				e.buttons = 1;
				e.pageX = touch.position.x;
				e.pageY = touch.position.y;
			}
		}
		else
		{
			if (e.type == "tapmove") return;
		}
		
		var xPos = e.pageX - this.dnaElement.offset().left;
		var yPos = e.pageY - this.dnaElement.offset().top;
		
		var range = this.maxValue - this.minValue + 1;
		if (range <= 0) return;
		
		var markerWidth = this.markerElement.width();
		var dnaWidth = this.dnaElement.width();
		var subDnaWidth = dnaWidth / range;
		var offset = this.dnaElement.offset().left - this.rootElement.offset().left + 1;
		
		var newValue = Math.round(xPos / dnaWidth * range);
		if (newValue <= this.minValue) newValue = this.minValue;
		if (newValue >= this.maxValue) newValue = this.maxValue;
		
		//var newOffset = subDnaWidth * (newValue - this.minValue) + subDnaWidth/2 + offset + markerWidth/2;
		//console.log(xPos, yPos, dnaWidth, offset, range, newOffset);
		
		if (xPos > dnaWidth - markerWidth/2 - 1) xPos = dnaWidth - markerWidth/2 - 1;
		if (xPos < markerWidth + 1) xPos = markerWidth + 1;
		xPos += offset + markerWidth/2 + 1;
		
		this.markerElement.css("left", xPos);
		
		if (this.value != newValue)
		{
			this.value = newValue;
			this.textElement.text(this.value);
			if (this.onValueChangedCallback) this.onValueChangedCallback(this.value);
		}
	}
	
	
	updateDnaMarker()
	{
		var range = this.maxValue - this.minValue + 1;
		if (range <= 0) return;
		
		var markerWidth = this.markerElement.width();
		var offset = this.dnaElement.offset().left - this.rootElement.offset().left + 1;
		var dnaWidth = this.dnaElement.width();
		
		var subDnaWidth = dnaWidth / range;
		var newOffset = subDnaWidth * (this.value - this.minValue) + subDnaWidth/2 + offset + markerWidth/2;
		
		this.markerElement.css("left", newOffset);
	}
	
}