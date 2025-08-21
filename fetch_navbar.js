fetch("navbar.html")
	.then(response => response.text())
	.then(data => {
		document.getElementById("navbar-container").innerHTML = data;
		highlightNavbar();
	});

function highlightNavbar() {
	const currentPath = window.location.pathname.split("/");
	
	
	//document.write("111");
	var currentPage;
	const len = currentPath.length;
	
	if (len < 2 || currentPath[len - 1] == "")
		currentPage = "index";
	else
		currentPage = currentPath[currentPath.length - 1].replace(".html", "");
	//document.write(document.getElementById("index"));
	//document.write(currentPage);
	document.getElementById(currentPage).classList.add("active");
	//document.write("999");*/
}
