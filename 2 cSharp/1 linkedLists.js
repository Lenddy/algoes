//some comments




class ListNode{
//some comments
    constructor(data,){
        this.data = data;
        //some comments 
        this.next = null
    }

}



// const node = new ListNode(100)
// console.log(node)


//some comments

class SinglyLinkedList{
//some comments
    constructor(){
        this.head = null
    }

//some comments

    isEmpty(){
        if(this.head === null)return true
        else return false
    }

//some comments
    insertAtBack(data){
        if(this.isEmpty()){
            this.head = new ListNode(data);
        }else{
            let current = this.head
            while(current.next !== null){
                current = current.next
            }
            current.next = new ListNode(data)
        }
    }

//some comments
    insertAtBackRecursive(data,runner= this.head){}

//some comments
    insertAtBackMany(vals){
        for(const item of vals){
            this.insertAtBack(item);
        }
        return this
    }

    //!this is not part og the algo is a practice to se if you undertand 
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
}


const myList = new SinglyLinkedList(); // create a new list

; // insert 1 at the back of the list
console.log(myList.isEmpty())
myList.insertAtBack(1); // insert 1 at the back of the list
myList.insertAtBack(2); // insert 2 at the back of the list
myList.insertAtBack(3); // insert 3 at the back of the list
myList.insertAtBack(5); // insert 5 at the back of the list
console.log(myList.toArr()); // output: [1, 2, 3, 5]


