

https://github.com/user-attachments/assets/0a43e821-f6ec-4bb1-90e6-0b73b21fe353







## Descripción del Proyecto
Esta aplicación debe cumplir con los siguientes objetivos:
- Construir una aplicación con React Native y TypeScript.
- Integrar al menos una API externa de tu elección.
- Implementar pantallas clave que incluyan funcionalidades solicitadas.
- Aplicar un sistemad de manejo de estados como Redux, Zustand o React Context.
- Aplicar buenas prácticas de desarrollo, optimización de rendimiento, y patrones de arquitectura.

---

## Requisitos

### Tecnologías
- **React Native**: Usa el CLI para iniciar la aplicación.
- **TypeScript**: Es obligatorio para tipar tu código.

### Funcionalidades Requeridas
1. **Pantalla de Inicio**:
   - Breve descripción del propósito de la app.
   - Navegación hacia las demás pantallas.

2. **Pantalla con Datos Dinámicos**:
   - Muestra datos obtenidos desde una API externa de tu elección.
   - Implementa paginación y/o "lazy loading".
   - Cachea los datos para evitar solicitudes repetidas innecesarias.

3. **Pantalla de Detalles**:
   - Muestra información detallada de un elemento seleccionado desde la pantalla anterior.

4. **Pantalla de Configuración**:
   - Permite al usuario modificar preferencias que se guarden en el almacenamiento local del dispositivo (e.g., AsyncStorage).

### Parámetros de UX/UI
- Diseño simple y claro con buena jerarquía visual.
- Usa colores y tipografías que sigan un tema consistente.
- Puedes ayudarte de librerias de componentes y estilos.
- Botones y controles que sean intuitivos y accesibles.

### Requisitos Técnicos
- Usa **React Navigation** para la navegación.
- Maneja los estados globales/locales eficientemente haciendo uso de una store.
- Evita renders innecesarios implementando técnicas de optimización y componentes memorizados.
- Es importante tener una estructura de directorios y archivos bien organizada.
- Usa patrones de arquitectura limpia, separando la lógica de negocio de los componentes visuales.

---

## Instrucciones para Empezar

### Prerrequisitos
Antes de empezar, asegúrate de tener instaladas las herramientas necesarias:
1. **Node.js** (versión 16 o superior)
2. **React Native CLI**
3. **Android Studio** o **Xcode** configurados para emular la app en un dispositivo.

### Instalación
1. Clona este repositorio:
   ```bash
   git clone https://github.com/AlphaDev87/RN_Challenge.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd RN_Challenge
   ```

3. Instala las dependencias:
   ```bash
   yarn install
   ```

4. Inicia la aplicación en tu emulador o dispositivo:
   - Para Android:
     ```bash
     npx react-native run-android
     ```
   - Para iOS:
     ```bash
     npx react-native run-ios
     ```

---

## Criterios de Evaluación
Tu proyecto será evaluado en función de los siguientes puntos:

### Funcionalidad
- Cumple con los requisitos solicitados.
- Las pantallas funcionan correctamente y sin errores.

### Código
- Código limpio, bien organizado y comentado donde sea necesario.
- Uso correcto de TypeScript para tipado de datos.
- Estructura tu proyecto de forma clara y modular.

### Rendimiento
- Manejo eficiente del estado y renderizado.
- Optimización de la carga y uso de recursos.

### UI/UX
- Interfaz clara y fácil de usar.
- Implementación de temas y consistencia visual.

---

## Notas Finales
- Puedes usar cualquier API externa que prefieras.
- Incluye en tu entrega una breve descripción de las decisiones que tomaste y por qué.
- Si por alguna razon no logras correr este proyecto puede crear uno propio y compartir el repositorio.
- Este desafío no evalúa solo el resultado final, sino también el enfoque y la calidad del código.
- No olvides agregar tu toque personal y destacar tus fortalezas.

## Cuestionario
1. ¿Qué criterios consideraste para elegir la API externa utilizada?
Quería una API que tuviera imágenes y GIfs

2. ¿Qué estrategia implementaste para optimizar el rendimiento de la aplicación?

Utilicé FlatList en lugar de ScrollView para manejar grandes volúmenes de datos ya que FlatList renderiza solo los elementos visibles en pantalla y carga dinámicamente los demás a medida que el usuario se desplaza.

3. ¿Cómo estructuraste tu proyecto y por qué elegiste ese enfoque?
Estructuré el proyecto siguiendo una arquitectura modular y escalable, asegurando que cada parte de la aplicación sea fácil de mantener y extender, separar responsabilidades permite que cada módulo sea fácil de modificar sin afectar otras partes del código

4. ¿Qué desafíos enfrentaste al implementar las funcionalidades solicitadas?
Sólo tuve problemas con versiones nuevas de librerías y errores que vienen en ellas como me ocurrió con "react-native-snap-carousel".

5. ¿Qué cambios realizarías si tuvieras más tiempo para trabajar en este proyecto?
Optimizaría mucho más la app utilizando React.memo y useCallback para evitar renders innecesarios en componentes que no han cambiado y también implementaría "lazy loading" y herramientas como "react-native-fast-image" para manejar imágenes de manera más eficiente. Además realizaría el manejo de códigos de estado HTTP para responder adecuadamente en cada caso.

6. ¿Cómo manejaste los errores en las llamadas a la API?
Uso de try...catch y mensajes de error con Toast para notificar al usuario.

---

## Importante!
- El challenge tiene un tiempo máximo de **48 horas**.
- Una vez terminado, sube tu trabajo a una **rama aparte con tu nombre y apellido**.
- En una carpeta dentro del proyecto, incluye un **video muy corto y liviano** mostrando cómo ejecutas la app y sus funcionalidades.


¡Buena suerte y que disfrutes el desarrollo! 🚀
