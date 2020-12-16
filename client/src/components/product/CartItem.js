import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { IconButton, Tooltip } from '@material-ui/core';
export default function Cartitem(props) {
    const {index, key,photo,name,desc,category,quantity,totalPrice, onRemoveItem} = props
  
    return (
        <>
            <div className="row d-flex justify-content-center border-top" key={key}>
                <div className="col-5">
                    <div className="row d-flex">
                    <div className="book">
                        <img
                        src={photo}
                        className="book-img"
                        />
                    </div>
                    <div className="my-auto flex-column d-flex pad-left">
                        <h6 className="mob-text">{name}</h6>
                        <p className="mob-text">{desc}</p>
                    </div>
                    </div>
                </div>
                <div className="my-auto col-7">
                    <div className="row text-right">
                    <div className="col-3">
                        <p className="mob-text">{category}</p>
                    </div>
                    <div className="col-3">
                        <div className="row d-flex justify-content-end px-3">
                        <p className="mb-0" id="cnt1">
                            {quantity}
                        </p>
                        </div>
                    </div>
                    <div className="col-3">
                        <h6 className="mob-text">${totalPrice}</h6>
                    </div>
                    <div className="col-3">
                    <Tooltip title="Delete">
                    <IconButton onClick={() => onRemoveItem(index)} aria-label="delete" style={{bottom: '35%'}}>
                        <DeleteOutlineIcon/>
                    </IconButton>
                    </Tooltip>
                    </div>
                    </div>
                </div>
                </div>
        </>
    )
}
