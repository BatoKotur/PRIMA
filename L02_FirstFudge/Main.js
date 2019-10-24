"use strict";
var L02_FirstFudge;
(function (L02_FirstFudge) {
    var f = FudgeCore;
    window.addEventListener("load", hndLoad);
    function hndLoad(_event) {
        const canvas = document.querySelector("canvas");
        f.RenderManager.initialize();
        console.log(canvas);
        let player1 = new f.Node("Player1");
        let player2 = new f.Node("Player2");
        let ball = new f.Node("Ball");
        // Parent
        let parentNode = new f.Node("Parent");
        parentNode.appendChild(player1);
        parentNode.appendChild(player2);
        parentNode.appendChild(ball);
        // Material
        let mtrSolidWhite = new f.Material("SolidWhite", f.ShaderUniColor, new f.CoatColored(f.Color.WHITE));
        // Camera
        let zPos = 15;
        let cmpCamera = new f.ComponentCamera();
        cmpCamera.pivot.translateZ(zPos);
        // Mesh
        let mesh = new f.MeshQuad();
        // Player 1
        let player1Mesh = new f.ComponentMesh(mesh);
        player1.addComponent(player1Mesh);
        let mtrPlayer1 = new f.ComponentMaterial(mtrSolidWhite);
        player1.addComponent(mtrPlayer1);
        player1Mesh.pivot.translateX(-8);
        player1Mesh.pivot.scaleX(.25);
        player1Mesh.pivot.scaleY(2);
        // Player 2
        let player2Mesh = new f.ComponentMesh(mesh);
        player2.addComponent(player2Mesh);
        let mtrPlayer2 = new f.ComponentMaterial(mtrSolidWhite);
        player2.addComponent(mtrPlayer2);
        player2Mesh.pivot.translateX(8);
        player2Mesh.pivot.scaleX(.25);
        player2Mesh.pivot.scaleY(2);
        // Ball
        let ballMesh = new f.ComponentMesh(mesh);
        ball.addComponent(ballMesh);
        let mtrBall = new f.ComponentMaterial(mtrSolidWhite);
        ball.addComponent(mtrBall);
        ballMesh.pivot.scale(new f.Vector3(.25, .25, .25));
        // setInterval(() => {
        //     cmpMesh.pivot.rotateY(1);
        //     cmpMesh.pivot.rotateX(1);
        //     cmpMesh.pivot.rotateZ(1);
        //     viewport.draw();
        // }, 3)
        L02_FirstFudge.viewport = new f.Viewport();
        L02_FirstFudge.viewport.initialize("Viewport", parentNode, cmpCamera, canvas);
        f.Debug.log(L02_FirstFudge.viewport);
        L02_FirstFudge.viewport.draw();
    }
})(L02_FirstFudge || (L02_FirstFudge = {}));
//# sourceMappingURL=Main.js.map