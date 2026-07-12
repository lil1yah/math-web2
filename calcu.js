<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator | AliMathics</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>
<header>
    <nav class="navbar">
        <img src="img/mathub2.png" class="logo" alt="">
            AliMathics
        </div>
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="calculator.html" class="active">Calculator</a></li>
            <li><a href="diameter.html">Diameter</a></li>
            <li><a href="area.html">Area</a></li>
            <li><a href="volume.html">Volume</a></li>
            <li><a href="perimeter.html">Perimeter</a></li>
            <li><a href="about.html">About</a></li>
        </ul>
    </nav>
</header>
<section class="page-title">
    <h1>Basic Calculator</h1>
    <p>Choose an operation below.</p>
</section>

<div class="calculator-grid">
    <!-- Addition -->
    <div class="card">
        <h2>Addition</h2>
        <input type="number" id="add1" placeholder="First Number">
        <input type="number" id="add2" placeholder="Second Number">
        <button onclick="addition()">Solve</button>
        <h3 id="addResult">Answer:</h3>
    </div>

    <!-- Subtraction -->
    <div class="card">
        <h2>Subtraction</h2>
        <input type="number" id="sub1" placeholder="First Number">
        <input type="number" id="sub2" placeholder="Second Number">
        <button onclick="subtraction()">Solve</button>
        <h3 id="subResult">Answer:</h3>
    </div>

    <!-- Multiplication -->
    <div class="card">
        <h2>Multiplication</h2>
        <input type="number" id="mul1" placeholder="First Number">
        <input type="number" id="mul2" placeholder="Second Number">
        <button onclick="multiplication()">Solve</button>
        <h3 id="mulResult">Answer:</h3>
    </div>

    <!-- Division -->
    <div class="card">
        <h2>Division</h2>
        <input type="number" id="div1" placeholder="Dividend">
        <input type="number" id="div2" placeholder="Divisor">
        <button onclick="division()">Solve</button>
        <h3 id="divResult">Answer:</h3>
    </div>

    <!-- Percentage -->
    <div class="card">
        <h2>Percentage</h2>
        <input type="number" id="percent1" placeholder="Number">
        <input type="number" id="percent2" placeholder="Percent (%)">
        <button onclick="percentage()">Solve</button>
        <h3 id="percentResult">Answer:</h3>
    </div>

    <!-- Square Root -->
    <div class="card">
        <h2>Square Root</h2>
        <input type="number" id="sqrtInput" placeholder="Enter Number">
        <button onclick="squareRoot()">Solve</button>
        <h3 id="sqrtResult">Answer:</h3>
    </div>

    <!-- Exponent -->
    <div class="card">
        <h2>Exponent</h2>
        <input type="number" id="base" placeholder="Base">
        <input type="number" id="power" placeholder="Exponent">
        <button onclick="exponent()">Solve</button>
        <h3 id="expResult">Answer:</h3>
    </div>

    <!-- Parentheses -->
    <div class="card">
        <h2>Expression Calculator</h2>

        <input
            type="text"
            id="expression"
            placeholder="Example: (5+3)*2"
        >
        <button onclick="expressionCalc()">Solve</button>
        <h3 id="expressionResult">Answer:</h3>
    </div>
</div>

<footer>
    <p>AliMathics | Mathematics Calculator Website</p>
</footer>
<script src="script.js"></script>
</body>
</html>
