//My code
window.studentPg = function(){
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
  
    if(name == "admin" && password == "12345678"){
        window.location.href = "student.html";
        getStudents();
    }
    else{
        alert("Incorrect Data");
    }
  }
  
  
  let menu = document.querySelector('#menu-bars');
  let navbar = document.querySelector('.navbar');
  
  menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    searchIcon.classList.remove('fa-times');
    searchForm.classList.remove('active');
  }
  
  let searchIcon = document.querySelector('#search-icon');
  let searchForm = document.querySelector('.search-form');
  
  searchIcon.onclick = () =>{
    searchIcon.classList.toggle('fa-times');
    searchForm.classList.toggle('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
  }
  
  window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    searchIcon.classList.remove('fa-times');
    searchForm.classList.remove('active');
  }