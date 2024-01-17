// Función para validar el inicio de sesión
function validarInicioSesion() {
  // Obtener los valores del formulario
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Verificar si los campos están completos
  if (username === "" || password === "") {
      alert("Por favor, completa todos los campos.");
      return false; // Evita que se envíe el formulario
  }

  // Aquí puedes agregar lógica adicional de validación si es necesario

  // Redirigir al usuario a la página deseada (por ejemplo, la página "toma.html")
  window.location.href = "toma.html";

  // No es necesario enviar el formulario ya que hemos redirigido al usuario
  return false;
}

function redirectToIndex() {
  // Redirige a la página principal (index.html)
  window.location.href = "index.html";
  
  // Función para realizar el login y guardar el token en el local storage
function loginUser() {
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;
  
    if (email && password) {
      // Aquí deberías hacer la autenticación, por ahora, generaremos un token fake
      const fakeToken = "fakeToken123";
      localStorage.setItem("token", fakeToken);
  
      // Redirigir a la pantalla principal después del login
      loadMainScreen();
    } else {
      alert("Por favor, completa todos los campos.");
    }
  }
  
  // Llama a esta función al hacer clic en el botón de login
  document.getElementById("loginButton").addEventListener("click", loginUser);
  
  // Función para cargar los posts desde la base de datos y mostrar en la pantalla principal
function loadPostsFromDatabase() {
    // Aquí deberías hacer la solicitud a tu base de datos para obtener los posts
    // Por ahora, usaremos una lista de posts como ejemplo
    const posts = [
      // ... tus posts ...
    ];
    loadPosts(posts);
  }
  
  // Llama a esta función al cargar la pantalla principal
  function loadMainScreen() {
    loadPostsFromDatabase();
  
    // Agrega los event listeners para los filtros y búsqueda
    document.getElementById("searchButton").addEventListener("click", searchPosts);
    document.getElementById("filterRelevant").addEventListener("click", filterByRelevant);
    document.getElementById("filterLatest").addEventListener("click", filterByLatest);
    document.getElementById("filterTop").addEventListener("click", filterByTop);
  }
  
  // Llama a esta función para cargar los posts inicialmente
  loadMainScreen();
  
  // Función para cargar y mostrar el detalle de un post
function viewPostDetail(postId) {
    // Aquí deberías redirigir a la vista de detalle del post, pasando el postId
    // Por ahora, mostraremos un mensaje en la consola
    console.log(`Viewing details for post ${postId}`);
  }
  
  // Agrega un event listener para cada post generado en loadPosts
  function loadPosts(postsArray) {
    // ... (tu código existente) ...
    postElement.innerHTML = `
      <!-- Otras propiedades del post -->
      <button onclick="viewPostDetail(${post.id})">View Details</button>
    `;
    // ... (tu código existente) ...
  }
  
  // Función para crear un nuevo post
function createPost() {
    const title = document.getElementById("postTitle").value;
    const content = document.getElementById("postContent").value;
  
    if (title && content) {
      // Aquí deberías enviar el nuevo post a tu base de datos
      // Por ahora, mostraremos un mensaje en la consola
      console.log("Nuevo post creado:", { title, content });
  
      // Limpiar el formulario después de crear el post
      document.getElementById("postTitle").value = "";
      document.getElementById("postContent").value = "";
    } else {
      alert("Por favor, completa todos los campos del formulario.");
    }
  }
  
  // Llama a esta función al hacer clic en el botón de crear post
  document.getElementById("createPostButton").addEventListener("click", createPost);