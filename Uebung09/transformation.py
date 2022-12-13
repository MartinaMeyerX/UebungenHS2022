import uvicorn
from fastapi import FastAPI
from pyproj import Transformer

app = FastAPI()

wgs84 = "epsg:4326"
lv95 = "epsg:2056"

transformer1 = Transformer.from_crs("epsg:4326", "epsg:2056")
transformer2 = Transformer.from_crs("epsg:2056", "epsg:4326")


@app.get("/transform/wgs84tolv95")
async def transform1(lng: float, lat: float):
    r1 = transformer1.transform(lng, lat)
    return {"E": {r1[0]}, "N": {r1[1]}}


@app.get("/transform/lv95towgs84")
async def transform1(e: float, n: float):
    r2 = transformer2.transform(e, n)
    return {"long": {r2[0]}, "lat": {r2[1]}}


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8001, root_path="/transform")

