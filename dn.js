// Lấy thông tin các trường input
const nameInput = document.getElementsByName('name')[0];
const numberInput = document.getElementsByName('number')[0];
const passwordInput = document.querySelector('input[name="password"]');

// Tạo biến lưu trữ trạng thái thông báo lỗi
let errorFlag = false;

// Hàm kiểm tra tính hợp lệ của họ tên
function validateName() {
  const regex = /^[A-Za-z ]+$/;
  if (!regex.test(nameInput.value)) {
    alert('Họ tên chỉ được sử dụng chữ cái');
    nameInput.value = '';
    errorFlag = true;
  }
}

// Hàm kiểm tra tính hợp lệ của mã sinh viên
function validateNumber() {
  const regex = /^[0-9]+$/;
  if (!regex.test(numberInput.value)) {
    alert('Mã sinh viên chỉ được sử dụng chữ số!');
    numberInput.value = '';
    errorFlag = true;
  }
}

// Hàm kiểm tra tính hợp lệ của mật khẩu
function validatePassword() {
  const regex = /^[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/;
  if (!regex.test(passwordInput.value)) {
    alert('Mật khẩu chỉ được sử dụng chữ cái, chữ số và các ký tự đặc biệt !@#$%^&*()_+-=[]{};:\'"\\|,.<>/?');
    passwordInput.value = '';
    errorFlag = true;
  }
}

// Hàm kiểm tra tính hợp lệ của toàn bộ form
function validateForm() {
  // Reset trạng thái thông báo lỗi
  errorFlag = false;
  
  // Kiểm tra từng trường input
  validateName();
  validateNumber();
  validatePassword();

  // Hiển thị thông báo đăng nhập thành công khi không có lỗi xảy ra
  if (!errorFlag) {
    alert('Đăng nhập thành công!');
    location.href = 'index.html'; // Chuyển về trang chủ sau khi đăng nhập thành công
  }
}

// Xử lý sự kiện click nút Đăng nhập
const registerButton = document.getElementsByClassName('registerbutton')[0];
registerButton.onclick = function(e) {
  e.preventDefault(); // Ngăn chặn sự kiện mặc định của nút submit
  
  // Kiểm tra tính hợp lệ của form
  validateForm();
}
