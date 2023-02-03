import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import ResultPage from '../ResultPage'
import {
  MainPageTotalContainer,
  ScoreCardContainer,
  NamesContainer,
  ScoreBox,
  ScoreValue,
  RulesButton,
  PopupContainer,
  PopUpImage,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class MainPage extends Component {
  state = {
    isResultPage: false,
    text: 'YOU WON',
    newArray: [choicesList[0], choicesList[1]],
    score: 0,
  }

  getResult = (option1, option2) => {
    if (option1.id === 'ROCK') {
      switch (option2.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (option1.id === 'PAPER') {
      switch (option2.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (option2.id) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'PAPER':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  restartGame = () => this.setState({isResultPage: false})

  changeScore = id => {
    const {score} = this.state
    const selectedOption = choicesList.filter(each => each.id === id)
    const randomOption =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    const resultObtained = this.getResult(selectedOption[0], randomOption)
    let appendScore = score
    if (resultObtained === 'YOU LOSE') {
      appendScore = score - 1
    } else if (resultObtained === 'YOU WON') {
      appendScore = score + 1
    } else {
      appendScore = score
    }
    this.setState({
      isResultPage: true,
      newArray: [selectedOption[0], randomOption],
      text: resultObtained,
      score: appendScore,
    })
  }

  render() {
    const {isResultPage, newArray, text, score} = this.state

    return (
      <>
        <MainPageTotalContainer>
          <ScoreCardContainer>
            <NamesContainer>
              {choicesList.map(each => (
                <p>{each.id}</p>
              ))}
            </NamesContainer>
            <ScoreBox>
              <p>Score</p>
              <ScoreValue>{score}</ScoreValue>
            </ScoreBox>
          </ScoreCardContainer>
          <ResultPage
            choicesList={choicesList}
            text={text}
            isResultPage={isResultPage}
            newArray={newArray}
            changeScore={this.changeScore}
            restartGame={this.restartGame}
          />

          <Popup modal trigger={<RulesButton type="button">Rules</RulesButton>}>
            {close => (
              <>
                <PopupContainer>
                  <PopUpImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                  <RiCloseLine type="button" onClick={() => close()} />
                </PopupContainer>
              </>
            )}
          </Popup>
        </MainPageTotalContainer>
      </>
    )
  }
}

export default MainPage
