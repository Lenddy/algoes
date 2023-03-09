//some comments

//Node Class
//creates a new node
class ListNode{
    constructor(data,next = null){
        this.data = data;
        //some comments 
        this.next = next
    }

}




//link list class

class SinglyLinkedList{

    constructor(){
        this.head = null
        this.size = 0
    }

//adds a node to the front of the list 
    insertAtFront(data){
    this.head = new ListNode(data, this.head)
    this.size ++;
    return this
}


//removes the first item in the list
    removeHead(){
        this.head = this.head.next
        this.size--
    }


//returns the average in the list (does not work if the data is not a number )
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


//returns true or false if the list is empty
    isEmpty(){
        if(this.head === null)return true
        else return false
    }



//adds a new node at the end(tail) list
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


//adds a new node at the end(tail) list recursively  insertAtBack and insertAtBackRecursive don't stack
    insertAtBackRecursive(data,runner= this.head){
        console.log("recursion")
        if(this.isEmpty()){
            this.head = new ListNode(data)
            return this
        }if(runner.next != null){
            this.insertAtBackRecursive(data, runner = runner.next)
        }else{
            this.head = new ListNode(data)
            this.size ++
            return this
        }
    }


    //haven't us it yet
    insertAtBackMany(vals){
        for(const item of vals){
            this.insertAtBack(item);
        }
        return this
    }



    //removes the last item in the list 
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
    
            this.size--;
            return this;
        }
    }


    //checks to see if the list contains a value
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


//checks to see if the list contains a value recursively
    containsRecursive( val, current = this.head){
        if(this.isEmpty() == true){
            console.log("the list is empty")
            return false
        }if( current.data == val){
            console.log(true,"list contains",val)
            return true
        }else if (current.next == null ){
            console.log(false,"list does not contains",val)
            return false
        }
            return this.containsRecursive(val,current.next)
    }

    //if implemented will get any value if it is on the list
    getAny(val){
        //if not empty loop over the notes
        //the note.data that has the same value as as the value inputted 
        ///sould be return 
        //if the list does not contains more thatn one node return that note 
        //if the value inputed is a negative int return the first node 
        //if it is bigger than list of node return the las node 
    }


    //gets the second to last itmen in the list  
    secondToLast(){
        if(this.isEmpty()){
            console.log("list is empty")
            return this
        }

        let current = this.head
        let previous;
        while(current.next !== null){
            previous = current
            current = current.next
        }
        console.log("second to last node is",previous.data)
        return previous.data
    }

    //removes any values if it is on the list
    removeVal(val){
        if(this.isEmpty()){
            console.log("list is empty")
            return this
        }
        if(val == this.head.data){
            this.removeHead()
            return true
        }else{
        let current = this.head
        let previous;
        while(current.next !== null){
            previous = current
            if(previous == null ){
                console.log(val,"not in the list")
                return false
            }
            current = current.next
            if(current.data == val){
                previous.next = current.next 
                console.log(`node with the value of ${val} has ben remove`)
                this.size--
                return true
            }
        }
    }
    }


    //adds a new value before  a targeted value
    preEnd(newVal,targetVal){
        if(this.isEmpty()){
            console.log("list is empty")
            return false
        }
        let current = this.head
        let previous;
        if(targetVal == current.data){
            this.insertAtFront(newVal)
            console.log("new node added before node with the value of",targetVal )
            return true
        }while(current.next !== null){
            previous = current
            current = current.next
            if(targetVal == current.data){
                previous.next = new ListNode(newVal,previous.next)
                this.size++
                console.log("new node added before node with the value of",targetVal )
                return true
            }
        }
    }


    //joins a pass in list to the end of  the curent list 
    concat(newList){
        if(newList.isEmpty())return this
        if(this.isEmpty()){
            this.head =  newList.head
            console.log(this.head)
            this.size += newList.size
            return this
        }else{
            let current = this.head;
            while(current.next !== null){
                    current = current.next
                }
            current.next = newList.head
            this.size += newList.size
            console.log(this.size)
            return this
        }
    }


    //gets the minimum value of the list and adds it to the front on ly worker on listData that are numbers
    minToFront(){
        if(this.isEmpty()){
            return this
        }else{
            let current = this.head
            let min = current;
            while(current.next !== null){
                if(min.data  <  current.data){
                    min = current.next
                    break
                }
                current = current.next
            }
            let toAdd = min.data
            this.removeVal(min.data)
            this.insertAtFront(toAdd)
        }
    }


    //splits the current list into 2 list at the given value
    splitOnVal(val){
        if(this.isEmpty()){
            return this
        }else{
            let current = this.head
            let previous;
            let count = 0
            while(current.next !== null){
                previous = current
                count++
                console.log(count)
                if(val == previous.data){
                    const splittedList = new SinglyLinkedList().head = previous.next
                    // previous.nex = null
                    console.log("this is the splitted list ",splittedList)
                    // this.size = count
                    // console.log(splittedList.size)
                    return splittedList
                }
                current = current.next
            }
        }
    }


    //!this is not part of the algo is a practice to se if you undertand 
    //come up whit a way that you can take a node name(head name) fined it and insert a new node in its .next and also in the new node that you just inserted you need to move the data from the previouse . next to the nex node  so basicaly if that node that you look for has data in its next property you need to get that data store itthan replace it with the new node to be inserted then in that node that you just inserted you need to put the data that you store in to its . next 
        insertAtNodeName(){}

//adds all the data in the list to an array
    toArr(){
        const arr = []
        let runner = this.head

        while(runner){
            arr.push(runner.data)
            runner = runner.next;
        }
        return arr
    }

    //prints the info of the list 
    printListData(){
        //this creates a variable assign to be the the first head(node)
        let current = this.head;
        // while there are nodes(heads) we loop over them 
        while(current){
            //we log the values of the head(nodes) 
            // console.log("full node:",current)
            console.log("node number:",current)
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
const secondList = new SinglyLinkedList();

 // insert 1 at the back of the list
console.log(myList.isEmpty())
myList.insertAtFront(0)
myList.insertAtBack(1); // insert 1 at the back of the list
// myList.insertAtFront()
secondList.insertAtBack(-1)
secondList.insertAtBack(2)
// myList.insertAtFront(-1)
// myList.removeHead()
// myList.average()
myList.removeVal(-10)
// // myList.removeBack()
// // myList.contains(3)
// myList.containsRecursive(1)
// myList.secondToLast()
// // myList.removeVal(1)
// myList.preEnd(1.5,0)


myList.concat(secondList)
// myList.printListData()
// console.log(myList.toArr()); // output: [1, 2, 3, 5]

// secondList.printListData()
// console.log(secondList.toArr()); // output: [1, 2, 3, 5]


// myList.minToFront()

myList.splitOnVal(0)

myList.printListData()
console.log(myList.toArr()); // output: [1, 2, 3, 5]

// secondList.printListData()
// console.log(secondList.toArr()); // output: [1, 2, 3, 5]

