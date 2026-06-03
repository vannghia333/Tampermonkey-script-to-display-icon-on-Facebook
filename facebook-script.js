// ==UserScript==
// @name         Facebook Icon Script
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Display icon when visiting Facebook
// @author       vannghia333
// @match        *://facebook.com/*
// @match        *://www.facebook.com/*
// @match        *://m.facebook.com/*
// @match        *://fb.com/*
// @match        *://www.fb.com/*
// @icon         https://www.facebook.com/favicon.ico
// @grant        none
// @updateURL    https://raw.githubusercontent.com/vannghia333/Tampermonkey-script-to-display-icon-on-Facebook/main/facebook-script.js
// @downloadURL  https://raw.githubusercontent.com/vannghia333/Tampermonkey-script-to-display-icon-on-Facebook/main/facebook-script.js
// ==/UserScript==

(function() {
    'use strict';

    // Chờ trang tải xong
    setTimeout(() => {
        // Tạo container icon
        const iconContainer = document.createElement('div');
        iconContainer.id = 'custom-fb-icon';
        
        // Tạo phần tử ảnh
        const img = document.createElement('img');
        img.src = 'https://img.taoanhdep.com/img/1780483010928-taoanhdep_sticker.png';
        img.style.cssText = `
            width: 120%;
            height: 120%;
            border-radius: 50%;
            object-fit: cover;
            object-position: center;
        `;
        iconContainer.appendChild(img);
        
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
        };
        
        // Hiệu ứng khi di chuột ra
        iconContainer.onmouseout = function() {
            this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            this.style.transform = 'scale(1)';
        };
        
        // Sự kiện click
        iconContainer.onclick = function() {
            alert('✨ Chào mừng bạn đến Facebook! ✨\n\nScript version: 1.0');
            console.log('🎉 Custom Facebook Script is active!');
        };
        
        // Thêm icon vào trang
        document.body.appendChild(iconContainer);
        
        // In log
        console.log('✅ Facebook Icon Script loaded successfully!');
        console.log('📍 Icon displayed at top-right corner on all Facebook pages');
        
    }, 1000);
    
})();
