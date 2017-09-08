var deadAnimals = ["hús", "csirke", "kolbász", "sonka", "tarja", "szalámi", "tenger gyümölcsei", "virsli", "tonhal", "bolognai", "bacon", "jérce", "lazac", "borjú", "pulyka", "pecsenye", "gulyás", "csülök", "marha", "pacal", "zúza", "sertés", "pörkölt", "hentes", "flekken", "harcsa", "rákfélék", "kaviár", "tepertő", "kacsa"];

function disable(description) {
	description.parentNode.parentNode.style.opacity = "0.3";
}

function enable(description) {
	description.parentNode.parentNode.style.backgroundColor = "#cef8d9";
}

function doit(description) {
	deadAnimals.forEach(function(deadAnimal) {
		if (description.parentNode == null) {
			return;
		}

		if (description.innerHTML.toLowerCase().includes("vegetáriánus")) {
			enable(description);
			return;
		}
		
		if (description.innerHTML.toLowerCase().includes(deadAnimal)) {
			disable(description);
			return;
		}

		var nodes = description.parentNode.childNodes;
		for (var i = 0; i < nodes.length; i++) {
			if (nodes[i].className == "item-name") {
				if (nodes[i].innerHTML.toLowerCase().includes(deadAnimal)) {
					disable(description);
					return;
				}
				break;
			}
		}

		enable(description);
	});
}

Array.from(document.getElementsByClassName("item-description")).forEach(doit);

