
      // 创建场景
      let renderer;
      let camera;
      let cube, md;
      let ambLight;
      let spotLight;
      let scene = new THREE.Scene();
      
      
      function init(){

        //light
        ambLight = new THREE.AmbientLight(0x404040);
        spotLight = new THREE.SpotLight(0xffffff)
        spotLight.position.set( 100, 1000, 200 );

        // 创建相机
        camera = new THREE.PerspectiveCamera(75, (window.innerHeight)/(window.innerHeight), 0.1, 1000);
        camera.position.z = 3;
        
        

        // 创建渲染器
        renderer= new THREE.WebGLRenderer({canvas: document.getElementById("myCanvas"),
        antialias: false});
        renderer.setClearColor(new THREE.Color(0xFFFFFF));
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.setPixelRatio(window.devicePixelRatio);

        // 创建立方体
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        let material = new THREE.MeshPhongMaterial({
          color: 0x00FF00
        })
        cube = new THREE.Mesh(geometry, material);

        var loader = new THREE.GLTFLoader();
            
        loader.load( '../model.glb', function ( gltf )
        {
            md = gltf.scene;
        } );
      }    
      function animate() {

        requestAnimationFrame( animate ); 

        cube.rotation.x += 0.01; 
        cube.rotation.y += 0.02;
        md.rotation.x += 0.01; 
        md.rotation.y += 0.02;
        render();
        
      }
      function render(){
        //scene.add(cube);
        scene.add(ambLight);
        scene.add(spotLight);
        scene.add(md);
        renderer.render( scene, camera );
      }
       
      init();
      animate();

    