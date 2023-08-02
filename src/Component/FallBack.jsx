import React from 'react'
import { useNavigate } from "react-router-dom"
import Button from "../UI/Button";
import classes from './FallBack.module.css';

const FallBack = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.div}>
        <h3 className={classes.header}>404 not found!</h3>
        <Button className={classes.btn} onClick={() => navigate('/')}>Go Back</Button>
    </div>
  )
}

export default FallBack