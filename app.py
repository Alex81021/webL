from flask import Flask, send_from_directory
import os

app = Flask(__name__, static_folder="public")


# Show the frontend
@app.route("/")
def home():
    return send_from_directory("public", "index.html")


# Start the server
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)