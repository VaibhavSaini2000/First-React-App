import React from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';

    function RenderDish({dish}){
        if(dish!=null){
            return(
                <div  className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name}/>
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
    
    function RenderComments({dish}){
        if(dish!=null){
            return(
                <div  className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul class = "list-unstyled">
                        {dish.comments.map((cmnt, i) => (
                            <li key={i}>
                                {cmnt.comment} <br/> --{cmnt.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit' }).format(new Date(Date.parse(cmnt.date)))} <br/>
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
    
    const DishDetail = (props) => {
        
        const selectedDish = props.dish;

        console.log('DishdetailComponent render is invoked');

        return(
            <div class="container">
            <div className="row">
                <RenderDish dish = {selectedDish} />
                <RenderComments dish ={selectedDish} />
            </div>
            </div>
        );
    }

export default DishDetail;