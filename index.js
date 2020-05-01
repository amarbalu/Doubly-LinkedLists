class Node{
  constructor(value){
    this.prev=null,
    this.value=value,
    this.next=null
  }
}

class MyDoublyLinkedList{
  constructor(value){
    this.head={
      prev:null,
      value:value,
      next:null
    },
    this.tail=this.head,
    this.length=1
  }

  append(value){ //O[1]
let newone=new Node(value);
this.tail.next=newone;
newone.prev=this.tail
this.tail=newone;
this.length++;
return this;
  }
  prepend(value){  //O[1]
let newone=new Node(value);
this.head.prev=newone;
newone.next=this.head;
this.head=newone;
this.length++;
return this;
  }

  printItems(){  //O[n]
let array=[];
let indexvalue=this.head;
while(indexvalue!==null){
  array.push(indexvalue.value);
  indexvalue=indexvalue.next;
}
return array;
  }

  insert(value,indexVar){  //O[n]
    const array=this.printItems();
    const index=indexVar-1;
    if(index < array.length && index!==0){
      const node=new Node(value);
    const leader=this.traversefromhead(index-1);
    const follower=leader.next;
    leader.next=node;
    node.prev=leader;
    node.next=follower;
    follower.prev=node;
    this.length++;
    }else if(index===0){
this.prepend(value)
    }
    else{
      this.append(value)
    }
return this;
  }
  traversefromhead(index){
let list=this.head;
let count=0;
while(count<index){
  list=list.next;
  count++;
}
return list;
  }

  remove(indexVar){  //O[n]
     const array=this.printItems();
     const index=indexVar-1;
    if(index < array.length && index){
    const leader=this.traverseToIndex(index-1);
    const follower=leader.next;
    leader.next=follower.next;
    follower.prev=leader;
   this.length--;
    
    }else if(index===0){
      this.head=this.head.next;
      this.head.prev=null;
      this.length--;
    }
return this;
  }
}
// Traverse from Both Ends
// More memory
const linkedList= new MyDoublyLinkedList(10);
linkedList.append(3);
linkedList.prepend(-3);
linkedList.insert(4,100)
linkedList.insert(2,1)
linkedList.remove(1)
linkedList.printItems();