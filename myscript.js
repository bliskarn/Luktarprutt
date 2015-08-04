//credit goes to Steven Frank of Cloud to Butt (https://github.com/panicsteve/cloud-to-butt/)

walk(document.body);

function walk(node)  
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bgynnar SD\b/g, "luktar prutt");
	v = v.replace(/\bgynnar sverigedemokraterna\b/g, "luktar prutt");
	v = v.replace(/\bgynnar Sverigedemokraterna\b/g, "luktar prutt");
	v = v.replace(/\bgynna SD\b/g, "lukta prutt");
	v = v.replace(/\bgynna sverigedemokraterna\b/g, "lukta prutt");
	v = v.replace(/\bgynna Sverigedemokraterna\b/g, "lukta prutt");
	textNode.nodeValue = v;
}
