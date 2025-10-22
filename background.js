// background.js - Fondo animado con puntos conectados
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

let w, h;
let dots = [];

function initBackground() {
    if (!canvas) return;
    
    resizeCanvas();
    drawDots();
}

function resizeCanvas() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    dots = [];
    
    const dotCount = window.innerWidth < 768 ? 80 : 120;
    
    for (let i = 0; i < dotCount; i++) {
        dots.push({
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: Math.random() * 1.5 + 0.5
        });
    }
}

function connectDots() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    
    // COLORES PUROS
    ctx.strokeStyle = currentTheme === 'dark' ? '#ffffff' : '#000000';
    ctx.lineWidth = 0.5;
    
    for (let a = 0; a < dots.length; a++) {
        for (let b = a + 1; b < dots.length; b++) {
            const dx = dots[a].x - dots[b].x;
            const dy = dots[a].y - dots[b].y;
            const dist = dx * dx + dy * dy;
            
            if (dist < 10000) {
                ctx.beginPath();
                ctx.moveTo(dots[a].x, dots[a].y);
                ctx.lineTo(dots[b].x, dots[b].y);
                ctx.stroke();
            }
        }
    }
}

function drawDots() {
    if (!canvas || !ctx) return;
    
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    ctx.fillStyle = currentTheme === 'dark' ? '#ffffff' : '#000000';
    
    ctx.clearRect(0, 0, w, h);
    
    // Dibujar puntos
    for (const dot of dots) {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fill();

        // Movimiento
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Rebote en bordes
        if (dot.x < 0 || dot.x > w) dot.vx *= -1;
        if (dot.y < 0 || dot.y > h) dot.vy *= -1;
    }

    connectDots();
    requestAnimationFrame(drawDots);
}

// Eventos
window.addEventListener("resize", resizeCanvas);

// Inicialización
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBackground);
} else {
    initBackground();
}
