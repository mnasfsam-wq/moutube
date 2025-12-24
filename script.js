// استبدل وظيفة رفع الفيديو بهذا الكود المطور
function uploadVideo() {
    let title = document.getElementById('videoTitle').value;
    let url = document.getElementById('videoUrl').value;
    let category = document.getElementById('videoCategory').value;

    if(!title || !url) return alert("امْلأ البيانات يا بطل!");

    // تحويل رابط يوتيوب العادي إلى رابط Embed
    let videoId = "";
    if(url.includes("v=")) {
        videoId = url.split("v=")[1].split("&")[0];
    } else if(url.includes("youtu.be/")) {
        videoId = url.split("youtu.be/")[1];
    }
    
    let finalUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : url;

    const videoHTML = `
        <div class="card ${category === 'shorts' ? 'short' : 'long'}">
            <div class="thumb">
                <iframe width="100%" height="100%" src="${finalUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p style="padding:10px; font-weight:bold;">${title}</p>
        </div>
    `;

    if(category === 'games') document.getElementById('gamesGrid').innerHTML += videoHTML;
    else if(category === 'shorts') document.getElementById('shortsGrid').innerHTML += videoHTML;
    else document.getElementById('videosGrid').innerHTML += videoHTML;

    alert("تم النشر بنجاح! شاهد الفيديو الآن");
}    originalHandleAuth(); // تشغيل الكود القديم
    checkAdmin(user.toLowerCase()); // التحقق من الصلاحيات
}
