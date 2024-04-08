function depthFirstSearch(graph, startNode, targetNode) {
    let visited = Array(graph.length).fill(false);
    let found = false;
    let path = [];

    function dps(node){
        if (found == true || node == targetNode){
            found = true;
            path.push(node);
            return;
        }
        else if (visited[node] == true){
            return;
        }
        visited[node] = true;
        if(graph[node] == undefined){
            return;
        }
        for(let i=0; i < graph[node].length; i++){
            dps(graph[node][i]);
            if (found == true){
                path.push(node);
                return
            }
        }
        
    }

    dps(startNode);
    path = path.reverse();
    //console.log(path);
    
    
    return path;
}