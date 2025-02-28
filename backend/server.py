# Libraries
from flask import Flask, render_template, request
from http import HTTPStatus
import json
from config import db
from flask_cors import CORS

app = Flask(__name__)
CORS(app) # Warning: this disables CORS policy

##############################################
################ ENDPOINTS ################
##############################################

# Home page
@app.get("/")
def home():
    return "<h1>Hello from flask, this is the home page</h1>", HTTPStatus.OK

# About page
@app.get("/about")
def about():
    return "<h1>This is the about page</h1>", HTTPStatus.OK

# About me page
@app.get("/about-me")
def about_me():
    # return "<h1>This is the about me page</h1>", HTTPStatus.OK
    user_name = "Chris"
    return render_template("about-me.html", name = user_name)

##############################################
################ CATALOG ################
##############################################

# Fix the id from MongoDB
def fix_id(obj):
    obj["_id"] = str(obj["_id"])
    return obj

# GET
@app.get("/api/catalog")
def get_products():
    products_db = []
    cursor = db.catalog.find({})
    for product in cursor:
        products_db.append(fix_id(product))
    return json.dumps(products_db), HTTPStatus.OK

# POST
@app.post("/api/catalog")
def save_product():
    product = request.get_json()
    db.catalog.insert_one(product)
    return "Product saved", 201

##############################################
################ COUPON CODES ################
##############################################

# GET
@app.get("/api/coupons")
def get_coupons():
    coupons_db = []
    cursor = db.coupons.find({})
    for coupon in cursor:
        coupons_db.append(fix_id(coupon))
    return json.dumps(coupons_db), HTTPStatus.OK

# POST
@app.post("/api/coupons")
def save_coupon():
    coupon = request.get_json()
    db.coupons.insert_one(coupon)
    return "Coupon saved", 201

# Run the server
app.run(debug = True)
