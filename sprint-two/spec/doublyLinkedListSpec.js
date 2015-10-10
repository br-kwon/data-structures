describe('doublyLinkedList', function(){
  var emptyLinkedList;
  var threeItemLinkedList;

  beforeEach(function(){
    emptyLinkedList = new DoublyLinkedList();
    threeItemLinkedList = new DoublyLinkedList();
    threeItemLinkedList.addToTail(5);
    threeItemLinkedList.addToTail(6);
    threeItemLinkedList.addToTail(7);
  });

  it('should have a head and tail', function() {
    expect(emptyLinkedList).to.have.property("head");
    expect(emptyLinkedList).to.have.property("tail");
  });

  it('should have methods named "addToTail", "insert", "remove", "contains", "each"', function() {
    expect(emptyLinkedList.addToTail).to.be.a("function");
    expect(emptyLinkedList.insert).to.be.a("function");
    expect(emptyLinkedList.remove).to.be.a("function");
    expect(emptyLinkedList.contains).to.be.a("function");
    expect(emptyLinkedList.each).to.be.a("function");
  });

  describe('addToTail', function() {
    it('should update value of tail', function() {
      emptyLinkedList.addToTail(5);
      expect(emptyLinkedList.tail.value).to.equal(5);
      emptyLinkedList.addToTail(6);
      expect(emptyLinkedList.tail.value).to.equal(6);
    });

    it('should add to head when list is empty', function() {
      emptyLinkedList.addToTail(5);
      expect(emptyLinkedList.head.value).to.equal(5);
    });

    it('should update the previous and next properties of current and former tail', function(){
      emptyLinkedList.addToTail(5);
      emptyLinkedList.addToTail(6);
      expect(emptyLinkedList.tail.previous.value).to.equal(5);
      expect(emptyLinkedList.tail.previous.next.value).to.equal(6);
    });
  });

  describe('contains', function() {
    it('should return true for present value', function(){
    
      expect(threeItemLinkedList.contains(5)).to.equal(true);
      expect(threeItemLinkedList.contains(6)).to.equal(true);
      expect(threeItemLinkedList.contains(7)).to.equal(true);
    });

    it('should return null for absent value', function(){
      emptyLinkedList.addToTail(5);
      expect(emptyLinkedList.contains(6)).to.equal(null);
    });
  });

  describe('each', function(){
    it('should perfrom callback on each value', function(){
      var arr = [];
      threeItemLinkedList.each(function(value){arr.push(value);});
      expect(arr).to.eql([5,6,7]);
    });
  });

  describe('insert', function(){
    it('should insert value at correct index', function(){
      
    });
  });

});