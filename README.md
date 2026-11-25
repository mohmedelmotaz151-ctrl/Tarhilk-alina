# ترحيلك علينا

منصة عربية تربط الباحثين عن ترحيل بأصحاب السيارات الذين لديهم مقاعد متاحة.

## ما تم تنفيذه
- واجهة عربية RTL متجاوبة مع الجوال.
- نشر طلب ترحيل أو عرض سيارة وحفظه في Cloud Firestore.
- استعراض الإعلانات والبحث حسب مدينتي الانطلاق والوجهة.
- تسجيل الدخول والتحقق من رقم الجوال عبر Firebase Authentication (SMS).
- إظهار رقم التواصل فقط بموافقة صاحب الإعلان.
- قواعد Firestore أولية: نشر الإعلان يتطلب مستخدماً مسجلاً، والتعديل والحذف لصاحب الإعلان أو مشرف موثوق.

## إعداد Firebase (مشروع مستقل لهذا التطبيق)

1. أنشئ مشروع Firebase جديداً باسم مناسب لـ Tarhilk-alina، ولا تستخدم مشروع Orkeit.
2. أضف تطبيق Web من إعدادات المشروع وانسخ بيانات Firebase.
3. من Authentication > Sign-in method فعّل Phone.
4. من Authentication > Settings أضف نطاق الموقع الذي ستنشر عليه إلى Authorized domains (مثل نطاق Vercel).
5. أنشئ قاعدة Firestore في وضع الإنتاج.
6. انسخ ملف `firestore.rules` إلى تبويب Rules في Firestore ثم انشر القواعد.
7. انسخ `.env.example` إلى متغيرات البيئة في Vercel، وأدخل القيم الفعلية:
   - `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - `NEXT_PUBLIC_FIREBASE_APP_ID`
   - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
8. أعد نشر التطبيق بعد إضافة المتغيرات.

## التشغيل المحلي
```bash
npm install
cp .env.example .env.local
npm run dev
``

## ما يزال مطلوباً قبل الإطلاق العام
- إدخال مفاتيح Firebase الفعلية وتفعيل Phone Auth وFirestore.
- إعداد صلاحية المشرف عبر Firebase Admin SDK في بيئة خادمية موثوقة (Custom Claims)، وعدم منحها من الواجهة.
- بناء لوحة إدارة فعلية للإعلانات والبلاغات والمستخدمين.
- اختبار إرسال SMS على نطاق الإنتاج، ووضع حدود لمنع إساءة الاستخدام.
- مراجعة المتطلبات والتصاريح النظامية ذات الصلة بنقل الركاب في السعودية.

لا تستخدم GPS أو خرائط أو تتبع مواقع. لا تضع مفاتيح خدمة Firebase Admin أو أسراراً خادمية في المستودع. إعدادات Firebase Web العامة توضع في متغيرات البيئة وتُقيد من إعدادات Firebase حسب النطاقات والاستخدام.
