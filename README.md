<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>NOCHORLD - Secure Activation Gate</title>

    <style>

        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: #111111; color: #ffffff; margin: 0; padding: 20px; line-height: 1.6; text-align: center; }

        .gate-container { max-width: 400px; margin: 60px auto; padding: 30px; border: 1px solid #333333; border-radius: 12px; background-color: #1a1a1a; box-shadow: 0 4px 15px rgba(0,0,0,0.5); box-sizing: border-box; }

        .gate-title { font-size: 1.4rem; font-weight: 800; margin-bottom: 15px; color: #E50914; letter-spacing: 1px; }

        .gate-input { width: 100%; padding: 12px; margin-bottom: 15px; border: 1px solid #444444; border-radius: 6px; font-size: 1rem; box-sizing: border-box; text-align: center; background-color: #222222; color: #ffffff; }

        .gate-input::placeholder { color: #777777; }

        .gate-button { width: 100%; padding: 14px; background-color: #E50914; color: white; border: none; border-radius: 6px; font-size: 1rem; font-weight: bold; cursor: pointer; box-sizing: border-box; text-transform: uppercase; letter-spacing: 0.5px; }

        .error-message { color: #ff4d4d; font-size: 0.9rem; margin-top: 15px; display: none; font-weight: 600; }

        .success-message { display: none; color: #2ecc71; font-weight: bold; margin-top: 25px; line-height: 1.4; }

    </style>

</head>

<body>

    <div class="gate-container">

        <div class="gate-title">🔑 NOCHORLD ACTIVATION</div>

        <p style="font-size: 0.9rem; color: #aaaaaa; margin-bottom: 25px;">Enter your App Username and your unique Subscription Key to unlock your global reading pass.</p>

        

        <!-- USERNAME INPUT -->

        <input type="text" id="appUsername" class="gate-input" placeholder="Enter Your App Username" autocomplete="off" required>

        

        <!-- UNIQUE PASSWORD INPUT -->

        <input type="text" id="accessKey" class="gate-input" placeholder="Enter Your Subscription Key" autocomplete="off" required>

        

        <button class="gate-button" onclick="verifySecureCredentials()">Activate My Pass</button>

        <div id="errorMessage" class="error-message"></div>

        <div id="successMessage" class="success-message">🎉 ACTIVATION SUCCESSFUL!<br><span style="font-size: 0.85rem; color: #aaaaaa; font-weight: normal;">Your personal pass is active. You can now close this tab and browse all books freely.</span></div>

    </div>

    <script>

        // MASTER COMBINATION DATABASE

        // Format: "USERNAME": { key: "THE_PASSWORD", expiry: "YYYY-MM-DD" }

        const secureDatabase = {

            "ToddThomas99": { key: "TODD-ARCANA-JUNE", expiry: "2026-06-30" },

            "EnochReader": { key: "ENOCH-ARCANA-JUNE", expiry: "2026-06-30" }

        };

        function verifySecureCredentials() {

            const inputUser = document.getElementById("appUsername").value.trim();

            const inputKey = document.getElementById("accessKey").value.trim();

            const errorDiv = document.getElementById("errorMessage");

            const successDiv = document.getElementById("successMessage");

            

            errorDiv.style.display = "none";

            successDiv.style.display = "none";

            // 1. Check if username exists in your subscription database

            if (secureDatabase.hasOwnProperty(inputUser)) {

                const userRecord = secureDatabase[inputUser];

                // 2. Check if the typed key matches that specific user's assigned key

                if (userRecord.key === inputKey) {

                    const expirationDate = new Date(userRecord.expiry);

                    const today = new Date();

                    today.setHours(0,0,0,0);

                    // 3. Check if their subscription time has run out

                    if (today <= expirationDate) {

                        // REVEAL PASS & WRITE GLOBAL VIP TOKEN TO PHONE CHIP

                        localStorage.setItem("appMySite_vip_status", "ACTIVE");

                        localStorage.setItem("appMySite_expiry_date", userRecord.expiry);

                        successDiv.style.display = "block";

                    } else {

                        errorDiv.innerText = "❌ Your premium key expired on " + userRecord.expiry + ". Please renew your subscription.";

                        errorDiv.style.display = "block";

                    }

                } else {

                    // Key does not match the username record

                    errorDiv.innerText = "❌ Incorrect Key for this username. Please check your spelling.";

                    errorDiv.style.display = "block";

                }

            } else {

                // Username is completely missing from your paid list

                errorDiv.innerText = "❌ Username not found on the active subscriber list. Please email your receipt to register.";

                errorDiv.style.display = "block";

            }

        }

    </script>

</body>

</htm
