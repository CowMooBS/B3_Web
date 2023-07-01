document.addEventListener("DOMContentLoaded", function() {
    var registerForm = document.querySelector("form");
    var registerButton = document.querySelector(".registerbutton");
  
    registerButton.addEventListener("click", function(event) {
      event.preventDefault(); // Ngăn chặn hành vi mặc định của nút submit
  
      // Kiểm tra các điều kiện đăng ký
      var nameInput = document.querySelector('input[name="name"]');
      var numberInput = document.querySelector('input[name="number"]');
      var passwordInput = document.querySelector('input[name="number1"]');
      var confirmPasswordInput = document.querySelector('input[name="number1-repeat"]');
      var errorMessage = "";
  
      if (nameInput.value.length > 20) {
        errorMessage += "Tên không được quá 20 ký tự.\n";
      }
  
      if (!/^\d+$/.test(numberInput.value)) {
        errorMessage += "Mã sinh viên chỉ được chứa số.\n";
      }
  
      if (!/^[a-z]/.test(passwordInput.value)) {
        errorMessage += "Mật khẩu phải bắt đầu bằng chữ cái thường.\n";
      }
  
      if (passwordInput.value.length > 20 || confirmPasswordInput.value.length > 20) {
        errorMessage += "Mật khẩu không được quá 20 ký tự.\n";
      }
  
      if (passwordInput.value !== confirmPasswordInput.value) {
        errorMessage += "Mật khẩu nhập lại không khớp.\n";
      }
  
      if (errorMessage !== "") {
        alert(errorMessage);
      } else {
        alert("Đăng ký thành công!");
        registerForm.submit(); // Gửi biểu mẫu đăng ký
        window.location.href = "index.html"; // Chuyển hướng về trang chủ
      }
    });
  });
  