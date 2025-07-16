import { useEffect } from "react";

interface IGradient {
  currentX: number;
  currentY: number;
  targetX: number;
  targetY: number;
  innerRadius: number;
  outerRadius: number;
  speed: number;
  lastTargetChange: number;
  targetChangeInterval: number;
  color: string;
}

export default function Background() {
  useEffect(() => {
    function createBg() {
      const canvas = document.getElementById("animated-bg") as HTMLCanvasElement;
      if (!canvas) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const gradients: IGradient[] = [];
      const minOpacity = 0.05;
      const maxOpacity = 0.12;
      let colors = [
        "rgba(30, 144, 255, opacity)", 
        "rgba(138, 43, 226, opacity)", 
        "rgba(255, 140, 0, opacity)", 
        "rgba(34, 197, 94, opacity)", 
        "rgba(236, 72, 153, opacity)", 
      ];
      colors = colors.map((color) => {
        const randomOpacity = Math.random() * (maxOpacity - minOpacity) + minOpacity;
        return color.replace("opacity", randomOpacity.toString());
      });

      const initialTargetX = Math.random() * canvas.width;
      const initialTargetY = Math.random() * canvas.height;

      const minSpeed = 0.0005;
      const maxSpeed = 0.0006;
      const minRadius = 100;
      const maxRadius = canvas.width / 2;
      const minInterval = 8000;
      const maxInterval = 10000;

      // Initialize gradients with random movement properties
      for (let i = 0; i < 5; i++) {
        let startX: number;
        let startY: number;
        let attempts = 0;

        // Ensure the starting point is not too close to existing gradients
        do {
          startX = Math.random() * canvas.width;
          startY = Math.random() * canvas.height;
          attempts++;
        } while (
          attempts < 10 &&
          gradients.some((grad) => {
            const distance = Math.sqrt(Math.pow(grad.currentX - startX, 2) + Math.pow(grad.currentY - startY, 2));
            return distance < 250;
          })
        );

        const color = colors[i];
        const gradient = {
          currentX: startX,
          currentY: startY,
          targetX: initialTargetX,
          targetY: initialTargetY,
          innerRadius: 100 + Math.floor(Math.random() * (minRadius - 100)),
          outerRadius: minRadius + 300 + Math.floor(Math.random() * (maxRadius - (minRadius + 300))),
          speed: minSpeed + Math.random() * maxSpeed,
          lastTargetChange: Date.now(),
          targetChangeInterval: minInterval + Math.random() * maxInterval,
          color,
        } as IGradient;

        if (navigator.userAgent.includes("firefox")) {
          // Firefox has issues with large gradients, so we limit the outer radius
          gradient.outerRadius = Math.min(gradient.outerRadius, canvas.width / 3);
        }

        gradients.push(gradient);
      }

      function getRandomTarget(grad: IGradient) {
        let newX: number;
        let newY: number;

        const minDistance = Math.min(canvas.width, canvas.height) / 3;

        do {
          newX = Math.random() * canvas.width;
          newY = Math.random() * canvas.height;
        } while (
          gradients.some((grad) => {
            const distance = Math.sqrt(Math.pow(grad.currentX - grad.currentX, 2) + Math.pow(grad.currentY - grad.currentY, 2));
            return distance < 250;
          }) &&
          Math.sqrt(Math.pow(newX - grad.currentX, 2) + Math.pow(newY - grad.currentY, 2)) < minDistance
        );

        return { x: newX, y: newY };
      }

      function animate() {
        if (!ctx) return;

        // Clear canvas
        ctx.fillStyle = "rgb(15 20 42/1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const currentTime = Date.now();

        // Update and draw each gradient
        gradients.forEach((grad) => {
          // Check if it's time to pick a new random target
          if (currentTime - grad.lastTargetChange > grad.targetChangeInterval) {
            const newTarget = getRandomTarget(grad);
            grad.targetX = newTarget.x;
            grad.targetY = newTarget.y;
            grad.lastTargetChange = currentTime;
            grad.targetChangeInterval = minInterval + Math.random() * maxInterval;
          }

          const deltaX = grad.targetX - grad.currentX;
          const deltaY = grad.targetY - grad.currentY;

          grad.currentX += deltaX * grad.speed;
          grad.currentY += deltaY * grad.speed;

          // Create gradient at current position
          const gradient = ctx.createRadialGradient(grad.currentX, grad.currentY, grad.innerRadius, grad.currentX, grad.currentY, grad.outerRadius);

          gradient.addColorStop(0, grad.color);
          gradient.addColorStop(1, "rgba(0, 78, 216, 0)"); // Transparent end

          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        });

        requestAnimationFrame(animate);
      }

      // Start animation
      // If reduce motion is enabled, skip the animation
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        animate();
      }

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Update positions if they're now off-screen
        gradients.forEach((grad) => {
          if (grad.currentX > canvas.width) {
            grad.currentX = Math.random() * canvas.width;
            grad.targetX = grad.currentX;
          }
          if (grad.currentY > canvas.height) {
            grad.currentY = Math.random() * canvas.height;
            grad.targetY = grad.currentY;
          }
        });
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }

    const cleanup = createBg();
    return cleanup;
  }, []);

  return (
    <canvas
      id="animated-bg"
      className="fixed inset-0 z-[-1] w-full h-full"
      style={{ background: "rgb(15 23 42)" }}
    />
  );
}
