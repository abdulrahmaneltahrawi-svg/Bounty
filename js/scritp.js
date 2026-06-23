<<<<<<< HEAD
// تحميل الهيدر من ملف components/header.html
fetch('components/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
  })
=======
// تحميل الهيدر من ملف components/header.html
fetch('components/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
  })
>>>>>>> 7e7d2e9990b7605eb745574f3fc2e6f8f3cbea96
  .catch(error => console.error('Error loading header:', error));