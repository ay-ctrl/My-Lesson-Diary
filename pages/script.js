
fetch('menu.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById("menu-placeholder").innerHTML = data;

    // After the menu is loaded, let's add sidebar functionality
    document.querySelector('.sidebar-toggle').addEventListener('click', function() {
      document.querySelector('#sidebar').classList.toggle('active');
    });
  });





