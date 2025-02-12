// استهداف العنصر
let image = document.querySelector('#img')
// الدالة لتغيير المصدر
function changeImageSource() {
    if (window.innerWidth <= 784) {
        image.src = 'assets/images/illustration-sign-up-mobile.svg'; // المصدر الجديد عند تصغير العرض
    } else {
        image.src = 'assets/images/illustration-sign-up-desktop.svg';

         // المصدر الأصلي
    }
}

// تنفيذ الدالة عند تغيير حجم الشاشة
window.addEventListener('resize', changeImageSource);

// تنفيذ الدالة عند تحميل الصفحة للتأكد من أن الصورة صحيحة عند البداية
changeImageSource();
