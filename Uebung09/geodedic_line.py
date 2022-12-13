import uvicorn
from fastapi import FastAPI, Response
import pyproj

app = FastAPI()


g = pyproj.Geod(ellps="WGS84")


@app.get("/gedetic/&")
async def geodetic(startlong: float, startlat: float, endlong: float, endlat: float, points: int):


    lonlats = g.npts(startlong, startlat, endlong, endlat, points)

    lonlats = [[startlong, startlat]] + [list(i) for i in lonlats] + [[endlong, endlat]]

    geojson = f"""{{
        "type": "Feature",
        "geometry": {{
            "type": "LineString"
            "coordinates": {lonlats}
        }},
        "properties": {{
            "info": "geodätische Linie"
        }}
    }}"""

    return Response(content=geojson)


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8002, root_path="/geodetic")
