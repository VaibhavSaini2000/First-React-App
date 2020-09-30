import React,{Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
        this.state={
        }
        console.log('DishdetailComponent constructor is invoked');
    }

    renderDish(dish){
        if(dish!=null){
            return(
                <div  className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name}/>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
    
    renderComments(dish){
        if(dish!=null){
            return(
                <div  className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul class = "list-unstyled">
                        {dish.comments.map((cmnt, i) => (
                            <li key={i}>
                                {cmnt.comment} <br/> --{cmnt.author} {cmnt.date} <br/>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
    
    render(){
        
        const selectedDish=this.props.selectedDish;

        console.log('DishdetailComponent render is invoked');

        return(
            <div className="row">
                {this.renderDish(selectedDish)}
                {this.renderComments(selectedDish)}
            </div>
        );
    }
}

export default DishDetail;