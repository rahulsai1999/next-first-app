import "../styles.css"
import ListComp from '../components/ListComp'
import Axios from 'axios';

class ReloadClass extends React.Component{

    constructor()
    {
        super();
        this.state={showComponent:false,lat:"",long:"",data:{}}
    }

    onChangeLat=(event)=>{this.setState({lat:event.target.value})}
    onChangeLong=(event)=>{this.setState({long:event.target.value})}
    onButtonPress=()=>{
        Axios.get(`https://backend.grexter.in/nearby-buildings?include=location,landmarks,area,layouts,layout_prices,building_images&lon=${this.state.long}&lat=${this.state.lat}`).then((response)=>{
            console.log(response.data);
            this.setState({data:response.data})
            this.setState({showComponent:true})
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
                    {this.state.showComponent ? <ListComp data={this.state.data}/> :null}
                    </div>
                </div>
            </div>
        )
    }
}

export default ReloadClass;
