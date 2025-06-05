Crear un proyecto en Vue.js, separando la interfaz en componentes. La aplicación debe tener una lista de acciones similar a la interfaz en la imagen adjunta. Al realizar un click en un instrumento de la lista, se debe actualizar la información de los diferentes componentes como: resumen, cabecera y gráfico.


Requerimientos

1.	Componentización:

a.	Dividir la interfaz en los siguientes componentes:
i.	SearchBarComponent: Barra de búsqueda de instrumentos.
ii.	HeaderComponent: Muestra el nombre del índice (IPSA) y el valor actual con sus variaciones.
iii.	ChartComponent: Gráfico que muestra la evolución del índice seleccionado en diferentes periodos (1M, 3M, 6M, 1A).
iv.	TabComponent: Permite cambiar entre diferentes índices (IPSA, IGPA, NASDAQ, etc.).
v.	SummaryComponent: Muestra el detalle de la cotización y otros datos relevantes.
vi.	InstrumentListComponent: Lista de instrumentos (acciones) con su información clave.
vii.	InstrumentItemComponent: Cada fila de la lista de instrumentos, la cual debe ser interactiva.

2.	Manejo de Estado Global:

a.	Implementar un estado global utilizando Pinia para gestionar el instrumento seleccionado y los datos generales de la aplicación.

3.	Interacción:

a.	Al seleccionar un instrumento de la lista, actualizar los datos en el estado global, lo que debe reflejarse en los componentes HeaderComponent, SummaryComponent y ChartComponent.

4.	Testing:

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


Datos para servicios (JSON)

Utiliza los servicios que se encuentran en el siguiente zip adjunto.

Criterios de Evaluación

•	Separación adecuada en componentes según lo especificado.
•	Correcta implementación y manejo del estado global.
•	Funcionalidad de interacción y actualización de componentes al seleccionar un instrumento.
•	Cobertura de pruebas de unidad y de integración que verifiquen el comportamiento esperado