const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var controles = new THREE.DeviceOrientationControls(camera)

camera.position.z = 300;
camera.position.y = 20;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.BasicShadowMap;

var effect = new THREE.StereoEffect(renderer);
effect.setSize(window.innerWidth, window.innerHeight);

window.addEventListener('resize', onWindowResize);

//loader 1
var loader = new THREE.TextureLoader();

//Loader 2
const loader2 = new THREE.FBXLoader();

//texturas terreno
var txpiso = loader.load('texturas/txpiso.jpg');
var txtecho = loader.load('texturas/txtecho.jpg');
var txbp = loader.load('texturas/txpared.jpg');

//texturas cuadros
var txc1 = loader.load('cuadros/cuadro1.jpg');
var txc2 = loader.load('cuadros/cuadro2.jpg');
var txc3 = loader.load('cuadros/cuadro3.png');
var txc4 = loader.load('cuadros/cuadro4.jpg');

//texturas descripciones
var desc1 = loader.load('descripcion/descripcion1.png');
var desc2 = loader.load('descripcion/descripcion2.png');
var desc3 = loader.load('descripcion/descripcion3.png');
var desc4 = loader.load('descripcion/descripcion4.png');

//controles orbit
var controls = new THREE.OrbitControls(camera);
controls.maxDistance = 300;

//musica de fondo
var sound = new Howl({
 src: ['sonidos/musifin.mp3'],
 loop: true,
 volume: 0.1,
});

sound.play();

///prueba sonido tele
var sound1 = new Howl({
  src: ['sonidos/tele2.mp3'],
  loop: false,
  volume: 0.8,
});



/// descripcion izquierda 1
const geometryc5 = new THREE.PlaneGeometry(50, 30, 1);
const materialc5 = new THREE.MeshPhongMaterial({ map: desc1 });
const cubec5 = new THREE.Mesh(geometryc5, materialc5);
scene.add(cubec5);

cubec5.rotation.x = 0;
cubec5.rotation.z = 0;
cubec5.rotation.y = 1.56;

cubec5.position.y = 0;
cubec5.position.z = 170;
cubec5.position.x = -246;

cubec5.material.transparent = true;
cubec5.material.opacity = 0;



/// descripcion derecha 1
const geometryc6 = new THREE.PlaneGeometry(50, 30, 1);
const materialc6 = new THREE.MeshPhongMaterial({ map: desc2 });
const cubec6 = new THREE.Mesh(geometryc6, materialc6);
scene.add(cubec6);

cubec6.rotation.x = 0;
cubec6.rotation.z = 0;
cubec6.rotation.y = -1.56;

cubec6.position.y = 0;
cubec6.position.z = 170;
cubec6.position.x = 246;

cubec6.material.transparent = true;
cubec6.material.opacity = 0;

/// descripcion derecha 2
const geometryc7 = new THREE.PlaneGeometry(50, 25, 1);
const materialc7 = new THREE.MeshPhongMaterial({ map: desc3 });
const cubec7 = new THREE.Mesh(geometryc7, materialc7);
scene.add(cubec7);

cubec7.rotation.x = 0;
cubec7.rotation.z = 0;
cubec7.rotation.y = -1.56;

cubec7.position.y = -5;
cubec7.position.z = -170;
cubec7.position.x = 246;

cubec7.material.transparent = true;
cubec7.material.opacity = 0;

/// descripcion izquierda 2
const geometryc8 = new THREE.PlaneGeometry(50, 25, 1);
const materialc8 = new THREE.MeshPhongMaterial({ map: desc4 });
const cubec8 = new THREE.Mesh(geometryc8, materialc8);
scene.add(cubec8);

cubec8.rotation.x = 0;
cubec8.rotation.z = 0;
cubec8.rotation.y = 1.56;

cubec8.position.y = -5;
cubec8.position.z = -170;
cubec8.position.x = -246;

cubec8.material.transparent = true;
cubec8.material.opacity = 0;

//cilindros parte delantera

///cilindro transp derecho 1

const geometryct1 = new THREE.CylinderGeometry(10, 10, 20, 32);
const materialct1 = new THREE.MeshLambertMaterial({ color: 0xFF0000 });
const cylinder = new THREE.Mesh(geometryct1, materialct1);
scene.add(cylinder);
cylinder.position.x = 100;
cylinder.position.z = 170;
cylinder.position.y = -15;
cylinder.name = "t1";

cylinder.material.transparent = true;
cylinder.material.opacity = 0.2;

///cilindro transp derecho 2

const geometryct2 = new THREE.CylinderGeometry(10, 10, 20, 32);
const materialct2 = new THREE.MeshLambertMaterial({ color: 0xFF0000 });
const cylinder2 = new THREE.Mesh(geometryct1, materialct1);
scene.add(cylinder2);
cylinder2.position.x = 190;
cylinder2.position.z = 170;
cylinder2.position.y = -15;
cylinder2.name = "t2";

cylinder2.material.transparent = true;
cylinder2.material.opacity = 0.2;


///cilindro transp izquierdo 1

const geometryct3 = new THREE.CylinderGeometry(10, 10, 20, 32);
const materialct3 = new THREE.MeshLambertMaterial({ color: 0xFF0000 });
const cylinder3 = new THREE.Mesh(geometryct3, materialct3);
scene.add(cylinder3);
cylinder3.position.x = -100;
cylinder3.position.z = 170;
cylinder3.position.y = -15;
cylinder3.name = "t3";

cylinder3.material.transparent = true;
cylinder3.material.opacity = 0.2;

///cilindro transp izquierda 2

const geometryct4 = new THREE.CylinderGeometry(10, 10, 20, 32);
const materialct4 = new THREE.MeshLambertMaterial({ color: 0xFF0000 });
const cylinder4 = new THREE.Mesh(geometryct4, materialct4);
scene.add(cylinder4);
cylinder4.position.x = -190;
cylinder4.position.z = 170;
cylinder4.position.y = -15;
cylinder4.name = "t4";

cylinder4.material.transparent = true;
cylinder4.material.opacity = 0.2;

//cilindro pasillo

const geometryct5 = new THREE.CylinderGeometry(10, 10, 20, 32);
const materialct5 = new THREE.MeshLambertMaterial({ color: 0xFF0000 });
const cylinder5 = new THREE.Mesh(geometryct5, materialct5);
scene.add(cylinder5);
cylinder5.position.x = 0;
cylinder5.position.z = 0;
cylinder5.position.y = -15;
cylinder5.name = "t5";

cylinder5.material.transparent = true;
cylinder5.material.opacity = 0.2;

//cilindros parte trasera

///cilindro transp derecho 3

const geometryct6 = new THREE.CylinderGeometry(10, 10, 20, 32);
const materialct6 = new THREE.MeshLambertMaterial({ color: 0xFF0000 });
const cylinder6 = new THREE.Mesh(geometryct6, materialct6);
scene.add(cylinder6);
cylinder6.position.x = 100;
cylinder6.position.z = -170;
cylinder6.position.y = -15;
cylinder6.name = "t6";

cylinder6.material.transparent = true;
cylinder6.material.opacity = 0.2;

///cilindro transp derecho 4

const geometryct7 = new THREE.CylinderGeometry(10, 10, 20, 32);
const materialct7 = new THREE.MeshLambertMaterial({ color: 0xFF0000 });
const cylinder7 = new THREE.Mesh(geometryct7, materialct7);
scene.add(cylinder7);
cylinder7.position.x = 190;
cylinder7.position.z = -170;
cylinder7.position.y = -15;
cylinder7.name = "t7";

cylinder7.material.transparent = true;
cylinder7.material.opacity = 0.2;


///cilindro transp izquierdo 3

const geometryct8 = new THREE.CylinderGeometry(10, 10, 20, 32);
const materialct8 = new THREE.MeshLambertMaterial({ color: 0xFF0000 });
const cylinder8 = new THREE.Mesh(geometryct8, materialct8);
scene.add(cylinder8);
cylinder8.position.x = -100;
cylinder8.position.z = -170;
cylinder8.position.y = -15;
cylinder8.name = "t8";

cylinder8.material.transparent = true;
cylinder8.material.opacity = 0.2;

///cilindro transp derecho 4

const geometryct9 = new THREE.CylinderGeometry(10, 10, 20, 32);
const materialct9 = new THREE.MeshLambertMaterial({ color: 0xFF0000 });
const cylinder9 = new THREE.Mesh(geometryct9, materialct9);
scene.add(cylinder9);
cylinder9.position.x = -190;
cylinder9.position.z = -170;
cylinder9.position.y = -15;
cylinder9.name = "t9";

cylinder9.material.transparent = true;
cylinder9.material.opacity = 0.2;




const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2(0, 0);
const pointer = new THREE.Vector2();
var t = 0;
var c = 0;
var v = 0;



function onWindowResize() {

  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  effect.setSize(window.innerWidth, window.innerHeight);

}





const animate = function () {
  requestAnimationFrame(animate);
  raycaster.setFromCamera(pointer, camera);
  const intersects = raycaster.intersectObjects(scene.children, true);

  // orbit  
   controls.update();


  if (intersects.length > 0) {

    if (intersects[0].object.name == "t1") {
      console.log("c1");
      c = 1;

    }


    if (intersects[0].object.name == "t2") {
      console.log("c2");
      c = 2;

    }

    if (intersects[0].object.name == "t3") {
      console.log("c3");
      c = 3;

    }
    if (intersects[0].object.name == "t4") {
      console.log("c4");
      c = 4;

    }

    if (intersects[0].object.name == "t5") {
      console.log("c5");
      c = 5;

    }

    if (intersects[0].object.name == "t6") {
      console.log("c6");
      c = 6;

    }

    if (intersects[0].object.name == "t7") {
      console.log("c7");
      c = 7;

    }

    if (intersects[0].object.name == "t8") {
      console.log("c8");
      c = 8;

    }

    if (intersects[0].object.name == "t9") {
      console.log("c9");
      c = 9;

    }


  }

  if (c == 1) {
    t += 0.01;
    v += 1;


    cubec6.material.opacity = 0;
    if (t >= 3) {
      
      camera.position.x = cylinder.position.x;
      camera.position.z = cylinder.position.z;
      sound1.play();
      
      t = 0;
      c = 0;
      
    }
 
  }

  


  if (c == 2) {
    t += 0.01;

    if (t >= 3) {
      camera.position.x = cylinder2.position.x;
      camera.position.z = cylinder2.position.z;
      sound1.play();

      t = 0;
      c = 0;
    }

    else {
      cubec6.material.opacity += 0.1;
      
    }
  }


  if (c == 3) {
    t += 0.01;
    cubec5.material.opacity = 0;
    if (t >= 3) {
      camera.position.x = cylinder3.position.x;
      camera.position.z = cylinder3.position.z;
      sound1.play();

      t = 0;
      c = 0;
    }
  }

  if (c == 4) {
    t += 0.01;

    if (t >= 3) {
      camera.position.x = cylinder4.position.x;
      camera.position.z = cylinder4.position.z;
      sound1.play();



      t = 0;
      c = 0;
    }

    else {
      cubec5.material.opacity += 0.1;
    }


  }


  if (c == 5) {
    t += 0.01;

    if (t >= 3) {
      camera.position.x = cylinder5.position.x;
      camera.position.z = cylinder5.position.z;
      sound1.play();

      t = 0;
      c = 0;
    }

  }

  if (c == 6) {
    t += 0.01;
    cubec7.material.opacity = 0;
    if (t >= 3) {
      camera.position.x = cylinder6.position.x;
      camera.position.z = cylinder6.position.z;
      sound1.play();

      t = 0;
      c = 0;
    }

  }

  if (c == 7) {
    t += 0.01;

    if (t >= 3) {
      camera.position.x = cylinder7.position.x;
      camera.position.z = cylinder7.position.z;
      sound1.play();

      t = 0;
      c = 0;
    }


    else {
      cubec7.material.opacity += 0.1;
    }
  }

  if (c == 8) {
    t += 0.01;
    cubec8.material.opacity = 0;
    if (t >= 3) {
      camera.position.x = cylinder8.position.x;
      camera.position.z = cylinder8.position.z;
      sound1.play();

      t = 0;
      c = 0;
    }
  }

  if (c == 9) {
    t += 0.01;

    if (t >= 3) {
      camera.position.x = cylinder9.position.x;
      camera.position.z = cylinder9.position.z;
      sound1.play();

      t = 0;
      c = 0;
    }
    else {
      cubec8.material.opacity += 0.1;
    }
  }



  //document.addEventListener("keydown", myFunction1, false);
  effect.render(scene, camera);
};

//function myFunction1(event) {
 // var KeyCode = event.which;
//  if (KeyCode == 65) {
//    camera.rotation.y += 0.1;
//  }
// if (KeyCode == 68) {
 //   camera.rotation.y -= 0.1;
 // }
//  if (KeyCode == 87) {
 //   camera.rotation.x += 0.1;
//  }
 // if (KeyCode == 83) {
//    camera.rotation.x -= 0.1;
 // }

//}


animate();