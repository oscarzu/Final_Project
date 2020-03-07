from flask import Flask, render_template, jsonify, request
import pymongo

app = Flask(__name__,static_folder="./static")

@app.route("/")
def index():
    return render_template("home.html")


@app.route("/sales")
@app.route("/sales/<year>")
def sales(year="2019"):
    # aqui me conecto a mi mongo db y pido todos los datos
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FinalProject"]
    mycol = mydb["BrandFilter"]
    resultado = mycol.find({"Year":year},{"_id":False})
    resultado= [x for i,x in enumerate(resultado)]
    return jsonify (resultado)

@app.route("/salesComplete")
def salesComplete():
    # aqui me conecto a mi mongo db y pido todos los datos
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FinalProject"]
    mycol = mydb["sales"]
    salesC = mycol.find({}, {'_id': False})
    salesC= [x for i,x in enumerate(salesC)]
    return jsonify (salesC)

@app.route("/hybrid")
def hybrid():
    # aqui me conecto a mi mongo db y pido todos los datos
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FinalProject"]
    mycol = mydb["HybridFilter"]
    resultadoHybrid = mycol.find({}, {'_id': False})
    resultadoHybrid= [x for i,x in enumerate(resultadoHybrid)]
    return jsonify (resultadoHybrid)


@app.route("/hybridComplete")
def hybridComplete():
    # aqui me conecto a mi mongo db y pido todos los datos
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = myclient["FinalProject"]
    mycol = mydb["Hybrid"]
    resultadoHybridC = mycol.find({}, {'_id': False})
    resultadoHybridC= [x for i,x in enumerate(resultadoHybridC)]
    return jsonify (resultadoHybridC)

@app.route("/map")
def map():
    return render_template("map.html")

@app.route("/pagsales")
def pagsales():
    return render_template("pagsales.html")

@app.route("/paghybrid")
def paghybrid():
    return render_template("paghybrid.html")


if __name__ == "__main__":
    app.run()