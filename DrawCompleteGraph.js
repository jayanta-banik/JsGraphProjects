var points;

function setup()
{
    createCanvas(800, 600);
    background(255);
    points = [];
}

function mousePressed()
{
    points.push([mouseX, mouseY]);
}

function drawVertices()
{
    if(points.length == 1){
        return;
    }
    for(i = 0; i < points.length; i++)
    {
        for(j = 0; j < points.length; j++)
        {
            if(i == j)
            {
                continue;
            }
            strokeWeight(2);
            stroke(255);
            line(points[i][0], points[i][1], points[j][0], points[j][1]);
            noStroke();
        }
    }
}

function drawNodes()
{
    for(i = 0; i < points.length; i++){
        fill('rgb(0,255,0)');
        ellipse(points[i][0], points[i][1], 50, 50);
    }
}

function draw()
{
    clear();
    background(0);

    drawVertices();
    drawNodes();
}
