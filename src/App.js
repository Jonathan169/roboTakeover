import React, {Component }from 'react';
import Nav from "./components/navbar"
import Game from "./components/game"
import './App.css';



class App extends React.Component {
  state={
    imageArr:["./images/c3po.jpg","./images/chillbot.jpg","./images/hightbot.jpg","./images/r2d2.jpg","./images/robo.jpg","./images/terminator.jpg"],
    clicked:[],
    score:0,
    topscore:0,
    statements:""
  }
  shuffle = random => {
  for (let j = random.length - 1; j > 0; j--) {
    const randomizer = Math.floor(Math.random() * (j + 1));
    [random[j], random[randomizer]] = [random[randomizer], random[j]];
  }
  this.setState({imageArr:random});
};
  clicked=(id)=>{
    
    this.state.clicked.unshift(this.state.imageArr[id]);
    if(this.state.clicked[0]!==this.state.clicked[1]&&
      this.state.imageArr[id]!==this.state.imageArr[Math.floor(Math.random()*2)]&&
      this.state.imageArr[id]!==this.state.imageArr[Math.floor(Math.random()*3)+2]){
        console.log("right")
        this.setState({statements:"correct",score:this.state.score +1})
    }
    else{
      console.log("wrong")
      this.setState({statements:"Incorrect",score:0,clicked:[]})
    }
    this.shuffle(this.state.imageArr)
    this.state.score>this.state.topscore?this.setState({topscore:this.state.score}):
    console.log("not quite")
  }
  render() {
    return <div className="conatiner">
    <Nav guess={this.state.statements} top={this.state.topscore} score={this.state.score}></Nav>
    <Game images={this.state.imageArr} func={this.clicked}></Game>
    </div>
  }

}

export default App;
