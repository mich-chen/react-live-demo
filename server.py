from flask import Flask, render_template

# instance of the Flask class
app = Flask(__name__)


@app.route("/")
def root():
    return render_template("root.html")







if __name__ == "__main__":
    # runs app, with named options, run is a method
    # takes at least 2 arguments, we have named arguments bc don't know what order they're in so we specify
    # debug=True -> turns on debug mode in terminal, don't necessarily have to have on when we deploy (high production since server will be on at all times), turn off when deploy on a web server
    # host='ip address'
    app.run(debug=True, host="0.0.0.0")