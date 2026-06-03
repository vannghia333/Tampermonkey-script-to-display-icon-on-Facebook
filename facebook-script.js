// ==UserScript==
// @name         Facebook Icon Script - Tải từ GitHub
// @namespace    http://tampermonkey.net/
// @version      3.0
// @description  Hiển thị icon tùy chỉnh khi vào Facebook - Tải script từ GitHub
// @author       vannghia333
// @match        *://facebook.com/*
// @match        *://www.facebook.com/*
// @match        *://m.facebook.com/*
// @match        *://fb.com/*
// @match        *://www.fb.com/*
// @icon         https://www.facebook.com/favicon.ico
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';

    console.log('🚀 [Facebook Icon] Script khởi động...');

    // Chờ trang tải xong
    setTimeout(() => {
        console.log('⏱️ [Facebook Icon] Bắt đầu tạo icon...');

        // Tạo container icon
        const iconContainer = document.createElement('div');
        iconContainer.id = 'custom-fb-icon';
        
        // Tải ảnh qua GM_xmlhttpRequest (bypass CSP)
        console.log('📥 [Facebook Icon] Đang tải ảnh từ PostImages...');
        
        GM_xmlhttpRequest({
            method: 'GET',
            url: 'https://i.postimg.cc/s1DggZb9/taoanhdep-sticker-72312.png',
            responseType: 'blob',
            onload: function(response) {
                try {
                    // Tạo Blob URL từ ảnh đã tải
                    const blob = response.response;
                    const blobUrl = URL.createObjectURL(blob);
                    
                    console.log('✅ [Facebook Icon] Ảnh tải thành công!');
                    
                    // Tạo phần tử ảnh
                    const img = document.createElement('img');
                    img.src = blobUrl;
                    img.style.cssText = `
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        object-fit: cover;
                        object-position: center;
                    `;
                    
                    // Xóa nội dung cũ và thêm ảnh
                    iconContainer.innerHTML = '';
                    iconContainer.appendChild(img);
                    
                    console.log('🎨 [Facebook Icon] Hiển thị ảnh thành công!');
                } catch (error) {
                    console.error('❌ [Facebook Icon] Lỗi khi xử lý ảnh:', error);
                    iconContainer.innerHTML = '😊';
                    iconContainer.style.fontSize = '45px';
                }
            },
            onerror: function(error) {
                console.warn('⚠️ [Facebook Icon] Ảnh không tải được:', error);
                console.log('📍 [Facebook Icon] Dùng emoji thay thế...');
                iconContainer.innerHTML = '😊';
                iconContainer.style.fontSize = '45px';
            }
        });
        
        // Tạo style cho icon
        iconContainer.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            cursor: pointer;
            z-index: 9999;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background: #fff;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            border: 2px solid #ddd;
        `;
        
        // Hiệu ứng khi di chuột vào
        iconContainer.onmouseover = function() {
            this.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.25)';
            this.style.transform = 'scale(1.15)';
            console.log('🖱️ [Facebook Icon] Di chuột vào icon');
        };
        
        // Hiệu ứng khi di chuột ra
        iconContainer.onmouseout = function() {
            this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            this.style.transform = 'scale(1)';
        };
        
        // Sự kiện click
        iconContainer.onclick = function() {
            alert('✨ Chào mừng bạn đến Facebook! ✨\n\nScript version: 3.0\nTải từ GitHub');
            console.log('👆 [Facebook Icon] Bạn đã click vào icon!');
        };
        
        // Thêm icon vào trang
        document.body.appendChild(iconContainer);
        
        // In log chi tiết
        console.log('✅ [Facebook Icon] Script tải thành công!');
        console.log('📍 [Facebook Icon] Icon hiển thị ở góc trên phải');
        console.log('💡 [Facebook Icon] Ghi chú: Nhấp chuột vào icon để xem thông tin');
        
    }, 1500);
    
})();
