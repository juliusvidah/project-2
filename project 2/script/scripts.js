document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.pagination .prev');
    const nextButton = document.querySelector('.pagination .next');
    const pageNumbers = document.querySelectorAll('.pagination span');
   
    let currentPage = 1;
   
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            updatePagination();
        }
    });
   
    nextButton.addEventListener('click', () => {
        if (currentPage < pageNumbers.length) {
            currentPage++;
            updatePagination();
        }
    });
   
    pageNumbers.forEach((page, index) => {
        page.addEventListener('click', () => {
            currentPage = index + 1;
            updatePagination();
        });
    });
   
    function updatePagination() {
        pageNumbers.forEach((page, index) => {
            if (index + 1 === currentPage) {
                page.style.backgroundColor = '#2980b9';
                page.style.color = '#fff';
            } else {
                page.style.backgroundColor = '#ecf0f1';
                page.style.color = '#000';
            }
        });
    }
});

function toggleDropdown() {
    var dropdownMenu = document.getElementById("myDropdown");
    dropdownMenu.classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  
  