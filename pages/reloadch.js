import "../styles.css"
import Axios from 'axios';

class ReloadClass extends React.Component{

    constructor()
    {
        super();
        this.state={lat:"",long:"",data:{}}
    }

    onChangeLat=(event)=>{this.setState({lat:event.target.value})}
    onChangeLong=(event)=>{this.setState({long:event.target.value})}
    onButtonPress=()=>{
        Axios.get(`https://backend.grexter.in/nearby-buildings?include=location,landmarks,area,layouts,layout_prices,building_images&lon=${this.state.long}&lat=${this.state.lat}`).then((response)=>{
            console.log(response);
            this.setState({data:response.data})
        })
    }

    render(){
        return(
            <div>
                <div class="container">
                    {/* <img src="https://ik.imagekit.io/ckwplhmjdq5od/triangles-1430105_1280_BkOhO_ao4.png" height={300}></img> */}
                    <input onChange={this.onChangeLat.bind(this)} class="form-control" placeholder="Latitude"></input>
                    <input onChange={this.onChangeLong.bind(this)} class="form-control" placeholder="Longitude" style={{marginTop:10}}></input>
                    <button onClick={this.onButtonPress.bind(this)} class="btn btn-success" style={{marginTop:10,marginLeft:60}}>Search</button>
                    <div>
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default ReloadClass;
