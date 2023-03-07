// let dict={
//     hola:{
//         hello:"hola como estas",
//         morning:"buenos dias"
//     },
//     nombre:{
//         Lenddy:"mi nombre es lenddy"
//     },
//     sayName:()=>{
//         console.log(this.nombre.Lenddy)
//     }
// }

// dict.greeting = function(){ console.log(this["hola"].hello,this.hola.morning)}


// dict.sayName()

//link list from 0 



class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next
    }
}

// const n = new Node(1)

// console.log(n)
// console.log(new Node())




class LinkList{
    constructor(head){
        this.head = null
        this.size = 0
    }

    first(){
        console.log(this.head.next)
    }

    //insert first
    insertFirst(data){
        // this creates new node and the next of this nodes point to a node that was place before it    
        //  think of this as a shift      where 1 is the first node then you create a new node 0  and node 0 puts node 1 as its next
        //there for becoming the  the node at the beginning
        this.head = new Node(data,this.head);
        this.size++;
    }

    //insert last 
    insertLast(data){
        //we create a new instance of a node
        let node = new Node(data)
        //initializing a variable current 
        let current;
        //if empty make it the first head(node)
        if(!this.head){
            this.head = node;
        }else{
            //if its not empty  assigning current to be the first head(node) 
            current = this.head;
                //while the nodes have reference to other node we keep looping 
            while(current.next){
                //making current == to the next nodes 
                current = current.next
            }
            //if the loop breaks this means tht there are no  more .next(references)    
            //we assign the .next of the current node to be the node to be inserted  
            current.next = node
        }
        //increasing the size of the list
        this.size++
    }

    //insert at index
    insertAt(data,idx){
        //if is out of range
        // if(idx > 0 && idx > this.size)return;//if is out of range do noting

        //if  index == or lees that first index 
        if(idx <= 0 ){
            return this.insertFirst(data)
        }

        //insert at the end if the index i == o greater than size
        if(idx >= this.size){
            
            return this.insertLast(data)
        }

        //initializing a new node
        const node = new Node(data);
        //initializing  2 variables cur(current), prev(previous)
        let current,previous;

        current = this.head;

        let count = 0;
        while(count < idx){
            previous = current //this is the node before the index 
            count++
            current = current.next; //node after the index
        } 

        node.next = current
        previous.next = node

        this.size++
    }

    //get at index
    getAt(idx){
        let current = this.head
        let count = 0
        //if idx is a negative or 0 return the first node
        if(idx <= 0){
            console.log("the node is ",current.data)
            return current.data
        }

        while(current){
            //if idx is == to this.size or greater sets idx to be this.size - 1
            if(idx >= this.size){
                idx = this.size -1
            }
            //if the count is == to the idx it will return that node 
            if(count == idx){
                console.log(current.data)
                return
            }
            count ++
            current = current.next;
        }
        return current.data

    }

    //remove at index
    removeAt(idx){
        let current = this.head
        let previous;
        let count = 0
        if(idx == undefined || idx == null ){
            idx = this.size
        }
        if(idx <= 0){
            this.head = current.next
            return
        }if(idx >= this.size){
            idx == this.size
        }else{
            while(count < idx){
                count++
                previous = current
                current = current.next
            }
            previous.next = current.next
        }
        this.size --

    }

    //clear list
    clearList(){
        this.head = null
        this.size = 0
    }

    //print list
    printListData(){
        //this creates a variable assign to be the the first head(node)
        let current = this.head;
        // while there are nodes(heads) we loop over them 
        while(current){
            //we log the values of the head(nodes) 
            // console.log("full node:",current)
            console.log("node number:",current.data)
            console.log("______________")
            //we assign current to be the next node(head) 
            current =current.next;
        }if(this.size == 0)console.log("there are no nodes available");

        else console.log("no more nodes available");
        //log the size of the link list
        console.log("list size:",this.size)
    }

}

const ll = new LinkList();

ll.insertFirst("node 1")
ll.insertFirst("node 2")
ll.insertFirst("node 0")
ll.insertLast("node 4")
ll.insertAt("node3.5",1)
// ll.getAt(6)
// ll.removeAt(0)
// ll.clearList()
ll.printListData()
// console.log(ll

// ll.first()
