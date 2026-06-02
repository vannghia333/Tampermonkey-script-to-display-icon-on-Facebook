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

    // Wait for page to load
    setTimeout(() => {
        // Create icon container
        const iconContainer = document.createElement('div');
        iconContainer.id = 'custom-fb-icon';
        iconContainer.innerHTML = '⭐';
        
        // Style the icon
        iconContainer.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            font-size: 40px;
            cursor: pointer;
            z-index: 9999;
            padding: 10px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.9);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
        `;
        
        // Add hover effect
        iconContainer.onmouseover = function() {
            this.style.backgroundColor = 'rgba(255, 255, 255, 1)';
            this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
            this.style.transform = 'scale(1.1)';
        };
        
        iconContainer.onmouseout = function() {
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            this.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
            this.style.transform = 'scale(1)';
        };
        
        // Click event
        iconContainer.onclick = function() {
            alert('✨ Welcome to Facebook! ✨\n\nScript version: 1.0\nAuto-update enabled from GitHub');
            console.log('🎉 Custom Facebook Script is active!');
        };
        
        // Add to page
        document.body.appendChild(iconContainer);
        
        console.log('✅ Facebook Icon Script loaded successfully!');
        console.log('📍 Icon displayed at top-right corner on all Facebook pages');
        console.log('🔄 Auto-update enabled from GitHub');
        
    }, 1000);
    
})();
