const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

// === بيانات WhatsApp Cloud API ===
const WHATSAPP_TOKEN = "PASTE_YOUR_ACCESS_TOKEN_HERE";
const PHONE_NUMBER_ID = "PASTE_PHONE_NUMBER_ID_HERE";
const YOUR_NUMBER = "01553896282"; // رقمك الحقيقي

app.post("/send-whatsapp", async (req, res) => {
  try {
    const { name, phone, email, service, notes } = req.body;

    const message =
      `طلب جديد من الموقع:\n` +
      `------------------------\n` +
      `الاسم: ${name}\n` +
      `رقم التليفون: ${phone}\n` +
      `البريد: ${email}\n` +
      `الخدمة المطلوبة: ${service}\n` +
      `الملاحظات: ${notes}`;

    const result = await axios.post(
      `https://graph.facebook.com/v17.0/${PHONE_NUMBER_ID}/messages`,
      {
        messaging_product: "whatsapp",
        to: YOUR_NUMBER,
        text: { body: message }
      },
      {
        headers: {
          Authorization: `Bearer ${WHATSAPP_TOKEN}`,
          "Content-Type": "application/json",
        }
      }
    );

    res.json({ success: true, result: result.data });

  } catch (error) {
    console.error(error.response?.data || error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3000, () => console.log("🚀 Server running on port 3000"));
// === نهاية كود السيرفر ===