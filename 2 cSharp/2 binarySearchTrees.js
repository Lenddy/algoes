
class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}


class BST{
    constructor(){
        this.root =null
        this.size = 0
        this.height = 0
    }

//determine if the tree is empty
    isEmpty(){
        return this.root === null
    }

//retrieves the smallest integer data in the tree
    min(current = this.root){
        if(this.isEmpty())return this.root
        while(current.left !== null){
            current = current.left
        }   console.log(current.data)
         return current.data

    }

    minRecursive(current = this.root){
        if(current.left == null){
            console.log(current.data)
            return current.data
        }
        return this.minRecursive(current.left)
    }

//retrieves the largest int in the tree
    max() {
        if (this.isEmpty()) {
            return null;
        }
        let current = this.root;
        while (current.right !== null) {
          current = current.right;
        }
        return current.data;
      }
      

    maxRecursive(current = this.root ){
        if(current.right == null){
            console.log(current.data)
            return current.data
        }return this.maxRecursive(current.right)

    }

//determine if the tree contains a given data
    contains(val){
        if(this.isEmpty()) return null

        let current = this.root;
        while(current){
            if(current.data == val){
                console.log("contains")
                return true
            }
            if(val > current.data){
                console.log("up")
                current = current.right
            }else{
                console.log("down")
                current = current.leaf
            }
        }  
        console.log("does not contains")
        return false
    }

    containRecursive(val,current= this.root){
        if(current == null || this.isEmpty()){
            console.log(`does not contain ${val}`,false)
        return false
    }

        if(current.data == val){
            console.log(`contains ${val} `, true)
            return true
        } 

        if(val > current.data){
            return this.containRecursive(val,current.right)
        }else{
            return this.containRecursive(val,current.left)
        }
    }

// inserts a new value
    insert(val){
        const newNode = new Node(val)
        const height = this.height = this.hight()
        if(this.isEmpty()){
            this.root = newNode
            this.size++
        this.height = this.hight()
            return this.root
        }else{
            let current = this.root
            while(current.data !== null){
                if(val < current.data){
                    if(current.left == null){
                        current.left = newNode
                        this.size++
                        return this.root
                    }
                    current = current.left
                }if(val > current.data){
                    if( current.right == null){
                        current.right = newNode
                        this.size++
                        return this.root
                    }
                    current = current.right
                }
            }
            }
        }

    insertRecursive(val,current= this.root){
    const newNode = new Node(val)
        if(this.isEmpty()|| current.data == null){
            this.root = newNode
            this.size++
            return this.root
        }
        if(current.data == null){
            current.data = newNode
            console.log(current.data)
            this.size++
            return this.root
        }

        if(val < current.data){
            return this.insert(val, current.left)
        }
        else{
            return this.insert(val,current.right)
        }
    }

//give you the range of values between min and max
    range(minValue, maxValue) {
        const result = [];
        let steps = 0;
        function traverse(node) {
            steps++;
            if (node === null) return;
            if (node.data > minValue) {
            traverse(node.left);
            }
            if (node.data >= minValue && node.data <= maxValue) {
            result.push(node.data);
            }
            if (node.data < maxValue) {
            traverse(node.right);
            }
        }
        traverse(this.root);
        return  {result,steps}
        }




    toArrayPreOrder(current = this.root,result = []) {
        const traverse = (node) => {
            if (node !== null) {
                result.push(node.data);
                traverse(node.left);//1,2,3,4
                traverse(node.right);//4:1 ,3:1,2:1,1:1,1:2
            }
        };
    
        traverse(current);
        console.log(result)
        return result;
    }


    toArrayPreOrder2(current = this.root,result = []) {
        if (current) {
            result.push(current.data);
            this.toArrayPreOrder2(current.left,result);//1,2,3,4
            this.toArrayPreOrder2(current.right,result);//4:1 ,3:1,2:1,1:1,1:2
    };
    console.log(result)
    return result;
    }

    
    
    toArrayInOrder(current = this.root,result = []) {
        const traverse = (node) => {
            if (node !== null) {
                traverse(node.left);//1,2,3,4
                result.push(node.data);
                traverse(node.right);//4:1 ,3:1,2:1,1:1,1:2
            }
        };
        traverse(current);
        console.log(result)
        return result;
    }
    
    toArrayInOrder2(current = this.root,result = []) {
        
            if (current) {
                this.toArrayInOrder2(current.left,result);//1,2,3,4
                result.push(current.data);
                this.toArrayInOrder2(current.right,result);//4:1 ,3:1,2:1,1:1,1:2
            }

        console.log(result)
        return result;
    }
    

    toArrayPostOrder(current = this.root,result = []) {
        const traverse = (node) => {
            if (node !== null) {
                traverse(node.left);//1,2,3,4
                traverse(node.right);//4:1 ,3:1,2:1,1:1,1:2
                result.push(node.data);
            }
        };
        traverse(current);
        console.log(result)
        return result;
    }
    toArrayPostOrder2(current = this.root,result = []) {
            if (current) {
                this.toArrayPostOrder2(current.left,result);//1,2,3,4
                this.toArrayPostOrder2(current.right,result);//4:1 ,3:1,2:1,1:1,1:2
                result.push(current.data);
            }
        console.log(result)
        return result;
    }

    toArrayLeveOrder(current = this.root,result = []){
        const queue = [current]
        while(queue.length){
            console.log(queue)
            const node = queue.shift()
            console.log(node.data)
            result.push(node.data)
            if(node.left)queue.push(node.left)
            if(node.right)queue.push(node.right)
        }
        console.log(result)
        return result
    }


    //     toArrayLeveOrder(current = this.root,result = []){
    //         if(current){    
    //             this.toArrayLeveOrder(current.left,result)
    //             result.push(current.data)
    //             this.toArrayLeveOrder(current.right,result)

    //         }
    //         console.log(result)
    //         return result
    // }


    hight(current = this.root){
        if(current == null)return 0
            console.log(1 + Math.max(this.hight(current.left),this.hight(current.right)))
        return 1 + Math.max(this.hight(current.left),this.hight(current.right))
    }


    isFull(current = this.root){
        if(current == null)return true
        else if(current.left == null && current.right == null)return true
        else if(current.left && current.right)return this.isFull(current.left) && this.isFull(current.right)
        else return false
        
    }



    // hight(current = this.root, tallness = 1){
    //     if(current){

    //         if(current.left || current.right)return this.hight(current.left, tallness + 1)
    //         if(current.right || current.left)return this.hight(current.right , tallness + 1)
    //     }
    //     console.log(Math.floor(tallness))
    //     return Math.floor(tallness)
    // }   

    // to print the tree
    printTree(current = this.root){
        console.log(current)
        if(current == null)return null
        console.log(current.data)
        console.log(this.size)
        console.log(this.height)
        this.printTree(current.left)
        this.printTree(current.right)
    }

    //to print the tree in order
    // printTreeInOrder(current = this.root){
    //     if(current == null)return
    //     this.printTree(current.left)
    //     console.log(current.data)
    //     this.printTree(current.right)
    // }

    //  printTree(root) {
    //     if (root === null) {
    //       return;
    //     }
        
    //     const queue = [root];
    //     let currentLevelNodes = 1;
    //     let nextLevelNodes = 0;
        
    //     while (queue.length > 0) {
    //       const node = queue.shift();
    //       currentLevelNodes--;
    //       process.stdout.write(`${node.val} `);
          
    //       if (node.left !== null) {
    //         queue.push(node.left);
    //         nextLevelNodes++;
    //       }
          
    //       if (node.right !== null) {
    //         queue.push(node.right);
    //         nextLevelNodes++;
    //       }
          
    //       if (currentLevelNodes === 0) {
    //         process.stdout.write('\n');
    //         currentLevelNodes = nextLevelNodes;
    //         nextLevelNodes = 0;
    //       }
    //     }
    //   }
      
}

const bst = new BST()

console.log("is the tree empty?",bst.isEmpty())
// bst.root = new  Node(10)
// bst.root.left = new  Node(5)
// bst.root.left.left = new  Node(2)
// bst.root.left.right = new  Node(6)
// bst.root.right = new  Node(15)
// bst.root.right.left = new  Node(13)
// bst.root.right.right = new  Node(14)
// bst.insertRecursive(10)
// bst.insertRecursive(15)
// bst.insertRecursive(7)
// bst.insertRecursive(1)
// bst.insertRecursive(5)
// bst.insertRecursive(20)
// bst.insertRecursive(14)
bst.insert(10)
bst.insert(5)
bst.insert(2)
bst.insert(6)
bst.insert(7)
bst.insert(15)
bst.insert(18)
bst.insert(14)
bst.insert(1)
bst.insert(0)
 bst.insert(-1)

// // console.log(bst)
bst.printTree()
// bst.printTreeInOrder()
// console.log("min ",bst.min())
// console.log("min recursive",bst.minRecursive())
// console.log("max ",bst.max())
// console.log("min recursive ",bst.maxRecursive())
// bst.contains(50)
// bst.containRecursive(18)
console.log("range",bst.range(5,15))
console.log(bst.toArrayPreOrder())
console.log(bst.toArrayPreOrder2())
console.log(bst.toArrayInOrder())
console.log(bst.toArrayInOrder2())
console.log(bst.toArrayPostOrder())
console.log(bst.toArrayPostOrder2())
console.log(bst.toArrayLeveOrder())
console.log("hight",bst.hight())
console.log(bst.isFull())
// [ 10, 5, 15, 5, 2, 6, 2, 1, 1, 0, 0, 6, 15, 12, 18, 12, 18 ]

