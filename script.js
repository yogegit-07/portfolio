// DYNAMIC CLIENT-SIDE RESUME DATA COMPILING ENGINE
function handleDownloadResume() {
    const resumeContent = `===================================================================
YOGESH C
Python Developer (Fresher) | AWS re/Start | SQL Basics
Contact: c.yogesh0007@gmail.com | Palamedu, Madurai, Tamil Nadu
Profiles: linkedin.com/in/yogesh-c-687559305 | github.com/yogegit-07
===================================================================

SUMMARY
Motivated Python Developer (Fresher) with hands-on internship experience and a strong foundation in Python, AWS cloud services, and SQL. Developed a real-world AI-powered web application and eager to contribute to innovative teams in a dynamic environment.

INTERNSHIP EXPERIENCE
---------------------
Python Developer Intern | Phoenix Softech
Location: No.266, 2nd Floor, Good Shed Street, Madurai - 625001
Duration: 15 July 2025 - 31 July 2025
* Developed Python-based automation scripts and tools to streamline internal workflows.
* Handled data preprocessing and analysis using Python libraries such as Pandas and NumPy.
* Built and tested Python modules for data processing and backend logic integration.
* Collaborated with the team to write clean, reusable Python code following best practices.

PROJECTS
--------
ShopAI - AI-Powered Smart Shopping Assistant (Major Project)
Technologies: React.js, TypeScript, Tailwind CSS, Vite, Google Gemini AI API, PostgreSQL, Edge Functions
* Built a React-based web application with a conversational AI interface that processes natural language queries (e.g., "Find Nike shoes under 5000") for real-time product search and price comparison across multiple e-commerce platforms.
* Integrated Google Gemini AI via cloud edge functions to understand user intent and deliver personalized, context-aware product recommendations.
* Implemented voice search using the Web Speech Recognition API, enabling hands-free product discovery in English (India locale).
* Developed a complete order management lifecycle including payment method selection (UPI, Card, COD), real-time order tracking with timeline visualization, wishlist management, and order cancellation.
* Deployed with a cloud-based PostgreSQL backend featuring Row Level Security for authentication and data persistence, with local storage fallback for offline functionality.

TECHNICAL SKILLS
----------------
* Cloud: AWS re/Start (S3, EC2, IAM, VPC, CloudWatch)
* Programming: Python, JavaScript (Basic), TypeScript (Basic)
* Web & Frontend: React.js, Tailwind CSS, HTML, CSS, Vite
* Database: SQL, PostgreSQL (Basic), MySQL (Basic)
* Libraries & Tools: Pandas, NumPy, Git, GitHub, VS Code, Linux (Basic)
* AI/APIs: Google Gemini AI API, Web Speech Recognition API, REST APIs
* Soft Skills: Quick Learner, Team Collaboration, Time Management, Adaptability
* Languages: Tamil, English

EDUCATION
---------
* B.E. in Computer Science Engineering
  PTR College of Engineering and Technology | CGPA: 7.55
* Higher Secondary Certificate (HSC)
  Govt Model Hr Sec School | Score: 59.50% | Year: 2022
* Secondary School Leaving Certificate (SSLC)
  Govt Model Hr Sec School | Score: 52.20% | Year: 2020

CERTIFICATIONS
--------------
* Python Development - Phoenix Softech (Certified, July 2025)
* MS Office - Naan Mudhalvan (Certified, 2024)
`;

    // Package content into download stream blob container
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Yogesh_C_Resume.txt';
    
    // Execute download activation pipeline
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// TRANSMISSION PACKET SUBMISSION ROUTINE
function handleSubmit(){
    const n = document.getElementById('fname').value.trim();
    const e = document.getElementById('femail').value.trim();
    const s = document.getElementById('fsubject').value.trim();
    const m = document.getElementById('fmessage').value.trim();
    
    if(!n || !e || !m){ 
        alert('System Validation Fault: Essential payload packets missing.'); 
        return; 
    }
    
    const mailto = `mailto:c.yogesh0007@gmail.com?subject=${encodeURIComponent(s || 'Terminal System Link Request')}&body=${encodeURIComponent(`Agent: ${n}\nRouting Node: ${e}\n\nPayload:\n${m}`)}`;
    window.open(mailto);
}

// NAVIGATION SELECTION TRACKING ENGINE
document.querySelectorAll('.tree-item').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.tree-item').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
        const targetId = this.getAttribute('href').slice(1);
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    });
});

// MINIMAL TERMINAL BACKGROUND REPLICATOR MATRIX
(function(){
    const canvas = document.getElementById('terminal-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    function sizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    sizeCanvas();
    window.addEventListener('resize', sizeCanvas);

    const columns = Math.floor(canvas.width / 20) + 1;
    const yPositions = Array(columns).fill(0);

    function stepMatrix() {
        ctx.fillStyle = 'rgba(10, 12, 16, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#ffb000';
        ctx.font = '10px monospace';

        yPositions.forEach((y, index) => {
            const text = String.fromCharCode(33 + Math.random() * 93);
            const x = index * 20;
            ctx.fillText(text, x, y);
            if (y > 100 + Math.random() * 10000) {
                yPositions[index] = 0;
            } else {
                yPositions[index] = y + 12;
            }
        });
    }
    setInterval(stepMatrix, 50);
})();