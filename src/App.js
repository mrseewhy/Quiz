import React, { Component } from 'react';
import './App.css';
import quizService from './quizService'
import QuestionBox from './QuestionBox'
import Result from './Result';




class App extends Component {

  state = {
    questions: [],
    score: 0,
    responses: 0,
  }

  getQuestions = () =>{
    quizService().then(res=> this.setState({
      questions: res
    }))
  }

  componentDidMount(){
    this.getQuestions()
  }

  playAgain = () =>{
    this.getQuestions();
    this.setState({
      score: 0,
      responses: 0
    })
  }

  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer){
        this.setState({score: this.state.score + 1})
    }
    this.setState({responses: this.state.responses < 5 ? this.state.responses + 1 : 5})
  }



  render() {
    return (
      <div className="container">
        <div className="title">Quiz</div>

        {this.state.questions.length > 0 && 
          this.state.responses < 5 &&
          this.state.questions.map(
          ({question, answers, correct, questionId}) =>
          <QuestionBox 
          key={questionId} 
          question={question}
          options={answers}
          selected = {answer=> this.computeAnswer(answer, correct)} 
          />
          )}

          {this.state.responses === 5 ? (
            <Result score={this.state.score} playAgain={this.playAgain}></Result>
          ): null}

      </div>
      
    );
  }


 
  

}

export default App;
