window.addEventListener('load', function() {
    const productsContainer = document.querySelector('.products');
    const productWidth = productsContainer.offsetWidth;
    const products = document.querySelectorAll('.product');
    let currentPosition = 0;
    let isMoving = true;

    function moveProducts() {
        if (isMoving) {
            currentPosition -= 1;

            productsContainer.style.transform = `translateX(${currentPosition}px)`;

            if (Math.abs(currentPosition) >= productWidth) {
                currentPosition = 0;
            }
        }

        setTimeout(moveProducts, 5); // Tạo chuyển động nhanh và dừng lại sau một khoảng thời gian

        // Dừng lại sau một khoảng thời gian
        setTimeout(function() {
            isMoving = !isMoving;
        }, 5000); // Dừng lại sau 3 giây
    }

    moveProducts();
});
