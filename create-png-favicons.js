const fs = require('fs');

// Create PNG favicons using Canvas-like approach
function createPNGFavicons() {
    console.log('🎨 Creating PNG favicon files in multiple sizes...');
    
    // Create HTML files that will generate PNG versions
    const sizes = [16, 32, 70, 150, 180, 310];
    
    sizes.forEach(size => {
        const html = `
<!DOCTYPE html>
<html>
<head><title>Favicon ${size}x${size}</title></head>
<body>
    <canvas id="canvas" width="${size}" height="${size}"></canvas>
    <script>
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        
        // Calculate sizes based on canvas size
        const fontSize = Math.floor(${size} * 0.6);
        const radius = ${size >= 150 ? Math.floor(size * 0.1) : 0};
        
        // Background gradient
        const gradient = ctx.createLinearGradient(0, 0, ${size}, ${size});
        gradient.addColorStop(0, '#3B82F6');
        gradient.addColorStop(1, '#1E40AF');
        
        // Draw background with rounded corners for larger sizes
        if (${size} >= 150) {
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.roundRect(0, 0, ${size}, ${size}, radius);
            ctx.fill();
        } else {
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, ${size}, ${size});
            
            ctx.strokeStyle = '#1E3A8A';
            ctx.lineWidth = 1;
            ctx.strokeRect(0, 0, ${size}, ${size});
        }
        
        // Draw "SI" text
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold ' + fontSize + 'px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('SI', ${size}/2, ${size}/2);
        
        // Add accent dot for larger sizes
        if (${size} >= 32) {
            const dotSize = Math.max(2, Math.floor(${size} * 0.06));
            const dotX = ${size} - dotSize * 2 - 4;
            const dotY = dotSize + 4;
            
            ctx.fillStyle = '#10B981';
            ctx.beginPath();
            ctx.arc(dotX, dotY, dotSize, 0, 2 * Math.PI);
            ctx.fill();
        }
        
        // Auto download
        setTimeout(() => {
            const link = document.createElement('a');
            link.download = 'favicon-${size}x${size}.png';
            link.href = canvas.toDataURL('image/png');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            console.log('Generated favicon-${size}x${size}.png');
        }, 100);
    </script>
</body>
</html>`;
        
        fs.writeFileSync(`favicon-generator-${size}.html`, html.trim());
    });
    
    console.log('✅ Created favicon generator HTML files');
    console.log('Open each favicon-generator-*.html file in a browser to download the PNG files');
}

createPNGFavicons();
