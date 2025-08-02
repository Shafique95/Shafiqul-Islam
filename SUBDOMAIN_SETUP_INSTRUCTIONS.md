# 🚀 Subdomain Setup Instructions for portfolio.qultec.com

## 📋 Domain Provider Setup (আপনি করবেন)

### Step 1: DNS Record Add করুন
```
Record Type: CNAME
Name: portfolio
Value: cname.vercel-dns.com
TTL: 3600 (or Automatic)
```

### Common Domain Providers:

#### 🌐 Namecheap (বিস্তারিত):

**Step by Step:**
1. 🌐 namecheap.com এ login করুন
2. 📋 "Domain List" এ যান
3. 🔧 qultec.com এর পাশে "Manage" ক্লিক করুন
4. 📝 "Advanced DNS" tab ক্লিক করুন
5. ➕ "Add New Record" button ক্লিক করুন
6. 📋 এই তথ্য দিন:
   - Type: CNAME Record
   - Host: portfolio
   - Value: cname.vercel-dns.com
   - TTL: Automatic
7. ✅ "Save All Changes" ক্লিক করুন

**Screenshot Guide:**
- Domain List → Manage → Advanced DNS → Add New Record
- Form এ CNAME select করুন
- Host field এ "portfolio" লিখুন
- Value field এ "cname.vercel-dns.com" লিখুন

#### 🌐 GoDaddy:
1. DNS Management → Add Record
2. Type: CNAME
3. Name: portfolio
4. Value: cname.vercel-dns.com

#### 🌐 Cloudflare:
1. DNS → Add record
2. Type: CNAME
3. Name: portfolio
4. Target: cname.vercel-dns.com

## 🚀 Vercel Setup (আপনি করবেন)

### Step 2: Vercel এ Domain Add
1. vercel.com → Login
2. Project "Shafiqul-Islam" select
3. Settings → Domains
4. Add Domain: `portfolio.qultec.com`
5. Wait for verification (2-5 minutes)

## ✅ Verification Process
- DNS propagation: 15-30 minutes
- SSL certificate: Automatic
- HTTPS redirect: Automatic

## 🎯 Final URLs
- Main: qultec.com
- Portfolio: portfolio.qultec.com
- Both will work perfectly!

## 📞 Need Help?
If any issues, just ask me! I'll help you troubleshoot.
