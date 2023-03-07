//some comments




class ListNode{
//some comments
    constructor(data,next = null){
        this.data = data;
        //some comments 
        this.next = next
    }

}



// const node = new ListNode(100)
// console.log(node)


//some comments

class SinglyLinkedList{
//some comments
    constructor(){
        this.head = null
        this.size = 0
    }

//some comments
    insertAtFront(data){
    // const current = this.head
    // let node = new ListNode(data)
    // if(this.isEmpty()){
    //     this.head = node
    // }else{
    //     node.next = this.head
    // }
    // return this
    this.head = new ListNode(data, this.head)
    this.size ++;
    return this
}

    removeHead(){
        this.head = this.head.next
        this.size--
    }

    average(){
        if(this.isEmpty()){
            console.log(NaN)
            return NaN
        }else{
            let current = this.head;
            let total =Math.floor(0)
            while(current != null){
                console.log(total += current.data)
                total += current.data
                current = current.next
            }
            
            console.log("this is the average",Math.floor(total/this.size));
            return Math.floor(total/this.size)
        }
    }

    isEmpty(){
        if(this.head === null)return true
        else return false
    }



//some comments
    insertAtBack(data){
        const node = new ListNode(data)
        if(this.isEmpty()){
            this.head = node
        }else{
            let current = this.head
            while(current.next != null){
                current = current.next
            }
            current.next = node
        }
        this.size ++
        return this
    }

//some comments
    insertAtBackRecursive(data,runner= this.head){
        console.log("recursion")
        if(this.isEmpty()){
            this.head = new ListNode(data)
            return this
        }
        if(runner.next != null){
            this.insertAtBackRecursive(data, runner = runner.next)
            // this.printListData()
        }else{
            this.head = new ListNode(data)
            this.size ++
            return this
        }
    }
    
    //some comments
    insertAtBackMany(vals){
        for(const item of vals){
            this.insertAtBack(item);
        }
        return this
    }





    removeBack() {
        if (this.isEmpty()) {
            return this;
        } else if (this.size === 1) {
            this.head = null;
            this.size = 0;
            return this;
        } else {
            let current = this.head;
            let previous = null;
            while (current.next !== null) {
                previous = current;
                current = current.next;
            }
    
            this.tail = previous;
            this.tail.next = null;
            this.size--;
            return this;
        }
    }
    





    contains(val){
        if(this.isEmpty()){
            console.log("list is empty add a new node")
            return false
        }else{
            let current = this.head
            while(current !== null){
                if(current.data === val){
                    console.log(true,"list contains", val,)
                    return true
                }
                current = current.next
            }
            console.log(false,"list does not contains", val )
            return false
        }
    }


    //!this is not part of the algo is a practice to se if you undertand 
    //come up whit a way that you can take a node name(head name) fined it and insert a new node in its .next and also in the new node that you just inserted you need to move the data from the previouse . next to the nex node  so basicaly if that node that you look for has data in its next property you need to get that data store itthan replace it with the new node to be inserted then in that node that you just inserted you need to put the data that you store in to its . next 
        insertAtNodeName(){}

//some comments
    toArr(){
        const arr = []
        let runner = this.head

        while(runner){
            arr.push(runner.data)
            runner = runner.next;
        }
        return arr
    }
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


const myList = new SinglyLinkedList(); // create a new list

 // insert 1 at the back of the list
console.log(myList.isEmpty())
myList.insertAtFront(1)
myList.insertAtBack(2); // insert 1 at the back of the list
myList.insertAtFront(0)
myList.insertAtBack(3)
myList.insertAtFront(-1)
myList.removeHead()
myList.average()
myList.removeBack()
// myList.contains(3)


myList.printListData()
console.log(myList.toArr()); // output: [1, 2, 3, 5]

