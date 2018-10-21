// let collection = {
//     rnadnm: {name: 'Alexandra', next: 'masjdrandm'},
//     masjdrandm: {name: 'Kirstin', next: 'ntrandm'},
//     ntrandm: {name: 'Juliet', next: null}
//   }

function getName(node) {
  return node.name
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

function next(node, collection){
  return collection[node.next]
}

function nodeAt(index, linkedList, collection) {
  let node = headNode(linkedList, collection)
  for (let i = 1; i <= index; i++) {
    node = next(node, collection)
  }
  return node
}

function addressAt(index, linkedList, collection) {
  return index > 0
    ?
      nodeAt(index - 1, linkedList, collection).next
    :
      linkedList
}

function indexAt(node, collection, linkedList) {
  let currentNode = headNode(linkedList, collection)
  let index = 0
  while (currentNode != node) {
    currentNode = next(currentNode, collection)
    index++
  }
  return index
}

function insertNodeAt(index, address, linkedList, collection) {
  let newNode = collection[address]
  let previousNode = nodeAt(index - 1, linkedList, collection)
    newNode.next = previousNode.next
    previousNode.next = address
}

function deleteNodeAt(index, linkedList, collection) {
  nodeAt(index - 1, linkedList, collection).next = nodeAt(index, linkedList, collection).next
}
