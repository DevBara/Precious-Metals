import React, { Component } from 'react'

export default class dNews extends Component {

    constructor(props) {
        super(props);
        
        let array = new Array(14);
        let NewsObject = {
          webTitle:'',
          description:'',
          urlToImage: '',
          url: String
        };
        array.fill(NewsObject);
        this.state = {
          isLoaded: false,
          data: array
        }
      }
    
      componentDidMount() {

        fetch(`https://newsapi.org/v2/everything?q=forex&apiKey=264e4eef82914a3984c95d7c0d8637a1`)
          .then(response => response.json()) 
          .then(
            result => {
             
             
              let newsArray=[];
              let newNewsObject;
 
              for(let i =0;i<14;i++){
                newNewsObject = {
                  title:result.articles[i].title,
                  description:result.articles[i].description,
                  urlToImage: result.articles[i].urlToImage,
                  url: result.articles[i].url
                };
                newsArray.push(newNewsObject);
              }
            
              this.setState({
                isLoaded: true,
                data: newsArray
              })
    
             
            }
          ).catch(e => console.log("there's a error", e))
      }
    

      render() {
        return (
          <div>
            <div className="">
            <div className="row">
            <ul>
              <li className="newsTitle">{this.state.data[0].title}</li>
              <br></br>
              <img src ={this.state.data[0].urlToImage} width="40%"/>
              <br></br>
              <li>{this.state.data[0].url}</li>
            </ul>
          </div>
          <div className="row">
            <ul>
              <li className="newsTitle">{this.state.data[1].title}</li>
              <br></br>
              <img src ={this.state.data[1].urlToImage} width="40%"/>
              <br></br>
              <li>href=`{this.state.data[1].url}`</li>
            </ul>
          </div>
          <div className="row">
            <ul>
              <li className="newsTitle">{this.state.data[2].title}</li>
              <br></br>
              <img src ={this.state.data[2].urlToImage} width="40%"/>
              <br></br>
              <li>{this.state.data[2].url}</li>
            </ul>
          </div>
          <div className="row">
            <ul>
              <li className="newsTitle">{this.state.data[3].title}</li>
              <br></br>
              <img src ={this.state.data[3].urlToImage} width="40%"/>
              <br></br>
              <li>{this.state.data[3].url}</li>
            </ul>
          </div>
          <div className="row">
            <ul>
              <li className="newsTitle">{this.state.data[4].title}</li>
              <br></br>
              <img src ={this.state.data[4].urlToImage} width="40%"/>
              <br></br>
              <li>{this.state.data[4].url}</li>
            </ul>
          </div>
          <div className="row">
            <ul>
              <li className="newsTitle">{this.state.data[5].title}</li>
              <br></br>
              <img src ={this.state.data[5].urlToImage} width="40%"/>
              <br></br>  
              <li>{this.state.data[5].url}</li>
            </ul>
          </div>
          <div className="row">
            <ul>
              <li className="newsTitle">{this.state.data[6].title}</li>
              <br></br>
              <img src ={this.state.data[6].urlToImage} width="40%"/>
              <br></br>
              <li>{this.state.data[6].url}</li>
            </ul>
          </div>
          <div className="row">
            <ul>
              <li className="newsTitle">{this.state.data[7].title}</li>
              <br></br>
              <img src ={this.state.data[7].urlToImage} width="40%"/>
              <br></br>
              <li>{this.state.data[7].url}</li>
            </ul>
          </div>
          <div className="row">
            <ul>
              <li className="newsTitle">{this.state.data[8].title}</li>
              <br></br>
              <img src ={this.state.data[8].urlToImage} width="40%"/>
              <br></br>
              <li>{this.state.data[8].url}</li>
            </ul>
          </div>
          <div className="row">
            <ul>
              <li className="newsTitle">{this.state.data[9].title}</li>
              <br></br>
              <img src ={this.state.data[9].urlToImage} width="40%"/>
              <br></br>
              <li>{this.state.data[9].url}</li>
            </ul>
          </div>
          <div className="row">
            <ul>
              <li className="newsTitle">{this.state.data[10].title}</li>
              <br></br>
              <img src ={this.state.data[10].urlToImage} width="40%"/>
              <br></br>
              <li>{this.state.data[10].url}</li>
            </ul>
          </div>
          <div className="row">
            <ul>
              <li className="newsTitle">{this.state.data[11].title}</li>
              <br></br>
              <img src ={this.state.data[11].urlToImage} width="40%"/>
              <br></br>
              <li>{this.state.data[11].url}</li>
            </ul>
          </div>
          <div className="row">
            <ul>
              <li className="newsTitle">{this.state.data[12].title}</li>
              <br></br>
              <img src ={this.state.data[12].urlToImage} width="40%"/>
              <br></br>
              <li>{this.state.data[12].url}</li>
            </ul>
          </div>
            </div>
           

          </div>
        )
      }
    }