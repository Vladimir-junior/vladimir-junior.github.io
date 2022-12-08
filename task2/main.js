function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}

function toggleMenu(ev) {
  const element = document.querySelector('.nav-menu');
  element.classList.toggle('colapsed');
}

function clickOnReview(ev) {
  const activePointElement = document.querySelector('.review-item-point.active')
  if (activePointElement) {
    activePointElement.classList.remove('active');
  }

  const targetPoint = document.getElementById(ev.currentTarget.dataset.item);
  targetPoint.classList.add("active");

  const activeElement = document.querySelector('.review-item.active');
  activeElement.classList.remove('active');
  ev.currentTarget.classList.add("active");
}

document.addEventListener('DOMContentLoaded', function(){ 
  document.querySelectorAll('.review-item').forEach((e) => {
    e.addEventListener('click', clickOnReview)
  })

  document.querySelector('.menu-buter-btn').addEventListener('click', toggleMenu);

});

