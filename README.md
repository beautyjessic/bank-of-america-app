# bank-of-america-app
A professional full-stack banking application
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bank of America - Login</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #003d82 0%, #00a8e8 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .login-container {
            background: white;
            padding: 50px;
            border-radius: 10px;
            box-shadow: 0 10px 50px rgba(0, 0, 0, 0.3);
            width: 100%;
            max-width: 450px;
        }
        .logo {
            text-align: center;
            margin-bottom: 40px;
        }
        .logo h1 {
            color: #003d82;
            font-size: 32px;
            margin-bottom: 10px;
        }
        .logo p {
            color: #666;
            font-size: 16px;
        }
        .form-group {
            margin-bottom: 20px;
        }
        label {
            display: block;
            color: #333;
            font-weight: 600;
            margin-bottom: 8px;
        }
        input {
            width: 100%;
            padding: 12px;
            border: 2px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
        }
        input:focus {
            outline: none;
            border-color: #00a8e8;
        }
        .btn {
            width: 100%;
            padding: 12px;
            background: linear-gradient(135deg, #003d82 0%, #00a8e8 100%);
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            margin-top: 20px;
        }
        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 20px rgba(0, 61, 130, 0.3);
        }
        .credentials {
            background: #f0f4f8;
            padding: 15px;
            border-radius: 5px;
            margin-top: 30px;
            text-align: center;
            color: #003d82;
            font-size: 13px;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <div class="logo">
            <h1>🏦 Bank of America</h1>
            <p>Online Banking</p>
        </div>
        
        <form id="loginForm">
            <div class="form-group">
                <label>Username</label>
                <input type="text" id="username" placeholder="robert.gordon" value="robert.gordon" required>
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" id="password" placeholder="SecureBank123!" value="SecureBank123!" required>
            </div>
            <button type="submit" class="btn">Login</button>
        </form>
        
        <div class="credentials">
            <strong>Demo Credentials:</strong><br>
            Username: robert.gordon<br>
            Password: SecureBank123!
        </div>
    </div>

    <script>
        document.getElementById('loginForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            localStorage.setItem('user', JSON.stringify({
                fullName: 'ROBERT GORDON',
                accountNumber: '56764578657',
                balance: 40000.00
            }));
            window.location.href = '/dashboard.html';
        });
    </script>
</body>
</html>
