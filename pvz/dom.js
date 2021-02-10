function appenddom(attr,elem){
	var x=document.createElement(attr);
	elem.appendChild(x);
	return x;
}
function setnewarrt(arrtT,arrtV,elem){
	var arrt=document.createAttribute(arrtT);
	arrt.value=arrtV;
	elem.setAttributeNode(arrt);
	return elem;
}
function setarrt(arrtT,arrtV,elem){
	arrt = elem.getAttributeNode(arrtT);
	arrt.value=arrtV;
	return elem;
}