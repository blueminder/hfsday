function createTooltip() {
    var selection= window.getSelection().getRangeAt(0);
    var selectedText = selection.extractContents();
    var span= document.createElement("span");
    span.classList.add('toll-tooltip');
    span.classList.add('tooltip-' + (document.querySelectorAll('.toll-tooltip').length + 1));
	  span.setAttribute("title", result.toFixed(2) + " 9/11s");
    span.appendChild(selectedText);
    selection.insertNode(span);
	  console.log(result.toFixed(2) + " 9/11s");
}

var selection = window.getSelection().toString();
var toll = parseFloat(selection.replace(/[^0-9.]/g, ''));

if(isNaN(toll)) {
	console.log("NaN");
} else {
	var result = toll*(1/2977.0);
  // 2977 casualties recorded (not including the hijackers, because fuck those guys)
  createTooltip();
  var tooltip = new Drooltip({
		"element": ".tooltip-" + document.querySelectorAll('.toll-tooltip').length,
		"position": "bottom"
	});
  tooltip.animateAllTooltips();
}
