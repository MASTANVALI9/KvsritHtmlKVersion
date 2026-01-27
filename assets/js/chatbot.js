/**
 * ========================================
 * College Help Chatbot Logic
 * ========================================
 */

(function() {
    'use strict';

    // Knowledge Base
    const responses = {
        greetings: {
            keywords: ['hi', 'hello', 'hey', 'start', 'greet'],
            response: "Hello! I'm your KVSRIT Help Bot. How can I assist you today?"
        },
        admissions: {
            keywords: ['admission', 'apply', 'join', 'seat', 'enroll'],
            response: "Admissions for the 2024-25 academic year are now open! You can apply online through our web portal or visit the campus for direct intake. Last date to apply is March 31, 2026."
        },
        courses: {
            keywords: ['course', 'degree', 'branch', 'department', 'study', 'btech', 'mtech', 'mba'],
            response: "We offer B.Tech in CSE, AI & ML, Data Science, ECE, EEE, ME, and Civil. We also have M.Tech and MBA programs. Which department are you interested in?"
        },
        fees: {
            keywords: ['fee', 'payment', 'cost', 'scholarship', 'price'],
            response: "The fee structure varies by course. For B.Tech, it is approximately ₹XX,XXX per year including JNTUA registration. We also offer merit-based scholarships! For exact details, please visit the accounts section."
        },
        timings: {
            keywords: ['timing', 'opening', 'closed', 'hours', 'time'],
            response: "KVSRIT operates from 9:30 AM to 4:30 PM, Monday to Saturday. Sunday is a holiday."
        },
        hostel: {
            keywords: ['hostel', 'pg', 'stay', 'accommodation', 'room'],
            response: "Yes, we have separate, high-quality hostel facilities for both boys and girls with 24/7 security, Wi-Fi, and healthy food."
        },
        contact: {
            keywords: ['contact', 'call', 'phone', 'email', 'address', 'location', 'reach'],
            response: "You can reach us at 📧 admissions@kvsrit.ac.in or 📞 +91 91212 11099. We are located in Kurnool, Andhra Pradesh."
        },
        placements: {
            keywords: ['placement', 'job', 'package', 'company', 'hired', 'career'],
            response: "KVSRIT has an excellent placement record (95%+). Top companies like TCS, Infosys, and HCL visit us. The highest package this year is 15 LPA!"
        },
        default: {
            response: "I'm sorry, I didn't quite catch that. Could you please rephrase? You can ask about admissions, courses, fees, placements, or contact details."
        }
    };

    // Chat UI Elements
    const elements = {
        toggleBtn: document.getElementById('chatToggle'),
        window: document.getElementById('chatWindow'),
        closeBtn: document.getElementById('chatClose'),
        messages: document.getElementById('chatMessages'),
        input: document.getElementById('chatInput'),
        sendBtn: document.getElementById('chatSend'),
        typing: document.getElementById('typingIndicator'),
        form: document.getElementById('chatForm')
    };

    // Initialize Chatbot
    function init() {
        if (!elements.toggleBtn) return;

        // Toggle Chat Window
        elements.toggleBtn.addEventListener('click', () => {
            elements.window.classList.toggle('active');
            if (elements.window.classList.contains('active')) {
                elements.input.focus();
                // Send initial greeting if empty
                if (elements.messages.children.length === 1) { // only the typing indicator
                    setTimeout(() => addBotMessage(responses.greetings.response), 500);
                }
            }
        });

        // Close Button
        elements.closeBtn.addEventListener('click', () => {
            elements.window.classList.remove('active');
        });

        // Send Message on Form Submit
        elements.form.addEventListener('submit', (e) => {
            e.preventDefault();
            handleUserInput();
        });

        // Enable/Disable Send Button
        elements.input.addEventListener('input', () => {
            elements.sendBtn.disabled = !elements.input.value.trim();
        });

        // Handle Quick Replies
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('quick-reply-btn')) {
                const text = e.target.textContent;
                elements.input.value = text;
                handleUserInput();
            }
        });
    }

    // Handle User Input
    function handleUserInput() {
        const text = elements.input.value.trim();
        if (!text) return;

        // Add User Message
        addUserMessage(text);
        elements.input.value = '';
        elements.sendBtn.disabled = true;

        // Process Response
        processQuery(text.toLowerCase());
    }

    // Process Query (Keyword Matching)
    function processQuery(query) {
        showTyping(true);

        setTimeout(() => {
            let found = false;
            
            // Loop through response categories
            for (const key in responses) {
                if (key === 'default' || key === 'greetings') continue;
                
                const category = responses[key];
                if (category.keywords.some(keyword => query.includes(keyword))) {
                    addBotMessage(category.response);
                    found = true;
                    break;
                }
            }

            if (!found) {
                if (responses.greetings.keywords.some(k => query.includes(k))) {
                     addBotMessage(responses.greetings.response);
                } else {
                     addBotMessage(responses.default.response);
                }
            }

            showTyping(false);
        }, 1500); // Simulated delay
    }

    // Add User Message to UI
    function addUserMessage(text) {
        const div = document.createElement('div');
        div.className = 'message user-message';
        div.textContent = text;
        elements.messages.insertBefore(div, elements.typing);
        scrollToBottom();
    }

    // Add Bot Message to UI
    function addBotMessage(text) {
        const div = document.createElement('div');
        div.className = 'message bot-message';
        div.textContent = text;
        elements.messages.insertBefore(div, elements.typing);
        scrollToBottom();
    }

    // Show/Hide Typing Indicator
    function showTyping(show) {
        elements.typing.style.display = show ? 'block' : 'none';
        scrollToBottom();
    }

    // Scroll to Bottom
    function scrollToBottom() {
        elements.messages.scrollTop = elements.messages.scrollHeight;
    }

    // Run on DOM Ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
