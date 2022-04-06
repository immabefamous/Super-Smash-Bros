const FighterScreen = ({isVisible, setVisible, selectedCharacter}) => {
    return(
        <div onClick={() => {setVisible(false) }} 
        className="fighter-screen" 
        style={{display: isVisible ? "block" : "none" }}>
        <span className="name-bg">{selectedCharacter.name}</span>
        <h2>{selectedCharacter.name}</h2>
        <img className="Char-portrait" width="100" height="100" src={`https://www.smashbros.com/assets_v2/img/fighter/${selectedCharacter.name.toLowerCase()}/main.png`} />
        <p className="fighter-desc">
          this is the greatest fighter
        </p>
      </div>
    )
}

export default FighterScreen