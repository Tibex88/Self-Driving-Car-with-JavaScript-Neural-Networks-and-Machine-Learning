class Controls {
    constructor() {
        this.left = false;
        this.right = false;
        this.reverse = false;
        this.forward = false;

        this.#addKeyListeners();
    }
    #addKeyListeners(){
        // when moving
        document.onkeydown=(event)=>{
            switch(event.key){
                case "ArrowLeft" :
                    this.left=true;
                    break;
                case "ArrowRight":
                    this.right=true;
                    break;
                case "ArrowDown":
                    this.reverse=true;
                    break;
                case "ArrowUp":
                    this.forward=true;
                    break;
            }
        }
        // when not moving
        document.onkeyup=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left=false;
                    break;
                    case "ArrowRight":
                        this.right=false;
                        break;
                case "ArrowDown":
                    this.reverse=false;
                    break;
                    case "ArrowUp":
                        this.forward=false;
                        break;
                    }
        }
    }
}