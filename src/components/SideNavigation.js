

const SideNavigation = ({characters, isVisible}) => {
    return(
        <div className="side-nav" style={{ display: isVisible ? "blcok" : "none" }}>
            {
            characters.map((character) => {
                return(
                    <div>
                        <p>{character.name}</p>
                    </div>
                )
            })
        }
        </div>
    )
}
export default SideNavigation;