
function CellBox(dom, ch) {
    this.tagSet = document.createElement("div");
    this.tagSet.className = "outerBox";
    this.ulTag = document.createElement("ul");
    this.ulTag.className = "innerBox";
    this.li1 = document.createElement("li");
    this.li1.innerText = ch;
    this.li2 = document.createElement("li");
    this.li2.innerText = "?";
    
    dom.appendChild(this.tagSet);
    this.tagSet.appendChild(this.ulTag);
    this.ulTag.appendChild(this.li1);
    this.ulTag.appendChild(this.li2);
    
    this.tagSet.onclick = this.clickEventHandler;

    //var THIS = this;
    setTimeout(() => {
        // function 콜백함수에서 this는 window이다.
        // 화살표 함수에서 this는 생성된 객체가 된다.
        this.closeCard();
    }, 2000);
}
CellBox.prototype.clickEventHandler = function(event) {
    const innerBox = this.children[0];
    innerBox.style.top = '0px';
}
CellBox.prototype.closeCard = function(event) {
    const innerBox = this.ulTag;
    innerBox.style.top = '-100px';
}

const puzzle = document.querySelector('.puzzle');
for(var i=0; i<16; i++) {
    new CellBox(puzzle, String.fromCharCode(i%8+65));
}

var cells = puzzle.querySelectorAll('.innerBox li:nth-child(1)');
for(var i=0; i<50; i++) {
    var idx1 = Math.floor(Math.random()*cells.length);
    var idx2 = Math.floor(Math.random()*cells.length);

    var temp = cells[idx1].innerText;
    cells[idx1].innerText = cells[idx2].innerText;
    cells[idx2].innerText = temp;
}
