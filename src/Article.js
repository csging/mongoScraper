import React,  {Component} from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';

class Article extends Component {
    constructor(props) {
        super(props);
        // this.state = {auth: false};
    }
    saveArticle: function(event){

    }
       
   render() {
       return(
        <div>
            {this.renderContent()}
        </div> 
       )   
   }
}

export default Article; 