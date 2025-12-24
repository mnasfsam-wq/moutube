// وظيفة رفع الفيديو (تضيف الفيديو للصفحة فوراً)
function uploadVideo() {
    const title = document.getElementById('videoTitle').value;
    const url = document.getElementById('videoUrl').value;
    const category = document.getElementById('videoCategory').value;

    if(!title || !url) return alert("امْلأ البيانات يا بطل!");

    const videoHTML = `
        <div class="card ${category === 'shorts' ? 'short' : 'long'}">
            <div class="thumb">
                <iframe width="100%" height="100%" src="${url.replace('watch?v=', 'embed/')}" frameborder="0" allowfullscreen></iframe>
            </div>
            <p>${title}</p>
        </div>
    `;

    // تحديد القسم المناسب للرفع
    if(category === 'games') document.getElementById('gamesGrid').innerHTML += videoHTML;
    else if(category === 'shorts') document.getElementById('shortsGrid').innerHTML += videoHTML;
    else document.getElementById('videosGrid').innerHTML += videoHTML;

    alert("تم النشر بنجاح! فيديوهاتك الآن مباشرة");
}

// إظهار لوحة التحكم فقط إذا كان المستخدم "Admin" (مثال)
function checkAdmin(user) {
    if(user === "admin") {
        document.getElementById('adminPanel').style.display = 'block';
    }
}

// تحديث نظام الدخول ليشمل لوحة التحكم
const originalHandleAuth = handleAuth;
handleAuth = function() {
    const user = document.getElementById('username').value;
    originalHandleAuth(); // تشغيل الكود القديم
    checkAdmin(user.toLowerCase()); // التحقق من الصلاحيات
}
