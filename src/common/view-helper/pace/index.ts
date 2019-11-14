import "./pace.css"
import objKeeper from "../../object-keeper"
export default class Pace{
    private readonly wrapper:HTMLDivElement;
    private readonly inner:HTMLSpanElement;
    private targetProgress:number = 0;
    private currentProgress:number = 0;
    public static get instance(){
        return objKeeper.get("pace");
    }
    private static setInstance(pace:Pace){
        if(!Pace.instance){
            objKeeper.put("pace",pace);
        }
    }
    public constructor(element:HTMLDivElement){
        this.wrapper = element;
        this.wrapper.classList.add("pace-wrapper");
        this.inner = document.createElement('div');
        this.inner.classList.add("pace-inner");
        this.inner.style.width = "0%";
        this.wrapper.appendChild(this.inner);
        Pace.setInstance(this);
    }
    public updateProgress(progress:number){
        if(progress <= 0){
            progress = 0;
        }else if(progress >= 100){
            progress = 100;
        }
        this.targetProgress = progress;
        this.playNextFrameAnimation();
    }
    private playNextFrameAnimation(){
        this.inner.style.width = `${this.currentProgress}%`
        if(this.currentProgress === this.targetProgress){
            this.animationFinished();
            return;
        }else{
            requestAnimationFrame(this.playNextFrameAnimation.bind(this));
        }
        this.currentProgress++;
    }
    private animationFinished(){
        if(this.targetProgress <= 0 || this.targetProgress >= 100){
            this.hide();
        }
    }
    private hide(){
        this.wrapper.style.visibility = "hidden";
    }
}