var deadAnimals = ["hús", "csirke", "kolbász", "sonka", "tarja", "szalámi", "tenger gyümölcsei", "virsli", "tonhal", "bolognai", "bacon", "jérce", "lazac", "borjú", "pulyka", "pecsenye", "gulyás", "csülök", "marha", "pacal", "zúza", "sertés", "pörkölt", "hentes", "flekken", "harcsa", "rákfélék", "kaviár", "tepertő", "kacsa"];

function doit(description) {
	deadAnimals.forEach(function(deadAnimal) {
		if (description.parentNode == null || description.innerHTML.toLowerCase().includes("vegetáriánus")) {
			return;
		}
		
		if (description.innerHTML.toLowerCase().includes(deadAnimal)) {
			description.parentNode.parentNode.style.opacity = "0.3";
		} else {
			description.parentNode.parentNode.style.backgroundColor = "#cef8d9";
		}
	});
}

Array.from(document.getElementsByClassName("item-description")).forEach(doit);
Array.from(document.getElementsByClassName("item-name")).forEach(doit);
