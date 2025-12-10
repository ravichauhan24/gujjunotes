# GujjuNotes – Backend (Node.js + Express + MySQL)

GujjuNotes is a backend application designed to manage user authentication, OTP-based signup, note uploads, free/paid content handling, and payment integration using Razorpay.

This backend powers the GujjuNotes platform, where students can upload and download academic notes.

---

## 🚀 Features

### 🔐 Authentication & Users
- User signup with email OTP verification  
- Secure login using JWT  
- Password hashing using bcrypt  

### 📝 Notes Management
- Upload notes via file uploads (multer)  
- Store file metadata in MySQL  
- Support for **free** and **paid** notes  
- Admin approval support (`approved` field)

### 💳 Payment System
- Razorpay order creation  
- Signature verification for secure payments  

### 📧 Email Support
- OTP emails sent using Nodemailer  
- Custom HTML email template  

---

## 📂 Folder Structure

gujjunotes-backend/
│── app.js # Main server file
│── db.js # MySQL database connection
│── gujjunotes.sql # DB tables & schema
│── package.json # Dependencies & scripts
│── .env # Environment variables
│
├── routes/
│ ├── authRoute.js # Login routes
│ ├── signupRoute.js # Signup + OTP verification
│ ├── otpRoute.js # Send OTP endpoint
│ ├── notesRoute.js # Upload & list notes
│ └── payment.js # Razorpay integration
│
├── models/
│ └── noteModel.js # Notes DB model
│
├── middleware/
│ ├── auth.js # JWT verification
│ └── verifyToken.js # Protect routes
│
├── utils/
│ └── sendMail.js # Nodemailer wrapper
│
├── templates/
│ └── otp_template.html # OTP email template
│
└── uploads/ # Uploaded notes stored here