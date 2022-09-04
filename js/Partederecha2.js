/// cuadro derecha 4
const geometryc4 = new THREE.BoxGeometry(1, 50, 40);
const materialc4 = new THREE.MeshPhongMaterial({ map: txc4 });
const cubec4 = new THREE.Mesh(geometryc4, materialc4);
scene.add(cubec4);
cubec4.position.y = 40;
cubec4.position.z = -170;
cubec4.position.x = 248;
cubec4.rotation.y = 0;
cubec4.castShadow = true;

/// marco derecha 4
loader2.load('fbx/frame.fbx', function (object24) {
    object24.traverse(function (child) {
        if (child.isMesh) {


            child.material = new THREE.MeshPhongMaterial({ color: 0x6F3615 });
            child.castShadow = true;
            console.log("cuadro3");
        }

    });

    object24.scale.x = 2.1;
    object24.scale.y = 1.7;
    object24.scale.z = 1;

    object24.rotation.y = -1.58;

    object24.position.y = 14;
    object24.position.z = -170;
    object24.position.x = 246;
    scene.add(object24)
});


//planta derecha 4
loader2.load('fbx/planta.fbx', function (object25) {
    object25.traverse(function (child) {
        if (child.isMesh) {

          
            child.castShadow = true;

            console.log("planta3");
        }

    });

    object25.scale.x = 0.3;
    object25.scale.y = 0.3;
    object25.scale.z = 0.3;

    object25.rotation.y = 3.5;


    object25.position.y = -64;
    object25.position.z = -70;
    object25.position.x = 220;
    scene.add(object25)
});

//planta derecha 4
loader2.load('fbx/planta.fbx', function (object26) {
    object26.traverse(function (child) {
        if (child.isMesh) {

            child.castShadow = true;

            console.log("planta3");
        }

    });

    object26.scale.x = 0.3;
    object26.scale.y = 0.3;
    object26.scale.z = 0.3;

    object26.rotation.y = 3.5;


    object26.position.y = -64;
    object26.position.z = -265;
    object26.position.x = 220;
    scene.add(object26)
});

//Estatua de las aves 4
loader2.load('fbx/birds_statue.fbx', function (object28) {
    object28.traverse(function (child2) {
        if (child2.isMesh) {

            child2.castShadow = true;

            child2.material = new THREE.MeshPhongMaterial({ color: 0xA6A2A0 });
            child2.material.bumpMap = THREE.ImageUtils.loadTexture('bumps/txbump.jpg');
            child2.material.bumpScale = 0.08
            console.log("bird2");

        }

    });

    object28.scale.x = 115;
    object28.scale.y = 115;
    object28.scale.z = 115;

    object28.rotation.x = 4.70;

    object28.position.y = -25;
    object28.position.z = -55;
    object28.position.x = 70;
    scene.add(object28)
});


//silla derecha 4

loader2.load('fbx/stone_bench.fbx', function (object29) {
    object29.traverse(function (child4) {
        if (child4.isMesh) {


            child4.castShadow = true;

            child4.material = new THREE.MeshPhongMaterial({ color: 0x898989 });
            child4.material.bumpMap = THREE.ImageUtils.loadTexture('bumps/txbump.jpg');
            child4.material.bumpScale = 0.05
            console.log("silla2");

        }

    });

    object29.scale.x = 0.7;
    object29.scale.y = 0.8;
    object29.scale.z = 1;

    object29.rotation.x = -1.59;

    object29.position.y = -25;
    object29.position.z = -55;
    object29.position.x = 145;
    scene.add(object29)
});

//silla derecha 4

loader2.load('fbx/stone_bench.fbx', function (object30) {
    object30.traverse(function (child4) {
        if (child4.isMesh) {


            child4.castShadow = true;

            child4.material = new THREE.MeshPhongMaterial({ color: 0x898989 });
            child4.material.bumpMap = THREE.ImageUtils.loadTexture('bumps/txbump.jpg');
            child4.material.bumpScale = 0.05
            console.log("silla2");

        }

    });

    object30.scale.x = 0.7;
    object30.scale.y = 0.8;
    object30.scale.z = 1;

    object30.rotation.x = -1.59;

    object30.position.y = -25;
    object30.position.z = -280;
    object30.position.x = 145;
    scene.add(object30)
});

//escultura derecha 4

loader2.load('fbx/sculpture.fbx', function (object31) {
    object31.traverse(function (child4) {
        if (child4.isMesh) {

            child4.castShadow = true;

            child4.material = new THREE.MeshStandardMaterial({
                color: 0x209B25
            
            });
            console.log("escultura2");

        }

    });

    object31.scale.x = 0.15;
    object31.scale.y = 0.15;
    object31.scale.z = 0.18;

    object31.rotation.x = -1.59;

    object31.position.y = 18;
    object31.position.z = -280;
    object31.position.x = 70;
    scene.add(object31)
});
