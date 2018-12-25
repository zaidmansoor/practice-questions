function convertIndex(i, j, width) {
    return (i * width) + j
}

var shortestPath = function(map, width, height) {
    let graph = new Array(width * height);
    let visited = new Array(width * height).fill(false);
    let min = width * height;

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            let index = convertIndex(i, j, width);

            if (!graph[index]) {
                graph[index] = []; 
            }

            if (map[i - 1] && map[i - 1][j]) {
                graph[index].push(convertIndex(i - 1, j, width)); 
            }

            if (map[i][j - 1]) {
                graph[index].push(convertIndex(i, j - 1, width)); 
            }

            if (map[i][j + 1]) {
                graph[index].push(convertIndex(i, j + 1, width)); 
            }

            if (map[i + 1] && map[i + 1][j]) {
                graph[index].push(convertIndex(i + 1, j, width)); 
            }
        }
    }

    let DFUtil = function(node, dist) {
        let x = Math.floor( node / width ),
            y =  ( node % width );
        visited[node] = true;

        // console.log("x, y", x, y);
        if (map[x][y] === 9 && min > dist) {
            min = dist;
        }

        for (let i = 0; i < graph[node].length; i++) {
            if (!visited[graph[node][i]]) {
                DFUtil(graph[node][i], dist + 1);
            }
        }

        //console.log("visite", visited);
    }

    console.log(graph);
    DFUtil(0, 0);
    return min;
}

var map = [[1,0, 0], [1, 1, 1], [1, 9, 0]];
console.log(shortestPath(map, 3, 3));

var map = [[1, 1, 1, 0], [1, 0, 0, 1], [1, 0, 9, 1], [1, 0, 1, 1], [1, 1, 1, 1]];
console.log(shortestPath(map, 4, 5));