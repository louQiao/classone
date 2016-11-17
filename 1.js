(function drag(box){

	function down(ev){
		var disX = ev.pageX - box.offsetLeft;

	function move(ev){
		box.style.left = ev.pageX - disX;

	}
})()
