import {
  ResultsContainer,
  IndividualBox,
  ParagraphText,
  OptionImageInResult,
  PlayAgainButton,
  IndividualBoxContainer,
  AllOptionsContainer,
} from './styledComponents'

const ResultPage = props => {
  const {
    choicesList,
    text,
    isResultPage,
    newArray,
    changeScore,
    restartGame,
  } = props

  return (
    <>
      <AllOptionsContainer>
        {!isResultPage && (
          <>
            <button
              type="button"
              data-testid="rockButton"
              onClick={() => changeScore(choicesList[0].id)}
            >
              <OptionImageInResult
                src={choicesList[0].imageUrl}
                alt={choicesList[0].id}
                key={choicesList[0].id}
              />
            </button>
            <button
              type="button"
              data-testid="scissorsButton"
              onClick={() => changeScore(choicesList[1].id)}
            >
              <OptionImageInResult
                src={choicesList[1].imageUrl}
                alt={choicesList[1].id}
                key={choicesList[1].id}
              />
            </button>
            <button
              type="button"
              data-testid="paperButton"
              onClick={() => changeScore(choicesList[2].id)}
            >
              <OptionImageInResult
                src={choicesList[2].imageUrl}
                alt={choicesList[2].id}
                key={choicesList[2].id}
              />
            </button>
          </>
        )}
      </AllOptionsContainer>

      {isResultPage && (
        <ResultsContainer>
          <IndividualBoxContainer>
            <IndividualBox>
              <ParagraphText>YOU</ParagraphText>
              <OptionImageInResult
                src={newArray[0].imageUrl}
                alt="your choice"
              />
            </IndividualBox>
            <IndividualBox>
              <ParagraphText>OPPONENT</ParagraphText>

              <OptionImageInResult
                src={newArray[1].imageUrl}
                alt="opponent choice"
              />
            </IndividualBox>
          </IndividualBoxContainer>
          <div>
            <ParagraphText>{text}</ParagraphText>
            <PlayAgainButton type="button" onClick={restartGame}>
              Play Again
            </PlayAgainButton>
          </div>
        </ResultsContainer>
      )}
    </>
  )
}

export default ResultPage
