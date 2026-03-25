const fs = require('fs');
async function test() {
  const submitData = new FormData();
  submitData.append("access_key", "e3cc6dc4-f2cf-4471-b18a-974ac819dbe2");
  submitData.append("subject", `New Course Purchase`);
  submitData.append("Course", "Test");
  submitData.append("Name", "Test Name");
  submitData.append("Email", "test@example.com");
  submitData.append("WhatsApp", "1234567890");
  
  // Create a dummy file blob
  const blob = new Blob(["test file content"], { type: "text/plain" });
  submitData.append("Payment_Screenshot", blob, "test.txt");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: submitData
    });
    const data = await response.json();
    console.log("Response:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}
test();
