import { useEffect, useRef } from 'react';

export default function ParticleCanvas({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId;
    let particles = [];
    
    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    // Particle Classes
    class RainDrop {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height; // Random start height on init
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -20;
        this.vy = 8 + Math.random() * 8;
        this.l = 10 + Math.random() * 15;
        this.w = 1 + Math.random() * 1.5;
        this.alpha = 0.15 + Math.random() * 0.25;
      }

      update() {
        this.y += this.vy;
        if (this.y > canvas.height) {
          this.reset();
        }
      }

      draw() {
        ctx.strokeStyle = `rgba(156, 163, 175, ${this.alpha})`;
        ctx.lineWidth = this.w;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.l);
        ctx.stroke();
      }
    }

    class SnowFlake {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.r = 1.5 + Math.random() * 3.5;
        this.vy = 0.8 + Math.random() * 1.2;
        this.swaySpeed = 0.01 + Math.random() * 0.02;
        this.swayRange = 1 + Math.random() * 2;
        this.swayOffset = Math.random() * Math.PI * 2;
        this.alpha = 0.2 + Math.random() * 0.4;
      }

      update() {
        this.y += this.vy;
        this.swayOffset += this.swaySpeed;
        this.x += Math.sin(this.swayOffset) * 0.5;
        if (this.y > canvas.height) {
          this.reset();
        }
      }

      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class LightSpark {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 10;
        this.r = 1 + Math.random() * 2.5;
        this.vy = -(0.5 + Math.random() * 1.2);
        this.vx = (Math.random() - 0.5) * 0.5;
        this.alpha = 0.1 + Math.random() * 0.3;
        this.life = 0;
        this.maxLife = 200 + Math.random() * 300;
      }

      update() {
        this.y += this.vy;
        this.x += this.vx;
        this.life++;
        this.alpha = Math.max(0, (1 - this.life / this.maxLife) * 0.35);
        if (this.y < -10 || this.life >= this.maxLife) {
          this.reset();
        }
      }

      draw() {
        ctx.fillStyle = `rgba(251, 191, 36, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class CloudBlob {
      constructor() {
        this.reset();
        this.x = Math.random() * canvas.width;
      }

      reset() {
        this.x = -150;
        this.y = Math.random() * (canvas.height * 0.6);
        this.r = 80 + Math.random() * 120;
        this.vx = 0.1 + Math.random() * 0.25;
        this.alpha = 0.02 + Math.random() * 0.04;
      }

      update() {
        this.x += this.vx;
        if (this.x - this.r > canvas.width) {
          this.reset();
        }
      }

      draw() {
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.r
        );
        gradient.addColorStop(0, `rgba(200, 200, 220, ${this.alpha})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class WindStreak {
      constructor() {
        this.reset();
        this.x = Math.random() * canvas.width;
      }

      reset() {
        this.x = -100;
        this.y = Math.random() * canvas.height;
        this.vx = 4 + Math.random() * 6;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.l = 40 + Math.random() * 80;
        this.alpha = 0.03 + Math.random() * 0.07;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x > canvas.width + 100) {
          this.reset();
        }
      }

      draw() {
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.l, this.y + this.vy * 5);
        ctx.stroke();
      }
    }

    // Initialize Particles
    const initParticles = () => {
      particles = [];
      let count = 40;
      if (theme === 'rainy' || theme === 'stormy') {
        count = theme === 'stormy' ? 90 : 60;
        for (let i = 0; i < count; i++) particles.push(new RainDrop());
      } else if (theme === 'snowy') {
        count = 50;
        for (let i = 0; i < count; i++) particles.push(new SnowFlake());
      } else if (theme === 'sunny' || theme === 'tropical') {
        count = 30;
        for (let i = 0; i < count; i++) particles.push(new LightSpark());
      } else if (theme === 'cloudy' || theme === 'misty') {
        count = 6;
        for (let i = 0; i < count; i++) particles.push(new CloudBlob());
      } else if (theme === 'cold') {
        count = 20;
        for (let i = 0; i < count; i++) particles.push(new WindStreak());
      }
    };

    initParticles();

    // Animation Loop
    let flashCount = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Handle lightning flashes for stormy theme
      if (theme === 'stormy') {
        if (Math.random() < 0.003 && flashCount === 0) {
          flashCount = 8;
        }
        if (flashCount > 0) {
          flashCount--;
          if (flashCount % 2 === 0) {
            ctx.fillStyle = `rgba(255, 255, 255, ${0.08 * (flashCount / 8)})`;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          }
        }
      }

      // Update & Draw
      for (const p of particles) {
        p.update();
        p.draw();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}
