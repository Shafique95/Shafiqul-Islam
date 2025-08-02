# 🌐 Namecheap এ Subdomain Setup - সহজ গাইড

## 📱 Namecheap এ কিভাবে CNAME Record Add করবেন:

### 🔐 Step 1: Login করুন
```
1. namecheap.com এ যান
2. আপনার account login করুন
3. Dashboard এ যাবেন
```

### 📋 Step 2: Domain খুঁজুন
```
1. "Domain List" দেখুন বা search করুন
2. qultec.com খুঁজে বের করুন
3. "Manage" button ক্লিক করুন
```

### ⚙️ Step 3: DNS Settings এ যান
```
1. "Advanced DNS" tab ক্লিক করুন
2. এখানে আপনার DNS records দেখতে পাবেন
3. "Add New Record" button খুঁজুন (নীচের দিকে)
```

### ➕ Step 4: CNAME Record Add করুন
```
Form এ এই তথ্য দিন:

📋 Record Type: "CNAME Record" select করুন
📝 Host: portfolio (এখানে "portfolio" লিখুন)
🌐 Value: cname.vercel-dns.com (এখানে এটা লিখুন)
⏰ TTL: "Automatic" রেখে দিন
```

### ✅ Step 5: Save করুন
```
1. "Save All Changes" button ক্লিক করুন
2. একটি confirmation message আসবে
3. 15-30 মিনিট wait করুন DNS propagation এর জন্য
```

## 🔍 Visual Guide:

```
Namecheap Dashboard
├── Domain List
│   └── qultec.com [Manage] ← এখানে ক্লিক
│       ├── Basic DNS (skip this)
│       └── Advanced DNS ← এখানে যান
│           ├── Existing records (A, MX, etc.)
│           └── [Add New Record] ← এই button ক্লিক
│               ├── Type: CNAME Record ← select
│               ├── Host: portfolio ← type
│               ├── Value: cname.vercel-dns.com ← type
│               └── [Save All Changes] ← click
```

## ⚠️ Common Mistakes এড়ান:
- ❌ "www" লিখবেন না Host field এ
- ❌ "http://" বা "https://" লিখবেন না Value তে
- ❌ Domain name (.com) লিখবেন না Host এ
- ✅ শুধু "portfolio" Host এ লিখুন
- ✅ শুধু "cname.vercel-dns.com" Value তে লিখুন

## 📞 Need Help?
যদি কোনো step বুঝতে সমস্যা হয়, আমাকে বলুন! আমি আরো সহজ করে বুঝিয়ে দেব।
