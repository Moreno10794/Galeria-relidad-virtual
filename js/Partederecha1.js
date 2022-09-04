/// cuadro derecho 1
const geometryc2 = new THREE.BoxGeometry(1, 40, 70);
const materialc2 = new THREE.MeshPhongMaterial({ map: txc2 });
const cubec2 = new THREE.Mesh(geometryc2, materialc2);
scene.add(cubec2);
cubec2.position.y = 42;
cubec2.position.z = 170;
cubec2.position.x = 248;
cubec2.rotation.y = 0;
cubec2.castShadow = true;

/// marco derecho 1
loader2.load('fbx/frame.fbx', function (object9) {
    object9.traverse(function (child) {
        if (child.isMesh) {


            child.material = new THREE.MeshPhongMaterial({ color: 0x6F3615 });
            child.castShadow = true;
            console.log("cuadro2");
        }

    });

    object9.scale.x = 3.8;
    object9.scale.y = 1.38;
    object9.scale.z = 1;

    object9.rotation.y = -1.58;

    object9.position.y = 21;
    object9.position.z = 170;
    object9.position.x = 246;
    scene.add(object9)
});


//planta derecho 1
loader2.load('fbx/planta.fbx', function (object10) {
    object10.traverse(function (child) {
        if (child.isMesh) {



            child.castShadow = true;
            console.log("planta2");
        }

    });

    object10.scale.x = 0.3;
    object10.scale.y = 0.3;
    object10.scale.z = 0.3;

    object10.rotation.y = 3.5;

    object10.position.y = -63;
    object10.position.z = 75;
    object10.position.x = 220;
    scene.add(object10)
});

//planta izquierda 2
loader2.load('fbx/planta.fbx', function (object11) {
    object11.traverse(function (child) {
        if (child.isMesh) {



            child.castShadow = true;
            console.log("planta2");
        }

    });

    object11.scale.x = 0.3;
    object11.scale.y = 0.3;
    object11.scale.z = 0.3;

    object11.rotation.y = 3.5;

    object11.position.y = -63;
    object11.position.z = 270;
    object11.position.x = 220;
    scene.add(object11)
});

//Estatua de las aves 2
loader2.load('fbx/birds_statue.fbx', function (object12) {
    object12.traverse(function (child2) {
        if (child2.isMesh) {

            child2.castShadow = true;


            child2.castShadow = true;
            child2.material = new THREE.MeshPhongMaterial({ color: 0xA6A2A0 });
            child2.material.bumpMap = THREE.ImageUtils.loadTexture('bumps/txbump.jpg');
            child2.material.bumpScale = 0.08
            console.log("bird2");

        }

    });

    object12.scale.x = 115;
    object12.scale.y = 115;
    object12.scale.z = 115;

    object12.rotation.x = 4.70;

    object12.position.y = -25;
    object12.position.z = 60;
    object12.position.x = 70;
    scene.add(object12)
});


//silla derecha 1

loader2.load('fbx/stone_bench.fbx', function (object13) {
    object13.traverse(function (child4) {
        if (child4.isMesh) {


            child4.castShadow = true;

            child4.material = new THREE.MeshPhongMaterial({ color: 0x898989 });
            child4.material.bumpMap = THREE.ImageUtils.loadTexture('bumps/txbump.jpg');
            child4.material.bumpScale = 0.05
            console.log("silla2");

        }

    });

    object13.scale.x = 0.7;
    object13.scale.y = 0.8;
    object13.scale.z = 1;

    object13.rotation.x = -1.59;

    object13.position.y = -25;
    object13.position.z = 55;
    object13.position.x = 145;
    scene.add(object13)
});

//silla derecha 2

loader2.load('fbx/stone_bench.fbx', function (object14) {
    object14.traverse(function (child4) {
        if (child4.isMesh) {


            child4.castShadow = true;

            child4.material = new THREE.MeshPhongMaterial({ color: 0x898989 });
            child4.material.bumpMap = THREE.ImageUtils.loadTexture('bumps/txbump.jpg');
            child4.material.bumpScale = 0.05
            console.log("silla2");

        }

    });

    object14.scale.x = 0.7;
    object14.scale.y = 0.8;
    object14.scale.z = 1;

    object14.rotation.x = -1.59;

    object14.position.y = -25;
    object14.position.z = 285;
    object14.position.x = 145;
    scene.add(object14)
});

//escultura derecha 2

loader2.load('fbx/sculpture.fbx', function (object15) {
    object15.traverse(function (child4) {
        if (child4.isMesh) {

            child4.castShadow = true;

            child4.material = new THREE.MeshStandardMaterial({
                color: 0x1D33F0

            });
            console.log("escultura2");

        }

    });

    object15.scale.x = 0.15;
    object15.scale.y = 0.15;
    object15.scale.z = 0.18;

    object15.rotation.x = -1.59;

    object15.position.y = 18;
    object15.position.z = 285;
    object15.position.x = 70;
    scene.add(object15)
});