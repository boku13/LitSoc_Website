import React from 'react'
import { useState } from 'react'
// import ItemMain from './'
// import {B21CS073_Lab_Assignment_4} from '../../data/B21CS073_Lab_Assignment_4.pdf'

export default function PuzzleCard(props) {

    let title = props.title
    let puzzle = 'src/media/' + props.puzzle
    let image = props.image
    let author = props.author

    return (
        <>
            <a className='puzzle-card-anchor' href={puzzle} target='blank'>
                <div className='puzzle-card'>
                    <div className='puzzles puzzle-card-image-container'>
                        <div className='puzzles puzzle-card-image' style={{backgroundImage: `url(${image})`}}>
                        </div>
                        {/* <div className='puzzles puzzle-card-inner-border'></div> */}
                    </div>
                    <div className='puzzles puzzle-card-content-container'>
                        <div className='puzzles puzzle-card-title'>{title}</div>
                        <div className='puzzles puzzle-card-author'>{author}</div>
                    </div>
                </div>
            </a>
        </>
    )
}
