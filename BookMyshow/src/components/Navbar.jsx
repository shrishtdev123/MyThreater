

export const Navbar = () => {
  return (
    <div className="logo">
          <div className="left">
                <div className="logobar">SHOW</div>
                <div className="search">
                    <input type="text" 
                       placeholder="Enter movie,events,show"
                       className="search_bar"
                     />
                </div>
          </div>
          <div className="right">
                <div className="box">Delhi NCR</div>
                <div className="box">
                     <button>signin</button>
                </div>
                <div className="box">=</div>
          </div>
    </div>
  )
}
