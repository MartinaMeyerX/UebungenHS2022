import uvicorn
from fastapi import FastAPI

app = FastAPI()


d = {}
file = open("PLZO_CSV_LV95.csv", encoding = "utf-8")
next(file)
for line in file:
    daten = line.strip().split(";")
    ort = daten[0]
    plz = daten[1]
    zusatz = daten[2]
    zip = daten[3]
    bfs = daten[4]
    kanton = daten[5]
    e = float(daten[6])
    n = float(daten[7])
    spr = daten[8]
    d[zip] = {"Ort": ort, "PLZ": plz, "Zusatzziffer": zusatz, "Gemeinde": zip, "BFS-Nummer": bfs, "Kanton": kanton, "Sprache": spr, "Koordinate Ost": round(e,3), "Koordinate Nord": round(n,3)}

file.close()


@app.get("/gemeinde")
async def gemeinde(gemeinde: str):
    if gemeinde in d:
        return d[gemeinde]

    return {"ERROR: Gemeinde wurde nicht gefunden"}



uvicorn.run(app, host="127.0.0.1", port=8000)

