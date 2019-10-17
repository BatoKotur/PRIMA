namespace L02_FirstFudge {
    import f = FudgeCore;
    window.addEventListener("load", hndLoad);
    export let viewport: f.Viewport;

    function hndLoad(_event: Event): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas");
        f.RenderManager.initialize();
        console.log(canvas);

        let player1: f.Node = new f.Node("Quad");
        let player2: f.Node = new f.Node("Quad");
        let ball: f.Node = new f.Node("Ball");

        let topNode: f.Node = new f.Node("topNode")
        topNode.appendChild(player1);
        topNode.appendChild(player2);
        topNode.appendChild(ball);

        let mtrSolidWhite: f.Material = new f.Material("SolidWhite", f.ShaderUniColor, new f.CoatColored(f.Color.WHITE));
        let mtrMaterial: f.ComponentMaterial = new f.ComponentMaterial(mtrSolidWhite);
        let mtrMaterial2: f.ComponentMaterial = new f.ComponentMaterial(mtrSolidWhite);
        let mtrBall: f.ComponentMaterial = new f.ComponentMaterial(mtrSolidWhite);
        player1.addComponent(mtrMaterial);
        player2.addComponent(mtrMaterial2);
        ball.addComponent(mtrBall);


        let zPos: number = 15;
        let cmpCamera: f.ComponentCamera = new f.ComponentCamera();
        cmpCamera.pivot.translateZ(zPos);
       
        let mesh: f.MeshQuad = new f.MeshQuad();
        let player1Mesh: f.ComponentMesh = new f.ComponentMesh(mesh);
        let player2Mesh: f.ComponentMesh = new f.ComponentMesh(mesh);
        let ballMesh: f.ComponentMesh = new f.ComponentMesh(mesh);
        player1.addComponent(player1Mesh);
        player2.addComponent(player2Mesh);
        ball.addComponent(ballMesh);

        player1Mesh.pivot.translateX(-8);
        player1Mesh.pivot.scaleX(.25);
        player1Mesh.pivot.scaleY(2);
        player2Mesh.pivot.translateX(8);
        player2Mesh.pivot.scaleX(.25);
        player2Mesh.pivot.scaleY(2);
        ballMesh.pivot.scale(new f.Vector3(.25, .25, .25));

        // setInterval(() => {
        //     cmpMesh.pivot.rotateY(1);
        //     cmpMesh.pivot.rotateX(1);
        //     cmpMesh.pivot.rotateZ(1);
        //     viewport.draw();
        // }, 3)
        
        viewport = new f.Viewport();
        viewport.initialize("Viewport", topNode, cmpCamera, canvas);
        f.Debug.log(viewport);

        viewport.draw();
    }
}