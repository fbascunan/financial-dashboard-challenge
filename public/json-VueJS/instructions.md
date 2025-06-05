
Vue.js 3 Financial Dashboard SPA - Project Instructions
Create a Vue.js 3 project using composition API, separating the interface into components. The application should have a list of actions similar to the interface in the attached image. When clicking on an instrument from the list, the information in different components should be updated including: summary, header, and chart.
Requirements
1. Componentization
Divide the interface into the following components:

SearchBarComponent: Search bar for instruments
HeaderComponent: Displays the index name (IPSA) and current value with variations
ChartComponent: Chart showing the evolution of the selected index over different periods (1M, 3M, 6M, 1Y)
TabComponent: Allows switching between different indices (IPSA, IGPA, NASDAQ, etc.)
SummaryComponent: Shows quotation details and other relevant data
InstrumentListComponent: List of instruments (stocks) with key information
InstrumentItemComponent: Each row in the instrument list, which must be interactive

2. Global State Management

Implement global state using Pinia to manage the selected instrument and general application data

3. Interaction

When selecting an instrument from the list, update the data in the global state, which should be reflected in the HeaderComponent, SummaryComponent, and ChartComponent

Service Data (JSON)
Use the data found in the following location:


json-VueJS/
  constituyentes/
    constituensList.json
  history/
    history-IPSA.json
    history-ANDINA-B.json
    history-CAP.json
    history-AGUAS-A.json
    history-BCI.json
    history-BSANTANDER.json
  resumen/
    CAP.json
    IPSA.json
    BSANTANDER.json
    ANDINA-B.json
    BCI.json
    AGUAS-A.json


JSON example:
constituensList.json (same structure for other components)
{
  "success": true,
  "code": 200,
  "data": {
    "info": {
      "name": "IPSA",
      "shortName": "IPSA",
      "countryName": "Chile",
      "codeInstrument": "IPSA"
    },
    "constituents": [
      {
        "codeInstrument": "AGUAS-A",
        "name": "AGUAS ANDINAS S.A., SERIE A",
        "shortName": "AGUAS-A",
        "pctDay": 0,
        "pct30D": 0.3653001734253314,
        "pctCY": -4.427266338721014,
        "pct1Y": 1.5152646114801938,
        "lastPrice": 272,
        "datetimeLastPrice": "06-11-2024 12:20:25",
        "volumeMoney": 778464,
        "accumulatedVolumeMoney": 158922209,
        "tend": "same",
        "performanceAbsolute": 0,
        "performanceRelative": 0
      },
      ...
    ]
  }
}

resumen/AGUAS-A.json
{
  "success": true,
  "code": 200,
  "data": {
    "info": {
      "name": "AGUAS ANDINAS S.A., SERIE A",
      "shortName": "AGUAS-A",
      "countryName": "Chile",
      "currencyName": "Peso Chileno",
      "currencySymbol": "$",
      "codeInstrument": "AGUAS-A",
      "marketName": "Bolsa de Santiago",
      "hourOpen": "09:30:00",
      "hourClose": "16:00:00",
      "trading": true,
      "exchangeRate": 1
    },
    "price": {
      "lastPrice": 272,
      "datetimeLastPrice": "06-11-2024 12:51:29",
      "openPrice": 275,
      "closePrice": 272,
      "datetimeClosePrice": "05-11-2024 16:02:02",
      "performanceAbsolute": 0,
      "performanceRelative": 0,
      "bid": 272,
      "bidVolume": 27718,
      "bidDatetime": "2024-11-06 12:48:10",
      "ask": 273.2,
      "askVolume": 11725,
      "askDatetime": "2024-11-06 12:51:32",
      "volumeMoney": 795328,
      "accumulatedVolumeMoney": 195762557,
      "volumeInstrument": 2924,
      "accumulatedVolumeInstrument": 718885,
      "tend": "same",
      "maxDay": 275,
      "minDay": 272,
      "min52W": 253,
      "max52W": 294,
      "pct30D": 0.7407407407407307,
      "pctRelW52": 1.5152646114801938,
      "pctRelCY": -4.427266338721014
    }
  }
}

history/history-AGUAS-A.json (same structure for other components)
{
  "success": true,
  "code": 200,
  "data": {
    "info": {
      "name": "AGUAS ANDINAS S.A., SERIE A",
      "shortName": "AGUAS-A",
      "countryName": "Chile",
      "currencyName": "Peso Chileno",
      "currencySymbol": "$",
      "codeInstrument": "AGUAS-A",
      "hourOpen": "09:30:00",
      "hourClose": "16:00:00"
    },
    "chart": [
      {
        "datetimeLastPrice": "06-11-2023 09:00:00",
        "datetimeLastPriceTs": 1699272000,
        "lastPrice": 267.94,
        "highPrice": 270,
        "lowPrice": 265.26,
        "openPrice": 267.94,
        "closePrice": 267.94,
        "volume": 7348145,
        "volumeMoney": 1962725971,
        "performanceRelative": 0,
        "performanceAbsolute": 0,
        "tend": "same"
      },
      ...
    ]
  }
}

4. (Next Step...) Testing

Evaluation Criteria

Proper component separation as specified
Correct implementation and management of global state
Interaction functionality and component updates when selecting an instrument
Unit and integration test coverage that verifies expected behavior

a.	Pruebas de Unidad para Componentes:

i.	Crear pruebas de unidad para cada componente utilizando Jest o Vue Test Utils.
ii.	Asegurarse de que cada componente:
•	Renderice correctamente los datos del estado.
•	Maneje correctamente los eventos (como seleccionar un instrumento o cambiar de periodo).
•	Responda a cambios en el estado global reflejándose en la interfaz.


b.	Pruebas de Estado Global:

i.	Crear pruebas para el manejo del estado, verificando:
•	La correcta actualización del estado global al seleccionar un nuevo instrumento o cambiar de periodo.
•	Que los cambios en el estado disparen los cambios en los componentes correspondientes.


c.	Pruebas de Integración:

i.	Implementar pruebas de integración para verificar el flujo completo al seleccionar un instrumento:
•	Simular la selección de un instrumento en la lista.
•	Verificar que la cabecera, el resumen y el gráfico se actualicen correctamente en la interfaz.
•	Asegurarse de que los datos correctos se muestren en cada componente después de la actualización.
