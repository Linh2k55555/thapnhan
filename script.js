document.getElementById('lightCandle').addEventListener('click', function() {
    // Tìm tất cả các cây nến và các phần tử liên quan
    const candles = document.querySelectorAll('.candle, .candle2, .candle3');

    // Áp dụng hiệu ứng flame cho tất cả các cây nến
    candles.forEach(candle => {
        const flames = candle.querySelectorAll('.flame, .inner-flame, .outer-flame');
        flames.forEach(flame => flame.style.opacity = 1);
    });

    // Thiết lập chiều cao ban đầu cho các flame
    let flameHeights = [20, 20, 20];
    let innerFlameHeights = [12, 12, 12];
    let outerFlameHeights = [28, 28, 28];

    // Hàm thu nhỏ flame sau mỗi khoảng thời gian
    const shrinkFlame = () => {
        // Kiểm tra nếu chiều cao vẫn còn lớn hơn 5px
        for (let i = 0; i < candles.length; i++) {
            if (flameHeights[i] > 5 && innerFlameHeights[i] > 5 && outerFlameHeights[i] > 5) {
                // Giảm chiều cao của flame
                flameHeights[i] -= 5;
                innerFlameHeights[i] -= 5;
                outerFlameHeights[i] -= 5;

                // Cập nhật chiều cao cho các flame tương ứng
                candles[i].querySelector('.flame').style.height = flameHeights[i] + 'px';
                candles[i].querySelector('.inner-flame').style.height = innerFlameHeights[i] + 'px';
                candles[i].querySelector('.outer-flame').style.height = outerFlameHeights[i] + 'px';
            } else {
                // Đổi màu flame thành đỏ khi đã thu nhỏ hết
                candles[i].querySelector('.flame').style.backgroundColor = 'red';
            }
        }
    };

    // Thiết lập setInterval để gọi hàm shrinkFlame mỗi 5 giây
    const intervalId = setInterval(shrinkFlame, 12000);

    // Thêm hiệu ứng khói khi thắp hương
    document.querySelectorAll('.smoke-1').forEach(smoke => smoke.style.animation = 'smoke 1s infinite');
    document.querySelectorAll('.smoke-2').forEach(smoke => smoke.style.animation = 'smoke 2s infinite');
    document.querySelectorAll('.smoke-3').forEach(smoke => smoke.style.animation = 'smoke 1s infinite');
    document.querySelectorAll('.smoke-4').forEach(smoke => smoke.style.animation = 'smoke 2.5s infinite');
    document.querySelectorAll('.smoke-5').forEach(smoke => smoke.style.animation = 'smoke 3s infinite');
    // Hiển thị khói
    document.querySelectorAll('.smoke-1, .smoke-2, .smoke-3, .smoke-4, .smoke-5').forEach(smoke => smoke.style.opacity = 1);
});


// Danh sách các từ để hiển thị ngẫu nhiên
var words = [" ADIDAPHAT +1 ", " TỊNH TÂM +1 ", " THI TỐT +1 ", " ĐIỂM CAO +1 ", " CÓ NGƯỜI YÊU +1 ", " ĐỀ DỄ +1 ",
" ADIDAPHAT +2 ", " TỊNH TÂM +2 ", " THI TỐT +2 ", " ĐIỂM CAO +2 ", " CÓ NGƯỜI YÊU +2 ", " ĐỀ DỄ +2 ",
" ADIDAPHAT +3 ", " TỊNH TÂM +3 ", " THI TỐT +3 ", " ĐIỂM CAO +3 ", " CÓ NGƯỜI YÊU +3 ", " ĐỀ DỄ +3 ",
" ADIDAPHAT +999 ", " TỊNH TÂM +999 ", " THI TỐT +999 ", " ĐIỂM CAO +999 ", " CÓ NGƯỜI YÊU +999 ", " ĐỀ DỄ +999 "];

document.addEventListener('DOMContentLoaded', function() {
    // Lắng nghe sự kiện click trên mõ của trang
    document.querySelector('.hammer').addEventListener('click', function(event) {
        // Lấy vị trí click chuột
        var x = event.clientX;
        var y = event.clientY;
        
        // Lấy một từ ngẫu nhiên từ mảng words
        var randomWord = getRandomWord(words);
        
        // Tạo hiệu ứng chữ với từ ngẫu nhiên được chọn
        createTextEffect(x, y, randomWord);
        
        // Phát âm thanh khi click
        playClickSound();
    });
});

// Hàm lấy một phần tử ngẫu nhiên từ mảng
function getRandomWord(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Hàm tạo hiệu ứng chữ tại vị trí (x, y) với nội dung text
function createTextEffect(x, y, text) {
    // Tạo một thẻ span mới để chứa text
    var textElement = document.createElement('span');
    textElement.textContent = text;
    textElement.className = 'text-effect';
    textElement.style.left = x + 'px';
    textElement.style.top = y + 'px';
    document.body.appendChild(textElement);
    
    // Sau một khoảng thời gian, loại bỏ text khỏi DOM
    setTimeout(function() {
        textElement.remove();
    }, 200);
}

// Hàm phát âm thanh khi click
function playClickSound() {
    var clickSound = document.getElementById('clickSound');
    clickSound.currentTime = 0;
    clickSound.play();
}
