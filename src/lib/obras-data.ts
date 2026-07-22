// Lista única de obras (public/obras/).
// Añade o quita líneas aquí y todas las vistas se actualizan.
export const IMAGES = [
    "obras/Farellones.jpg",
    "obras/Flores_Recicladas.jpg",
    "obras/Formigal.jpg",
    "obras/La_Parva_Japan.jpg",
    "obras/La_Reina_De_Babilonia.jpg",
    "obras/Lagos_Auto.jpg",
    "obras/Madrid_Manuel_Becerra.jpg",
    "obras/Madrid_Retiro.jpg",
    "obras/Mendocino_Fungi.jpg",
    "obras/Morocco_Fruits.jpg",
    "obras/Morocco_Jars.jpg",
    "obras/Morocco_Marrakesh.jpg",
    "obras/Morocco_Marrakesh_Inside.jpg",
    "obras/Morocco_Moto.jpg",
    "obras/Morocco_Pray.jpg",
    "obras/Papa_Muir_Woods.jpg",
    "obras/San_Francisco_Marina.jpg",
    "obras/San_Francisco_Marina_dia.jpg",
    "obras/Tenerife_Airport.jpg",
    "obras/Tenerife_Los_Gigantes.jpg",
    "obras/Atacama.JPG",
];

// "obras/La_Reina_De_Babilonia.jpg" -> "La Reina De Babilonia"
export const titleFromSrc = (src: string) =>
    src.split("/").pop()!.replace(/\.[^.]+$/, "").replace(/_/g, " ");
