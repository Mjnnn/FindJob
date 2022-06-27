//item là những row: 1 ,2,3 ,4 ,5,7,8,9,10,11,12,13,14

//trang 1:1.2.3
//trang 2:4.5.6
//trang 3:7.8.9
//......

//itemPerPage=3(số item trong 1 page)
// currentPage=1(currentPage là trnag hiện tại, hiện tại đang ở trang 1)

// start=0 (phần tử đầu trong trang 1)
// end=itemParPage(phần tử cuối trong trang 1)

//  Tổng quát
//      start = ( currentPage-1 ) * itemParPage
//      end = currentPage * itemPerPage
const job = [
    { id: 1, img: "./assets/image/Blog2/a66.png", time: "February 2, 2022 ADMIN", header: "Hướng dẫn NextAuth", demo: "Bài viết này sẽ chỉ ra cách triển khai thư viện Next-Auth.js cho các dự án NextJS & xây dựng quy trình xác thực cơ bản bao gồm một số tính năng như Đăng xuất, Đăng nhập bằng Google, Facebook, Github & thông tin đăng nhập tùy chỉnh, API đăng nhập tùy chỉnh…" },
    { id: 2, img: "./assets/image/Blog2/a77.png", time: "August 30, 2022 ADMIN", header: "10 xu hướng phát triển web hàng đầu 2022 bạn không thể bỏ qua ", demo: "Bill Gates đã nói rằng: Nếu doanh nghiệp của bạn không có Internet, thì doanh nghiệp của bạn sẽ không hoạt động được nữa. Vậy làm thế nào để làm cho sự hiện diện của doanh nghiệp bạn trên internet nổi bật hơn so với những người khác và xu hướng nào là hiệu quả nhất cho tổ chức của bạn?" },
    { id: 3, img: "./assets/image/Blog2/a88.png", time: "October 10, 2022 ADMIN", header: "Cách sử dụng Quản lý dự án Agile để cải thiện công việc", demo: "Agile đang nổi lên như một mô hình quản lý tối ưu cho các doanh nghiệp.Vậy, lợi ích mà quản lý dự án Agile mang lại cho doanh nghiệp là gì? Tại sao quản lý dự án Agile lại được nhiều công ty trên thế giới sử dụng? Và Làm thế nào để trau dồi một tư duy nhanh nhẹn?" },
    { id: 4, img: "./assets/image/Blog2/a99.png", time: "November 15, 2022 ADMIN", header: "8 lý do lớn nhất để phát triển ứng dụng web tùy chỉnh", demo: "Trong thời kỳ chuyển đổi kỹ thuật số, thật khó để tìm thấy một doanh nghiệp thành công mà không có bất kỳ sự hiện diện trực tuyến nào.  Nếu vậy, bạn phải đọc các bài viết sau. Sau đó, dưới đây là những lý do tại sao bạn nên phát triển ứng dụng web tùy chỉnh cùng với chiến lược kinh doanh của mình." },
    { id: 5, img: "./assets/image/Blog2/a100.jpg", time: "July 25, 2022 ADMIN", header: "Đà Nẵng - Khu gia công CNTT mới nổi tại Việt Nam", demo: "Nhiều công ty công nghệ từ các nước phát triển khác như Nhật Bản, Singapore hay Australia đã thành lập văn phòng và thuê các nhà phát triển phần mềm làm việc cho các dự án của họ tại Việt Nam. Xu hướng ngày càng trở nên phổ biến." },
    { id: 6, img: "./assets/image/Blog2/a111.jpg", time: "March 28, 2022 ADMIN", header: "Sinh viên cần những gì để trở thành Kiến trúc sư Giải pháp?", demo: "Bạn đã bao giờ tự hỏi, làm thế nào để một nhà phát triển có thể hiểu được vấn đề của doanh nghiệp và đưa ra các giải pháp công nghệ hiệu quả? Đó là khi một kiến ​​trúc sư giải pháp (SA) xuất hiện trong trò chơi. SA có thể được mô tả như một người đưa ra các giải pháp kiến ​​trúc để phát triển phần mềm. Vậy, kiến ​​trúc giải pháp là gì? Nhiệm vụ hàng ngày của họ là gì?" },
    { id: 7, img: "./assets/image/Blog2/a222.jpg", time: "May 22, 2022 ADMIN", header: "Những điều cần biết về Sprint Retrospective", demo: "Retrospective là một hoạt động cực kỳ quan trọng trong Agile, nó giúp cả team luôn nhìn nhận đánh giá lại chặng đường phát triển để trở nên tốt hơn, để thích nghi với mọi biến động cũng như giúp cả team cùng cộng tác với nhau để loại bỏ mọi trở ngại mà team gặp phải." },
    { id: 8, img: "./assets/image/Blog2/a333.jpg", time: "September 14, 2022 ADMIN", header: "Gặp gỡ một nhà phát triển nữ Phụ trợ của chúng tôi", demo: "Là con gái trong ngành CNTT đã hiếm, và là nữ lập trình viên làm Backend lại càng hiếm hơn. Nhưng sự hiếm có này đã khiến Linh Trần - Backend Developer của ENOUVO trở nên đặc biệt hơn. Nào, hãy cùng chúng tôi tìm hiểu về cô gái thú vị này nhé!" },
    { id: 9, img: "./assets/image/Blog2/abc.jpg", time: "February 2, 2022 ADMIN", header: "Nhân viên TikTok Ads", demo: "Mô Tả Công Việc:  Cập nhật theo các xu hướng và đề xuất các ý tưởng cho cấp trên sản xuất video,Tham gia vào việc diễn xuất khi quay các video marketing." },
    { id: 10, img: "./assets/image/blog/images.jfif", time: "August 30, 2022 ADMIN", header: "IT - Software Engineer ", demo: "Mô Tả Công Việc: Xác định các yêu cầu về kỹ thuật, thiết kế của các ứng dụng từ các bộ phận trong công ty,Tiến hành áp dụng hệ thống, chương trình sau khi kiểm thử ứng dụng hoàn tất" },
    { id: 11, img: "./assets/image/blog/blog2.jpg", time: "October 10, 2022 ADMIN", header: ".Net Backend/Fullstack Developer", demo: " Mô Tả Công Việc: Thiết kế và triển khai back-end API sử dụng .NET Core.,Nghiên cứu các tài liệu, các giải pháp, phương thức tích hợp và mô hình triển khai hệ thống." },
    { id: 12, img: "./assets/image/blog/blog4.jpg", time: "November 15, 2022 ADMIN", header: "Full-stack Developer", demo: "Mô Tả Công Việc: Sử dụng ngôn ngữ PHP, PHP framework (Laravel), JavaScript Framework (Vue.js) để phát triển các dự án của công ty,Tham gia vào việc lên ý tưởng, kế hoạch, coding.... cho những project mới." },
    { id: 13, img: "./assets/image/Blog2/a11.jpg", time: "July 25, 2022 ADMIN", header: "IT - Backend Developer", demo: "Mô Tả Công Việc: Thiết kế và phát triển các back-ends APIs cho hệ thống ứng dụng có khả năng xử lý hàng triệu giao dịch mỗi ngày,Tận dụng các thư viện mã nguồn mở hoặc thương mại có sẵn." },
    { id: 14, img: "./assets/image/Blog2/a22.jpg", time: "March 28, 2022 ADMIN", header: "IT - Chuyên Viên Siêu Dữ Liệu", demo: " Mô Tả Công Việc: Nhân viên Siêu dữ liệu hỗ trợ Giám đốc Bộ phận Quản trị dữ liệu thiết lập chiến lược metadata tổng thể (thu nhận, lưu trữ và quản lý), cũng như đóng vai trò dẫn đầu trong việc thiết kế mô hình metadata." },
    { id: 15, img: "./assets/image/Blog2/a33.png", time: "May 22, 2022 ADMIN", header: "DevOps Engineer", demo: " Mô Tả Công Việc: Nhóm Kỹ thuật độ tin cậy của trang web của chúng tôi làm việc hàng ngày với tất cả các dự án CNCF nguồn mở, xây dựng nền tảng mạnh mẽ, tự động hóa và đường ống kỹ thuật dữ liệu cho phép phát hành liên tục hàng trăm dịch vụ nhỏ." },
    { id: 16, img: "./assets/image/Blog2/a444.jpg", time: "September 14, 2022 ADMIN", header: "Mobile App Developer", demo: " Mô Tả Công Việc: Xây dựng, quản lý và phát triển một sản phẩm rất thú vị với lưu lượng truy cập cao, Xử lý thành phần React Native của Ứng dụng dành cho thiết bị di động, Phát triển Front-End,UI/UX,Phát triển ứng dụng di động." },


]
let perPage = 8;
let currentPage = 1;
let start = 0;
let end = perPage;
let totalPage = Math.ceil(job.length / perPage);
function getCurrentPage(currentPage) {
    start = (currentPage - 1) * perPage;
    end = currentPage * perPage;
}
function rederJob() {
    html = '';
    const content = job.map((item, index) => {
        if (index >= start && index < end) {
            html += '<div class="col-blog reveal">';
            html += '<div class="img-blog">';
            html += '<a href="" class="img-blog-link" style="background-image: url(' + item.img + ');"> </a>'
            html += '</div>';
            html += '<div class="text-blog">';
            html += '<div class="time-blog">';
            html += '<p>' + item.time + ' <i class="ti-comment-alt"></i> 3</p>';
            html += '</div>';
            html += '<h3 class="header-blog" style="min-height: 42px;">';
            html += '<a href="BlogDetail.html">' + item.header + '</a>';
            html += '</h3>';
            html += '<p> ' + item.demo + '</p>';
            html += '</div>';
            html += '</div>';
            return html;
        }

    })
    document.getElementById('blogg').innerHTML = html;
}
function rederListPage() {
    let html = '';

    html += '<a class="active" href="#">1</a>';
    for (let i = 2; i <= totalPage; i++) {
        html += '<a href="javascript:void(0);">' + i + '</a>';
    }
    document.getElementById('number-page').innerHTML = html;
}
rederJob();
rederListPage();
function changePage() {
    const currentPages = document.querySelectorAll('.number-page a');
    console.log(currentPages);
    for (let i = 0; i < currentPages.length; i++) {
        currentPages[i].addEventListener('click', () => {
            let value = 1 + i;
            currentPage = value;
            getCurrentPage(currentPage);
            $('.number-page a').removeClass('active');
            currentPages[i].classList.add('active')
            // $('.btn-prev').removeClass('btn-active');
            // $('.btn-next').removeClass('btn-active');
            rederJob();
        })
    }
}

changePage();
const btnNext = document.querySelector('.btn-next');
const btnPre = document.querySelector('.btn-prev');

btnNext.addEventListener('click', () => {
    currentPage++;

    if (currentPage > totalPage) {
        currentPage = totalPage;
    }
    if (currentPage === totalPage) {
        $('.btn-next').addClass('btn-active');
    }
    $('.btn-prev').removeClass('btn-active');
    $('.number-page a:eq({currentPage-1})').addClass('active');
    console.log(start, end);
    getCurrentPage(currentPage);
    rederJob();
})

btnPre.addEventListener('click', () => {
    currentPage--;

    if (currentPage <= 1) {
        currentPage = 1;
    }
    if (currentPage === 1) {
        $('.btn-prev').addClass('btn-active');
    }

    $('.btn-next').removeClass('btn-active');
    $('.number-page a:eq($(currentPage-1))').addClass('active');


    console.log(start, end);
    getCurrentPage(currentPage);
    rederJob();
})