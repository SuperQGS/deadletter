const graphContainer = document.getElementById('graph-container');

// // Sample node and link data
// const nodes = [
//   { id: 'node1', x: 50, y: 50 },
//   { id: 'node2', x: 150, y: 150 },
//   { id: 'node3', x: 50, y: 150 },
//   { id: 'node4', x: 150, y: 50 },
//   // Add more nodes as needed
// ];

// const links = [
//   { source: 'node1', target: 'node2' },
//   { source: 'node1', target: 'node3' },
//   { source: 'node1', target: 'node4' },
//   // Define connections between nodes
// ];

function renderGraph() {
    // Clear previous nodes and links
  graphContainer.innerHTML = '';
  
// Create nodes
Object.values(nodes).forEach(node => {
    const nodeElement = document.createElement('div');
    nodeElement.className = 'node';
    nodeElement.style.left = `${node.x}px`;
    nodeElement.style.top = `${node.y}px`;
    nodeElement.textContent = node.name + " " + node.coyotes; // Display node name
    nodeElement.id = node.id;

    if (mailtruck.location == node.id) {
        nodeElement.style.backgroundColor = "darkblue";
    } else {
        nodeElement.style.backgroundColor = "#3498db";
    }

    graphContainer.appendChild(nodeElement);
  });
  
// Create links
Object.values(links).forEach(link => {
    const sourceNode = document.querySelector(`#${link.nodes[0]}`);
    const targetNode = document.querySelector(`#${link.nodes[1]}`);
  
    if (sourceNode && targetNode) {
      const linkElement = document.createElement('div');
      linkElement.className = 'link';
      linkElement.style.width = '4px';
      linkElement.style.height = `${getDistance(sourceNode, targetNode)}px`;
      linkElement.style.backgroundColor = blightColors[link.blight];
  
      const angle = getAngle(sourceNode, targetNode);
      linkElement.style.transform = `rotate(${Math.PI - angle + Math.PI / 2}rad)`; // Adjust the angle here
      linkElement.style.transformOrigin = 'left top';
      linkElement.style.left = `${getCenterX(sourceNode)}px`;
      linkElement.style.top = `${getCenterY(sourceNode)}px`;
  
      graphContainer.appendChild(linkElement);
    }
  });
}


// Helper functions
function getDistance(node1, node2) {
  const dx = getCenterX(node2) - getCenterX(node1);
  const dy = getCenterY(node2) - getCenterY(node1);
  return Math.sqrt(dx * dx + dy * dy);
}

function getAngle(node1, node2) {
  const dx = getCenterX(node2) - getCenterX(node1);
  const dy = getCenterY(node1) - getCenterY(node2);
  return Math.atan2(dy, dx);
}

function getCenterX(node) {
  return node.offsetLeft + node.offsetWidth / 2;
}

function getCenterY(node) {
  return node.offsetTop + (node.offsetHeight) / 2;
}


renderGraph();