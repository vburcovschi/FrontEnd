const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "gray";
ctx.fillRect(0, 0, 300, 300);

// Обычный прямоугольник
ctx.strokeStyle = "yellow";
ctx.strokeRect(10, 20, 30, 40);

// Залитый прямоугольник
ctx.fillStyle = "green";
ctx.fillRect(70, 10, 50, 50);


const canvasContour = document.getElementById("canvas-for-contour");
const ctxContour = canvasContour.getContext("2d");

ctxContour.beginPath(); // Создает новый контур
ctxContour.moveTo(75,50); // Перемещает перо в точку с координатами x и y.
ctxContour.lineTo(100,75); // Рисует линию с текущей позиции до позиции, определенной x и y.
ctxContour.lineTo(100,25);
ctxContour.fillStyle = "green"; // Заливаем выбранным цветом фигуру
ctxContour.fill(); // Рисует фигуру с заливкой внутренней области.
