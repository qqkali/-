let isLogin = true;

const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submit-btn");
const switchBtn = document.getElementById("switch-btn");
const formTitle = document.getElementById("form-title");
const errorMsg = document.getElementById("error-msg");
const switchText = document.getElementById("switch-text");

// تبديل بين تسجيل الدخول والتسجيل
switchBtn.addEventListener("click", () => {
  isLogin = !isLogin;
  fullNameInput.style.display = isLogin ? "none" : "block";
  formTitle.textContent = isLogin ? "تسجيل الدخول" : "إنشاء حساب جديد";
  submitBtn.textContent = isLogin ? "دخول" : "تسجيل";
  switchText.textContent = isLogin ? "ليس لديك حساب؟ " : "لديك حساب؟ ";
  errorMsg.textContent = "";
});

// تنفيذ عملية تسجيل الدخول أو التسجيل
submitBtn.addEventListener("click", async () => {
  errorMsg.textContent = "";
  submitBtn.disabled = true;

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const fullName = fullNameInput.value.trim();

  if (!email || !password || (!isLogin && !fullName)) {
    errorMsg.textContent = "الرجاء ملء جميع الحقول المطلوبة.";
    submitBtn.disabled = false;
    return;
  }

  try {
    // استدعاء Edge Function لتسجيل الدخول
    const response = await fetch("/functions/log-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
        full_name: fullName || null,
        ip_address: "AUTO",
        user_agent: navigator.userAgent
      })
    });

    const data = await response.json();
    if (data.error) throw new Error(data.error);

    alert("تم تسجيل الدخول بنجاح!");
    // إعادة التوجيه للصفحة الرئيسية
    window.location.href = "/home.html";

  } catch (err) {
    errorMsg.textContent = err.message;
  } finally {
    submitBtn.disabled = false;
  }
});
