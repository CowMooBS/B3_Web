// Khai báo các biến
var header = document.querySelector('header');
var footer = document.querySelector('footer');

if (header && footer) {
  // Thêm hiệu ứng scroll khi cuộn trang
  window.addEventListener('scroll', function() {
    // Thay đổi màu nền của header và footer
    header.style.backgroundColor = "#333";
    footer.style.backgroundColor = "#333";
  });
}

// Thêm hiệu ứng hover vào bảng kết quả học tập
var tableRows = document.querySelectorAll('table tr');
for (var i = 0; i < tableRows.length; i++) {
  tableRows[i].addEventListener('mouseover', function() {
    this.style.backgroundColor = "#ddd";
  });
  tableRows[i].addEventListener('mouseout', function() {
    if (this.rowIndex % 2 == 0) {
      this.style.backgroundColor = "#f2f2f2";
    } else {
      this.style.backgroundColor = "white";
    }
  });
}

const whiteRadio = document.getElementById('whiteRadio');
const redRadio = document.getElementById('redRadio');
const greenRadio = document.getElementById('greenRadio');
const blueRadio = document.getElementById('blueRadio');
const body = document.getElementsByTagName('body')[0];

whiteRadio.addEventListener('change', function() {
	body.style.backgroundColor = whiteRadio.value;
});
redRadio.addEventListener('change', function() {
	body.style.backgroundColor = redRadio.value;
});
greenRadio.addEventListener('change', function() {
	body.style.backgroundColor = greenRadio.value;
});
blueRadio.addEventListener('change', function() {
	body.style.backgroundColor = blueRadio.value;
});
