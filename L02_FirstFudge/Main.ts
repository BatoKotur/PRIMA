namespace L02_FirstFudge {
    import f = FudgeCore;
    window.addEventListener("load", hndLoad);
    export let viewport: f.Viewport;

    function hndLoad(_event: Event): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas");
        f.RenderManager.initialize();
        console.log(canvas);

        let player1: f.Node = new f.Node("Player1");
        let player2: f.Node = new f.Node("Player2");
        let ball: f.Node = new f.Node("Ball");

        // Parent
        let parentNode: f.Node = new f.Node("Parent")
        parentNode.appendChild(player1);
        parentNode.appendChild(player2);
        parentNode.appendChild(ball);

        // Material
        let mtrSolidWhite: f.Material = new f.Material("SolidWhite", f.ShaderUniColor, new f.CoatColored(f.Color.WHITE));
        
        
        

        // Camera
        let zPos: number = 15;
        let cmpCamera: f.ComponentCamera = new f.ComponentCamera();
        cmpCamera.pivot.translateZ(zPos);
       
        // Mesh
        let mesh: f.MeshQuad = new f.MeshQuad();

        // Player 1
        let player1Mesh: f.ComponentMesh = new f.ComponentMesh(mesh);
        player1.addComponent(player1Mesh);

        let mtrPlayer1: f.ComponentMaterial = new f.ComponentMaterial(mtrSolidWhite);
        player1.addComponent(mtrPlayer1);
        
        player1Mesh.pivot.translateX(-8);
        player1Mesh.pivot.scaleX(.25);
        player1Mesh.pivot.scaleY(2);

        // Player 2
        let player2Mesh: f.ComponentMesh = new f.ComponentMesh(mesh); 
        player2.addComponent(player2Mesh);

        let mtrPlayer2: f.ComponentMaterial = new f.ComponentMaterial(mtrSolidWhite);
        player2.addComponent(mtrPlayer2);

        player2Mesh.pivot.translateX(8);
        player2Mesh.pivot.scaleX(.25);
        player2Mesh.pivot.scaleY(2);

        // Ball
        let ballMesh: f.ComponentMesh = new f.ComponentMesh(mesh);
        ball.addComponent(ballMesh);

        let mtrBall: f.ComponentMaterial = new f.ComponentMaterial(mtrSolidWhite);
        ball.addComponent(mtrBall);

        ballMesh.pivot.scale(new f.Vector3(.25, .25, .25));

        // setInterval(() => {
        //     cmpMesh.pivot.rotateY(1);
        //     cmpMesh.pivot.rotateX(1);
        //     cmpMesh.pivot.rotateZ(1);
        //     viewport.draw();
        // }, 3)
        
        viewport = new f.Viewport();
        viewport.initialize("Viewport", parentNode, cmpCamera, canvas);
        f.Debug.log(viewport);

        viewport.draw();
    }
}