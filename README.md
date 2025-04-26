# 🌿 Organika Store

Organika Store es una aplicación web desarrollada con **React** y **Flask**, diseñada para ofrecer una experiencia sencilla y eficiente al gestionar una tienda de productos orgánicos. La plataforma permite visualizar un catálogo de productos, gestionar un carrito de compras, aplicar cupones de descuento y administrar productos y promociones de manera fácil.

## 🚀 Funcionalidades

- 🛒 **Catálogo de Productos**: Visualización de productos orgánicos disponibles.
- ➕ **Agregar Productos**: Sistema para añadir nuevos productos al catálogo.
- 🎟️ **Gestión de Cupones**: Crear y aplicar cupones de descuento.
- 🛍️ **Carrito de Compras**: Añadir productos al carrito y calcular el total con descuentos.
- 🔗 **API RESTful**: Comunicación entre frontend y backend mediante una API desarrollada en Flask.
- 💾 **Base de Datos MongoDB**: Almacenamiento de productos y cupones.

## ⚙️ Tecnologías Utilizadas

- **Frontend**: React
- **Backend**: Flask (Python 3.11.9)
- **Base de Datos**: MongoDB
- **Node.js**: v22.13.1
- **API**: RESTful

## 🛠️ Instalación y Ejecución en Desarrollo Local

Sigue estos pasos para correr el proyecto en tu máquina local.

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/ChrisUBS/FSDI-110-online-store
cd FSDI-110-online-store
```

### 2️⃣ Configurar y ejecutar el Backend (Flask)
```bash
cd backend
python -m venv venv
# Activar entorno virtual
# En Windows:
venv\Scripts\activate
# En macOS/Linux:
source venv/bin/activate

pip install -r requirements.txt
python server.py
```

### 3️⃣ Configurar y ejecutar el Frontend (React)
En una nueva terminal, desde la carpeta raíz:

```bash
cd frontend
npm install
npm start
```

## 📂 Estructura del Proyecto
```bash
organika-store/
├── backend/
│   ├── server.py
│   ├── requirements.txt
│   └── ...
├── frontend/
│   ├── src/
│   ├── package.json
│   └── ...
└── README.md
```

## 🌐 Conexión Frontend - Backend
La comunicación entre React y Flask se realiza mediante peticiones HTTP a la API RESTful. Asegúrate de que tanto el frontend como el backend estén corriendo para un funcionamiento correcto.

Nota: Configura las variables de entorno (.env) en el frontend para definir la URL de la API si es necesario.

## 📅 Futuras Mejoras (Roadmap)
- Autenticación de usuarios.
- Sistema de pagos integrado.
- Panel de administración más avanzado.
- Implementación de notificaciones.
- Despliegue en producción con Docker o servicios en la nube.

## 📜 Licencia
Este proyecto está bajo la Licencia MIT.

## 🤝 Contribuciones
¡Las contribuciones son bienvenidas!
Si deseas mejorar Organika Store, por favor realiza un fork del proyecto, crea una rama y envía tu pull request.