emailjs.init("gaVh_PRtM2D2am3rI");

    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toast-message");

    function showToast(message, type = "success") {
      toast.className = "toast show " + type;
      toastMessage.textContent = message;
      setTimeout(() => hideToast(), 3000);
    }

    function hideToast() {
      toast.classList.remove("show");
    }

    document.getElementById("contact-form").addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.send("service_ek6adqr", "template_10yff1n", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      })
      .then(() => {
        showToast("✅ Message sent successfully!", "success");
        // setTimeout(() => location.reload(), 1500);
        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("message").value = ""

      })
      .catch((error) => {
        console.error("Error:", error);
        showToast("❌ Failed to send message. Try again later.", "error");
      });
    });