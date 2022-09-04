/// cuadro izquierda 1
const geometryc1 = new THREE.BoxGeometry(1, 40, 70);
const materialc1 = new THREE.MeshPhongMaterial({ map: txc1 });
const cubec1 = new THREE.Mesh(geometryc1, materialc1);
scene.add(cubec1);
cubec1.position.y = 42;
cubec1.position.z = 170;
cubec1.position.x = -248;
cubec1.rotation.y = 0;
cubec1.castShadow = true;

//// marco izquierdo 1
loader2.load('fbx/frame.fbx', function (object) {
    object.traverse(function (child) {
        if (child.isMesh) {

            child.material = new THREE.MeshPhongMaterial({ color: 0x6F3615 });

            child.castShadow = true;
         
            console.log("cuadro");
        }

    });

    object.scale.x = 3.8;
    object.scale.y = 1.38;
    object.scale.z = 1;


    object.rotation.y = 1.58;

    object.position.y = 20;
    object.position.z = 170;
    object.position.x = -246;
    scene.add(object)
});

//planta izquierda 1
loader2.load('fbx/planta.fbx', function (object2) {
    object2.traverse(function (child) {
        if (child.isMesh) {
          
            child.castShadow = true;

            console.log("planta");
        }

    });

    object2.scale.x = 0.3;
    object2.scale.y = 0.3;
    object2.scale.z = 0.3;

    object2.rotation.y = 3.5;


    object2.position.y = -63;
    object2.position.z = 75;
    object2.position.x = -220;
    scene.add(object2)
});

//planta izquierda 2
loader2.load('fbx/planta.fbx', function (object3) {
    object3.traverse(function (child) {
        if (child.isMesh) {
        
            child.castShadow = true;


            console.log("planta");
        }

    });

    object3.scale.x = 0.3;
    object3.scale.y = 0.3;
    object3.scale.z = 0.3;

    object3.rotation.y = 3.5;


    object3.position.y = -63;
    object3.position.z = 270;
    object3.position.x = -220;
    scene.add(object3)
});

//Estatua de las aves
loader2.load('fbx/birds_statue.fbx', function (object4) {
    object4.traverse(function (child2) {
        if (child2.isMesh) {

            child2.castShadow = true;


            child2.castShadow = true;
            child2.material = new THREE.MeshPhongMaterial({ color: 0xA6A2A0 });
            child2.material.bumpMap = THREE.ImageUtils.loadTexture('bumps/txbump.jpg');
            child2.material.bumpScale = 0.08
            console.log("bird");

        }

    });

    object4.scale.x = 115;
    object4.scale.y = 115;
    object4.scale.z = 115;

    object4.rotation.x = 4.70;


    object4.position.y = -25;
    object4.position.z = 60;
    object4.position.x = -70;
    scene.add(object4)
});

//silla izquierda 1

loader2.load('fbx/stone_bench.fbx', function (object7) {
    object7.traverse(function (child4) {
        if (child4.isMesh) {


            child4.castShadow = true;
            child4.material = new THREE.MeshPhongMaterial({ color: 0x898989 });
            child4.material.bumpMap = THREE.ImageUtils.loadTexture('bumps/txbump.jpg');
            child4.material.bumpScale = 0.05
            console.log("silla");

        }

    });

    object7.scale.x = 0.7;
    object7.scale.y = 0.8;
    object7.scale.z = 1;

    object7.rotation.x = -1.59;

    object7.position.y = -25;
    object7.position.z = 55;
    object7.position.x = -145;
    scene.add(object7)
});

//silla izquierda 2

loader2.load('fbx/stone_bench.fbx', function (object7) {
    object7.traverse(function (child4) {
        if (child4.isMesh) {


            child4.castShadow = true;

            child4.material = new THREE.MeshPhongMaterial({ color: 0x898989 });
            child4.material.bumpMap = THREE.ImageUtils.loadTexture('bumps/txbump.jpg');
            child4.material.bumpScale = 0.05
            console.log("silla");

        }

    });

    object7.scale.x = 0.7;
    object7.scale.y = 0.8;
    object7.scale.z = 1;

    object7.rotation.x = -1.59;

    object7.position.y = -25;
    object7.position.z = 285;
    object7.position.x = -145;
    scene.add(object7)
});

//escultura izquierda 1

loader2.load('fbx/sculpture.fbx', function (object8) {
    object8.traverse(function (child4) {
        if (child4.isMesh) {

            child4.castShadow = true;

            child4.material = new THREE.MeshStandardMaterial({
                color: 0xDE3232
               
            });

            console.log("escultura");

        }

    });

    object8.scale.x = 0.15;
    object8.scale.y = 0.15;
    object8.scale.z = 0.18;

    object8.rotation.x = -1.59;

    object8.position.y = 18;
    object8.position.z = 285;
    object8.position.x = -70;
    scene.add(object8)
});