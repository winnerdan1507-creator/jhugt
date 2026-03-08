    // ========== UTILITY FUNCTIONS ==========
    // Fisher-Yates Shuffle Algorithm
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    
    function factorial(n) {
        if (n < 0) return -1;
        if (n == 0) return 1;
        return n * factorial(n - 1);
    }

    // ========== DATA GENERATION ==========
    // Generates 200 university-standard questions.
    // Answers are shuffled PER QUESTION to ensure randomness.
    
    const generateQuestionBank = (subjectId) => {
      let questions = [];
      
      // MTS 101: Mathematics
      if (subjectId === 'mts101') {
        // Calculus
        for(let i=0; i<40; i++) {
          const coeff = (Math.floor(Math.random()*10)+1);
          const pow = (Math.floor(Math.random()*3)+2);
          questions.push({
            base: `Find the derivative of f(x) = ${coeff}x^${pow}.`,
            correct: `${coeff*pow}x^${pow-1}`,
            wrong1: `${coeff}x^${pow-1}`,
            wrong2: `${coeff*pow}x^${pow}`,
            wrong3: `${pow}x^${coeff}`,
            explanation: `Using power rule: d/dx (ax^n) = a·n·x^(n-1).`
          });
        }
        
        // Algebra
        for(let i=0; i<40; i++) {
           const root1 = Math.floor(Math.random()*10) - 5;
           const root2 = Math.floor(Math.random()*10) - 5;
           const b = -(root1 + root2);
           const c = root1 * root2;
           questions.push({
             base: `Find the sum of the roots of x² + (${b})x + (${c}) = 0.`,
             correct: String(-b),
             wrong1: String(c),
             wrong2: String(root1),
             wrong3: "0",
             explanation: `Sum of roots = -b/a = ${-b}.`
           });
        }
        
        // Trig
        for(let i=0; i<40; i++) {
           const angle = [30, 45, 60][Math.floor(Math.random()*3)];
           questions.push({
             base: `Find the exact value of 2Sin(${angle}°)Cos(${angle}°).`,
             correct: `Sin(${angle*2}°)`,
             wrong1: `Cos(${angle*2}°)`,
             wrong2: `Tan(${angle}°)`,
             wrong3: "1",
             explanation: `Using double angle identity: 2SinθCosθ = Sin(2θ).`
           });
        }

        // Complex
         for(let i=0; i<40; i++) {
           const a = Math.floor(Math.random()*5)+1;
           const b = Math.floor(Math.random()*5)+1;
           questions.push({
             base: `Simplify: (${a} + ${b}i)(${a} - ${b}i)`,
             correct: String(a*a + b*b),
             wrong1: `${a*a - b*b}`,
             wrong2: `${a*a - b*b}i`,
             wrong3: `${a*a + b*b}i`,
             explanation: `(a+bi)(a-bi) = a² + b².`
           });
         }
         
        // Stats
         for(let i=0; i<40; i++) {
           const n = Math.floor(Math.random()*4)+5;
           const r = Math.floor(Math.random()*(n-2))+2;
           const nCr = factorial(n)/(factorial(r)*factorial(n-r));
           questions.push({
             base: `Calculate C(${n}, ${r}).`,
             correct: String(nCr),
             wrong1: String(factorial(n)),
             wrong2: String(factorial(r)),
             wrong3: String(n*r),
             explanation: `nCr = n! / (r!(n-r)!).`
           });
         }
         // Fill remainder to 200 if needed
         while(questions.length < 200) {
            questions.push(questions[questions.length % 100]); 
         }
      }
      
      // GST 111: English
      if (subjectId === 'gst111') {
        const topics = [
          { base: "Identify the sentence type: 'Had I known, I would have left.'", correct: "Complex", wrong1: "Simple", wrong2: "Compound", wrong3: "Compound-Complex", explanation: "Contains a dependent clause 'Had I known'." },
          { base: "Which word has primary stress in 'photography'?", correct: "TOG", wrong1: "PHO", wrong2: "RA", wrong3: "PHY", explanation: "Pho-TOG-ra-phy." },
          { base: "The morpheme 're' in 'rewrite' is a:", correct: "Prefix", wrong1: "Suffix", wrong2: "Root", wrong3: "Infix", explanation: "Prefixes come before the root." },
          { base: "Select the sentence with correct concord.", correct: "Physics is interesting.", wrong1: "Measles are dangerous.", wrong2: "The news are sad.", wrong3: "The cattle is grazing.", explanation: "Physics is a singular noun." },
          { base: "Which is NOT a property of formal language?", correct: "Slang usage", wrong1: "Complexity", wrong2: "Objectivity", wrong3: "Precision", explanation: "Slang is informal." },
          { base: "Identify the phrase: 'The man *in the black suit* is here.'", correct: "Adjectival Phrase", wrong1: "Noun Phrase", wrong2: "Adverbial Phrase", wrong3: "Verb Phrase", explanation: "It qualifies the noun 'man'." },
          { base: "The phoneme /t/ in 'stop' is:", correct: "Unaspirated", wrong1: "Aspirated", wrong2: "Voiced", wrong3: "Nasalized", explanation: "In 'stop', /t/ is unaspirated." },
          { base: "Which vowel sound is in 'bit'?", correct: "/ɪ/", wrong1: "/i:/", wrong2: "/e/", wrong3: "/æ/", explanation: "Short vowel sound." },
        ];
        
        for(let i=0; i<200; i++) {
          const t = topics[i % topics.length];
          questions.push({
            base: t.base,
            correct: t.correct,
            wrong1: t.wrong1,
            wrong2: t.wrong2,
            wrong3: t.wrong3,
            explanation: t.explanation
          });
        }
      }
      
      // COS 101: Computer
      if (subjectId === 'cos101') {
        const topics = [
          { base: "Convert decimal 25 to binary.", correct: "11001", wrong1: "10101", wrong2: "11101", wrong3: "10011", explanation: "16 + 8 + 1 = 25." },
          { base: "Simplify the Boolean expression: A(A + B)", correct: "A", wrong1: "AB", wrong2: "A + B", wrong3: "A²", explanation: "Distributive law: AA + AB = A(1+B) = A." },
          { base: "Which gate outputs 0 only when all inputs are 1?", correct: "NAND", wrong1: "AND", wrong2: "OR", wrong3: "NOR", explanation: "NAND is inverse of AND." },
          { base: "How many address lines for 64K memory?", correct: "16", wrong1: "14", wrong2: "15", wrong3: "17", explanation: "2^16 = 65,536 (64K)." },
          { base: "The 2's complement of 1010 is:", correct: "0110", wrong1: "0101", wrong2: "0111", wrong3: "1011", explanation: "Invert bits (0101) and add 1 (0110)." },
          { base: "Which scheduling algorithm minimizes waiting time?", correct: "SJF", wrong1: "FCFS", wrong2: "Round Robin", wrong3: "Priority", explanation: "Shortest Job First reduces wait time." },
          { base: "In IEEE 754 single precision, the exponent bias is:", correct: "127", wrong1: "128", wrong2: "256", wrong3: "1023", explanation: "Standard bias for 32-bit float." },
          { base: "Which is NOT a valid IP address?", correct: "256.0.0.1", wrong1: "192.168.1.1", wrong2: "10.0.0.1", wrong3: "172.16.5.5", explanation: "Octets cannot exceed 255." },
        ];
        for(let i=0; i<200; i++) {
          const t = topics[i % topics.length];
          questions.push({
            base: t.base,
            correct: t.correct,
            wrong1: t.wrong1,
            wrong2: t.wrong2,
            wrong3: t.wrong3,
            explanation: t.explanation
          });
        }
      }
      
      // PHY 101: Physics
      if (subjectId === 'phy101') {
        for(let i=0; i<200; i++) {
          const v = Math.floor(Math.random()*20)+5;
          const t = Math.floor(Math.random()*5)+1;
          const a = Math.floor(Math.random()*5)+2;
          const type = i % 4;
          
          if(type === 0) {
            questions.push({ 
              base: `Car accelerates from rest at ${a} m/s² for ${t}s. Find distance.`, 
              correct: `${0.5*a*t*t} m`, 
              wrong1: `${a*t} m`, 
              wrong2: `${v*t} m`, 
              wrong3: `${a*t*t} m`, 
              explanation: "Using s = ut + 0.5at²." 
            });
          } else if (type === 1) {
            const m = Math.floor(Math.random()*10)+2;
            questions.push({ 
              base: `KE of ${m}kg object moving at ${v} m/s.`, 
              correct: `${0.5*m*v*v} J`, 
              wrong1: `${m*v} J`, 
              wrong2: `${v*v} J`, 
              wrong3: `${m*v*v} J`, 
              explanation: "KE = 0.5mv²." 
            });
          } else if (type === 2) {
            const deg = Math.floor(Math.random()*4) * 90;
            questions.push({
              base: `Convert ${deg}° to radians.`,
              correct: `${deg}π/180 rad`,
              wrong1: `${deg}π rad`,
              wrong2: `${deg/180}π rad`,
              wrong3: `${deg} rad`,
              explanation: "Angle in radians = (π/180) * degrees."
            });
          } else {
            const m = Math.floor(Math.random()*5)+5;
            questions.push({ 
              base: `Weight of ${m}kg mass (g=10m/s²).`, 
              correct: `${m*10} N`, 
              wrong1: `${m/10} N`, 
              wrong2: `${m} kg`, 
              wrong3: `${m*10} J`, 
              explanation: "W = mg." 
            });
          }
        }
      }
      
      // STA 111: Statistics
      if (subjectId === 'sta111') {
        for(let i=0; i<200; i++) {
          const n1 = Math.floor(Math.random()*10)+5;
          const n2 = Math.floor(Math.random()*10)+5;
          const n3 = Math.floor(Math.random()*10)+5;
          const mean = ((n1+n2+n3)/3).toFixed(1);
          const variance = (((n1-mean)**2 + (n2-mean)**2 + (n3-mean)**2)/3).toFixed(1);
          
          if(i % 2 === 0) {
            questions.push({ 
              base: `Find variance of: ${n1}, ${n2}, ${n3}.`,
              correct: variance,
              wrong1: mean,
              wrong2: String(n1),
              wrong3: "0",
              explanation: "Variance = Σ(x-μ)²/N."
            });
          } else {
            questions.push({ 
              base: `In how many ways can ${n1} distinct books be arranged?`,
              correct: String(factorial(n1)),
              wrong1: String(n1*2),
              wrong2: String(n1*n1),
              wrong3: "1",
              explanation: "Permutation of n distinct objects is n!."
            });
          }
        }
      }
      
      // IFT 101: Internet
      if (subjectId === 'ift101') {
        const topics = [
          { base: "Which layer is responsible for encryption?", correct: "Presentation", wrong1: "Transport", wrong2: "Session", wrong3: "Application", explanation: "Layer 6 handles encryption." },
          { base: "CIDR for 255.255.255.0?", correct: "/24", wrong1: "/16", wrong2: "/8", wrong3: "/32", explanation: "24 bits set to 1." },
          { base: "Connectionless protocol?", correct: "UDP", wrong1: "TCP", wrong2: "HTTP", wrong3: "FTP", explanation: "UDP does not establish a connection." },
          { base: "Default HTTPS port?", correct: "443", wrong1: "80", wrong2: "21", wrong3: "25", explanation: "HTTPS uses port 443." },
          { base: "Most fault tolerant topology?", correct: "Mesh", wrong1: "Star", wrong2: "Bus", wrong3: "Ring", explanation: "Mesh has multiple paths." },
          { base: "ARP stands for:", correct: "Address Resolution Protocol", wrong1: "Automatic Routing Protocol", wrong2: "Address Routing Protocol", wrong3: "Automatic Resolution Protocol", explanation: "Maps IP to MAC." },
        ];
        for(let i=0; i<200; i++) {
          const t = topics[i % topics.length];
          questions.push({
            base: t.base,
            correct: t.correct,
            wrong1: t.wrong1,
            wrong2: t.wrong2,
            wrong3: t.wrong3,
            explanation: t.explanation
          });
        }
      }
      
      // GNS 103: Library
      if (subjectId === 'gns103') {
        const topics = [
          { base: "In Dewey, 800-899 covers:", correct: "Literature", wrong1: "Science", wrong2: "History", wrong3: "Geography", explanation: "800s are Literature." },
          { base: "Boolean operator to exclude terms?", correct: "NOT", wrong1: "AND", wrong2: "OR", wrong3: "XOR", explanation: "NOT excludes terms." },
          { base: "ISSN is used for:", correct: "Serials", wrong1: "Books", wrong2: "Music", wrong3: "Maps", explanation: "International Standard Serial Number." },
        ];
        for(let i=0; i<200; i++) {
          const t = topics[i % topics.length];
          questions.push({
            base: t.base,
            correct: t.correct,
            wrong1: t.wrong1,
            wrong2: t.wrong2,
            wrong3: t.wrong3,
            explanation: t.explanation
          });
        }
      }
      
      // Final Processing: Shuffle options for every question
      return questions.map(q => {
          const options = [
              { text: q.correct, isCorrect: true },
              { text: q.wrong1, isCorrect: false },
              { text: q.wrong2, isCorrect: false },
              { text: q.wrong3, isCorrect: false }
          ];
          shuffleArray(options);
          return {
              q: q.base,
              options: options.map(opt => opt.text),
              answer: options.findIndex(opt => opt.isCorrect), // Find the new index (0, 1, 2, or 3)
              explanation: q.explanation
          };
      });
    };

    const theoryBank = {
      mts101: [
        { q: "Prove by induction that sum of first n numbers is n(n+1)/2.", a: "Base case n=1 works. Inductive step: assume for k. Sum = k(k+1)/2 + (k+1) = (k+1)(k+2)/2. QED." },
        { q: "Explain the concept of a limit.", a: "A limit describes the value a function approaches as the input approaches some value." },
      ],
      gst111: [
        { q: "Differentiate between phonetics and phonology.", a: "Phonetics studies physical sounds; Phonology studies sound patterns." },
      ],
      cos101: [
        { q: "Compare RISC and CISC.", a: "RISC: Simple instructions, faster execution. CISC: Complex instructions, fewer lines of code." },
      ],
      phy101: [
        { q: "Derive the equations of motion.", a: "Using definitions of velocity and acceleration: v=u+at, s=ut+0.5at², v²=u²+2as." },
      ],
      sta111: [
        { q: "Explain the Central Limit Theorem.", a: "States that the sampling distribution of the mean approaches a normal distribution as sample size increases." },
      ],
      ift101: [
        { q: "Explain the TCP/IP model layers.", a: "Application, Transport, Internet, Network Access. Four abstraction layers." },
      ],
      gns103: [
        { q: "Discuss the importance of cataloguing.", a: "Enables retrieval of resources by author, title, and subject." }
      ]
    };

    // ========== STATE ==========
    let currentUser = null;
    let currentCourseId = null;
    let totalPoints = 0;
    
    // Quiz State
    let quizType = 'objectives';
    let questionCount = 20;
    let currentQuizQuestions = [];
    let currentQuestionIndex = 0;
    let userAnswers = [];
    let quizTimer = null;
    let timeLeft = 30;
    let quizScore = { correct: 0, wrong: 0, skipped: 0 };
    let websiteRatingValue = 0;

    // ========== INITIALIZATION ==========
    document.addEventListener('DOMContentLoaded', () => {
      loadUserData();
      renderCourseNav();
      renderCourseGrid();
    });

    // ========== AUTH ==========
    function toggleAuthForm() {
      document.getElementById('login-form').classList.toggle('hidden');
      document.getElementById('signup-form').classList.toggle('hidden');
    }
    function handleLogin() {
      const email = document.getElementById('login-email').value.trim();
      if(email) {
        currentUser = { name: email.split('@')[0], email };
        localStorage.setItem('examforge_user', JSON.stringify(currentUser));
        closeModal('auth-modal');
      }
    }
    function handleSignup() {
      const name = document.getElementById('signup-name').value.trim();
      const email = document.getElementById('signup-email').value.trim();
      if(name && email) {
        currentUser = { name, email };
        localStorage.setItem('examforge_user', JSON.stringify(currentUser));
        closeModal('auth-modal');
      }
    }
    function handleSocialLogin(provider) {
        // Simulate social login
        currentUser = { name: provider + ' User', email: 'user@' + provider.toLowerCase() + '.com' };
        localStorage.setItem('examforge_user', JSON.stringify(currentUser));
        closeModal('auth-modal');
        loadUserData();
    }
    
    function loadUserData() {
      const saved = localStorage.getItem('examforge_user');
      if (saved) {
        currentUser = JSON.parse(saved);
        document.getElementById('user-avatar').textContent = currentUser.name.charAt(0).toUpperCase();
      }
      const pts = localStorage.getItem('examforge_points');
      if(pts) totalPoints = parseInt(pts);
      document.getElementById('totalPoints').textContent = totalPoints.toLocaleString();
    }

    // ========== SIDEBAR ==========
    function toggleSidebar() {
      document.getElementById('sidebar').classList.toggle('open');
      document.getElementById('sidebar-overlay').classList.toggle('open');
    }
    function renderCourseNav() {
      const container = document.getElementById('course-nav');
      const courses = ['mts101', 'gst111', 'cos101', 'phy101', 'sta111', 'ift101', 'gns103'];
      const names = { mts101: 'Mathematics', gst111: 'English', cos101: 'Computer', phy101: 'Physics', sta111: 'Statistics', ift101: 'Internet', gns103: 'Library' };
      
      container.innerHTML = courses.map(id => `
        <div class="topic-nav-item ${id === currentCourseId ? 'active' : ''}" onclick="selectCourse('${id}')">
          <span class="font-mono text-xs px-2 py-1 rounded bg-[var(--bg)] border border-[var(--border)]">${id.toUpperCase()}</span>
          <span class="text-sm">${names[id]}</span>
        </div>
      `).join('');
    }

    // ========== DASHBOARD ==========
    function renderCourseGrid() {
      const container = document.getElementById('course-grid');
      const courses = [
        {id: 'mts101', name: 'Mathematics', code: 'MTS 101', desc: 'Calculus, Algebra, Trig'},
        {id: 'gst111', name: 'Use of English', code: 'GST 111', desc: 'Grammar, Phonetics'},
        {id: 'cos101', name: 'Computer Science', code: 'COS 101', desc: 'Architecture, Logic'},
        {id: 'phy101', name: 'Physics', code: 'PHY 101', desc: 'Mechanics, Waves'},
        {id: 'sta111', name: 'Statistics', code: 'STA 111', desc: 'Probability, Analysis'},
        {id: 'ift101', name: 'Internet Tech', code: 'IFT 101', desc: 'Protocols, Networks'},
        {id: 'gns103', name: 'Library Science', code: 'GNS 103', desc: 'Research, Classification'},
      ];

      container.innerHTML = courses.map(c => `
        <div class="course-card ${c.id === currentCourseId ? 'active' : ''}" onclick="selectCourse('${c.id}')">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 rounded-xl bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center font-mono font-bold text-[var(--accent)]">${c.code.split(' ')[0]}</div>
            <div>
              <h3 class="font-bold">${c.name}</h3>
              <p class="text-xs text-[var(--muted)]">${c.code}</p>
            </div>
          </div>
          <p class="text-sm text-[var(--muted)] mb-4">${c.desc}</p>
          <div class="flex justify-between items-center text-xs">
            <span class="text-[var(--accent)]">200 Questions</span>
            <svg class="w-4 h-4 text-[var(--muted)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
        </div>
      `).join('');
    }

    function selectCourse(id) {
      currentCourseId = id;
      const names = { mts101: 'Mathematics', gst111: 'Use of English', cos101: 'Computer Science', phy101: 'Physics', sta111: 'Statistics', ift101: 'Internet Tech', gns103: 'Library Science' };
      
      document.getElementById('current-course-title').textContent = `${id.toUpperCase()} - ${names[id]}`;
      document.getElementById('selected-course-info').classList.remove('hidden');
      
      renderCourseNav();
      renderCourseGrid();
      
      toggleSidebar();
    }

    // ========== VIEW MANAGEMENT ==========
    function showView(viewId) {
      document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
      document.getElementById('view-' + viewId).classList.add('active');
      window.scrollTo(0,0);
    }

    // ========== QUIZ SETUP ==========
    function openModal(id) { document.getElementById(id).classList.add('active'); }
    function closeModal(id) { document.getElementById(id).classList.remove('active'); }
    
    function setQuizType(type) {
      quizType = type;
      document.getElementById('type-obj').classList.toggle('active', type === 'objectives');
      document.getElementById('type-theory').classList.toggle('active', type === 'theory');
      document.getElementById('question-count-section').style.display = type === 'objectives' ? 'block' : 'none';
    }
    function setQuestionCount(count) {
      questionCount = count;
      document.querySelectorAll('[data-count]').forEach(btn => btn.classList.toggle('active', parseInt(btn.dataset.count) === count));
    }

    function showRulesModal() {
      if(!currentCourseId) { alert('Please select a course first.'); closeModal('quiz-setup-modal'); return; }
      closeModal('quiz-setup-modal');
      document.getElementById('rules-subject').textContent = currentCourseId.toUpperCase();
      document.getElementById('rules-count').textContent = questionCount;
      openModal('rules-modal');
    }
    
    // ========== QUIZ LOGIC ==========
    function startQuiz() {
      closeModal('rules-modal');
      
      if(quizType === 'theory') {
        startTheoryQuiz();
        return;
      }
      
      const allQ = generateQuestionBank(currentCourseId);
      // Shuffle the entire question pool first
      shuffleArray(allQ);
      currentQuizQuestions = allQ.slice(0, questionCount);
      
      userAnswers = new Array(currentQuizQuestions.length).fill(null);
      currentQuestionIndex = 0;
      quizScore = { correct: 0, wrong: 0, skipped: 0 };
      
      document.getElementById('quiz-title').textContent = currentCourseId.toUpperCase();
      document.getElementById('total-q').textContent = currentQuizQuestions.length;
      
      showView('quiz');
      renderQuizQuestion();
      startTimer();
    }
    
    function startTheoryQuiz() {
      const theory = theoryBank[currentCourseId] || [];
      currentQuizQuestions = theory;
      
      const container = document.getElementById('theory-quiz-container');
      document.getElementById('theory-quiz-title').textContent = currentCourseId.toUpperCase();
      
      container.innerHTML = theory.map((t, i) => `
        <div class="theory-card">
          <p class="font-medium mb-3">${i+1}. ${t.q}</p>
          <details class="theory-answer"><summary class="cursor-pointer text-[var(--accent)] text-sm">Show Answer</summary><p class="mt-2 text-[var(--muted)]">${t.a}</p></details>
        </div>
      `).join('');
      
      showView('theory-quiz');
    }

    function renderQuizQuestion() {
      const q = currentQuizQuestions[currentQuestionIndex];
      const letters = ['A', 'B', 'C', 'D'];
      
      document.getElementById('current-q').textContent = currentQuestionIndex + 1;
      document.getElementById('question-text').textContent = q.q;
      document.getElementById('quiz-progress').style.width = `${((currentQuestionIndex+1)/currentQuizQuestions.length)*100}%`;
      
      const optContainer = document.getElementById('options-container');
      // q.options is already shuffled from generation step
      optContainer.innerHTML = q.options.map((opt, i) => `
        <button class="option-item ${userAnswers[currentQuestionIndex] === i ? 'selected' : ''}" onclick="selectAnswer(${i})">
          <span class="option-marker">${letters[i]}</span>
          <span>${opt}</span>
        </button>
      `).join('');
      
      document.getElementById('next-btn').textContent = currentQuestionIndex === currentQuizQuestions.length - 1 ? 'Submit' : 'Next';
    }

    function selectAnswer(idx) {
      userAnswers[currentQuestionIndex] = idx;
      renderQuizQuestion();
    }

    function nextQuestion() {
      if(currentQuestionIndex === currentQuizQuestions.length - 1) {
        submitQuiz();
      } else {
        currentQuestionIndex++;
        renderQuizQuestion();
        resetTimer();
      }
    }

    function submitQuiz() {
      clearInterval(quizTimer);
      
      currentQuizQuestions.forEach((q, i) => {
        if(userAnswers[i] === null) quizScore.skipped++;
        else if(userAnswers[i] === q.answer) quizScore.correct++;
        else quizScore.wrong++;
      });
      
      const total = currentQuizQuestions.length;
      const pct = Math.round((quizScore.correct / total) * 100);
      
      totalPoints += quizScore.correct * 10;
      localStorage.setItem('examforge_points', totalPoints);
      document.getElementById('totalPoints').textContent = totalPoints;
      
      document.getElementById('final-score').textContent = `${pct}%`;
      document.getElementById('correct-count').textContent = quizScore.correct;
      document.getElementById('total-questions').textContent = total;
      document.getElementById('score-correct').textContent = quizScore.correct;
      document.getElementById('score-wrong').textContent = quizScore.wrong;
      document.getElementById('score-skipped').textContent = quizScore.skipped;
      
      // Encouragement Logic
      const msgDiv = document.getElementById('encouragement-msg');
      if(pct < 50) {
          msgDiv.classList.remove('hidden');
      } else {
          msgDiv.classList.add('hidden');
      }
      
      // Rating Reset
      websiteRatingValue = 0;
      document.getElementById('rating-text').textContent = "Click to rate";
      document.getElementById('website-rating').innerHTML = renderRatingStars();
      
      showView('results');
    }
    
    // ========== RATING ==========
    function renderRatingStars() {
       let html = '';
       for(let i=1; i<=5; i++) {
         html += `<svg onclick="setWebsiteRating(${i})" style="cursor:pointer; transition: 0.2s; fill: ${i <= websiteRatingValue ? 'var(--star)' : 'var(--border)'}" width="32" height="32" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
       }
       return html;
    }
    function setWebsiteRating(val) {
       websiteRatingValue = val;
       document.getElementById('website-rating').innerHTML = renderRatingStars();
       document.getElementById('rating-text').textContent = `You rated ${val} star${val > 1 ? 's' : ''}!`;
    }

    // ========== TIMER ==========
    function startTimer() {
      timeLeft = 30;
      updateTimerDisplay();
      quizTimer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if(timeLeft <= 0) nextQuestion();
      }, 1000);
    }
    function resetTimer() {
      clearInterval(quizTimer);
      timeLeft = 30;
      updateTimerDisplay();
      startTimer();
    }
    function updateTimerDisplay() {
      const circ = document.getElementById('timer-circle');
      document.getElementById('timer-display').textContent = timeLeft;
      circ.style.strokeDashoffset = 150.8 * (1 - timeLeft / 30);
    }

    // ========== CORRECTIONS ==========
    function showCorrections() {
      const container = document.getElementById('corrections-container');
      const letters = ['A', 'B', 'C', 'D'];
      
      container.innerHTML = currentQuizQuestions.map((q, i) => {
        const ua = userAnswers[i];
        const isCorrect = ua === q.answer;
        const isSkipped = ua === null;
        
        return `
          <div class="bg-[var(--card)] border-l-4 ${isCorrect ? 'border-[var(--success)]' : 'border-[var(--danger)]'} rounded-xl p-5 mb-4">
            <p class="font-medium mb-3">${i+1}. ${q.q}</p>
            <div class="space-y-2">
              ${q.options.map((opt, j) => `
                <div class="option-item ${j === q.answer ? 'correct-answer' : ''} ${j === ua && !isCorrect ? 'user-wrong' : ''}">
                  <span class="option-marker">${letters[j]}</span>
                  <span>${opt}</span>
                </div>
              `).join('')}
            </div>
            <div class="explanation-box">${q.explanation}</div>
          </div>
        `;
      }).join('');
      
      showView('corrections');
    }
    
    function retryQuiz() { startQuiz(); }
    function exitQuiz() {
      clearInterval(quizTimer);
      showView('dashboard');
    }
    function downloadResultsPDF() { alert('Downloading Results PDF...'); }