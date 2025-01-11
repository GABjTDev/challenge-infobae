# Frontend React + Vite

PRUEBA TÉCNICA DESARROLLADOR REACT

Crear un Blog usando un api, la documentación sería: Dummy API Getting Started
El objetivo es crear un webapp con las siguientes funcionalidades:

- Ver los Post, con imagen principal, con tags y el usuario quien publica.
Al dar click en el Post ver los comentarios que tiene, si aplica (puede ser modal o por url)✔️
- Sobre la vista de los Post, tener un listado de los tags disponibles y filtrar la vista acorde.✔️
- Crear una vista protegida por algún método de autenticación (Google SignIn), listar usuarios de la plataforma con foto.✔️
- Persistir datos contra base de datos no relacional.✔️


## Deployar el front

Para deployar el front en local,
Crear el archivo .env.local para las variables de entorno.

```bash
  cd frontend-posts
  npm install
  copy .env.example .env.local
  npm run dev
```

## Deployar el back

Para deployar el back en local.

```bash
  cd backend
  npm install
  npm run start
```

