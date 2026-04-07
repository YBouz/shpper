type LegalPage = {
  titleKey: string;
  effectiveDate: string;
  lastModified: string;
  content: { en: string; ar: string };
};

export const LEGAL_PAGES: Record<string, LegalPage> = {
  "privacy-policy": {
    titleKey: "privacyPolicy",
    effectiveDate: "February 9, 2026",
    lastModified: "March 16, 2026",
    content: {
      en: `
<h2>1. Introduction</h2>
<p>SHPPER Software Design FZCO ("Shpper", "we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal data when you use our platform and services.</p>

<h2>2. Information We Collect</h2>
<h3>Personal Information</h3>
<p>When you register or use our platform, we may collect:</p>
<ul>
<li>Full name, email address, and phone number</li>
<li>Shipping and billing addresses</li>
<li>Payment information (processed securely through third-party payment gateways)</li>
<li>Government-issued ID (for identity verification purposes)</li>
</ul>
<h3>Device & Usage Information</h3>
<ul>
<li>Device type, operating system, and browser information</li>
<li>IP address and approximate location data</li>
<li>App usage data, session duration, and interaction logs</li>
</ul>
<h3>Third-Party Data</h3>
<p>We may receive data from social login providers (e.g., Google, Apple) if you choose to sign in using these services.</p>

<h2>3. How We Use Your Information</h2>
<ul>
<li>To provide, maintain, and improve our services</li>
<li>To process transactions and send related notifications</li>
<li>To verify identities and prevent fraud</li>
<li>To personalize your experience and provide relevant recommendations</li>
<li>To communicate with you about updates, promotions, and support</li>
<li>To comply with legal obligations</li>
</ul>

<h2>4. Data Sharing</h2>
<p>We do not sell your personal data. We may share information with:</p>
<ul>
<li>Sellers and travelers on the platform (only as necessary to fulfill orders)</li>
<li>Payment gateway providers for transaction processing</li>
<li>Cloud hosting and infrastructure providers</li>
<li>Analytics and performance monitoring services</li>
<li>Law enforcement or regulatory authorities when required by law</li>
</ul>

<h2>5. Data Security</h2>
<p>We implement industry-standard security measures including encryption, secure servers, and regular security audits to protect your personal data.</p>

<h2>6. Your Rights</h2>
<p>You have the right to:</p>
<ul>
<li>Access your personal data</li>
<li>Request correction of inaccurate data</li>
<li>Request deletion of your data</li>
<li>Withdraw consent for marketing communications</li>
<li>Data portability</li>
</ul>

<h2>7. Age Requirement</h2>
<p>Our platform is intended for users aged 18 and above. We do not knowingly collect data from minors.</p>

<h2>8. International Data Transfers</h2>
<p>Your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.</p>

<h2>9. Contact Us</h2>
<p>For privacy-related inquiries, contact us at <strong>info@shpper.com</strong>.</p>
      `,
      ar: `
<h2>1. مقدمة</h2>
<p>تلتزم شركة شبّر لتصميم البرمجيات ش.ذ.م.م ("شبّر"، "نحن"، "لنا") بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وتخزين وحماية بياناتك الشخصية عند استخدام منصتنا وخدماتنا.</p>

<h2>2. المعلومات التي نجمعها</h2>
<h3>المعلومات الشخصية</h3>
<p>عند التسجيل أو استخدام منصتنا، قد نجمع:</p>
<ul>
<li>الاسم الكامل والبريد الإلكتروني ورقم الهاتف</li>
<li>عناوين الشحن والفواتير</li>
<li>معلومات الدفع (تتم معالجتها بأمان عبر بوابات دفع خارجية)</li>
<li>بطاقة هوية حكومية (لأغراض التحقق من الهوية)</li>
</ul>
<h3>معلومات الجهاز والاستخدام</h3>
<ul>
<li>نوع الجهاز ونظام التشغيل ومعلومات المتصفح</li>
<li>عنوان IP وبيانات الموقع التقريبي</li>
<li>بيانات استخدام التطبيق ومدة الجلسة وسجلات التفاعل</li>
</ul>

<h2>3. كيف نستخدم معلوماتك</h2>
<ul>
<li>لتقديم خدماتنا وصيانتها وتحسينها</li>
<li>لمعالجة المعاملات وإرسال الإشعارات ذات الصلة</li>
<li>للتحقق من الهوية ومنع الاحتيال</li>
<li>لتخصيص تجربتك وتقديم توصيات ذات صلة</li>
<li>للتواصل معك بشأن التحديثات والعروض والدعم</li>
</ul>

<h2>4. مشاركة البيانات</h2>
<p>نحن لا نبيع بياناتك الشخصية. قد نشارك المعلومات مع:</p>
<ul>
<li>البائعين والمسافرين على المنصة (حسب الضرورة لتنفيذ الطلبات فقط)</li>
<li>مزودي بوابات الدفع لمعالجة المعاملات</li>
<li>مزودي الاستضافة السحابية والبنية التحتية</li>
<li>السلطات القانونية عند الاقتضاء</li>
</ul>

<h2>5. أمن البيانات</h2>
<p>نطبق تدابير أمنية معيارية تشمل التشفير والخوادم الآمنة والتدقيق الأمني المنتظم لحماية بياناتك الشخصية.</p>

<h2>6. حقوقك</h2>
<p>لديك الحق في:</p>
<ul>
<li>الوصول إلى بياناتك الشخصية</li>
<li>طلب تصحيح البيانات غير الدقيقة</li>
<li>طلب حذف بياناتك</li>
<li>سحب الموافقة على الاتصالات التسويقية</li>
</ul>

<h2>7. شرط العمر</h2>
<p>منصتنا مخصصة للمستخدمين بعمر 18 عامًا فما فوق.</p>

<h2>8. تواصل معنا</h2>
<p>للاستفسارات المتعلقة بالخصوصية، تواصل معنا على <strong>info@shpper.com</strong>.</p>
      `,
    },
  },
  "cookie-policy": {
    titleKey: "cookiePolicy",
    effectiveDate: "February 9, 2026",
    lastModified: "March 16, 2026",
    content: {
      en: `
<h2>1. What Are Cookies</h2>
<p>Cookies are small text files stored on your device when you visit our website or use our app. They help us provide a better user experience by remembering your preferences and understanding how you use our platform.</p>

<h2>2. Types of Cookies We Use</h2>
<h3>Strictly Necessary Cookies</h3>
<p>Essential for the platform to function properly. These cookies enable core features such as authentication, security, and shopping cart functionality. You cannot opt out of these cookies.</p>

<h3>Performance & Analytics Cookies</h3>
<p>Help us understand how visitors interact with our platform by collecting information about traffic, errors, and usage patterns. This data is anonymized and used solely for improvement purposes.</p>

<h3>Functional Cookies</h3>
<p>Remember your preferences such as language settings, location, and display preferences to provide a more personalized experience.</p>

<h3>Marketing & Advertising Cookies</h3>
<p>Used to deliver targeted advertisements and measure the effectiveness of our marketing campaigns. These may be set by third-party advertising partners.</p>

<h2>3. Managing Cookies</h2>
<p>You can manage your cookie preferences through your browser settings. Please note that disabling certain cookies may affect the functionality of our platform.</p>

<h2>4. Third-Party Cookies</h2>
<p>We may use third-party analytics and advertising services that set their own cookies. These are governed by their respective privacy policies.</p>

<h2>5. Contact Us</h2>
<p>For questions about our cookie practices, contact us at <strong>info@shpper.com</strong>.</p>
      `,
      ar: `
<h2>1. ما هي ملفات تعريف الارتباط</h2>
<p>ملفات تعريف الارتباط هي ملفات نصية صغيرة تُخزّن على جهازك عند زيارة موقعنا أو استخدام تطبيقنا. تساعدنا في تقديم تجربة مستخدم أفضل من خلال تذكر تفضيلاتك وفهم كيفية استخدامك لمنصتنا.</p>

<h2>2. أنواع ملفات تعريف الارتباط التي نستخدمها</h2>
<h3>ملفات تعريف الارتباط الضرورية</h3>
<p>ضرورية لعمل المنصة بشكل صحيح. تتيح هذه الملفات الميزات الأساسية مثل المصادقة والأمان ووظائف سلة التسوق.</p>

<h3>ملفات الأداء والتحليلات</h3>
<p>تساعدنا في فهم كيفية تفاعل الزوار مع منصتنا من خلال جمع معلومات حول حركة المرور والأخطاء وأنماط الاستخدام.</p>

<h3>ملفات تعريف الارتباط الوظيفية</h3>
<p>تتذكر تفضيلاتك مثل إعدادات اللغة والموقع وتفضيلات العرض.</p>

<h3>ملفات التسويق والإعلان</h3>
<p>تُستخدم لتقديم إعلانات مستهدفة وقياس فعالية حملاتنا التسويقية.</p>

<h2>3. إدارة ملفات تعريف الارتباط</h2>
<p>يمكنك إدارة تفضيلات ملفات تعريف الارتباط من خلال إعدادات المتصفح. يرجى ملاحظة أن تعطيل بعض الملفات قد يؤثر على وظائف منصتنا.</p>

<h2>4. تواصل معنا</h2>
<p>للأسئلة حول ممارسات ملفات تعريف الارتباط، تواصل معنا على <strong>info@shpper.com</strong>.</p>
      `,
    },
  },
  "terms-conditions": {
    titleKey: "termsConditions",
    effectiveDate: "February 9, 2026",
    lastModified: "March 16, 2026",
    content: {
      en: `
<h2>1. Acceptance of Terms</h2>
<p>By accessing or using the Shpper platform ("Platform"), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.</p>

<h2>2. About Shpper</h2>
<p>Shpper is a peer-to-peer marketplace connecting buyers with travelers. Shpper does not own, manufacture, or directly sell any products listed on the platform. We act as an intermediary facilitating transactions between users.</p>

<h2>3. Eligibility</h2>
<p>You must be at least 18 years old to use our platform. By registering, you confirm that you meet this age requirement and that the information you provide is accurate.</p>

<h2>4. User Accounts</h2>
<ul>
<li>You are responsible for maintaining the security of your account credentials</li>
<li>You must not share your account with others</li>
<li>You are responsible for all activities under your account</li>
<li>We reserve the right to suspend or terminate accounts that violate these terms</li>
</ul>

<h2>5. Prohibited Activities</h2>
<p>Users must not:</p>
<ul>
<li>List or purchase counterfeit, illegal, or prohibited goods</li>
<li>Engage in fraudulent activities or misrepresentation</li>
<li>Harass, abuse, or threaten other users</li>
<li>Attempt to circumvent platform fees or security measures</li>
<li>Use the platform for money laundering or other illegal purposes</li>
</ul>

<h2>6. Payments</h2>
<p>All payments are processed through secure third-party payment processors. Shpper does not store complete payment card information. Transaction fees and commission structures are clearly disclosed before order confirmation.</p>

<h2>7. Returns & Refunds</h2>
<p>Returns may be requested within 7 days of delivery, subject to a valid reason being provided. Refunds are processed according to the original payment method. Certain items may not be eligible for return.</p>

<h2>8. Limitation of Liability</h2>
<p>Shpper acts as an intermediary and is not liable for the quality, safety, or legality of items exchanged between users. We are not responsible for disputes between buyers and travelers, though we will make reasonable efforts to mediate.</p>

<h2>9. Governing Law</h2>
<p>These Terms are governed by the laws of the United Arab Emirates. Any disputes shall be resolved in the courts of Dubai, UAE.</p>

<h2>10. Changes to Terms</h2>
<p>We reserve the right to modify these Terms at any time. Continued use of the platform after changes constitutes acceptance of the updated Terms.</p>

<h2>11. Contact</h2>
<p>For questions about these Terms, contact us at <strong>info@shpper.com</strong>.</p>
      `,
      ar: `
<h2>1. قبول الشروط</h2>
<p>باستخدام منصة شبّر ("المنصة")، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق، يرجى عدم استخدام خدماتنا.</p>

<h2>2. عن شبّر</h2>
<p>شبّر هي سوق نظير إلى نظير تربط المشترين بالمسافرين. لا تمتلك شبّر أو تصنّع أو تبيع مباشرة أي منتجات مدرجة على المنصة. نحن نعمل كوسيط لتسهيل المعاملات بين المستخدمين.</p>

<h2>3. الأهلية</h2>
<p>يجب أن يكون عمرك 18 عامًا على الأقل لاستخدام منصتنا. بالتسجيل، تؤكد أنك تستوفي هذا الشرط وأن المعلومات التي تقدمها دقيقة.</p>

<h2>4. حسابات المستخدمين</h2>
<ul>
<li>أنت مسؤول عن الحفاظ على أمان بيانات حسابك</li>
<li>لا يجوز مشاركة حسابك مع الآخرين</li>
<li>أنت مسؤول عن جميع الأنشطة تحت حسابك</li>
<li>نحتفظ بالحق في تعليق أو إنهاء الحسابات التي تنتهك هذه الشروط</li>
</ul>

<h2>5. الأنشطة المحظورة</h2>
<p>يجب على المستخدمين عدم:</p>
<ul>
<li>إدراج أو شراء سلع مقلدة أو غير قانونية أو محظورة</li>
<li>الانخراط في أنشطة احتيالية أو تضليل</li>
<li>مضايقة أو إساءة أو تهديد المستخدمين الآخرين</li>
<li>محاولة التحايل على رسوم المنصة أو إجراءات الأمان</li>
</ul>

<h2>6. المدفوعات</h2>
<p>تتم معالجة جميع المدفوعات عبر معالجات دفع آمنة تابعة لجهات خارجية. لا تخزّن شبّر معلومات بطاقة الدفع الكاملة.</p>

<h2>7. الإرجاع والاسترداد</h2>
<p>يمكن طلب الإرجاع خلال 7 أيام من التسليم، بشرط تقديم سبب مقبول. تتم معالجة المبالغ المستردة وفقًا لطريقة الدفع الأصلية.</p>

<h2>8. القانون المعمول به</h2>
<p>تخضع هذه الشروط لقوانين دولة الإمارات العربية المتحدة. يتم حل أي نزاعات في محاكم دبي.</p>

<h2>9. تواصل معنا</h2>
<p>للأسئلة حول هذه الشروط، تواصل معنا على <strong>info@shpper.com</strong>.</p>
      `,
    },
  },
};
