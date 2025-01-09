async function setupCamera() {
    const video = document.getElementById('video');
    const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
    });
    video.srcObject = stream;

    return new Promise((resolve) => {
        video.onloadedmetadata = () => {
            resolve(video);
        };
    });
}

async function loadModelAndDetect() {
    // 加載 COCO-SSD 模型
    const model = await cocoSsd.load();
    console.log('Model loaded successfully');

    const video = await setupCamera();
    video.play();

    // 繪製到 Canvas
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // 實時處理
    async function detectFrame() {
        // 獲取偵測結果
        const predictions = await model.detect(video);
        
        // 清除畫布
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 繪製視頻
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        // 繪製偵測框
        predictions.forEach(prediction => {
            const [x, y, width, height] = prediction.bbox;
            ctx.strokeStyle = 'red';
            ctx.lineWidth = 2;
            ctx.strokeRect(x, y, width, height);
            ctx.font = '18px Arial';
            ctx.fillStyle = 'red';
            ctx.fillText(
                `${prediction.class} (${Math.round(prediction.score * 100)}%)`,
                x,
                y > 10 ? y - 5 : y + 20
            );
        });

        // 下一幀
        requestAnimationFrame(detectFrame);
    }

    detectFrame();
}

loadModelAndDetect();
