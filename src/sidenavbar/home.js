

import SideNav from "./sidenav"
import Content from "./content"
import "./home.css"

const Home=()=>{



    return(
        <div>

<img style={{height:"350px"}} src="https://static.toiimg.com/photo/72975551.cms" />
            

        <div className="rw">
            <div className="cols">
                <SideNav />
            </div>
            <div className="cols">
                <Content/>
            </div>

        </div>
        <img style={{height:"350px"}} src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" />
        </div>
    )
}

export default Home