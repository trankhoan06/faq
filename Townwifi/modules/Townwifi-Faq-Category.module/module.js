// Lấy từ khóa (keyword) từ URL
function getUrlParameter(name) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name); // Trả về giá trị của tham số nếu có, nếu không có trả về null
}

function highlightKeyword(selector, keyword) {
    if (keyword) {
        var keywordRegExp = new RegExp("(" + keyword + ")", "gi"); // Tạo một RegExp cho từ khóa

        $(selector).each(function() {
            var originalText = $(this).text(); // Lấy văn bản gốc
            var highlightedText = originalText.replace(keywordRegExp, '<strong class="strong_custom">$1</strong>'); // Thay thế từ khóa bằng từ đã bôi đậm
            $(this).html(highlightedText); // Cập nhật nội dung phần tử
        });
    }
}

$(document).ready(function() {
    var keyword = getUrlParameter('keyword'); // Lấy từ khóa từ URL (ví dụ: ?keyword=yourKeyword)
    highlightKeyword('.faq__category__post__answer__inner', keyword); // Áp dụng cho các phần tử cần bôi đậm
});

function limitCharacters(selector, charLimit) {
    $(selector).each(function () {
        const fullText = $(this).text().trim(); // Lấy nội dung văn bản thuần túy và loại bỏ khoảng trắng đầu cuối
        if (fullText.length > charLimit) {
            const limitedText = fullText.substring(0, charLimit) + "..."; // Lấy số ký tự giới hạn và thêm "..."
            $(this).html(`<span>${limitedText}</span>`); // Thay thế nội dung bằng văn bản đã cắt
        }
    });
}

limitCharacters(".faq__category__post__answer__inner", 180);
