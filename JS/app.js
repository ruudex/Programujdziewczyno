'use strict';

document.addEventListener('DOMContentLoaded', function () {
    //zadanie 1 warsztaty
    var forDropdown = document.querySelector('.for-dropdown');
    console.log('forDropdown');
    var menu = document.querySelector('.dropdown');
    console.log('menu');
    
    forDropdown.addEventListener('mouseover', function () {
        menu.style.display='block';   
    });
    
    forDropdown.addEventListener('mouseout', function () {
        menu.style.display = 'none';
    });
    
    //zadanie 2 warsztaty
    var button=document.querySelectorAll('.read-more');
    
    function showHide() {
      var textArea = this.previousElementSibling;
    
      if (textArea.style.display === 'none' || textArea.style.display === '') {
        textArea.style.display = 'block';
        this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
      } else {
        textArea.style.display = 'none';
        this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
      }
    } 
    
    for (var i = 0; i <= button.length; i++) {
        button[i].addEventListener('click', showHide);
    }
    
    
});

