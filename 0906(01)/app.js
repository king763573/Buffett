// Warren Buffett Value Investing Course - Interactive JavaScript

// Data from the course content
const courseData = {
    buffettQuotes: [
        {
            rule: "1. ?乩犖??痕憍迎??乩犖鞎芸帚????,
            english: "Be fearful when others are greedy, greedy when others are fearful",
            explanation: "?典??湔???鞎琿莎??券?摨行?閫?都??
        },
        {
            rule: "2. ???洵銝璇??銝?鞈嚗洵鈭?閬??臬??砌?閬?閮洵銝璇???,
            english: "Rule No.1: Never lose money. Rule No.2: Never forget rule No.1",
            explanation: "憸券蝞∠??舀?鞈?擐???"
        },
        {
            rule: "3. ???臬蝘隡平?????臬像摨訾?璆剔??萎犖",
            english: "Time is the friend of the wonderful business, the enemy of the mediocre",
            explanation: "?瑟????芾釭隡平??潭銴??"
        },
        {
            rule: "4. ?寞?臭?隞???孵潭雿??啁?",
            english: "Price is what you pay; value is what you get",
            explanation: "撠釣?潔?璆剖?典?潸?撣?寞瘜Ｗ?"
        },
        {
            rule: "5. 鞎瑁蟡典停?眺?砍???典?嚗??豢?雿???????砍",
            english: "Buy a stock the way you would buy a house",
            explanation: "隞乩?璆凋蜓???脰???瘙箇?"
        },
        {
            rule: "6. ?其??圾銋?嚗?閬?鞈?,
            english: "Never invest in a business you cannot understand",
            explanation: "???潸撌梁????圾????
        },
        {
            rule: "7. ?憟賜???嚗停?舀?鞈撌?,
            english: "The best investment you can make is in yourself",
            explanation: "??摮貊????撌梁??賢?"
        },
        {
            rule: "8. 銴?臭??洵?怠之憟?嚗?摰?鈭箄竟?ｇ?銝?摰?鈭箔???,
            english: "Compound interest is the eighth wonder of the world",
            explanation: "???儔?拍???銝撠朵"
        },
        {
            rule: "9. 憒?雿?憿???銝?航蟡典?撟湛???停銝???摰?蝘?",
            english: "If you aren't willing to own a stock for ten years, don't even think about owning it for ten minutes",
            explanation: "?瑟????雁??閬?
        },
        {
            rule: "10. 憸券靘?潔?銝?撌勗??暻?,
            english: "Risk comes from not knowing what you're doing",
            explanation: "?亥???閫?????憸券????
        }
    ],
    financialRatios: [
        { metric: "P/E Ratio", preferred_range: "< 銵平撟喳?", description: "?祉?瘥?- ?寞?詨???瘥?" },
        { metric: "P/B Ratio", preferred_range: "< 1.5", description: "?∪瘛典潭? - ?寞?詨?撣喲?孵? },
        { metric: "Debt/Equity", preferred_range: "< 0.5", description: "鞎甈?瘥?- 鞎∪?瑽▼??" },
        { metric: "ROE", preferred_range: "> 15%", description: "?⊥甈??梢??- ?脣?賢???" },
        { metric: "Current Ratio", preferred_range: "> 1.5", description: "瘚?瘥? - ?剜???賢?" }
    ],
    quizQuestions: [
        {
            question: "?寞?撌渲?寧????脣飛嚗?暻潭???閰脰眺?脰蟡剁?",
            options: [
                "?∪?菜擃?",
                "撣??璅???, 
                "?乩犖????湔???",
                "?銵?璅＊蝷箄眺?脰???"
            ],
            correct: 2,
            explanation: "撌渲?寧???嚗鈭箸??潭?鞎芸帚嚗鈭箄痕憍芣?????府?典??湔???鞎琿脣鞈芯?璆准?
        },
        {
            question: "?孵潭?鞈?蝚砌?璇??隞暻潘?",
            options: [
                "餈賣??擃?祉?",
                "銝?鞈",
                "???憸券",
                "敹恍?拐?蝯?
            ],
            correct: 1,
            explanation: "撌渲?孵撥隤踵?鞈?蝚砌?璇????閬??Ｕ?憸券蝞∠?瘥?祉??湧?閬?
        },
        {
            question: "撌渲??M獢銝剔??oat???隞暻潘?",
            options: [
                "隡平蝞∠?撅?,
                "摰??",
                "霅瑕?瘝喉?蝡嗥?芸嚗?,
                "撣??"
            ],
            correct: 2,
            explanation: "Moat嚗風?眾嚗?隡平?奎?剖?ｇ?憒???潦?銵??押??砍?Ｙ???
        },
        {
            question: "?券脰??∠巨隡啣潭?嚗??券??虜撱箄降憭??鞈潸眺嚗?,
            options: [
                "5-10%",
                "15-20%", 
                "25-40%",
                "50%隞乩?"
            ],
            correct: 2,
            explanation: "撌渲?孵遣霅唬誑25-40%???寡頃鞎瘀?蝣箔??雲憭?摰??靘?撠?蝣箏??扼?
        },
        {
            question: "?孵潭?鞈????鞈芣隞暻潘?",
            options: [
                "敹恍????,
                "?銵???撌?,
                "???????,
                "?餌?鈭斗?"
            ],
            correct: 2,
            explanation: "?孵潭?鞈撥隤輯??????霈????箏蝘隡平?????潭銴????
        }
    ]
};

// Global variables
let currentQuestionIndex = 0;
let userAnswers = [];
let quizScore = 0;
let isAnswered = false;
let marketChart = null;
let ratioChart = null;
let nikeChart = null;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize Application
function initializeApp() {
    setupNavigation();
    displayDailyQuote();
    populateQuotes();
    setupFrameworkTabs();
    populateFinancialRatios();
    initializeQuiz();
    setupScrollAnimations();
    createPDFFile();
    initializeCharts();
}

// Create PDF File (placeholder)
function createPDFFile() {
    // Create a simple PDF content as a data URL
    const pdfContent = `
%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
/Resources <<
/Font <<
/F1 <<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
>>
>>
>>
endobj

4 0 obj
<<
/Length 200
>>
stream
BT
/F1 12 Tf
50 700 Td
(敺?瘣餃飛?? 頝?撌渲?孵飛?孵潭?鞈? Tj
0 -20 Td
(雓葦嚗?鞎∪??毀 - Iverson) Tj
0 -30 Td
(撌渲?寞?鞈?敺玨蝔?蝢? Tj
0 -30 Td
(?祈玨蝔??恬?) Tj
0 -20 Td
(1. 撌渲?寞?鞈摮? Tj
0 -15 Td
(2. 3M??獢) Tj
0 -15 Td
(3. 鞎∪???撌亙) Tj
0 -15 Td
(4. 獢??弦??) Tj
ET
endstream
endobj

xref
0 5
0000000000 65535 f 
0000000015 00000 n 
0000000074 00000 n 
0000000131 00000 n 
0000000380 00000 n 
trailer
<<
/Size 5
/Root 1 0 R
>>
startxref
632
%%EOF`;

    // Convert to blob and create download URL
    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    
    // Update all download links
    const downloadLinks = document.querySelectorAll('a[href="0906.pdf"]');
    downloadLinks.forEach(link => {
        link.href = url;
    });
}

// Initialize Charts
function initializeCharts() {
    createMarketChart();
    createRatioChart();
    createNikeChart();
}

// Market Performance Chart
function createMarketChart() {
    const ctx = document.getElementById('marketChart');
    if (!ctx) return;

    marketChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['?啁', '?啣漲', '?交', '蝢?', '??', '?勗?'],
            datasets: [{
                label: '2024撟游?祉? (%)',
                data: [28.47, 31.2, 19.6, 24.2, 8.8, 5.7],
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545'],
                borderColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: '2024撟游?蜓閬撣”??,
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });
}

// Financial Ratio Chart
function createRatioChart() {
    const ctx = document.getElementById('ratioChart');
    if (!ctx) return;

    ratioChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['P/E Ratio', 'P/B Ratio', 'ROE', 'Debt/Equity', 'Current Ratio'],
            datasets: [{
                label: '?蝭?',
                data: [15, 1.2, 18, 0.3, 2.0],
                backgroundColor: 'rgba(31, 184, 205, 0.2)',
                borderColor: '#1FB8CD',
                borderWidth: 2,
                pointBackgroundColor: '#1FB8CD'
            }, {
                label: '撣撟喳?',
                data: [20, 1.8, 12, 0.6, 1.5],
                backgroundColor: 'rgba(255, 193, 133, 0.2)',
                borderColor: '#FFC185',
                borderWidth: 2,
                pointBackgroundColor: '#FFC185'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: '?鞎∪???瘥?',
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 25
                }
            }
        }
    });
}

// Nike Revenue Chart
function createNikeChart() {
    const ctx = document.getElementById('nikeChart');
    if (!ctx) return;

    nikeChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['??', '甇散銝剜?散', '憭找葉?臬?', '鈭云??'],
            datasets: [{
                label: '? (??蝢?)',
                data: [16.04, 12.28, 5.07, 5.59],
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
                borderColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: 'Nike 2024鞎∪僑?啣????',
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const value = context.parsed;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${context.label}: $${value}B (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

// Navigation Setup
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Daily Quote Display
function displayDailyQuote() {
    const dailyQuoteElement = document.getElementById('daily-quote');
    const today = new Date();
    const quoteIndex = today.getDate() % courseData.buffettQuotes.length;
    const todayQuote = courseData.buffettQuotes[quoteIndex];
    
    if (dailyQuoteElement) {
        const quoteText = dailyQuoteElement.querySelector('.quote-text');
        const quoteEnglish = dailyQuoteElement.querySelector('.quote-english');
        const quoteExplanation = dailyQuoteElement.querySelector('.quote-explanation');
        
        if (quoteText) quoteText.textContent = todayQuote.rule;
        if (quoteEnglish) quoteEnglish.textContent = todayQuote.english;
        if (quoteExplanation) quoteExplanation.textContent = todayQuote.explanation;
    }
}

// Populate Buffett Quotes
function populateQuotes() {
    const quotesGrid = document.getElementById('quotes-grid');
    
    if (!quotesGrid) return;
    
    quotesGrid.innerHTML = '';
    
    courseData.buffettQuotes.forEach((quote, index) => {
        const quoteCard = document.createElement('div');
        quoteCard.className = 'quote-card';
        quoteCard.innerHTML = `
            <div class="quote-front">
                <div class="quote-number">${index + 1}</div>
                <p class="quote-text">${quote.rule}</p>
                <p class="quote-english">${quote.english}</p>
            </div>
            <div class="quote-back">
                <div class="quote-number">${index + 1}</div>
                <p class="quote-explanation">${quote.explanation}</p>
                <button class="btn btn--sm" onclick="flipCard(this)">餈?</button>
            </div>
        `;
        
        quoteCard.addEventListener('click', function(e) {
            if (!e.target.classList.contains('btn')) {
                flipCard(this);
            }
        });
        
        quotesGrid.appendChild(quoteCard);
    });
}

// Flip Quote Card
function flipCard(element) {
    const card = element.closest('.quote-card');
    card.classList.toggle('flipped');
}

// Framework Tabs Setup
function setupFrameworkTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// Populate Financial Ratios Table
function populateFinancialRatios() {
    const tbody = document.getElementById('ratios-tbody');
    
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    courseData.financialRatios.forEach(ratio => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${ratio.metric}</strong></td>
            <td><span class="status status--info">${ratio.preferred_range}</span></td>
            <td>${ratio.description}</td>
        `;
        tbody.appendChild(row);
    });
}

// Stock Value Calculator
function calculateValue() {
    const stockPrice = parseFloat(document.getElementById('stock-price').value);
    const eps = parseFloat(document.getElementById('eps').value);
    const expectedReturn = parseFloat(document.getElementById('expected-return').value);
    
    if (!stockPrice || !eps || !expectedReturn || stockPrice <= 0 || eps <= 0 || expectedReturn <= 0) {
        alert('隢‵?交???甇???);
        return;
    }
    
    // Simple DCF calculation
    const growthRate = 0.05; // Assume 5% growth
    const years = 10;
    
    // Calculate terminal value
    const terminalEPS = eps * Math.pow(1 + growthRate, years);
    const terminalValue = terminalEPS / (expectedReturn/100 - growthRate);
    
    // Calculate present value
    const presentValue = terminalValue / Math.pow(1 + expectedReturn/100, years);
    
    // Calculate P/E ratio
    const peRatio = stockPrice / eps;
    
    // Safety margin calculation
    const safetyMargin = ((presentValue - stockPrice) / presentValue * 100);
    
    const resultDiv = document.getElementById('calculation-result');
    if (resultDiv) {
        let recommendation = '';
        let statusClass = '';
        
        if (safetyMargin > 25) {
            recommendation = '撱箄降鞎瑕 - ?憟賜?摰??';
            statusClass = 'status--success';
        } else if (safetyMargin > 0) {
            recommendation = '雓寞?? - 摰??頛?';
            statusClass = 'status--warning';
        } else {
            recommendation = '銝遣霅啗眺??- ?寞??';
            statusClass = 'status--error';
        }
        
        resultDiv.innerHTML = `
            <h4>隡啣潛???/h4>
            <p><strong>?嗅??祉?瘥?</strong> ${peRatio.toFixed(2)} ??/p>
            <p><strong>隡啗??批?孵潘?</strong> NT$ ${presentValue.toFixed(2)}</p>
            <p><strong>摰??嚗?/strong> ${safetyMargin.toFixed(1)}%</p>
            <p class="status ${statusClass}">${recommendation}</p>
            <small>*甇斤蝪∪?閮?嚗祕??鞈??脰??渲底蝝啣???/small>
        `;
        
        resultDiv.style.display = 'block';
    }
}

// Quiz System
function initializeQuiz() {
    currentQuestionIndex = 0;
    userAnswers = [];
    quizScore = 0;
    isAnswered = false;
    
    displayQuestion();
    updateProgress();
}

function displayQuestion() {
    const questionData = courseData.quizQuestions[currentQuestionIndex];
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('quiz-options');
    const nextBtn = document.getElementById('next-btn');
    
    if (!questionData || !questionText || !optionsContainer) return;
    
    questionText.textContent = questionData.question;
    optionsContainer.innerHTML = '';
    isAnswered = false;
    
    questionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.textContent = option;
        button.addEventListener('click', () => selectOption(index, button));
        optionsContainer.appendChild(button);
    });
    
    if (nextBtn) {
        nextBtn.disabled = true;
        nextBtn.textContent = '銝?憿?;
    }
    
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = courseData.quizQuestions.length;
}

function selectOption(optionIndex, buttonElement) {
    if (isAnswered) return;
    
    // Remove previous selections
    document.querySelectorAll('.option-button').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Mark current selection
    buttonElement.classList.add('selected');
    userAnswers[currentQuestionIndex] = optionIndex;
    
    // Enable next button
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
        nextBtn.disabled = false;
    }
}

function nextQuestion() {
    if (isAnswered) {
        // Move to next question or show results
        currentQuestionIndex++;
        
        if (currentQuestionIndex < courseData.quizQuestions.length) {
            displayQuestion();
            updateProgress();
        } else {
            showQuizResult();
        }
        return;
    }
    
    const questionData = courseData.quizQuestions[currentQuestionIndex];
    const selectedAnswer = userAnswers[currentQuestionIndex];
    
    if (selectedAnswer === undefined) {
        alert('隢????獢?);
        return;
    }
    
    isAnswered = true;
    
    // Show correct/incorrect feedback
    const optionButtons = document.querySelectorAll('.option-button');
    optionButtons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === questionData.correct) {
            btn.classList.add('correct');
        } else if (index === selectedAnswer && index !== questionData.correct) {
            btn.classList.add('incorrect');
        }
    });
    
    // Update score
    if (selectedAnswer === questionData.correct) {
        quizScore++;
    }
    
    // Show explanation
    const explanation = document.createElement('div');
    explanation.className = 'quiz-explanation';
    explanation.innerHTML = `<p><strong>閫??嚗?/strong> ${questionData.explanation}</p>`;
    explanation.style.marginTop = '16px';
    explanation.style.padding = '16px';
    explanation.style.backgroundColor = 'var(--color-bg-3)';
    explanation.style.borderRadius = '8px';
    explanation.style.border = '1px solid var(--color-success)';
    
    const optionsContainer = document.getElementById('quiz-options');
    if (optionsContainer) {
        optionsContainer.appendChild(explanation);
    }
    
    // Update next button
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
        if (currentQuestionIndex === courseData.quizQuestions.length - 1) {
            nextBtn.textContent = '?亦?蝯?';
        } else {
            nextBtn.textContent = '銝?憿?;
        }
    }
}

function updateProgress() {
    const progressFill = document.getElementById('progress-fill');
    const progress = (currentQuestionIndex / courseData.quizQuestions.length) * 100;
    
    if (progressFill) {
        progressFill.style.width = progress + '%';
    }
}

function showQuizResult() {
    const quizQuestion = document.querySelector('.quiz-question');
    const quizResult = document.getElementById('quiz-result');
    const finalScore = document.getElementById('final-score');
    const resultMessage = document.getElementById('result-message');
    const restartBtn = document.getElementById('restart-btn');
    
    if (!quizQuestion || !quizResult) return;
    
    quizQuestion.classList.add('hidden');
    quizResult.classList.remove('hidden');
    
    if (restartBtn) {
        restartBtn.classList.remove('hidden');
    }
    
    const scorePercentage = Math.round((quizScore / courseData.quizQuestions.length) * 100);
    if (finalScore) {
        finalScore.textContent = scorePercentage;
    }
    
    let message = '';
    if (scorePercentage >= 80) {
        message = '?? ?芰?嚗撌脩??鈭?潭?鞈??詨?璁艙嚗?;
    } else if (scorePercentage >= 60) {
        message = '?? 銝嚗遣霅啣?銴?銝銝毀?脩??鞈???;
    } else {
        message = '?? ?閬?撘瘀?撱箄降?摮貊?隤脩??批捆??;
    }
    
    if (resultMessage) {
        resultMessage.textContent = message;
    }
    
    // Update progress to 100%
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
        progressFill.style.width = '100%';
    }
}

function restartQuiz() {
    const quizQuestion = document.querySelector('.quiz-question');
    const quizResult = document.getElementById('quiz-result');
    const restartBtn = document.getElementById('restart-btn');
    
    if (quizQuestion) quizQuestion.classList.remove('hidden');
    if (quizResult) quizResult.classList.add('hidden');
    if (restartBtn) restartBtn.classList.add('hidden');
    
    initializeQuiz();
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Add fade-in class to elements
    const animatedElements = document.querySelectorAll('.objective-card, .quote-card, .stat-card, .tool-card, .step-card');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Smooth scrolling for hero button
document.addEventListener('DOMContentLoaded', function() {
    const heroButton = document.querySelector('.hero .btn--primary');
    if (heroButton) {
        heroButton.addEventListener('click', function() {
            const overviewSection = document.getElementById('overview');
            if (overviewSection) {
                overviewSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});

// Utility Functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('zh-TW', {
        style: 'currency',
        currency: 'TWD',
        minimumFractionDigits: 0
    }).format(amount);
}

function formatPercentage(value) {
    return (value * 100).toFixed(2) + '%';
}

// Add some interactive features for better UX
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.card, .objective-card, .stat-card, .tool-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add pulse animation to important elements
    const importantElements = document.querySelectorAll('.stat-value.success, .score-circle');
    importantElements.forEach(el => {
        el.classList.add('pulse');
    });
    
    // Add download tracking
    const downloadLinks = document.querySelectorAll('a[download="0906.pdf"]');
    downloadLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('PDF downloaded');
            // You can add analytics tracking here
        });
    });
});

// Export functions for global access
window.calculateValue = calculateValue;
window.nextQuestion = nextQuestion;
window.restartQuiz = restartQuiz;
window.flipCard = flipCard;