// RESUME PDF DOWNLOAD HANDLER
function handleDownloadResume() {
    const link = document.createElement('a');
    link.href = './Yogesh_C_Resume.pdf';
    link.download = 'Yogesh_C_Resume.pdf';
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