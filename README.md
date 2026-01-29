# jayeshss.github.io
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Jayesh | 3D Artist</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  font-family: Arial, Helvetica, sans-serif;
  background:#0e0e0e;
  color:#ffffff;
}

/* HERO SECTION */
.hero{
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  text-align:center;
}

.hero h1{
  font-size:56px;
  font-weight:700;
}

.hero p{
  margin-top:12px;
  font-size:18px;
  opacity:.7;
}

/* PROJECT GRID */
.projects{
  padding:80px 8%;
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(280px,1fr));
  gap:30px;
}

.project{
  height:220px;
  background:#1a1a1a;
  border-radius:14px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:18px;
  opacity:.6;
  transition:all .3s ease;
}

.project:hover{
  transform:translateY(-8px);
  opacity:1;
}
</style>
</head>

<body>

<!-- HERO -->
<section class="hero">
  <h1>Jayesh</h1>
  <p>3D Artist & Graphic Designer</p>
</section>

<!-- PROJECTS -->
<section class="projects">
  <div class="project">Project 01</div>
  <div class="project">Project 02</div>
  <div class="project">Project 03</div>
  <div class="project">Project 04</div>
</section>

</body>
</html>
