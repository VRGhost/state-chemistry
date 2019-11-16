import * as Matter from 'matter-js';

var engine = Matter.Engine.create();
var world = engine.world;

// HTMLCanvasElement canvas = ;

// create renderer
var render = Matter.Render.create({
    // element: document.body,
    canvas: <HTMLCanvasElement> document.getElementById('myCanvas'),
    engine: engine,
    options: {
        width: 800,
        height: 600,
        wireframes: false,
    }
});

Matter.Render.run(render);

var runner = Matter.Runner.create({});
Matter.Runner.run(runner, engine);



var circle1 = Matter.Bodies.circle(100, 100, 50, {
        render: {
            fillStyle: 'red',
            strokeStyle: 'blue',
            lineWidth: 3
        }
    }
);

Matter.World.add(world, [circle1]);

// Matter.Render.lookAt(render, {
//     min: { x: 0, y: 0 },
//     max: { x: 800, y: 600 }
// });



var render = Matter.Render.create({
    engine: engine,
    // bounds: {
    //     min: {
    //         x: -500,
    //         y: -500
    //     },
    //     max: {
    //         x: 500,
    //         y: 500
    //     }
    // }
});

Matter.Engine.run(engine);
Matter.Render.run(render);