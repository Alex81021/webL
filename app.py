from flask import Flask, send_from_directory
import os

app = Flask(__name__)


# Homepage
@app.route("/")
def home():
    return send_from_directory("public", "index.html")


# Serve CSS, JavaScript, images, etc.
@app.route("/<path:filename>")
def files(filename):
    return send_from_directory("public", filename)


# Start server
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)