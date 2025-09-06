// Warren Buffett Value Investing Course - Interactive JavaScript

// Data from the course content
const courseData = {
    buffettQuotes: [
        {
            rule: "1. 別人恐懼時貪婪，別人貪婪時恐懼",
            english: "Be fearful when others are greedy, greedy when others are fearful",
            explanation: "在市場恐慌時買進，在過度樂觀時賣出"
        },
        {
            rule: "2. 投資的第一條規則是不要賠錢，第二條規則是千萬不要忘記第一條規則",
            english: "Rule No.1: Never lose money. Rule No.2: Never forget rule No.1",
            explanation: "風險管理是投資的首要考量"
        },
        {
            rule: "3. 時間是優秀企業的朋友，是平庸企業的敵人",
            english: "Time is the friend of the wonderful business, the enemy of the mediocre",
            explanation: "長期持有優質企業才能發揮複利效果"
        },
        {
            rule: "4. 價格是你付出的，價值是你得到的",
            english: "Price is what you pay; value is what you get",
            explanation: "專注於企業內在價值而非市場價格波動"
        },
        {
            rule: "5. 買股票就像買公司的一部分，要選擇你願意長期持有的公司",
            english: "Buy a stock the way you would buy a house",
            explanation: "以企業主的心態進行投資決策"
        }
    ],
    financialRatios: [
        { metric: "P/E Ratio", preferred_range: "< 行業平均", description: "本益比 - 價格相對盈餘比率" },
        { metric: "P/B Ratio", preferred_range: "< 1.5", description: "股價淨值比 - 價格相對帳面價值" },
        { metric: "Debt/Equity", preferred_range: "< 0.5", description: "負債權益比 - 財務槓桿指標" },
        { metric: "ROE", preferred_range: "> 15%", description: "股東權益報酬率 - 獲利能力指標" },
        { metric: "Current Ratio", preferred_range: "> 1.5", description: "流動比率 - 短期償債能力" }
    ],
    quizQuestions: [
        {
            question: "根據巴菲特的投資哲學，什麼時候應該買進股票？",
            options: [
                "股價創新高時",
                "市場情緒樂觀時", 
                "別人恐懼、市場恐慌時",
                "技術指標顯示買進訊號時"
            ],
            correct: 2,
            explanation: "巴菲特的名言：「別人恐懼時貪婪，別人貪婪時恐懼」，應該在市場恐慌時買進優質企業。"
        },
        {
            question: "價值投資的第一條規則是什麼？",
            options: [
                "追求最高報酬率",
                "不要賠錢",
                "分散投資風險",
                "快速獲利了結"
            ],
            correct: 1,
            explanation: "巴菲特強調投資的第一條規則是「不要賠錢」，風險管理比報酬率更重要。"
        },
        {
            question: "巴菲特3M框架中的「Moat」指的是什麼？",
            options: [
                "企業管理層",
                "安全邊際",
                "護城河（競爭優勢）",
                "市場時機"
            ],
            correct: 2,
            explanation: "Moat（護城河）指企業的競爭優勢，如品牌價值、技術專利、成本優勢等。"
        },
        {
            question: "在進行股票估值時，安全邊際通常建議多少折價購買？",
            options: [
                "5-10%",
                "15-20%", 
                "25-40%",
                "50%以上"
            ],
            correct: 2,
            explanation: "巴菲特建議以25-40%的折價購買，確保有足夠的安全邊際來應對不確定性。"
        },
        {
            question: "價值投資最重要的特質是什麼？",
            options: [
                "快速反應能力",
                "技術分析技巧",
                "耐心與長期持有",
                "頻繁交易"
            ],
            correct: 2,
            explanation: "價值投資強調耐心與長期持有，讓時間成為優秀企業的朋友，發揮複利效果。"
        }
    ]
};

// Global variables
let currentQuestionIndex = 0;
let userAnswers = [];
let quizScore = 0;
let isAnswered = false;

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
}

// Navigation Setup
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
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
                <button class="btn btn--sm" onclick="flipCard(this)">返回</button>
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
    
    if (!stockPrice || !eps || !expectedReturn) {
        alert('請填入所有欄位');
        return;
    }
    
    // Simple DCF calculation
    const growthRate = 0.05; // Assume 5% growth
    const years = 10;
    const terminalValue = eps * Math.pow(1 + growthRate, years) / (expectedReturn/100 - growthRate);
    const presentValue = terminalValue / Math.pow(1 + expectedReturn/100, years);
    
    // Calculate P/E ratio
    const peRatio = stockPrice / eps;
    
    // Safety margin calculation
    const safetyMargin = ((presentValue - stockPrice) / presentValue * 100).toFixed(1);
    
    const resultDiv = document.getElementById('calculation-result');
    if (resultDiv) {
        let recommendation = '';
        let statusClass = '';
        
        if (safetyMargin > 25) {
            recommendation = '建議買入 - 有良好的安全邊際';
            statusClass = 'status--success';
        } else if (safetyMargin > 0) {
            recommendation = '謹慎考慮 - 安全邊際較小';
            statusClass = 'status--warning';
        } else {
            recommendation = '不建議買入 - 價格過高';
            statusClass = 'status--error';
        }
        
        resultDiv.innerHTML = `
            <h4>估值結果</h4>
            <p><strong>當前本益比：</strong> ${peRatio.toFixed(2)} 倍</p>
            <p><strong>估計內在價值：</strong> NT$ ${presentValue.toFixed(2)}</p>
            <p><strong>安全邊際：</strong> ${safetyMargin}%</p>
            <p class="status ${statusClass}">${recommendation}</p>
            <small>*此為簡化計算，實際投資請進行更詳細分析</small>
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
        nextBtn.textContent = '下一題';
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
        alert('請選擇一個答案');
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
    explanation.innerHTML = `<p><strong>解釋：</strong> ${questionData.explanation}</p>`;
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
            nextBtn.textContent = '查看結果';
        } else {
            nextBtn.textContent = '下一題';
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
        message = '🎉 優秀！您已經掌握了價值投資的核心概念！';
    } else if (scorePercentage >= 60) {
        message = '👍 不錯！建議再複習一下巴菲特的投資原則。';
    } else {
        message = '📚 需要加強！建議重新學習課程內容。';
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
});

// Export functions for global access
window.calculateValue = calculateValue;
window.nextQuestion = nextQuestion;
window.restartQuiz = restartQuiz;
window.flipCard = flipCard;